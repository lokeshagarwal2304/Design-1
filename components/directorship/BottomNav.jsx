import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
  return (
    <section className="relative z-30 w-full bg-[#FCFBF8] py-14 px-6 md:px-[80px] font-['Manrope'] border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Previous Leader */}
        <Link
          href="/about/leadership"
          className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#D92D20] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-[#D92D20] group-hover:-translate-x-1 transition-all" />
          <span>Previous Leader</span>
        </Link>

        {/* Center Title */}
        <div className="text-center font-['Space_Grotesk'] text-base md:text-lg font-bold text-[#111827]">
          Meet our <span className="text-[#D92D20]">leadership team</span>
        </div>

        {/* Next Leader */}
        <Link
          href="/about/our-team"
          className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#D92D20] transition-colors group"
        >
          <span>Next Leader</span>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#D92D20] group-hover:translate-x-1 transition-all" />
        </Link>

      </div>
    </section>
  );
}
