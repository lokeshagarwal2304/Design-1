import React from "react";
import { Building2, Package, Factory, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const STATS_ITEMS = [
  {
    icon: Building2,
    value: "14+",
    label: "Years of Experience",
  },
  {
    icon: Package,
    value: "500+",
    label: "Successful Projects",
  },
  {
    icon: Factory,
    value: "25+",
    label: "Industries Served",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Commitment to Quality",
  },
];

export default function StatisticsStrip() {
  return (
    <section className="relative z-30 w-full bg-[#1B1B1B] text-white py-12 md:py-16 px-6 md:px-[80px] font-['Manrope'] border-y border-slate-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {STATS_ITEMS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-4 p-4 lg:justify-center first:pl-0 last:pr-0 group hover:-translate-y-1 transition-transform"
              >
                <div className="p-3.5 rounded-2xl bg-white/10 text-[#E53935] shrink-0 border border-white/10 group-hover:bg-[#E53935] group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#E53935] font-['Space_Grotesk'] leading-none">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 font-semibold mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
