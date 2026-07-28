"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Package, ShieldCheck, Users } from "lucide-react";

const NAV_ITEMS = [
  { id: "strategy", label: "Supply Chain Strategy", href: "#strategy", icon: <Package className="w-5 h-5" strokeWidth={1.5} /> },
  { id: "quality", label: "Quality Assurance & Testing", href: "#quality", icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.5} /> },
  { id: "distribution", label: "Distribution Networks", href: "/#partners", external: true, icon: <Users className="w-5 h-5" strokeWidth={1.5} /> },
];

export default function StickyNav() {
  const [activeItem, setActiveItem] = useState("strategy");

  // Basic scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const strategyEl = document.getElementById("strategy");
      const qualityEl = document.getElementById("quality");
      
      if (!strategyEl || !qualityEl) return;
      
      const strategyTop = strategyEl.getBoundingClientRect().top;
      const qualityTop = qualityEl.getBoundingClientRect().top;
      
      if (qualityTop < 200) {
        setActiveItem("quality");
      } else if (strategyTop < 200) {
        setActiveItem("strategy");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href, external) => {
    if (external) return; 
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 90, 
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="relative z-10 w-full bg-[#FFFFFF] border-b border-[#ECECEC] overflow-x-auto no-scrollbar">
      <div className="max-w-[1320px] mx-auto px-6 flex items-center h-[90px]">
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeItem === item.id;
          return (
            <div key={item.id} className="relative h-full flex-1 flex items-center justify-center shrink-0 min-w-[280px]">
              {/* Vertical Divider between tabs */}
              {index !== 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#E9E9E9]" />
              )}

              {item.external ? (
                <Link 
                  href={item.href}
                  className="flex flex-col items-center justify-center gap-1.5 h-full group cursor-pointer w-full"
                >
                  <div className={`transition-colors duration-300 ${isActive ? "text-[#D62E2E]" : "text-[#111111] group-hover:text-[#D62E2E]"}`}>
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[15px] font-semibold font-['Inter'] transition-colors duration-300 ${isActive ? "text-[#111111]" : "text-[#111111] group-hover:text-[#D62E2E]"}`}>
                      {item.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50 -rotate-45" />
                  </div>
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href, item.external)}
                  className="flex flex-col items-center justify-center gap-1.5 h-full group cursor-pointer w-full"
                >
                  <div className={`transition-colors duration-300 ${isActive ? "text-[#D62E2E]" : "text-[#111111] group-hover:text-[#D62E2E]"}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[15px] font-semibold font-['Inter'] transition-colors duration-300 ${isActive ? "text-[#111111]" : "text-[#111111] group-hover:text-[#D62E2E]"}`}>
                    {item.label}
                  </span>
                </a>
              )}

              {/* Animated Underline Indicator */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[3px] overflow-hidden">
                <motion.div
                  className="w-full h-full bg-[#D62E2E]"
                  initial={{ x: "-100%" }}
                  animate={{ x: isActive ? "0%" : "-100%" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
