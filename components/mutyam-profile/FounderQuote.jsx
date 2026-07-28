import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function FounderQuote() {
  return (
    <section id="founder-quote" className="relative z-30 bg-white rounded-t-[36px] md:rounded-t-[48px] pt-16 pb-8 md:pt-20 md:pb-12 px-6 md:px-[80px] shadow-[0_-35px_70px_rgba(0,0,0,0.35)] border-t border-slate-100 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Quote & Big Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="relative">
              {/* Red Quotation Icon */}
              <div className="text-[#EF4444] opacity-80 mb-1">
                <Quote className="w-10 h-10 md:w-12 md:h-12 stroke-1 fill-[#EF4444]/10" />
              </div>

              <blockquote className="text-lg md:text-xl lg:text-[22px] font-bold text-[#0F172A] leading-snug font-['Space_Grotesk']">
                Mutyam steel products are replica of quality and sustainability with safety. Our company symbolises commitment for values and ethics.
              </blockquote>

              <p className="mt-3 text-sm md:text-base text-[#EF4444] font-semibold font-['Space_Grotesk'] italic">
                We believe &ldquo;strong foundation builds shielded environment&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Middle Column: Enlarged Founder Photo with Scale Reveal Animation */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col items-center text-center space-y-3"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-[360px] lg:w-80 lg:h-[390px] rounded-[24px] overflow-hidden shadow-2xl shadow-slate-300 border-4 border-white bg-gradient-to-b from-red-50 to-slate-100 group">
              <Image
                src="/Mutyam-steel-Profile/Mahendar-reddy.png"
                alt="Mr. Mahendar Reddy - Founder"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Signature removed as requested; direct Name & Designation */}
            <div className="space-y-0.5 pt-1">
              <h3 className="text-xl md:text-2xl font-extrabold text-[#EF4444] font-['Space_Grotesk'] tracking-tight">
                Mahendar Reddy
              </h3>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold font-['Space_Grotesk']">
                Founder & Managing Director
              </p>
            </div>
          </motion.div>

          {/* Right Column: Founder Bio with Metallic Steel Gradient Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-[24px] shadow-sm space-y-4"
          >
            <p className="text-[#475569] text-base md:text-lg leading-relaxed font-['Space_Grotesk']">
              <span className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent tracking-tight font-['Space_Grotesk'] border-b-2 border-slate-300 pb-0.5 inline-block mr-1">
                Mr. Mahendar Reddy
              </span>
              , The founder of Mutyam Steel Industry in 2012 with top quality materials and great experience towards the steel industry, made its 1st footprint all over Hyderabad by following new hi-technology and refined ideas to provide essential materials to build dream structures.
            </p>
            <p className="text-[#475569] text-base md:text-lg leading-relaxed font-['Space_Grotesk']">
              Mutyam Steel Industry has a strong presence across diverse industries such as Defence, Poultry, Agriculture, Ports & Shipping, Food Processing, Medical equipment, manufacturing Rubber & Tyres, and Automobile.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
