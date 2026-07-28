"use client";
import React from "react";

export default function FilterNav({ categories, activeCategory, onSelectCategory }) {
  return (
    <section className="w-full bg-[#FAFAFA] border-b border-gray-200 py-6 sticky top-20 z-30 backdrop-blur-md bg-[#FAFAFA]/90 transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer select-none ${
                  isActive
                    ? "bg-[#0B1320] text-white shadow-md shadow-black/10 -translate-y-0.5"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/80 hover:border-gray-300"
                }`}
              >
                {/* Active Red Dot Indicator */}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                )}
                <span>{cat.label}</span>

                {/* Count Badge */}
                {cat.count !== undefined && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? "bg-[#E11D48] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                )}

                {/* Active Thin Red Bottom Accent Line */}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#E11D48] rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
