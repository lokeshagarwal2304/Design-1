"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { id: "all", label: "All Projects", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
    </svg>
  )},
  { id: "industrial", label: "Industrial", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2v16z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>
    </svg>
  )},
  { id: "infrastructure", label: "Infrastructure", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
    </svg>
  )},
  { id: "commercial", label: "Commercial", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )},
  { id: "institutional", label: "Institutional", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
      <path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
    </svg>
  )},
  { id: "residential", label: "Residential", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    </svg>
  )},
  { id: "warehouse", label: "Warehouse", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/>
      <path d="M6 18h12"/><path d="M6 14h12"/><rect width="8" height="6" x="8" y="18"/>
    </svg>
  )},
  { id: "overseas", label: "Overseas", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )},
];

const YEAR_OPTIONS = [
  { id: "all", label: "All Years" },
  { id: "2024", label: "2024" },
  { id: "2023", label: "2023" },
  { id: "2022", label: "2022" },
  { id: "2021", label: "2021" },
  { id: "2020", label: "2020 & Older" },
];

const PRODUCT_OPTIONS = [
  { id: "all", label: "All Steel Products" },
  { id: "yst210", label: "Tata Structura YST 210" },
  { id: "yst310", label: "Tata Structura YST 310" },
  { id: "yst355", label: "Tata Structura YST 355" },
  { id: "zplus", label: "Tata Structura Z+" },
  { id: "gp", label: "GP Pipes & Sections" },
];

const SCALE_OPTIONS = [
  { id: "all", label: "All Scales" },
  { id: "mega", label: "Mega (> 5k MT)" },
  { id: "major", label: "Major (2k–5k MT)" },
  { id: "standard", label: "Standard (< 2k MT)" },
];

export default function CategoryBar({
  activeCategory,
  onSelectCategory,
  filters = { year: "all", product: "all", scale: "all" },
  onUpdateFilters,
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Active filter count
  const activeCount =
    (filters.year !== "all" ? 1 : 0) +
    (filters.product !== "all" ? 1 : 0) +
    (filters.scale !== "all" ? 1 : 0);

  // Hover handlers with smooth buffer
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setTempFilters(filters);
    setIsFilterOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsFilterOpen(false);
    }, 180);
  };

  const applyDropdownFilters = () => {
    if (onUpdateFilters) {
      onUpdateFilters(tempFilters);
    }
    setIsFilterOpen(false);
  };

  const resetDropdownFilters = () => {
    const cleared = { year: "all", product: "all", scale: "all" };
    setTempFilters(cleared);
    if (onUpdateFilters) {
      onUpdateFilters(cleared);
    }
    setIsFilterOpen(false);
  };

  return (
    <div className="w-full bg-[#FAF8F5] py-5 border-y border-[#E9ECEF] relative z-30">
      <div className="max-w-[1536px] mx-auto px-6 md:px-[60px] flex items-center justify-start gap-3">

        {/* Domino's Style Pill Track */}
        <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 p-1.5 bg-white border border-[#E2E8F0] rounded-full shadow-sm">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-bold font-['Manrope'] whitespace-nowrap shrink-0 transition-colors group cursor-pointer"
              >
                {/* Active Sliding Pill Backdrop */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 bg-[#0F172A] rounded-full shadow-md z-0"
                  />
                )}

                {/* Button Icon & Label */}
                <span className={`relative z-10 flex items-center gap-2 transition-colors duration-200 ${isActive ? "text-white" : "text-[#475569] group-hover:text-[#0F172A]"}`}>
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
