import React from "react";
import { GraduationCap, User, TrendingUp, Flag } from "lucide-react";
import { motion } from "framer-motion";

const JOURNEY_STEPS = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Built a strong foundation in Business Economics from the University of Exeter.",
  },
  {
    icon: User,
    title: "Corporate Leadership",
    desc: "Gained extensive experience in leadership, strategy and operational excellence.",
  },
  {
    icon: TrendingUp,
    title: "Business Expansion",
    desc: "Spearheading growth initiatives and building strategic partnerships across the value chain.",
  },
  {
    icon: Flag,
    title: "Future Vision",
    desc: "Committed to innovation, sustainability and creating long-term value for all.",
  },
];

export default function LeadershipJourney() {
  return (
    <section className="relative z-30 w-full bg-[#FCFBF8] py-20 md:py-28 px-6 md:px-[80px] font-['Manrope'] border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[#D92D20] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            LEADERSHIP JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] font-['Space_Grotesk'] tracking-tight">
            A journey of growth<br />
            and impact.
          </h2>
        </motion.div>

        {/* 4-Step Progressive Timeline */}
        <div className="relative pt-4">
          {/* Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0">
            <div className="h-full bg-[#D92D20]/30 w-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {JOURNEY_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center space-y-3 group cursor-pointer"
                >
                  {/* Circle Icon Badge */}
                  <div className="p-4 rounded-full bg-white border-2 border-slate-300 text-[#111827] shadow-sm group-hover:border-[#D92D20] group-hover:bg-[#D92D20] group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#111827] font-['Space_Grotesk'] group-hover:text-[#D92D20] transition-colors pt-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed max-w-[240px]">
                    {step.desc}
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
