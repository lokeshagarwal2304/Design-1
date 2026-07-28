"use client";

import React from "react";
import Link from "next/link";

export default function CtaAssistance() {
  return (
    <section className="w-full bg-[#F8FAFC] py-14 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0B2C6B] text-white rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-lg">
          {/* Background Map Graphic Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" stroke="white" strokeWidth="1">
              <path d="M50 100 Q 200 20 350 100 T 50 100" strokeDasharray="4 4" />
              <circle cx="200" cy="100" r="80" strokeDasharray="6 6" />
            </svg>
          </div>

          {/* Left Side: Icon & Copy */}
          <div className="flex items-center gap-5 z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white backdrop-blur-sm border border-white/10">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1">
                Need Assistance?
              </h3>
              <p className="text-blue-100 text-sm md:text-base font-medium">
                Our team is here to help you with any queries.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Us Button */}
          <div className="z-10 w-full md:w-auto">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0B2C6B] hover:bg-slate-100 font-bold text-sm md:text-base px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:translate-x-0.5 w-full md:w-auto"
            >
              <span>Contact Us</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="19" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
