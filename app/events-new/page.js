"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Animated Counter Component
function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp = null;
    let cancelled = false;
    const step = (timestamp) => {
      if (cancelled) return;
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    return () => {
      cancelled = true;
    };
  }, [started, end, duration]);

  return <span ref={ref}>{count}</span>;
}

const STATS = [
  {
    value: 85,
    suffix: "+",
    label: "Events Attended",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    value: 18,
    suffix: "",
    label: "Industry Awards",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
  },
  {
    value: 12,
    suffix: "",
    label: "Cities Covered",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    value: 25000,
    suffix: "+",
    label: "Visitors Engaged",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

const UPCOMING_EVENTS = [
  {
    day: "24",
    month: "MAY",
    year: "2026",
    title: "Steel Construction Summit 2026",
    location: "Hyderabad, India",
    link: "#register",
  },
  {
    day: "07",
    month: "JUN",
    year: "2026",
    title: "BuildTech Exhibition 2026",
    location: "Bengaluru, India",
    link: "#register",
  },
  {
    day: "19",
    month: "JUN",
    year: "2026",
    title: "Infrastructure Leaders Meet",
    location: "Mumbai, India",
    link: "#register",
  },
  {
    day: "02",
    month: "JUL",
    year: "2026",
    title: "Mutyam Excellence Awards 2026",
    location: "Hyderabad, India",
    link: "#register",
  },
  {
    day: "15",
    month: "AUG",
    year: "2026",
    title: "National Dealer Conclave 2026",
    location: "New Delhi, India",
    link: "#register",
  },
  {
    day: "10",
    month: "SEP",
    year: "2026",
    title: "Structural Engineers Forum",
    location: "Chennai, India",
    link: "#register",
  },
];

const JOURNEY_EVENTS = [
  {
    year: "2025",
    category: "Conferences",
    title: "Global Steel Conference",
    location: "New Delhi, India",
    image: "/Bandhan-event.jpeg",
  },
  {
    year: "2025",
    category: "Exhibitions",
    title: "Industrial Innovation Expo",
    location: "Pune, India",
    image: "/Session meet.png",
  },
  {
    year: "2024",
    category: "Awards",
    title: "Engineering Excellence Awards",
    location: "Chennai, India",
    image: "/Best-dealer-AP-77-2.png",
  },
  {
    year: "2024",
    category: "Exhibitions",
    title: "FutureBuild Exhibition",
    location: "Hyderabad, India",
    image: "/NSPL-dealer-meet.png",
  },
  {
    year: "2024",
    category: "Meets",
    title: "Builders Conclave",
    location: "Kolkata, India",
    image: "/Cultural-1.jpeg",
  },
  {
    year: "2023",
    category: "Meets",
    title: "Steel Partnership Meet",
    location: "Bengaluru, India",
    image: "/Dubai-trip-1.jpeg",
  },
];

const JOURNEY_CATEGORIES = ["All Events", "Exhibitions", "Conferences", "Awards", "Meets"];

const AWARDS = [
  {
    title: "Best Dealer 2025",
    organization: "Tata Steel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#C29B38]">
        <path d="M12 21.5c-4.5 0-7-2.5-7-7 0-3.5 2-6 5-7.5l2 1.5 2-1.5c3 1.5 5 4 5 7.5 0 4.5-2.5 7-7 7z"/>
        <path d="M8 10a4 4 0 0 1 8 0"/>
      </svg>
    ),
  },
  {
    title: "Innovation Partner",
    organization: "BuildTech India",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#C29B38]">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
  },
  {
    title: "Top Distributor 2024",
    organization: "Tata Steel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#C29B38]">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

const INSTAGRAM_PHOTOS = [
  { id: 1, image: "/Bandhan-1.jpeg", caption: "Steel Expo Delegation" },
  { id: 2, image: "/Cultural-1.jpeg", caption: "Architects Meet 2025" },
  { id: 3, image: "/DUbai-meer.jpeg", caption: "International Summit" },
  { id: 4, image: "/Session meet.png", caption: "Knowledge Sharing Session" },
  { id: 5, image: "/cultural meetup.jpeg", caption: "Team Excellence Award" },
  { id: 6, image: "/Vietnam-trip.jpeg", caption: "Partnership Gala 2024" },
];

export default function EventsNewPage() {
  const [selectedJourneyCat, setSelectedJourneyCat] = useState("All Events");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const filteredJourneyEvents = selectedJourneyCat === "All Events"
    ? JOURNEY_EVENTS
    : JOURNEY_EVENTS.filter((e) => e.category === selectedJourneyCat);

  return (
    <main className="w-full min-h-screen bg-[#FAF8F4] text-[#0F172A] selection:bg-[#5B50D6] selection:text-white pt-0 pb-16 font-['Manrope'] overflow-x-hidden">
      
      {/* ── 1. HERO SECTION (Full-bleed Background Image with Watery Gradient & Bouncing Arrows) ── */}
      <section className="relative w-full min-h-[660px] md:min-h-[720px] bg-[#FAF8F4] overflow-hidden flex items-center mb-12">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Events/banner-img.png"
            alt="Mutyam Steel Events Banner"
            fill
            priority
            className="object-cover object-center opacity-100"
          />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto w-full px-6 md:px-[60px] pt-[80px] md:pt-[100px] pb-16">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B50D6]/10 border border-[#5B50D6]/20 mb-6 backdrop-blur-sm shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#5B50D6]" />
            <span className="text-[12px] font-extrabold tracking-widest uppercase text-[#5B50D6]">
              EVENTS & ENGAGEMENTS
            </span>
          </motion.div>

          {/* Heading with Watery Gradient */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[42px] sm:text-[56px] md:text-[68px] font-bold font-['Space_Grotesk'] text-[#0F172A] leading-[1.06] tracking-tight mb-5 max-w-[900px]"
          >
            Building Relationships, <br />
            <span className="animate-watery-gradient font-black tracking-tight drop-shadow-md">
              Growing more.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#475569] text-[17px] md:text-[19px] leading-[1.65] max-w-[620px] mb-9 font-medium font-['Manrope']"
          >
            From global expos to customer meets, discover how Mutyam Steel connects, collaborates and grows stronger with every event we take part in.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#upcoming"
              className="inline-flex items-center gap-2.5 bg-[#5B50D6] hover:bg-[#4C42C7] text-white text-[14.5px] font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Events</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Floating 3 Animated Down-Arrows in Bottom Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:flex flex-col items-center justify-center absolute bottom-10 right-14 z-30 cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => {
            const sec = document.getElementById("impact-strip");
            if (sec) sec.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#5B50D6] animate-bounce filter drop-shadow-lg" />
          <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#818CF8] animate-bounce [animation-delay:150ms] -mt-5 filter drop-shadow-lg" />
          <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-[#38BDF8] animate-bounce [animation-delay:300ms] -mt-5 filter drop-shadow-lg" />
        </motion.div>
      </section>

      {/* ── 2. COMPANY IMPACT STRIP (Overlapping Floating Glass Metrics Card) ── */}
      <section id="impact-strip" className="relative z-30 w-full px-6 md:px-[60px] -mt-28 md:-mt-32 mb-16">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-2xl p-6 md:p-8 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 px-3 md:px-8 ${
                  i !== 0 ? "md:border-l md:border-[#E2E8F0]" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#5B50D6]/10 text-[#5B50D6] flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-[28px] md:text-[34px] font-bold font-['Space_Grotesk'] text-[#0F172A] leading-none mb-1">
                    <CountUp end={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-[12.5px] font-bold text-[#64748B] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. FEATURED EVENT SHOWCASE (Deep Navy Card) ── */}
      <section className="w-full px-6 md:px-[60px] mb-16">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-[#0F172A] via-[#1E1B3A] to-[#0F172A] border border-[#5B50D6]/30 rounded-3xl p-5 md:p-6 lg:p-7 text-white shadow-2xl flex flex-col lg:flex-row gap-6 lg:gap-10 items-center"
          >
            {/* Left Image */}
            <div className="relative w-full lg:w-[48%] h-[240px] sm:h-[280px] md:h-[300px] lg:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-white/10 shrink-0">
              <Image
                src="/Events/banner-img.png"
                alt="Steel Expo 2026 Booth"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Right Info */}
            <div className="w-full lg:w-[52%] flex flex-col justify-between py-1">
              <div>
                {/* Header row + Nav arrows */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#A5B4FC]">
                    FEATURED EVENT
                  </span>
                  <div className="flex items-center gap-2.5 mr-3">
                    <button className="w-9 h-9 rounded-full bg-white text-[#0F172A] shadow-md hover:bg-slate-100 hover:scale-105 flex items-center justify-center transition-all cursor-pointer" aria-label="Previous event">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <button className="w-9 h-9 rounded-full bg-white text-[#0F172A] shadow-md hover:bg-slate-100 hover:scale-105 flex items-center justify-center transition-all cursor-pointer" aria-label="Next event">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[36px] font-bold font-['Space_Grotesk'] text-white leading-tight mb-2">
                  Steel Expo 2026
                </h2>

                <div className="flex items-center gap-2 text-[#CBD5E1] text-[13px] font-medium mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-[#818CF8]">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Hyderabad, India</span>
                </div>

                <div className="h-px w-full bg-white/10 mb-4" />

                {/* Event Highlights Grid */}
                <div className="grid grid-cols-3 gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#818CF8] mb-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                      <span className="text-[18px] md:text-[22px] font-bold font-['Space_Grotesk'] text-white">1500+</span>
                    </div>
                    <span className="text-[11.5px] font-medium text-[#94A3B8]">Visitors</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-[#818CF8] mb-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <span className="text-[18px] md:text-[22px] font-bold font-['Space_Grotesk'] text-white">300+</span>
                    </div>
                    <span className="text-[11.5px] font-medium text-[#94A3B8]">Industry Leaders</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-[#818CF8] mb-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4"><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                      <span className="text-[18px] md:text-[22px] font-bold font-['Space_Grotesk'] text-white">50+</span>
                    </div>
                    <span className="text-[11.5px] font-medium text-[#94A3B8]">Exhibitors</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0F172A] font-extrabold text-[13.5px] shadow-md hover:bg-[#EDE9FE] hover:text-[#5B50D6] hover:scale-105 transition-all cursor-pointer group"
                >
                  <span>View Gallery</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. 2-COLUMN MAIN ROW (Upcoming Events + Our Journey) ── */}
      <section id="upcoming" className="w-full px-6 md:px-[60px] mb-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT: Upcoming Events (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-6">
              <h2 className="text-[24px] md:text-[28px] font-bold font-['Space_Grotesk'] text-[#0F172A]">
                Upcoming Events
              </h2>
            </div>

            <div className="bg-[#F3F0FF] border border-[#DDD6FE] rounded-2xl p-3 md:p-3.5 shadow-xs">
              <div className="flex flex-col gap-2 max-h-[415px] overflow-y-auto pr-1 style-scrollbar">
                {UPCOMING_EVENTS.map((event, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-white border border-[#E2E8F0] hover:border-[#5B50D6] rounded-xl p-3 flex items-center justify-between gap-3 transition-all shadow-2xs hover:shadow-md group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Date Badge */}
                      <div className="w-12 h-12 rounded-lg bg-[#5B50D6]/10 text-[#5B50D6] flex flex-col items-center justify-center shrink-0 border border-[#5B50D6]/20">
                        <span className="text-[16px] font-extrabold font-['Space_Grotesk'] leading-none">
                          {event.day}
                        </span>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider mt-0.5">
                          {event.month}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <h3 className="text-[14.5px] font-extrabold font-['Manrope'] text-[#0F172A] truncate group-hover:text-[#5B50D6] transition-colors mb-0.5">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[#475569] text-[12px] font-bold">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 text-[#5B50D6] shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href={event.link}
                      className="shrink-0 px-3 py-1.5 rounded-lg border border-[#5B50D6]/30 text-[#5B50D6] hover:bg-[#5B50D6] hover:text-white text-[11px] font-extrabold transition-all flex items-center gap-1"
                    >
                      <span>View Event</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3"><polyline points="9 18 15 12 9 6"/></svg>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Our Journey Gallery (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-[24px] md:text-[28px] font-bold font-['Space_Grotesk'] text-[#0F172A]">
                Our Journey
              </h2>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {JOURNEY_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedJourneyCat(cat)}
                    className={`px-3 py-1 rounded-full text-[11.5px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedJourneyCat === cat
                        ? "bg-[#5B50D6] text-white shadow-xs"
                        : "bg-white border border-[#E2E8F0] text-[#64748B] hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 6 Event Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredJourneyEvents.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0F172A] shadow-xs cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-85 group-hover:scale-108 group-hover:opacity-100 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Year Tag Top Left */}
                  <div className="absolute top-2.5 left-2.5 z-10 bg-[#5B50D6] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs">
                    {item.year}
                  </div>

                  {/* Content Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                    <h4 className="text-[13px] font-bold font-['Space_Grotesk'] leading-tight mb-0.5 group-hover:text-[#818CF8] transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[10.5px] text-[#CBD5E1] font-medium block">
                      📍 {item.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="inline-flex items-center gap-2 border border-[#E2E8F0] bg-white text-[#5B50D6] hover:border-[#5B50D6] hover:bg-[#5B50D6] hover:text-white px-6 py-2.5 rounded-xl text-[12.5px] font-bold shadow-xs transition-all cursor-pointer">
                <span>Explore More Moments</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

        </div>
      </section>



      {/* ── 6. 2-COLUMN BOTTOM ROW (Event Highlight Video + Let's Connect Handshake) ── */}
      <section className="w-full px-6 md:px-[60px] mb-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT: Event Highlight Video Card (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[#0F172A]/10 bg-[#0F172A] flex flex-col justify-between p-6 text-white group cursor-pointer"
            onClick={() => setIsPlayingVideo(!isPlayingVideo)}
          >
            <Image
              src="/Events/banner-img.png"
              alt="Steel Expo 2025 Highlight"
              fill
              className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

            {/* Tagline Top */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-white/90 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                EVENT HIGHLIGHT
              </span>
            </div>

            {/* Play Button Center */}
            <div className="relative z-10 my-auto self-center">
              <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-[#5B50D6] transition-all shadow-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 ml-1">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10">
              <h3 className="text-[22px] md:text-[26px] font-bold font-['Space_Grotesk'] mb-1">
                Steel Expo 2025
              </h3>
              <p className="text-[13px] text-[#CBD5E1] font-medium">
                Relive the best moments of our flagship exhibition
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Let's Connect Handshake Card (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 relative rounded-2xl bg-white border border-[#E2E8F0] p-8 md:p-10 shadow-sm flex flex-col justify-between overflow-hidden"
          >
            {/* Handshake Background Vector Line Art */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-15 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth={1} className="w-full h-full text-[#5B50D6]">
                <path d="M 40 100 C 60 80, 80 80, 100 100 C 120 120, 140 120, 160 100" />
                <path d="M 20 120 C 50 90, 90 110, 130 90 C 150 80, 170 100, 190 90" />
              </svg>
            </div>

            <div className="relative z-10 max-w-[420px]">
              <h2 className="text-[28px] md:text-[34px] font-bold font-['Space_Grotesk'] text-[#0F172A] leading-tight mb-3">
                Let&apos;s Connect
              </h2>
              <p className="text-[#64748B] text-[14px] leading-relaxed mb-8 font-medium">
                Have an event in mind or want to collaborate with us? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#5B50D6] hover:bg-[#4C42C7] text-white text-[13.5px] font-bold px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Get In Touch</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
