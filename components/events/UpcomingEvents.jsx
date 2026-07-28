"use client";
import React from "react";

const UPCOMING_EVENTS_LIST = [
  {
    id: 1,
    date: "25 – 27 July, 2025",
    title: "Build India Expo 2025",
    location: "Pragati Maidan, New Delhi",
    status: "Registration Open",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m3 0h1m-1-4h.01M9 16h.01M9 12h.01M15 16h.01M15 12h.01M9 8h.01M15 8h.01" />
      </svg>
    )
  },
  {
    id: 2,
    date: "05 August, 2025",
    title: "Dealer Conference 2025",
    location: "Hyderabad, Telangana",
    status: "Invitation Only",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 3,
    date: "20 September, 2025",
    title: "Construction Innovation Summit",
    location: "Bengaluru, Karnataka",
    status: "Coming Soon",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function UpcomingEvents() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E11D48] uppercase">
              LOOKING AHEAD
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1320] tracking-tight mt-1">
              Upcoming Events &amp; Expos
            </h2>
            <p className="text-sm text-gray-500 font-normal mt-1">
              Mark your calendar for upcoming industrial summits and dealer conventions.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D48] hover:text-[#0B1320] transition-colors"
          >
            <span>View All Upcoming</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Horizontal Row Sequence as in Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_EVENTS_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Icon & Status Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0B1320] flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0B1320]/5 text-[#0B1320] border border-[#0B1320]/10">
                    {item.status}
                  </span>
                </div>

                {/* Date */}
                <span className="text-xs font-bold text-[#E11D48] tracking-wide">
                  {item.date}
                </span>

                {/* Event Name */}
                <h3 className="text-lg font-bold text-[#0B1320] mt-1 mb-1 leading-snug">
                  {item.title}
                </h3>

                {/* Location */}
                <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 mb-6">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.location}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1320] hover:text-[#E11D48] transition-colors"
                >
                  <span>Know More</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
