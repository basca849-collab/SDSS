window.SDSS_TEMPLATES = {
  receipt: `
<div class="max-w-4xl w-full mx-auto bg-[#FDF9F1] border-[12px] border-[#E5C07B] p-2 md:p-4 relative rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] font-serif text-black" style="background-image: url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 50L0 0h100L50 50z\\' fill=\\'%23d4af37\\' fill-opacity=\\'0.03\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E');">
  <div class="border-4 border-[#D4AF37] p-6 relative h-full w-full bg-white/80 backdrop-blur-sm">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start border-b-2 border-[#D4AF37] pb-4 mb-6 relative">
      <!-- Decorative corners -->
      <div class="absolute -top-6 -left-6 text-[#D4AF37] text-2xl"><i class="fas fa-fan"></i></div>
      <div class="absolute -top-6 -right-6 text-[#D4AF37] text-2xl"><i class="fas fa-fan"></i></div>
      
      <div class="flex gap-6 items-center w-full md:w-auto">
        <div class="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <div class="absolute inset-0 bg-[#8B0000] rotate-45 scale-75"></div>
            <div class="absolute inset-0 border-2 border-[#D4AF37] rotate-45 scale-90"></div>
            <img loading=" lazy\ src="/sdss_logo.svg" onerror="this.src='https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=180'" alt="Logo" class="w-16 h-16 relative z-10 rounded-full" />
        </div>
        <div class="text-center md:text-left flex-1">
          <div class="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span class="text-[#D4AF37] font-bold text-xl">||</span>
              <h1 class="text-[#8B0000] font-black text-3xl md:text-4xl tracking-tight" style="text-shadow: 1px 1px 0px rgba(0,0,0,0.1);">సువర్ణ దుర్గా</h1>
              <span class="text-[#D4AF37] font-bold text-xl">||</span>
          </div>
          <p class="text-[#000080] font-bold text-sm md:text-md tracking-wider">సేవా సమితి ఛారిటబుల్ ట్రస్ట్</p>
        </div>
      </div>
      <div class="mt-6 md:mt-0 text-right w-full md:w-auto flex flex-col items-end">
        <p class="text-gray-800 font-bold flex items-center justify-end w-full max-w-[200px]">Receipt No. <span class="ml-2 font-mono border-b border-dashed border-gray-400 flex-1">&nbsp;</span></p>
        <p class="text-gray-800 font-bold flex items-center justify-end w-full max-w-[200px] mt-2">Date <span class="ml-2 font-mono border-b border-dashed border-gray-400 flex-1">&nbsp;</span></p>
      </div>
    </div>
    
    <div class="text-center mb-10 relative">
       <div class="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent top-1/2 -z-10"></div>
       <span class="bg-[#FDF9F1] px-6 text-3xl md:text-4xl font-black text-[#8B0000] tracking-widest drop-shadow-md" style="font-family: serif; text-shadow: 2px 2px 0px #FDF9F1, 3px 3px 0px #D4AF37;">PAYMENT RECEIPT</span>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
       <!-- Left Side (Details) -->
       <div class="w-full md:w-5/12 space-y-5 relative">
           <!-- Form rows -->
           <div class="flex items-center gap-4 bg-white p-3 rounded-lg border border-[#D4AF37]/50 shadow-sm relative overflow-hidden group">
               <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#8B0000]"></div>
               <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] text-white flex items-center justify-center shrink-0 shadow-inner"><i class="fas fa-user text-sm"></i></div>
               <span class="w-24 md:w-32 font-bold text-[#8B0000] text-xs md:text-sm tracking-wide">Full Name</span>
               <span class="flex-1 border-b border-dashed border-[#D4AF37] text-gray-800 font-semibold text-sm h-5">&nbsp;</span>
           </div>
           <!-- Repeat for Mobile, Email, Aadhaar, PAN -->
           <div class="flex items-center gap-4 bg-white p-3 rounded-lg border border-[#D4AF37]/50 shadow-sm relative overflow-hidden">
               <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#8B0000]"></div>
               <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] text-white flex items-center justify-center shrink-0 shadow-inner"><i class="fas fa-phone text-sm"></i></div>
               <span class="w-24 md:w-32 font-bold text-[#8B0000] text-xs md:text-sm tracking-wide">Mobile Number</span>
               <span class="flex-1 border-b border-dashed border-[#D4AF37] text-gray-800 font-semibold text-sm h-5">&nbsp;</span>
           </div>
           <div class="flex items-center gap-4 bg-white p-3 rounded-lg border border-[#D4AF37]/50 shadow-sm relative overflow-hidden">
               <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#8B0000]"></div>
               <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] text-white flex items-center justify-center shrink-0 shadow-inner"><i class="fas fa-envelope text-sm"></i></div>
               <span class="w-24 md:w-32 font-bold text-[#8B0000] text-xs md:text-sm tracking-wide">E-mail ID</span>
               <span class="flex-1 border-b border-dashed border-[#D4AF37] text-gray-800 font-semibold text-sm h-5">&nbsp;</span>
           </div>
           <div class="flex items-center gap-4 bg-white p-3 rounded-lg border border-[#D4AF37]/50 shadow-sm relative overflow-hidden">
               <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#8B0000]"></div>
               <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] text-white flex items-center justify-center shrink-0 shadow-inner"><i class="fas fa-id-card text-sm"></i></div>
               <span class="w-24 md:w-32 font-bold text-[#8B0000] text-xs md:text-sm tracking-wide">Aadhaar Number</span>
               <span class="flex-1 border-b border-dashed border-[#D4AF37] text-gray-800 font-semibold text-sm h-5">&nbsp;</span>
           </div>
           <div class="flex items-center gap-4 bg-white p-3 rounded-lg border border-[#D4AF37]/50 shadow-sm relative overflow-hidden">
               <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#8B0000]"></div>
               <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] text-white flex items-center justify-center shrink-0 shadow-inner"><i class="fas fa-file-invoice text-sm"></i></div>
               <span class="w-24 md:w-32 font-bold text-[#8B0000] text-xs md:text-sm tracking-wide">PAN Number</span>
               <span class="flex-1 border-b border-dashed border-[#D4AF37] text-gray-800 font-semibold text-sm h-5">&nbsp;</span>
           </div>
           <div class="text-center mt-8">
              <span class="text-[#D4AF37] font-black tracking-[0.2em] uppercase text-xs">|| Service to Suvarna Durga ||</span>
              <div class="flex justify-center mt-2 text-[#D4AF37] text-lg">
                  <i class="fas fa-om"></i>
              </div>
           </div>
       </div>

       <!-- Right Side (Table) -->
       <div class="w-full md:w-7/12 flex flex-col relative">
           <div class="bg-[#8B0000] text-white text-center py-2 font-black tracking-widest text-sm rounded-t-lg border-2 border-b-0 border-[#D4AF37]">
               PAYMENT DETAILS
           </div>
           <table class="w-full border-collapse border-2 border-[#D4AF37] text-sm bg-white shadow-sm flex-1">
               <thead>
                   <tr class="bg-[#F5EDD9] text-[#8B0000]">
                       <th class="border border-[#D4AF37] p-3 w-16 font-black uppercase text-xs tracking-wider">S.No.</th>
                       <th class="border border-[#D4AF37] p-3 font-black uppercase text-xs tracking-wider">Particulars</th>
                       <th class="border border-[#D4AF37] p-3 w-32 font-black uppercase text-xs tracking-wider">Amount (₹)</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td class="border border-[#D4AF37] p-4 text-center font-bold text-gray-600">1.</td>
                       <td class="border border-[#D4AF37] p-4 font-bold text-gray-800 text-base">Donation / Seva Contribution</td>
                       <td class="border border-[#D4AF37] p-4 text-right font-mono text-lg text-[#8B0000] font-bold"></td>
                   </tr>
                   <tr>
                       <td class="border border-[#D4AF37] p-4 text-center font-bold text-gray-600">2.</td>
                       <td class="border border-[#D4AF37] p-4 font-bold text-gray-800">Others <span class="text-gray-400 font-normal ml-2">( _________________ )</span></td>
                       <td class="border border-[#D4AF37] p-4 text-right font-mono text-lg text-[#8B0000] font-bold"></td>
                   </tr>
                   <tr class="bg-gradient-to-r from-[#F5EDD9] to-[#E5C07B] font-bold">
                       <td colspan="2" class="border border-[#D4AF37] p-4 text-right text-[#8B0000] text-lg tracking-wider">TOTAL AMOUNT</td>
                       <td class="border border-[#D4AF37] p-4 text-right font-mono text-2xl text-[#8B0000] bg-white">₹</td>
                   </tr>
               </tbody>
           </table>

           <!-- Meta info -->
           <div class="mt-6 space-y-4 text-xs md:text-sm text-gray-800 bg-white p-5 rounded-lg border border-[#D4AF37]/50 shadow-sm relative">
               <div class="flex items-center"><span class="w-36 md:w-40 font-bold text-[#8B0000]">Amount in Words</span>: <span class="flex-1 border-b border-dashed border-[#D4AF37] ml-2 h-4"></span></div>
               <div class="flex items-center"><span class="w-36 md:w-40 font-bold text-[#8B0000]">Payment Mode</span>: <span class="flex-1 font-bold text-gray-600 text-[10px] sm:text-xs tracking-tight ml-2 border-b border-dashed border-[#D4AF37] h-4 leading-[4px]">UPI / Google Pay / Cash / Cheque / RTGS</span></div>
               <div class="flex items-center"><span class="w-36 md:w-40 font-bold text-[#8B0000]">Transaction ID</span>: <span class="flex-1 border-b border-dashed border-[#D4AF37] ml-2 font-mono h-4"></span></div>
               <div class="flex items-center"><span class="w-36 md:w-40 font-bold text-[#8B0000]">Payment Date & Time</span>: <span class="flex-1 border-b border-dashed border-[#D4AF37] ml-2 font-mono h-4"></span></div>
           </div>
       </div>
    </div>
    
    <div class="mt-8 pt-6 border-t-2 border-[#D4AF37] flex flex-col md:flex-row justify-between items-center md:items-end gap-6 relative">
       <div class="absolute -bottom-6 -left-6 text-[#D4AF37] text-2xl"><i class="fas fa-fan"></i></div>
       <div class="absolute -bottom-6 -right-6 text-[#D4AF37] text-2xl"><i class="fas fa-fan"></i></div>
       <div class="text-center md:text-left italic text-[#8B0000] font-bold text-lg leading-relaxed px-4 md:px-0">
           "Thank you for your contribution.<br/>
           Your support helps us in continuing the seva."
       </div>
       <div class="flex items-center gap-6">
           <div class="w-24 h-24 bg-white border-2 border-dashed border-[#8B0000] p-1 flex items-center justify-center relative group overflow-hidden shadow-sm">
               <i class="fas fa-qrcode text-6xl text-gray-800"></i>
               <div class="absolute inset-0 bg-[#8B0000]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </div>
           <div class="w-28 h-28 rounded-full border-4 border-[#8B0000] flex items-center justify-center p-2 relative shadow-lg bg-white">
                <div class="absolute -inset-1 rounded-full border border-[#D4AF37]"></div>
                <img loading=" lazy\ src="/sdss_logo.svg" onerror="this.src='https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=180'" class="w-14 h-14 object-contain" />
                <svg viewBox="0 0 100 100" class="absolute inset-0 w-full h-full rotate-[-45deg] animate-[spin_30s_linear_infinite]">
                    <path id="curve" d="M 15 50 A 35 35 0 1 1 85 50 A 35 35 0 1 1 15 50" fill="transparent"></path>
                    <text class="text-[8.5px] font-black uppercase" fill="#8B0000">
                      <textPath href="#curve" startOffset="0%">★ SUVARNA DURGA SEVA SAMITI ★ CHARITABLE TRUST, JAGTIAL</textPath>
                    </text>
                </svg>
           </div>
       </div>
    </div>
  </div>
</div>
  `,
  idCard: `
<div class="flex flex-col md:flex-row gap-8 justify-center items-center font-serif text-black py-4 w-full" style="perspective: 1000px;">
   <!-- Front -->
   <div class="w-[300px] sm:w-[340px] h-[520px] bg-[#FDF9F1] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative border-4 border-[#D4AF37] group hover:-translate-y-2 transition-all duration-500 shrink-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\\' fill=\\'%23d4af37\\' fill-opacity=\\'0.02\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E');">
       <!-- Top Hole -->
       <div class="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/80 rounded-full z-50 border border-white/20 shadow-inner"></div>
       
       <!-- Top Red Banner -->
       <div class="h-36 bg-gradient-to-b from-[#4A0000] to-[#8B0000] rounded-b-[50px] flex items-start justify-center relative border-b-4 border-[#D4AF37] shadow-md">
          <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml,%3Csvg width=\\'12\\' height=\\'12\\' viewBox=\\'0 0 12 12\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M6 6L0 0h12L6 6z\\' fill=\\'%23d4af37\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E');"></div>
          
          <!-- Hanging Lamps -->
          <div class="absolute left-6 top-0 w-[2px] h-16 bg-gradient-to-b from-[#D4AF37]/50 to-[#D4AF37]"></div>
          <div class="absolute left-[20px] top-16 text-[#D4AF37] text-lg"><i class="fas fa-vihara drop-shadow-md"></i></div>
          
          <div class="absolute right-6 top-0 w-[2px] h-16 bg-gradient-to-b from-[#D4AF37]/50 to-[#D4AF37]"></div>
          <div class="absolute right-[20px] top-16 text-[#D4AF37] text-lg"><i class="fas fa-vihara drop-shadow-md"></i></div>

          <div class="w-20 h-20 absolute -bottom-10 bg-gradient-to-br from-white to-[#FDF9F1] rounded-full p-1.5 shadow-[0_5px_15px_rgba(0,0,0,0.3)] border-2 border-[#D4AF37] z-10 flex items-center justify-center">
              <img loading=" lazy\ src="/sdss_logo.svg" onerror="this.src='https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=180'" class="w-16 h-16 rounded-full" />
          </div>
       </div>
       <div class="mt-14 text-center px-4 relative z-0">
          <div class="flex items-center justify-center gap-2 mb-1">
             <span class="text-[#D4AF37] font-bold text-sm">||</span>
             <h2 class="text-[#8B0000] font-black text-2xl tracking-tight" style="text-shadow: 1px 1px 0px rgba(0,0,0,0.1);">సువర్ణ దుర్గా</h2>
             <span class="text-[#D4AF37] font-bold text-sm">||</span>
          </div>
          <p class="text-[#000080] font-bold text-[11px] tracking-wide">సేవా సమితి ఛారిటబుల్ ట్రస్ట్</p>
       </div>
       <div class="text-center mt-3 relative">
          <div class="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent top-1/2 -z-10"></div>
          <span class="bg-[#FDF9F1] px-4 text-[#8B0000] font-black text-2xl tracking-widest uppercase drop-shadow-sm font-sans" style="text-shadow: 2px 2px 0px #FDF9F1, 3px 3px 0px #D4AF37;">VOLUNTEER</span>
       </div>
       <div class="text-center mb-5">
           <div class="inline-block mt-1">
               <span class="flex items-center gap-2 text-[#D4AF37] text-sm font-black tracking-[0.3em]">
                   <i class="fas fa-gem text-[8px]"></i> ID CARD <i class="fas fa-gem text-[8px]"></i>
               </span>
           </div>
       </div>
       <div class="px-6 flex gap-5">
          <!-- Photo Container -->
          <div class="w-28 h-36 border-2 border-[#D4AF37] bg-white rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center relative overflow-hidden group-hover:border-[#8B0000] transition-colors">
             <div class="absolute inset-0 bg-[#F5EDD9]/50 pattern-grid-lg text-[#D4AF37]/10 flex items-center justify-center">
                 <i class="fas fa-star-of-david text-6xl opacity-20"></i>
             </div>
             <i class="fas fa-user-tie text-5xl text-[#D4AF37]/50 relative z-10"></i>
          </div>
          <!-- Info Details -->
          <div class="flex-1 space-y-4 pt-1">
              <div class="flex items-center gap-3">
                  <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] text-white flex items-center justify-center shrink-0 shadow-inner">
                      <i class="fas fa-user text-xs"></i>
                  </div>
                  <div class="flex-1">
                      <div class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Name</div>
                      <div class="border-b-2 border-dashed border-[#D4AF37] w-full h-4 font-bold text-sm text-gray-800"></div>
                  </div>
              </div>
              <div class="flex items-center gap-3">
                  <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] text-white flex items-center justify-center shrink-0 shadow-inner">
                      <i class="fas fa-phone-alt text-xs"></i>
                  </div>
                  <div class="flex-1">
                      <div class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Mobile No.</div>
                      <div class="border-b-2 border-dashed border-[#D4AF37] w-full h-4 font-bold text-sm text-gray-800 font-mono"></div>
                  </div>
              </div>
              <div class="flex items-center gap-3">
                  <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] text-white flex items-center justify-center shrink-0 shadow-inner">
                      <i class="fas fa-envelope text-[10px]"></i>
                  </div>
                  <div class="flex-1">
                      <div class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">E-mail ID</div>
                      <div class="border-b-2 border-dashed border-[#D4AF37] w-full h-4 font-bold text-sm text-gray-800"></div>
                  </div>
              </div>
              <div class="flex items-center gap-3">
                  <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] text-white flex items-center justify-center shrink-0 shadow-inner">
                      <i class="fas fa-map-marker-alt text-xs"></i>
                  </div>
                  <div class="flex-1">
                      <div class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Address</div>
                      <div class="border-b-2 border-dashed border-[#D4AF37] w-full h-4 font-bold text-sm text-gray-800"></div>
                  </div>
              </div>
          </div>
       </div>
       <div class="absolute bottom-[44px] left-0 right-0 px-6 flex justify-between items-end">
           <div class="bg-[#222] text-white p-2 rounded-md border border-[#D4AF37] shadow-lg transform -translate-y-1 group-hover:scale-105 transition-transform">
               <div class="text-[9px] uppercase text-[#D4AF37] font-bold text-center mb-0.5 tracking-wider">Volunteer ID</div>
               <div class="text-xs font-mono font-bold tracking-widest text-center">SDVSCT/<span class="text-gray-400">____</span></div>
           </div>
           <div class="text-right pb-1">
               <div class="text-[10px] text-gray-600 font-bold uppercase tracking-wider">Service to</div>
               <div class="text-base font-black text-[#8B0000] tracking-tight">SUVARNA DURGA</div>
           </div>
       </div>
       
       <!-- Bottom Banner -->
       <div class="absolute bottom-0 w-full h-[36px] bg-gradient-to-r from-[#4A0000] via-[#8B0000] to-[#4A0000] flex justify-center items-center border-t-2 border-[#D4AF37]">
            <div class="absolute -top-3 w-8 h-8 bg-[#FDF9F1] rounded-full flex items-center justify-center text-[#8B0000] text-lg border border-[#D4AF37]">
                <i class="fas fa-spa"></i>
            </div>
       </div>
   </div>

   <!-- Back -->
   <div class="w-[300px] sm:w-[340px] h-[520px] bg-[#FDF9F1] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative border-4 border-[#D4AF37] group hover:-translate-y-2 transition-all duration-500 shrink-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\\' fill=\\'%23d4af37\\' fill-opacity=\\'0.02\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E');">
       <!-- Top Hole -->
       <div class="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/80 rounded-full z-50 border border-white/20 shadow-inner"></div>

       <div class="h-32 bg-gradient-to-b from-[#4A0000] to-[#8B0000] flex flex-col items-center justify-end pb-4 relative rounded-b-[40px] border-b-4 border-[#D4AF37] shadow-md">
          <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml,%3Csvg width=\\'12\\' height=\\'12\\' viewBox=\\'0 0 12 12\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M6 6L0 0h12L6 6z\\' fill=\\'%23d4af37\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E');"></div>
          
          <div class="absolute left-6 top-0 w-[2px] h-12 bg-gradient-to-b from-[#D4AF37]/50 to-[#D4AF37]"></div>
          <div class="absolute left-[20px] top-12 text-[#D4AF37] text-lg"><i class="fas fa-vihara drop-shadow-md"></i></div>
          
          <div class="absolute right-6 top-0 w-[2px] h-12 bg-gradient-to-b from-[#D4AF37]/50 to-[#D4AF37]"></div>
          <div class="absolute right-[20px] top-12 text-[#D4AF37] text-lg"><i class="fas fa-vihara drop-shadow-md"></i></div>

          <div class="w-14 h-14 bg-white rounded-full p-1 border-2 border-[#D4AF37] absolute top-8 left-1/2 -translate-x-1/2 flex justify-center items-center">
             <img loading=" lazy\ src="/sdss_logo.svg" onerror="this.src='https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=180'" class="w-10 h-10 object-contain" />
          </div>
          <div class="text-[#D4AF37] text-center mt-12 w-full px-4 relative z-10">
             <h2 class="font-black text-xl tracking-wide drop-shadow-sm text-white">|| సువర్ణ దుర్గా ||</h2>
             <p class="font-bold text-[9px] tracking-widest text-[#D4AF37]">సేవా సమితి ఛారిటబుల్ ట్రస్ట్</p>
          </div>
       </div>

       <div class="px-6 py-4 relative">
           <!-- Decorative temple watermark -->
           <div class="absolute bottom-10 right-4 text-9xl text-[#D4AF37]/5 z-0"><i class="fas fa-vihara"></i></div>
           
           <div class="relative z-10 text-center flex justify-center mb-3">
               <div class="bg-gradient-to-r from-[#8B0000] to-[#600000] text-white text-center text-[11px] font-black tracking-widest py-1.5 px-8 rounded-full border border-[#D4AF37] shadow-md uppercase">
                   IDENTITY
               </div>
           </div>
           <p class="text-[11px] text-center text-gray-800 font-medium leading-[1.6] mb-5 relative z-10">
               This is to certify that the bearer of this card is an<br/>
               <span class="text-[#8B0000] font-black text-xs uppercase tracking-wider block my-1 bg-[#D4AF37]/10 py-1 rounded">Authorized Volunteer</span>
               of Suvarna Durga Seva Samiti Charitable Trust<br/>
               and is committed to selfless service.
           </p>
           
           <div class="relative z-10 text-center flex justify-center mb-3">
               <div class="bg-gradient-to-r from-[#8B0000] to-[#600000] text-white text-center text-[11px] font-black tracking-widest py-1.5 px-6 rounded-full border border-[#D4AF37] shadow-md uppercase">
                   INSTRUCTIONS
               </div>
           </div>
           <ul class="text-[10px] text-gray-800 space-y-1.5 list-none px-2 relative z-10">
               <li class="flex items-start gap-2"><i class="fas fa-check-circle text-[#D4AF37] mt-0.5"></i> This card is non-transferable.</li>
               <li class="flex items-start gap-2"><i class="fas fa-check-circle text-[#D4AF37] mt-0.5"></i> Wear this card while performing seva activities.</li>
               <li class="flex items-start gap-2"><i class="fas fa-check-circle text-[#D4AF37] mt-0.5"></i> This card is the property of the Trust.</li>
               <li class="flex items-start gap-2"><i class="fas fa-check-circle text-[#D4AF37] mt-0.5"></i> If found, please return to the address below.</li>
               <li class="flex items-start gap-2"><i class="fas fa-exclamation-triangle text-red-600 mt-0.5"></i> Misuse of this card is strictly prohibited.</li>
           </ul>

           <div class="mt-6 flex justify-between items-end relative z-10 px-2">
               <div class="w-[72px] h-[72px] bg-white border-2 border-dashed border-[#8B0000] p-1 flex items-center justify-center shadow-sm">
                   <i class="fas fa-qrcode text-5xl text-gray-800"></i>
               </div>
               <div class="text-center w-36 relative">
                   <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center opacity-30 pointer-events-none">
                       <img loading=" lazy\ src="/sdss_logo.svg" onerror="this.src='https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=180'" class="w-12 h-12 grayscale" />
                   </div>
                   <div class="w-full border-b border-gray-400 mb-1.5"></div>
                   <div class="text-[10px] text-gray-600 font-bold uppercase tracking-wider">Authorised Signatory</div>
               </div>
           </div>
       </div>

       <!-- Bottom Address Section -->
       <div class="absolute bottom-0 w-full h-[70px] bg-gradient-to-r from-[#4A0000] via-[#600000] to-[#4A0000] text-white flex flex-col justify-center border-t-4 border-[#D4AF37]">
           <h4 class="text-[11px] font-black text-[#D4AF37] mb-1.5 text-center tracking-wide uppercase shadow-sm">Suvarna Durga Seva Samiti Charitable Trust</h4>
           <div class="flex justify-center gap-6">
               <div class="text-[9px] flex items-center gap-1.5 font-medium"><div class="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex justify-center items-center"><i class="fas fa-map-marker-alt text-[#D4AF37]"></i></div> Jagtial, Telangana</div>
               <div class="text-[9px] flex items-center gap-1.5 font-medium"><div class="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex justify-center items-center"><i class="fas fa-envelope text-[#D4AF37]"></i></div> info@sdss.org</div>
           </div>
       </div>
   </div>
</div>
  `
};
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
const {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation
} = ReactRouterDOM;

