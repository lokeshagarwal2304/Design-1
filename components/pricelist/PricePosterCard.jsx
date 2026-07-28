"use client";

import React from "react";
import Image from "next/image";

export default function PricePosterCard({ selectedState = "All States", selectedProduct = "All Products" }) {
  // Format state title for arch header
  const stateTitle =
    selectedState === "All States"
      ? "ANDHRA PRADESH & TELANGANA"
      : selectedState.toUpperCase();

  // Dynamic Product title
  const productTitle1 =
    selectedProduct === "All Products"
      ? "Price of GP YST 210"
      : `Price of ${selectedProduct}`;

  const productTitle2 =
    selectedProduct === "All Products"
      ? "Price of Z+ YST 210"
      : `Price of ${selectedProduct} Grade`;

  return (
    <div className="w-full max-w-[850px] mx-auto bg-slate-900 p-3 sm:p-5 rounded-3xl shadow-2xl border-4 border-slate-800 font-['Space_Grotesk'] text-slate-900">
      {/* Outer Card Frame */}
      <div className="bg-[#B0BCCB] rounded-2xl overflow-hidden border-2 border-white shadow-inner flex flex-col justify-between relative">
        
        {/* -----------------------------------------------------------------
            1. TOP LOGOS BAR (White Background)
            ----------------------------------------------------------------- */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b-2 border-slate-300">
          {/* Left: Tata Structura Z+ Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/Tata-structurea-logo.png"
              alt="TATA STRUCTURA"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          {/* Right: Tata Steel Corporate Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/tata-steel-logo.svg"
              alt="TATA STEEL"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </div>
        </div>

        {/* -----------------------------------------------------------------
            2. CURVED ARCH HEADER (Grey/Blue Arch with Price Title)
            ----------------------------------------------------------------- */}
        <div className="relative bg-[#B0BCCB] pt-4 pb-2 px-4 text-center">
          {/* Arch Curved Shape */}
          <div className="bg-gradient-to-b from-slate-200 to-[#C0C8D6] rounded-t-[90px] border-t-2 border-x-2 border-slate-400/60 pt-5 pb-3 px-4 shadow-sm">
            <h3 className="text-xs sm:text-sm font-black tracking-wider text-slate-800 uppercase">
              RECOMMENDED CONSUMER PRICE
            </h3>
            <h2 className="text-sm sm:text-base md:text-lg font-black tracking-widest text-slate-950 uppercase mt-0.5">
              {stateTitle}
            </h2>
          </div>
        </div>

        {/* -----------------------------------------------------------------
            3. MAIN CONTENT CONTAINER (Tables + Terms & Conditions)
            ----------------------------------------------------------------- */}
        <div className="px-4 sm:px-6 pb-4 space-y-4">
          
          {/* TABLE 1: GP YST 210 */}
          <div className="space-y-1">
            <h4 className="text-center text-sm sm:text-base font-black text-slate-900 tracking-tight">
              {productTitle1}
            </h4>

            {/* Dark Purple Table Container */}
            <div className="bg-[#2E1065] text-white rounded-lg overflow-hidden border-2 border-[#1E0A45] shadow-md">
              <table className="w-full text-center border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#2E1065] border-b-2 border-white/40 text-[11px] sm:text-xs font-bold uppercase">
                    <th className="py-2 px-2 border-r-2 border-white/40 w-1/5">Section</th>
                    <th className="py-2 px-2 border-r-2 border-white/40 w-2/5">Size (MM)</th>
                    <th className="py-2 px-2 border-r-2 border-white/40 w-1/4">Thickness (MM)</th>
                    <th className="py-2 px-2 w-1/5">RCP</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-white/40 font-bold text-xs sm:text-sm">
                  {/* Row 1 */}
                  <tr>
                    <td rowSpan={2} className="py-3 px-2 border-r-2 border-white/40 font-black text-sm sm:text-base leading-tight bg-[#240A53]">
                      SHS<br />&amp;<br />RHS
                    </td>
                    <td className="py-2 px-2 border-r-2 border-white/40 text-[10px] sm:text-xs font-black">
                      20x20 TO 100x100<br />&amp;<br />40x20 TO 96 x 48
                    </td>
                    <td className="py-2 px-2 border-r-2 border-white/40 font-black text-xs sm:text-sm">
                      1.4 MM &amp; 2MM
                    </td>
                    <td className="py-2 px-2 font-black text-base sm:text-xl tracking-tight text-white">
                      103500
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr>
                    <td className="py-2 px-2 border-r-2 border-white/40 text-[10px] sm:text-xs font-black border-t-2 border-white/40">
                      20x20 TO 100x100<br />&amp;<br />40x20 TO 96 x 48
                    </td>
                    <td className="py-2 px-2 border-r-2 border-white/40 font-black text-xs sm:text-sm border-t-2 border-white/40">
                      1.2 MM
                    </td>
                    <td className="py-2 px-2 font-black text-base sm:text-xl tracking-tight text-white border-t-2 border-white/40">
                      105600
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TABLE 2: Z+ YST 210 */}
          <div className="space-y-1">
            <h4 className="text-center text-sm sm:text-base font-black text-slate-900 tracking-tight">
              {productTitle2}
            </h4>

            {/* Dark Purple Table Container */}
            <div className="bg-[#2E1065] text-white rounded-lg overflow-hidden border-2 border-[#1E0A45] shadow-md">
              <table className="w-full text-center border-collapse text-xs sm:text-sm">
                <tbody className="divide-y-2 divide-white/40 font-bold">
                  {/* CHS Row 1 */}
                  <tr>
                    <td rowSpan={2} className="py-3 px-2 border-r-2 border-white/40 font-black text-sm sm:text-base bg-[#240A53] w-1/5">
                      CHS
                    </td>
                    <td className="py-2 px-2 border-r-2 border-white/40 text-[11px] sm:text-xs font-black w-2/5">
                      25NB TO 100NB
                    </td>
                    <td className="py-2 px-2 border-r-2 border-white/40 font-black text-xs sm:text-sm w-1/4">
                      2MM &amp; &gt;2MM
                    </td>
                    <td className="py-2 px-2 font-black text-base sm:text-xl tracking-tight text-white w-1/5">
                      118100
                    </td>
                  </tr>
                  {/* CHS Row 2 */}
                  <tr>
                    <td className="py-2 px-2 border-r-2 border-white/40 text-[11px] sm:text-xs font-black border-t-2 border-white/40">
                      25NB TO 65NB
                    </td>
                    <td className="py-2 px-2 border-r-2 border-white/40 font-black text-xs sm:text-sm border-t-2 border-white/40">
                      1.6MM
                    </td>
                    <td className="py-2 px-2 font-black text-base sm:text-xl tracking-tight text-white border-t-2 border-white/40">
                      121900
                    </td>
                  </tr>

                  {/* SHS & RHS Row 3 */}
                  <tr>
                    <td rowSpan={2} className="py-3 px-2 border-r-2 border-white/40 font-black text-sm sm:text-base bg-[#240A53] border-t-2 border-white/40">
                      SHS<br />&amp;<br />RHS
                    </td>
                    <td className="py-2 px-2 border-r-2 border-white/40 text-[10px] sm:text-xs font-black border-t-2 border-white/40">
                      20 x 20 TO 100x100<br />&amp;<br />40 x 20 TO 96x48
                    </td>
                    <td className="py-2 px-2 border-r-2 border-white/40 font-black text-xs sm:text-sm border-t-2 border-white/40">
                      2MM &amp; &gt;2MM
                    </td>
                    <td className="py-2 px-2 font-black text-base sm:text-xl tracking-tight text-white border-t-2 border-white/40">
                      126900
                    </td>
                  </tr>
                  {/* SHS & RHS Row 4 */}
                  <tr>
                    <td className="py-2 px-2 border-r-2 border-white/40 text-[10px] sm:text-xs font-black border-t-2 border-white/40">
                      40 x 20 TO 96x48
                    </td>
                    <td className="py-2 px-2 border-r-2 border-white/40 font-black text-xs sm:text-sm border-t-2 border-white/40">
                      1.6MM
                    </td>
                    <td className="py-2 px-2 font-black text-base sm:text-xl tracking-tight text-white border-t-2 border-white/40">
                      130600
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              4. TERMS & CONDITIONS + BADGES + PIPES GRAPHICS SECTION
              ----------------------------------------------------------------- */}
          <div className="relative pt-2 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            
            {/* Terms & Conditions Block (Left 7 Columns) */}
            <div className="md:col-span-7 space-y-1.5 text-[10px] sm:text-[11.5px] font-bold text-slate-850 leading-tight">
              <h5 className="text-xs sm:text-sm font-black underline tracking-tight text-slate-950 mb-1">
                Terms &amp; Conditions
              </h5>
              
              <div className="flex items-start gap-1.5">
                <span className="w-2 h-2 bg-slate-500 rounded-xs shrink-0 mt-0.5" />
                <p>The above prices are inclusive of all taxes.</p>
              </div>

              <div className="flex items-start gap-1.5">
                <span className="w-2 h-2 bg-slate-500 rounded-xs shrink-0 mt-0.5" />
                <p>All Material as per IS 1161 &amp; IS 4923.</p>
              </div>

              <div className="flex items-start gap-1.5">
                <span className="w-2 h-2 bg-slate-500 rounded-xs shrink-0 mt-0.5" />
                <p>Above prices are applicable for material sold through the Authorised BDP Network.,</p>
              </div>

              {/* Red Mutyam Steel Highlight Text */}
              <div className="pl-3.5 py-0.5">
                <span className="text-red-600 font-extrabold text-xs sm:text-sm">
                  Mutyam Steel Pvt. Ltd., w.e.f. 5th June 2026
                </span>
              </div>

              <div className="flex items-start gap-1.5">
                <span className="w-2 h-2 bg-slate-500 rounded-xs shrink-0 mt-0.5" />
                <p>The above prices are subjected to alteration without notice and supersede all previous notification on the subject.</p>
              </div>
            </div>

            {/* Badges & QR & Pipes Graphic Area (Right 5 Columns) */}
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col items-center justify-end gap-3 relative">
              
              {/* Overlay Row: Starburst Badge + QR Box */}
              <div className="flex items-center gap-3">
                {/* Red Starburst Special Discount Badge */}
                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center text-center">
                  <div className="absolute inset-0 bg-[#E53935] rounded-full animate-pulse shadow-md flex items-center justify-center border-2 border-amber-400">
                    <span className="text-[10px] font-black text-white leading-tight uppercase px-1">
                      Special<br />Discount<br />is available<br />on Aashiyana
                    </span>
                  </div>
                </div>

                {/* QR Code Box */}
                <div className="bg-white border-2 border-emerald-500 rounded-xl p-1.5 shadow-sm text-center w-24 shrink-0 flex flex-col items-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://aashiyana.tatasteel.com"
                    alt="Scan to Visit Tata Steel Aashiyana"
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-[8px] font-black text-slate-800 leading-none mt-1 uppercase">
                    For Online orders Scan to visit Tata Steel Aashiyana
                  </span>
                </div>
              </div>

              {/* 3D Steel Pipes Illustration */}
              <div className="w-full flex justify-end">
                <img
                  src="/gi-pipes.png"
                  alt="Tata Structura Steel Hollow Pipes"
                  className="h-20 sm:h-24 w-auto object-contain drop-shadow-md"
                />
              </div>
            </div>

          </div>

        </div>

        {/* -----------------------------------------------------------------
            5. BOTTOM FOOTER BAR (Dark Purple Bar)
            ----------------------------------------------------------------- */}
        <div className="bg-[#2E1065] text-white py-2 px-4 text-center text-[10px] sm:text-xs font-bold border-t-2 border-white/40">
          <p className="tracking-wide">
            Toll Free No. : 1800 108 8282 &nbsp;|&nbsp; e-mail: tatastructura@tatasteel.com &nbsp;|&nbsp; www.tatastructura.com
          </p>
        </div>

      </div>
    </div>
  );
}
