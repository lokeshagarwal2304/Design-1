"use client";

import React, { useState } from "react";
import "@/app/page.css";
import Hero from "@/components/projects/Hero";
import CategoryBar from "@/components/projects/CategoryBar";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import TrustStrip from "@/components/projects/TrustStrip";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filters, setFilters] = useState({
    year: "all",
    product: "all",
    scale: "all",
  });

  return (
    <main className="w-full min-h-screen bg-white text-[#111111] overflow-x-clip selection:bg-[#D62E2E] selection:text-white">
      {/* Hero — Heading + Description + Stats */}
      <Hero />

      {/* Category Bar — Capsule track nav + Interactive Filter Modal */}
      <CategoryBar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        filters={filters}
        onUpdateFilters={setFilters}
      />

      {/* Projects Grid — Filtered cards with Lightbox Modal */}
      <ProjectsGrid
        activeCategory={activeCategory}
        filters={filters}
      />

      {/* Trust Strip — 5 feature highlights */}
      <TrustStrip />

      {/* CTA Banner */}
      <ProjectsCTA />
    </main>
  );
}
