import React from "react";
import { Calendar, Users, Building2, BadgeCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

const IMPACT_STATS = [
  {
    icon: Calendar,
    value: "2012",
    label: "Since Leadership Journey",
  },
  {
    icon: Users,
    value: "30+",
    label: "Years of Experience",
  },
  {
    icon: Building2,
    value: "5+",
    label: "Industries Impacting",
  },
  {
    icon: BadgeCheck,
    value: "1000+",
    label: "People Empowered",
  },
  {
    icon: Globe,
    value: "20+",
    label: "Projects Delivered",
  },
];

export default function ImpactStats() {
  return (
    <section className="relative z-30 w-full bg-slate-50 py-12 md:py-16 px-6 md:px-[80px] font-['Manrope']">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[24px] bg-[#081B3A] text-white p-8 md:p-10 shadow-2xl border border-slate-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 lg:divide-x divide-slate-700/60">
            {IMPACT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4 lg:justify-center first:pl-0 last:pr-0">
                  <div className="p-3 rounded-2xl bg-white/10 text-[#EF4444] mb-3 backdrop-blur-md border border-white/10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#EF4444] font-['Space_Grotesk'] tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
