import React, { useState, useEffect, useCallback } from 'react';

// ==========================================
// 1. FeaturedNewsCarousel Component
// ==========================================
const NEWS_SLIDES = [
  {
    tag: "BREAKING NEWS",
    tagColor: "bg-red-600/20 text-red-400 border-red-500/30",
    headline: "JSW Steel Begins Work on ₹16,350 Cr Rayalaseema Green Steel Plant in Andhra Pradesh",
    summary: "Using Electric Arc Furnace technology with 3,850 MW renewable energy — India's largest EAF-based green steel project.",
    date: "July 3, 2026",
    source: "Business Standard",
    img: "/banner-8.webp",
    link: "#contact",
  },
  {
    tag: "INDUSTRY EVENT",
    tagColor: "bg-blue-600/20 text-blue-300 border-blue-400/30",
    headline: "Tata Structura Fabricator Meet 2025 — Innovation in Hollow Section Steel",
    summary: "Architects, fabricators & industry leaders gathered to discuss sustainable structural steel solutions and the future of hollow sections in Indian construction.",
    date: "2025 | Pan-India",
    source: "Tata Structura",
    img: "/banner-1.png",
    link: "#contact",
  },
  {
    tag: "POLICY UPDATE",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    headline: "India Extends 12% Safeguard Duty on Steel Flat Products to Protect Domestic Industry",
    summary: "Government makes the safeguard duty definitive for 3 years. Anti-dumping duty on hollow sections from China extended till Jan 2027.",
    date: "Dec 2025 | Ministry of Steel",
    source: "CBIC Notification",
    img: "/banner-4.png",
    link: "#contact",
  },
  {
    tag: "MARKET ALERT",
    tagColor: "bg-green-600/20 text-green-300 border-green-400/30",
    headline: "Steel Prices Ease by ₹1,000–3,000/Tonne in July: Best Time to Buy for Your Project",
    summary: "TMT rebar now at ₹53,000–65,000/tonne (wholesale). Monsoon season slowdown creates buyer opportunity — stock up before festive season demand spike.",
    date: "July 2026 | BigMint",
    source: "Market Report",
    img: "/banner-3.png",
    link: "#contact",
  },
];

export function FeaturedNewsCard() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % NEWS_SLIDES.length);
  }, []);

  const goTo = (idx) => setCurrent(idx);

  // Auto-slide every 4s, pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  const slide = NEWS_SLIDES[current];

  return (
    <div
      className="relative group overflow-hidden rounded-[20px] shadow-[0_12px_24px_-8px_rgba(0,0,0,0.12)] bg-black h-[340px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {NEWS_SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={s.img}
            alt={s.headline}
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[8000ms] ease-linear"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
        </div>
      ))}

      {/* Category Tag */}
      <div className="absolute top-5 left-5 z-20">
        <span className={`${slide.tagColor} backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-widest rounded-md uppercase border`}>
          {slide.tag}
        </span>
      </div>

      {/* Date & Source top-right */}
      <div className="absolute top-5 right-5 z-20 text-right">
        <span className="text-[10px] text-slate-300 font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">{slide.date}</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-12 left-6 right-6 z-20 text-left">
        <h3 className="text-white drop-shadow-lg text-lg lg:text-xl font-bold leading-snug tracking-tight mb-2 line-clamp-2">
          {slide.headline}
        </h3>
        <p className="text-slate-200 drop-shadow-md text-[11px] leading-relaxed mb-3 line-clamp-2 opacity-95">
          {slide.summary}
        </p>
        <a href={slide.link} className="inline-flex items-center gap-1 text-[#38bdf8] font-bold text-xs hover:text-sky-300 transition-colors duration-300">
          Read More <span>→</span>
        </a>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2">
        {NEWS_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? 'w-6 h-2 bg-white'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 right-6 z-20">
        <span className="text-[10px] text-white/50 font-mono">{current + 1} / {NEWS_SLIDES.length}</span>
      </div>
    </div>
  );
}


