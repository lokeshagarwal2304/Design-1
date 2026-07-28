"use client";

import React from "react";

export default function DepotsSection() {
  const depots = [
    {
      name: "Hyderabad Depot",
      state: "Telangana",
      image: "/Solarsheds.png",
      details: "Central steel distribution hub with overhead crane facilities and high-capacity storage."
    },
    {
      name: "Vijayawada Depot",
      state: "Andhra Pradesh",
      image: "/Product-rect-3.png",
      details: "Strategic coastal depot supplying Tata Structura tubes and structural steel across AP."
    },
    {
      name: "Warangal Depot",
      state: "Telangana",
      image: "/rebar_hero_bg.png",
      details: "Regional stockyard specializing in rebar and structural pipe logistics."
    },
    {
      name: "Visakhapatnam Depot",
      state: "Andhra Pradesh",
      image: "/banner-3.png",
      details: "Port-adjacent warehouse facility handling bulk heavy structural inventory."
    },
  ];

  return (
    <section id="depots" className="w-full bg-[#F1F5F9] py-14 border-t border-[#E2E8F0] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading with Red Accent */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#E53935] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2C6B] tracking-tight">
              Depots &amp; Branches
            </h2>
          </div>
        </div>

        {/* Grid container with Carousel Nav Arrow */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {depots.map((depot, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[18px] border border-[#E8ECF2] shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              >
                {/* Image Container (210px dominant image height) */}
                <div className="w-full h-[210px] bg-slate-100 overflow-hidden relative">
                  <img
                    src={depot.image}
                    alt={depot.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Information Area */}
                <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="text-base font-bold text-[#0B2C6B] group-hover:text-[#E53935] transition-colors">
                      {depot.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">
                      {depot.state}
                    </p>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <button className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-[#0B2C6B] hover:text-white px-3.5 py-1.5 rounded-lg transition-all">
                      View Details
                    </button>

                    <div className="w-8 h-8 rounded-full bg-slate-100 text-[#0B2C6B] flex items-center justify-center group-hover:bg-[#0B2C6B] group-hover:text-white transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Next Arrow (Floating on right) */}
          <button className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#E8ECF2] shadow-md items-center justify-center text-slate-700 hover:bg-[#0B2C6B] hover:text-white hover:border-[#0B2C6B] transition-all z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
