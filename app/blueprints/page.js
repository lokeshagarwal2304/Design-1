import React from "react";
import "@/app/page.css";
import HeroBanner from "@/components/blueprints/HeroBanner";
import StrategicPresence from "@/components/blueprints/StrategicPresence";
import HeadOfficeSection from "@/components/blueprints/HeadOfficeSection";
import RegisteredOfficesSection from "@/components/blueprints/RegisteredOfficesSection";
import DepotsSection from "@/components/blueprints/DepotsSection";
import CtaAssistance from "@/components/blueprints/CtaAssistance";

export const metadata = {
  title: "Regional Offices & Depots | Mutyam Steel Pvt. Ltd.",
  description: "Discover Mutyam Steel's strategic presence: Head Office in Hyderabad, Registered Offices, and Depots across Telangana and Andhra Pradesh.",
};

export default function BlueprintsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] selection:bg-[#E53935] selection:text-white font-sans antialiased">
      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Banner Section */}
        <HeroBanner />

        {/* Section 1: Strategic Presence / Statistics Strip */}
        <StrategicPresence />

        {/* Section 2: Head Office */}
        <HeadOfficeSection />

        {/* Section 3: Registered Offices */}
        <RegisteredOfficesSection />

        {/* Section 4: Depots & Branches */}
        <DepotsSection />

        {/* CTA Assistance Section */}
        <CtaAssistance />
      </main>

      {/* Homepage Footer */}    </div>
  );
}
