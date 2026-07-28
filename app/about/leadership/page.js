"use client";

import React from "react";
import "@/app/page.css";
import Hero from "@/components/leadership/Hero";
import LeaderProfile from "@/components/leadership/LeaderProfile";
import LeadershipPhilosophy from "@/components/leadership/LeadershipPhilosophy";

export default function LeadershipPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#EF4444] selection:text-white relative">
      {/* 1. HERO */}
      <Hero />

      {/* 2. LEADER PROFILE */}
      <LeaderProfile />

      {/* 3. LEADERSHIP PHILOSOPHY */}
      <LeadershipPhilosophy />

      {/* 4. HOMEPAGE FOOTER */}    </main>
  );
}
