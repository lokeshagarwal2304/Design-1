"use client";

import React from "react";
import "@/app/page.css";
import Hero from "@/components/csr/Hero";
import OurResponsibility from "@/components/csr/OurResponsibility";
import InfiniteGallery from "@/components/csr/InfiniteGallery";
import FeaturedStory from "@/components/csr/FeaturedStory";
import QuoteBanner from "@/components/csr/QuoteBanner";

export default function CSRPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F5] text-[#111111] overflow-x-clip selection:bg-[#D63A2F] selection:text-white relative">
      {/* 1. HERO */}
      <Hero />

      {/* 2. OUR RESPONSIBILITY */}
      <OurResponsibility />

      {/* 3. INFINITE GALLERY (MOMENTS THAT MATTER) */}
      <InfiniteGallery />

      {/* 4. FEATURED STORY */}
      <FeaturedStory />

      {/* 5. QUOTE BANNER */}
      <QuoteBanner />
    </main>
  );
}
