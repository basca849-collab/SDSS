const CACHE_NAME = 'sdss-v16-realtime';
const MEDIA_CACHE = 'sdss-media-v3';

const ASSETS = [
  '/',
  '/index.html',
  '/main_app.js',\n  '/firebase_rtdb_service.js',\n  '/offline_enterprise_sync.js',
  '/templates.js',
  '/manifest.json',
  '/sdss_logo.svg',
  '/gold_elephant.png',
  '/favicon.ico',
  '/css/all.min.css',
  '/webfonts/fa-solid-900.woff2',
  '/webfonts/fa-brands-400.woff2',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.5.0/lz-string.min.js',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME && key !== MEDIA_CACHE).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests entirely
  if (event.request.method !== 'GET') return;

  // Skip Firebase API calls — let Firestore SDK handle its own caching
  if (url.hostname.includes('firebaseio.com') || 
      url.hostname.includes('googleapis.com/google.firestore') ||
      url.hostname.includes('firebase.googleapis.com')) {
    return;
  }

  // 1. Firebase Storage Media — Cache First (permanent, immutable URLs)
  if (url.hostname.includes('firebasestorage.googleapis.com')) {
    event.respondWith(
      caches.open(MEDIA_CACHE).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) return response;
          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // 2. HTML files — Network First (always get latest content)
  if (event.request.destination === 'document' || 
      url.pathname.endsWith('.html') || 
      url.pathname === '/' || 
      url.pathname === './') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 3. JS/CSS/Font assets — Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkFetch = fetch(event.request).then((networkResponse) => {
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      }).catch(() => cachedResponse);
      return cachedResponse || networkFetch;
    })
  );
});
