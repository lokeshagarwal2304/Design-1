"use client";
import React, { useState } from "react";

const FEATURED_SLIDES = [
  {
    id: 1,
    title: "Build Expo 2025",
    subtitle: "International Building & Construction Exposition",
    category: "FEATURED EVENT",
    date: "20th – 22nd March, 2025",
    location: "Hitex Exhibition Centre, Hyderabad",
    visitors: "2000+ Visitors",
    desc: "We showcased our advanced Tata Structura steel solutions and connected with industry leaders, commercial partners, and structural engineering collaborators across South India.",
    mainImg: "/NSPL-dealer-meet.png",
    thumbnails: [
      "/NSPL-dealer-meet.png",
      "/Session meet.png",
      "/Vietnam-trip.jpeg"
    ]
  },
  {
    id: 2,
    title: "South India Dealer Conclave 2025",
    subtitle: "Annual Distribution Network & Growth Strategy Summit",
    category: "DEALER MEET",
    date: "15th February, 2025",
    location: "Novotel Convention Centre, Vijayawada",
    visitors: "500+ Dealers",
    desc: "Bringing together over 500 authorized steel distributors and partners from Telangana & Andhra Pradesh to celebrate shared milestones and roll out new supply chain tools.",
    mainImg: "/Session meet.png",
    thumbnails: [
      "/Session meet.png",
      "/NSPL-dealer-meet.png",
      "/About-office.png"
    ]
  },
  {
    id: 3,
    title: "Vietnam Industrial Trade Expo",
    subtitle: "Global Structural Steel & Infrastructure Fair",
    category: "INTERNATIONAL EXPO",
    date: "10th – 14th January, 2025",
    location: "SECC, Ho Chi Minh City, Vietnam",
    visitors: "1500+ Trade Delegates",
    desc: "Representing Mutyam Steel at the international level, demonstrating high-strength hollow sections and structural tube applications for ASEAN infrastructure projects.",
    mainImg: "/Vietnam-trip.jpeg",
    thumbnails: [
      "/Vietnam-trip.jpeg",
      "/Session meet.png",
      "/rooftop.png"
    ]
  }
];

export default function FeaturedEvent() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const currentSlide = FEATURED_SLIDES[activeSlideIndex];

  return (
    <section className="w-full bg-[#0F172A] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E11D48] uppercase">
              {currentSlide.category}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mt-1">
              {currentSlide.title}
            </h2>
            <p className="text-xs lg:text-sm text-slate-400 font-medium mt-1">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Slide Navigator Dots */}
          <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            {FEATURED_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlideIndex(idx)}
                className={`text-xs font-bold transition-all px-2.5 py-1 rounded-full ${
                  activeSlideIndex === idx
                    ? "bg-[#E11D48] text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Left Big Banner + Right Thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Showcase Banner (Left 8 Cols) */}
          <div className="lg:col-span-8 group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 min-h-[380px] lg:min-h-[440px] flex flex-col justify-end p-6 lg:p-10 shadow-2xl">
            {/* Background Image with Hover Zoom */}
            <img
              src={currentSlide.mainImg}
              alt={currentSlide.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />

            {/* Overlaid Info */}
            <div className="relative z-10 max-w-2xl">
              {/* Badges strip */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 mb-4">
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {currentSlide.date}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {currentSlide.location}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {currentSlide.visitors}
                </span>
              </div>

              <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                {currentSlide.desc}
              </p>

              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0F172A] font-bold text-xs uppercase tracking-wider hover:bg-[#E11D48] hover:text-white transition-all duration-300 shadow-lg cursor-pointer">
                <span>View Highlights</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Thumbnails Column (Right 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
            {currentSlide.thumbnails.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setActiveSlideIndex((activeSlideIndex + idx) % FEATURED_SLIDES.length)}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 cursor-pointer h-[120px] transition-all hover:border-[#E11D48] shadow-md flex items-center p-4 gap-4"
              >
                <img
                  src={imgUrl}
                  alt="Thumbnail"
                  className="w-24 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E11D48]">
                    EVENT PHOTO {idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-2 mt-0.5 group-hover:text-rose-400 transition-colors">
                    {currentSlide.title} Highlights
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 mt-2">
                    <span>Explore Photo</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
