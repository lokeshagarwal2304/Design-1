import React from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative z-30 w-full bg-slate-50 pt-2 pb-12 md:pt-4 md:pb-16 px-6 md:px-[80px] font-['Space_Grotesk']">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[24px] overflow-hidden p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-700 group min-h-[200px]"
        >
          {/* Full Card Background Image (replaces solid box color) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Mutyam-steel-Profile/cta-button.png"
              alt="Mutyam Steel CTA Background"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Translucent Dark Gradient Overlay to ensure crisp white text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#081B3A]/90 via-[#081B3A]/75 to-black/85" />
          </div>

          {/* Left Text Content */}
          <div className="relative z-10 space-y-2 max-w-2xl text-center lg:text-left text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight leading-tight">
              Building Stronger Connections for a Better Tomorrow
            </h2>
            <p className="text-slate-200 text-sm md:text-base font-medium opacity-95">
              Partner with Mutyam Steel for trusted quality, reliable supply and sustainable growth across South India.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="relative z-10 flex flex-wrap items-center gap-4 shrink-0 justify-center">
            <a
              href="#footer"
              className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#dc2626] text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#EF4444]/35 hover:scale-105 text-sm"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-105 text-sm"
            >
              <span>Download Brochure</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
