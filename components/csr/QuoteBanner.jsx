import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteBanner() {
  return (
    <section className="relative z-30 w-full bg-[#FAF9F5] pt-2 pb-10 md:pt-4 md:pb-14 px-4 sm:px-6 md:px-[80px] font-['Manrope'] overflow-hidden">
      <div className="max-w-[1380px] mx-auto w-full">
        
        {/* Compact & Neat Quote Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[260px] sm:h-[300px] md:h-[320px] rounded-[24px] md:rounded-[28px] overflow-hidden shadow-sm flex flex-col justify-center px-6 sm:px-10 md:px-14 border border-slate-200/60 group"
        >
          {/* Background Image /csr/cta-img.png */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/csr/cta-img.png"
              alt="Mutyam Steel CSR Community Children Banner"
              fill
              priority
              className="object-cover object-center brightness-[1.05] group-hover:scale-105 transition-transform duration-700"
            />
            {/* Left Subtle Gradient Overlay for Crisp Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent z-10" />
          </div>

          {/* Left Text & Quote Content */}
          <div className="relative z-20 space-y-2.5 max-w-xl text-white">
            <div className="text-[#D63A2F]">
              <Quote className="w-9 h-9 md:w-10 md:h-10 stroke-1 fill-[#D63A2F]/20" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Space_Grotesk'] leading-tight tracking-tight">
              When communities grow,<br />
              <span className="text-[#D63A2F]">business grows with them.</span>
            </h2>

            <div className="w-10 h-1 bg-[#D63A2F] rounded-full" />

            <p className="text-slate-300 text-[11px] md:text-xs font-bold font-['Space_Grotesk'] tracking-widest uppercase pt-0.5">
              — MUTYAM STEEL
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
