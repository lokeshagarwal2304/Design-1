"use client";

import React from "react";
import { motion } from "framer-motion";
import "./page.css";
import PriceCatalogue from "@/components/pricelist/PriceCatalogue";

export default function PriceListPage() {
  const scrollToCatalog = () => {
    const catalogElement = document.getElementById("price-catalog-section");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-['Manrope'] overflow-x-hidden">
      {/* =========================================================================
          1. HERO SECTION (Original Purple Banner Background, No Overlay, Watery Gradient Text, Red Chevrons)
          ========================================================================= */}
      <section className="pricelist-hero-section min-h-[70vh] flex flex-col justify-center items-center relative">
        <div className="pricelist-hero-bg-grid" />

        <div className="pricelist-hero-container max-w-3xl flex flex-col items-center text-center gap-2.5 relative z-10">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-md shadow-xs mb-0.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white">
              Certified Rate Logs
            </span>
          </motion.div>

          {/* Price List Heading with Light Watery Wave Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[76px] font-black font-['Space_Grotesk'] tracking-tight leading-[1.05] light-watery-gradient-text drop-shadow-md my-1"
          >
            Price List
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-100 text-base md:text-[18px] font-medium leading-relaxed max-w-xl"
          >
            Access the latest price logs, catalogs, and section rates for Mutyam Steel structural products.
          </motion.p>
        </div>

        {/* Red Bouncing Scroll Down Chevrons */}
        <div
          className="scroll-indicator-chevrons cursor-pointer text-[#E53935] hover:text-[#FF5252] transition-colors drop-shadow-lg"
          style={{ position: "absolute", bottom: "30px", right: "48px", zIndex: 30 }}
          onClick={scrollToCatalog}
        >
          <div className="flex flex-col items-center -space-y-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M7 13l5 5 5-5" />
            </svg>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce delay-150"
            >
              <path d="M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PRICE CATALOGUE SECTION (Gap-Free Seamless Layout)
          ========================================================================= */}
      <section id="price-catalog-section" className="relative w-full bg-[#f8f9fa]">
        <PriceCatalogue />
      </section>
    </div>
  );
}
