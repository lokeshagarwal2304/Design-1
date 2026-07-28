"use client";
import React from "react";

export default function EventsCTA() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#0B1320] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-slate-800">
          {/* Background Gradient & Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E11D48]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Side Icon + Text */}
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shrink-0 shadow-inner">
              <svg className="w-8 h-8 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Let's Connect at the Next Event
              </h2>
              <p className="text-sm text-slate-300 font-normal mt-1 max-w-xl">
                Building relationships beyond business. Meet our leadership team, explore steel supply partnerships, and build a stronger future together.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="relative z-10 shrink-0">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-[#0B1320] font-bold text-xs uppercase tracking-wider hover:bg-[#E11D48] hover:text-white transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
