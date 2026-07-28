import React from "react";
import Image from "next/image";
import { ShieldCheck, Rocket, Users, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[720px] md:min-h-screen bg-[#081B3A] overflow-hidden flex flex-col justify-between">
      {/* Background Image with Actual Natural Colors */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Leadership/leader-banner.png"
          alt="Mutyam Steel Leadership Banner"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle Dark Gradient overlay on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-[80px] pt-32 md:pt-40 pb-12 md:pb-16 flex-1 flex flex-col justify-between">
        
        {/* Small Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="inline-block">
            <span className="text-[#EF4444] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-[#EF4444]/15 border border-[#EF4444]/40 px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
              OUR LEADERSHIP
            </span>
          </div>
        </motion.div>

        {/* Main Heading & Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl my-5 space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white leading-[1.18] tracking-tight font-['Space_Grotesk']">
            Leadership <br className="hidden sm:inline" />
            That <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] animate-watery-gradient font-black tracking-tight drop-shadow-md">Builds</span> Tomorrow
          </h1>

          <p className="text-base md:text-lg text-slate-200 font-['Manrope'] font-medium leading-relaxed max-w-2xl">
            Visionary leadership that drives innovation, nurtures talent and creates lasting impact.
          </p>
        </motion.div>

        {/* Bottom Three Icon Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 pt-6 border-t border-white/15 max-w-4xl"
        >
          {/* Card 1 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#EF4444]/60 hover:bg-white/15 transition-all duration-300 shadow-xl group cursor-pointer">
            <div className="p-3 rounded-xl bg-[#EF4444]/25 text-[#EF4444] shrink-0 group-hover:rotate-6 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base font-['Space_Grotesk'] group-hover:text-[#EF4444] transition-colors">
                Strong Values
              </h4>
              <p className="text-slate-300 text-xs md:text-sm font-['Manrope'] mt-0.5 leading-snug">
                Integrity and ethics at the core of everything we do.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#EF4444]/60 hover:bg-white/15 transition-all duration-300 shadow-xl group cursor-pointer">
            <div className="p-3 rounded-xl bg-[#EF4444]/25 text-[#EF4444] shrink-0 group-hover:rotate-6 transition-transform">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base font-['Space_Grotesk'] group-hover:text-[#EF4444] transition-colors">
                Future Focused
              </h4>
              <p className="text-slate-300 text-xs md:text-sm font-['Manrope'] mt-0.5 leading-snug">
                Building a sustainable and innovative future together.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#EF4444]/60 hover:bg-white/15 transition-all duration-300 shadow-xl group cursor-pointer">
            <div className="p-3 rounded-xl bg-[#EF4444]/25 text-[#EF4444] shrink-0 group-hover:rotate-6 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base font-['Space_Grotesk'] group-hover:text-[#EF4444] transition-colors">
                People First
              </h4>
              <p className="text-slate-300 text-xs md:text-sm font-['Manrope'] mt-0.5 leading-snug">
                Empowering our people to create lasting impact.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Floating 3 Animated Down-Arrows in Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="hidden md:flex flex-col items-center justify-center absolute bottom-12 right-12 z-30 cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={() => {
          const leaderSec = document.getElementById("leader-profile");
          if (leaderSec) leaderSec.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#EF4444] animate-bounce filter drop-shadow-lg" />
        <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-white animate-bounce [animation-delay:150ms] -mt-5 filter drop-shadow-lg" />
        <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#38BDF8] animate-bounce [animation-delay:300ms] -mt-5 filter drop-shadow-lg" />
      </motion.div>
    </section>
  );
}
