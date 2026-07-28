"use client";
import React from "react";

const EVENT_CITIES = [
  { name: "Hyderabad", state: "Headquarters & Expos", active: true },
  { name: "Vijayawada", state: "Regional Dealer Summits", active: true },
  { name: "Visakhapatnam", state: "Coastal Distribution Meets", active: true },
  { name: "Chennai", state: "Industrial Steel Forums", active: true },
  { name: "Bengaluru", state: "Construction Innovation Summits", active: true },
  { name: "Mumbai", state: "National Steel Conclaves", active: true },
  { name: "Dubai", state: "Middle East Trade Delegations", active: true }
];

export default function PresenceMap() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#E11D48] uppercase">
              OUR FOOTPRINT
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1320] tracking-tight mt-1">
              Event Presence Across Cities &amp; Regions
            </h2>
            <p className="text-sm text-gray-500 font-normal leading-relaxed mt-3 mb-6">
              Over the past two decades, Mutyam Steel has actively hosted and participated in key industry Expos, summits, and dealer conventions across major industrial hubs in India and abroad.
            </p>

            <div className="space-y-3">
              {EVENT_CITIES.map((city, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200/80 shadow-sm hover:border-[#E11D48]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
                    <span className="text-xs font-bold text-[#0B1320]">{city.name}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400">{city.state}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustrative Map Container */}
          <div className="lg:col-span-7 bg-[#0B1320] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden min-h-[420px] flex flex-col justify-between shadow-2xl border border-slate-800">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E11D48]">
                  NATIONAL &amp; GLOBAL REACH
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Industrial Exhibition Footprint
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/15">
                35+ Host Cities
              </span>
            </div>

            {/* Illustrative City Badges Graphic */}
            <div className="relative z-10 my-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Hyderabad", role: "HITEX Expo Host", icon: "🏛️" },
                { name: "Vijayawada", role: "Novotel Summit", icon: "🏢" },
                { name: "Visakhapatnam", role: "Port City Forum", icon: "⚓" },
                { name: "Bengaluru", role: "Tech Summit", icon: "💡" },
                { name: "Mumbai", role: "Trade Expo", icon: "🌐" },
                { name: "Dubai", role: "Global Convention", icon: "✈️" },
              ].map((pin, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 hover:border-[#E11D48] backdrop-blur-md rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <span className="text-xl mb-1 block">{pin.icon}</span>
                  <h4 className="text-xs font-bold text-white group-hover:text-[#E11D48] transition-colors">
                    {pin.name}
                  </h4>
                  <p className="text-[10px] font-medium text-slate-400 mt-0.5">
                    {pin.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Partnering with TATA Steel Distribution Networks</span>
              <span className="text-[#E11D48] font-bold">1998 — Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
