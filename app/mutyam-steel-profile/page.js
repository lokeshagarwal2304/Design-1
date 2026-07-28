"use client";

import React from "react";
import "@/app/page.css";
import Hero from "@/components/mutyam-profile/Hero";
import FounderQuote from "@/components/mutyam-profile/FounderQuote";
import Story from "@/components/mutyam-profile/Story";
import Stats from "@/components/mutyam-profile/Stats";
import Timeline from "@/components/mutyam-profile/Timeline";
import Industries from "@/components/mutyam-profile/Industries";
import Hyderabad from "@/components/mutyam-profile/Hyderabad";
import CTA from "@/components/mutyam-profile/CTA";

export default function MutyamSteelProfilePage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#EF4444] selection:text-white relative font-['Space_Grotesk']">
      {/* 1. HERO (Sticky Pinned Background Layer) */}
      <Hero />

      {/* 2. FOUNDER QUOTE (Overlapping Stack-Parallax Card Layer) */}
      <FounderQuote />

      {/* 3. OUR STORY */}
      <Story />

      {/* 4. STATS */}
      <Stats />

      {/* 5. TIMELINE */}
      <Timeline />

      {/* 6. INDUSTRIES */}
      <Industries />

      {/* 7. HYDERABAD & OVERVIEW */}
      <Hyderabad />

      {/* 8. CTA */}
      <CTA />

      {/* 9. FOOTER */}    </main>
  );
}
