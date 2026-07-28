import React from "react";
import "@/app/page.css";
import HeroBanner from "@/components/warehouses/HeroBanner";
import StatisticsStrip from "@/components/warehouses/StatisticsStrip";
import OverviewSection from "@/components/warehouses/OverviewSection";
import FacilitiesFeaturesSection from "@/components/warehouses/FacilitiesFeaturesSection";
import InsideWarehouseGallery from "@/components/warehouses/InsideWarehouseGallery";
import CtaOrangeAssistance from "@/components/warehouses/CtaOrangeAssistance";

export const metadata = {
  title: "Warehousing Facilities | Mutyam Steel Pvt. Ltd.",
  description: "State-of-the-art warehousing infrastructure to store, protect and manage steel products with efficiency and care across India.",
};

export default function WarehousesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] selection:bg-[#F97316] selection:text-white font-sans antialiased">
      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Banner Section */}
        <HeroBanner />

        {/* Section 1: Statistics Strip */}
        <StatisticsStrip />

        {/* Section 2: Overview */}
        <OverviewSection />

        {/* Section 3: Facilities & Features */}
        <FacilitiesFeaturesSection />

        {/* Section 4: Inside Our Warehousing Facilities (Gallery) */}
        <InsideWarehouseGallery />

        {/* Section 5: Orange CTA Assistance */}
        <CtaOrangeAssistance />
      </main>

      {/* Homepage Footer */}    </div>
  );
}
