import React, { useState, useEffect } from "react";
import { Shield, Users, Award, Target, ShieldCheck, Leaf, TrendingUp, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const CORE_VALUES = [
  {
    name: "INTEGRITY",
    desc: "We do what's right, always.",
    icon: Shield,
  },
  {
    name: "TEAMWORK",
    desc: "Together we achieve more.",
    icon: Users,
  },
  {
    name: "ACCOUNTABILITY",
    desc: "We own our actions and results.",
    icon: Award,
  },
  {
    name: "QUALITY FIRST",
    desc: "We never compromise on quality.",
    icon: Target,
  },
  {
    name: "SAFETY",
    desc: "We protect our people & environment.",
    icon: ShieldCheck,
  },
  {
    name: "SUSTAINABILITY",
    desc: "Building a better future responsibly.",
    icon: Leaf,
  },
  {
    name: "CONTINUOUS IMPROVEMENT",
    desc: "We learn, evolve & improve every day.",
    icon: TrendingUp,
  },
];

export default function CoreValuesJourney() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance active circle every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CORE_VALUES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-30 w-full bg-[#FAFCFF] pt-10 pb-14 md:pt-14 md:pb-18 px-4 sm:px-6 md:px-[80px] font-['Manrope'] overflow-hidden border-y border-slate-200/60">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2.5 mb-10 md:mb-14"
        >
          <span className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-red-50 border border-red-100 px-4 py-1.5 rounded-full inline-block shadow-2xs">
            WHAT WE STAND FOR
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-black text-[#0F172A] font-['Space_Grotesk'] tracking-tight">
            The Core Values That Define Us
          </h2>
          <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mt-2" />
        </motion.div>

        {/* Ambient Process Flow Container */}
        <div className="relative bg-white border border-slate-200/80 rounded-[28px] p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">

          {/* Desktop/Laptop Process Flow with Center-Aligned Larger Circles & Animated Arrows */}
          <div className="hidden lg:flex items-start justify-between gap-1">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              const isActive = activeIndex === idx;

              return (
                <React.Fragment key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={() => setActiveIndex(idx)}
                    className="flex-1 flex flex-col items-center text-center cursor-pointer group"
                  >
                    {/* Fixed Height (112px / h-28) Circle Container for 100% Horizontal Center Line Lock */}
                    <div className="h-28 flex items-center justify-center relative">
                      <div
                        className={`rounded-full flex items-center justify-center transition-all duration-500 relative z-10 ${
                          isActive
                            ? "w-22 h-22 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#E53935] via-[#EF4444] to-[#FF5252] text-white shadow-[0_12px_35px_rgba(229,57,53,0.45)] ring-4 ring-[#E53935]/20 scale-110"
                            : "w-18 h-18 sm:w-20 sm:h-20 bg-slate-50/80 border-2 border-slate-200/90 text-[#0F172A] shadow-sm group-hover:border-[#E53935] group-hover:bg-[#E53935] group-hover:text-white group-hover:scale-105"
                        }`}
                      >
                        <Icon className={isActive ? "w-9 h-9 sm:w-10 sm:h-10" : "w-7 h-7 sm:w-8 sm:h-8"} />
                      </div>
                    </div>

                    {/* Value Name & Description */}
                    <div className="space-y-1.5 mt-2">
                      <h3
                        className={`text-xs font-extrabold font-['Space_Grotesk'] tracking-wider uppercase transition-colors leading-tight max-w-[130px] mx-auto ${
                          isActive ? "text-[#E53935] font-black text-sm drop-shadow-xs" : "text-[#0F172A] group-hover:text-[#E53935]"
                        }`}
                      >
                        {val.name}
                      </h3>

                      {isActive && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2.5 h-2.5 bg-[#E53935] rounded-full mx-auto shadow-xs" 
                        />
                      )}

                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-snug max-w-[140px] mx-auto">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Animated > > > Arrows Connector (Always Moving Continuously) */}
                  {idx < CORE_VALUES.length - 1 && (
                    <motion.div 
                      className="h-28 flex items-center justify-center text-[#E53935] shrink-0 px-0.5"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronRight className="w-4.5 h-4.5 text-[#E53935]/50 animate-pulse" />
                      <ChevronRight className="w-5.5 h-5.5 -ml-2.5 text-[#E53935]/80 animate-pulse [animation-delay:150ms]" />
                      <ChevronRight className="w-6.5 h-6.5 -ml-2.5 text-[#E53935] animate-pulse [animation-delay:300ms]" />
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Ultra-Presentable Mobile & Tablet Grid View (< lg) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 lg:hidden">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              const isActive = activeIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col items-center text-center space-y-2.5 p-4 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-br from-red-50 via-orange-50/40 to-white border-2 border-[#E53935] shadow-md scale-[1.02]"
                      : "bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300"
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-2 right-2 text-[9px] font-extrabold tracking-widest text-[#E53935] uppercase bg-red-100/80 px-2 py-0.5 rounded-full border border-red-200">
                      ACTIVE
                    </span>
                  )}

                  <div
                    className={`rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "w-16 h-16 bg-gradient-to-tr from-[#E53935] to-[#FF5252] text-white shadow-md shadow-red-500/30"
                        : "w-14 h-14 bg-slate-100 text-[#0F172A]"
                    }`}
                  >
                    <Icon className={isActive ? "w-7 h-7" : "w-6 h-6"} />
                  </div>

                  <h3
                    className={`text-xs font-extrabold font-['Space_Grotesk'] tracking-wider uppercase leading-tight ${
                      isActive ? "text-[#E53935] font-black" : "text-[#0F172A]"
                    }`}
                  >
                    {val.name}
                  </h3>

                  <p className="text-[11px] text-slate-500 font-medium leading-snug">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
