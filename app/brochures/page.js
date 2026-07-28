"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BROCHURES_DATA = [
  {
    id: "structura-main",
    title: "Tata Steel Structura Official Catalogue",
    category: "Tata Structura",
    tag: "Primary Specs",
    description: "Complete technical catalog covering RHS, SHS & CHS hollow sections, load-bearing capacities, mechanical properties, and architectural application guidelines.",
    pdfUrl: "/brouchers/tata-steel-structura-brochure.pdf",
    coverImg: "/structura-steel.png",
    fileSize: "0.98 MB",
    pages: "24 Pages",
    format: "PDF",
    featured: true,
  },
  {
    id: "structura-zplus",
    title: "Tata Structura Z+ Galvanized Tubes",
    category: "Tata Structura Z+",
    tag: "Corrosion Resistant",
    description: "Comprehensive product brochure for Z+ extra-duty galvanized structural steel tubes. Ideal for coastal, chemical, and severe outdoor infrastructure.",
    pdfUrl: "/brouchers/tata-structura-z-plus-brochure.pdf",
    coverImg: "/Structura-z+.png",
    fileSize: "5.07 MB",
    pages: "16 Pages",
    format: "PDF",
    featured: true,
  },
  {
    id: "yst-series",
    title: "Tata Structura YST-210 / YST-310 Grade Specs",
    category: "YST Series",
    tag: "High Yield Strength",
    description: "Detailed engineering specifications, chemical composition, yield strength data sheets, and tolerance tables for YST-210 & YST-310 structural steel grades.",
    pdfUrl: "/brouchers/yst210-brouchure.pdf",
    coverImg: "/YST-210.png",
    fileSize: "6.38 MB",
    pages: "32 Pages",
    format: "PDF",
    featured: false,
  },
  {
    id: "gp-pipes",
    title: "Mutyam GP & GI Steel Pipes Technical Guide",
    category: "GP Pipes",
    tag: "Galvanized Pipes",
    description: "Complete size chart, gauge thickness matrix, weight tables, and pressure rating guidelines for Galvanized Pre-Plated (GP) & GI steel pipes.",
    pdfUrl: "/brouchers/gp-tubes-brochure.pdf",
    coverImg: "/GP-pipe.jpg",
    fileSize: "3.10 MB",
    pages: "18 Pages",
    format: "PDF",
    featured: false,
  },
];

const CATEGORIES = ["All", "Tata Structura", "Tata Structura Z+", "YST Series", "GP Pipes"];

