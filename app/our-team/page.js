"use client";

import React from "react";
import "@/app/page.css";
import Hero from "@/components/our-team/Hero";
import Intro from "@/components/our-team/Intro";
import TeamMembers from "@/components/our-team/TeamMembers";
import Departments from "@/components/our-team/Departments";
import TeamAction from "@/components/our-team/TeamAction";

export default function OurTeamPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#E53935] selection:text-white relative">
      {/* 1. HERO */}
      <Hero />

      {/* 2. INTRODUCTION */}
      <Intro />

      {/* 3. MEET OUR TEAM */}
      <TeamMembers />

      {/* 4. OUR DEPARTMENTS */}
      <Departments />

      {/* 5. TEAM IN ACTION */}
      <TeamAction />

      {/* 6. HOMEPAGE FOOTER (No CTA Section per spec) */}    </main>
  );
}
