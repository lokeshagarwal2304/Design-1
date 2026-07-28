"use client";

import React, { useState, useEffect } from "react";

function AnimatedNumber({ target }) {
  const [displayValue, setDisplayValue] = useState(0);

  // Extract numeric part and any suffix (like '+')
  const numericTarget = parseInt(target.replace(/\D/g, ""), 10) || 0;
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1600; // 1.6 seconds ease-out count animation

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quad formula: progress * (2 - progress)
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * numericTarget);

      setDisplayValue(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(numericTarget);
      }
    };

    window.requestAnimationFrame(step);
  }, [numericTarget]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function StrategicPresence() {
  const stats = [
    { value: "1", label: "Head Office" },
    { value: "2", label: "Registered Offices" },
    { value: "18+", label: "Depots" },
    { value: "12+", label: "States Covered" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-12 relative z-20 mb-14">
      <div className="bg-white rounded-[20px] shadow-sm border border-[#E8ECF2] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 transition-all hover:shadow-md">
        {/* Left Side: Icon & Text */}
        <div className="flex items-start gap-4 lg:w-1/2">
          <div className="w-12 h-12 rounded-xl bg-[#0B2C6B]/10 text-[#0B2C6B] flex items-center justify-center flex-shrink-0 mt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0B2C6B] tracking-tight mb-2">
              Strategic Presence. Stronger Connections.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Mutyam Steel operates across key locations to ensure timely delivery, efficient service and strong customer support nationwide.
            </p>
          </div>
        </div>

        {/* Vertical Divider for Desktop */}
        <div className="hidden lg:block w-px h-16 bg-[#E8ECF2]" />

        {/* Right Side: 4 Statistics with Animated Counter */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-1/2 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E8ECF2]">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center relative">
              <div className="text-3xl md:text-4xl font-extrabold text-[#0B2C6B] tracking-tight mb-1">
                <AnimatedNumber target={stat.value} />
              </div>
              <div className="text-xs md:text-sm font-semibold text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
