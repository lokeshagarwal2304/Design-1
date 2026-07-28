"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FacilitiesFeaturesSection() {
  const features = [
    {
      title: "Large Storage Capacity",
      desc: "Spacious yards with high storage capacity to handle bulk orders efficiently.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 10h6" />
          <path d="M9 14h6" />
          <path d="M9 18h6" />
        </svg>
      ),
    },
    {
      title: "Safety & Security",
      desc: "24/7 surveillance, secure premises and strict safety protocols.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      title: "Material Handling",
      desc: "Advanced cranes, forklifts and loading systems for smooth operations.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 17h20" />
          <path d="M6 17V4h12v13" />
          <line x1="12" y1="4" x2="12" y2="12" />
          <rect x="9" y="12" width="6" height="5" />
        </svg>
      ),
    },
    {
      title: "Inventory Management",
      desc: "Digital tracking system for accurate stock visibility and management.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <line x1="8" y1="11" x2="16" y2="11" />
          <line x1="8" y1="15" x2="12" y2="15" />
        </svg>
      ),
    },
    {
      title: "Weather Protected",
      desc: "Covered areas and proper drainage to protect steel from weather damage.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 14.9" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <path d="M8 18l4 3 4-3" />
        </svg>
      ),
    },
    {
      title: "Fast Dispatch",
      desc: "Streamlined processes for quick and on-time delivery.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#FFFDF9] via-[#FFF6EE] to-[#FFFDF9] pt-12 pb-6 md:pt-16 md:pb-8 border-t border-[#FDE6D5]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Label */}
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-extrabold tracking-widest uppercase text-[#F97316] mb-2 block"
        >
          FACILITIES &amp; FEATURES
        </motion.span>

        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#0B2C6B] tracking-tight mb-12"
        >
          Built to Handle. Designed to Deliver.
        </motion.h2>

        {/* 6 Equal Feature Cards Grid (2 cols on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-3.5 sm:p-5 rounded-[18px] sm:rounded-[22px] bg-white/90 backdrop-blur-sm border border-[#FEE3D0] shadow-[0_4px_20px_rgba(249,115,22,0.06)] hover:shadow-[0_12px_30px_rgba(249,115,22,0.15)] hover:-translate-y-1.5 hover:border-[#F97316]/50 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 sm:w-13 sm:h-13 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-orange-50/80 border border-orange-100 text-[#F97316] flex items-center justify-center mb-2.5 sm:mb-4 shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white group-hover:shadow-md">
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-xs sm:text-base font-bold text-[#0B2C6B] mb-1 sm:mb-2 leading-snug group-hover:text-[#F97316] transition-colors">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-700 font-medium leading-snug sm:leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