// ==========================================
// 2. EventsGrid Component
// ==========================================
export function EventsGrid() {
  const events = [
    {
      title: "Team Meetup",
      location: "Mutyam Steel",
      img: "/cultural meetup.jpeg",
      featured: true,
    },
    {
      title: "Dubai Meeting",
      location: "Dubai, UAE",
      img: "/DUbai-meer.jpeg",
    },
    {
      title: "Representing Mutyam at Vietnam",
      location: "Vietnam",
      img: "/Vietnam-trip.jpeg",
    },
    {
      title: "Mutyam Steel Dealers Meet",
      location: "India",
      img: "/NSPL-dealer-meet.png",
    },
    {
      title: "Bandhan Meetup",
      location: "Mutyam Steel",
      img: "/Bandhan-event.jpeg",
    },
  ];

  const [featured, ...rest] = events;

  return (
    <div className="flex flex-col gap-3 h-[340px] w-full">
      {/* Featured Card — Full Width Top */}
      <div className="relative group overflow-hidden rounded-[14px] shadow-[0_8px_16px_rgba(0,0,0,0.08)] bg-slate-900 flex-shrink-0 h-[140px] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_28px_-4px_rgba(0,0,0,0.18)]">
        <img
          src={featured.img}
          alt={featured.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
        <div className="absolute bottom-3 left-4 right-4 text-left">
          <h4 className="text-white drop-shadow-md text-sm font-bold leading-snug mb-0.5">{featured.title}</h4>
          <span className="text-[10px] drop-shadow-sm text-slate-200 font-medium">{featured.location}</span>
        </div>
        {/* Live badge */}
        <div className="absolute top-3 left-4">
          <span className="bg-green-500/20 backdrop-blur-sm text-green-300 text-[9px] font-bold px-2 py-0.5 rounded-full border border-green-400/30 uppercase tracking-wider">
            ● Team
          </span>
        </div>
      </div>

      {/* 4 Smaller Cards — 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {rest.map((event, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-[12px] shadow-[0_6px_12px_rgba(0,0,0,0.06)] bg-slate-900 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_24px_-4px_rgba(0,0,0,0.15)]"
          >
            <img
              src={event.img}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <h4 className="text-white drop-shadow-md text-[11px] font-bold leading-snug mb-0.5 line-clamp-2">{event.title}</h4>
              <span className="text-[9px] drop-shadow-sm text-slate-200 font-medium">{event.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 3. NewsSection Component
// ==========================================
export function NewsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
      {/* Left Column: Latest News */}
      <div className="flex flex-col items-start gap-5">
        <h2 className="text-2xl font-extrabold text-[#101d2c] tracking-tight text-left">
          Latest from Mutyam Steel
        </h2>
        <FeaturedNewsCard />
        <a
          href="/events"
          className="inline-flex items-center justify-center gap-1.5 bg-[#0066ff] hover:bg-[#0052cc] text-white px-6 py-3.5 text-xs font-semibold rounded-[10px] shadow-[0_6px_16px_-4px_rgba(0,102,255,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_20px_-2px_rgba(0,102,255,0.5)]"
        >
          Explore All Updates
          <span className="text-sm font-normal">→</span>
        </a>
      </div>

      {/* Right Column: Events & Exhibitions */}
      <div className="flex flex-col items-start gap-5">
        <div className="w-full text-left">
          <h2 className="text-2xl font-extrabold text-[#101d2c] tracking-tight">
            Where We've Been
          </h2>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Events & Exhibitions
            </span>
          </div>
          {/* Blue underline */}
          <div className="w-16 h-[2px] bg-[#0066ff] mt-1.5" />
        </div>
        <EventsGrid />
      </div>
    </div>
  );
}

// ==========================================
// 4. StickyArticleCard Component
// ==========================================

// Inject heartbeat keyframe once
const HeartbeatStyle = () => (
  <style>{`
    @keyframes heartbeat {
      0%   { transform: scale(1) var(--card-rotate); }

      /* 1st single beat */
      6%   { transform: scale(1.055) var(--card-rotate); }
      12%  { transform: scale(1)     var(--card-rotate); }

      /* pause */
      22%  { transform: scale(1)     var(--card-rotate); }

      /* triple beats — 1 by 1 rapid */
      27%  { transform: scale(1.035) var(--card-rotate); }
      31%  { transform: scale(1)     var(--card-rotate); }
      36%  { transform: scale(1.035) var(--card-rotate); }
      40%  { transform: scale(1)     var(--card-rotate); }
      45%  { transform: scale(1.035) var(--card-rotate); }
      49%  { transform: scale(1)     var(--card-rotate); }

      /* long rest */
      100% { transform: scale(1)     var(--card-rotate); }
    }
    .sticky-card-heartbeat {
      animation: heartbeat 3.4s ease-in-out infinite;
    }
    .sticky-card-heartbeat:hover {
      animation: none;
      transform: var(--card-rotate) scale(1.06);
    }
  `}</style>
);

export function StickyArticleCard({ title, img, color, rotation, delay = 0, idx = 0 }) {
  const uid = `pin-${idx}`;
  return (
    <>
      <HeartbeatStyle />
      {/*
        Outer wrapper: overflow-visible so pin can poke above the card,
        padding-top gives space for the pin to float above.
      */}
      <div
        style={{ transform: `rotate(${rotation}deg)`, animationDelay: `${delay}s` }}
        className="sticky-card-heartbeat relative group cursor-pointer"
      >
        {/* ===== 3D PUSH PIN ===== */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-transform duration-400 group-hover:-translate-y-1.5 group-hover:scale-110"
          style={{ top: '-16px' }}
        >
          <svg
            width="30"
            height="34"
            viewBox="0 0 44 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter:
                'drop-shadow(0 5px 6px rgba(0,0,0,0.38)) drop-shadow(0 2px 2px rgba(0,0,0,0.22))',
            }}
          >
            <defs>
              <radialGradient id={`${uid}-cap`} cx="36%" cy="28%" r="64%">
                <stop offset="0%" stopColor="#ff9999" />
                <stop offset="25%" stopColor="#e60000" />
                <stop offset="100%" stopColor="#6a0000" />
              </radialGradient>
              <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6a0000" />
                <stop offset="30%" stopColor="#ff2222" />
                <stop offset="70%" stopColor="#cc0000" />
                <stop offset="100%" stopColor="#4a0000" />
              </linearGradient>
              <linearGradient id={`${uid}-collar`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#770000" />
                <stop offset="100%" stopColor="#330000" />
              </linearGradient>
              <linearGradient id={`${uid}-needle`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7a8190" />
                <stop offset="45%" stopColor="#ebebeb" />
                <stop offset="100%" stopColor="#4a5260" />
              </linearGradient>
            </defs>

            {/* Needle shadow */}
            <path d="M23 29 L25 46 L20.5 29 Z" fill="black" opacity="0.12" />
            {/* Needle shaft */}
            <path
              d="M21 28.5 L21 44 C21 44.8 23 44.8 23 44 L23 28.5 Z"
              fill={`url(#${uid}-needle)`}
            />
            {/* Needle tip */}
            <path d="M21 44 L22 47 L23 44 Z" fill="#3a4150" />

            {/* Collar ring */}
            <ellipse cx="22" cy="29" rx="8.5" ry="3.2" fill={`url(#${uid}-collar)`} />
            <ellipse cx="22" cy="28.2" rx="7.8" ry="2.8" fill="#bb0000" opacity="0.9" />

            {/* Body neck */}
            <path
              d="M14.5 14 C14.5 14, 16.5 23, 15 28.5 L29 28.5 C27.5 23, 29.5 14, 29.5 14 Z"
              fill={`url(#${uid}-body)`}
            />

            {/* Cap outer shadow */}
            <ellipse cx="22" cy="14.5" rx="14.5" ry="8.2" fill="#4a0000" opacity="0.30" />
            {/* Cap dome */}
            <ellipse cx="22" cy="13.5" rx="13.8" ry="7.6" fill={`url(#${uid}-cap)`} />
            {/* Cap highlight — large */}
            <ellipse cx="19" cy="10.5" rx="6.5" ry="2.6" fill="white" opacity="0.55" transform="rotate(-12, 19, 10.5)" />
            {/* Cap glint — small */}
            <ellipse cx="15.5" cy="9.5" rx="2.2" ry="1" fill="white" opacity="0.38" transform="rotate(-12, 15.5, 9.5)" />
          </svg>
        </div>

        {/* ===== PAPER CARD ===== */}
        <div
          style={{
            backgroundColor: color,
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)',
            /*
              Layered shadow:
              - First: wide diffuse shadow (paper floating above board)
              - Second: tight dark shadow near bottom (contact shadow)
            */
            boxShadow:
              '3px 10px 24px rgba(0,0,0,0.18), 1px 3px 6px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.6)',
            marginTop: '10px',
          }}
          className="w-full h-[230px] px-3 pb-3 pt-5 flex flex-col text-left rounded-sm group-hover:shadow-[4px_18px_34px_rgba(0,0,0,0.22),1px_4px_8px_rgba(0,0,0,0.16)] transition-shadow duration-300"
        >
          {/* Article Image */}
          <div className="w-full h-[120px] rounded-md overflow-hidden bg-slate-100 flex-shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Article Title */}
          <h4 className="text-[#101d2c] font-bold text-[11px] lg:text-[12px] leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-blue-900 mb-1">
            {title}
          </h4>

          {/* Folded corner flap */}
          <div
            className="absolute bottom-0 right-0 w-[16px] h-[16px] bg-black/10 pointer-events-none group-hover:scale-90 transition-transform duration-300"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          />
        </div>
      </div>
    </>
  );
}


// ==========================================
// 5. SteelInsights Component
// ==========================================
export function SteelInsights() {
  const articles = [
    {
      title: "What is Steel? Types, Properties & Applications Explained",
      img: "/Banner-2.png",
      color: "#FEFEBB",
      rotation: -1.5
    },
    {
      title: "Why Tata Structura is the Preferred Choice for Builders",
      img: "/banner-1.png",
      color: "#FFF9DB",
      rotation: 1.2
    },
    {
      title: "Hollow Sections vs Solid Sections – Which is Right for You?",
      img: "/banner-4.png",
      color: "#EEF9FF",
      rotation: -0.8
    },
    {
      title: "How to Build a Durable and Smart Car Shed Structure",
      img: "/carshed.jpg",
      color: "#E2F0D9",
      rotation: 1.5
    }
  ];

  return (
    <div className="flex flex-col items-center gap-5 text-left w-full">
      {/* Title block */}
      <div className="w-full">
        <h3 className="text-2xl font-extrabold text-[#101d2c] tracking-tight">
          Steel Insights
        </h3>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mt-1">
          Articles, guides & expert opinions
        </span>
        {/* Blue underline */}
        <div className="w-16 h-[2px] bg-[#0066ff] mt-1.5" />
      </div>

      {/* Sticky Notes Row — padding-top gives space for pin to float above cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-2 pt-7">
        {articles.map((article, idx) => (
          <StickyArticleCard
            key={idx}
            idx={idx}
            title={article.title}
            img={article.img}
            color={article.color}
            rotation={article.rotation}
            delay={idx * 0.55}
          />
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 6. AwardsSection Component
// ==========================================
export function AwardsSection() {
  const awards = [
    {
      title: "Authorized Dealer",
      sub: "Tata Structura",
      icon: (
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          {/* Black gold octagonal badge background */}
          <polygon points="32,4 52,12 60,32 52,52 32,60 12,52 4,32 12,12" fill="#1c2834" stroke="#c29b38" strokeWidth="2.5" />
          <polygon points="32,8 48,15 54,32 48,49 32,56 16,49 10,32 16,15" fill="#111c24" stroke="#e0be67" strokeWidth="1" />
          {/* Stars */}
          <polygon points="32,15 34.5,20 40,20.5 36,24.5 37.5,30 32,27 26.5,30 28,24.5 24,20.5 29.5,20" fill="#e0be67" />
          <text x="32" y="40" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">AUTHORIZED</text>
          <text x="32" y="47" fill="#e0be67" fontSize="6" fontWeight="extrabold" textAnchor="middle" letterSpacing="0.8">DEALER</text>
        </svg>
      )
    },
    {
      title: "Excellence in",
      sub: "Customer Service",
      icon: (
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
          {/* Shield frame */}
          <path d="M32 6C46 6 52 14 52 26C52 42 32 56 32 56C32 56 12 42 12 26C12 14 18 6 32 6Z" fill="#fafafa" stroke="#d5ab4a" strokeWidth="2.5" />
          {/* Inner gold border */}
          <path d="M32 10C43 10 48 17 48 26C48 39 32 51 32 51C32 51 16 39 16 26C16 17 21 10 32 10Z" fill="none" stroke="#e0be67" strokeWidth="1" />
          {/* Shield Center emblem (Crown) */}
          <path d="M22 34 L26 24 L32 28 L38 24 L42 34 Z" fill="#d5ab4a" />
          <circle cx="32" cy="20" r="2.5" fill="#d5ab4a" />
          <circle cx="21" cy="22" r="2" fill="#d5ab4a" />
          <circle cx="43" cy="22" r="2" fill="#d5ab4a" />
          <path d="M22 36 H42 V38 H22 Z" fill="#b08a30" />
        </svg>
      )
    },
    {
      title: "Trusted by",
      sub: "500+ Customers",
      icon: (
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          {/* Pedestal */}
          <path d="M20 54 H44 V58 H20 Z" fill="#3c4c5e" />
          <path d="M24 46 H40 V54 H24 Z" fill="#253545" stroke="#d5ab4a" strokeWidth="1" />
          {/* Golden Trophy Column */}
          <path d="M30 35 H34 V46 H30 Z" fill="#d5ab4a" />
          {/* Star cup */}
          <polygon points="32,8 36.5,18 47,19 39.5,26.5 41.5,37 32,31.5 22.5,37 24.5,26.5 17,19 27.5,18" fill="#e5c158" stroke="#d5ab4a" strokeWidth="1.5" />
          <polygon points="32,8 32,31.5 22.5,37 24.5,26.5 17,19 27.5,18" fill="#fff" opacity="0.18" />
        </svg>
      )
    },
    {
      title: "15+ Years of",
      sub: "Excellence",
      icon: (
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
          {/* Laurel wreath around a gold circle */}
          <circle cx="32" cy="32" r="16" fill="#e5c158" stroke="#d5ab4a" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="13" fill="#fff" opacity="0.2" />
          <text x="32" y="36.5" fill="#523a07" fontSize="12" fontWeight="900" textAnchor="middle">15+</text>
          <path d="M12 36 C10 26 18 14 26 12 C23 16 16 28 16 36 Z" fill="#d5ab4a" />
          <path d="M52 36 C54 26 46 14 38 12 C41 16 48 28 48 36 Z" fill="#d5ab4a" />
          <path d="M22 46 L32 40 L42 46 L38 58 L32 50 L26 58 Z" fill="#a82323" stroke="#8c1616" strokeWidth="1" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col items-start text-left w-full gap-5">
      {/* Title Block */}
      <div className="w-full">
        <h3 className="text-2xl font-extrabold text-[#101d2c] tracking-tight">
          Awards & Recognition
        </h3>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mt-1">
          Our achievements that drive us forward
        </span>
        {/* Blue underline */}
        <div className="w-16 h-[2px] bg-[#0066ff] mt-1.5" />
      </div>

      {/* Awards 4-column row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full mt-2">
        {awards.map((award, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-2 rounded-lg group transition-all duration-300 hover:bg-white/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer">
            {/* Icon Wrapper */}
            <div className="w-12 h-12 flex items-center justify-center mb-2.5">
              {award.icon}
            </div>
            {/* Text details */}
            <span className="text-[11px] font-bold text-[#101d2c] block leading-tight group-hover:text-blue-900 transition-colors">
              {award.title}
            </span>
            <span className="text-[9px] font-medium text-slate-500 block mt-0.5">
              {award.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Trusted Brands section embedded inside Awards column */}
      <div className="w-full mt-4 border-t border-slate-200/60 pt-4">
        <TrustedBrands />
      </div>
    </div>
  );
}

// ==========================================
// 7. TrustedBrands Component (Logos)
// ==========================================
export function TrustedBrands() {
  return (
    <div className="w-full text-left">
      <h4 className="text-[10px] font-extrabold text-[#101d2c] uppercase tracking-wider mb-3">
        Known &amp; Trusted By
      </h4>

      {/* Brand Logos Row */}
      <div className="flex flex-wrap items-stretch gap-2 lg:gap-3">

        {/* TATA STEEL — Official SVG from public folder */}
        <div className="flex-1 min-w-[90px] flex items-center justify-center px-2 py-2 bg-white rounded-md shadow-sm border border-slate-100/80 h-16 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-500/20 group">
          <img
            src="/tata-steel-logo.svg"
            alt="Tata Steel Logo"
            className="w-28 max-h-10 object-contain transition-all duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* TATA STRUCTURA — Blue background (white logo on blue) */}
        <div className="flex-1 min-w-[90px] flex items-center justify-center px-2 py-2 bg-[#003399] rounded-md shadow-sm border border-[#002080] h-16 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#0040cc] group">
          <img
            src="/Tata-structurea-logo.png"
            alt="Tata Structura Logo"
            className="w-24 max-h-10 object-contain transition-all duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* TATA AASHIYANA — Scene7 CDN image */}
        <div className="flex-1 min-w-[90px] flex items-center justify-center px-2 py-2 bg-white rounded-md shadow-sm border border-slate-100/80 h-16 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-500/20 group">
          <img
            src="https://s7ap1.scene7.com/is/image/tatasteelltd/TSA-logo?fmt=webp&wid=300"
            alt="Tata Steel Aashiyana Logo"
            className="w-24 max-h-10 object-contain transition-all duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}


// ==========================================
// Main CorporateSection Component
// ==========================================
export default function CorporateSection() {
  return (
    <section 
      id="corporate"
      className="bg-[#f3f6fa] py-8 px-4 sm:px-6 lg:px-8 w-full flex justify-center transition-all duration-1000 ease-out opacity-0 translate-y-8 [&.in-view]:opacity-100 [&.in-view]:translate-y-0 scroll-reveal"
    >
      <div className="max-w-[1450px] w-full bg-white rounded-[24px] shadow-[0_12px_36px_rgba(16,29,44,0.04)] p-6 lg:p-8 flex flex-col gap-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(16,29,44,0.07)]">
        {/* ROW 1: News & Events */}
        <NewsSection />

        {/* ROW 2: Insights & Awards */}
        <div className="bg-[#FBF8F2] rounded-[20px] p-6 lg:p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01),0_8px_20px_rgba(0,0,0,0.02)] border border-slate-200/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Steel Insights (60%) */}
            <div className="w-full lg:col-span-7">
              <SteelInsights />
            </div>

            {/* Right Column: Awards & Recognition (40%) with Native Border Divider */}
            <div className="w-full lg:col-span-5 lg:pl-8 lg:border-l lg:border-dashed lg:border-slate-300/40">
              <AwardsSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
