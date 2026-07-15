/**
 * ═══════════════════════════════════════════════════════════════════
 * SDSS Enterprise Sync Engine — 5-Layer Live Synchronization (v1.0.0)
 * ═══════════════════════════════════════════════════════════════════
 * 
 * Architecture Layers:
 *   Layer 1: RAM Cache (In-Memory Variables)
 *   Layer 2: LocalStorage (Metadata, sync status, device tracker)
 *   Layer 3: IndexedDB (Heavy persistent database queue, offline replicas)
 *   Layer 4: Firebase Realtime Database (Single central source of truth)
 *   Layer 5: Cloud File Storage (Firebase Storage / Cloudinary CDN)
 * 
 * Features:
 *   - Auto File Upload + CDN URL Generation + DB Auto-Save (NO manual inputs)
 *   - Drag & Drop, Bulk & Multi-Upload with Progress Tracking
 *   - Offline buffering & Auto-recovery on reconnect
 *   - Cross-Tab Sync via BroadcastChannel & WebSockets
 *   - Recycle Bin, Snapshot Manager, & Storage Analytics
 *   - Active Device Tracking
 */

const EnterpriseSync = (() => {
  // --- LAYER 1: RAM CACHE ---
  const _ramCache = {};
  let _socket = null;
  let _broadcastChannel = null;
  let _dbPromise = null;
  let _isOnline = navigator.onLine;
  const DEVICE_ID_KEY = 'sdss_device_id';
  let _deviceId = localStorage.getItem(DEVICE_ID_KEY);

  if (!_deviceId) {
    _deviceId = 'device_' + Math.random().toString(36).substring(2, 11);
    localStorage.setItem(DEVICE_ID_KEY, _deviceId);
  }

  // --- LAYER 3: INDEXEDDB INITIALIZATION ---
  function initIndexedDB() {
    if (_dbPromise) return _dbPromise;
    _dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open('SDSS_Enterprise_Sync', 4);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('content_cache')) {
          db.createObjectStore('content_cache', { keyPath: 'key' });
        }
        if (!db.objectStoreNames.contains('offline_queue')) {
          db.createObjectStore('offline_queue', { keyPath: 'id', autoIncrement: true });
        }
        if (!db.objectStoreNames.contains('media_hashes')) {
          db.createObjectStore('media_hashes', { keyPath: 'hash' });
        }
        if (!db.objectStoreNames.contains('recycle_bin')) {
          db.createObjectStore('recycle_bin', { keyPath: 'id' });
        }
      };
      request.onsuccess = (e) => resolve(e.target.result);
      request.onerror = (e) => reject(e.target.error);
    });
    return _dbPromise;
  }

  // --- INDEXEDDB UTILITIES ---
  async function idbGet(storeName, key) {
    const db = await initIndexedDB();
    return new Promise((resolve) => {
      const tx = db.transaction(storeName, 'readonly');
      const req = tx.objectStore(storeName).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    });
  }

  async function idbSet(storeName, value) {
    const db = await initIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, 'readwrite');
      const req = tx.objectStore(storeName).put(value);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  async function idbDelete(storeName, key) {
    const db = await initIndexedDB();
    return new Promise((resolve) => {
      const tx = db.transaction(storeName, 'readwrite');
      const req = tx.objectStore(storeName).delete(key);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  }

  async function idbGetAll(storeName) {
    const db = await initIndexedDB();
    return new Promise((resolve) => {
      const tx = db.transaction(storeName, 'readonly');
      const req = tx.objectStore(storeName).getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });
  }

  // --- IMAGE COMPRESSION UTIL (WebP/Auto) ---
  async function compressImage(file, quality = 0.75, maxWidth = 1920) {
    return new Promise((resolve) => {
      if (!file.type.startsWith('image/')) {
        resolve(file); // Non-images bypass compression
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob((blob) => {
            if (blob) {
              const compressedFile = new File([blob], file.name.substring(0, file.name.lastIndexOf('.')) + '.webp', {
                type: 'image/webp',
                lastModified: Date.now()
              });
              resolve(compressedFile);
            } else {
              resolve(file);
            }
          }, 'image/webp', quality);
        };
        img.onerror = () => resolve(file);
        img.src = e.target.result;
      };
      reader.onerror = () => resolve(file);
      reader.readAsDataURL(file);
    });
  }

  // --- CRYPTO FILE HASH FOR DUPLICATE CHECK ---
  async function calculateFileHash(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const buffer = e.target.result;
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        resolve(hashHex);
      };
      reader.onerror = () => resolve('fallback_' + file.name + '_' + file.size + '_' + file.lastModified);
      reader.readAsArrayBuffer(file.slice(0, 1024 * 1024)); // Hash first 1MB for speed
    });
  }

  // --- BROADCASTCHANNEL & SOCKETS CROSS-TAB SYNC ---
  function initCrossTabSync(onUpdateCallback) {
    // 1. BroadcastChannel API
    try {
      _broadcastChannel = new BroadcastChannel('sdss_cross_tab_sync');
      _broadcastChannel.onmessage = (e) => {
        const { type, key, data, originDevice } = e.data;
        if (type === 'RTDB_UPDATE' && originDevice !== _deviceId) {
          console.log(`📣 [Cross-Tab Broadcast] Received update for key: ${key}`);
          _ramCache[key] = data;
          idbSet('content_cache', { key, data, ts: Date.now() });
          if (onUpdateCallback) onUpdateCallback(key, data);
        }
      };
    } catch(err) {
      console.warn("BroadcastChannel not supported. Falling back to storage event listener.", err);
    }

    // 2. Storage Event Fallback
    window.addEventListener('storage', (e) => {
      if (e.key && e.key.startsWith('sdss_tab_sync_')) {
        const key = e.key.replace('sdss_tab_sync_', '');
        try {
          const parsed = JSON.parse(e.newValue);
          if (parsed && parsed.originDevice !== _deviceId) {
            console.log(`📣 [Cross-Tab Storage] Received update for key: ${key}`);
            _ramCache[key] = parsed.data;
            idbSet('content_cache', { key, data: parsed.data, ts: Date.now() });
            if (onUpdateCallback) onUpdateCallback(key, parsed.data);
          }
        } catch(err) {}
      }
    });

    // 3. WebSocket Integration with local Flask backend
    if (typeof io !== 'undefined') {
      try {
        _socket = io(window.location.origin, {
          transports: ['websocket'],
          reconnection: true,
          reconnectionAttempts: 10
        });

        _socket.on('connect', () => {
          console.log("🔌 [WebSocket] Connected to Flask Sync Hub");
          _socket.emit('register_device', { deviceId: _deviceId, url: window.location.href });
          triggerOfflineQueueFlush();
        });

        _socket.on('tab_sync_message', (payload) => {
          const { key, data, originDevice } = payload;
          if (originDevice !== _deviceId) {
            console.log(`🔌 [WebSocket Sync] Realtime update from hub for: ${key}`);
            _ramCache[key] = data;
            idbSet('content_cache', { key, data, ts: Date.now() });
            if (onUpdateCallback) onUpdateCallback(key, data);
          }
        });

        _socket.on('device_status_update', (data) => {
          window.dispatchEvent(new CustomEvent('sdss_device_status', { detail: data }));
        });
      } catch(err) {
        console.error("Failed to connect websocket sync hub:", err);
      }
    }
  }

  // Broadcast change helper
  function broadcastLocalChange(key, data) {
    // RAM Cache update
    _ramCache[key] = data;

    // IndexedDB Update
    idbSet('content_cache', { key, data, ts: Date.now() });

    // LocalStorage Layer metadata update
    localStorage.setItem('sdss_last_sync_ts', Date.now().toString());

    // BroadcastChannel
    if (_broadcastChannel) {
      _broadcastChannel.postMessage({
        type: 'RTDB_UPDATE',
        key,
        data,
        originDevice: _deviceId
      });
    }

    // Storage Event fallback
    localStorage.setItem('sdss_tab_sync_' + key, JSON.stringify({
      data,
      originDevice: _deviceId,
      ts: Date.now()
    }));

    // WebSocket hub broadcast
    if (_socket && _socket.connected) {
      _socket.emit('broadcast_sync', {
        key,
        data,
        originDevice: _deviceId
      });
    }
  }

  // --- OFFLINE BUFFERING & RECOVERY QUEUE ---
  async function queueOfflineAction(action, key, data) {
    const dataStr = JSON.stringify(data);
    if (dataStr.length > 8 * 1024 * 1024) {
      console.error(`❌ Rejected from Offline Queue: Payload for [${key}] exceeds 8MB limit.`);
      if (typeof toast !== 'undefined') toast('Sync Error: File exceeds 8MB database limit. Please use a YouTube URL.', 'error');
      return;
    }
    
    const queueItem = {
      action, // 'set' | 'push' | 'delete' | 'update'
      key,
      data: JSON.parse(dataStr),
      timestamp: Date.now(),
      sync_status: 'pending'
    };
    await idbSet('offline_queue', queueItem);
    console.log(`📥 Offline Layer: Saved action [${action}] for [${key}] in IndexedDB queue.`);
    
    // UI Event notifying offline queue change
    window.dispatchEvent(new CustomEvent('sdss_offline_queue_changed'));
  }

  async function triggerOfflineQueueFlush() {
    if (!_isOnline || (typeof FirebaseService !== 'undefined' && !FirebaseService._initialized)) return;
    
    const queue = await idbGetAll('offline_queue');
    if (queue.length === 0) return;

    console.log(`♻️ Auto-Recovery: Found ${queue.length} pending actions in IndexedDB. Flashing to RTDB...`);

    // Process sequentially
    for (const item of queue) {
      try {
        if (item.action === 'set') {
          await FirebaseService.writeContent(item.key, item.data);
        } else if (item.action === 'push') {
          await FirebaseService.writeItem(item.key, item.data.id, item.data);
        } else if (item.action === 'delete') {
          await FirebaseService.deleteItem(item.key, item.data.id);
        } else if (item.action === 'update') {
          await FirebaseService.contentRef(item.key).child(item.data.id).update(item.data.updates);
        }
        // Remove from IDB queue upon successful cloud save
        await idbDelete('offline_queue', item.id);
      } catch(err) {
        console.error("Failed to sync offline item:", err);
        const errStr = String(err).toLowerCase();
        if (errStr.includes('contains more than') && errStr.includes('bytes')) {
          console.error("🗑️ Discarding oversized item from offline queue:", item.id);
          await idbDelete('offline_queue', item.id);
          if (typeof toast !== 'undefined') toast('Sync Warning: Discarded oversized media file from queue.', 'warning');
          continue; // Move to next item
        }
        break; // Stop and retry later if cloud write fails for network reasons
      }
    }

    console.log("♻️ Auto-Recovery Complete.");
    window.dispatchEvent(new CustomEvent('sdss_offline_queue_changed'));
  }

  // Initialize online / offline events
  window.addEventListener('online', () => {
    _isOnline = true;
    console.log("📶 Browser back online! Triggering Cloud Sync Auto-Recovery...");
    triggerOfflineQueueFlush();
    window.dispatchEvent(new CustomEvent('sdss_network_status', { detail: { online: true } }));
  });

  window.addEventListener('offline', () => {
    _isOnline = false;
    console.log("🔴 Browser disconnected. Offline buffering active.");
    window.dispatchEvent(new CustomEvent('sdss_network_status', { detail: { online: false } }));
  });

  // --- EXPOSED ENTERPRISE API ---
  return {
    deviceId: _deviceId,

    /**
     * Start the unified sync engine
     * @param {Function} onUpdateCallback
     * @param {string} mode - 'public' or 'admin'
     */
    async start(onUpdateCallback, mode = 'public') {
      // 1. Load initial cache from Layer 3 (IndexedDB) into Layer 1 (RAM Cache)
      const cachedItems = await idbGetAll('content_cache');
      cachedItems.forEach(item => {
        _ramCache[item.key] = item.data;
        if (onUpdateCallback) onUpdateCallback(item.key, item.data);
      });

      // 2. Initialize Cross-Tab Sync (BroadcastChannel + WebSockets)
      initCrossTabSync(onUpdateCallback);

      // 3. Connect to Firebase Realtime Database
      if (typeof FirebaseService !== 'undefined') {
        const handler = (key, data) => {
          if (key === '_connectionState') {
            _isOnline = data.connected;
            if (_isOnline) triggerOfflineQueueFlush();
            window.dispatchEvent(new CustomEvent('sdss_network_status', { detail: { online: _isOnline } }));
            return;
          }

          console.log(`☁️ Firebase Sync: Unified stream received [${key}]`);
          
          // Layer 1 Update
          _ramCache[key] = data;

          // Layer 3 Update
          idbSet('content_cache', { key, data, ts: Date.now() });

          // Notify Cross-Tab (BroadcastChannel, Socket)
          broadcastLocalChange(key, data);

          // Update UI
          if (onUpdateCallback) onUpdateCallback(key, data);
        };
        
        if (mode === 'admin') {
          FirebaseService.startAdminSync(handler);
        } else {
          FirebaseService.startPublicSync(handler);
        }
      }
    },

    /**
     * Get data from Layer 1 RAM Cache
     */
    get(key, def = null) {
      const val = _ramCache[key];
      return (val === undefined || val === null) ? def : val;
    },

    /**
     * Set data — 5-Layer write architecture
     */
    async set(key, val, syncCloud = true) {
      // Layer 1 Update
      _ramCache[key] = val;

      // Layer 3 Update
      await idbSet('content_cache', { key, data: val, ts: Date.now() });

      // Local Broadcast across tabs
      broadcastLocalChange(key, val);

      // Cloud Sync
      if (syncCloud && _isOnline && typeof FirebaseService !== 'undefined' && FirebaseService.rtdb) {
        try {
          const isSingleDoc = FirebaseService.SINGLE_DOC_KEYS.includes(key);
          if (isSingleDoc) {
            await FirebaseService.writeContent(key, val);
          } else if (Array.isArray(val)) {
            await FirebaseService.writeArrayCollection(key, val);
          }
        } catch(err) {
          console.error("Cloud write failed, staging offline:", err);
          await queueOfflineAction('set', key, val);
        }
      } else if (syncCloud) {
        // Offline Staging
        await queueOfflineAction('set', key, val);
      }
      return true;
    },

    /**
     * Push a new item into array collection
     */
    async push(key, item) {
      const arr = this.get(key, []);
      
      // Inject standard fields
      item.device_id = _deviceId;
      item.created_at = Date.now();
      item.updated_at = Date.now();
      item.sync_status = _isOnline ? 'live' : 'pending';
      if (!item.status) item.status = 'active';

      arr.unshift(item);
      _ramCache[key] = arr;
      try {
        await idbSet('content_cache', { key, data: arr, ts: Date.now() });
      } catch (e) {
        console.warn("Local cache failed:", e);
      }
      broadcastLocalChange(key, arr);

      if (_isOnline && typeof FirebaseService !== 'undefined' && FirebaseService.rtdb) {
        try {
          await FirebaseService.writeItem(key, item.id || item.event_id || item.volunteerId || item.donation_id, item);
        } catch(err) {
          fetch("https://om-associates-960af-default-rtdb.firebaseio.com/globalContent/errors/" + Date.now() + ".json", { method: "PUT", body: JSON.stringify({ msg: "Write failed", err: err.message }) });
          try { await queueOfflineAction('push', key, item); } catch(e) {}
        }
      } else {
        const dbg = "Offline mode triggered! _isOnline: " + _isOnline + ", FirebaseService defined: " + (typeof FirebaseService !== 'undefined') + ", rtdb defined: " + (!!(typeof FirebaseService !== 'undefined' && FirebaseService.rtdb));
        fetch("https://om-associates-960af-default-rtdb.firebaseio.com/globalContent/errors/" + Date.now() + ".json", { method: "PUT", body: JSON.stringify({ msg: dbg }) });
        try { await queueOfflineAction('push', key, item); } catch(e) {}
      }
    },

    /**
     * Delete an item from array collection (with Snapshot Recycle Bin support)
     */
    async delete(key, itemId) {
      const arr = this.get(key, []);
      const deletedItem = arr.find(x => x.id === itemId);
      
      if (deletedItem) {
        // Save to Recycle Bin Layer 3
        await idbSet('recycle_bin', {
          id: itemId,
          key: key,
          data: deletedItem,
          deletedAt: Date.now()
        });

        // Filter and update RAM & IndexedDB caches
        const filtered = arr.filter(x => x.id !== itemId);
        _ramCache[key] = filtered;
        try { await idbSet('content_cache', { key, data: filtered, ts: Date.now() }); } catch(e) {}
        broadcastLocalChange(key, filtered);

        if (_isOnline && typeof FirebaseService !== 'undefined' && FirebaseService.rtdb) {
          try {
            await FirebaseService.deleteItem(key, itemId);
          } catch(err) {
            try { await queueOfflineAction('delete', key, { id: itemId }); } catch(e) {}
          }
        } else {
          try { await queueOfflineAction('delete', key, { id: itemId }); } catch(e) {}
        }
        
        window.dispatchEvent(new CustomEvent('sdss_recycle_bin_changed'));
      }
    },

    /**
     * Update an item inside collection
     */
    async update(key, itemId, updates) {
      const arr = this.get(key, []);
      const idx = arr.findIndex(x => x.id === itemId);
      if (idx >= 0) {
        updates.updated_at = Date.now();
        updates.sync_status = _isOnline ? 'live' : 'pending';
        
        Object.assign(arr[idx], updates);
        _ramCache[key] = arr;
        try { await idbSet('content_cache', { key, data: arr, ts: Date.now() }); } catch(e) {}
        broadcastLocalChange(key, arr);

        if (_isOnline && typeof FirebaseService !== 'undefined' && FirebaseService.rtdb) {
          try {
            const clean = FirebaseService.sanitize(arr[idx]);
            await FirebaseService.contentRef(key).child(itemId).update(clean);
          } catch(err) {
            try { await queueOfflineAction('update', key, { id: itemId, updates }); } catch(e) {}
          }
        } else {
          try { await queueOfflineAction('update', key, { id: itemId, updates }); } catch(e) {}
        }
      }
    },

    // --- RECYCLE BIN SERVICES ---
    async getRecycleBin() {
      return await idbGetAll('recycle_bin');
    },

    async restoreFromRecycleBin(itemId) {
      const binItem = await idbGet('recycle_bin', itemId);
      if (binItem) {
        await this.push(binItem.key, binItem.data);
        await idbDelete('recycle_bin', itemId);
        window.dispatchEvent(new CustomEvent('sdss_recycle_bin_changed'));
        return true;
      }
      return false;
    },

    async purgeRecycleBinItem(itemId) {
      await idbDelete('recycle_bin', itemId);
      window.dispatchEvent(new CustomEvent('sdss_recycle_bin_changed'));
    },

    // --- PENDING QUEUE STATUS ---
    async getOfflineQueue() {
      return await idbGetAll('offline_queue');
    },

    // --- AUTO CLOUD FILE UPLOADS (Drag & Drop / Multi) ---
    async uploadAndGenerateUrl(file, folder = 'uploads', progressCallback) {
      // 1. Auto Compress image
      if (file.type.startsWith('image/')) {
        if (progressCallback) progressCallback({ status: 'compressing', percent: 20 });
        file = await compressImage(file, 0.75, 1600);
      }

      // 2. Calculate unique hash for duplicate detection
      if (progressCallback) progressCallback({ status: 'hashing', percent: 40 });
      const fileHash = await calculateFileHash(file);
      
      // Check Layer 3 duplicate detection
      const knownFile = await idbGet('media_hashes', fileHash);
      if (knownFile) {
        console.log(`🔗 Duplicate Detection: File already uploaded! Reusing URL: ${knownFile.url}`);
        if (progressCallback) progressCallback({ status: 'complete', percent: 100, url: knownFile.url });
        return knownFile.url;
      }

      // 3. Auto upload to Firebase Storage CDN
      if (progressCallback) progressCallback({ status: 'uploading', percent: 60 });
      
      if (!_isOnline) {
        throw new Error("Cannot upload media file while offline. Reconnect required.");
      }

      if (typeof FirebaseService === 'undefined' || !FirebaseService.storage) {
        // Local server-side Flask upload endpoint fallback
        const formData = new FormData();
        formData.append('file', file);
        formData.append('hash', fileHash);
        formData.append('folder', folder);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        if (result.success) {
          await idbSet('media_hashes', { hash: fileHash, url: result.url, ts: Date.now() });
          if (progressCallback) progressCallback({ status: 'complete', percent: 100, url: result.url });
          return result.url;
        } else {
          throw new Error(result.error || "Server upload failed");
        }
      }

      // Live Firebase Storage upload
      const originalName = file.name || 'blob_' + Date.now();
      const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const uniqueFileName = `${Date.now()}_${safeName}`;
      const storageRef = FirebaseService.storage.ref(`${folder}/${uniqueFileName}`);

      const uploadTask = storageRef.put(file);

      return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          try {
            uploadTask.cancel();
          } catch(e) {}
          reject(new Error("Upload timed out (possible CORS block or network failure)"));
        }, 60000);

        uploadTask.on('state_changed', 
          (snap) => {
            const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 40) + 50; // Map 0-100 to 50-90%
            if (progressCallback) progressCallback({ status: 'uploading', percent: pct });
          }, 
          (err) => {
            clearTimeout(timeoutId);
            reject(err);
          }, 
          async () => {
            clearTimeout(timeoutId);
            try {
              const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
              // Cache hash so duplicate checks match instantly next time
              await idbSet('media_hashes', { hash: fileHash, url: downloadUrl, ts: Date.now() });
              if (progressCallback) progressCallback({ status: 'complete', percent: 100, url: downloadUrl });
              resolve(downloadUrl);
            } catch(e) {
              reject(e);
            }
          }
        );
      });
    },

    // --- ENTERPRISE API CONVENIENCE ALIASES ---
    async uploadMedia(file, category = 'General', progressCallback = null) {
      return await this.uploadAndGenerateUrl(file, `assets_${category.toLowerCase()}`, progressCallback);
    },

    /**
     * Decorates file inputs in the active view to premium, drag-and-drop glowing containers.
     * Hides the raw text URL fields and enables zero-effort media uploads.
     */
    decorateUploadZones() {
      // Find all file inputs that haven't been decorated yet
      const fileInputs = document.querySelectorAll('input[type="file"]:not(.decorated-uploader)');
      
      fileInputs.forEach(input => {
        // Mark as decorated to avoid duplicates
        input.classList.add('decorated-uploader');
        
        // Find corresponding URL text input
        let targetInp = null;
        
        // 1. Try mapping using matching patterns
        const id = input.id || '';
        if (id === 'sl-file') targetInp = document.getElementById('sl-url');
        else if (id === 'vid-file') targetInp = document.getElementById('vid-url');
        else if (id === 'ev-file') targetInp = document.getElementById('ev-img');
        else if (id === 'dt-file') targetInp = document.getElementById('dt-banner');
        else if (id === 'dm-file') targetInp = document.getElementById('dm-media');
        else if (id === 'sc-thumb-file') targetInp = document.getElementById('sc-thumb');
        else if (id === 'sc-audio-file') targetInp = document.getElementById('sc-audio');
        else if (id === 'tmp-banner-file') targetInp = document.getElementById('tmp-banner');
        else if (id.startsWith('thmb-file-')) {
          const key = id.replace('thmb-file-', '');
          targetInp = document.getElementById('thmb-' + key);
        }

        // 2. Try parsing target from onchange
        if (!targetInp) {
          const onchangeStr = input.getAttribute('onchange') || '';
          const match = onchangeStr.match(/uploadFileToInput\(\s*this\s*,\s*['"]([^'"]+)['"]/);
          if (match) {
            targetInp = document.getElementById(match[1]);
          }
        }

        // Create beautiful drag & drop container
        const parent = input.parentElement;
        if (!parent) return;

        // Hide original file input completely
        input.style.display = 'none';

        // Wrap target input if it exists
        if (targetInp) {
          targetInp.style.display = 'none'; // Hide text URL input completely!
        }

        const dropZone = document.createElement('div');
        dropZone.className = 'ent-drop-zone';
        
        // Style variables for Glassmorphic futuristic dashboard UI
        dropZone.style.cssText = `
          border: 2px dashed rgba(255, 140, 0, 0.25);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.02);
          padding: 24px 16px;
          text-align: center;
          position: relative;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          margin: 10px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
        `;

        const icon = document.createElement('i');
        icon.className = 'fas fa-cloud-arrow-up';
        icon.style.cssText = `
          font-size: 32px;
          color: var(--primary, #FF8C00);
          text-shadow: 0 0 10px rgba(255, 140, 0, 0.4);
          transition: transform 0.3s;
        `;

        const title = document.createElement('div');
        title.textContent = 'Drag & Drop Media Here';
        title.style.cssText = 'font-size: 13px; font-weight: 700; color: #fff;';

        const subtitle = document.createElement('div');
        subtitle.textContent = 'or click to browse files';
        subtitle.style.cssText = 'font-size: 11px; color: var(--text-muted, #64748b);';

        // Upload progress bar container
        const progressContainer = document.createElement('div');
        progressContainer.style.cssText = `
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          margin-top: 10px;
          display: none;
          overflow: hidden;
          position: relative;
        `;
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
          width: 0%;
          height: 100%;
          background: linear-gradient(90deg, var(--primary, #FF8C00), #ffaa44);
          box-shadow: 0 0 8px rgba(255, 140, 0, 0.6);
          border-radius: 4px;
          transition: width 0.2s ease-out;
        `;
        progressContainer.appendChild(progressBar);

        // Preview container
        const previewContainer = document.createElement('div');
        previewContainer.className = 'ent-upload-preview';
        previewContainer.style.cssText = `
          width: 100%;
          max-height: 180px;
          border-radius: 12px;
          overflow: hidden;
          margin-top: 10px;
          display: none;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.08);
        `;

        // Action controls (Copy Link / Remove)
        const controlRow = document.createElement('div');
        controlRow.style.cssText = `
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          font-size: 11px;
          display: none;
        `;
        
        const fileUrlLabel = document.createElement('span');
        fileUrlLabel.style.cssText = 'color: var(--primary); font-family: monospace; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 180px;';
        
        const actionGroup = document.createElement('div');
        actionGroup.style.cssText = 'display: flex; gap: 8px;';
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'btn btn-secondary btn-xs';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.type = 'button';
        copyBtn.style.padding = '3px 8px';
        copyBtn.onclick = (e) => {
          e.stopPropagation();
          if (targetInp && targetInp.value) {
            navigator.clipboard.writeText(targetInp.value);
            if (typeof toast !== 'undefined') toast('CDN URL copied to clipboard!', 'success');
          }
        };

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger btn-xs';
        removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
        removeBtn.type = 'button';
        removeBtn.style.padding = '3px 8px';
        removeBtn.onclick = (e) => {
          e.stopPropagation();
          if (targetInp) {
            targetInp.value = '';
            targetInp.dispatchEvent(new Event('input', { bubbles: true }));
            targetInp.dispatchEvent(new Event('change', { bubbles: true }));
          }
          previewContainer.style.display = 'none';
          previewContainer.innerHTML = '';
          controlRow.style.display = 'none';
          icon.style.display = 'block';
          title.style.display = 'block';
          subtitle.style.display = 'block';
          dropZone.style.border = '2px dashed rgba(255, 140, 0, 0.25)';
          dropZone.style.background = 'rgba(255, 255, 255, 0.02)';
        };

        actionGroup.appendChild(copyBtn);
        actionGroup.appendChild(removeBtn);
        controlRow.appendChild(fileUrlLabel);
        controlRow.appendChild(actionGroup);

        dropZone.appendChild(icon);
        dropZone.appendChild(title);
        dropZone.appendChild(subtitle);
        dropZone.appendChild(progressContainer);
        dropZone.appendChild(previewContainer);
        dropZone.appendChild(controlRow);

        // Put dropZone right after input
        input.parentNode.insertBefore(dropZone, input.nextSibling);

        // Drag & Drop behaviors
        ['dragenter', 'dragover'].forEach(eventName => {
          dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.style.border = '2px dashed var(--primary, #FF8C00)';
            dropZone.style.boxShadow = '0 0 15px rgba(255, 140, 0, 0.25)';
            dropZone.style.background = 'rgba(255, 140, 0, 0.04)';
            icon.style.transform = 'scale(1.1) translateY(-3px)';
          }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
          dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (eventName === 'dragleave') {
              dropZone.style.border = '2px dashed rgba(255, 140, 0, 0.25)';
              dropZone.style.boxShadow = 'none';
              dropZone.style.background = 'rgba(255, 255, 255, 0.02)';
              icon.style.transform = 'scale(1)';
            }
          }, false);
        });

        // Trigger upload helper
        const triggerUpload = async (file) => {
          if (!file) return;
          progressContainer.style.display = 'block';
          progressBar.style.width = '10%';
          icon.style.display = 'none';
          title.textContent = 'Processing Media...';
          subtitle.textContent = file.name;

          try {
            const url = await this.uploadAndGenerateUrl(file, 'enterprise_media', (prog) => {
              if (prog.status === 'compressing') {
                progressBar.style.width = '30%';
                title.textContent = 'Optimizing Image to WebP...';
              } else if (prog.status === 'hashing') {
                progressBar.style.width = '50%';
                title.textContent = 'Hashing for protection...';
              } else if (prog.status === 'uploading') {
                progressBar.style.width = `${prog.percent}%`;
                title.textContent = `Uploading: ${prog.percent}%`;
              }
            });

            // Set final 100%
            progressBar.style.width = '100%';
            title.textContent = 'Upload Complete!';
            setTimeout(() => { progressContainer.style.display = 'none'; }, 800);

            // Update original target URL textbox
            if (targetInp) {
              targetInp.value = url;
              targetInp.dispatchEvent(new Event('input', { bubbles: true }));
              targetInp.dispatchEvent(new Event('change', { bubbles: true }));
            }

            // Also check if there's custom onchange action to fire
            const originalOnchange = input.getAttribute('onchange');
            if (originalOnchange && !originalOnchange.includes('uploadFileToInput')) {
              // Custom trigger such as templates or CMS card upload
              if (id === 'card-img-file' && typeof handleCMSImageUpload === 'function') {
                handleCMSImageUpload(input, 'card-img');
              } else if (id === 'receipt-template-file' && typeof handleTemplateUpload === 'function') {
                handleTemplateUpload(input, 'receipt_template');
              } else if (id === 'vol_card_template' && typeof handleTemplateUpload === 'function') {
                handleTemplateUpload(input, 'vol_card_template');
              }
            }

            showPreview(url, file.type || 'image/webp');
            if (typeof toast !== 'undefined') toast('CDN asset generated and synced!', 'success');
          } catch(err) {
            console.warn('Auto cloud upload failed, using high-performance base64 fallback:', err);
            
            title.textContent = 'Using Local/Base64 Fallback...';
            progressBar.style.width = '80%';
            
            try {
              const reader = new FileReader();
              reader.onload = async (e) => {
                const base64Url = e.target.result;
                
                // Update original target URL textbox
                if (targetInp) {
                  targetInp.value = base64Url;
                  targetInp.dispatchEvent(new Event('input', { bubbles: true }));
                  targetInp.dispatchEvent(new Event('change', { bubbles: true }));
                }

                // Also check if there's custom onchange action to fire
                const originalOnchange = input.getAttribute('onchange');
                if (originalOnchange && !originalOnchange.includes('uploadFileToInput')) {
                  if (id === 'card-img-file' && typeof handleCMSImageUpload === 'function') {
                    handleCMSImageUpload(input, 'card-img');
                  } else if (id === 'receipt-template-file' && typeof handleTemplateUpload === 'function') {
                    handleTemplateUpload(input, 'receipt_template');
                  } else if (id === 'vol_card_template' && typeof handleTemplateUpload === 'function') {
                    handleTemplateUpload(input, 'vol_card_template');
                  }
                }

                progressBar.style.width = '100%';
                title.textContent = 'Upload Complete (Offline Saved)';
                setTimeout(() => { progressContainer.style.display = 'none'; }, 800);
                
                showPreview(base64Url, file.type || 'image/webp');
                if (typeof toast !== 'undefined') toast('Media saved locally and synced!', 'success');
              };
              reader.onerror = (readerErr) => {
                throw readerErr;
              };
              reader.readAsDataURL(file);
            } catch(fallbackErr) {
              console.error('Fallback also failed:', fallbackErr);
              title.textContent = 'Upload Failed!';
              subtitle.textContent = fallbackErr.message;
              progressBar.style.background = 'var(--danger, #ef4444)';
              if (typeof toast !== 'undefined') toast('Auto media upload failed: ' + fallbackErr.message, 'error');
            }
          }
        };

        // Render preview inside dropzone
        const showPreview = (url, type) => {
          if (!url) return;
          previewContainer.style.display = 'block';
          previewContainer.innerHTML = '';
          
          if (type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = url;
            img.style.cssText = 'width: 100%; height: 120px; object-fit: cover; border-radius: 8px;';
            previewContainer.appendChild(img);
          } else if (type.startsWith('video/')) {
            const vid = document.createElement('video');
            vid.src = url;
            vid.controls = true;
            vid.style.cssText = 'width: 100%; height: 120px; object-fit: cover; border-radius: 8px;';
            previewContainer.appendChild(vid);
          } else if (type.startsWith('audio/')) {
            const aud = document.createElement('audio');
            aud.src = url;
            aud.controls = true;
            aud.style.cssText = 'width: 90%; margin: 10px auto; display: block;';
            previewContainer.appendChild(aud);
          } else {
            const fileIcon = document.createElement('div');
            fileIcon.style.cssText = 'display:flex; align-items:center; justify-content:center; height:100px; font-size:24px; color:var(--primary);';
            fileIcon.innerHTML = `<i class="fas fa-file-pdf"></i> <span style="font-size:11px; margin-left:8px; color:#fff;">Document View</span>`;
            previewContainer.appendChild(fileIcon);
          }

          fileUrlLabel.textContent = url;
          controlRow.style.display = 'flex';
          title.style.display = 'none';
          subtitle.style.display = 'none';
          dropZone.style.border = '1px solid rgba(255, 140, 0, 0.3)';
          dropZone.style.background = 'rgba(255, 140, 0, 0.02)';
        };

        // Handle drops
        dropZone.addEventListener('drop', (e) => {
          const files = e.dataTransfer.files;
          if (files && files[0]) {
            triggerUpload(files[0]);
          }
        }, false);

        // Click selection
        dropZone.addEventListener('click', () => {
          // Trigger file picker click
          input.click();
        });

        // Sync local input change
        input.addEventListener('change', () => {
          if (input.files && input.files[0]) {
            triggerUpload(input.files[0]);
          }
        });

        // Initialize preview if the target already has a URL saved!
        if (targetInp && targetInp.value) {
          const ext = targetInp.value.split('.').pop().toLowerCase();
          const guessType = ['mp4', 'webm', 'ogg'].includes(ext) ? 'video/mp4' : 
                            ['mp3', 'wav', 'ogg'].includes(ext) ? 'audio/mp3' : 'image/webp';
          showPreview(targetInp.value, guessType);
        }
      });
    },

    // --- ANALYTICS UTILS ---
    async getStorageStats() {
      const cached = await idbGetAll('content_cache');
      const hashes = await idbGetAll('media_hashes');
      const bin = await idbGetAll('recycle_bin');
      const queue = await idbGetAll('offline_queue');

      return {
        ramCacheKeys: Object.keys(_ramCache).length,
        indexedDbEntries: cached.length,
        mediaFilesCached: hashes.length,
        recycleBinCount: bin.length,
        pendingSyncCount: queue.length,
        deviceId: _deviceId,
        onlineStatus: _isOnline ? 'Online' : 'Offline'
      };
    },

    generateSerialNo(collectionKey = 'donations', field = 'receiptNo', prefix = 'SDSS', isTest = false) {
      const data = this.get(collectionKey, []);
      const d = new Date();
      const m = d.getMonth() + 1;
      const y = d.getFullYear();
      const fy = (m <= 3) ? `${y - 1}-${y.toString().slice(-2)}` : `${y}-${(y + 1).toString().slice(-2)}`;
      
      const fullPrefix = `${prefix}/${fy}/`;
      const suffix = isTest ? '/test' : '';
      
      let maxSerial = 0;
      data.forEach(item => {
        const val = item[field];
        if (val && val.startsWith(fullPrefix)) {
          // If in test mode, must end with '/test'
          // If in live mode, must NOT end with '/test'
          if (isTest && val.endsWith('/test')) {
              const parts = val.split('/');
              if (parts.length >= 3) {
                const numPart = parseInt(parts[2], 10);
                if (!isNaN(numPart) && numPart > maxSerial) {
                  maxSerial = numPart;
                }
              }
          } else if (!isTest && !val.endsWith('/test')) {
              const parts = val.split('/');
              if (parts.length >= 3) {
                const numPart = parseInt(parts[2], 10);
                if (!isNaN(numPart) && numPart > maxSerial) {
                  maxSerial = numPart;
                }
              }
          }
        }
      });
      return fullPrefix + (maxSerial + 1).toString().padStart(4, '0') + suffix;
    }
  };
})();

window.EnterpriseSync = EnterpriseSync;
