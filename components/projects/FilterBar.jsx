"use client";

import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = [
  "All Projects",
  "Infrastructure",
  "Community Development",
  "Industrial",
  "Healthcare",
  "Education",
  "Environment",
];

export default function FilterBar({ activeCategory, onSelectCategory }) {
  return (
    <section className="sticky top-[80px] z-40 w-full bg-[#FAFAF8]/90 backdrop-blur-md border-y border-[#EAEAEA] font-['Manrope']">
      <div className="max-w-[1360px] mx-auto px-6 md:px-[80px] py-4 flex flex-wrap items-center justify-between gap-4">
        
        {/* Horizontal Category Filter Links */}
        <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`text-[18px] sm:text-[22px] transition-all whitespace-nowrap relative py-1.5 ${
                  isSelected
                    ? "text-[#D93025]"
                    : "text-[#555555] hover:text-[#D93025]"
                }`}
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {cat}

                {/* Hand-Drawn Red Underline for Active Category */}
                {isSelected && (
                  <motion.div
                    layoutId="activeFilterLine"
                    className="absolute -bottom-1 left-0 right-0 h-2"
                  >
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full text-[#D93025]" fill="none">
                      <path d="M 2 6 Q 50 8 98 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Side: Minimal Filter Button with Doodle */}
        <div className="relative ml-auto sm:ml-0 mt-4 sm:mt-0">
          <button 
            className="text-[#111111] hover:text-[#D93025] transition-all text-xl flex items-center gap-3 shrink-0 group"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <div className="relative w-9 h-9 rounded-full border-[1.5px] border-[#111111] group-hover:border-[#D93025] flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <span>Filter</span>
          </button>
          {/* Hand drawn arrow pointing up to filter */}
          <svg className="absolute -bottom-8 right-2 w-8 h-8 text-[#555555] pointer-events-none" viewBox="0 0 24 24" fill="none">
             <path d="M 16 20 Q 20 12 14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
             <path d="M 8 10 L 14 4 L 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      </div>
    </section>
  );
}
