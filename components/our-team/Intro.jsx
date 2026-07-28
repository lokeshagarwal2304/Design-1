import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative z-30 w-full bg-white py-20 md:py-24 px-6 md:px-[80px] font-['Manrope'] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-red-50 border border-red-100 px-4 py-1.5 rounded-full inline-block">
              TOGETHER WE BUILD
            </span>

            <div className="relative pl-5 border-l-4 border-[#E53935]">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] font-['Space_Grotesk'] leading-[1.15] tracking-tight">
                United by Purpose.<br />
                Driven by <span className="text-[#E53935]">Excellence</span>.
              </h2>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
              Our team brings together diverse expertise, deep industry knowledge, and a shared commitment to deliver quality, reliability, and long-term value.
            </p>
          </motion.div>

          {/* Right Column: Large Rounded Factory Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-[24px] overflow-hidden shadow-xl border-4 border-slate-100 group">
              <Image
                src="/About-office.png"
                alt="Mutyam Steel Team Working Together"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
