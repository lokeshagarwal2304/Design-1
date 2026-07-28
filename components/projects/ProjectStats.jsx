import React from "react";
import { HardHat, MapPin, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  {
    icon: HardHat,
    value: "150+",
    label: "Projects Completed",
  },
  {
    icon: MapPin,
    value: "40+",
    label: "Locations Served",
  },
  {
    icon: Users,
    value: "18+",
    label: "Years of Excellence",
  },
  {
    icon: Heart,
    value: "500K+",
    label: "Lives Impacted",
  },
];

export default function ProjectStats() {
  return (
    <section className="relative w-full bg-[#FAFAF8] py-20 md:py-28 px-6 md:px-[80px] font-['Manrope'] border-t border-[#EAEAEA]">
      <div className="max-w-[1360px] mx-auto">
        
        {/* 4 Pure Typography Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center text-center">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center space-y-3 relative group"
              >
                {/* Line Icon */}
                <div className="p-3 rounded-full bg-[#FAF5EE] text-[#D93025] border border-red-100 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Big Metric Value */}
                <div className="text-4xl sm:text-5xl lg:text-[58px] font-black text-[#111111] font-['Space_Grotesk'] tracking-tight leading-none">
                  {stat.value}
                </div>

                {/* Handwritten Red Script Label */}
                <div className="text-[#D93025] font-serif italic text-sm md:text-base font-semibold tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
