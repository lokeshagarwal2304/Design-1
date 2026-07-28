import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen h-screen bg-[#FAF9F5] pt-24 md:pt-28 pb-16 px-6 md:px-[80px] font-['Manrope'] overflow-hidden flex flex-col justify-center">
      <div className="max-w-[1380px] mx-auto w-full relative z-20">
        
        {/* Split Layout: Left 45% Content | Right 55% Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (45%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Rounded Pill Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-2"
            >
              <span className="text-[#D9342B] text-xs font-extrabold uppercase tracking-[0.25em] bg-[#D9342B]/10 border border-[#D9342B]/30 px-4 py-1.5 rounded-full inline-block shadow-2xs">
                CSR
              </span>
            </motion.div>

            {/* Huge Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-[#111111] font-['Space_Grotesk'] leading-[1.08] tracking-tight">
              Creating opportunities.<br />
              Building stronger <span className="animate-watery-gradient font-black">communities.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-[#555555] text-base md:text-lg font-medium leading-relaxed max-w-md">
              Every project we support is a step towards a better tomorrow.
            </p>
          </motion.div>

          {/* Right Column (55%): Emotional Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] rounded-[32px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-[#ECECEC] bg-white group">
              <Image
                src="/csr/img-1.jpeg"
                alt="Mutyam Steel CSR Education & Community Empowerment"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>

      </div>

      {/* Floating 3 Animated Down-Arrows in Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="hidden md:flex flex-col items-center justify-center absolute bottom-24 right-12 z-30 cursor-pointer group"
        onClick={() => {
          window.scrollTo({ top: 700, behavior: "smooth" });
        }}
      >
        <div className="relative flex flex-col items-center group-hover:scale-115 transition-transform duration-300">
          <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#D9342B] animate-bounce filter drop-shadow-lg" />
          <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-slate-800 animate-bounce [animation-delay:150ms] -mt-5 filter drop-shadow-lg" />
          <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#38BDF8] animate-bounce [animation-delay:300ms] -mt-5 filter drop-shadow-lg" />
        </div>
      </motion.div>

    </section>
  );
}
