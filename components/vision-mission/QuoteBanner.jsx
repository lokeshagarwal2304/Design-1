import React from "react";
import Image from "next/image";
import { Quote, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteBanner() {
  return (
    <section className="relative z-30 w-full bg-slate-50 pt-4 pb-12 md:pt-6 md:pb-16 px-4 sm:px-6 md:px-[80px] font-['Manrope'] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden p-6 sm:p-10 md:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-200 group min-h-[260px]"
        >
          {/* Full CTA Card Background Image (Natural Brightness - No Blue Overlay) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/vision-mission/steps-img.png"
              alt="Mutyam Steel Architectural Background"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[1.12] contrast-[1.05]"
            />
            {/* Subtle Gradient Overlay on Left Only for Crisp White Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent/30 z-10" />
          </div>

          {/* Left Text & Quote Content */}
          <div className="relative z-20 space-y-3 max-w-2xl text-center lg:text-left text-white">
            <div className="text-[#E53935] inline-block">
              <Quote className="w-10 h-10 stroke-1 fill-[#E53935]/20" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight leading-tight">
              We don&apos;t just manufacture steel,<br />
              <span className="text-[#E53935]">we build confidence.</span>
            </h2>

            <p className="text-slate-200 text-xs md:text-sm font-bold font-['Space_Grotesk'] tracking-widest uppercase">
              — MUTYAM STEEL
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="/products"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#E53935] text-white font-bold text-sm hover:bg-[#c62828] transition-all duration-300 shadow-lg hover:shadow-red-600/40 flex items-center justify-center gap-2 group/btn"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>

            <a
              href="/yst210-brouchure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-white/15 backdrop-blur-md text-white font-bold text-sm border border-white/30 hover:bg-white hover:text-[#081B3A] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Spec Sheet</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
