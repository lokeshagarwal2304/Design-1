import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="relative w-full bg-[#FAFAF8] py-16 md:py-24 px-6 md:px-[80px] font-['Manrope'] overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        
        {/* Featured Project Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] bg-[#FAF8F5] border border-slate-200/80 shadow-sm p-6 sm:p-10 md:p-12 overflow-hidden"
        >
          {/* Subtle Monochrome Architectural Sketch Accent on Right */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
            <svg
              className="w-full h-full text-slate-700 stroke-current fill-none"
              viewBox="0 0 400 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50,250 L350,250 M80,250 L80,100 L300,100 L300,250 M120,100 L120,60 L260,60 L260,100 M100,140 H280 M100,180 H280 M100,220 H280 M140,100 V250 M200,100 V250 M260,100 V250" strokeWidth="1.2" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Wide Image with Tape Accent */}
            <div className="lg:col-span-6 relative">
              {/* Tape Accent */}
              <div className="absolute -top-3 -left-3 z-20 w-16 h-6 bg-[#EBE5D9]/90 border border-slate-300/60 rotate-[-6deg] shadow-sm pointer-events-none" />

              <div className="relative w-full h-[300px] sm:h-[360px] md:h-[400px] rounded-[24px] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm">
                <Image
                  src="/csr/img-2.jpeg"
                  alt="Featured Project - Residential School Building"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Editorial Details */}
            <div className="lg:col-span-6 space-y-4">
              {/* Handwritten Red Eyebrow */}
              <div 
                className="text-[#D93025] text-[24px] tracking-wide flex items-center gap-2 relative inline-flex"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {/* Radiating lines doodle (Left) */}
                <svg className="absolute -left-4 -top-1 w-5 h-5 text-[#D93025]" viewBox="0 0 24 24" fill="none">
                  <path d="M 12 10 L 8 4 M 14 12 L 20 6 M 12 14 L 16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Featured Project</span>
                {/* Radiating lines doodle (Right) */}
                <svg className="absolute -right-4 -top-1 w-5 h-5 text-[#D93025]" viewBox="0 0 24 24" fill="none">
                  <path d="M 12 10 L 16 4 M 10 12 L 4 6 M 12 14 L 8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-['Space_Grotesk'] tracking-tight">
                Residential School Building
              </h2>

              <p className="text-[#D93025] text-xs font-bold uppercase tracking-[0.2em]">
                MAHBUBNAGAR, TELANGANA
              </p>

              <p className="text-[#555555] text-base md:text-lg font-normal leading-relaxed max-w-md">
                A safe and inspiring learning space for a brighter future.
              </p>

              <div className="pt-2">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 text-[#D93025] hover:opacity-80 transition-opacity text-[22px] group"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  <span>View Full Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
