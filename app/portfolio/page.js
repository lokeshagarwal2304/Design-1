"use client";

import React, { useState } from "react";
import "@/app/page.css";
import Hero from "@/components/projects/Hero";
import FilterBar from "@/components/projects/FilterBar";
import PortfolioGrid from "@/components/projects/PortfolioGrid";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectStats from "@/components/projects/ProjectStats";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  return (
    <main className="w-full min-h-screen bg-[#FAFAF8] text-[#111111] overflow-x-clip selection:bg-[#D93025] selection:text-white relative">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. STICKY FILTER NAVIGATION */}
      <FilterBar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 3. MAIN PORTFOLIO (3-COLUMN MASONRY GRID) */}
      <PortfolioGrid activeCategory={activeCategory} />

      {/* 4. FEATURED PROJECT SECTION */}
      <FeaturedProject />

      {/* 5. STATISTICS SECTION */}
      <ProjectStats />

      {/* 6. HOMEPAGE FOOTER */}    </main>
  );
}
