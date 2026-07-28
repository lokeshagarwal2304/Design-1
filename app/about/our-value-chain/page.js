"use client";

import React, { useEffect } from "react";
import HeroSection from "@/components/value-chain/HeroSection";
import StickyNav from "@/components/value-chain/StickyNav";
import Section01_Strategy from "@/components/value-chain/Section01_Strategy";
import Section02_InteractiveChain from "@/components/value-chain/Section02_InteractiveChain";
import Section03_Operational from "@/components/value-chain/Section03_Operational";
import Section04_Quality from "@/components/value-chain/Section04_Quality";
import Section05_Impact from "@/components/value-chain/Section05_Impact";
import Section06_CTA from "@/components/value-chain/Section06_CTA";

export default function OurValueChainPage() {
  
  // Basic smooth scroll setup for internal links if needed
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="bg-[#FAF8F5] min-h-screen relative">      <HeroSection />
      <StickyNav />
      <Section01_Strategy />
      <Section02_InteractiveChain />
      <Section03_Operational />
      <Section04_Quality />
      <Section05_Impact />
      <Section06_CTA />    </main>
  );
}
