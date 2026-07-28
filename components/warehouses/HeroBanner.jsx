"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[540px] pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden flex items-center bg-[#0F172A]">
      {/* Full-width Warehouse Background Image without heavy white overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-right md:bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url('/Blueprints/warehouse-banner.png')` }}
      >
        {/* Subtle Dark Gradient for Text Readability without washing out image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col justify-center z-10">
        {/* Safer Storage Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <span className="text-[#F97316] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-[#F97316]/15 border border-[#F97316]/40 px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
            SAFER STORAGE
          </span>
        </motion.div>

        {/* Heading with Premium Slow-Moving Orange Watery Gradient */}
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 leading-tight"
        >
          <span className="watery-orange-gradient">
            Warehousing <br className="hidden sm:inline" /> Facilities
          </span>
        </motion.h1>

        {/* Small Orange Underline Accent */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-14 h-1.5 bg-[#F97316] rounded-full mb-5 origin-left"
        />

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl font-medium leading-relaxed"
        >
          State-of-the-art infrastructure to store, protect and manage steel products with efficiency and care.
        </motion.p>
      </div>

      {/* Watery Orange Shimmer CSS Keyframe */}
      <style jsx>{`
        @keyframes wateryOrangeShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .watery-orange-gradient {
          background: linear-gradient(
            120deg,
            #ffffff 0%,
            #F97316 25%,
            #FBBF24 50%,
            #FB923C 75%,
            #ffffff 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: wateryOrangeShimmer 6s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
