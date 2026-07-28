import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[540px] bg-[#081B3A] overflow-hidden flex flex-col justify-center font-['Manrope']">
      {/* Background Industrial Environment Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Our-team/banner-ourteam.png"
          alt="Mutyam Steel Warehouse Team Environment"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle Dark Gradient Overlay on left for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-[80px] pt-32 md:pt-40 pb-16">
        
        {/* Small Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 mb-3"
        >
          <div className="inline-block">
            <span className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-[#E53935]/15 border border-[#E53935]/40 px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
              OUR TEAM
            </span>
          </div>
        </motion.div>

        {/* Main Heading & Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.1] tracking-tight font-['Space_Grotesk']">
            Our <span className="text-[#E53935]">Team</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 font-['Manrope'] font-medium leading-relaxed max-w-xl">
            The people behind every successful project and every trusted partnership.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
