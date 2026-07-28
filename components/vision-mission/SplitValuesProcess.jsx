import React, { useState } from "react";
import { ShieldCheck, Lightbulb, Award, Shield, Users, Leaf, Pencil, Cog, Headphones, Layers, Truck, HardHat, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ACCORDION_ITEMS = [
  {
    title: "Integrity",
    icon: ShieldCheck,
    content: "We operate with uncompromised honesty, ethical standards, and transparency in all client partnerships.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    content: "We continuously explore advanced steel engineering techniques and smart manufacturing processes.",
  },
  {
    title: "Quality",
    icon: Award,
    content: "Rigorous quality benchmarks and Tata Structura certified specs across every structural pipe.",
  },
  {
    title: "Safety",
    icon: Shield,
    content: "Unmatched safety protocols for our workforce, plant machinery, and industrial job sites.",
  },
  {
    title: "Customer Commitment",
    icon: Users,
    content: "Building long-term client trust through dedicated technical support and reliable supply chains.",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    content: "Eco-friendly manufacturing practices and sustainable steel solutions for future generations.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Consult",
    desc: "We consult & analyze structural project requirements.",
    icon: Users,
  },
  {
    title: "Design",
    desc: "We engineer precision steel solutions with certified specs.",
    icon: Pencil,
  },
  {
    title: "Source",
    desc: "We procure high-grade certified Tata Structura steel.",
    icon: Layers,
  },
  {
    title: "Fabricate",
    desc: "We build with advanced technology & automated machinery.",
    icon: Cog,
  },
  {
    title: "Inspect",
    desc: "We perform multi-stage testing & quality assurance checks.",
    icon: ShieldCheck,
  },
  {
    title: "Coat & Finish",
    desc: "We apply protective anti-corrosion finishes & coatings.",
    icon: Shield,
  },
  {
    title: "Package",
    desc: "We bundle & secure structural pipes for safe transport.",
    icon: Award,
  },
  {
    title: "Deliver",
    desc: "We ensure safe, on-time delivery with reliable supply chains.",
    icon: Truck,
  },
  {
    title: "Install",
    desc: "We provide guidance for structural assembly & integration.",
    icon: HardHat,
  },
  {
    title: "Support",
    desc: "We provide dedicated technical support beyond delivery.",
    icon: Headphones,
  },
];

export default function SplitValuesProcess() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative z-30 w-full bg-[#F8FAFC] pt-10 pb-4 md:pt-14 md:pb-6 px-6 md:px-[80px] font-['Manrope'] border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: Values Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-[#E53935] text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                OUR PRINCIPLES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-['Space_Grotesk'] tracking-tight">
                Values we live by, every day.
              </h2>
            </div>

            {/* Accordion Container */}
            <div className="space-y-3 pt-2">
              {ACCORDION_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen ? "border-[#E53935] shadow-md" : "border-slate-200 hover:border-slate-300"
                      }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 px-5 text-left font-bold font-['Space_Grotesk'] text-[#0F172A] text-base"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl transition-colors ${isOpen ? "bg-red-50 text-[#E53935]" : "bg-slate-100 text-slate-600"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span>{item.title}</span>
                      </div>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#E53935] shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pb-4 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                        >
                          {item.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-slate-400 font-medium pt-1">
              These values guide every decision we make.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: Process Grid matching height */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 pt-4 lg:pt-0"
          >
            <div>
              <span className="text-[#E53935] text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                OUR PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-['Space_Grotesk'] tracking-tight">
                From Commitment to Impact.
              </h2>
            </div>

            {/* 8 Clean Un-numbered Process Cards 2-Column Grid */}
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {PROCESS_STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      className="p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#E53935]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex items-start gap-3.5"
                    >
                      <div className="p-3 rounded-xl bg-red-50 text-[#E53935] border border-red-100 group-hover:bg-[#E53935] group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-[#0F172A] font-['Space_Grotesk'] group-hover:text-[#E53935] transition-colors leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
