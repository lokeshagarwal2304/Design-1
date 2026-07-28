"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, ""), 10) || 0;

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1600;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * numericTarget);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(numericTarget);
      }
    };

    window.requestAnimationFrame(step);
  }, [numericTarget]);

  const formattedCount = count.toLocaleString("en-IN");

  return (
    <span className="whitespace-nowrap">
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function StatisticsStrip() {
  const stats = [
    { target: "3", suffix: "+", label: "Warehouses" },
    { target: "250000", suffix: "+", label: "Sq. Ft. Storage Area" },
    { target: "15000", suffix: "+", label: "MT Capacity" },
    { target: "100", suffix: "%", label: "Safety & Quality Assured" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-12 relative z-20 mb-4 md:mb-6"
    >
      <div className="bg-white rounded-[22px] shadow-sm border border-[#ECECEC] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
        
        {/* Left Side: Icon & Copy */}
        <div className="flex items-start gap-4 lg:w-4/12">
          <div className="w-12 h-12 rounded-2xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center flex-shrink-0 p-3 mt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18" />
              <path d="M3 10l9-7 9 7v11H3V10z" />
              <path d="M9 21v-8h6v8" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#0B2C6B] tracking-tight mb-1">
              Reliable. Safe. Efficient.
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
              Modern systems ensuring product integrity and timely dispatch.
            </p>
          </div>
        </div>

        {/* Vertical Divider for Desktop */}
        <div className="hidden lg:block w-px h-16 bg-[#ECECEC]" />

        {/* Right Side: 4 Separated Statistics Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-8/12 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#ECECEC]">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-2 min-w-0"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B2C6B] tracking-tight mb-1 whitespace-nowrap">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-semibold text-slate-500 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
