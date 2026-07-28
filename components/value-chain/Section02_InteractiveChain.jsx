"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Package, Factory, ShieldCheck, Truck, Users } from "lucide-react";
import Image from "next/image";

const STAGES = [
  {
    id: "01",
    title: "Raw Materials",
    desc: "Carefully sourced high quality raw materials.",
    icon: <Package strokeWidth={1.5} />,
    image: "/csr/img-3.jpeg",
  },
  {
    id: "02",
    title: "Manufacturing",
    desc: "Advanced technology with skilled expertise.",
    icon: <Factory strokeWidth={1.5} />,
    image: "/steel_framework_cad.png",
  },
  {
    id: "03",
    title: "Quality Testing",
    desc: "Rigorous testing at every stage of production.",
    icon: <ShieldCheck strokeWidth={1.5} />,
    image: "/csr/img-2.jpeg",
  },
  {
    id: "04",
    title: "Distribution",
    desc: "Efficient logistics ensuring timely delivery.",
    icon: <Truck strokeWidth={1.5} />,
    image: "/rooftop.png",
  },
  {
    id: "05",
    title: "Customer",
    desc: "Building long-term relationships through trust and reliability.",
    icon: <Users strokeWidth={1.5} />,
    image: "/csr/img-1.jpeg",
  },
];

export default function Section02_InteractiveChain() {
  const [activeNode, setActiveNode] = useState(STAGES[0].id);
  const containerRef = useRef(null);
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress when container is in view
      const start = windowHeight;
      const end = -rect.height;
      
      if (rect.top <= start && rect.top >= end) {
        const progress = (start - rect.top) / (start - end);
        // Add some dampening/easing manually
        setScaleX(Math.min(Math.max(progress, 0), 1));
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white py-[160px] px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="text-[#E53935] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-['Inter']">
            Our Value Chain
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] font-light tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            From start to <span className="text-[#E53935]">strength.</span>
          </h2>
        </div>

        {/* Interactive Horizontal Timeline */}
        <div className="relative mt-32 mb-16 max-w-5xl mx-auto hidden lg:block">
          
          {/* Base Background Line */}
          <div className="absolute top-[48px] left-[5%] right-[5%] h-[1px] bg-[#E7E3DD]" />
          
          {/* Animated Red Fill Line based on scroll */}
          <motion.div 
            className="absolute top-[48px] left-[5%] right-[5%] h-[1px] bg-[#E53935] origin-left"
            style={{ scaleX }}
          />

          <div className="relative z-10 flex justify-between">
            {STAGES.map((stage) => {
              const isActive = activeNode === stage.id;
              return (
                <div 
                  key={stage.id} 
                  className="flex flex-col items-center w-[180px] group cursor-pointer"
                  onMouseEnter={() => setActiveNode(stage.id)}
                >
                  <span className={`text-xs font-bold tracking-widest mb-6 transition-colors duration-300 font-['Inter'] ${isActive ? "text-[#E53935]" : "text-[#1F1F1F]/40"}`}>
                    {stage.id}
                  </span>
                  
                  {/* Icon Circle */}
                  <motion.div 
                    className={`w-[96px] h-[96px] rounded-full bg-white flex items-center justify-center transition-all duration-500 ease-out group-hover:rotate-[6deg] ${
                      isActive 
                        ? "border-[2px] border-[#E53935] shadow-lg text-[#E53935]" 
                        : "border border-[#E7E3DD] text-[#1F1F1F]/40 group-hover:border-[#1F1F1F]/20 group-hover:text-[#1F1F1F]/60"
                    }`}
                  >
                    <div className="w-8 h-8">
                      {stage.icon}
                    </div>
                  </motion.div>

                  {/* Text Details */}
                  <div className="mt-8 text-center px-4">
                    <h4 className={`text-sm font-semibold font-['Inter'] mb-3 transition-colors duration-300 ${isActive ? "text-[#1F1F1F]" : "text-[#1F1F1F]/70"}`}>
                      {stage.title}
                    </h4>
                    <p className={`text-xs font-light font-['Inter'] leading-relaxed transition-colors duration-300 ${isActive ? "text-[#1F1F1F]/60" : "text-[#1F1F1F]/30"}`}>
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Fallback */}
        <div className="lg:hidden flex flex-col gap-12 mt-16 relative">
          <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-[#E7E3DD]" />
          {STAGES.map((stage) => (
            <div key={stage.id} className="relative z-10 flex items-start gap-8 pl-4">
              <div className="w-16 h-16 shrink-0 rounded-full bg-white border border-[#E53935] flex items-center justify-center text-[#E53935] shadow-sm">
                <div className="w-6 h-6">{stage.icon}</div>
              </div>
              <div className="pt-2">
                <span className="text-xs font-bold text-[#E53935] tracking-widest font-['Inter'] mb-1 block">
                  {stage.id}
                </span>
                <h4 className="text-base font-semibold font-['Inter'] text-[#1F1F1F] mb-2">
                  {stage.title}
                </h4>
                <p className="text-sm font-light font-['Inter'] leading-relaxed text-[#1F1F1F]/60">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Area for Active Node (Desktop only) */}
        <div className="mt-24 hidden lg:flex items-center justify-center">
          <motion.div 
            key={activeNode}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl h-[400px] overflow-hidden rounded-2xl shadow-xl border-4 border-white"
          >
            <div className="absolute inset-0 bg-[#FAF8F5]" /> {/* placeholder base */}
            <Image
              src={STAGES.find(s => s.id === activeNode)?.image || "/value-chain.jpeg"}
              alt="Value Chain Stage"
              fill
              className="object-cover object-center"
            />
            {/* Watery Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#081B3A]/80 via-[#081B3A]/40 to-transparent pointer-events-none mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/20 to-[#081B3A]/90 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
