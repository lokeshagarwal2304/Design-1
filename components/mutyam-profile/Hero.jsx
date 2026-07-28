import React from "react";
import Image from "next/image";
import { ShieldCheck, Leaf, Users, ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="sticky top-0 z-10 w-full min-h-[660px] md:min-h-screen bg-[#081B3A] overflow-hidden flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Mutyam-steel-Profile/banner-img.png"
          alt="Mutyam Steel Construction Banner"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Gradient Overlay on Left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081B3A]/95 via-[#081B3A]/85 to-transparent/40 md:to-transparent z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-[80px] pt-32 md:pt-40 pb-12 md:pb-16 flex-1 flex flex-col justify-between">
        
        {/* Top Company Profile Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 mt-1 md:mt-2"
        >
          <div className="inline-block">
            <span className="text-[#EF4444] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-[#EF4444]/15 border border-[#EF4444]/40 px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
              COMPANY PROFILE
            </span>
          </div>
        </motion.div>

        {/* Main Heading: Single line text + Watery Gradient "Trusted Steel Solutions" */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl my-4 space-y-4"
        >
          <h1 className="font-extrabold text-white leading-[1.15] tracking-tight font-['Space_Grotesk'] space-y-1">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-white font-bold whitespace-nowrap">
              Building India’s Future with
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-[60px] animate-watery-gradient font-black tracking-tight drop-shadow-lg">
              Trusted Steel Solutions
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-200 font-['Space_Grotesk'] font-medium leading-relaxed max-w-2xl">
            Committed to quality, driven by values, strengthening every structure that builds tomorrow.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#founder-quote"
              className="group inline-flex items-center gap-3 bg-[#EF4444] hover:bg-[#dc2626] text-white px-7 py-3.5 rounded-full font-bold transition-all duration-300 shadow-xl shadow-[#EF4444]/35 hover:scale-105 text-sm md:text-base"
            >
              <span>Explore Our Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#watch-story"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-6 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 text-sm md:text-base"
            >
              <PlayCircle className="w-5 h-5 text-[#EF4444]" />
              <span>Watch Our Story</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom 3 Value Items Bar with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 pt-6 border-t border-white/15 max-w-4xl mb-4"
        >
          {/* Item 1 */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#EF4444]/60 hover:bg-white/15 transition-all duration-300 shadow-xl group cursor-pointer">
            <div className="p-2.5 rounded-xl bg-[#EF4444]/25 text-[#EF4444] shrink-0 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm md:text-base font-['Space_Grotesk'] group-hover:text-[#EF4444] transition-colors">
                Trusted Quality
              </h4>
              <p className="text-slate-300 text-xs md:text-sm font-['Space_Grotesk'] mt-0.5">
                Premium steel you can rely on.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#EF4444]/60 hover:bg-white/15 transition-all duration-300 shadow-xl group cursor-pointer">
            <div className="p-2.5 rounded-xl bg-[#EF4444]/25 text-[#EF4444] shrink-0 group-hover:scale-110 transition-transform">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm md:text-base font-['Space_Grotesk'] group-hover:text-[#EF4444] transition-colors">
                Sustainable Growth
              </h4>
              <p className="text-slate-300 text-xs md:text-sm font-['Space_Grotesk'] mt-0.5">
                Building a better tomorrow with responsible practices.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#EF4444]/60 hover:bg-white/15 transition-all duration-300 shadow-xl group cursor-pointer">
            <div className="p-2.5 rounded-xl bg-[#EF4444]/25 text-[#EF4444] shrink-0 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm md:text-base font-['Space_Grotesk'] group-hover:text-[#EF4444] transition-colors">
                Customer First
              </h4>
              <p className="text-slate-300 text-xs md:text-sm font-['Space_Grotesk'] mt-0.5">
                Delivering value that lasts a lifetime.
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
          const founderSec = document.getElementById("founder-quote");
          if (founderSec) founderSec.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#EF4444] animate-bounce filter drop-shadow-lg" />
        <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-white animate-bounce [animation-delay:150ms] -mt-5 filter drop-shadow-lg" />
        <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#38BDF8] animate-bounce [animation-delay:300ms] -mt-5 filter drop-shadow-lg" />
      </motion.div>
    </section>
  );
}
