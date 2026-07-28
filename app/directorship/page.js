"use client";

import React from "react";
import "@/app/page.css";
import Hero from "@/components/directorship/Hero";
import ExecutiveProfile from "@/components/directorship/ExecutiveProfile";
import QuoteSection from "@/components/directorship/QuoteSection";

export default function DirectorshipPage() {
  return (
    <main className="w-full min-h-screen bg-[#FCFBF8] text-[#111827] overflow-x-clip selection:bg-[#D92D20] selection:text-white relative">
      {/* 1. HERO BANNER */}
      <Hero />

      {/* 2. EXECUTIVE PROFILE */}
      <ExecutiveProfile />

      {/* 3. QUOTE SECTION */}
      <QuoteSection />
    </main>
  );
}
