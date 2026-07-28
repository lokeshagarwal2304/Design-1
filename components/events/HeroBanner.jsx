"use client";
import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen bg-[#0F172A] text-white overflow-hidden flex items-center pt-36 lg:pt-44 pb-20 lg:pb-28">
      {/* Background Image Container with Warm Yellowish/Amber Lighting Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Events/banner events.png"
          alt="Mutyam Steel Corporate Events"
          className="w-full h-full object-cover object-center opacity-60 scale-105 transition-transform duration-1000"
        />
        {/* Dark to Warm Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-amber-950/30" />
        {/* Warm Golden/Yellowish Radial Lighting Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.25),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-400/25 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-amber-300">
              OUR EVENTS &amp; EXPERIENCES
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 font-serif">
            Building Connections. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-400">
              Sharing Innovations.
            </span> <br />
            <span className="text-[#E11D48]">Growing Together.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-10">
            From global industrial expos to dealer meets, we actively participate, host and engage in events that build lasting relationships, share steel innovations and create stronger partnerships across India.
          </p>

          {/* Stat Badges Strip */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 border-t border-white/15 pt-6">
            <div className="flex items-center gap-2.5">
              <span className="text-[#E11D48] font-black text-xl">150+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Events Hosted</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
            <div className="flex items-center gap-2.5">
              <span className="text-[#E11D48] font-black text-xl">25k+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Delegates &amp; Dealers</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
            <div className="flex items-center gap-2.5">
              <span className="text-[#E11D48] font-black text-xl">35+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Cities Covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
