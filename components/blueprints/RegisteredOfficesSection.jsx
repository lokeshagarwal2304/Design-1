"use client";

import React from "react";

export default function RegisteredOfficesSection() {
  const offices = [
    {
      state: "Telangana",
      name: "Registered Office – Telangana",
      address: "H. No. 8-2-293/82/A/1130, Road No. 36, Jubilee Hills, Hyderabad – 500033, Telangana, India.",
      phone: "+91 40 2355 7788",
      email: "accounts@mutyamsteel.com",
      image: "/building_thumbnail.png",
    },
    {
      state: "Andhra Pradesh",
      name: "Registered Office – Andhra Pradesh",
      address: "D.No. 39-7-5/1, 2nd Floor, M.G. Road, Vijayawada – 520010, Andhra Pradesh, India.",
      phone: "+91 866 247 7788",
      email: "vja@mutyamsteel.com",
      image: "/About-office.png",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-14 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading with Red Accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-6 bg-[#E53935] rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B2C6B] tracking-tight">
            Registered Offices
          </h2>
        </div>

        {/* Grid: 2 Equal Width Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] border border-[#E8ECF2] shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full min-h-[220px]"
            >
              {/* Left Image (Fixed Aspect & Uniform Dimension) */}
              <div className="w-full sm:w-[200px] md:w-[210px] h-[190px] sm:h-[190px] rounded-[14px] overflow-hidden flex-shrink-0 bg-slate-100 relative">
                <img
                  src={office.image}
                  alt={office.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Right Information */}
              <div className="flex-1 relative z-10 flex flex-col justify-between w-full h-full py-1">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-[#0B2C6B]/10 text-[#0B2C6B] text-[11px] font-bold px-3 py-1 rounded-full mb-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{office.name}</span>
                  </div>

                  {/* Address */}
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed mb-4">
                    {office.address}
                  </p>
                </div>

                {/* Phone & Email */}
                <div className="flex flex-col gap-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <svg className="text-[#E53935]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-[#0B2C6B] transition-colors">{office.phone}</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg className="text-[#E53935]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a href={`mailto:${office.email}`} className="hover:text-[#0B2C6B] transition-colors">{office.email}</a>
                  </div>
                </div>

                {/* Watermark Line Art Background */}
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden sm:block">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#0B2C6B" strokeWidth="1.5">
                    <rect x="20" y="20" width="60" height="70" rx="4" />
                    <line x1="35" y1="35" x2="65" y2="35" />
                    <line x1="35" y1="50" x2="65" y2="50" />
                    <line x1="35" y1="65" x2="65" y2="65" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
