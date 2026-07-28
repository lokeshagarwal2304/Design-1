"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OverviewSection() {
  const checklist = [
    "Spacious and well-structured storage yards",
    "Advanced inventory tracking and management",
    "Proper stacking, bundling and labeling",
    "Weather-protected and secure storage",
    "Efficient material handling and dispatch",
  ];

  return (
    <section className="w-full bg-[#FFFFFF] pt-8 pb-12 md:pt-10 md:pb-16 border-t border-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Overview Label */}
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-extrabold tracking-widest uppercase text-[#F97316] mb-2 block"
            >
              OVERVIEW
            </motion.span>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-[#0B2C6B] tracking-tight mb-4 leading-tight"
            >
              Advanced Warehousing <br className="hidden sm:inline" /> for Superior Service
            </motion.h2>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base md:text-lg font-normal leading-relaxed mb-6"
            >
              Our warehousing facilities are strategically located to ensure faster supply, better inventory management and product safety. With robust storage capacity and advanced material handling systems, we maintain the highest standards in steel warehousing.
            </motion.p>

            {/* Checklist */}
            <div className="flex flex-col gap-3.5">
              {checklist.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F97316]/10 text-[#F97316] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-800 group-hover:text-[#0B2C6B] transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Warehouse Interior Image with Rich Hover Effects */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[20px] overflow-hidden shadow-md border border-[#ECECEC] h-[340px] sm:h-[380px] md:h-[420px] w-full bg-slate-100 group transition-all duration-500 hover:shadow-xl hover:border-[#F97316]/30">
              <img
                src="/Product-rect-3.png"
                alt="Inside Mutyam Steel Warehouse"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "/Solarsheds.png";
                }}
              />
              {/* Subtle Dark Vignette & Amber Accent Shimmer Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3.5 text-xs font-bold text-[#0B2C6B] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm flex items-center justify-between">
                <span>Heavy Structural Storage &amp; Automated Handling</span>
                <span className="text-[#F97316]">&rarr;</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
