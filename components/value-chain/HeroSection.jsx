"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const yPos = scrollY * 0.2;
  const scale = 1 + (scrollY * 0.0001);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] bg-[#FAF8F5] overflow-hidden flex"
    >
      {/* Full Width Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Removed the strong white gradient overlay as requested */}
        <div className="absolute inset-0 z-10 bg-[#FAF8F5]/10 pointer-events-none" />
        
        <motion.div 
          className="relative w-full h-[120%] -top-[10%]"
          style={{ y: yPos, scale: scale }}
        >
          <Image
            src="/About/about banner.png"
            alt="Mutyam Steel Our Value Chain"
            fill
            priority
            className="object-cover object-right md:object-center"
          />
        </motion.div>
      </div>

      {/* Left Content */}
      <div className="relative z-20 w-full lg:w-[50%] h-full flex flex-col justify-center pl-8 md:pl-16 lg:pl-[120px] pr-8 md:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[540px]"
        >
          {/* Pill Style Label */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-[#E7E3DD]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
              <span className="text-[#1F1F1F] text-xs font-bold tracking-[0.15em] uppercase font-['Inter']">
                Our Value Chain
              </span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-6xl lg:text-[76px] leading-[1.1] text-[#1F1F1F] font-medium tracking-tight mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Creating <span className="text-[#E53935]">value</span>
            <br />
            at every stage<span className="text-[#E53935]">.</span>
          </h1>

          {/* Description */}
          <p className="text-[#1F1F1F]/80 text-base md:text-lg font-['Inter'] leading-[1.6] font-normal max-w-[420px]">
            Our value chain represents the complete journey of quality, trust and excellence that goes into every Mutyam Steel product.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
