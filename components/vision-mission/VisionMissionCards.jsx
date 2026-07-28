import React from "react";
import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMissionCards() {
  return (
    <section className="relative z-30 w-full bg-[#F8FAFC] pt-10 pb-8 md:pt-12 md:pb-12 px-6 md:px-[80px] font-['Manrope'] border-y border-slate-200/80">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 01: OUR VISION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 md:p-10 rounded-[28px] bg-white border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:border-[#E53935]/50 hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
          >
            {/* Top Row: Icon Box */}
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 rounded-2xl bg-red-50 text-[#E53935] border border-red-100 group-hover:scale-110 group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300">
                <Eye className="w-8 h-8" />
              </div>
            </div>

            <span className="text-[#E53935] text-xs font-bold uppercase tracking-[0.25em] block mb-2">
              OUR VISION
            </span>

            <p className="text-slate-700 text-lg md:text-xl font-bold font-['Space_Grotesk'] leading-relaxed max-w-md">
              To be a benchmark in the steel industry through innovation, quality and sustainable growth.
            </p>

            <div className="w-12 h-1 bg-[#E53935] rounded-full mt-6 group-hover:w-20 transition-all duration-300" />
          </motion.div>

          {/* Card 02: OUR MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 md:p-10 rounded-[28px] bg-white border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:border-[#E53935]/50 hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
          >
            {/* Top Row: Icon Box */}
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 rounded-2xl bg-red-50 text-[#E53935] border border-red-100 group-hover:scale-110 group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300">
                <Target className="w-8 h-8" />
              </div>
            </div>

            <span className="text-[#E53935] text-xs font-bold uppercase tracking-[0.25em] block mb-2">
              OUR MISSION
            </span>

            <p className="text-slate-700 text-lg md:text-xl font-bold font-['Space_Grotesk'] leading-relaxed max-w-md">
              To deliver premium steel solutions with commitment, integrity and value for a stronger tomorrow.
            </p>

            <div className="w-12 h-1 bg-[#E53935] rounded-full mt-6 group-hover:w-20 transition-all duration-300" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