// Dynamic Script Loader – loads heavy libraries on demand
const _loadedScripts = {};
const loadScript = src => {
  if (_loadedScripts[src]) return _loadedScripts[src];
  _loadedScripts[src] = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return _loadedScripts[src];
};

// ═══════════════════════════════════════════════════════════════
// SDSS PRODUCTION CLOUD CONFIGURATION — Multi-Provider Support
// Data Flow: Cloud DB → React State → UI
// ═══════════════════════════════════════════════════════════════

const CloudConfig = {
  // Change this to switch between cloud providers: 'firebase', 'cloudflare', 'aws', 'supabase'
  activeProvider: 'firebase',

  firebase: {
    apiKey: "AIzaSyDJbp8HLo5PPciDR6G3sTiyLqGlrrcUq6s",
    authDomain: "om-associates-960af.firebaseapp.com",
    databaseURL: "https://om-associates-960af-default-rtdb.firebaseio.com",
    projectId: "om-associates-960af",
    storageBucket: "om-associates-960af.firebasestorage.app",
    messagingSenderId: "74653652626",
    appId: "1:74653652626:web:c94ed8dddc29e42b19b84b",
    measurementId: "G-2M4S6YYD1M"
  },

  cloudflare: {
    accountId: "YOUR_CLOUDFLARE_ACCOUNT_ID",
    workerApiUrl: "https://api.yourdomain.workers.dev",
    r2BucketUrl: "https://pub-xxxx.r2.dev",
    apiToken: "YOUR_CLOUDFLARE_API_TOKEN"
  },

  aws: {
    region: "us-east-1",
    apiGatewayUrl: "https://xxxxx.execute-api.us-east-1.amazonaws.com/prod",
    s3BucketUrl: "https://your-bucket.s3.amazonaws.com",
    accessKeyId: "YOUR_AWS_ACCESS_KEY",
    secretAccessKey: "YOUR_AWS_SECRET_KEY"
  },

  supabase: {
    url: "https://your-project.supabase.co",
    anonKey: "YOUR_SUPABASE_ANON_KEY"
  }
};

const firebaseConfig = CloudConfig.firebase;

// ── SINGLETON FIREBASE INIT (RTDB-FIRST) ────────────────────
let FIREBASE_READY = false;
const firebaseInitPromise = (async function initFirebase() {
  try {
    const success = await FirebaseService.init(firebaseConfig);
    if (success) {
      FIREBASE_READY = true;
      // Anonymous auth for RTDB read access
      if (FirebaseService.auth && !FirebaseService.auth.currentUser) {
        try {
          await FirebaseService.auth.signInAnonymously();
        } catch (e) {}
      }
      console.log('🔥 Firebase RTDB initialized (singleton)');
      return true;
    }
  } catch (e) {
    console.error('Firebase init failed:', e);
  }
  return false;
})();

// ── NO OFFLINE CACHE — FULLY ONLINE REALTIME ONLY ────────────
const CacheService = {
  save(key, data) {},
  load(key) {
    return null;
  }
};

// Custom Simplified Icons (SVG)
const IcHeart = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  fill: "currentColor",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
}));
const IcMenu = () => /*#__PURE__*/React.createElement("svg", {
  width: "28",
  height: "28",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 12h18M3 6h18M3 18h18"
}));
const IcChevronR = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("path", {
  d: "m9 18 6-6-6-6"
}));

// Icons and Framer Motion variables initialized globally
const {
  motion,
  AnimatePresence,
  useScroll,
  useTransform
} = window.Motion || {};

// 3D Divine Background Component
const DivineBackground = () => {
  const mountRef = React.useRef(null);
  const [loaded, setLoaded] = React.useState(!!window.THREE);
  React.useEffect(() => {
    let active = true;
    if (!window.THREE) {
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js").then(() => {
        if (active) setLoaded(true);
      }).catch(err => console.error("Failed to load Three.js:", err));
    }
    return () => {
      active = false;
    };
  }, []);
  React.useEffect(() => {
    if (!loaded || !window.THREE) return;
    const THREE = window.THREE;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3.5;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Add ambient and directional lights for rich 3D shading
    const ambientLight = new THREE.AmbientLight(0xfff8e7, 0.85); // Warm divine light
    scene.add(ambientLight);
    const dirLight1 = new THREE.DirectionalLight(0xffd700, 1.2); // Gold glow light
    dirLight1.position.set(2, 4, 3);
    scene.add(dirLight1);
    const dirLight2 = new THREE.DirectionalLight(0xff4500, 0.6); // Red-orange back/rim light
    dirLight2.position.set(-2, -2, 2);
    scene.add(dirLight2);

    // Helper to paint an intricate golden mandala yantra onto a canvas
    const createMandalaTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 1024, 1024);
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.8)';
      ctx.lineWidth = 5;
      ctx.shadowColor = '#FF8C00';
      ctx.shadowBlur = 15;
      const cx = 512,
        cy = 512;

      // Bhupura (Outer Square Gateways)
      ctx.beginPath();
      ctx.rect(100, 100, 824, 824);
      ctx.stroke();
      ctx.clearRect(460, 90, 104, 20);
      ctx.clearRect(460, 910, 104, 20);
      ctx.clearRect(90, 460, 20, 104);
      ctx.clearRect(910, 460, 20, 104);
      ctx.beginPath();
      ctx.moveTo(460, 100);
      ctx.lineTo(460, 70);
      ctx.lineTo(564, 70);
      ctx.lineTo(564, 100);
      ctx.moveTo(460, 924);
      ctx.lineTo(460, 954);
      ctx.lineTo(564, 954);
      ctx.lineTo(564, 924);
      ctx.moveTo(100, 460);
      ctx.lineTo(70, 460);
      ctx.lineTo(70, 564);
      ctx.lineTo(100, 564);
      ctx.moveTo(924, 460);
      ctx.lineTo(954, 460);
      ctx.lineTo(954, 564);
      ctx.lineTo(924, 564);
      ctx.stroke();

      // Concentric Circles
      const circles = [380, 340, 280, 210, 140, 70];
      circles.forEach(r => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 16 and 8 Lotus Petals
      const drawLotusPetals = (numPetals, outerR, innerR) => {
        ctx.beginPath();
        for (let i = 0; i < numPetals; i++) {
          const angle1 = i * Math.PI * 2 / numPetals;
          const angle2 = (i + 1) * Math.PI * 2 / numPetals;
          const midAngle = angle1 + (angle2 - angle1) / 2;
          const x1 = cx + Math.cos(angle1) * innerR;
          const y1 = cy + Math.sin(angle1) * innerR;
          const x2 = cx + Math.cos(angle2) * innerR;
          const y2 = cy + Math.sin(angle2) * innerR;
          const xtip = cx + Math.cos(midAngle) * outerR;
          const ytip = cy + Math.sin(midAngle) * outerR;
          ctx.moveTo(x1, y1);
          ctx.quadraticCurveTo(cx + Math.cos(angle1 + 0.1) * (innerR + outerR) * 0.5, cy + Math.sin(angle1 + 0.1) * (innerR + outerR) * 0.5, xtip, ytip);
          ctx.quadraticCurveTo(cx + Math.cos(angle2 - 0.1) * (innerR + outerR) * 0.5, cy + Math.sin(angle2 - 0.1) * (innerR + outerR) * 0.5, x2, y2);
        }
        ctx.stroke();
      };
      drawLotusPetals(16, 340, 280);
      drawLotusPetals(8, 280, 210);

      // Intersecting Triangles
      const triangles = 9;
      for (let i = 0; i < triangles; i++) {
        const angle = i * Math.PI * 2 / triangles;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, -180);
        ctx.lineTo(150, 90);
        ctx.lineTo(-150, 90);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      // Center point
      ctx.fillStyle = 'rgba(255, 215, 0, 0.9)';
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    // Create the rotating background mandala
    const mandalaTex = createMandalaTexture();
    const mandalaGeo = new THREE.PlaneGeometry(5.2, 5.2);
    const mandalaMat = new THREE.MeshBasicMaterial({
      map: mandalaTex,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const mandala = new THREE.Mesh(mandalaGeo, mandalaMat);
    mandala.position.set(0, 0.2, -1.8);
    mandala.rotation.x = -0.6;
    mandala.rotation.y = 0.15;
    scene.add(mandala);

    // Create marigold petals
    const petalColors = ['#FF8C00',
    // Dark Orange
    '#FFA500',
    // Orange
    '#FFD700',
    // Gold
    '#FF4500',
    // Orange Red
    '#E65100' // Deep Orange
    ];

    // Create slightly curved 3D petal geometries by modifying vertex Z heights
    const petalGeo = new THREE.PlaneGeometry(0.12, 0.08, 3, 3);
    const posAttr = petalGeo.attributes.position;
    for (let j = 0; j < posAttr.count; j++) {
      const x = posAttr.getX(j);
      const y = posAttr.getY(j);
      if (Math.abs(x) < 0.03 && Math.abs(y) < 0.02) {
        posAttr.setZ(j, 0.035); // Spoon curve
      }
    }
    petalGeo.computeVertexNormals();
    const petals = [];
    const petalCount = 80;
    for (let i = 0; i < petalCount; i++) {
      const color = petalColors[Math.floor(Math.random() * petalColors.length)];
      const petalMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        roughness: 0.45,
        metalness: 0.08,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const mesh = new THREE.Mesh(petalGeo, petalMat);

      // Distribute across screen
      const x = (Math.random() - 0.5) * 4.5;
      const y = (Math.random() - 0.5) * 4.5;
      const z = (Math.random() - 0.5) * 2.5;
      mesh.position.set(x, y, z);

      // Varying sizes
      const scale = 0.6 + Math.random() * 0.8;
      mesh.scale.set(scale, scale, scale);

      // Random orientations
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      scene.add(mesh);
      petals.push({
        mesh: mesh,
        speed: 0.006 + Math.random() * 0.012,
        phase: Math.random() * 100,
        driftSpeed: 0.5 + Math.random() * 1.5,
        rotX: 0.005 + Math.random() * 0.015,
        rotY: 0.005 + Math.random() * 0.02,
        rotZ: 0.005 + Math.random() * 0.015,
        amplitudeX: 0.003 + Math.random() * 0.006,
        amplitudeZ: 0.002 + Math.random() * 0.004
      });
    }
    let animFrameId;
    const clock = new THREE.Clock();
    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Spin background mandala yantra
      mandala.rotation.z += 0.0012;

      // Falling / fluttering petals logic
      petals.forEach(p => {
        const m = p.mesh;
        m.position.y -= p.speed;
        m.position.x += Math.sin(elapsedTime * p.driftSpeed + p.phase) * p.amplitudeX;
        m.position.z += Math.cos(elapsedTime * p.driftSpeed + p.phase) * p.amplitudeZ;
        m.rotation.x += p.rotX;
        m.rotation.y += p.rotY;
        m.rotation.z += p.rotZ;

        // Loop around top when hit the bottom
        if (m.position.y < -2.5) {
          m.position.y = 2.5;
          m.position.x = (Math.random() - 0.5) * 4.5;
          m.position.z = (Math.random() - 0.5) * 2.5;
        }
      });
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Deep clean resources to prevent WebGL leaks
      mandalaGeo.dispose();
      mandalaMat.dispose();
      mandalaTex.dispose();
      petalGeo.dispose();
      petals.forEach(p => {
        p.mesh.material.dispose();
      });
    };
  }, [loaded]);
  return /*#__PURE__*/React.createElement("div", {
    ref: mountRef,
    className: "fixed inset-0 pointer-events-none z-0"
  });
};

// LogoSymbol: Restored to use image file with robust fallback
const LogoSymbol = ({
  size = 80,
  className = "",
  data = {}
}) => {
  const logoSrc = data.logo || "/sdss_logo.svg";
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center justify-center select-none group ${className}`,
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "SDSS",
    className: "sdss-logo-img",
    style: {
      width: 'auto',
      height: size,
      maxWidth: '100%',
      objectFit: 'contain',
      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
      imageRendering: 'high-quality'
    }
  }));
};
const Navbar = ({
  sections = [],
  liveEnabled = false,
  trustData = {}
}) => {
  const [active, setActive] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  React.useEffect(() => { 
    document.documentElement.style.overflow = mobileOpen ? 'hidden' : '';
    document.body.style.overflow = mobileOpen ? 'hidden' : ''; 
  }, [mobileOpen]);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const links = sections.filter(s => s && s.visible).map(s => {
    const secName = s.name || s.label || s.type || 'Section';
    return {
      name: secName,
      path: `#${secName.toLowerCase().replace(/\s+/g, '')}`
    };
  });
  const logoSize = typeof window !== 'undefined' && window.innerWidth < 480 ? 80 : 130;
  return /*#__PURE__*/React.createElement("nav", {
    className: `sdss-nav ${isScrolled ? 'shadow-2xl' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "sdss-nav-logo-row relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./gold_elephant.png",
    alt: "Elephant Left",
    style: { position: 'absolute', left: '3vw', bottom: '-15%', height: '115%', objectFit: 'contain', mixBlendMode: 'multiply', opacity: 0.85, zIndex: 1, pointerEvents: 'none' }
  }), /*#__PURE__*/React.createElement("img", {
    src: "./gold_elephant.png",
    alt: "Elephant Right",
    style: { position: 'absolute', right: '3vw', bottom: '-15%', height: '115%', objectFit: 'contain', mixBlendMode: 'multiply', opacity: 0.85, zIndex: 1, transform: 'scaleX(-1)', pointerEvents: 'none' }
  }), /*#__PURE__*/React.createElement("button", {
    className: "mobile-hamburger-btn",
    onClick: () => setMobileOpen(!mobileOpen),
    style: { zIndex: 100 }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-2xl`
  })), /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      document.getElementById('home')?.scrollIntoView({
        behavior: 'smooth'
      });
    },
    style: {
      textDecoration: 'none',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sdss-logo-ring"
  }, /*#__PURE__*/React.createElement(LogoSymbol, {
    size: logoSize,
    data: trustData
  })))), /*#__PURE__*/React.createElement("div", {
    className: "sdss-nav-tabs-row hidden md:flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sdss-tabs-strip"
  }, liveEnabled && /*#__PURE__*/React.createElement("a", {
    href: "#live",
    className: "sdss-tab",
    style: {
      color: '#ff4444',
      border: '1px solid currentColor'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "animate-pulse"
  }, "\u25CF"), " LIVE"), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.name,
    href: l.path,
    onClick: e => {
      e.preventDefault();
      setActive(l.name);
      const id = l.path.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    className: `sdss-tab ${active === l.name ? 'active' : ''}`
  }, l.name)), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth'
      });
    },
    className: "sdss-tab"
  }, "Contact")), /*#__PURE__*/React.createElement("a", {
    href: "#donate",
    onClick: e => {
      e.preventDefault();
      document.getElementById('donate')?.scrollIntoView({
        behavior: 'smooth'
      });
    },
    className: "sdss-tab sdss-donate-btn"
  }, /*#__PURE__*/React.createElement("span", null, "Donate"))), /*#__PURE__*/React.createElement("div", {
    className: `sdss-mobile-drawer ${mobileOpen ? 'open' : ''} md:hidden fixed w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#FAC802]/20`,
    style: {
      top: 'var(--nav-top-h)',
      height: 'calc(100vh - var(--nav-top-h))',
      left: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-6 w-full pt-8"
  }, liveEnabled && /*#__PURE__*/React.createElement("a", {
    href: "#live",
    className: "w-3/4 text-center py-3 rounded-xl border border-red-500/50 text-red-500 font-black tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(255,0,0,0.2)]",
    onClick: () => setMobileOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "animate-pulse mr-2"
  }, "\u25CF"), " LIVE"), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.name,
    href: l.path,
    onClick: e => {
      e.preventDefault();
      setActive(l.name);
      setMobileOpen(false);
      const id = l.path.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    className: `text-lg font-black uppercase tracking-widest w-full text-center py-3 ${active === l.name ? 'text-[#FAC802]' : 'text-white/70'}`
  }, l.name)), /*#__PURE__*/React.createElement("a", {
    href: "#donate",
    className: "mt-4 w-3/4 text-center py-3 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#b30000] text-white font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-2",
    onClick: () => {
      setMobileOpen(false);
      document.getElementById('donate')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-heart animate-pulse"
  }), " DONATE NOW"))));
};



