"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const STATS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    value: 500, suffix: "+", label: "Projects Completed",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    value: 12, suffix: "+", label: "States Covered",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    value: 120, suffix: "+", label: "Happy Clients",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/>
      </svg>
    ),
    value: 2, suffix: "M+", label: "Tons of Steel Delivered",
  },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / (1600 / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden" style={{ minHeight: "580px" }}>

      {/* ── FULL BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/projects/project-banner.png"
          alt="Mutyam Steel Projects"
          fill
          priority
          className="object-cover object-[center_right]"
        />
        {/* Mobile-only gradient overlay for high text contrast */}
        <div
          className="block sm:hidden absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              rgba(255,255,255,0.96) 0%,
              rgba(255,255,255,0.85) 55%,
              rgba(255,255,255,0.50) 100%
            )`,
          }}
        />
        {/* Desktop original watery gradient overlay */}
        <div
          className="hidden sm:block absolute inset-0"
          style={{
            background: `linear-gradient(95deg,
              rgba(255,255,255,0.96) 0%,
              rgba(255,255,255,0.80) 25%,
              rgba(255,255,255,0.45) 45%,
              rgba(255,255,255,0.12) 65%,
              rgba(255,255,255,0) 80%
            )`,
          }}
        />
        {/* Top fade for nav breathing room */}
        <div className="absolute top-0 left-0 right-0 h-[140px]" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)" }} />
      </div>

      {/* ── CONTENT LAYER ── */}
      <div className="relative z-10 max-w-[1536px] mx-auto w-full px-6 md:px-[60px] pt-[150px] md:pt-[160px] pb-[65px] md:pb-[75px]">

        {/* Two-column */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* LEFT — Heading + description (Fly in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[44px] sm:text-[54px] md:text-[72px] lg:text-[78px] font-black leading-[1.04] tracking-tight mb-4 md:mb-6 font-['Space_Grotesk']"
            >
              <span className="animate-watery-gradient font-black">Our Projects.</span>
            </motion.h1>

            {/* Mobile-only Frosted Glass Card | Desktop 100% Original Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="bg-white/85 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl sm:rounded-none border border-slate-200/80 sm:border-none shadow-sm sm:shadow-none"
            >
              <p className="text-[#334155] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-[1.6] sm:leading-[1.7] font-['Manrope'] font-medium max-w-[500px]">
                Delivering precision-engineered steel solutions across industries and geographies with unwavering commitment.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Stats card (Fly in from Right) */}
          <div className="w-full lg:w-[58%]">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/60"
              style={{
                background: "rgba(255,255,255,0.62)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.8) inset",
              }}
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.32 + i * 0.08 }}
                  className={`flex flex-col items-center text-center px-5 py-8 ${
                    i !== 0 ? "border-l border-white/50" : ""
                  }`}
                >
                  <div className="text-[#D62E2E] mb-3">{stat.icon}</div>
                  <div
                    className="text-[32px] md:text-[40px] font-bold text-[#111] leading-none mb-2 tabular-nums"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] text-[#555] font-['Inter'] uppercase tracking-[1.5px] font-semibold leading-snug max-w-[90px]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── SCROLL ARROWS — bottom right, Mutyam Steel Profile style ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 right-8 md:right-14 z-20 hidden md:flex flex-col items-center gap-1"
      >
        <style>{`
          @keyframes arrowBounce {
            0%, 100% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(5px); opacity: 1; }
          }
        `}</style>
        <svg width="28" height="44" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 8 L16 20 L28 8"
            stroke="#D62E2E"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "arrowBounce 1.2s ease-in-out infinite", animationDelay: "0s" }}
          />
          <path
            d="M4 18 L16 30 L28 18"
            stroke="#1565C0"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "arrowBounce 1.2s ease-in-out infinite", animationDelay: "0.2s" }}
          />
          <path
            d="M4 28 L16 40 L28 28"
            stroke="#9E9E9E"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "arrowBounce 1.2s ease-in-out infinite", animationDelay: "0.4s" }}
          />
        </svg>
      </motion.div>

    </section>
  );
}
