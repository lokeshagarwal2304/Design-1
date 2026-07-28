import React from "react";
import { Building2, CalendarDays, Globe, BadgeCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

const STATS_ITEMS = [
  {
    icon: Building2,
    value: "2012",
    label: "Established in Hyderabad, India",
  },
  {
    icon: CalendarDays,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: Globe,
    value: "Diverse",
    label: "Industries Served",
  },
  {
    icon: BadgeCheck,
    value: "Trusted",
    label: "by Thousands of Customers",
  },
  {
    icon: Award,
    value: "Committed",
    label: "to Quality & Sustainability",
  },
];

export default function Stats() {
  return (
    <section className="relative z-30 w-full bg-white py-10 md:py-12 border-y border-slate-200 font-['Space_Grotesk']">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {STATS_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-4 px-2 py-3 lg:justify-center first:pl-0 last:pr-0"
              >
                <div className="p-3 rounded-2xl bg-red-50 text-[#EF4444] shrink-0 border border-red-100">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#0F172A] font-['Space_Grotesk'] leading-none">
                    {item.value}
                  </div>
                  <p className="text-xs text-slate-500 font-semibold mt-1 leading-tight">
                    {item.label}
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
