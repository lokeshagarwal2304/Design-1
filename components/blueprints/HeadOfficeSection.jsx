"use client";

import React from "react";

export default function HeadOfficeSection() {
  return (
    <section className="w-full bg-[#F0F4F9] py-14 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading with Red Accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-6 bg-[#E53935] rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B2C6B] tracking-tight">
            Head Office
          </h2>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-[20px] border border-[#E8ECF2] shadow-sm p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden transition-all hover:shadow-md">
          
          {/* Left Side: Office Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative overflow-hidden rounded-[16px] h-[260px] md:h-[300px] w-full bg-slate-100">
              <img
                src="/Blueprints/section-2 insidie office.jpg"
                alt="Mutyam Steel Head Office Interior"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.src = "/Blueprints/section-2%20insidie%20office.jpg";
                }}
              />
            </div>
          </div>

          {/* Right Side: Details & Watermark */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between h-full relative z-10">
            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 bg-[#0B2C6B]/10 text-[#0B2C6B] text-xs font-bold px-3.5 py-1.5 rounded-full mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Head Office</span>
              </div>

              {/* Office Name */}
              <h3 className="text-2xl font-extrabold text-[#0B2C6B] mb-3">
                Mutyam Steel Pvt. Ltd.
              </h3>

              {/* Address */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-medium max-w-md">
                Plot No. 123, Industrial Estate, Sanath Nagar, Hyderabad – 500018, Telangana, India.
              </p>

              {/* Phone & Email */}
              <div className="flex flex-col gap-2.5 text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-3">
                  <svg className="text-[#E53935]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+914023816000" className="hover:text-[#0B2C6B] transition-colors">+91 40 2381 6000</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="text-[#E53935]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:info@mutyamsteel.com" className="hover:text-[#0B2C6B] transition-colors">info@mutyamsteel.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Blueprint Line Art Graphic in Background */}
          <div className="absolute right-4 bottom-4 w-48 h-36 opacity-10 pointer-events-none hidden md:flex flex-col justify-end items-end text-right">
            <svg width="140" height="100" viewBox="0 0 140 100" fill="none" stroke="#0B2C6B" strokeWidth="1.2">
              <rect x="10" y="30" width="40" height="70" />
              <rect x="60" y="10" width="50" height="90" />
              <line x1="20" y1="40" x2="40" y2="40" />
              <line x1="20" y1="55" x2="40" y2="55" />
              <line x1="20" y1="70" x2="40" y2="70" />
              <line x1="70" y1="25" x2="100" y2="25" />
              <line x1="70" y1="45" x2="100" y2="45" />
              <line x1="70" y1="65" x2="100" y2="65" />
            </svg>
            <span className="text-[11px] font-medium text-[#0B2C6B] leading-tight mt-1">
              Corporate operations, strategic planning, and national administration.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
