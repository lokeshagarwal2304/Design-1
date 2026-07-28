"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Users, Factory, ShieldCheck } from "lucide-react";

const STATS = [
  {
    icon: <Award strokeWidth={1.5} />,
    value: 18,
    suffix: "+",
    label: "Years of Excellence",
  },
  {
    icon: <Users strokeWidth={1.5} />,
    value: 200,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <Factory strokeWidth={1.5} />,
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} />,
    value: 100,
    suffix: "%",
    label: "Commitment to Quality",
  },
];

// Simple Counter component using native IntersectionObserver
function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(target);
      }
    }, { threshold: 0.1, rootMargin: "50px" });
    
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(value * progress));
          requestAnimationFrame(animateCount);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Section05_Impact() {
  return (
    <section className="w-full bg-white border-y border-[#E7E3DD] py-[80px] md:py-[100px] px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
          
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`flex items-center gap-6 justify-center ${
                idx !== 0 ? "md:border-l border-[#E7E3DD]" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-[#E7E3DD] flex items-center justify-center text-[#1F1F1F]/40 bg-[#FAF8F5]">
                <div className="w-5 h-5 md:w-6 md:h-6">
                  {stat.icon}
                </div>
              </div>

              {/* Number and Label */}
              <div className="flex flex-col">
                <div className="text-3xl md:text-4xl font-light text-[#E53935] tracking-tight mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <Counter value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-xs md:text-sm font-semibold font-['Inter'] text-[#1F1F1F]/70 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
