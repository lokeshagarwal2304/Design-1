"use client";
import React from "react";

const EVENTS_COLLECTION = [
  {
    id: 1,
    title: "Dealer Meet – Vijayawada",
    category: "DEALER MEET",
    date: "15 Feb, 2025",
    location: "Vijayawada",
    desc: "Strengthening commercial partnerships and celebrating distribution growth together.",
    img: "/NSPL-dealer-meet.png",
    photosCount: "18 Photos"
  },
  {
    id: 2,
    title: "SteelTech Expo 2025",
    category: "EXHIBITIONS",
    date: "05 Jan, 2025",
    location: "Hyderabad",
    desc: "Showcasing structural innovation and high performance TATA steel solutions.",
    img: "/Session meet.png",
    photosCount: "24 Photos"
  },
  {
    id: 3,
    title: "Product Launch Event",
    category: "PRODUCT LAUNCH",
    date: "12 Dec, 2024",
    location: "Mutyam Steel Depot",
    desc: "Introducing next-generation TATA Structura 310 YST high-tensile hollow sections.",
    img: "/About-office.png",
    photosCount: "12 Photos"
  },
  {
    id: 4,
    title: "CSR Initiative – Education",
    category: "CSR",
    date: "10 Nov, 2024",
    location: "Telangana",
    desc: "Supporting education, vocational training, and empowering young technical minds.",
    img: "/rooftop.png",
    photosCount: "15 Photos"
  },
  {
    id: 5,
    title: "Vietnam Trade Fair Delegation",
    category: "EXHIBITIONS",
    date: "28 Oct, 2024",
    location: "SECC Vietnam",
    desc: "South-East Asian trade fair representation for structural steel export growth.",
    img: "/Vietnam-trip.jpeg",
    photosCount: "30 Photos"
  },
  {
    id: 6,
    title: "Bandhan Partner Conclave",
    category: "DEALER MEET",
    date: "14 Sep, 2024",
    location: "Visakhapatnam",
    desc: "Celebrating key milestones and honoring top-performing regional fabricators.",
    img: "/Bandhan-event.jpeg",
    photosCount: "20 Photos"
  }
];

export default function EventGrid({ activeCategory }) {
  const filteredEvents = EVENTS_COLLECTION.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "dealer-meets" && item.category === "DEALER MEET") return true;
    if (activeCategory === "exhibitions" && item.category === "EXHIBITIONS") return true;
    if (activeCategory === "csr" && item.category === "CSR") return true;
    if (activeCategory === "product-launch" && item.category === "PRODUCT LAUNCH") return true;
    return true;
  });

  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E11D48] uppercase">
              RECENT HIGHLIGHTS
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1320] tracking-tight mt-1">
              Recent Events &amp; Gatherings
            </h2>
            <p className="text-sm text-gray-500 font-normal mt-1">
              Explore our recent industry conventions, dealer summits, and product showcases.
            </p>
          </div>

          <a
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1320] hover:text-[#E11D48] transition-colors group cursor-pointer"
          >
            <span>View All Events</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* 4-Column / 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="group bg-white rounded-2xl border border-gray-200/90 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={evt.img}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1320]/80 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {evt.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {evt.photosCount}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-2">
                    <span>{evt.date}</span>
                    <span>•</span>
                    <span className="text-[#E11D48]">{evt.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1320] group-hover:text-[#E11D48] transition-colors leading-snug mb-2">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-gray-500 font-normal leading-relaxed line-clamp-2">
                    {evt.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-gray-100 mt-4">
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-[#0B1320] transition-colors">
                  Explore Highlights
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#E11D48] group-hover:text-white flex items-center justify-center text-gray-600 transition-all duration-300">
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
