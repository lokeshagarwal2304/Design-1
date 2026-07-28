import React from "react";
import { motion } from "framer-motion";
import { Building2, Globe, Rocket, Award, ShieldCheck } from "lucide-react";

const MILESTONES = [
  {
    year: "2012",
    title: "Foundation",
    desc: "Mutyam Steel was established in Hyderabad with a vision to deliver quality steel solutions.",
    icon: Building2,
  },
  {
    year: "2016",
    title: "Expansion",
    desc: "Expanded our product range and strengthened our distribution network across India.",
    icon: Globe,
  },
  {
    year: "2017",
    title: "Technology Upgrade",
    desc: "Invested in advanced technology and modern infrastructure for better performance.",
    icon: Rocket,
  },
  {
    year: "2020",
    title: "Pan India Presence",
    desc: "Strengthened our footprint across multiple states and served diverse industries at scale.",
    icon: Award,
  },
  {
    year: "2026+",
    title: "Future Ready",
    desc: "Continue our commitment towards innovation, sustainability and a stronger tomorrow.",
    icon: ShieldCheck,
  },
];

export default function Timeline() {
  return (
    <section className="relative z-30 w-full bg-white py-16 md:py-24 px-6 md:px-[80px] overflow-hidden font-['Space_Grotesk']">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-2 mb-16"
        >
          <span className="text-[#EF4444] text-xs font-extrabold uppercase tracking-[0.25em]">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] font-['Space_Grotesk'] tracking-tight">
            A Journey of Growth and <span className="text-[#EF4444]">Excellence</span>
          </h2>
        </motion.div>

        {/* Timeline Roadmap Row */}
        <div className="relative">
          {/* Horizontal Red Line (Hidden on small mobile) */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-0.5 bg-[#EF4444] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {MILESTONES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center space-y-3 group"
                >
                  {/* Circular Icon Node */}
                  <div className="relative p-3.5 rounded-full bg-white border-2 border-[#EF4444] text-[#0F172A] shadow-md group-hover:scale-110 group-hover:bg-[#EF4444] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Year Tag */}
                  <div className="text-sm font-extrabold text-[#EF4444] font-['Space_Grotesk']">
                    {item.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0F172A] font-['Space_Grotesk']">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
                    {item.desc}
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
