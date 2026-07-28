import React from "react";
import { motion } from "framer-motion";

export default function OurResponsibility() {
  return (
    <section className="relative z-30 w-full bg-[#F5F2EB] py-10 md:py-14 px-4 sm:px-6 md:px-[80px] font-['Manrope'] border-y border-slate-200/80">
      <div className="max-w-[1380px] mx-auto w-full">
        
        {/* Distinct Floating White Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white rounded-[28px] md:rounded-[36px] border border-slate-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.05)] p-6 sm:p-10 md:p-14 relative overflow-hidden"
        >
          {/* Subtle Ambient Red Decorative Glow */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-red-50/60 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Heading & Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 space-y-3"
            >
              <div className="inline-block">
                <span className="text-[#D9342B] text-xs font-extrabold uppercase tracking-[0.25em] bg-[#D9342B]/10 border border-[#D9342B]/30 px-4 py-1.5 rounded-full inline-block shadow-2xs">
                  OUR RESPONSIBILITY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#111111] font-['Space_Grotesk'] leading-[1.12] tracking-tight">
                Giving back is<br />
                part of <span className="animate-watery-gradient font-black">who we are.</span>
              </h2>
            </motion.div>

            {/* Thin Vertical Divider (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center">
              <div className="h-28 w-[1.5px] bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
            </div>

            {/* Right Column: Paragraph Content */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 space-y-4 max-w-xl"
            >
              <p className="text-slate-800 text-base md:text-lg font-semibold leading-relaxed">
                At Mutyam Steel, we believe that our growth is deeply connected to the well-being of the communities around us.
              </p>
              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                Through meaningful initiatives in education, healthcare, environment and rural development, we strive to create long-lasting impact and improve quality of life sustainably.
              </p>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
