import React, { useState } from "react";
import { Eye, Lightbulb, Shield, Leaf, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRINCIPLES = [
  {
    id: "vision",
    name: "Vision",
    icon: Eye,
    title: "Vision",
    desc: "To build a future-ready organization that empowers people, embraces change and creates lasting impact for generations to come.",
  },
  {
    id: "innovation",
    name: "Innovation",
    icon: Lightbulb,
    title: "Innovation",
    desc: "Pioneering smart steel solutions and advanced manufacturing techniques that raise industry benchmarks.",
  },
  {
    id: "ethics",
    name: "Ethics",
    icon: Shield,
    title: "Ethics",
    desc: "Uncompromising integrity, transparency and ethical responsibility in every commercial partnership.",
  },
  {
    id: "sustainability",
    name: "Sustainability",
    icon: Leaf,
    title: "Sustainability",
    desc: "Committing to sustainable supply chains and eco-friendly practices that protect our environment.",
  },
  {
    id: "customer",
    name: "Customer First",
    icon: Users,
    title: "Customer First",
    desc: "Placing client success and long-term trust at the heart of every operational decision.",
  },
];

export default function LeadershipPrinciples() {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = PRINCIPLES[activeTab];
  const ActiveIcon = activeItem.icon;

  return (
    <section className="relative z-30 w-full bg-[#FCFBF8] py-20 md:py-28 px-6 md:px-[80px] font-['Manrope'] border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#D92D20] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            LEADERSHIP PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-['Space_Grotesk'] tracking-tight">
            Guided by values.<br />
            Driven by purpose.
          </h2>
        </div>

        {/* Split Layout: Left Vertical Nav + Right Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Vertical Navigation */}
          <div className="lg:col-span-5 space-y-3 border-l-2 border-slate-200 relative pl-4">
            {PRINCIPLES.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 relative ${
                    isSelected
                      ? "text-[#D92D20] font-bold bg-red-50/70"
                      : "text-slate-500 font-medium hover:text-slate-800 hover:bg-slate-100/50"
                  }`}
                >
                  {/* Radio Dot Icon */}
                  <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? "border-[#D92D20] bg-white" : "border-slate-400 bg-transparent"}`}>
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#D92D20]" />}
                  </div>

                  <span className="text-base font-['Space_Grotesk']">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Content Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-12 rounded-[28px] bg-white border border-slate-200/90 shadow-sm space-y-4"
              >
                <div className="p-4 rounded-full bg-red-50 text-[#D92D20] inline-block border border-red-100 shadow-sm">
                  <ActiveIcon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#111827] font-['Space_Grotesk']">
                  {activeItem.title}
                </h3>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {activeItem.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
