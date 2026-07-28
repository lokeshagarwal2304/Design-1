"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Section06_CTA() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden flex items-center bg-[#111111]">
      
      {/* Background Image with slow zoom */}
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/projects/residential-1.jpg" // Fallback placeholder
          alt="Stronger Partnerships"
          fill
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Warm sunset lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-[#1F1F1F]/60 to-transparent" />
        <div className="absolute inset-0 bg-[#E53935]/10 mix-blend-overlay" />
      </motion.div>

      <div className="relative z-10 w-full px-6 md:px-16">
        <div className="max-w-[1320px] mx-auto flex flex-col justify-end h-full pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Stronger partnerships.
              <br />
              Stronger <span className="text-[#E53935] relative inline-block">
                tomorrow.
                {/* Red Underline (no Caveat styling, just a straight underline) */}
                <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#E53935]" />
              </span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl font-['Inter'] font-light max-w-lg mb-12">
              Join hands with Mutyam Steel for reliable products, timely delivery, and long-lasting relationships.
            </p>

            <Link href="/#products" className="group">
              <button className="flex items-center gap-3 bg-[#E53935] hover:bg-[#D32F2F] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest font-['Inter'] transition-colors duration-300">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
