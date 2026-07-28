"use client";

import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[560px] pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden flex items-center">
      {/* Background Image without heavy blue overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Blueprints/depot-banner.png')` }}
      >
        {/* Subtle Dark Gradient Overlay for text readability (Blue tint removed) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col justify-center z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-gray-300 uppercase mb-4">
          <a href="/" className="hover:text-white transition-colors">HOME</a>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-300">BLUEPRINTS</span>
          <span className="text-gray-400">&gt;</span>
          <span className="text-[#E53935]">REGIONAL OFFICES &amp; DEPOTS</span>
        </div>

        {/* Title with Slow Moving Watery Metallic Gradient Effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          <span className="watery-gradient-text">
            Regional Offices <br className="hidden sm:inline" /> &amp; Depots
          </span>
        </h1>

        {/* Accent Red Line */}
        <div className="w-14 h-1.5 bg-[#E53935] rounded-full mb-5" />

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl font-medium leading-relaxed">
          Our strategic presence ensures faster delivery, stronger support and closer connections across India.
        </p>
      </div>

      {/* CSS Animation for Watery Gradient Shimmer */}
      <style jsx>{`
        @keyframes wateryShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .watery-gradient-text {
          background: linear-gradient(
            120deg,
            #ffffff 0%,
            #93c5fd 25%,
            #e0f2fe 50%,
            #60a5fa 75%,
            #ffffff 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: wateryShimmer 7s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
