import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 w-full min-h-[720px] md:h-[720px] bg-slate-950 overflow-hidden flex flex-col justify-center font-['Manrope']">
      {/* Full-Width Background Image with High Brightness & Contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vision-mission/banner-vision.png"
          alt="Mutyam Steel Vision Mission Natural Banner"
          fill
          priority
          className="object-cover object-center brightness-[1.15] contrast-[1.05]"
        />
        {/* Soft Dark Gradient on Left for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-[80px] pt-32 md:pt-40 pb-16">
        
        {/* Purpose Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 mb-4"
        >
          <div className="inline-block">
            <span className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-[#E53935]/15 border border-[#E53935]/40 px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
              OUR PURPOSE
            </span>
          </div>
        </motion.div>

        {/* Main Heading with Slow Moving Watery Gradient */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-black leading-[1.05] tracking-tight font-['Space_Grotesk'] flex flex-wrap items-center gap-x-4 sm:gap-x-6">
            <span className="animate-watery-gradient">
              Vision &amp; Mission
            </span>
            <span className="animate-watery-gradient">
              Values
            </span>
          </h1>

          <div className="space-y-3 pt-2">
            <p className="text-xl md:text-2xl text-white font-bold font-['Space_Grotesk'] leading-snug drop-shadow-md">
              Guided by purpose.<br />
              Committed to engineering excellence and long-term trust.
            </p>
            <div className="w-20 h-1 bg-[#E53935] rounded-full shadow-md" />
          </div>
        </motion.div>

      </div>

      {/* Bottom Right 3 Animated Down Arrows Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-8 right-8 md:right-16 z-20 flex flex-col items-center cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 720, behavior: "smooth" });
        }}
      >
        <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#E53935] animate-bounce filter drop-shadow-lg" />
        <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-white animate-bounce [animation-delay:150ms] -mt-5 filter drop-shadow-lg" />
        <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#E53935] animate-bounce [animation-delay:300ms] -mt-5 filter drop-shadow-lg" />
      </motion.div>

    </section>
  );
}
