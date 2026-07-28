import React from "react";
import { Shield, Wheat, Ship, Factory, Building2, Circle, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const INDUSTRIES_LIST = [
  { name: "Defence", icon: Shield },
  { name: "Poultry", icon: ShieldCheck },
  { name: "Agriculture", icon: Wheat },
  { name: "Ports & Shipping", icon: Ship },
  { name: "Food Processing", icon: Factory },
  { name: "Medical Equipment", icon: Building2 },
  { name: "Rubber & Tyres", icon: Circle },
  { name: "Automobile", icon: Truck },
];

export default function Industries() {
  return (
    <section id="industries" className="relative z-30 w-full bg-white py-14 md:py-20 px-6 md:px-[80px] font-['Space_Grotesk'] border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-2 mb-12"
        >
          <span className="text-[#EF4444] text-xs font-extrabold uppercase tracking-[0.25em]">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] font-['Space_Grotesk'] tracking-tight">
            Strengthening <span className="text-[#EF4444]">Every Industry</span>
          </h2>
        </motion.div>

        {/* 8 Columns Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {INDUSTRIES_LIST.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#EF4444]/60 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="p-3 rounded-full bg-red-50 text-[#081B3A] mb-3 group-hover:bg-[#EF4444] group-hover:text-white transition-colors shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-bold text-[#0F172A] font-['Space_Grotesk'] group-hover:text-[#EF4444] transition-colors leading-tight">
                  {ind.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
