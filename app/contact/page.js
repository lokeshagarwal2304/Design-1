"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// 3 Primary Mutyam Steel Location Facilities Data Store
const OFFICE_FACILITIES = [
  {
    id: "head-office",
    title: "Head Office",
    subtitle: "Hyderabad, Telangana",
    address: "Plot No. 2, 1st Floor, Sagar 'X' Road, L.B. Nagar, Hyderabad - 500 074, Telangana.",
    phone: "+91 74167 25999",
    email: "info@mutyamsteel.com",
    hours: "Mon - Sat : 9:30 AM - 6:30 PM",
    sunday: "Sunday : Closed",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2!2d78.552!3d17.348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98a!2sL.B.%20Nagar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 7v14M21 7v14M6 21V11m4 10V11m4 10V11m4 10V11M12 3L2 7h20L12 3z" />
      </svg>
    )
  },
  {
    id: "warehouse",
    title: "Warehouse",
    subtitle: "Shamshabad Yard, Telangana",
    address: "Sy. No.: 31/A/AA(Part), Hamedhullah Nagar Village & Grampanchayat, Shamshabad Mandal, Ranga Reddy District - 501 218, Telangana.",
    phone: "+91 91009 79001",
    email: "yard-hyd@mutyamsteel.com",
    hours: "Mon - Sat : 8:30 AM - 7:00 PM",
    sunday: "Sunday : Closed",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.0!2d78.43!3d17.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d!2sShamshabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35z" />
        <path d="M6 18h12v-7H6v7z" />
      </svg>
    )
  },
  {
    id: "registered-office",
    title: "Registered Office",
    subtitle: "Vijayawada, Andhra Pradesh",
    address: "#Door No: 76-18-70, Temple Street, Iron Complex, Bhavanipuram, Vijayawada - 520 012, Andhra Pradesh.",
    phone: "+91 91009 79002",
    email: "yard-vja@mutyamsteel.com",
    hours: "Mon - Sat : 9:00 AM - 6:00 PM",
    sunday: "Sunday : Closed",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2!2d80.59!3d16.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef!2sBhavanipuram%2C%20Vijayawada!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M8 10h.01M8 14h.01M16 10h.01M16 14h.01" />
      </svg>
    )
  }
];

const INQUIRY_OPTIONS = [
  "General Inquiry",
  "Get a Quote",
  "Bulk Steel Order",
  "Distribution Partnership",
  "Technical & Project Support",
  "Enterprise Solutions"
];

