import React from "react";
import { motion } from "framer-motion";

const METRICS = [
  {
    value: "100+",
    label: "Villages Reached",
  },
  {
    value: "5000+",
    label: "Lives Impacted",
  },
  {
    value: "20+",
    label: "Projects",
  },
  {
    value: "15 Years",
    label: "of CSR Commitment",
  },
];

export default function ImpactNumbers() {
  return (
    <section className="relative w-full bg-[#FAF9F5] py-20 md:py-28 px-6 md:px-[80px] font-['Manrope'] border-t border-[#EAEAEA]">
      <div className="max-w-[1320px] mx-auto">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[#D63A2F] text-xs font-bold uppercase tracking-[0.25em] flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#D63A2F]" />
            OUR IMPACT
          </span>
        </motion.div>

        {/* 4 Pure Typography Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center items-center">
          {METRICS.map((metric, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-2 py-4 relative"
              >
                <div className="text-4xl sm:text-5xl lg:text-[60px] font-black text-[#111111] font-['Space_Grotesk'] tracking-tight leading-none">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-[#555555] font-semibold tracking-wide">
                  {metric.label}
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
