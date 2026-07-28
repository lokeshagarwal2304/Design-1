"use client";

import React from "react";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 15l-2 5l9-11h-7l2-5l-9 11h7z"/>
      </svg>
    ),
    title: "Diverse Portfolio",
    desc: "Projects spanning multiple industries and sectors",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: "Quality Assured",
    desc: "Built with the highest standards of safety and quality",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "Timely execution and delivery is our commitment",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Client Satisfaction",
    desc: "Long-term relationships built on trust and reliability",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Global Reach",
    desc: "Serving clients across India and overseas regions",
  },
];

export default function TrustStrip() {
  return (
    <section className="w-full bg-[#FAF8F5] border-y border-[#EBE7DF] py-14 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {TRUST_ITEMS.map((item, i) => {
            // Directional animation: left items from Left (x: -50), center from Bottom, right items from Right (x: 50)
            const initialX = i < 2 ? -50 : i > 2 ? 50 : 0;
            const initialY = i === 2 ? 40 : 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: initialX, y: initialY, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Large Red Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#D62E2E]/10 border border-[#D62E2E]/20 flex items-center justify-center text-[#D62E2E] mb-4 shadow-sm group-hover:scale-110 group-hover:bg-[#D62E2E] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] md:text-[18px] font-bold font-['Space_Grotesk'] text-[#0F172A] mb-2 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] font-medium font-['Manrope'] text-[#475569] leading-relaxed max-w-[210px] mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
