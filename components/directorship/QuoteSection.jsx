import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="relative z-30 w-full bg-[#FCFAF6] pt-4 pb-12 md:pt-6 md:pb-16 px-4 sm:px-6 md:px-[80px] font-['Manrope'] overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center rounded-[24px] md:rounded-[28px] overflow-hidden bg-white border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] group"
        >
          
          {/* Left Column: Quote Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 p-6 sm:p-8 md:p-10 space-y-3"
          >
            <div className="text-[#D92D20] transform group-hover:scale-110 transition-transform duration-500 origin-left">
              <Quote className="w-10 h-10 md:w-12 md:h-12 stroke-1 fill-[#D92D20]/15" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] font-['Space_Grotesk'] leading-tight tracking-tight">
              Great leadership<br />
              <span className="text-[#D92D20]">creates more leaders.</span>
            </h2>

            <div className="w-12 h-1 bg-[#D92D20] rounded-full mt-2 transform group-hover:w-20 transition-all duration-500" />

            <p className="text-xs md:text-sm font-bold text-slate-500 font-['Space_Grotesk'] tracking-wider uppercase pt-1">
              — Phanindra Reddy
            </p>
          </motion.div>

          {/* Right Column: Architectural Graphic Image with Smooth Zoom Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full h-[220px] sm:h-[250px] md:h-[280px] overflow-hidden"
          >
            <Image
              src="/vision-mission/steps-img.png"
              alt="Mutyam Steel Leadership Architectural Graphic"
              fill
              className="object-cover object-center rounded-tl-[24px] md:rounded-tl-[36px] group-hover:scale-108 transition-transform duration-700"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
