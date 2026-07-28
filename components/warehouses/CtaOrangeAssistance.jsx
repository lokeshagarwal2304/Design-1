"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaOrangeAssistance() {
  return (
    <section className="w-full bg-[#F8FAFC] py-14 border-t border-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[24px] overflow-hidden p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-700 group min-h-[200px]"
        >
          {/* Full Card Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Blueprints/warehouse-banner.png"
              alt="Mutyam Steel Warehousing CTA Background"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Translucent Neutral Dark Gradient Overlay for crisp white text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85" />
          </div>

          {/* Left Side: Headset Icon & Text */}
          <div className="relative z-10 flex items-center gap-5 text-white">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white backdrop-blur-md border border-white/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight leading-tight">
                Need Assistance?
              </h3>
              <p className="text-slate-200 text-sm md:text-base font-medium opacity-95">
                Our team is here to help you with warehouse inquiries.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Us Button */}
          <div className="relative z-10 w-full lg:w-auto flex justify-center shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#EF4444] hover:bg-[#dc2626] text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#EF4444]/35 hover:scale-105 text-sm md:text-base w-full sm:w-auto"
            >
              <span>Contact Us</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