export default function BrochuresPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrochures = useMemo(() => {
    return BROCHURES_DATA.filter((b) => {
      const matchesCategory = activeCategory === "All" || b.category === activeCategory;
      const matchesSearch =
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const scrollToContent = () => {
    const element = document.getElementById("brochures-content-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full min-h-screen bg-white text-slate-800 font-['Manrope'] overflow-x-hidden">
      
      {/* =========================================================================
          1. EXPANDED FULL HERO SECTION (Light 15% Dark Overlay + Animated Liquid Watery Wave Gradient)
          ========================================================================= */}
      <section className="relative w-full min-h-[90vh] md:min-h-[92vh] bg-slate-950 text-white flex flex-col justify-between pt-32 pb-12 overflow-hidden">
        
        {/* Full-bleed Background Image from /brouchers/banner-image.png with LIGHT 15-20% overlay */}
        <div className="absolute inset-0 z-0 opacity-85">
          <Image
            src="/brouchers/banner-image.png"
            alt="Mutyam Steel Brochures Banner Background"
            fill
            priority
            className="object-cover object-center filter brightness-[1.05] contrast-[1.05]"
          />
          {/* Soft light 15% - 20% dark tint overlay so image remains bright & visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/35 to-slate-950/15" />
        </div>

        {/* Top Hero Text & Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 my-auto pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            <div className="max-w-2xl space-y-4 text-center md:text-left">
              
              {/* Technical Documentation Hub Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-widest text-red-400 shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
                Technical Documentation Hub
              </motion.div>

              {/* Heading with Liquid Watery Wave Gradient Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-black font-['Space_Grotesk'] tracking-tight leading-[1.06] drop-shadow-xl"
              >
                Product{" "}
                <span className="animate-liquid-watery-gradient font-black">
                  Brochures
                </span>{" "}
                &amp; Catalogues
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-100 text-base sm:text-lg md:text-xl font-semibold leading-relaxed max-w-xl drop-shadow-md"
              >
                Download official technical data sheets, structural load tables, dimension matrices, and certified catalogues for Tata Structura &amp; Mutyam Steel products.
              </motion.p>
            </div>

            {/* Quick Stats Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full md:w-auto bg-black/40 border border-white/25 backdrop-blur-md rounded-2xl p-6 sm:p-8 grid grid-cols-2 gap-8 text-center md:text-left shrink-0 shadow-2xl"
            >
              <div>
                <span className="block text-4xl sm:text-5xl font-black font-['Space_Grotesk'] text-[#E53935] drop-shadow-md">
                  100%
                </span>
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-1 block">
                  Official Specs
                </span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-black font-['Space_Grotesk'] text-white drop-shadow-md">
                  PDF
                </span>
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-1 block">
                  Instant Download
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Red Bouncing Scroll Down Chevrons Arrow (Positioned right above WhatsApp Button) */}
        <div
          className="scroll-indicator-chevrons cursor-pointer text-[#E53935] hover:text-[#FF5252] transition-colors drop-shadow-xl"
          style={{ position: 'absolute', bottom: '70px', right: '48px', zIndex: 30 }}
          onClick={scrollToContent}
          aria-label="Scroll to Brochures Section"
        >
          <svg className="scroll-chevron chevron-1" width="24" height="13" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8 8L15 1" stroke="#E53935" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="scroll-chevron chevron-2" width="24" height="13" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8 8L15 1" stroke="#E53935" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="scroll-chevron chevron-3" width="24" height="13" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8 8L15 1" stroke="#E53935" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      </section>

      {/* =========================================================================
          2. FILTER & SEARCH BAR STRIP
          ========================================================================= */}
      <section id="brochures-content-section" className="max-w-[1440px] mx-auto px-6 md:px-12 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200/90 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#E53935] text-white shadow-md shadow-red-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              placeholder="Search brochures by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#E53935] focus:bg-white focus:ring-4 focus:ring-[#E53935]/10 rounded-xl px-3.5 py-2.5 pl-9 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 outline-none transition-all"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. BROCHURES CATALOGUE GRID WITH HOVER SHIMMER & ELEVATION ANIMATIONS
          ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-14">
        
        {filteredBrochures.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700">No Brochures Found</h3>
            <p className="text-sm text-slate-500 mt-1">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-5 py-2.5 bg-[#E53935] text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredBrochures.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#E53935]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                
                {/* Cover Image Area */}
                <div className="relative w-full h-52 bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={item.coverImg}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20">
                    {item.tag}
                  </div>

                  {/* Format & Size Badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white text-[11px] font-bold">
                    <span className="flex items-center gap-1 bg-red-600 px-2 py-0.5 rounded text-[10px]">
                      {item.format}
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px]">
                      {item.fileSize} • {item.pages}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] font-['Space_Grotesk'] group-hover:text-[#E53935] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                    {/* View Online Button */}
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      <span>View PDF</span>
                    </a>

                    {/* Download Button with Left-to-Right Shimmer Sweep Effect */}
                    <a
                      href={item.pdfUrl}
                      download
                      className="relative overflow-hidden group/btn py-2.5 px-3 rounded-xl bg-[#E53935] hover:bg-[#C62828] text-white text-center text-xs font-bold transition-all shadow-md shadow-red-500/20 hover:shadow-red-500/35 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {/* Left-to-Right Shimmer Light Sweep Layer */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      <span className="relative z-10">Download</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}

      </section>

      {/* =========================================================================
          4. NEED CUSTOM TECHNICAL ASSISTANCE BANNER
          ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-16">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E53935]">
              Need Custom Structural Calculations?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-['Space_Grotesk']">
              Looking for customized steel grade data or project mill test certificates?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
              Our technical engineering team provides custom load calculation sheets, material test certificates (MTC), and project specifications upon request.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-sm rounded-xl shadow-lg shadow-red-600/30 hover:scale-105 transition-all duration-300 whitespace-nowrap shrink-0"
          >
            Contact Engineering Team
          </Link>

        </div>
      </section>

    </main>
  );
}
