import React from "react";
import { Users, Wallet, Building2, Cog, Package, ShieldCheck, Truck, TrendingUp, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const DEPARTMENTS = [
  { name: "Management", icon: Users },
  { name: "Finance", icon: Wallet },
  { name: "Projects", icon: Building2 },
  { name: "Operations", icon: Cog },
  { name: "Procurement", icon: Package },
  { name: "Quality Control", icon: ShieldCheck },
  { name: "Logistics", icon: Truck },
  { name: "Sales & Marketing", icon: TrendingUp },
  { name: "Customer Support", icon: Headphones },
];

export default function Departments() {
  return (
    <section className="relative z-30 w-full bg-white py-16 md:py-24 px-6 md:px-[80px] font-['Manrope']">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-14"
        >
          <span className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-red-50 border border-red-100 px-4 py-1.5 rounded-full inline-block">
            STRUCTURE & DIVISIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#0F172A] font-['Space_Grotesk'] tracking-tight">
            Our <span className="text-[#E53935]">Departments</span>
          </h2>
        </motion.div>

        {/* 9 Departments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
          {DEPARTMENTS.map((dept, idx) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-[#E53935]/60 hover:shadow-lg transition-all duration-300 group cursor-pointer min-h-[110px]"
              >
                <div className="p-3 rounded-full bg-red-50 text-[#E53935] mb-2.5 group-hover:bg-[#E53935] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-[#0F172A] font-['Space_Grotesk'] leading-tight group-hover:text-[#E53935] transition-colors">
                  {dept.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
