import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen h-screen bg-[#FCFAF6] overflow-hidden flex flex-col justify-center font-['Manrope']">
      {/* 100% Full-Width Background Image with Subtle Scale Animation */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/directorship/banner image.png"
          alt="Mutyam Steel Executive Directorship Skyline Banner"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft Ambient Left Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF6] via-[#FCFAF6]/85 to-transparent z-10" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-[80px] pt-24 md:pt-28 pb-12">
        
        {/* Pill Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <span className="text-[#D9342B] text-xs font-bold uppercase tracking-[0.25em] bg-[#D9342B]/10 border border-[#D9342B]/30 px-4 py-1.5 rounded-full inline-block shadow-2xs hover:scale-105 transition-transform duration-300">
            DIRECTORSHIP
          </span>
        </motion.div>

        {/* Large Editorial Heading & Paragraph */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black text-[#1F1F1F] font-['Space_Grotesk'] leading-[1.06] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="animate-watery-gradient block font-black"
            >
              Leading with vision,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="block mt-1"
            >
              building with purpose.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-slate-600 text-base md:text-lg font-medium leading-relaxed"
          >
            Executive leadership focused on innovation, ethics and long-term sustainable growth.
          </motion.p>
        </motion.div>

      </div>

      {/* Floating 3 Animated Down-Arrows in Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="hidden md:flex flex-col items-center justify-center absolute bottom-24 right-12 z-30 cursor-pointer group"
        onClick={() => {
          const profileCard = document.getElementById("executive-profile");
          if (profileCard) {
            profileCard.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 600, behavior: "smooth" });
          }
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
