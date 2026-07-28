"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, BadgeCheck, Users } from "lucide-react";
import Image from "next/image";

const BLOCKS = [
  {
    icon: <Shield className="w-8 h-8" strokeWidth={1.2} />,
    title: "Safety First",
    desc: "Zero accidents, work-related injuries and other catastrophes. We build a safe, healthy, and accident-free workplace for everyone.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8" strokeWidth={1.2} />,
    title: "Respect & Integrity",
    desc: "We follow the highest ethical standards and stay compliant with all anti-corruption policies and business conduct.",
  },
  {
    icon: <Users className="w-8 h-8" strokeWidth={1.2} />,
    title: "Inclusion & Diversity",
    desc: "We value diverse perspectives and foster a culture of inclusion, growth, and equal opportunity for all.",
  },
];

export default function Section03_Operational() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative w-full bg-[#222222] py-[160px] px-6 md:px-16 overflow-hidden">
      
      {/* Subtle Blueprint Texture Overlay (Using simple CSS grid for effect) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#222222] via-transparent to-[#222222] pointer-events-none z-0" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-16 lg:gap-24">
          
          {/* Left Column (Heading) */}
          <div className="w-full xl:w-[35%]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={childVariants}
            >
              <div className="text-[#E53935] text-xs font-bold tracking-[0.2em] uppercase mb-6 font-['Inter']">
                Our Foundation
              </div>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] tracking-tight mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Operational
                <br />
                Excellence<span className="text-[#E53935]">.</span>
              </h2>
              <p className="text-white/60 text-lg font-['Inter'] leading-relaxed font-light max-w-sm">
                We are committed to creating a safe, ethical and inclusive environment that empowers our people and partners.
              </p>
            </motion.div>
          </div>

          {/* Right Column (Blocks + Image) */}
          <div className="w-full xl:w-[65%] flex flex-col lg:flex-row gap-12 lg:gap-0 relative">
            
            <motion.div 
              className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 z-20 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {BLOCKS.map((block, idx) => (
                <motion.div 
                  key={idx}
                  variants={childVariants}
                  className={`flex flex-col group ${
                    idx !== 0 ? "md:border-l border-white/10 md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div className="text-[#E53935] mb-6 transition-transform duration-500 group-hover:scale-110 origin-left">
                    {block.icon}
                  </div>
                  <h3 className="text-white font-['Inter'] font-semibold text-sm mb-4">
                    {block.title}
                  </h3>
                  <p className="text-white/50 font-['Inter'] text-[13px] leading-[1.8] font-light">
                    {block.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Extreme Right Image (Engineer) */}
            <motion.div 
              className="w-full lg:w-[35%] lg:absolute lg:right-0 lg:-top-16 lg:-bottom-16 mt-8 lg:mt-0 overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full h-[400px] lg:h-full lg:ml-8 border-l border-white/5">
                {/* Fallback image if exact engineer image not found */}
                <Image
                  src="/csr/img-4.jpeg"
                  alt="Engineer on site"
                  fill
                  className="object-cover object-center mix-blend-luminosity opacity-40 hover:opacity-80 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#222222] via-transparent to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
