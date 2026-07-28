import React from "react";
import { GraduationCap, Briefcase, Star, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ExecutiveProfile() {
  return (
    <section id="executive-profile" className="relative z-30 w-full bg-white pt-6 md:pt-10 pb-16 font-['Manrope']">
      
      {/* 100% Full-Wide Section Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-[80px]">
        <div className="w-full space-y-8">
          
          {/* Header Row with Staggered Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80"
          >
            <div className="space-y-1.5 max-w-3xl">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-[#D9342B] text-xs font-extrabold uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-3.5 py-1 rounded-full inline-block shadow-2xs"
              >
                EXECUTIVE DIRECTOR
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] font-['Space_Grotesk'] tracking-tight leading-none pt-0.5"
              >
                Phanindra Reddy
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-700 text-base sm:text-lg font-bold font-['Space_Grotesk'] pt-1 leading-snug"
              >
                Driving transformation through innovation, integrity and long-term vision.
              </motion.p>
            </div>

            {/* LinkedIn CTA Button with Motion Div Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="shrink-0 pt-1 sm:pt-0"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0077B5] hover:bg-[#005E8D] text-white transition-all duration-300 font-extrabold text-sm sm:text-base shadow-md shadow-blue-500/20 group"
              >
                <svg className="w-5 h-5 text-white shrink-0 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
              </a>
            </motion.div>
          </motion.div>

          {/* 2x2 Cards Grid on Mobile (4-Column on Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 py-2 border-b border-slate-200/80">
            {[
              {
                icon: GraduationCap,
                label: "EDUCATION",
                val: "Business Economics",
                sub: "University of Exeter",
              },
              {
                icon: Briefcase,
                label: "EXPERIENCE",
                val: "10+ Years",
                sub: "Strategic Leadership",
              },
              {
                icon: Star,
                label: "EXPERTISE",
                val: "Strategy & Innovation",
                sub: "Operational Excellence",
              },
              {
                icon: User,
                label: "FOCUS",
                val: "People & Ethics",
                sub: "Sustainable Growth",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-3 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#D9342B]/40 hover:bg-white hover:shadow-[0_12px_30px_rgba(217,52,43,0.08)] transition-all duration-300 space-y-1.5 group cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[#D9342B]">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-[#D9342B] group-hover:bg-[#D9342B] group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-2xs shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-[#D9342B] transition-colors truncate">
                      {item.label}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-base font-extrabold text-[#0F172A] font-['Space_Grotesk'] leading-tight group-hover:text-[#D9342B] transition-colors">
                    {item.val}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-snug">
                    {item.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* High-Readability Narrative with Staggered Slide Animations */}
          <div className="space-y-5 pt-2">
            
            {/* Red Left Accent Quote Banner with Slide-in */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pl-5 border-l-4 border-[#D9342B] py-2 bg-gradient-to-r from-red-50/50 via-slate-50/40 to-transparent rounded-r-2xl shadow-2xs"
            >
              <p className="text-base sm:text-lg text-[#0F172A] font-bold font-['Space_Grotesk'] leading-relaxed">
                &ldquo;Mr. Phanindra Reddy holds a Business Economics certification from the University of Exeter. Presently the Executive Director of Nagajuna Steel Pvt. Ltd., he is driven by a vision to build a better platform for the industry&apos;s partners and customers.&rdquo;
              </p>
            </motion.div>

            {/* 3 Full-Width Staggered Red Bullet Points */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 font-medium pt-1 w-full">
              {[
                "With a deep understanding of business, economics, and organizational dynamics, he continues to lead with empathy, clarity and an unyielding commitment to operational excellence.",
                "Under his strategic leadership, Mutyam Steel has expanded its manufacturing reach across Telangana and Andhra Pradesh, forging key distribution partnerships with Tata Structura.",
                "He spearheads operational transformation, sustainable supply chain practices, and customer-first value delivery, positioning Mutyam Steel as a market leader in structural steel solutions.",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="flex items-start gap-3.5 w-full group"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D9342B] shrink-0 mt-2 shadow-[0_0_8px_rgba(217,52,43,0.5)] group-hover:scale-130 transition-transform duration-300" />
                  <p className="leading-relaxed text-slate-700 flex-1 group-hover:text-slate-900 transition-colors">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
