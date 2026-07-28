"use client";
import React from "react";

const STATS_ITEMS = [
  {
    value: "150+",
    label: "Events Attended",
    icon: (
      <svg className="w-6 h-6 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    value: "25,000+",
    label: "People Connected",
    icon: (
      <svg className="w-6 h-6 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    value: "35+",
    label: "Cities Covered",
    icon: (
      <svg className="w-6 h-6 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    value: "500+",
    label: "Business Partners",
    icon: (
      <svg className="w-6 h-6 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    value: "40+",
    label: "Awards & Recognition",
    icon: (
      <svg className="w-6 h-6 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4m10 0h4m-2-2v4m-5 4g0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4zM6 17v2a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    )
  }
];

export default function StatsStrip() {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/90 shadow-sm grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {STATS_ITEMS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? "pt-4 md:pt-0" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-[#E11D48]/10 flex items-center justify-center mb-3">
                {stat.icon}
              </div>
              <span className="text-2xl lg:text-3xl font-extrabold text-[#0B1320] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-gray-500 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
