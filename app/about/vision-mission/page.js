"use client";

import React from "react";
import "@/app/page.css";
import Hero from "@/components/vision-mission/Hero";
import VisionMissionCards from "@/components/vision-mission/VisionMissionCards";
import CoreValuesJourney from "@/components/vision-mission/CoreValuesJourney";
import SplitValuesProcess from "@/components/vision-mission/SplitValuesProcess";
import QuoteBanner from "@/components/vision-mission/QuoteBanner";

export default function VisionMissionPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#E53935] selection:text-white relative">
      {/* 1. HERO BANNER */}
      <Hero />

      {/* 2. VISION + MISSION CARDS */}
      <VisionMissionCards />

      {/* 3. CORE VALUES JOURNEY */}
      <CoreValuesJourney />

      {/* 4. SPLIT VALUES ACCORDION + PROCESS TIMELINE */}
      <SplitValuesProcess />

      {/* 5. QUOTE BANNER */}
      <QuoteBanner />
    </main>
  );
}
