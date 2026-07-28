"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cog, Award, CircleCheck } from "lucide-react";
import Image from "next/image";

const HIGHLIGHTS = [
  {
    icon: <Cog className="w-6 h-6" strokeWidth={1.5} />,
    title: "High-End Testing",
    desc: "Advanced equipment for precise testing.",
  },
  {
    icon: <Award className="w-6 h-6" strokeWidth={1.5} />,
    title: "Top Quality Raw Materials",
    desc: "Carefully selected for maximum strength.",
  },
  {
    icon: <CircleCheck className="w-6 h-6" strokeWidth={1.5} />,
    title: "Reliable & Durable Products",
    desc: "Built to last. Built to perform.",
  },
];

export default function Section04_Quality() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="quality" className="w-full bg-[#FAF8F5] py-[160px] px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column (Large Image) */}
          <div className="w-full lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/quality-testing.png" // Fallback: try to find a relevant image, or use existing
                alt="Quality Inspection Laboratory"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </motion.div>
          </div>

          {/* Right Column (Text & Highlights) */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="mb-16"
            >
              <div className="text-[#E53935] text-xs font-bold tracking-[0.2em] uppercase mb-6 font-['Inter']">
                Quality At Every Step
              </div>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] font-light leading-[1.1] tracking-tight mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Quality Assurance
                <br />
                & Testing<span className="text-[#E53935]">.</span>
              </h2>
              <p className="text-[#1F1F1F]/70 text-lg md:text-xl font-['Inter'] leading-relaxed font-light max-w-[540px]">
                Every product is double-checked before delivery. Our high-end testing, raw materials and innovative processes ensure unmatched strength, performance and reliability.
              </p>
            </motion.div>

            {/* Three Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
              {HIGHLIGHTS.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  className={`flex flex-col group ${
                    idx !== 0 ? "sm:border-l border-[#E7E3DD] sm:pl-6" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full border border-[#E7E3DD] flex items-center justify-center text-[#E53935] mb-6 bg-white transition-transform duration-500 ease-out group-hover:rotate-[6deg]">
                    {item.icon}
                  </div>
                  <h3 className="text-[#1F1F1F] font-['Inter'] font-semibold text-sm mb-3 relative inline-block pb-2">
                    {item.title}
                    {/* Subtle underline animation */}
                    <div className="absolute bottom-0 left-0 w-6 h-[1px] bg-[#1F1F1F]/20 group-hover:bg-[#E53935] group-hover:w-full transition-all duration-500 ease-out" />
                  </h3>
                  <p className="text-[#1F1F1F]/60 font-['Inter'] text-[13px] leading-[1.7] font-light">
                    {item.desc}
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
