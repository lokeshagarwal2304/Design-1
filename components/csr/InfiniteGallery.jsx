import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ROW_1_IMAGES = [
  "/csr/img-2.jpeg",
  "/csr/img-3.jpeg",
  "/csr/img-4.jpeg",
  "/csr/img-5.jpeg",
  "/csr/img-6.jpeg",
  "/csr/img-8.jpeg",
  "/csr/img-9.jpeg",
  "/csr/img-10.jpeg",
];

const ROW_2_IMAGES = [
  "/csr/img-11.jpeg",
  "/csr/img-12.jpeg",
  "/csr/img-13.jpeg",
  "/csr/img-14.jpeg",
  "/csr/img-15.jpeg",
  "/csr/img-16.jpeg",
  "/csr/img-17.jpeg",
  "/csr/img-18.jpeg",
];

export default function InfiniteGallery() {
  return (
    <section className="relative w-full bg-[#FAF9F5] pt-4 pb-16 md:pt-6 md:pb-20 font-['Manrope'] overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 md:px-[80px] mb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-1"
        >
          <span className="text-[#D9342B] text-xs font-extrabold uppercase tracking-[0.25em] bg-[#D9342B]/10 border border-[#D9342B]/30 px-4 py-1.5 rounded-full inline-block shadow-2xs">
            MOMENTS THAT MATTER
          </span>
        </motion.div>
      </div>

      {/* Infinite Marquee Containers */}
      <div className="space-y-6 overflow-hidden">
        
        {/* Top Marquee Row (Moves Left -> Right) */}
        <div className="relative w-full overflow-hidden">
          <div className="csr-marquee-track-normal gap-6">
            {/* Repeat list twice for continuous seamless loop */}
            {[...ROW_1_IMAGES, ...ROW_1_IMAGES].map((src, idx) => (
              <div
                key={`row1-${idx}`}
                className="relative w-[280px] sm:w-[320px] h-[190px] sm:h-[220px] rounded-[20px] overflow-hidden flex-shrink-0 bg-white border border-slate-200/80 group cursor-pointer shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Mutyam Steel CSR Moment ${idx + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee Row (Moves Right -> Left) */}
        <div className="relative w-full overflow-hidden">
          <div className="csr-marquee-track-reverse gap-6">
            {/* Repeat list twice for continuous seamless loop */}
            {[...ROW_2_IMAGES, ...ROW_2_IMAGES].map((src, idx) => (
              <div
                key={`row2-${idx}`}
                className="relative w-[280px] sm:w-[320px] h-[190px] sm:h-[220px] rounded-[20px] overflow-hidden flex-shrink-0 bg-white border border-slate-200/80 group cursor-pointer shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Mutyam Steel CSR Moment ${idx + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
