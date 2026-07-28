"use client";

import React, { useState } from "react";
import "@/app/page.css";
import HeroBanner from "@/components/events/HeroBanner";
import FilterNav from "@/components/events/FilterNav";
import FeaturedEvent from "@/components/events/FeaturedEvent";
import EventGrid from "@/components/events/EventGrid";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import StatsStrip from "@/components/events/StatsStrip";
import MemoriesGallery from "@/components/events/MemoriesGallery";
import PresenceMap from "@/components/events/PresenceMap";
import EventsCTA from "@/components/events/EventsCTA";

const CATEGORIES = [
  { id: "all", label: "All Events", count: 24 },
  { id: "upcoming", label: "Upcoming Events", count: 3 },
  { id: "dealer-meets", label: "Dealer Meets", count: 8 },
  { id: "exhibitions", label: "Exhibitions & Expos", count: 6 },
  { id: "plant-visits", label: "Plant Visits", count: 4 },
  { id: "csr", label: "CSR Programs", count: 3 },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <main className="w-full min-h-screen bg-white text-[#0B1320] overflow-x-hidden selection:bg-[#E11D48] selection:text-white">
      {/* 2. Hero Banner */}
      <HeroBanner />

      {/* 3. Section 1: Filter Navigation Chips */}
      <FilterNav
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 4. Section 2: Featured Event Spotlight */}
      <FeaturedEvent />

      {/* 5. Section 3: Recent Events Collection Grid */}
      <EventGrid activeCategory={activeCategory} />

      {/* 6. Section 4: Upcoming Events Timeline */}
      <UpcomingEvents />

      {/* 7. Section 5: Statistics Strip */}
      <StatsStrip />

      {/* 8. Section 6: Visual Memories Gallery */}
      <MemoriesGallery />

      {/* 9. Section 7: Our Event Footprint Presence Map */}
      <PresenceMap />

      {/* 10. Section 8: Corporate Call to Action */}
      <EventsCTA />

      {/* 11. Universal Site Footer */}    </main>
  );
}
