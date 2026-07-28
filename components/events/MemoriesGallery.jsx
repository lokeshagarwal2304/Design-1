"use client";
import React, { useState } from "react";

const GALLERY_MEMORIES = [
  {
    id: 1,
    title: "National Dealer Award Ceremony",
    year: "2024",
    location: "Hyderabad",
    img: "/NSPL-dealer-meet.png",
    aspect: "aspect-[4/5]"
  },
  {
    id: 2,
    title: "Structural Design Workshop",
    year: "2024",
    location: "Vijayawada",
    img: "/Session meet.png",
    aspect: "aspect-[16/10]"
  },
  {
    id: 3,
    title: "ASEAN Steel Trade Delegation",
    year: "2025",
    location: "Vietnam",
    img: "/Vietnam-trip.jpeg",
    aspect: "aspect-[3/4]"
  },
  {
    id: 4,
    title: "TATA Structura Product Showcase",
    year: "2024",
    location: "Visakhapatnam",
    img: "/About-office.png",
    aspect: "aspect-[16/11]"
  },
  {
    id: 5,
    title: "Bandhan Fabricators Meetup",
    year: "2024",
    location: "Hyderabad",
    img: "/Bandhan-event.jpeg",
    aspect: "aspect-[4/3]"
  },
  {
    id: 6,
    title: "Architects Technical Forum",
    year: "2024",
    location: "Warangal",
    img: "/rooftop.png",
    aspect: "aspect-[16/9]"
  }
];

export default function MemoriesGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E11D48] uppercase">
            VISUAL MEMORIES
          </span>
          <h2 className="text-3xl font-extrabold text-[#0B1320] tracking-tight mt-1">
            Moments From Our Journey
          </h2>
          <p className="text-sm text-gray-500 font-normal mt-2">
            A curated visual archive celebrating milestone gatherings, team spirit, and partner collaborations.
          </p>
        </div>

        {/* Pinterest Style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_MEMORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer border border-gray-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 break-inside-avoid ${item.aspect}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />

              {/* Hover Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Content on Hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
                <span className="text-[10px] font-bold text-[#E11D48] uppercase tracking-widest mb-1">
                  {item.location} • {item.year}
                </span>
                <h3 className="text-base font-bold text-white leading-snug mb-3">
                  {item.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/90">
                  <span className="underline decoration-[#E11D48] underline-offset-4">Open Album</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={selectedPhoto.img}
              alt={selectedPhoto.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider">
                  {selectedPhoto.location} • {selectedPhoto.year}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold hover:bg-[#E11D48] text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