// Page Components
const Home = ({
  data
}) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [mPos, setMPos] = useState({
    x: 0,
    y: 0
  });
  const rawSlides = data?.slides && data.slides.length > 0 ? data.slides : [];
  const rawVideos = data?.videos || [];
  const formattedVideos = rawVideos.map(v => ({
    id: v.id || `vid-${Date.now()}`,
    title: v.title || '',
    subtitle: v.desc || '',
    url: v.url,
    mediaType: 'video',
    type: 'video'
  }));
  const slides = [...rawSlides, ...formattedVideos];
  
  const currentSlide = slides[slideIdx];
  const mediaUrl = currentSlide?.url || currentSlide?.media?.source || '';
  const isVideo = currentSlide?.mediaType?.toLowerCase() === 'video' || currentSlide?.type === 'video' || (mediaUrl && (mediaUrl.includes('.mp4') || mediaUrl.includes('data:video')));
  const isYouTube = mediaUrl && (mediaUrl.includes('youtube.com') || mediaUrl.includes('youtu.be'));

  useEffect(() => {
    if (slides.length <= 1) return;
    let timer;
    if (isVideo || isYouTube) {
      timer = setTimeout(() => {
        setSlideIdx(prev => (prev + 1) % slides.length);
      }, 10000);
    } else {
      timer = setInterval(() => {
        setSlideIdx(prev => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => {
      clearTimeout(timer);
      clearInterval(timer);
    };
  }, [slideIdx, slides.length, isVideo, isYouTube]);
  const handleMove = e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * -15;
    setMPos({
      x,
      y
    });
  };
  if (slides.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full",
    id: "home",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("section", {
    onMouseMove: handleMove,
    onMouseLeave: () => setMPos({
      x: 0,
      y: 0
    }),
    className: "hero-section-wrapper",
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '1920 / 800',
      minHeight: '400px',
      maxHeight: '100vh',
      overflow: 'hidden',
      background: '#050505',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, slides.map((s, idx) => {
    const mediaUrl = s.url || s.media?.source || 'https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=2000';
    const isVideo = s.mediaType?.toLowerCase() === 'video' || s.type === 'video' || mediaUrl && (mediaUrl.includes('.mp4') || mediaUrl.includes('data:video'));
    const isYouTube = mediaUrl && (mediaUrl.includes('youtube.com') || mediaUrl.includes('youtu.be'));
    const getYouTubeEmbedUrl = ytUrl => {
      if (!ytUrl) return '';
      let videoId = '';
      if (ytUrl.includes('youtu.be/')) videoId = ytUrl.split('youtu.be/')[1].split('?')[0];else if (ytUrl.includes('watch?v=')) videoId = ytUrl.split('watch?v=')[1].split('&')[0];else if (ytUrl.includes('/shorts/')) videoId = ytUrl.split('/shorts/')[1].split('?')[0];else if (ytUrl.includes('/embed/')) videoId = ytUrl.split('/embed/')[1].split('?')[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=0&controls=1&showinfo=1&rel=0` : ytUrl;
    };
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        position: 'absolute',
        inset: 0,
        opacity: idx === slideIdx ? 1 : 0,
        transition: 'opacity 1.5s ease-in-out',
        pointerEvents: idx === slideIdx ? 'auto' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#050505',
        overflow: 'hidden'
      }
    }, isYouTube ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('https://img.youtube.com/vi/${getYouTubeEmbedUrl(mediaUrl).split('embed/')[1]?.split('?')[0]}/maxresdefault.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(30px) brightness(0.3)',
        transform: 'scale(1.2)',
        zIndex: 1
      }
    }) : isVideo ? /*#__PURE__*/React.createElement("video", {
      src: mediaUrl,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'blur(20px) brightness(0.35)',
        transform: 'scale(1.15)',
        zIndex: 1,
        pointerEvents: 'none'
      }
    }) : /*#__PURE__*/React.createElement("img", {
      src: mediaUrl,
      alt: "",
      onError: e => {
        if (!e.target._fallback) {
          e.target._fallback = true;
          e.target.src = 'https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=2000';
        }
      },
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'blur(20px) brightness(0.35)',
        transform: 'scale(1.15)',
        zIndex: 1,
        pointerEvents: 'none'
      }
    }), isYouTube ? /*#__PURE__*/React.createElement("iframe", {
      src: getYouTubeEmbedUrl(mediaUrl),
      className: "w-full h-full object-contain",
      frameBorder: "0",
      allow: "autoplay; encrypted-media; fullscreen; picture-in-picture",
      allowFullScreen: true,
      style: {
        position: 'relative',
        zIndex: 2
      }
    }) : isVideo ? /*#__PURE__*/React.createElement("video", {
      src: mediaUrl,
      autoPlay: true,
      muted: true, // required for autoplay in most browsers
      controls: true, // user wanted youtube-like options
      loop: false,
      poster: "https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=2000",
      preload: "metadata",
      onEnded: () => setSlideIdx(prev => (prev + 1) % slides.length), // auto advance
      onError: () => setSlideIdx(prev => (prev + 1) % slides.length), // skip if video fails to load
      playsInline: true,
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        zIndex: 2,
        backgroundColor: '#000'
      }
    }) : /*#__PURE__*/React.createElement("img", {
      src: mediaUrl,
      alt: s.title,
      onError: e => {
        if (!e.target._fallback) {
          e.target._fallback = true;
          e.target.src = 'https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=2000';
        }
      },
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 2,
        filter: 'drop-shadow(0 4px 30px rgba(0,0,0,0.6))',
        transform: idx === slideIdx ? 'scale(1.1) translate(-1%, 1%)' : 'scale(1) translate(0,0)',
        transition: 'transform 15s ease-out'
      }
    }), (isVideo || isYouTube) && /*#__PURE__*/React.createElement("button", {
      onClick: (e) => { e.stopPropagation(); setSlideIdx(prev => (prev + 1) % slides.length); },
      className: "absolute bottom-10 right-10 bg-black/70 text-white px-8 py-3 rounded-full border border-[#FAC802]/50 hover:bg-[#FAC802] hover:text-black font-black uppercase text-sm tracking-widest backdrop-blur-md transition-all shadow-xl hover:shadow-[#FAC802]/20 hover:scale-105 z-[100]",
      style: { zIndex: 100 }
    }, "Skip Video \u2192"), s.isSyncing && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 20,
        right: 20,
        background: 'rgba(0,0,0,0.6)',
        color: '#FFD700',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '10px',
        fontWeight: '900',
        letterSpacing: '0.1em',
        backdropFilter: 'blur(5px)',
        zIndex: 10
      }
    }, "SYNCING..."));
  }), /*#__PURE__*/React.createElement(motion.div, {
    animate: {
      x: ["-5%", "5%", "-5%"],
      opacity: [0.4, 0.8, 0.4]
    },
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    },
    style: {
      position: 'absolute',
      bottom: '-10%',
      left: '-10%',
      right: '-10%',
      height: '60%',
      background: 'radial-gradient(ellipse at bottom, rgba(255,255,255,0.15), transparent 60%)',
      filter: 'blur(25px)',
      pointerEvents: 'none',
      zIndex: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 5,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 70%, rgba(0,0,0,0.7) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '4px',
      zIndex: 6,
      background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), rgba(255,215,0,0.8), rgba(212,175,55,0.6), transparent)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#DEDCDC] py-6 px-6 border-b-4 border-white shadow-[0_-40px_100px_rgba(0,0,0,0.8)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto flex flex-col items-center text-center"
  }, /*#__PURE__*/React.createElement(LogoSymbol, {
    size: typeof window !== 'undefined' && window.innerWidth < 480 ? 80 : 130,
    className: "mb-3 drop-shadow-2xl"
  }), /*#__PURE__*/React.createElement(AnimatePresence, {
    mode: "wait"
  }, /*#__PURE__*/React.createElement(motion.div, {
    key: slideIdx,
    initial: {
      opacity: 0,
      scale: 0.98,
      y: 40,
      filter: "blur(10px)"
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)"
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      y: -40,
      filter: "blur(10px)"
    },
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    },
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-secondary tracking-[0.4em] font-black uppercase text-[10px] mb-1 shimmer bg-clip-text"
  }, "Divine Highlights"), /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl md:text-6xl font-black text-[#8B0000] px-4 leading-[1.1] font-telugu",
    style: {
      textShadow: "0 4px 15px rgba(0,0,0,0.15)"
    }
  }, slides[slideIdx]?.title || 'సువర్ణ దుర్గా సేవా సమితి'), /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl text-gray-800 font-serif italic max-w-2xl mx-auto px-6"
  }, slides[slideIdx]?.subtitle || slides[slideIdx]?.caption || slides[slideIdx]?.description || slides[slideIdx]?.desc || 'Divine Grace and Service'))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex justify-center w-full"
  }, /*#__PURE__*/React.createElement(motion.a, {
    href: "#donate",
    whileHover: {
      scale: 1.05,
      y: -2
    },
    whileTap: {
      scale: 0.98
    },
    className: "px-10 py-4 bg-[#FAC802] text-[#8B0000] rounded-xl font-black text-sm shadow-xl transition-all flex items-center justify-center gap-2 border border-black/10"
  }, "SUPPORT MISSION"))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-1 border-y border-white relative z-30 shadow-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white border-y-2 border-white text-[#949292] font-black py-2 text-center overflow-hidden flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "whitespace-nowrap animate-marquee text-xs tracking-widest flex items-center w-max shrink-0 min-w-max"
  }, [...Array(40)].map((_, i) => /*#__PURE__*/React.createElement("span", { key: i, className: "pr-12" }, data?.marqueeText || '⚡ JOIN OUR DAILY ANNADHANAM MISSION • SPECIAL NAVARATRI KUMKUMA ARCHANA • ONLINE BOOKINGS NOW OPEN FOR ALL DEVOTEES ⚡'))))));
};
const formatText = (text) => {
  if (!text) return '';
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) => i % 2 === 1 ? /*#__PURE__*/React.createElement('strong', { key: i, className: 'text-[#FAC802] font-black tracking-wide text-lg' }, part) : part);
};
const About = ({
  data
}) => {
  const [selectedTab, setSelectedTab] = useState(null);
  React.useEffect(() => { 
    document.documentElement.style.overflow = selectedTab ? 'hidden' : '';
    document.body.style.overflow = selectedTab ? 'hidden' : ''; 
  }, [selectedTab]);
  const [targetLang, setTargetLang] = useState('en');
  const [translatedTitle, setTranslatedTitle] = useState('');
  const [translatedContent, setTranslatedContent] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationCache, setTranslationCache] = useState({});
  const missionText = data?.mission || 'Construct the Suvarna Durga Mata Temple as a spiritual epicenter for Devotion, Annadhanam, and cultural elevation. This will serve as a beacon of hope, bringing the community together through shared spiritual practices and large-scale food distribution for the needy.';
  const visionText = data?.vision || 'A self-sustaining divine ecosystem empowering youth, women, and ensuring complete basic healthcare & food security for all devotees. We envision a future where spirituality seamlessly integrates with social welfare, creating a balanced and harmonious society.';
  const tabs = [{
    id: 'mission',
    title: 'Mission',
    content: missionText,
    num: '01',
    icon: 'fa-bullseye'
  }, {
    id: 'vision',
    title: 'Vision',
    content: visionText,
    num: '02',
    icon: 'fa-eye'
  }];
  const languages = [{
    code: 'en',
    name: 'English'
  }, {
    code: 'te',
    name: 'Telugu - తెలుగు'
  }, {
    code: 'hi',
    name: 'Hindi - हिन्दी'
  }, {
    code: 'ta',
    name: 'Tamil - தமிழ்'
  }, {
    code: 'kn',
    name: 'Kannada - ಕನ್ನಡ'
  }, {
    code: 'ml',
    name: 'Malayalam - മലയാളം'
  }, {
    code: 'mr',
    name: 'Marathi - मराठी'
  }, {
    code: 'gu',
    name: 'Gujarati - ગુજરાતી'
  }, {
    code: 'bn',
    name: 'Bengali - বাংলা'
  }, {
    code: 'ur',
    name: 'Urdu - اردو'
  }, {
    code: 'pa',
    name: 'Punjabi - ਪੰਜਾਬੀ'
  }, {
    code: 'or',
    name: 'Odia - ଓଡ଼િଆ'
  }, {
    code: 'as',
    name: 'Assamese - অসমীয়া'
  }, {
    code: 'sa',
    name: 'Sanskrit - संस्कृतम्'
  }, {
    code: 'ne',
    name: 'Nepali - नेपाली'
  }, {
    code: 'si',
    name: 'Sinhala - සිංහල'
  }, {
    code: 'es',
    name: 'Spanish - Español'
  }, {
    code: 'fr',
    name: 'French - Français'
  }, {
    code: 'de',
    name: 'German - Deutsch'
  }, {
    code: 'it',
    name: 'Italian - Italiano'
  }, {
    code: 'pt',
    name: 'Portuguese - Português'
  }, {
    code: 'ru',
    name: 'Russian - Русский'
  }, {
    code: 'ja',
    name: 'Japanese - 日本語'
  }, {
    code: 'zh-CN',
    name: 'Chinese (Simplified) - 中文'
  }, {
    code: 'ko',
    name: 'Korean - 한국어'
  }, {
    code: 'ar',
    name: 'Arabic - العربية'
  }, {
    code: 'tr',
    name: 'Turkish - Türkçe'
  }, {
    code: 'vi',
    name: 'Vietnamese - Tiếng Việt'
  }, {
    code: 'th',
    name: 'Thai - ไทย'
  }, {
    code: 'id',
    name: 'Indonesian - Bahasa Indonesia'
  }, {
    code: 'ms',
    name: 'Malay - Bahasa Melayu'
  }, {
    code: 'nl',
    name: 'Dutch - Nederlands'
  }, {
    code: 'pl',
    name: 'Polish - Polski'
  }, {
    code: 'uk',
    name: 'Ukrainian - Українська'
  }, {
    code: 'el',
    name: 'Greek - Ελληνικά'
  }, {
    code: 'he',
    name: 'Hebrew - עברית'
  }, {
    code: 'fa',
    name: 'Persian - فارسی'
  }, {
    code: 'sv',
    name: 'Swedish - Svenska'
  }, {
    code: 'fi',
    name: 'Finnish - Suomi'
  }, {
    code: 'da',
    name: 'Danish - Dansk'
  }, {
    code: 'no',
    name: 'Norwegian - Norsk'
  }, {
    code: 'hu',
    name: 'Hungarian - Magyar'
  }, {
    code: 'cs',
    name: 'Czech - Čeština'
  }, {
    code: 'ro',
    name: 'Romanian - Română'
  }, {
    code: 'bg',
    name: 'Bulgarian - Български'
  }, {
    code: 'sr',
    name: 'Serbian - Српски'
  }, {
    code: 'hr',
    name: 'Croatian - Hrvatski'
  }, {
    code: 'sk',
    name: 'Slovak - Slovenčina'
  }, {
    code: 'sl',
    name: 'Slovenian - Slovenščina'
  }, {
    code: 'lt',
    name: 'Lithuanian - Lietuvių'
  }, {
    code: 'lv',
    name: 'Latvian - Latviešu'
  }, {
    code: 'et',
    name: 'Estonian - Eesti'
  }, {
    code: 'sq',
    name: 'Albanian - Shqip'
  }, {
    code: 'mk',
    name: 'Macedonian - Македонски'
  }, {
    code: 'bs',
    name: 'Bosnian - Bosanski'
  }, {
    code: 'ka',
    name: 'Georgian - ქართული'
  }, {
    code: 'hy',
    name: 'Armenian - Հայերեն'
  }, {
    code: 'az',
    name: 'Azerbaijani - Azərbaycan'
  }, {
    code: 'kk',
    name: 'Kazakh - Қазақша'
  }, {
    code: 'uz',
    name: 'Uzbek - Oʻzbek'
  }, {
    code: 'ky',
    name: 'Kyrgyz - Кыргызча'
  }, {
    code: 'tg',
    name: 'Tajik - Тоҷикӣ'
  }, {
    code: 'tk',
    name: 'Turkmen - Türkmen'
  }, {
    code: 'mn',
    name: 'Mongolian - Монгол'
  }, {
    code: 'my',
    name: 'Burmese - မြန်မာ'
  }, {
    code: 'km',
    name: 'Khmer - ខ្មែរ'
  }, {
    code: 'lo',
    name: 'Lao - လာအို'
  }, {
    code: 'am',
    name: 'Amharic - አማርኛ'
  }, {
    code: 'ti',
    name: 'Tigrinya - ትግርኛ'
  }, {
    code: 'om',
    name: 'Oromo - Oromoo'
  }, {
    code: 'so',
    name: 'Somali - Soomaali'
  }, {
    code: 'sw',
    name: 'Swahili - Kiswahili'
  }, {
    code: 'rw',
    name: 'Kinyarwanda - Ikinyarwanda'
  }, {
    code: 'ig',
    name: 'Igbo - Asụsụ Igbo'
  }, {
    code: 'yo',
    name: 'Yoruba - Èdè Yorùbá'
  }, {
    code: 'ha',
    name: 'Hausa - Hausa'
  }, {
    code: 'zu',
    name: 'Zulu - isiZulu'
  }, {
    code: 'xh',
    name: 'Xhosa - isiXhosa'
  }, {
    code: 'st',
    name: 'Sesotho - Sesotho'
  }, {
    code: 'sn',
    name: 'Shona - chiShona'
  }, {
    code: 'ny',
    name: 'Chichewa - Chichewa'
  }, {
    code: 'mg',
    name: 'Malagasy - Malagasy'
  }, {
    code: 'sm',
    name: 'Samoan - Gagana Sāmoa'
  }, {
    code: 'fj',
    name: 'Fijian - Vosa Vakaviti'
  }, {
    code: 'mi',
    name: 'Maori - Te Reo Māori'
  }, {
    code: 'haw',
    name: 'Hawaiian - ʻŌlelo Hawaiʻi'
  }, {
    code: 'ht',
    name: 'Haitian Creole - Kreyòl Ayisyen'
  }, {
    code: 'la',
    name: 'Latin - Latina'
  }, {
    code: 'eo',
    name: 'Esperanto - Esperanto'
  }];
  useEffect(() => {
    if (selectedTab) {
      setTargetLang('en');
      setTranslatedTitle(selectedTab.title);
      setTranslatedContent(selectedTab.content);
    }
  }, [selectedTab]);
  useEffect(() => {
    if (!selectedTab) return;
    if (targetLang === 'en') {
      setTranslatedTitle(selectedTab.title);
      setTranslatedContent(selectedTab.content);
      return;
    }
    const cacheKey = `${selectedTab.id}_${targetLang}`;

    // 20x Faster: Use instant memory cache if already translated once
    if (translationCache[cacheKey]) {
      setTranslatedTitle(translationCache[cacheKey].title);
      setTranslatedContent(translationCache[cacheKey].content);
      return;
    }
    let isMounted = true;
    const translate = async () => {
      /*setIsTranslating(true)*/;
      try {
        let finalTitle = selectedTab.title || '';
        if (finalTitle) {
          const resTitle = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(finalTitle)}`);
          const dataTitle = await resTitle.json();
          finalTitle = dataTitle[0].map(x => x[0]).join('');
        }
        let finalContent = selectedTab.content || '';
        if (finalContent) {
          const resContent = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(finalContent)}`);
          const dataContent = await resContent.json();
          finalContent = dataContent[0].map(x => x[0]).join('');
        }
        if (isMounted) {
          setTranslatedTitle(finalTitle);
          setTranslatedContent(finalContent);

          // Save to cache for instant zero-delay future clicks
          setTranslationCache(prev => ({
            ...prev,
            [cacheKey]: {
              title: finalTitle,
              content: finalContent
            }
          }));
        }
      } catch (error) {
        console.error("Translation failed", error);
        if (isMounted) {
          setTranslatedTitle(selectedTab.title);
          setTranslatedContent(selectedTab.content);
        }
      } finally {
        if (isMounted) setIsTranslating(false);
      }
    };
    translate();
    return () => {
      isMounted = false;
    };
  }, [targetLang, selectedTab, translationCache]);
  return /*#__PURE__*/React.createElement("div", {
    id: "about",
    className: "py-10 px-4 bg-[#f8f9fa] relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-96 h-96 bg-[#FAC802]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto text-center relative z-10"
  }, /*#__PURE__*/React.createElement(motion.p, {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1
    },
    className: "text-[#FAC802] font-black tracking-[0.4em] uppercase text-[10px] mb-4"
  }, "Established in Devotion"), /*#__PURE__*/React.createElement(motion.h1, {
    initial: {
      opacity: 0,
      y: 20
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    className: "text-4xl md:text-5xl font-black text-[#8B0000] mb-4 uppercase tracking-tighter"
  }, "Our Spiritual Journey"), /*#__PURE__*/React.createElement(motion.p, {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1
    },
    transition: {
      delay: 0.2
    },
    className: "text-base text-gray-600 mb-8 whitespace-pre-line leading-relaxed max-w-3xl mx-auto font-medium"
  }, data?.text || 'Suvarna Durga Seva Samiti is founded on the pillars of spiritual elevation and selfless service to humanity.'), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4 text-left max-w-4xl mx-auto"
  }, tabs.map(tab => /*#__PURE__*/React.createElement(motion.div, {
    key: tab.id,
    className: "relative overflow-hidden rounded-2xl transition-all duration-500 border shadow-xl bg-white border-gray-100 hover:border-[#FAC802]/30 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group",
    onClick: () => setSelectedTab(tab)
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FAC802]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-4 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-black transition-colors duration-500 text-gray-200 group-hover:text-[#FAC802]/40"
  }, tab.num), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-black font-serif uppercase tracking-wider transition-colors duration-500 text-[#8B0000] group-hover:text-[#FAC802]"
  }, tab.title)), /*#__PURE__*/React.createElement("button", {
    className: "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 bg-gray-50 text-gray-400 group-hover:bg-[#FAC802]/10 group-hover:text-[#FAC802]"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 group-hover:translate-x-1 transition-transform",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    d: "M9 5l7 7-7 7"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pl-12 pr-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm leading-relaxed transition-all duration-500 text-gray-500 line-clamp-2 font-medium"
  }, tab.content), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    className: "px-4 py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center gap-2 bg-gray-100 text-gray-500 group-hover:bg-[#8B0000] group-hover:text-white"
  }, "View More", /*#__PURE__*/React.createElement("svg", {
    className: "w-3 h-3 group-hover:translate-x-1 transition-transform",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    d: "M14 5l7 7m0 0l-7 7m7-7H3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "h-[2px] flex-1 rounded-full transition-colors duration-300 bg-gradient-to-r from-gray-200 to-transparent group-hover:from-[#8B0000]/20"
  })))))))), /*#__PURE__*/React.createElement(AnimatePresence, null, selectedTab && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md",
    onClick: () => setSelectedTab(null)
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      scale: 0.9,
      y: 20,
      opacity: 0
    },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1
    },
    exit: {
      scale: 0.9,
      y: 20,
      opacity: 0
    },
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300
    },
    className: "bg-[#0a0a0a] border border-[#FAC802]/20 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(250,200,2,0.15)] relative",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedTab(null),
    className: "absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-[#FAC802] text-white hover:text-black rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-transparent backdrop-blur-md"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times text-lg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-5/12 h-48 md:h-auto relative bg-[#111] flex items-center justify-center overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-black"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-9xl opacity-10 grayscale absolute font-black font-serif transform -translate-y-4"
  }, selectedTab.num), /*#__PURE__*/React.createElement("img", {
    src: window.TRUST_LOGO_DATA || '/sdss_logo.svg',
    alt: "Trust Logo",
    className: "w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(250,200,2,0.5)] z-10 animate-pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a] hidden md:block"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent block md:hidden"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-7/12 p-5 sm:p-8 md:p-12 flex flex-col justify-start overflow-y-auto divine-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[#FAC802] text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-6 left-8 md:left-12 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-language text-[#FAC802] text-xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    value: targetLang,
    onChange: e => setTargetLang(e.target.value),
    className: "appearance-none bg-black/50 border border-white/10 hover:border-[#FAC802]/50 text-white text-xs font-bold uppercase tracking-wider py-2 pl-4 pr-8 rounded-full outline-none focus:ring-2 focus:ring-[#FAC802]/50 transition-all cursor-pointer backdrop-blur-md"
  }, languages.map(lang => /*#__PURE__*/React.createElement("option", {
    key: lang.code,
    value: lang.code,
    className: "bg-black text-white"
  }, lang.name))), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-down text-[10px]"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-[2px] bg-[#FAC802]"
  }), "Suvarna Durga Seva Samiti"), /*#__PURE__*/React.createElement("div", {
    className: "min-h-[200px] relative shrink-0 mt-12 md:mt-8"
  }, /*#__PURE__*/React.createElement(AnimatePresence, {
    mode: "wait"
  }, isTranslating ? /*#__PURE__*/React.createElement(motion.div, {
    key: "loading",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "absolute inset-0 flex flex-col items-start justify-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-[#FAC802] animate-ping"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-[#FAC802] animate-ping",
    style: {
      animationDelay: '0.1s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-[#FAC802] animate-ping",
    style: {
      animationDelay: '0.2s'
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-[#FAC802] text-xs font-black uppercase tracking-widest animate-pulse"
  }, "Ultra-Fast Translating...")) : /*#__PURE__*/React.createElement(motion.div, {
    key: "content",
    initial: {
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: 20
    },
    transition: {
      duration: 0.2
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white mb-6 uppercase leading-tight drop-shadow-lg"
  }, translatedTitle || selectedTab.title), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-300 text-base md:text-lg leading-relaxed font-medium mb-10 whitespace-pre-wrap"
  }, formatText(translatedContent || selectedTab.content))))))))));
};
const Navaratri = ({
  data
}) => {
  const [selectedDay, setSelectedDay] = useState(null);
  React.useEffect(() => { 
    document.documentElement.style.overflow = selectedDay ? 'hidden' : '';
    document.body.style.overflow = selectedDay ? 'hidden' : ''; 
  }, [selectedDay]);
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 30
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  const allDays = data?.days || [];
  const [targetLang, setTargetLang] = useState('en');
  const [translatedTitle, setTranslatedTitle] = useState('');
  const [translatedContent, setTranslatedContent] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  const languages = [{
    code: 'en',
    name: 'English'
  }, {
    code: 'te',
    name: 'తెలుగు (Telugu)'
  }, {
    code: 'hi',
    name: 'हिन्दी (Hindi)'
  }, {
    code: 'ta',
    name: 'தமிழ் (Tamil)'
  }, {
    code: 'kn',
    name: 'ಕನ್ನಡ (Kannada)'
  }, {
    code: 'ml',
    name: 'മലയാളം (Malayalam)'
  }, {
    code: 'mr',
    name: 'मराठी (Marathi)'
  }, {
    code: 'gu',
    name: 'ગુજરાતી (Gujarati)'
  }, {
    code: 'bn',
    name: 'বাংলা (Bengali)'
  }, {
    code: 'es',
    name: 'Español'
  }, {
    code: 'fr',
    name: 'Français'
  }, {
    code: 'de',
    name: 'Deutsch'
  }, {
    code: 'ja',
    name: '日本語'
  }];
  useEffect(() => {
    if (selectedDay) {
      setTargetLang('en');
      setTranslatedTitle(selectedDay.goddess || '');
      setTranslatedContent(selectedDay.significance || '');
    }
  }, [selectedDay]);
  useEffect(() => {
    if (!selectedDay) return;
    if (targetLang === 'en') {
      setTranslatedTitle(selectedDay.goddess || '');
      setTranslatedContent(selectedDay.significance || '');
      return;
    }
    let isMounted = true;
    const translate = async () => {
      /*setIsTranslating(true)*/;
      try {
        const titleText = selectedDay.goddess || '';
        let finalTitle = titleText;
        if (titleText) {
          const resTitle = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(titleText)}`);
          const dataTitle = await resTitle.json();
          finalTitle = dataTitle[0].map(x => x[0]).join('');
        }
        const contentText = selectedDay.significance || '';
        let finalContent = contentText;
        if (contentText) {
          const resContent = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(contentText)}`);
          const dataContent = await resContent.json();
          finalContent = dataContent[0].map(x => x[0]).join('');
        }
        if (isMounted) {
          setTranslatedTitle(finalTitle);
          setTranslatedContent(finalContent);
        }
      } catch (error) {
        console.error("Translation failed", error);
        if (isMounted) {
          setTranslatedTitle(selectedDay.goddess || '');
          setTranslatedContent(selectedDay.significance || '');
        }
      } finally {
        if (isMounted) setIsTranslating(false);
      }
    };
    translate();
    return () => {
      isMounted = false;
    };
  }, [targetLang, selectedDay]);
  if (allDays.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    id: "navaratri",
    className: "py-10 bg-[#FAC802] relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-6 text-white"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-secondary font-black tracking-[0.5em] text-[10px] uppercase mb-4 block"
  }, "Celebration of Grace"), /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl md:text-5xl font-black mb-4 text-[#8B0000]"
  }, "Navaratri Mahotsavalu"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm md:text-lg text-[#8B0000]/80 max-w-2xl mx-auto font-medium"
  }, data?.text || '9 Days of Divine Grace, Special Alankarams and Kumkuma Archana.')), /*#__PURE__*/React.createElement(motion.div, {
    variants: container,
    initial: "hidden",
    whileInView: "show",
    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5"
  }, allDays.map(d => /*#__PURE__*/React.createElement(motion.div, {
    key: d.day,
    variants: item,
    whileHover: {
      y: -5
    },
    onClick: () => setSelectedDay(d),
    className: "premium-glass p-3 rounded-xl flex flex-col items-center group shadow-lg border border-secondary/20 bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-2 group-hover:scale-105 transition-transform"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] md:text-xs font-black tracking-[0.2em] text-[#8B0000]/80 uppercase"
  }, d.day)), /*#__PURE__*/React.createElement("h3", {
    className: "text-[11px] md:text-xs font-black text-[#8B0000] mb-2 text-center tracking-wide uppercase leading-snug"
  }, d.goddess), /*#__PURE__*/React.createElement("p", {
    className: "text-[9px] md:text-[10px] text-[#8B0000]/70 text-center leading-tight h-6 overflow-hidden font-medium"
  }, d.significance), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-black uppercase text-[#8B0000] tracking-wider"
  }, "View More"), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right text-[9px] text-[#8B0000] group-hover:translate-x-1 transition-transform"
  })))))), /*#__PURE__*/React.createElement(AnimatePresence, null, selectedDay && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md",
    onClick: () => setSelectedDay(null)
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      scale: 0.9,
      y: 20,
      opacity: 0
    },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1
    },
    exit: {
      scale: 0.9,
      y: 20,
      opacity: 0
    },
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300
    },
    className: "bg-[#0a0a0a] border border-[#FAC802]/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(250,200,2,0.15)] relative",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedDay(null),
    className: "absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-[#FAC802] text-white hover:text-black rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-transparent backdrop-blur-md"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times text-lg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-5/12 h-48 md:h-auto relative bg-[#111] flex items-center justify-center overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-black"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-9xl opacity-10 grayscale absolute font-black font-serif transform -translate-y-4"
  }, selectedDay.day), /*#__PURE__*/React.createElement("img", {
    src: window.TRUST_LOGO_DATA || '/sdss_logo.svg',
    alt: "Trust Logo",
    className: "w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(250,200,2,0.5)] z-10 animate-pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a] hidden md:block"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent block md:hidden"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-7/12 p-5 sm:p-8 md:p-12 flex flex-col justify-start overflow-y-auto divine-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[#FAC802] text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-6 left-8 md:left-12 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-language text-[#FAC802] text-xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    value: targetLang,
    onChange: e => setTargetLang(e.target.value),
    className: "appearance-none bg-black/50 border border-white/10 hover:border-[#FAC802]/50 text-white text-xs font-bold uppercase tracking-wider py-2 pl-4 pr-8 rounded-full outline-none focus:ring-2 focus:ring-[#FAC802]/50 transition-all cursor-pointer backdrop-blur-md"
  }, languages.map(lang => /*#__PURE__*/React.createElement("option", {
    key: lang.code,
    value: lang.code,
    className: "bg-black text-white"
  }, lang.name))), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-down text-[10px]"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-[2px] bg-[#FAC802]"
  }), selectedDay.day + " OF NAVARATRI"), /*#__PURE__*/React.createElement("div", {
    className: "min-h-[200px] relative shrink-0 mt-12 md:mt-8"
  }, /*#__PURE__*/React.createElement(AnimatePresence, {
    mode: "wait"
  }, isTranslating ? /*#__PURE__*/React.createElement(motion.div, {
    key: "loading",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "absolute inset-0 flex flex-col items-start justify-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-[#FAC802] animate-bounce"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-[#FAC802] animate-bounce",
    style: {
      animationDelay: '0.1s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-[#FAC802] animate-bounce",
    style: {
      animationDelay: '0.2s'
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-[#FAC802]/70 text-xs font-bold uppercase tracking-widest animate-pulse"
  }, "Translating...")) : /*#__PURE__*/React.createElement(motion.div, {
    key: "content",
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -10
    },
    transition: {
      duration: 0.3
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white mb-6 uppercase leading-tight drop-shadow-lg break-words hyphens-auto"
  }, translatedTitle || selectedDay.goddess), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-300 text-base md:text-lg leading-relaxed font-medium mb-10 whitespace-pre-wrap"
  }, translatedContent || selectedDay.significance)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      document.getElementById('donate').scrollIntoView();
      setSelectedDay(null);
    },
    className: "mt-auto self-start px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-full font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(250,200,2,0.4)] hover:scale-105 transition-all flex items-center gap-3"
  }, "Support Navaratri Seva ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-heart text-red-600 animate-pulse"
  })))))));
};

const parseProgramImages = (imagesStr, imagesArr) => {
  let images = [];
  const isValidImg = (s) => s && typeof s === 'string' && s.length > 10 && (s.startsWith('http') || s.startsWith('/') || s.startsWith('data:image/'));

  if (imagesArr && Array.isArray(imagesArr) && imagesArr.length > 0) {
    images = imagesArr.filter(isValidImg);
  } else if (imagesStr && typeof imagesStr === 'string') {
    if (imagesStr.includes('|')) {
      images = imagesStr.split('|').map(s => s.trim()).filter(isValidImg);
    } else {
      const urls = imagesStr.match(/(data:image\/[^;]+;base64,[a-zA-Z0-9+/=]+|https?:\/\/[^, \|]+)/g);
      if (urls && urls.length > 0) {
        images = urls;
      } else {
        const cleaned = imagesStr.split(',').map(s => s.trim()).filter(isValidImg);
        if (cleaned.length > 0) images = cleaned;
      }
    }
  }

  // Filter out the known demo unsplash urls
  return images.filter(img => !img.includes('1590080875515') && !img.includes('1588722883393') && !img.includes('1544921604') && !img.includes('1631464312836'));
};

const ProgramImageGallery = ({ imagesStr, imagesArr, altTitle, className }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const images = parseProgramImages(imagesStr, imagesArr);

  if (images.length === 0) {
    return null;
  }

  const nextSlide = () => setImgIdx(prev => (prev + 1) % images.length);
  const prevSlide = () => setImgIdx(prev => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  useEffect(() => {
    if (images.length > 1) {
      const nextImg = new Image();
      nextImg.src = images[(imgIdx + 1) % images.length];
    }
  }, [imgIdx, images]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: className || "w-full h-full relative overflow-hidden bg-black group rounded-l-3xl",
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }, /*#__PURE__*/React.createElement("style", null, `
    @keyframes kenBurnsEffect {
      0% { transform: scale(1); }
      100% { transform: scale(1.15); }
    }
  `), images.map((img, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: img,
    alt: altTitle,
    loading: i === 0 ? "eager" : "lazy",
    className: "w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out",
    style: {
      opacity: i === imgIdx ? 1 : 0,
      zIndex: i === imgIdx ? 10 : 1,
      animation: i === imgIdx && images.length > 1 ? 'kenBurnsEffect 6s ease-out forwards' : 'none'
    },
    onError: e => {
      e.target.onerror = null;
      e.target.style.display = 'none';
    }
  })), images.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      prevSlide();
    },
    className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/60"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      nextSlide();
    },
    className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/60"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-4 left-0 w-full flex justify-center gap-2 z-20"
  }, images.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: e => {
      e.stopPropagation();
      setImgIdx(i);
    },
    className: `w-2 h-2 rounded-full transition-all ${i === imgIdx ? 'bg-primary w-6' : 'bg-white/50 hover:bg-white'}`
  })))));
};

const TranslationModal = ({ item, setItem, tagText, buttonText, buttonLink }) => {
  const [targetLang, setTargetLang] = useState('en');
  const [translatedTitle, setTranslatedTitle] = useState('');
  const [translatedContent, setTranslatedContent] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  const languages = [
    { code: 'en', name: 'English' }, { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'hi', name: 'हिन्दी (Hindi)' }, { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' }, { code: 'ml', name: 'മലയാളം (Malayalam)' },
    { code: 'mr', name: 'मराठी (Marathi)' }, { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
    { code: 'bn', name: 'বাংলা (Bengali)' }, { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' }, { code: 'de', name: 'Deutsch' }, { code: 'ja', name: '日本語' }
  ];

  useEffect(() => {
    if (item) {
      setTargetLang('en');
      setTranslatedTitle(item.title || '');
      setTranslatedContent(item.desc || item.text || '');
    }
  }, [item]);

  useEffect(() => {
    if (!item) return;
    if (targetLang === 'en') {
      setTranslatedTitle(item.title || '');
      setTranslatedContent(item.desc || item.text || '');
      setIsTranslating(false);
      return;
    }
    let isMounted = true;
    const translate = async () => {
      /*setIsTranslating(true)*/;
      try {
        window.translationCache = window.translationCache || {};
        const titleText = item.title || '';
        let finalTitle = titleText;
        if (titleText) {
          const keyTitle = targetLang + '_' + titleText;
          if (window.translationCache[keyTitle]) {
            finalTitle = window.translationCache[keyTitle];
          } else {
            const resTitle = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(titleText)}`);
            const dataTitle = await resTitle.json();
            finalTitle = dataTitle[0].map(x => x[0]).join('');
            window.translationCache[keyTitle] = finalTitle;
          }
        }
        const contentText = item.desc || item.text || '';
        let finalContent = contentText;
        if (contentText) {
          const keyContent = targetLang + '_' + contentText;
          if (window.translationCache[keyContent]) {
            finalContent = window.translationCache[keyContent];
          } else {
            const resContent = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(contentText)}`);
            const dataContent = await resContent.json();
            finalContent = dataContent[0].map(x => x[0]).join('');
            window.translationCache[keyContent] = finalContent;
          }
        }
        if (isMounted) {
          setTranslatedTitle(finalTitle);
          setTranslatedContent(finalContent);
        }
      } catch (error) {
        console.error("Translation failed", error);
        if (isMounted) {
          setTranslatedTitle(item.title || '');
          setTranslatedContent(item.desc || item.text || '');
        }
      } finally {
        if (isMounted) setIsTranslating(false);
      }
    };
    translate();
    return () => { isMounted = false; };
  }, [targetLang, item]);

  return /*#__PURE__*/React.createElement(AnimatePresence, null, item && /*#__PURE__*/React.createElement(motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md",
    onClick: () => setItem(null)
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: { scale: 0.9, y: 20, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.9, y: 20, opacity: 0 },
    transition: { type: 'spring', damping: 25, stiffness: 300 },
    className: "bg-[#0a0a0a] border border-[#FAC802]/20 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(250,200,2,0.15)] relative",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setItem(null),
    className: "absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-[#FAC802] text-white hover:text-black rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-transparent backdrop-blur-md"
  }, /*#__PURE__*/React.createElement("i", { className: "fas fa-times text-lg" })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 h-64 md:h-auto relative bg-[#111]"
  }, (() => {
    const validImages = parseProgramImages(item.image || item.icon || item.url || '', item.images);
    if (validImages.length > 0) {
      return /*#__PURE__*/React.createElement(ProgramImageGallery, {
        imagesStr: item.image || item.icon || item.url || '',
        imagesArr: item.images,
        altTitle: item.title,
        className: "w-full h-full relative overflow-hidden bg-[#111] group"
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "w-full h-full flex items-center justify-center text-9xl opacity-20"
    }, "✨");
  })(), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a] hidden md:block"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent block md:hidden"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 p-5 sm:p-8 md:p-12 flex flex-col justify-start overflow-y-auto divine-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-6 left-8 md:left-12 z-[60] flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("i", { className: "fas fa-language text-[#FAC802] text-xl" }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    value: targetLang,
    onChange: e => setTargetLang(e.target.value),
    className: "appearance-none bg-black/50 border border-white/10 hover:border-[#FAC802]/50 text-white text-xs font-bold uppercase tracking-wider py-2 pl-4 pr-8 rounded-full outline-none focus:ring-2 focus:ring-[#FAC802]/50 transition-all cursor-pointer backdrop-blur-md"
  }, languages.map(lang => /*#__PURE__*/React.createElement("option", {
    key: lang.code,
    value: lang.code,
    className: "bg-black text-white"
  }, lang.name))), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50"
  }, /*#__PURE__*/React.createElement("i", { className: "fas fa-chevron-down text-[10px]" })))), /*#__PURE__*/React.createElement("div", {
    className: "text-[#FAC802] text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2 mt-12 md:mt-8"
  }, /*#__PURE__*/React.createElement("span", { className: "w-8 h-[2px] bg-[#FAC802]" }), tagText), /*#__PURE__*/React.createElement("div", {
    className: "min-h-[200px] relative shrink-0"
  }, /*#__PURE__*/React.createElement(AnimatePresence, { mode: "wait" }, isTranslating ? /*#__PURE__*/React.createElement(motion.div, {
    key: "loading",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    className: "absolute inset-0 flex flex-col items-start justify-center gap-4"
  }, /*#__PURE__*/React.createElement("div", { className: "flex gap-2" }, /*#__PURE__*/React.createElement("div", { className: "w-3 h-3 rounded-full bg-[#FAC802] animate-bounce" }), /*#__PURE__*/React.createElement("div", { className: "w-3 h-3 rounded-full bg-[#FAC802] animate-bounce", style: { animationDelay: '0.1s' } }), /*#__PURE__*/React.createElement("div", { className: "w-3 h-3 rounded-full bg-[#FAC802] animate-bounce", style: { animationDelay: '0.2s' } })), /*#__PURE__*/React.createElement("p", { className: "text-[#FAC802]/70 text-xs font-bold uppercase tracking-widest animate-pulse" }, "Translating...")) : /*#__PURE__*/React.createElement(motion.div, {
    key: "content",
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 }
  }, /*#__PURE__*/React.createElement("h2", { className: "text-3xl md:text-5xl font-serif font-black text-white mb-6 uppercase leading-tight drop-shadow-lg" }, translatedTitle || item.title), /*#__PURE__*/React.createElement("div", { className: "text-gray-300 text-base md:text-lg leading-relaxed font-medium mb-10 whitespace-pre-wrap" }, translatedContent || item.desc || item.text)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (buttonLink && buttonLink !== '#') {
        window.open(buttonLink, '_blank');
      } else {
        document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
      }
      setItem(null);
    },
    className: "mt-8 shrink-0 self-start px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-full font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(250,200,2,0.4)] hover:scale-105 transition-all flex items-center gap-3"
  }, buttonText, /*#__PURE__*/React.createElement("i", { className: "fas fa-heart text-red-600 animate-pulse" }))))));
};

const Events = ({
  data
}) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  React.useEffect(() => { 
    document.documentElement.style.overflow = selectedEvent ? 'hidden' : '';
    document.body.style.overflow = selectedEvent ? 'hidden' : ''; 
  }, [selectedEvent]);
  const eventsList = data?.list || [];
  if (eventsList.length === 0) return null;
  const nextSlide = () => {
    setSlideIdx((prev) => (prev + 1) % eventsList.length);
  };
  const prevSlide = () => {
    setSlideIdx((prev) => (prev - 1 + eventsList.length) % eventsList.length);
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "events",
    className: "py-20 bg-[#FAF9F6] relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl md:text-5xl font-black text-secondary uppercase tracking-tight"
  }, "Upcoming Events"), /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-1 bg-primary mx-auto mt-4 rounded-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex transition-transform duration-700 ease-in-out",
    style: { transform: `translateX(-${slideIdx * 100}%)` }
  }, eventsList.map((ev, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "w-full flex-shrink-0 flex flex-col md:flex-row min-h-[400px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 h-64 md:h-auto relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: ev.image || ev.icon || ev.url || 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=1000&auto=format&fit=crop',
    alt: ev.title,
    className: "w-full h-full object-cover absolute inset-0"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-primary font-bold tracking-widest uppercase text-sm mb-2"
  }, ev.date || 'Upcoming'), /*#__PURE__*/React.createElement("h3", {
    className: "text-3xl font-black text-secondary mb-4 leading-tight"
  }, ev.title), /*#__PURE__*/React.createElement("p", {
    className: "text-base text-gray-600 leading-relaxed mb-8 line-clamp-3"
  }, ev.desc), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-auto w-full"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedEvent(ev),
    className: "px-8 py-3 border-2 border-secondary/20 text-secondary rounded-full font-bold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center justify-center gap-2"
  }, "View More", /*#__PURE__*/React.createElement("i", { className: "fas fa-arrow-right" })), /*#__PURE__*/React.createElement("a", {
    href: (ev.btnUrl && ev.btnUrl !== '#') ? ev.btnUrl : ev.regLink || ev.link || "#donate",
    target: ((ev.btnUrl && ev.btnUrl !== '#') || ev.regLink || ev.link) ? "_blank" : undefined,
    rel: ((ev.btnUrl && ev.btnUrl !== '#') || ev.regLink || ev.link) ? "noopener noreferrer" : undefined,
    className: "px-8 py-3 bg-[#8B0000] text-white rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#8B0000] hover:shadow-lg transition-all text-center"
  }, ev.btnText || "Support Event")))))), eventsList.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prevSlide,
    className: "w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-secondary hover:bg-primary hover:scale-110 transition-all pointer-events-auto backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("i", { className: "fas fa-chevron-left" })), /*#__PURE__*/React.createElement("button", {
    onClick: nextSlide,
    className: "w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-secondary hover:bg-primary hover:scale-110 transition-all pointer-events-auto backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("i", { className: "fas fa-chevron-right" }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-4 left-0 w-full flex justify-center gap-2"
  }, eventsList.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setSlideIdx(i),
    className: `w-2.5 h-2.5 rounded-full transition-all ${i === slideIdx ? 'bg-primary scale-125' : 'bg-gray-300'}`
  })))))), /*#__PURE__*/React.createElement(TranslationModal, {
    item: selectedEvent,
    setItem: setSelectedEvent,
    tagText: "Upcoming Event",
    buttonText: selectedEvent?.btnText || "Support Event",
    buttonLink: selectedEvent?.btnUrl || selectedEvent?.regLink
  }));
};

const Programs = ({
  data
}) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState(null);
  React.useEffect(() => { 
    document.documentElement.style.overflow = selectedProgram ? 'hidden' : '';
    document.body.style.overflow = selectedProgram ? 'hidden' : ''; 
  }, [selectedProgram]);
  const progList = data?.list || [];
  if (progList.length === 0) return null;
  const nextSlide = () => {
    setSlideIdx((prev) => (prev + 1) % progList.length);
  };
  const prevSlide = () => {
    setSlideIdx((prev) => (prev - 1 + progList.length) % progList.length);
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "programs",
    className: "py-20 bg-[#FAF9F6] relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl md:text-5xl font-black text-secondary uppercase tracking-tight"
  }, "Divine Seva Programs"), /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-1 bg-primary mx-auto mt-4 rounded-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex transition-transform duration-700 ease-in-out",
    style: { transform: `translateX(-${slideIdx * 100}%)` }
  }, progList.map((p, i) => {
    let imagesStr = p.image || p.icon || p.url || '';
    const validImages = parseProgramImages(imagesStr, p.images);
    const hasImages = validImages.length > 0;

    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "w-full flex-shrink-0 flex flex-col md:flex-row min-h-[400px]"
    }, hasImages ? /*#__PURE__*/React.createElement("div", {
      className: "w-full md:w-1/2 h-64 md:h-auto relative"
    }, /*#__PURE__*/React.createElement(ProgramImageGallery, {
      imagesStr: imagesStr,
      imagesArr: p.images,
      altTitle: p.title
    })) : null, /*#__PURE__*/React.createElement("div", {
      className: `w-full ${hasImages ? 'md:w-1/2' : ''} p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50`
    }, /*#__PURE__*/React.createElement("div", {
    className: "text-primary font-bold tracking-widest uppercase text-sm mb-2"
  }, "Divine Seva"), /*#__PURE__*/React.createElement("h3", {
    className: "text-3xl font-black text-secondary mb-4 leading-tight"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "text-base text-gray-600 leading-relaxed mb-8 whitespace-pre-wrap line-clamp-3"
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-auto w-full"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedProgram(p),
    className: "px-8 py-3 border-2 border-secondary/20 text-secondary rounded-full font-bold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center justify-center gap-2"
  }, "View More", /*#__PURE__*/React.createElement("i", { className: "fas fa-arrow-right" })), /*#__PURE__*/React.createElement("a", {
    href: (p.btnUrl && p.btnUrl !== '#') ? p.btnUrl : p.regLink || p.link || "#donate",
    target: ((p.btnUrl && p.btnUrl !== '#') || p.regLink || p.link) ? "_blank" : undefined,
    rel: ((p.btnUrl && p.btnUrl !== '#') || p.regLink || p.link) ? "noopener noreferrer" : undefined,
    className: "px-8 py-3 bg-[#8B0000] text-white rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#8B0000] hover:shadow-lg transition-all text-center"
  }, p.btnText || "Support Program"))));
  })), progList.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prevSlide,
    className: "w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-secondary hover:bg-primary hover:scale-110 transition-all pointer-events-auto backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("i", { className: "fas fa-chevron-left" })), /*#__PURE__*/React.createElement("button", {
    onClick: nextSlide,
    className: "w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-secondary hover:bg-primary hover:scale-110 transition-all pointer-events-auto backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("i", { className: "fas fa-chevron-right" }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-4 left-0 w-full flex justify-center gap-2"
  }, progList.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setSlideIdx(i),
    className: `w-2.5 h-2.5 rounded-full transition-all ${i === slideIdx ? 'bg-primary scale-125' : 'bg-gray-300'}`
  })))))), /*#__PURE__*/React.createElement(TranslationModal, {
    item: selectedProgram,
    setItem: setSelectedProgram,
    tagText: "Divine Seva",
    buttonText: selectedProgram?.btnText || "Support Program",
    buttonLink: selectedProgram?.btnUrl || selectedProgram?.regLink
  }));
};
const Temple = ({
  data
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [targetLang, setTargetLang] = useState('en');
  const [translatedTitle, setTranslatedTitle] = useState('');
  const [translatedContent, setTranslatedContent] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(null);
  const templeText = data?.text || 'We are building a sanctuary for the ages. Your contribution lays the bricks of history. This temple will serve as a spiritual nucleus for the community, offering a place of worship, solace, and cultural education. The architecture blends traditional Agamic principles with modern sustainability, ensuring it stands strong for generations to come. Join hands in this divine endeavor to create a lasting legacy of devotion.';
  const languages = [{
    code: 'en',
    name: 'English'
  }, {
    code: 'te',
    name: 'తెలుగు (Telugu)'
  }, {
    code: 'hi',
    name: 'हिन्दी (Hindi)'
  }, {
    code: 'ta',
    name: 'தமிழ் (Tamil)'
  }, {
    code: 'kn',
    name: 'ಕನ್ನಡ (Kannada)'
  }, {
    code: 'ml',
    name: 'മലയാളം (Malayalam)'
  }, {
    code: 'mr',
    name: 'मराठी (Marathi)'
  }, {
    code: 'gu',
    name: 'ગુજરાતી (Gujarati)'
  }, {
    code: 'bn',
    name: 'বাংলা (Bengali)'
  }, {
    code: 'es',
    name: 'Español'
  }, {
    code: 'fr',
    name: 'Français'
  }, {
    code: 'de',
    name: 'Deutsch'
  }, {
    code: 'ja',
    name: '日本語'
  }];
  useEffect(() => {
    if (isExpanded) {
      setTargetLang('en');
      setTranslatedTitle('Temple Project');
      setTranslatedContent(templeText);
    }
  }, [isExpanded, templeText]);
  useEffect(() => {
    if (!isExpanded) return;
    if (targetLang === 'en') {
      setTranslatedTitle('Temple Project');
      setTranslatedContent(templeText);
      setIsTranslating(false);
      return;
    }
    let isMounted = true;
    const translate = async () => {
      /*setIsTranslating(true)*/;
      try {
        window.translationCache = window.translationCache || {};
        const titleText = 'Temple Project';
        let finalTitle = titleText;
        if (titleText) {
          const keyTitle = targetLang + '_' + titleText;
          if (window.translationCache[keyTitle]) {
            finalTitle = window.translationCache[keyTitle];
          } else {
            const resTitle = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(titleText)}`);
            const dataTitle = await resTitle.json();
            finalTitle = dataTitle[0].map(x => x[0]).join('');
            window.translationCache[keyTitle] = finalTitle;
          }
        }
        const contentText = templeText;
        let finalContent = contentText;
        if (contentText) {
          const keyContent = targetLang + '_' + contentText;
          if (window.translationCache[keyContent]) {
            finalContent = window.translationCache[keyContent];
          } else {
            const resContent = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(contentText)}`);
            const dataContent = await resContent.json();
            finalContent = dataContent[0].map(x => x[0]).join('');
            window.translationCache[keyContent] = finalContent;
          }
        }
        if (isMounted) {
          setTranslatedTitle(finalTitle);
          setTranslatedContent(finalContent);
        }
      } catch (error) {
        console.error("Translation failed", error);
        if (isMounted) {
          setTranslatedTitle('Temple Project');
          setTranslatedContent(templeText);
        }
      } finally {
        if (isMounted) setIsTranslating(false);
      }
    };
    translate();
    return () => {
      isMounted = false;
    };
  }, [targetLang, isExpanded, templeText]);
  return /*#__PURE__*/React.createElement("div", {
    id: "temple",
    className: "py-24 bg-[#F8F9FA] relative border-y-8 border-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-16"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-5xl md:text-6xl font-black text-secondary uppercase font-serif tracking-tight drop-shadow-sm mb-4"
  }, "Temple Project"), /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-1 bg-primary mx-auto mt-4 rounded-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full flex flex-col md:flex-row-reverse min-h-[400px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 h-64 md:h-auto relative cursor-pointer overflow-hidden",
    onClick: () => setIsExpanded(true)
  }, data?.bannerUrl ? /*#__PURE__*/React.createElement("img", {
    src: data.bannerUrl,
    alt: "Temple Project",
    className: "w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
  }) : data?.progressVideo?.source ? /*#__PURE__*/React.createElement("video", {
    src: data.progressVideo.source,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    className: "w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full flex items-center justify-center bg-[#1a1a1a] absolute inset-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-8xl opacity-20 transition-transform duration-700 group-hover:scale-110"
  }, "\uD83C\uDFDB\uFE0F")), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-300"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-bl from-white to-gray-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-primary font-bold tracking-widest uppercase text-sm mb-2"
  }, "Sacred Construction"), /*#__PURE__*/React.createElement("h3", {
    className: "text-3xl font-black text-secondary mb-4 leading-tight"
  }, "Temple Project"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 leading-relaxed mb-8 whitespace-pre-wrap line-clamp-3"
  }, templeText), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mt-auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsExpanded(true),
    className: "px-8 py-3 border-2 border-secondary/20 text-secondary rounded-full font-bold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center gap-2"
  }, "View More", /*#__PURE__*/React.createElement("i", { className: "fas fa-arrow-right" })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
    },
    className: "px-8 py-3 bg-secondary text-white rounded-full font-bold hover:bg-primary hover:text-secondary hover:shadow-lg transition-all"
  }, "Support Project")))))), /*#__PURE__*/React.createElement(AnimatePresence, null, isExpanded && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md",
    onClick: () => setIsExpanded(false)
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      scale: 0.9,
      y: 20,
      opacity: 0
    },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1
    },
    exit: {
      scale: 0.9,
      y: 20,
      opacity: 0
    },
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300
    },
    className: "bg-[#0a0a0a] border border-[#FAC802]/20 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(250,200,2,0.15)] relative",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsExpanded(false),
    className: "absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-[#FAC802] text-white hover:text-black rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-transparent backdrop-blur-md"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times text-lg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 h-64 md:h-auto relative bg-[#111] overflow-hidden"
  }, (() => {
    if (data?.videoUrl) {
      const ytMatch = data.videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/);
      if (ytMatch && ytMatch[1]) {
        return /*#__PURE__*/React.createElement("iframe", {
          src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${ytMatch[1]}&controls=0`,
          allow: "autoplay; encrypted-media",
          className: "w-full h-full object-cover pointer-events-none border-0"
        });
      }
      return /*#__PURE__*/React.createElement("video", {
        src: data.videoUrl,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "w-full h-full object-cover"
      });
    }
    const combinedImages = [];
    if (data?.bannerUrl) combinedImages.push(data.bannerUrl);
    if (data?.gallery && Array.isArray(data.gallery)) combinedImages.push(...data.gallery);
    
    if (combinedImages.length > 0) {
      return /*#__PURE__*/React.createElement(ProgramImageGallery, {
        imagesStr: '',
        imagesArr: combinedImages,
        altTitle: data?.title || "Temple Project",
        className: "w-full h-full relative overflow-hidden bg-[#111] group"
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-black"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-9xl opacity-20 animate-pulse"
    }, "\uD83C\uDFDB\uFE0F"));
  })(), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a] hidden md:block"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent block md:hidden"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 p-5 sm:p-8 md:p-12 flex flex-col justify-start overflow-y-auto divine-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[#FAC802] text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-6 left-8 md:left-12 z-[60] flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-language text-[#FAC802] text-xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    value: targetLang,
    onChange: e => setTargetLang(e.target.value),
    className: "appearance-none bg-black/50 border border-white/10 hover:border-[#FAC802]/50 text-white text-xs font-bold uppercase tracking-wider py-2 pl-4 pr-8 rounded-full outline-none focus:ring-2 focus:ring-[#FAC802]/50 transition-all cursor-pointer backdrop-blur-md"
  }, languages.map(lang => /*#__PURE__*/React.createElement("option", {
    key: lang.code,
    value: lang.code,
    className: "bg-black text-white"
  }, lang.name))), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-down text-[10px]"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-[2px] bg-[#FAC802]"
  }), "Sacred Construction"), /*#__PURE__*/React.createElement("div", {
    className: "min-h-[200px] relative shrink-0 mt-12 md:mt-8"
  }, /*#__PURE__*/React.createElement(AnimatePresence, {
    mode: "wait"
  }, isTranslating ? /*#__PURE__*/React.createElement(motion.div, {
    key: "loading",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "absolute inset-0 flex flex-col items-start justify-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-[#FAC802] animate-bounce"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-[#FAC802] animate-bounce",
    style: {
      animationDelay: '0.1s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-[#FAC802] animate-bounce",
    style: {
      animationDelay: '0.2s'
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-[#FAC802]/70 text-xs font-bold uppercase tracking-widest animate-pulse"
  }, "Translating...")) : /*#__PURE__*/React.createElement(motion.div, {
    key: "content",
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -10
    },
    transition: {
      duration: 0.3
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white mb-6 uppercase leading-tight drop-shadow-lg"
  }, translatedTitle || 'Temple Project'), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-300 text-base md:text-lg leading-relaxed font-medium mb-10 whitespace-pre-wrap"
  }, translatedContent || templeText)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 shrink-0 flex flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    },
    className: "px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-full font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(250,200,2,0.4)] hover:scale-105 transition-all flex items-center gap-3"
  }, "Contribute ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-hands-praying text-red-600 animate-pulse"
  }))))), /*#__PURE__*/React.createElement(AnimatePresence, null, activeTemplate && /*#__PURE__*/React.createElement(motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    className: "fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto divine-scroll",
    onClick: () => setActiveTemplate(null)
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: { scale: 0.9, y: 20 },
    animate: { scale: 1, y: 0 },
    exit: { scale: 0.9, y: 20 },
    className: "relative w-full max-w-6xl my-auto",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTemplate(null),
    className: "absolute -top-12 right-0 md:-right-12 z-[10001] w-10 h-10 bg-white/10 hover:bg-[#FAC802] text-white hover:text-black rounded-full flex items-center justify-center transition-all border border-white/20 backdrop-blur-md"
  }, /*#__PURE__*/React.createElement("i", { className: "fas fa-times text-lg" })), /*#__PURE__*/React.createElement("div", {
    className: "w-full",
    dangerouslySetInnerHTML: { __html: window.SDSS_TEMPLATES ? window.SDSS_TEMPLATES[activeTemplate] : '' }
  })))))));
};
const YouTubeAudioPlayer = ({
  ytId
}) => {
  const playerRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [volume, setVolume] = React.useState(100);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  React.useEffect(() => {
    let interval;
    const initPlayer = () => {
      playerRef.current = new window.YT.Player('yt-player-container-' + ytId, {
        height: '0',
        width: '0',
        videoId: ytId,
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          controls: 0
        },
        events: {
          onReady: e => {
            e.target.setVolume(100);
            e.target.playVideo();
            setDuration(e.target.getDuration());
            interval = setInterval(() => {
              if (e.target && e.target.getCurrentTime) {
                setCurrentTime(e.target.getCurrentTime());
              }
            }, 1000);
          },
          onStateChange: e => {
            if (e.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);else if (e.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
          }
        }
      });
    };
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = initPlayer;
      document.body.appendChild(tag);
    } else {
      initPlayer();
    }
    return () => {
      clearInterval(interval);
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [ytId]);
  const togglePlay = () => {
    if (isPlaying) playerRef.current?.pauseVideo();else playerRef.current?.playVideo();
  };
  const handleVolume = e => {
    const v = parseInt(e.target.value);
    setVolume(v);
    playerRef.current?.setVolume(v);
  };
  const handleSeek = e => {
    const t = parseFloat(e.target.value);
    setCurrentTime(t);
    playerRef.current?.seekTo(t, true);
  };
  const formatTime = sec => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-4 z-10 bg-white/40 backdrop-blur-lg px-4 py-3 rounded-2xl border border-secondary/20 shadow-sm w-full md:w-auto mt-2 md:mt-0"
  }, /*#__PURE__*/React.createElement("div", {
    id: `yt-player-container-${ytId}`,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: togglePlay,
    className: "w-10 h-10 flex-shrink-0 bg-secondary text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md"
  }, isPlaying ? /*#__PURE__*/React.createElement("i", {
    className: "fas fa-pause"
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fas fa-play ml-1"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col flex-1 items-center gap-1 w-full min-w-[150px] lg:w-48"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: duration || 100,
    value: currentTime,
    onChange: handleSeek,
    className: "w-full accent-secondary h-1.5 cursor-pointer rounded-full bg-secondary/20 appearance-none",
    style: {
      '--webkit-slider-thumb': 'appearance: none; width: 12px; height: 12px; background: #8B0000; border-radius: 50%; cursor: pointer;'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-black text-secondary/80 w-full flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, formatTime(currentTime)), /*#__PURE__*/React.createElement("span", null, formatTime(duration)))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 group flex-shrink-0"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${volume === 0 ? 'fa-volume-mute' : volume < 50 ? 'fa-volume-down' : 'fa-volume-up'} text-secondary text-sm`
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    value: volume,
    onChange: handleVolume,
    className: "w-0 group-hover:w-20 opacity-0 group-hover:opacity-100 transition-all duration-300 accent-secondary h-1.5 cursor-pointer appearance-none rounded-full bg-secondary/20"
  })));
};
const Songs = ({
  data
}) => {
  const [videoUrl, setVideoUrl] = useState(data?.video?.source || null);
  const [activeAudio, setActiveAudio] = useState(null);
  const [downloadMenu, setDownloadMenu] = useState(null);
  const songList = data?.list && data.list.length > 0 ? data.list : [{
    title: 'Sri Durgamma Bhajana',
    url: 'assets/song1.mp3',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }, {
    title: 'Navaratri Kumkuma Archana',
    url: null,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }, {
    title: 'Suvarna Durga Stuti',
    url: null,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }].map(s => ({
    ...s,
    youtube: s.videoUrl,
    audioUrl: s.url
  }));
  if (songList.length === 0 && !data?.video?.source) return null;
  const handleDownload = (s, type) => {
    const url = type === 'mp3' ? s.audioUrl || s.url : s.youtube || s.videoUrl;
    if (url) {
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        // Cannot force download a youtube link directly via HTML, so open it
        window.open(url, '_blank');
      } else {
        const a = document.createElement('a');
        a.href = url;
        a.download = `${s.title}.${type}`;
        a.target = '_blank';
        a.click();
      }
    } else {
      alert(`${type.toUpperCase()} link not available yet.`);
    }
    setDownloadMenu(null);
  };
  const getYoutubeEmbed = url => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    // rel=0 ensures only videos from the same channel are shown in related
    return match && match[2].length === 11 ? `${match[2]}?autoplay=1&rel=0` : null;
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "songs",
    className: "py-12 bg-white relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto px-4 text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-black text-[#FAC802] mb-10 uppercase tracking-tighter"
  }, "Devotional Media"), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FAC802] p-6 lg:p-12 rounded-[2.5rem] text-secondary shadow-2xl relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full"
  }), /*#__PURE__*/React.createElement(AnimatePresence, null, videoUrl && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.9
    },
    className: "relative mb-8 z-20"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setVideoUrl(null),
    className: "absolute -top-4 -right-4 z-30 w-10 h-10 bg-secondary text-white rounded-full font-black border-4 border-white shadow-xl hover:scale-110 transition-transform flex items-center justify-center text-xl"
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: "aspect-video overflow-hidden rounded-[1.5rem] border-4 border-secondary/50 shadow-2xl bg-black"
  }, getYoutubeEmbed(videoUrl) ? /*#__PURE__*/React.createElement("iframe", {
    className: "w-full h-full",
    src: `https://www.youtube.com/embed/${getYoutubeEmbed(videoUrl)}`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }) : /*#__PURE__*/React.createElement("video", {
    src: videoUrl,
    autoPlay: true,
    controls: true,
    className: "w-full h-full object-contain"
  })))), activeAudio && (() => {
    const audioSource = activeAudio.audioUrl || activeAudio.url;
    const ytEmbed = getYoutubeEmbed(audioSource) || getYoutubeEmbed(activeAudio.youtube || activeAudio.videoUrl);
    const isMp3 = audioSource && !getYoutubeEmbed(audioSource);
    return /*#__PURE__*/React.createElement("div", {
      className: "mb-8 p-4 md:p-6 bg-[#FAC802]/10 backdrop-blur-md rounded-3xl border border-secondary/20 flex flex-col md:flex-row items-center gap-4 relative overflow-hidden shadow-xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 flex-shrink-0 bg-gradient-to-br from-secondary to-red-900 text-white rounded-full flex items-center justify-center z-10 shadow-lg relative"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-music text-xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 rounded-full border-2 border-white/50 animate-ping"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 text-center md:text-left z-10 mb-2 md:mb-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-black uppercase tracking-wider text-secondary/70 flex items-center justify-center md:justify-start gap-2"
    }, "Now Playing ", ytEmbed && !isMp3 ? '• High Quality Audio Stream' : ''), /*#__PURE__*/React.createElement("div", {
      className: "text-base md:text-lg font-black text-secondary leading-tight mt-1"
    }, activeAudio.title)), isMp3 ? /*#__PURE__*/React.createElement("audio", {
      src: audioSource,
      autoPlay: true,
      controls: true,
      className: "h-10 w-full md:w-64 z-10 custom-audio-player"
    }) : ytEmbed ? /*#__PURE__*/React.createElement(YouTubeAudioPlayer, {
      ytId: ytEmbed.split('?')[0]
    }) : null, /*#__PURE__*/React.createElement("button", {
      onClick: () => setActiveAudio(null),
      className: "absolute top-2 right-2 md:static text-secondary hover:text-white hover:bg-secondary border border-secondary/20 font-black bg-white/50 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all shadow-sm"
    }, "\xD7"));
  })(), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 max-h-[270px] overflow-y-auto pr-3 divine-scroll border-t border-b border-white/10 py-4 mt-4"
  }, songList.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "relative flex flex-col md:flex-row items-center justify-between p-4 bg-black/5 rounded-2xl border border-black/10 hover:bg-black/10 transition-all group shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all shadow-sm ${activeAudio?.title === s.title ? 'bg-[#8B0000] text-white' : 'bg-black/10 text-black'}`
  }, activeAudio?.title === s.title ? '🔊' : '🎶'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-base font-black text-black group-hover:text-[#8B0000]"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-black/60 uppercase font-black tracking-widest"
  }, "Suvarna Durga Exclusives"))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center mt-4 md:mt-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const audLink = s.audioUrl || s.url;
      const vidLink = s.youtube || s.videoUrl;
      const ytEmbed = getYoutubeEmbed(audLink) || getYoutubeEmbed(vidLink);
      const isMp3 = audLink && !getYoutubeEmbed(audLink);
      if (isMp3 || ytEmbed) {
        setActiveAudio(s);
        setVideoUrl(null);
      } else {
        alert('Audio/Video not available');
      }
    },
    className: `px-4 py-2 rounded-full border border-[#8B0000] text-[10px] font-black uppercase transition-all active:scale-95 shadow-sm ${activeAudio?.title === s.title ? 'bg-[#8B0000] text-white' : 'text-[#8B0000] hover:bg-[#8B0000] hover:text-white'}`
  }, activeAudio?.title === s.title ? 'Playing' : 'Audio'), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const vidLink = s.youtube || s.videoUrl;
      if (vidLink) {
        setVideoUrl(vidLink);
        setActiveAudio(null);
        window.scrollTo({
          top: document.getElementById('songs').offsetTop,
          behavior: 'smooth'
        });
      } else {
        alert('Video not available');
      }
    },
    className: "px-4 py-2 rounded-full border border-[#8B0000] text-[#8B0000] text-[10px] font-black uppercase hover:bg-[#8B0000] hover:text-white transition-all active:scale-95 shadow-sm"
  }, "Video"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDownloadMenu(downloadMenu === i ? null : i),
    className: "px-4 py-2 rounded-full border border-[#8B0000] text-[#8B0000] text-[10px] font-black uppercase hover:bg-[#8B0000] hover:text-white transition-all active:scale-95 flex items-center gap-2 shadow-sm"
  }, "Download \u2193"), downloadMenu === i && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-2xl border border-gray-100 z-30 py-2 overflow-hidden animate-in fade-in zoom-in duration-200"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleDownload(s, 'mp3'),
    className: "w-full px-4 py-2 text-[9px] font-black uppercase text-left hover:bg-black/5 text-[#8B0000] flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs"
  }, "\uD83C\uDFB5"), " MP3 Audio"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleDownload(s, 'video'),
    className: "w-full px-4 py-2 text-[9px] font-black uppercase text-left hover:bg-black/5 text-[#8B0000] flex items-center gap-2 border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs"
  }, "\uD83C\uDFAC"), " Video File"))))))))));
};
const Gallery = ({
  data
}) => {
  const handleImgDownload = (url, idx) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = `sdss_gallery_${idx + 1}.jpg`;
    a.target = '_blank';
    a.click();
  };
  const rawImages = data?.images && data.images.length > 0 ? data.images : [];
  const rawVideos = data?.videos && data.videos.length > 0 ? data.videos : [];
  const items = [...rawImages, ...rawVideos].filter(item => {
    const url = typeof item === 'string' ? item : item?.url || '';
    return url || item?.isSyncing;
  });
  const finalItems = items.length > 0 ? items : [];
  if (finalItems.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    id: "gallery",
    className: "py-24 bg-[#050505] relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("style", null, `
                            .gallery-scroll-container::-webkit-scrollbar {
                                height: 4px;
                            }
                            .gallery-scroll-container::-webkit-scrollbar-track {
                                background: rgba(255, 255, 255, 0.05);
                                border-radius: 4px;
                            }
                            .gallery-scroll-container::-webkit-scrollbar-thumb {
                                background: rgba(212, 175, 55, 0.4);
                                border-radius: 4px;
                            }
                            .gallery-scroll-container::-webkit-scrollbar-thumb:hover {
                                background: rgba(212, 175, 55, 0.8);
                            }
                            .gallery-fade-edges {
                                -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                                mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                            }
                        `), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10 mb-8 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[#FAC802] font-black tracking-[0.5em] text-[10px] uppercase mb-4 block opacity-80"
  }, "Visual Testimonials"), /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl md:text-6xl font-black bg-gradient-to-r from-[#FAC802] via-[#FFD700] to-[#FF9933] text-transparent bg-clip-text drop-shadow-[0_4px_15px_rgba(250,200,2,0.3)] uppercase tracking-tight"
  }, "Divine Gallery"), /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "w-full relative gallery-fade-edges"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery-scroll-container flex w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory py-4 px-4 gap-4 items-center"
  }, finalItems.map((item, i) => {
    const isString = typeof item === 'string';
    const url = isString ? item : item.url;
    const isSyncing = !isString && item.isSyncing;
    const isVideo = !isString && item.type === 'Video' || url && (url.includes('.mp4') || url.includes('video') || url.includes('data:video'));
    const isYouTube = url && (url.includes('youtube.com') || url.includes('youtu.be'));
    const getYouTubeEmbedUrl = ytUrl => {
      if (!ytUrl) return '';
      let videoId = '';
      if (ytUrl.includes('youtu.be/')) videoId = ytUrl.split('youtu.be/')[1].split('?')[0];else if (ytUrl.includes('watch?v=')) videoId = ytUrl.split('watch?v=')[1].split('&')[0];else if (ytUrl.includes('/shorts/')) videoId = ytUrl.split('/shorts/')[1].split('?')[0];else if (ytUrl.includes('/embed/')) videoId = ytUrl.split('/embed/')[1].split('?')[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&loop=0&controls=1&showinfo=1&rel=0` : ytUrl;
    };
    return /*#__PURE__*/React.createElement(motion.div, {
      key: i,
      whileHover: {
        y: -15,
        scale: 1.02,
        zIndex: 50
      },
      className: "gallery-item snap-center relative group shadow-[0_20px_50px_-15px_rgba(250,200,2,0.15)] overflow-hidden rounded-3xl bg-[#050505] border border-[#FAC802]/20 ring-1 ring-white/5 w-[220px] h-[300px] md:w-[260px] md:h-[350px] flex-shrink-0 cursor-pointer"
    }, isYouTube ? /*#__PURE__*/React.createElement("iframe", {
      src: getYouTubeEmbedUrl(url),
      className: "w-full h-full object-contain bg-black",
      frameBorder: "0",
      allow: "autoplay; encrypted-media",
      style: { pointerEvents: 'auto' }
    }) : isVideo ? /*#__PURE__*/React.createElement("video", {
      src: url,
      className: "w-full h-full object-contain bg-black",
      controls: true,
      playsInline: true
    }) : /*#__PURE__*/React.createElement("img", {
      src: url,
      alt: `Gallery ${i}`,
      loading: "lazy",
      className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    }), isSyncing && /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-10 pointer-events-none"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-6 h-6 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-black text-secondary tracking-widest uppercase"
    }, "Syncing..."))), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8"
    }, /*#__PURE__*/React.createElement(motion.button, {
      whileHover: {
        scale: 1.05
      },
      whileTap: {
        scale: 0.95
      },
      onClick: (e) => { e.stopPropagation(); handleImgDownload(url, i); },
      className: "w-full py-3 pointer-events-auto bg-black/60 backdrop-blur-xl border border-[#FAC802]/30 text-[#FAC802] text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#FAC802] hover:text-black hover:shadow-[0_0_20px_rgba(250,200,2,0.4)] hover:-translate-y-1 transition-all duration-300"
    }, "Save to Gallery")));
  }))));
};
const generateReceipt = async (donorData, templateBase64) => {
  if (!window.jspdf) {
    try {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
    } catch (err) {
      console.error("Failed to dynamically load jsPDF library:", err);
      alert("Could not load receipt generator. Your transaction was processed successfully.");
      return;
    }
  }
  const { jsPDF } = window.jspdf;
  
  const finalTemplate = '/receipt_bg.jpg?v=' + Date.now();
  
  fetch(finalTemplate)
    .then(res => res.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          ctx.font = 'bold ' + (canvas.height * 0.024) + 'px Arial';
          ctx.fillStyle = '#333333';

          const dateObj = new Date(donorData.date || Date.now());
          const dateStr = dateObj.toLocaleDateString('en-IN');
          const timeStr = dateObj.toLocaleTimeString('en-IN', {hour: '2-digit', minute:'2-digit'});
          const amtStr = (Number(donorData.amount) || 0).toLocaleString('en-IN');
          
          let receiptSerial = donorData.receiptNo;
          if (!receiptSerial) {
              // Fallback generator if not explicitly passed
              const today = new Date();
              let startYear = today.getFullYear();
              if (today.getMonth() < 3) startYear -= 1;
              const fy = startYear.toString() + '-' + (startYear + 1).toString().slice(-2);
              const serial = Math.floor(1000 + Math.random() * 9000);
              receiptSerial = `SDSS/${fy}/${serial}`;
          }
          
          const txn = receiptSerial;
          const mode = donorData.method || 'Razorpay';
          const utr = donorData.txnId || 'N/A';
          const nameStr = donorData.name || 'Devotee';
          const phoneStr = donorData.phone || donorData.email || 'N/A';

          // Top Right Header
        ctx.fillText(txn, canvas.width * 0.79, canvas.height * 0.106);
        ctx.fillText(dateStr, canvas.width * 0.79, canvas.height * 0.147);
        ctx.fillText(timeStr, canvas.width * 0.79, canvas.height * 0.187);

        // Left Column Box
        const leftX = canvas.width * 0.215;
        ctx.fillText(nameStr, leftX, canvas.height * 0.463);
        ctx.fillText(phoneStr, leftX, canvas.height * 0.518);
        ctx.fillText(amtStr, canvas.width * 0.235, canvas.height * 0.575);
        ctx.fillText(mode, leftX, canvas.height * 0.632);
        ctx.fillText(utr, leftX, canvas.height * 0.687);
        ctx.fillText(`${dateStr} ${timeStr}`, leftX, canvas.height * 0.742);

        // Right Table
        const rightColX = canvas.width * 0.845;
        if (!donorData.category || donorData.category.toLowerCase().includes('donation') || donorData.category.toLowerCase().includes('general') || donorData.category === 'Others') {
            ctx.fillText(amtStr, rightColX, canvas.height * 0.520);
        } else {
            ctx.fillText(donorData.category, canvas.width * 0.535, canvas.height * 0.565);
            ctx.fillText(amtStr, rightColX, canvas.height * 0.565);
        }
        ctx.font = 'bold ' + (canvas.height * 0.028) + 'px Arial';
        ctx.fillText(amtStr, rightColX, canvas.height * 0.618); 

        // Number to Words Function
          const numToWords = (num) => {
              const a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
              const b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];
              if ((num = num.toString()).length > 9) return 'overflow';
              let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
              if (!n) return; 
              let str = '';
              str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
              str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
              str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
              str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
              str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
              if (str.trim() === '') return 'Zero Rupees Only';
              return 'Rupees ' + str.trim() + ' Only';
          };

          // Right Details Block
        ctx.font = 'bold ' + (canvas.height * 0.022) + 'px Arial';
        const rightDetailsX = canvas.width * 0.565;
        const words = numToWords(Number(donorData.amount) || 0);
        ctx.fillText(words, rightDetailsX, canvas.height * 0.670);
        ctx.fillText(mode, rightDetailsX, canvas.height * 0.700);
        ctx.fillText(utr, rightDetailsX, canvas.height * 0.730);
        ctx.fillText(`${dateStr} ${timeStr}`, rightDetailsX, canvas.height * 0.765);

        try {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            pdf.addImage(imgData, 'JPEG', 0, 10, 210, 148.26);
            pdf.save(`SDSS_Receipt_${nameStr.replace(/\s+/g, '_')}.pdf`);
            
            // Show a success message natively if toast is not available in frontend
            if (window.toast) toast('Receipt Downloaded Successfully!', 'success');
          } catch (e) {
            console.error("Receipt Image Error:", e);
            alert("Could not generate receipt PDF. Your payment was successful.");
          }
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(blob);
    }).catch(err => {
      console.error("Fetch template error:", err);
      alert("Error loading the receipt image. Please check your connection.");
    });
};
const Contact = ({
  donate,
  contact,
  trustSettings
}) => {
  const [activeType, setActiveType] = useState('donors'); // 'queries', 'donors', 'volunteers'
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
    amount: '',
    taxId: '',
    address: ''
  });
  const [photo, setPhoto] = useState(null);
  const enable80G = donate?.enable80G || false;
  const websiteMode = trustSettings?.websiteMode || 'live';
  const rzpKey = trustSettings?.rzpKey || donate?.rzpKey || 'rzp_test_DummyKey12345';
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    let finalValue = value;

    // Force PAN/Aadhar to Uppercase
    if (name === 'taxId') {
      finalValue = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (finalValue.length > 0) {
        if (/^[0-9]/.test(finalValue)) {
          finalValue = finalValue.replace(/\D/g, '').slice(0, 12);
        } else {
          let panStr = "";
          for (let i = 0; i < finalValue.length; i++) {
              let char = finalValue[i];
              if (i < 5) {
                  if (/[A-Z]/.test(char)) panStr += char;
              } else if (i >= 5 && i < 9) {
                  if (/[0-9]/.test(char)) panStr += char;
              } else if (i === 9) {
                  if (/[A-Z]/.test(char)) panStr += char;
              }
          }
          finalValue = panStr.slice(0, 10);
        }
      }
    }

    // Restrict Mobile to numbers only
    if (name === 'mobile') finalValue = value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
  };
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (activeType === 'donors') {
      handleRazorpayPayment();
      return;
    }
    if (activeType === 'queries') {
      setStatus('sending');
      const targetEmail = contact?.email || "suvarnadurgasevasamithi@gmail.com";
      const subject = "Spiritual Query from " + formData.name;
      const body = `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

      const queryInfo = {
        id: Date.now().toString(),
        name: formData.name,
        phone: formData.mobile,
        email: formData.email,
        message: formData.message,
        status: 'Unread',
        date: new Date().toISOString()
      };
      if (typeof EnterpriseSync !== 'undefined') {
        EnterpriseSync.push('queries', queryInfo);
      }
      
      const gasUrl = "https://script.google.com/macros/s/AKfycbw2NQq7iOSITId_lpaVsdJaL795Ncf0pfBaF1-CUDtOO3s9dFSj3yBqINvbJa1gR3ORSg/exec";
      fetch(gasUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ subject: subject, body: body })
      }).catch(err => console.error(err));

      setTimeout(() => {
          setStatus('success');
          setFormData({ name: '', mobile: '', email: '', message: '', amount: '1116', taxId: '', address: '' });
      }, 500);
      return;
    }
    setStatus('sending');
    if (activeType === 'volunteers') {
      try {
        if (!formData.name || !formData.mobile || !formData.email || !formData.address) {
          alert('Please fill all required fields.');
          setStatus(null);
          return;
        }

        const volunteerId = `SDSS-VOL-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 90000) + 10000)}`;
        const timestamp = new Date().toISOString();

        const volInfo = {
          id: volunteerId,
          volunteerId: volunteerId,
          fullName: formData.name,
          name: formData.name,
          mobile: formData.mobile,
          phone: formData.mobile,
          email: formData.email,
          address: formData.address,
          photoURL: photo,
          photo: photo,
          status: 'Pending',
          source: 'Frontend',
          createdAt: timestamp,
          joined: timestamp.split('T')[0],
          department: 'General',
          role: 'Volunteer'
        };

        // Direct REST API bypass to guarantee save even if SDK hangs
        fetch(`https://om-associates-960af-default-rtdb.firebaseio.com/globalContent/volunteers/${volunteerId}.json`, {
            method: "PUT",
            body: JSON.stringify(volInfo)
        }).catch(e => console.error("Direct save failed", e));
        
        if (typeof EnterpriseSync !== 'undefined') {
          EnterpriseSync.push('volunteers', volInfo);
        }
        
        const targetEmail = contact?.email || "suvarnadurgasevasamithi@gmail.com";
        const subject = "New Volunteer Application from " + formData.name;
        const body = `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nAddress: ${formData.address}`;
        
        const gasUrl = "https://script.google.com/macros/s/AKfycbw2NQq7iOSITId_lpaVsdJaL795Ncf0pfBaF1-CUDtOO3s9dFSj3yBqINvbJa1gR3ORSg/exec";
        fetch(gasUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ subject: subject, body: body })
        }).catch(err => console.error("Email notification failed:", err));

        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', mobile: '', email: '', message: '', amount: '1116', taxId: '', address: '' });
            if (typeof setPhoto === 'function') setPhoto(null);
        }, 500);
      } catch (err) {
        console.error("Volunteer submission failed:", err);
        alert('Submission failed. Please try again.');
        setStatus(null);
      }
    }
  };
  const handleRazorpayPayment = async () => {
    if (formData.taxId) {
       const tax = formData.taxId;
       if (/^[0-9]/.test(tax)) {
           if (tax.length !== 12 || !/^[0-9]{12}$/.test(tax)) {
               alert("Please enter a valid 12-digit Aadhar number. (You missed some numbers)");
               return;
           }
       } else {
           if (tax.length !== 10 || !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(tax)) {
               alert("Please enter a valid 10-character PAN number (5 letters, 4 numbers, 1 letter).");
               return;
           }
       }
    }

    if (!window.Razorpay) {
      try {
        await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      } catch (err) {
        console.error("Failed to load Razorpay checkout script:", err);
        alert("Could not load payment gateway. Please check your internet connection.");
        return;
      }
    }
    const options = {
      key: rzpKey,
      amount: Math.round(Number(formData.amount) * 100),
      currency: "INR",
      name: "Suvarna Durga Seva Samiti",
      description: `Donation for SDSS - ${formData.name}`,
      handler: async function (response) {
        setStatus('success');
        const paymentMode = (websiteMode === 'test' || rzpKey.startsWith('rzp_test_')) ? 'Test' : 'Live';
        let receiptSerial = null;
        if (window.firebase) {
           const today = new Date();
           let startYear = today.getFullYear();
           if (today.getMonth() < 3) startYear -= 1;
           const fy = startYear.toString() + '-' + (startYear + 1).toString().slice(-2);
           const counterRef = firebase.database().ref(`globalContent/receipt_counters/${fy}/${paymentMode.toLowerCase()}`);
           try {
               const result = await counterRef.transaction(curr => (curr || 0) + 1);
               if (result.committed) {
                   const numStr = result.snapshot.val().toString().padStart(4, '0');
                   receiptSerial = paymentMode === 'Test' ? `SDSS/${fy}/${numStr}/test` : `SDSS/${fy}/${numStr}`;
               }
           } catch(e) {}
        }
        if (!receiptSerial) receiptSerial = paymentMode === 'Test' ? `SDSS/2026-27/${Math.floor(1000+Math.random()*9000)}/test` : `SDSS/2026-27/${Math.floor(1000+Math.random()*9000)}`;

        const donorInfo = {
          ...formData,
          txnId: response.razorpay_payment_id,
          id: Date.now().toString(),
          phone: formData.mobile,
          method: 'Razorpay',
          status: 'VERIFIED',
          paymentMode: (websiteMode === 'test' || rzpKey.startsWith('rzp_test_')) ? 'Test' : 'Live',
          date: new Date().toISOString().split('T')[0],
          time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
          category: 'Online Donation',
          receiptNo: receiptSerial
        };
        if (typeof EnterpriseSync !== 'undefined') {
          EnterpriseSync.push('donations', donorInfo);
        }
        generateReceipt(donorInfo, donate?.receiptTemplate);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile
      },
      notes: {
        address: "SDSS Office",
        taxId: formData.taxId
      },
      theme: {
        color: "#FAC802"
      }
    };
    if (!rzpKey || rzpKey === 'rzp_test_DummyKey12345') {
      console.log("Using Test Mode Bypass");
      alert("Test Mode: Simulating successful payment without charging real money.");
      options.handler({ razorpay_payment_id: "pay_TEST_TXN_" + Date.now().toString().slice(-6) });
      return;
    }

    try {
      const rzp = new window.Razorpay({
        ...options,
        modal: {
          ondismiss: function() {
            setStatus(null);
          }
        }
      });
      rzp.on('payment.failed', response => {
        alert("Payment Failed: " + (response.error ? response.error.description : 'Unknown error'));
        setStatus(null);
      });
      rzp.open();
    } catch (e) {
      console.error("Razorpay Error:", e);
      alert("Payment gateway initialization error: " + e.message + "\nPlease check your API keys or Razorpay account settings.");
      setStatus(null);
    }
  };
  const types = [{
    id: 'donors',
    label: 'Donations',
    icon: 'fas fa-hand-holding-usd'
  }, {
    id: 'queries',
    label: 'Spiritual Queries',
    icon: 'fas fa-om'
  }, {
    id: 'volunteers',
    label: 'Volunteers',
    icon: 'fas fa-hands-helping'
  }];
  return /*#__PURE__*/React.createElement("div", {
    id: "contact",
    className: "py-4 bg-[#fafafa] px-4 relative border-t-4 border-[#D4AF37]"
  }, /*#__PURE__*/React.createElement("div", {
    id: "donate",
    className: "absolute top-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-md mx-auto flex flex-col items-center relative z-10"
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    className: "text-center w-full"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl md:text-2xl font-serif text-[#B8860B] mb-2 tracking-widest uppercase font-bold"
  }, "Connect With Us"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 mb-3 leading-relaxed max-w-md mx-auto"
  }, "Reach out to us for spiritual queries, donations, or volunteering opportunities."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4"
  }, types.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    type: "button",
    onClick: () => {
      setActiveType(t.id);
      setStatus(null);
      setFormData({ name: '', mobile: '', email: '', message: '', amount: '', taxId: '', address: '' });
      setPhoto(null);
    },
    className: `group relative overflow-hidden flex items-center gap-1.5 px-3 py-1.5 md:px-3 md:py-1.5 transition-all duration-500 border ${activeType === t.id ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] border-transparent shadow-[0_10px_20px_rgba(212,175,55,0.3)] scale-105' : 'bg-white border-gray-200 shadow-sm hover:border-[#D4AF37]/50 hover:-translate-y-1'}`
  }, /*#__PURE__*/React.createElement("i", {
    className: `${t.icon} text-base md:text-lg transition-colors ${activeType === t.id ? 'text-black' : 'text-gray-400 group-hover:text-[#D4AF37]'}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `font-serif font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs transition-colors ${activeType === t.id ? 'text-black' : 'text-gray-600 group-hover:text-black'}`
  }, t.label))))), /*#__PURE__*/React.createElement(motion.div, {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    className: "w-full bg-white p-1 border border-[#D4AF37]/40 shadow-[0_15px_40px_rgba(212,175,55,0.08)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full border border-[#D4AF37]/30 p-3 md:p-4 relative bg-[#fffdf5]"
  }, status === 'success' ? /*#__PURE__*/React.createElement("div", {
    className: "h-full flex flex-col items-center justify-center text-center space-y-4 py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl shadow-xl animate-bounce"
  }, "\u2713"), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-black text-secondary uppercase"
  }, "Success!"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, activeType === 'donors' ? 'Payment successful. Your PDF receipt has been generated.' : 'Thank you for connecting. We will reach out to you shortly.'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStatus(null),
    className: "text-primary font-black uppercase text-xs tracking-widest mt-4 underline"
  }, "Back to Form")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 flex items-center gap-2 text-secondary/40 font-black uppercase text-[10px] tracking-[0.2em]"
  }, /*#__PURE__*/React.createElement("span", null, "Process For:"), /*#__PURE__*/React.createElement("span", {
    className: "text-secondary"
  }, activeType)), /*#__PURE__*/React.createElement("input", {
    required: true,
    name: "name",
    value: formData.name,
    onChange: handleInputChange,
    type: "text",
    placeholder: "Full Name (Required)",
    className: "w-full py-1.5 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#D4AF37] focus:ring-0 transition-colors text-sm font-medium outline-none rounded-none placeholder:text-gray-400"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    name: "mobile",
    value: formData.mobile,
    onChange: handleInputChange,
    type: "tel",
    inputMode: "numeric",
    pattern: "[0-9]*",
    placeholder: "Mobile Number (Required)",
    className: "w-full py-1.5 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#D4AF37] focus:ring-0 transition-colors text-sm font-medium outline-none rounded-none placeholder:text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    required: true,
    name: "email",
    value: formData.email,
    onChange: handleInputChange,
    type: "email",
    placeholder: "Email ID (Required)",
    className: "w-full py-1.5 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#D4AF37] focus:ring-0 transition-colors text-sm font-medium outline-none rounded-none placeholder:text-gray-400"
  })), activeType === 'queries' && /*#__PURE__*/React.createElement("textarea", {
    required: true,
    name: "message",
    value: formData.message,
    onChange: handleInputChange,
    placeholder: "Your Message (Opinions / Shares)",
    className: "w-full py-1.5 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#D4AF37] focus:ring-0 transition-colors h-16 text-sm font-medium outline-none rounded-none placeholder:text-gray-400 resize-none"
  }), activeType === 'donors' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "py-2 border-b border-orange-100 mb-4 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[9px] md:text-[10px] text-orange-800 font-bold leading-relaxed uppercase tracking-widest"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-info-circle mr-1"
  }), " Required for 80G Tax Exemption. Please ensure accurate details.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("input", {
    required: enable80G,
    name: "taxId",
    value: formData.taxId,
    onChange: handleInputChange,
    type: "text",
    placeholder: enable80G ? "PAN / Aadhar (Mandatory)" : "PAN / Aadhar Number",
    className: "w-full py-1.5 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#D4AF37] focus:ring-0 transition-colors text-sm font-black outline-none rounded-none placeholder:font-medium placeholder:text-gray-400",
    style: {
      textTransform: 'uppercase'
    }
  }), /*#__PURE__*/React.createElement("input", {
    required: true,
    name: "amount",
    value: formData.amount,
    onChange: handleInputChange,
    type: "number",
    placeholder: "Amount (\u20B9)",
    className: "w-full py-1.5 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#D4AF37] focus:ring-0 transition-colors text-sm font-black outline-none rounded-none placeholder:font-medium placeholder:text-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "py-3 mt-4 border-y border-gray-100 text-center flex flex-col items-center justify-center gap-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-black uppercase text-gray-400 tracking-widest"
  }, "Secure Payment Method"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-2 text-[#D4AF37] font-black text-xs uppercase tracking-widest"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-shield-halved"
  }), " Online Payment Gateway"))), activeType === 'volunteers' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("textarea", {
    required: true,
    name: "address",
    value: formData.address,
    onChange: handleInputChange,
    placeholder: "Full Address",
    className: "w-full py-2 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#D4AF37] focus:ring-0 transition-colors h-16 text-sm font-medium outline-none rounded-none placeholder:text-gray-400 resize-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-white/50 rounded-xl border-2 border-dashed border-gray-200 text-center hover:border-[#FAC802] transition-all relative"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "file",
    accept: "image/*",
    onChange: handleFileChange,
    className: "absolute inset-0 opacity-0 cursor-pointer"
  }), photo ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    className: "w-12 h-12 rounded-lg object-cover"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-green-600"
  }, "Photo Selected!")) : /*#__PURE__*/React.createElement("div", {
    className: "text-gray-400"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl mb-1"
  }, "\uD83D\uDCF8"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-black uppercase tracking-widest"
  }, "Upload Passport Size Photo"), /*#__PURE__*/React.createElement("div", {
    className: "text-[8px] opacity-60 mt-1"
  }, "PNG, JPG up to 2MB")))), /*#__PURE__*/React.createElement(motion.button, {
    disabled: status === 'sending',
    whileHover: {
      scale: 1.02
    },
    whileTap: {
      scale: 0.98
    },
    type: "submit",
    className: "w-full py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-none font-serif font-bold text-sm tracking-[0.2em] shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all uppercase mt-3 flex items-center justify-center gap-3 border border-[#D4AF37]/50"
  }, status === 'sending' ? /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 border-4 border-black/30 border-t-black rounded-full animate-spin"
  }) : activeType === 'donors' ? 'Secure Pay' : 'Process Request'))))));
};
const PolicyModal = ({ policy, setPolicy }) => {
  if (!policy) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
    onClick: () => setPolicy(null)
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    onClick: e => e.stopPropagation(),
    className: "bg-white rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPolicy(null),
    className: "absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
  }, /*#__PURE__*/React.createElement("i", { className: "fas fa-times" })), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-secondary mb-6 uppercase tracking-widest border-b pb-4"
  }, policy.title), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-700 whitespace-pre-wrap leading-relaxed space-y-4"
  }, policy.content)));
};

const Footer = ({
  contact
}) => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  React.useEffect(() => { 
    document.documentElement.style.overflow = selectedPolicy ? 'hidden' : '';
    document.body.style.overflow = selectedPolicy ? 'hidden' : ''; 
  }, [selectedPolicy]);

  const handlePolicyClick = (e, title, content) => {
    if (!content || content === '#') {
      e.preventDefault();
      return;
    }
    if (content.startsWith('http') || content.startsWith('/')) {
      return; // allow normal link behavior
    }
    e.preventDefault();
    setSelectedPolicy({ title, content });
  };

  const renderPolicyLink = (title, content) => {
    const isUrl = content && (content.startsWith('http') || content.startsWith('/'));
    return /*#__PURE__*/React.createElement("a", {
      href: isUrl ? content : "#",
      target: isUrl ? "_blank" : undefined,
      rel: isUrl ? "noopener noreferrer" : undefined,
      onClick: (e) => handlePolicyClick(e, title, content),
      className: "hover:text-white transition-colors cursor-pointer"
    }, title);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("footer", {
  className: "bg-[#0a0a0a] text-white pt-12 pb-8 border-t border-white/10 relative overflow-hidden"
}, /*#__PURE__*/React.createElement("div", {
  className: "max-w-7xl mx-auto px-4 relative z-10"
}, /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12"
}, /*#__PURE__*/React.createElement("div", {
  className: "space-y-3"
}, /*#__PURE__*/React.createElement(LogoSymbol, {
  size: 100,
  className: "mb-4"
}), /*#__PURE__*/React.createElement("p", {
  className: "text-sm text-white/50 leading-relaxed font-medium whitespace-pre-wrap"
}, contact?.footerDesc || "Empowering lives through the sacred path of Sanatana Dharma. Our mission is to serve humanity through continuous spiritual education and charitable seva programs."), /*#__PURE__*/React.createElement("div", {
  className: "flex gap-3 pt-2"
}, [{
  id: 'facebook',
  icon: 'fab fa-facebook-f',
  url: contact?.facebook || 'https://facebook.com/profile.php?id=100017545657849/',
  color: 'text-[#1877F2] drop-shadow-[0_0_8px_rgba(24,119,242,0.6)]'
}, {
  id: 'instagram',
  icon: 'fab fa-instagram',
  url: contact?.instagram || 'https://www.instagram.com/suvarna_durga_seva_samithi_17?igsh=MXh3NzRwNGlmbTdoZw==',
  color: 'text-[#E4405F] drop-shadow-[0_0_8px_rgba(228,64,95,0.6)]'
}, {
  id: 'twitter',
  icon: 'fab fa-x-twitter',
  url: contact?.twitter || 'https://twitter.com/Suvarnadurga',
  color: 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]'
}, {
  id: 'youtube',
  icon: 'fab fa-youtube',
  url: contact?.youtube || 'https://youtube.com/@suvarnadurgasevasamithi4693',
  color: 'text-[#FF0000] drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]'
}, {
  id: 'whatsapp',
  icon: 'fab fa-whatsapp',
  url: contact?.whatsapp ? `https://wa.me/${contact.whatsapp}` : 'https://wa.me/919652681232',
  color: 'text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.6)]'
}].map(s => /*#__PURE__*/React.createElement(motion.a, {
  key: s.id,
  href: s.url,
  target: "_blank",
  rel: "noopener noreferrer",
  whileHover: {
    scale: 1.15,
    y: -3
  },
  className: "relative w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 backdrop-blur-xl border border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1),_0_8px_32px_rgba(0,0,0,0.5)] bg-white/5 hover:bg-white/10 group overflow-hidden"
}, /*#__PURE__*/React.createElement("div", {
  className: "absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity pointer-events-none"
}), /*#__PURE__*/React.createElement("i", {
  className: `${s.icon} ${s.color} relative z-10 transition-transform duration-300 group-hover:scale-110`
}))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-[#FAC802] font-black uppercase tracking-[0.3em] text-[10px] mb-6"
}, "Quick Links"), /*#__PURE__*/React.createElement("ul", {
  className: "grid grid-rows-6 grid-flow-col w-max gap-x-8 md:gap-x-12 gap-y-2"
}, [{
  name: 'Home',
  url: '#'
}, {
  name: 'About',
  url: '#about'
}, {
  name: 'Navaratri',
  url: '#navaratri'
}, {
  name: 'Events',
  url: '#events'
}, {
  name: 'Programs',
  url: '#programs'
}, {
  name: 'Temple',
  url: '#temple'
}, {
  name: 'Songs',
  url: '#songs'
}, {
  name: 'Gallery',
  url: '#gallery'
}, {
  name: 'Contact',
  url: '#contact'
}, {
  name: 'Donate',
  url: '#donate'
}, {
  name: 'Admin',
  url: 'admin.html',
  isExternal: true
}].map(l => /*#__PURE__*/React.createElement("li", {
  key: l.name
}, /*#__PURE__*/React.createElement("a", {
  href: l.url,
  target: l.isExternal ? "_blank" : "_self",
  className: "text-sm font-black uppercase tracking-tighter text-white/60 hover:text-[#FAC802] transition-colors flex items-center gap-2"
}, /*#__PURE__*/React.createElement("div", {
  className: "w-1 h-1 bg-[#FAC802] rounded-full"
}), " ", l.name))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-[#FAC802] font-black uppercase tracking-[0.3em] text-[10px] mb-6"
}, "Visit Our Trust"), /*#__PURE__*/React.createElement("ul", {
  className: "space-y-3"
}, /*#__PURE__*/React.createElement("li", {
  className: "flex gap-4 items-center group"
}, /*#__PURE__*/React.createElement("div", {
  className: "relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FF9933] to-[#D4AF37] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_0_8px_16px_rgba(255,153,51,0.3)] border border-white/30 backdrop-blur-xl overflow-hidden group-hover:scale-110 transition-transform duration-300"
}, /*#__PURE__*/React.createElement("div", {
  className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
}), /*#__PURE__*/React.createElement("i", {
  className: "fas fa-map-marker-alt text-white text-lg relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:-translate-y-1 transition-transform duration-300"
})), /*#__PURE__*/React.createElement("a", {
  href: contact?.mapsUrl || "https://maps.google.com/?q=Suvarna+Durga+Seva+Samiti+Jagtial",
  target: "_blank",
  className: "text-sm font-black text-white/80 leading-snug whitespace-pre-wrap group-hover:text-[#FAC802] transition-colors"
}, (contact?.addr1 ? contact.addr1 + (contact.addr2 ? '\n' + contact.addr2 : '') : '') || "Main Road, Temple City,\nAndhra Pradesh, India.")), /*#__PURE__*/React.createElement("li", {
  className: "flex gap-4 items-center group"
}, /*#__PURE__*/React.createElement("div", {
  className: "relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#FF9933] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_0_8px_16px_rgba(212,175,55,0.3)] border border-white/30 backdrop-blur-xl overflow-hidden group-hover:scale-110 transition-transform duration-300"
}, /*#__PURE__*/React.createElement("div", {
  className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
}), /*#__PURE__*/React.createElement("i", {
  className: "fas fa-phone-alt text-white text-lg relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:rotate-12 transition-transform duration-300"
})), /*#__PURE__*/React.createElement("a", {
  href: `tel:${(contact?.phone || "+91 96526 81232").replace(/\\s/g, '')}`,
  className: "text-lg font-black text-[#DBDBDB] group-hover:text-[#FAC802] transition-colors"
}, contact?.phone || "+91 96526 81232")), /*#__PURE__*/React.createElement("li", {
  className: "flex gap-4 items-center group"
}, /*#__PURE__*/React.createElement("div", {
  className: "relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FF8C00] shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),_0_8px_16px_rgba(255,215,0,0.3)] border border-white/30 backdrop-blur-xl overflow-hidden group-hover:scale-110 transition-transform duration-300"
}, /*#__PURE__*/React.createElement("div", {
  className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
}), /*#__PURE__*/React.createElement("i", {
  className: "fas fa-envelope text-white text-lg relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:-translate-y-1 transition-transform duration-300"
})), /*#__PURE__*/React.createElement("a", {
  href: `mailto:${contact?.email || "contact@suvarnadurga.org"}`,
  className: "text-sm font-black text-white/80 group-hover:text-[#FAC802] transition-colors"
}, contact?.email || "contact@suvarnadurga.org"))))), /*#__PURE__*/React.createElement("div", {
  className: "pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-center"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-[10px] font-black uppercase tracking-widest text-white/20"
}, contact?.copyright || "© 2026 Suvarna Durga Seva Samiti. Registered Trust (80G Certified) • Built in Devotion."), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-black uppercase tracking-widest text-white/20"
}, 
  renderPolicyLink("Privacy Policy", contact?.privacyUrl),
  renderPolicyLink("Terms & Conditions", contact?.termsUrl),
  renderPolicyLink("Refund Policy", contact?.refundUrl),
  renderPolicyLink("Cancellation Policy", contact?.cancelUrl),
  renderPolicyLink("Donation Policy", contact?.donatePolicyUrl),
  renderPolicyLink("Disclaimer", contact?.disclaimerUrl),
  renderPolicyLink("Compliance", contact?.complianceUrl),
  renderPolicyLink("Contact Us", contact?.contactUrl)
))), /*#__PURE__*/React.createElement(motion.button, {
  onClick: () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }),
  whileHover: {
    scale: 1.1,
    backgroundColor: '#FEDB00',
    color: '#8B0000'
  },
  whileTap: {
    scale: 0.9
  },
  className: "fixed bottom-8 right-8 z-[100] w-12 h-12 bg-transparent text-[#FAC802] rounded-full items-center justify-center border-2 border-[#FAC802]/50 hover:bg-[#FAC802]/10 backdrop-blur-sm text-xl hidden md:flex transition-colors"
}, "\u2191")), /*#__PURE__*/React.createElement(PolicyModal, { policy: selectedPolicy, setPolicy: setSelectedPolicy }));
};
const PremiumTranslator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const languages = [{
    code: 'en',
    name: 'English',
    icon: '🇺🇸'
  }, {
    code: 'te',
    name: 'తెలుగు (Telugu)',
    icon: '🇮🇳'
  }, {
    code: 'hi',
    name: 'हिन्दी (Hindi)',
    icon: '🇮🇳'
  }, {
    code: 'ta',
    name: 'தமிழ் (Tamil)',
    icon: '🇮🇳'
  }, {
    code: 'kn',
    name: 'ಕನ್ನಡ (Kannada)',
    icon: '🇮🇳'
  }, {
    code: 'mr',
    name: 'मराठी (Marathi)',
    icon: '🇮🇳'
  }, {
    code: 'ml',
    name: 'മലയാളം (Malayalam)',
    icon: '🇮🇳'
  }, {
    code: 'gu',
    name: 'ગુજરાતી (Gujarati)',
    icon: '🇮🇳'
  }, {
    code: 'bn',
    name: 'বাংলা (Bengali)',
    icon: '🇮🇳'
  }];
  const handleTranslate = langCode => {
    setCurrentLang(langCode);
    setIsOpen(false);

    if (langCode === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=' + window.location.hostname + '; path=/';
      window.location.reload();
      return;
    }

    // Hijack Google Translate combo box
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    } else {
      console.error("Google Translate script not loaded yet!");
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-6 right-6 z-[99999] flex flex-col items-end pointer-events-auto"
  }, /*#__PURE__*/React.createElement(AnimatePresence, null, isOpen && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    className: "mb-4 bg-black/90 backdrop-blur-xl border border-[#FAC802]/30 rounded-2xl shadow-[0_10px_40px_rgba(250,200,2,0.15)] overflow-hidden w-64"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 border-b border-white/10 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-[#FAC802]/20 flex items-center justify-center text-[#FAC802]"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-globe-asia"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-white text-xs font-black uppercase tracking-wider"
  }, "Language"), /*#__PURE__*/React.createElement("div", {
    className: "text-[#FAC802] text-[10px] uppercase font-bold tracking-widest"
  }, "Global Translation"))), /*#__PURE__*/React.createElement("div", {
    className: "max-h-[300px] overflow-y-auto divine-scroll p-2"
  }, languages.map(lang => /*#__PURE__*/React.createElement("button", {
    key: lang.code,
    onClick: () => handleTranslate(lang.code),
    className: `w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${currentLang === lang.code ? 'bg-[#8B0000] text-white shadow-inner' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-medium text-sm"
  }, lang.name), /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, lang.icon)))))), /*#__PURE__*/React.createElement(motion.button, {
    whileHover: {
      scale: 1.05
    },
    whileTap: {
      scale: 0.95
    },
    onClick: () => setIsOpen(!isOpen),
    className: "w-14 h-14 bg-gradient-to-br from-[#8B0000] to-black rounded-full shadow-[0_0_30px_rgba(139,0,0,0.5)] border-2 border-[#FAC802] flex items-center justify-center text-[#FAC802] text-xl transition-all hover:shadow-[0_0_40px_rgba(250,200,2,0.4)]"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${isOpen ? 'fa-times' : 'fa-language'} transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`
  })));
};
const App = () => {
  const [cmsContent, setCmsContent] = useState({});
  const [syncStatus, setSyncStatus] = useState('connecting');
  const [broadcastBanner, setBroadcastBanner] = useState(null);

  // ── PRIMARY: RTDB & Enterprise 5-Layer sync engine ──────────
  useEffect(() => {
    console.log('Starting SDSS Enterprise Sync Engine...');
    let active = true;

    // Wait for the Firebase initialization promise to resolve before starting sync listeners
    firebaseInitPromise.then(success => {
      if (!active) return;

      // Start unified 5-layer synchronization engine
      EnterpriseSync.start((key, data) => {
        if (!active) return;
        // Every update (RTDB, WebSocket, BroadcastChannel) flows here → React state → UI
        setCmsContent(prev => ({
          ...prev,
          [key]: data
        }));
      }, 'public');
    });

    // Network and Sync statuses
    const handleNetwork = e => {
      setSyncStatus(e.detail.online ? 'live' : 'offline');
    };
    window.addEventListener('sdss_network_status', handleNetwork);
    return () => {
      active = false;
      window.removeEventListener('sdss_network_status', handleNetwork);
    };
  }, []);

  // ── SERVICE WORKER & MEDIA ERROR HANDLING ────────────────
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then(reg => console.log('Service Worker Active', reg.scope)).catch(err => console.warn('SW registration failed:', err));
    }
    const mediaFallback = 'https://images.unsplash.com/photo-1631464312836-932e650db217?auto=format&fit=crop&q=80&w=1200';
    const handleMediaError = event => {
      const el = event.target;
      if (el?.tagName === 'IMG' && !el.dataset.fallbackApplied) {
        el.dataset.fallbackApplied = 'true';
        el.src = mediaFallback;
      }
    };
    document.addEventListener('error', handleMediaError, true);
    return () => document.removeEventListener('error', handleMediaError, true);
  }, []);
  const rawSections = cmsContent.sections || cmsContent.cms_nav_sections?.sections || cmsContent.cms_nav_sections || [{
    id: '1',
    name: 'Home',
    visible: true,
    type: 'Home'
  }, {
    id: '2',
    name: 'About',
    visible: true,
    type: 'About'
  }, {
    id: '3',
    name: 'Navaratri',
    visible: true,
    type: 'Navaratri'
  }, {
    id: '4',
    name: 'Events',
    visible: true,
    type: 'Events'
  }, {
    id: '5',
    name: 'Programs',
    visible: true,
    type: 'Programs'
  }, {
    id: '6',
    name: 'Temple',
    visible: true,
    type: 'Temple'
  }, {
    id: '7',
    name: 'Songs',
    visible: true,
    type: 'Songs'
  }, {
    id: '8',
    name: 'Gallery',
    visible: true,
    type: 'Gallery'
  }];
  const sections = Array.isArray(rawSections) ? rawSections : Object.values(rawSections);

  const renderSection = s => {
    const getD = col => cmsContent[col];
    const getList = col => {
      const val = cmsContent[col];
      if (!val) return [];
      return Array.isArray(val) ? val : Object.values(val);
    };
    switch (s.type || s.name) {
      case 'Home':
        return /*#__PURE__*/React.createElement(Home, {
          key: s.id,
          data: {
            ...getD('home_settings'),
            marqueeText: (() => {
               const news = getList('breaking_news').filter(n => n && n.status === 'published');
               const hs = getD('home_settings') || {};
               return news.length > 0 ? news.map(n => '⚡ ' + n.headline).join('  •  ') : (hs.marqueeText || '✨ JOIN OUR DAILY ANNADHANAM MISSION • SPECIAL NAVARATRI KUMKUMA ARCHANA ✨');
            })(),
            slides: getList('banner_slides').filter(b => b && b.status === 'active').sort((a, b) => (a.order || 0) - (b.order || 0)),
            videos: getList('banner_videos').filter(v => v && v.status === 'active')
          }
        });
      case 'About':
        return /*#__PURE__*/React.createElement(About, {
          key: s.id,
          data: getD('about_settings')
        });
      case 'Navaratri':
        return /*#__PURE__*/React.createElement(Navaratri, {
          key: s.id,
          data: {
            ...getD('about_settings'),
            days: getList('navaratri_entries')
          }
        });
      case 'Events':
        return /*#__PURE__*/React.createElement(Events, {
          key: s.id,
          data: {
            list: getList('spiritualityInAction').length > 0 ? getList('spiritualityInAction') : getList('events')
          }
        });
      case 'Programs':
        return /*#__PURE__*/React.createElement(Programs, {
          key: s.id,
          data: {
            list: getList('divineSevaPrograms').length > 0 ? getList('divineSevaPrograms') : getList('cms_programs')
          }
        });
      case 'Temple':
        return /*#__PURE__*/React.createElement(Temple, {
          key: s.id,
          data: getD('cms_temple')
        });
      case 'Songs':
        return /*#__PURE__*/React.createElement(Songs, {
          key: s.id,
          data: {
            list: getList('songs')
          }
        });
      case 'Gallery':
        return /*#__PURE__*/React.createElement(Gallery, {
          key: s.id,
          data: {
            images: getList('media_library').filter(m => m.type === 'Image'),
            videos: getList('media_library').filter(m => m.type === 'Video')
          }
        });
      default:
        return null;
    }
  };
  const getStatusColor = () => syncStatus === 'live' ? '#10b981' : syncStatus === 'offline' ? '#ef4444' : '#f59e0b';
  const getStatusText = () => syncStatus === 'live' ? 'Live Sync' : syncStatus === 'offline' ? 'Offline' : 'Connecting...';
  return /*#__PURE__*/React.createElement("div", {
    className: "sdss-app-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: 'relative'
    }
  }, broadcastBanner && /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 left-0 w-full z-[1001] bg-secondary text-primary py-2 overflow-hidden border-b-2 border-primary/20 shadow-lg flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "whitespace-nowrap animate-marquee font-black text-xs uppercase tracking-[0.2em] w-max shrink-0 min-w-max flex"
  }, [...Array(40)].map((_, i) => /*#__PURE__*/React.createElement("span", { key: i }, broadcastBanner, " \u2022 ")))), /*#__PURE__*/React.createElement(Navbar, {
    sections: sections,
    liveEnabled: cmsContent.cms_livestream?.enabled,
    trustData: cmsContent.trust_settings || {}
  }), /*#__PURE__*/React.createElement("main", {
    className: "sdss-main-content",
    style: {
      flex: 1
    }
  }, cmsContent.cms_livestream?.enabled && /*#__PURE__*/React.createElement("section", {
    id: "live",
    className: "py-24 bg-black border-b-8 border-secondary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-4 mb-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-4 h-4 bg-red-600 rounded-full animate-ping"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl md:text-6xl font-black tracking-tighter uppercase text-white gold-glow"
  }, "Live Darshan")), /*#__PURE__*/React.createElement("div", {
    className: "aspect-video w-full rounded-[2.5rem] overflow-hidden border-4 border-secondary shadow-[0_0_50px_rgba(139,0,0,0.5)] bg-gray-900"
  }, cmsContent.cms_livestream?.url ? /*#__PURE__*/React.createElement("iframe", {
    className: "w-full h-full",
    src: cmsContent.cms_livestream.url.includes('youtube.com/watch') ? cmsContent.cms_livestream.url.replace('watch?v=', 'embed/') : cmsContent.cms_livestream.url,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }) : /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full flex items-center justify-center italic text-white/20"
  }, "Stream content active...")), /*#__PURE__*/React.createElement("p", {
    className: "mt-10 text-xl text-divine/60 font-serif italic"
  }, "\"", cmsContent.cms_livestream?.title || 'Connect with the divine in real-time.', "\""))), sections && Array.isArray(sections) && sections.filter(s => s && s.visible).map(s => {
    try {
      return renderSection(s);
    } catch (e) {
      console.error("Section Render Failed", s, e);
      return null;
    }
  }), /*#__PURE__*/React.createElement(Contact, {
    contact: cmsContent.cms_contact || {},
    donate: cmsContent.about_settings?.donate || {},
    trustSettings: cmsContent.trust_settings || {}
  })), /*#__PURE__*/React.createElement(Footer, {
    contact: cmsContent.cms_contact || {}
  })));
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