export default function ContactPage() {
  const [selectedFacilityId, setSelectedFacilityId] = useState("head-office");
  const [inquiryType, setInquiryType] = useState("General Inquiry");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const currentLocation = useMemo(() => {
    return OFFICE_FACILITIES.find((f) => f.id === selectedFacilityId) || OFFICE_FACILITIES[0];
  }, [selectedFacilityId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 4000);
  };

  const scrollToBody = () => {
    const bodyElement = document.getElementById("contact-body-section");
    if (bodyElement) {
      bodyElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full min-h-screen bg-white text-slate-800 font-['Manrope'] overflow-x-hidden">
      
      {/* =========================================================================
          1. EXPANDED HERO SECTION (92vh Viewport Height with Wider 1440px Container)
          ========================================================================= */}
      <section className="relative w-full min-h-[90vh] md:min-h-[92vh] bg-slate-50 overflow-hidden flex flex-col justify-between pt-32 pb-12">
        
        {/* Full-bleed Architectural Render Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-hero-bg.png"
            alt="Mutyam Steel Contact Architectural Background"
            fill
            priority
            className="object-cover object-center filter brightness-[1.02] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-3/4" />
        </div>

        {/* Top Hero Text Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 my-auto pt-8">
          <div className="max-w-2xl flex flex-col items-start gap-3">
            
            {/* Easier & Faster Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300/80 backdrop-blur-md shadow-xs mb-1"
            >
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-800">
                Easier &amp; Faster
              </span>
            </motion.div>

            {/* Contact Us Heading with #C3C3C3 Watery Wave Gradient */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-[78px] lg:text-[86px] font-black font-['Space_Grotesk'] tracking-tight leading-[1.04] animate-c3-watery-gradient"
            >
              Contact Us
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#475569] text-base md:text-[20px] font-medium leading-relaxed pt-1 max-w-xl"
            >
              Have a question, need a quote, or planning your next project? We&apos;re here to help you with the best steel solutions.
            </motion.p>
          </div>
        </div>

        {/* Red Bouncing Scroll Down Chevrons */}
        <div
          className="scroll-indicator-chevrons cursor-pointer text-[#E53935] hover:text-[#C62828] transition-colors drop-shadow-md"
          style={{ position: 'absolute', bottom: '130px', right: '48px', zIndex: 30 }}
          onClick={scrollToBody}
        >
          <div className="flex flex-col items-center -space-y-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
              <path d="M7 13l5 5 5-5" />
            </svg>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce delay-150">
              <path d="M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>

        {/* 3 FEATURE CARDS (#C3C3C3 Greyish Background Theme) */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
            
            {/* Card 1: Trusted Quality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#C3C3C3]/50 backdrop-blur-md border border-[#B5B5B5]/60 rounded-2xl p-5 md:p-6 shadow-xs hover:bg-[#C3C3C3]/75 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E53935]/15 text-[#E53935] flex items-center justify-center shrink-0 border border-[#E53935]/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A] font-['Space_Grotesk']">
                  Trusted Quality
                </h4>
                <p className="text-xs font-semibold text-[#334155] mt-1 leading-relaxed">
                  Premium steel you can rely on.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Sustainable Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#C3C3C3]/50 backdrop-blur-md border border-[#B5B5B5]/60 rounded-2xl p-5 md:p-6 shadow-xs hover:bg-[#C3C3C3]/75 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E53935]/15 text-[#E53935] flex items-center justify-center shrink-0 border border-[#E53935]/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A] font-['Space_Grotesk']">
                  Sustainable Growth
                </h4>
                <p className="text-xs font-semibold text-[#334155] mt-1 leading-relaxed">
                  Building a better tomorrow with responsible practices.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Customer First */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#C3C3C3]/50 backdrop-blur-md border border-[#B5B5B5]/60 rounded-2xl p-5 md:p-6 shadow-xs hover:bg-[#C3C3C3]/75 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E53935]/15 text-[#E53935] flex items-center justify-center shrink-0 border border-[#E53935]/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A] font-['Space_Grotesk']">
                  Customer First
                </h4>
                <p className="text-xs font-semibold text-[#334155] mt-1 leading-relaxed">
                  Delivering value that lasts a lifetime.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          2. FULL-WIDTH GREY PATTI / DIVIDER BAR (#E2E8F0 Strip)
          ========================================================================= */}
      <div className="w-full h-12 md:h-14 bg-[#E2E8F0] border-y border-slate-300/80 flex items-center justify-center shadow-inner">
        <div className="max-w-[1440px] w-full px-6 md:px-12 flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-widest">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] animate-pulse" />
            <span className="font-extrabold font-['Space_Grotesk']">MUTYAM STEEL NETWORK</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] font-bold text-slate-500">
            <span>PAN INDIA DISTRIBUTION</span>
            <span>•</span>
            <span>24x7 CUSTOMER SUPPORT</span>
            <span>•</span>
            <span>PREMIUM CERTIFIED QUALITY</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. WIDE & NEAT MAIN BODY SECTION
          ========================================================================= */}
      <section id="contact-body-section" className="relative w-full bg-white py-14 md:py-20">
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* -----------------------------------------------------------------
                LEFT COLUMN (58% / lg:col-span-7): 3 Direct Facility Cards + Info Panel + Map
                ----------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-8"
            >
              
              {/* WHERE ARE YOU LOOKING FOR? */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-['Space_Grotesk']">
                  Where are you looking for?
                </h2>

                {/* 3 DIRECT INTERACTIVE LOCATION CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-40">
                  {OFFICE_FACILITIES.map((facility) => {
                    const isActive = selectedFacilityId === facility.id;
                    return (
                      <button
                        key={facility.id}
                        type="button"
                        onClick={() => setSelectedFacilityId(facility.id)}
                        className={`relative cursor-pointer rounded-2xl p-4 shadow-2xs text-left transition-all duration-300 border ${
                          isActive
                            ? "bg-[#C3C3C3]/80 border-[#E53935] ring-2 ring-[#E53935]/20 shadow-md"
                            : "bg-[#C3C3C3]/40 backdrop-blur-md border-[#B5B5B5]/70 hover:bg-[#C3C3C3]/70 hover:border-[#999999]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-2xs transition-all duration-300 ${
                            isActive
                              ? "bg-[#E53935] text-white border-[#E53935] scale-105"
                              : "bg-white text-slate-700 border-slate-200/80"
                          }`}>
                            {facility.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-[10px] font-extrabold uppercase tracking-wider mb-0.5 text-slate-600 truncate">
                              {facility.subtitle}
                            </span>
                            <div className="text-sm font-black text-[#0F172A] font-['Space_Grotesk'] truncate">
                              {facility.title}
                            </div>
                          </div>
                          {isActive && (
                            <div className="w-6 h-6 rounded-full bg-[#E53935] text-white flex items-center justify-center shrink-0">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>


              {/* UNIFIED ORGANIC CONTACT PANEL & GOOGLE MAP GRID */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch pt-2">
                
                {/* ORGANIC EDITORIAL CONTACT INFORMATION PANE WITH ENHANCED HOVER FEEL & SINGLE LINE HEADER */}
                <div className="md:col-span-5 bg-[#F8F9FA] border border-slate-200/90 rounded-[28px] p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300">
                  
                  {/* Location Title Header */}
                  <div className="pb-3 border-b border-slate-200/80 flex items-center justify-between gap-2 overflow-hidden">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] animate-ping shrink-0" />
                      <h3 className="text-base sm:text-lg font-black text-[#0F172A] font-['Space_Grotesk'] tracking-tight whitespace-nowrap truncate">
                        {currentLocation.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#0F172A] text-white shrink-0 whitespace-nowrap">
                      Active Facility
                    </span>
                  </div>

                  {/* Address Block */}
                  <div className="flex items-start gap-3.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-2xs transition-all duration-200 group/row cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-[#E53935]/10 text-[#E53935] group-hover/row:bg-[#E53935] group-hover/row:text-white flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Address
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">
                        {currentLocation.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone & Email Block */}
                  <div className="grid grid-cols-1 gap-2 pt-2 border-t border-slate-200/70">
                    
                    {/* Phone */}
                    <div className="flex items-center gap-3.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-2xs transition-all duration-200 group/row cursor-pointer">
                      <div className="w-8 h-8 rounded-lg bg-[#E53935]/10 text-[#E53935] group-hover/row:bg-[#E53935] group-hover/row:text-white flex items-center justify-center shrink-0 transition-all duration-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Phone
                        </span>
                        <a href={`tel:${currentLocation.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-black text-[#0F172A] hover:text-[#E53935] transition-colors block font-['Space_Grotesk']">
                          {currentLocation.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-2xs transition-all duration-200 group/row cursor-pointer">
                      <div className="w-8 h-8 rounded-lg bg-[#E53935]/10 text-[#E53935] group-hover/row:bg-[#E53935] group-hover/row:text-white flex items-center justify-center shrink-0 transition-all duration-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Email
                        </span>
                        <a href={`mailto:${currentLocation.email}`} className="text-xs font-bold text-slate-800 hover:text-[#E53935] transition-colors block truncate">
                          {currentLocation.email}
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* Hours Block */}
                  <div className="flex items-start gap-3.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-2xs transition-all duration-200 group/row cursor-pointer pt-2 border-t border-slate-200/70">
                    <div className="w-8 h-8 rounded-lg bg-[#E53935]/10 text-[#E53935] group-hover/row:bg-[#E53935] group-hover/row:text-white flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Working Hours
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                        {currentLocation.hours}
                      </p>
                      <p className="text-[11px] font-extrabold text-[#E53935] mt-0.5">
                        {currentLocation.sunday}
                      </p>
                    </div>
                  </div>

                </div>

                {/* GOOGLE MAP WIDGET */}
                <div className="md:col-span-7 h-[360px] md:h-auto min-h-[360px] rounded-[28px] overflow-hidden border border-slate-200/90 shadow-2xs relative bg-slate-100">
                  <iframe
                    title="Mutyam Steel Location Map"
                    src={currentLocation.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter contrast-[1.03]"
                  />
                </div>

              </div>

            </motion.div>

            {/* -----------------------------------------------------------------
                RIGHT COLUMN (42% / lg:col-span-5): FLOATING WHITE FORM CARD WITH ENHANCED INPUT BORDERS & CUSTOM INQUIRY DROPDOWN
                ----------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-[32px] p-7 sm:p-9 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-5">
                
                {/* Form Header */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-['Space_Grotesk']">
                    Send us a message
                  </h2>
                  <div className="w-8 h-[2.5px] bg-[#E53935] mt-2 mb-2.5" />
                  <p className="text-xs sm:text-sm font-medium text-slate-500 leading-relaxed">
                    Fill in the details below and our team will get back to you as soon as possible.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h4 className="font-bold text-lg">Thank You!</h4>
                    <p className="text-xs font-medium text-emerald-700">Your message has been received. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    
                    {/* Row 1: Full Name & Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      
                      {/* Full Name Input */}
                      <div className="relative group">
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="peer w-full bg-slate-50/80 border border-slate-200/90 hover:border-slate-400 focus:border-[#E53935] focus:bg-white focus:ring-4 focus:ring-[#E53935]/12 rounded-xl px-3.5 py-3 pr-9 text-xs sm:text-sm font-semibold text-[#0F172A] placeholder:text-slate-400 placeholder:font-normal outline-none transition-all duration-200 shadow-2xs"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 peer-focus:text-[#E53935] group-hover:text-slate-600 transition-colors pointer-events-none">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                      </div>

                      {/* Email Address Input */}
                      <div className="relative group">
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="peer w-full bg-slate-50/80 border border-slate-200/90 hover:border-slate-400 focus:border-[#E53935] focus:bg-white focus:ring-4 focus:ring-[#E53935]/12 rounded-xl px-3.5 py-3 pr-9 text-xs sm:text-sm font-semibold text-[#0F172A] placeholder:text-slate-400 placeholder:font-normal outline-none transition-all duration-200 shadow-2xs"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 peer-focus:text-[#E53935] group-hover:text-slate-600 transition-colors pointer-events-none">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </div>
                      </div>

                    </div>

                    {/* Row 2: Phone Number & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      
                      {/* Phone Number Input */}
                      <div className="relative group">
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="peer w-full bg-slate-50/80 border border-slate-200/90 hover:border-slate-400 focus:border-[#E53935] focus:bg-white focus:ring-4 focus:ring-[#E53935]/12 rounded-xl px-3.5 py-3 pr-9 text-xs sm:text-sm font-semibold text-[#0F172A] placeholder:text-slate-400 placeholder:font-normal outline-none transition-all duration-200 shadow-2xs"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 peer-focus:text-[#E53935] group-hover:text-slate-600 transition-colors pointer-events-none">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                      </div>

                      {/* Company Name Input */}
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="peer w-full bg-slate-50/80 border border-slate-200/90 hover:border-slate-400 focus:border-[#E53935] focus:bg-white focus:ring-4 focus:ring-[#E53935]/12 rounded-xl px-3.5 py-3 pr-9 text-xs sm:text-sm font-semibold text-[#0F172A] placeholder:text-slate-400 placeholder:font-normal outline-none transition-all duration-200 shadow-2xs"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 peer-focus:text-[#E53935] group-hover:text-slate-600 transition-colors pointer-events-none">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M3 7v14M21 7v14M6 21V11m4 10V11m4 10V11m4 10V11M12 3L2 7h20L12 3z"/></svg>
                        </div>
                      </div>

                    </div>

                    {/* CUSTOM ENHANCED GENERAL INQUIRY HOVER & CLICK DROPDOWN MENU */}
                    <div className="relative group cursor-pointer">
                      <div className="w-full bg-slate-50/80 border border-slate-200/90 group-hover:border-slate-400 group-hover:bg-white rounded-xl px-3.5 py-3 shadow-2xs flex items-center justify-between transition-all duration-200">
                        <span className="text-xs sm:text-sm font-bold text-[#0F172A] font-['Space_Grotesk']">
                          {inquiryType}
                        </span>
                        <div className="text-slate-400 group-hover:text-[#E53935] group-hover:rotate-180 transition-all duration-300">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                        </div>
                      </div>

                      {/* Floating Inquiry Options Dropdown Menu */}
                      <div className="absolute left-0 right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.12)] space-y-1">
                          {INQUIRY_OPTIONS.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setInquiryType(option)}
                              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                                inquiryType === option
                                  ? "bg-[#E53935]/10 text-[#E53935] font-extrabold"
                                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                              }`}
                            >
                              <span>{option}</span>
                              {inquiryType === option && (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Message Textarea Input */}
                    <div className="relative group">
                      <textarea
                        required
                        rows={4}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="peer w-full bg-slate-50/80 border border-slate-200/90 hover:border-slate-400 focus:border-[#E53935] focus:bg-white focus:ring-4 focus:ring-[#E53935]/12 rounded-xl p-3.5 text-xs sm:text-sm font-semibold text-[#0F172A] placeholder:text-slate-400 placeholder:font-normal outline-none transition-all duration-200 shadow-2xs resize-none"
                      />
                    </div>

                    {/* RED SUBMIT BUTTON WITH LEFT-TO-RIGHT SHIMMER SWEEP EFFECT */}
                    <button
                      type="submit"
                      className="relative overflow-hidden group w-full bg-[#E53935] hover:bg-[#C62828] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-red-500/20 hover:shadow-red-500/35 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                    >
                      {/* Left-to-Right Shimmer Light Sweep Layer */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                      <span className="relative z-10">Send Message</span>
                      <svg className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Privacy Note */}
                    <div className="flex items-center justify-center gap-2 pt-1 text-[#6B7280]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <span className="text-[11px] font-medium">
                        We respect your privacy. Your information is safe with us.
                      </span>
                    </div>

                  </form>
                )}

              </div>
            </motion.div>

          </div>

          {/* =========================================================================
              4. PREMIUM RECTANGLE CTA BANNER (WITH HIGH-VISIBILITY INDUSTRIAL STEEL BG IMAGE)
              ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 md:mt-20 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80"
          >
            {/* Highly-Visible Background Industrial Steel Render Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/contact-hero-bg.png"
                alt="Mutyam Steel Infrastructure Background"
                fill
                priority
                className="object-cover object-center filter brightness-105 contrast-110"
              />
              {/* Subtle translucent dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/35" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 py-10 md:py-12 px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#E53935]/25 backdrop-blur-md border border-[#E53935]/50 text-[#E53935] flex items-center justify-center shrink-0 shadow-inner">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 7v14M21 7v14M6 21V11m4 10V11m4 10V11m4 10V11M12 3L2 7h20L12 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk'] tracking-tight drop-shadow-md">
                    Explore Our Products &amp; Solutions
                  </h3>
                  <p className="text-xs sm:text-base font-semibold text-slate-200 mt-1 max-w-xl drop-shadow-sm">
                    High quality structural steel engineered for every commercial, industrial &amp; infrastructural need.
                  </p>
                </div>
              </div>

              {/* Red Accent CTA Button */}
              <Link
                href="/products"
                className="w-full sm:w-auto text-center bg-[#E53935] hover:bg-[#C62828] text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 transition-all duration-300 shrink-0"
              >
                <span>See Products</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}
