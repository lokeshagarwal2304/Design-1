"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function InsideWarehouseGallery() {
  const images = [
    { src: "/Product-rect-3.png", alt: "Warehouse Interior Racks", label: "Automated Pipe Racks" },
    { src: "/rebar_hero_bg.png", alt: "Steel Rebar Stockyard", label: "Rebar & Coil Yard" },
    { src: "/Solarsheds.png", alt: "Industrial Loading Bay", label: "Overhead Crane Bay" },
    { src: "/banner-3.png", alt: "Heavy Structural Storage Yard", label: "Structural Steel Yard" },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="w-full bg-[#FFFFFF] pt-6 pb-12 md:pt-8 md:pb-16 border-t border-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-extrabold tracking-widest uppercase text-[#F97316] mb-1 block">
              OUR WAREHOUSE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2C6B] tracking-tight">
              Inside Our Warehousing Facilities
            </h2>
          </motion.div>
        </div>

        {/* 4 Large Rounded Images Grid (2 cols on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`h-[160px] sm:h-[220px] md:h-[240px] rounded-[16px] sm:rounded-[18px] overflow-hidden bg-slate-100 border transition-all duration-500 group relative cursor-pointer ${
                activeIdx === idx
                  ? "border-[#F97316] shadow-md ring-2 ring-[#F97316]/20 scale-[1.02]"
                  : "border-[#ECECEC] shadow-2xs hover:border-[#F97316]/50 hover:shadow-md"
              }`}
              onClick={() => setActiveIdx(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute bottom-2.5 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 text-white">
                <span className="text-[11px] sm:text-xs font-bold tracking-wide block leading-tight transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
