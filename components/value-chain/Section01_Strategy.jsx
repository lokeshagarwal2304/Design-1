"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Award } from "lucide-react";

const STRATEGIES = [
  {
    icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
    title: "Customer-Centric",
    desc: "We place our customers at the heart of everything we do, building solutions that create lasting relationships.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
    title: "Future-Ready",
    desc: "We invest in advanced technology and continuous innovation to stay ahead and deliver smarter solutions.",
  },
  {
    icon: <Award className="w-8 h-8" strokeWidth={1.5} />,
    title: "Brand Value",
    desc: "We stand for quality, integrity and consistency—building a brand that our customers trust and our partners rely on.",
  },
];

export default function Section01_Strategy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const eyebrowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 } },
  };

  const columnVariants = (idx) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 + (idx * 0.1) } },
  });

  return (
    <section id="strategy" className="relative w-full bg-[#FFFFFF] overflow-hidden">
      
      {/* Background Subtle Details */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
           style={{
             backgroundImage: `
               linear-gradient(#000 1px, transparent 1px),
               linear-gradient(90deg, #000 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }}
      />
      
      {/* Background fill for right column */}
      <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[60%] bg-[#F9F9F8] z-0 hidden lg:block" />

      <div className="relative z-10 max-w-[1320px] mx-auto py-[90px] px-6 md:px-16 lg:px-[80px]">
        <motion.div 
          className="flex flex-col lg:flex-row gap-[70px] items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Left Column (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col pt-4">
            
            <motion.div variants={eyebrowVariants}>
              <div className="text-[#D62E2E] text-[13px] font-semibold tracking-[3px] uppercase font-['Inter']">
                Our Approach
              </div>
              <div className="w-[45px] h-[2px] bg-[#D62E2E] my-[18px]" />
            </motion.div>
            
            <motion.h2 
              variants={headingVariants}
              className="text-[42px] md:text-[52px] text-[#111111] font-semibold tracking-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.05 }}
            >
              Strategy that builds
              <br />
              strength<span className="text-[#D62E2E]">.</span>
            </motion.h2>

            <motion.p 
              variants={paragraphVariants}
              className="text-[#5A5A5A] text-[16px] font-['Inter'] leading-[1.9] max-w-[420px]"
            >
              We combine deep industry expertise, innovative thinking, and a commitment to quality to create a business model that delivers sustainable value for our customers and partners.
            </motion.p>
          </div>

          {/* Right Column (60%) */}
          <div className="w-full lg:w-[60%] lg:bg-transparent bg-[#F9F9F8] rounded-xl lg:rounded-none p-8 lg:p-0">
            {/* The right side background is handled absolutely for desktop. 
                For mobile/tablet, it's a rounded box with padding. */}
            <div className="flex flex-col md:flex-row items-stretch justify-between h-full w-full">
              {STRATEGIES.map((item, idx) => (
                <React.Fragment key={idx}>
                  <motion.div
                    custom={idx}
                    variants={columnVariants(idx)}
                    className="flex flex-col items-center group flex-1 py-8 md:py-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px]"
                  >
                    {/* Icon Circle */}
                    <div className="w-[78px] h-[78px] rounded-full bg-white flex items-center justify-center text-[#D62E2E] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_10px_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-[6px]">
                      {item.icon}
                    </div>
                    
                    {/* Small Red Divider */}
                    <div className="w-[34px] h-[2px] bg-[#D62E2E] my-[18px] transition-colors duration-[350ms] group-hover:brightness-110" />
                    
                    <h3 
                      className="text-[#111111] font-semibold text-[24px] xl:text-[28px] mb-4 text-center px-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>
                    
                    <p className="text-[#5A5A5A] font-['Inter'] text-[15px] xl:text-[16px] leading-[1.8] text-center max-w-[220px] px-2">
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* Vertical Divider (Except for last item) */}
                  {idx < STRATEGIES.length - 1 && (
                    <div className="hidden md:block w-[1px] h-[220px] bg-[#E9E9E9] self-center" />
                  )}
                  
                  {/* Horizontal Divider for Mobile */}
                  {idx < STRATEGIES.length - 1 && (
                    <div className="md:hidden w-full h-[1px] bg-[#E9E9E9]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section Divider */}
      <div className="relative w-full flex items-center justify-center mt-12 mb-8 md:mt-0 md:mb-0 lg:absolute lg:bottom-0 lg:left-0">
        <div className="w-full h-[1px] bg-[#E9E9E9]" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full border-[2px] border-[#D62E2E] bg-white z-10" />
      </div>

    </section>
  );
}
