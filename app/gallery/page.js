"use client";

import React, { useState, useEffect, useRef } from 'react';
import '../page.css';
import './page.css';

export default function GalleryPage() {
  const [activeItem, setActiveItem] = useState('Gallery');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [featuredEventIndex, setFeaturedEventIndex] = useState(0);
  const [lightboxActive, setLightboxActive] = useState(false);
  const [lightboxImgIndex, setLightboxImgIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
  const lastScrollY = useRef(0);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };



  const eventsData = [
    {
      id: 1,
      title: "Best Dealer in AP",
      category: "Dealer Meets",
      date: "Jul 2024",
      location: "Andhra Pradesh, India",
      desc: "Awarding our leading distribution partners in Andhra Pradesh for exceptional sales performance.",
      image: "/Best-dealer-AP-77.png",
      album: ["/Best-dealer-AP-77.png", "/Best-dealer-AP-77-2.png"]
    },
    {
      id: 2,
      title: "Best Dealer in TG",
      category: "Dealer Meets",
      date: "Jun 2024",
      location: "Telangana, India",
      desc: "Recognizing and celebrating top-performing dealer networks across Telangana region.",
      image: "/Best-dealer-TG.png",
      album: ["/Best-dealer-TG.png", "/Best-dealer-AP-78.png"]
    },
    {
      id: 3,
      title: "Team Meetup",
      category: "Dealer Meets",
      date: "May 2024",
      location: "Mutyam Steel",
      desc: "Celebrating our core team alignment and planning future strategies for South India distribution.",
      image: "/Team.jpeg",
      album: ["/Team.jpeg", "/Team-mobile.png"]
    },
    {
      id: 4,
      title: "Dubai Meeting",
      category: "Dealer Meets",
      date: "Apr 2024",
      location: "Dubai, UAE",
      desc: "Engaging in global trade dialogue and steel distribution expansion summits in UAE.",
      image: "/DUbai-meer.jpeg",
      album: ["/DUbai-meer.jpeg", "/Dubai-trip-1.jpeg"]
    },
    {
      id: 5,
      title: "Representing Mutyam at Vietnam",
      category: "Exhibitions",
      date: "Mar 2024",
      location: "Vietnam",
      desc: "Showcasing high-strength steel hollow sections at the South-East Asian Trade Fair.",
      image: "/Vietnam-trip.jpeg",
      album: ["/Vietnam-trip.jpeg"]
    },
    {
      id: 6,
      title: "Mutyam Steel Dealers Meet",
      category: "Dealer Meets",
      date: "Feb 2024",
      location: "India",
      desc: "Connecting with national dealers to reinforce supply chains and steel distribution growth.",
      image: "/NSPL-dealer-meet.png",
      album: ["/NSPL-dealer-meet.png", "/Session meet.png"]
    },
    {
      id: 7,
      title: "Bandhan Meetup",
      category: "Dealer Meets",
      date: "Jan 2024",
      location: "Mutyam Steel",
      desc: "Strengthening relationships and celebrating shared milestones with our primary dealer network.",
      image: "/Bandhan-event.jpeg",
      album: ["/Bandhan-event.jpeg", "/Bandhan-1.jpeg"]
    },
    {
      id: 8,
      title: "Cultural Meetup",
      category: "Dealer Meets",
      date: "Oct 2023",
      location: "Hyderabad, India",
      desc: "Celebrating company milestones and localized dealer alignments with cultural events.",
      image: "/Cultural-1.jpeg",
      album: ["/Cultural-1.jpeg", "/cultural meetup.jpeg"]
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredEvents = activeCategory === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.category === activeCategory);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextEvent = () => {
    setFeaturedEventIndex(prev => (prev + 1) % filteredEvents.length);
  };

  const prevEvent = () => {
    setFeaturedEventIndex(prev => (prev - 1 + filteredEvents.length) % filteredEvents.length);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFeaturedEventIndex(0);
    setCurrentPage(1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxActive) return;
      const album = filteredEvents[featuredEventIndex]?.album || [];
      if (album.length <= 1) return;
      
      if (e.key === 'ArrowRight') {
        setLightboxImgIndex(prev => (prev + 1) % album.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxImgIndex(prev => (prev - 1 + album.length) % album.length);
      } else if (e.key === 'Escape') {
        setLightboxActive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxActive, featuredEventIndex, filteredEvents]);

  return (
    <div className="page-container light-theme" style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* Main Content Wrap */}
      <main className="gallery-main-content" style={{ paddingTop: '0' }}>
        
        {/* 1. Hero Section — Mutyam Steel Profile Banner Style */}
        <section className="relative w-full min-h-[540px] md:min-h-[580px] flex items-center overflow-hidden" style={{ minHeight: "580px" }}>
          {/* Full Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/Gallery/Gallery-banner.png"
              alt="Gallery & Media Center"
              className="w-full h-full object-cover object-center"
            />
            {/* Natural dark gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(95deg,
                  rgba(15, 23, 42, 0.88) 0%,
                  rgba(15, 23, 42, 0.65) 45%,
                  rgba(15, 23, 42, 0.35) 80%
                )`,
              }}
            />
            {/* Top fade for nav breathing room */}
            <div className="absolute top-0 left-0 right-0 h-[140px]" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)" }} />
          </div>

          {/* Content Layer — Shifted Right for Premium Balance */}
          <div className="relative z-10 max-w-[1536px] mx-auto w-full px-6 md:px-[60px] pl-6 md:pl-16 lg:pl-28 pt-[150px] md:pt-[160px] pb-[65px] md:pb-[75px]">
            <div className="max-w-[700px]">
              <h1 className="text-[54px] md:text-[72px] lg:text-[78px] font-black leading-[1.04] tracking-tight mb-6 font-['Space_Grotesk'] text-white">
                <span className="animate-gallery-watery-gradient font-black">Our Gallery.</span>
              </h1>

              <p className="text-slate-200 text-[18px] md:text-[20px] lg:text-[21px] leading-[1.7] font-['Manrope'] font-medium max-w-[600px]">
                Explore our manufacturing excellence, completed projects, warehouses, steel products, logistics, and infrastructure.
              </p>
            </div>
          </div>

          {/* 3 Animated Bouncing Down Arrows — Bottom Right */}
          <div className="absolute bottom-8 right-8 md:right-14 z-20 hidden md:flex flex-col items-center gap-1">
            <style>{`
              @keyframes arrowBounce {
                0%, 100% { transform: translateY(0); opacity: 0.5; }
                50% { transform: translateY(5px); opacity: 1; }
              }
            `}</style>
            <svg width="28" height="44" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 8 L16 20 L28 8"
                stroke="#D62E2E"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ animation: "arrowBounce 1.2s ease-in-out infinite", animationDelay: "0s" }}
              />
              <path
                d="M4 18 L16 30 L28 18"
                stroke="#1565C0"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ animation: "arrowBounce 1.2s ease-in-out infinite", animationDelay: "0.2s" }}
              />
              <path
                d="M4 28 L16 40 L28 28"
                stroke="#9E9E9E"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ animation: "arrowBounce 1.2s ease-in-out infinite", animationDelay: "0.4s" }}
              />
            </svg>
          </div>
        </section>

        {/* 2. Hero / Featured Split Section */}
        <section className="gallery-editorial-split">
          <div className="editorial-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '50px' }}>
            <div className="section-label-group">
              <span className="section-orange-line" />
              <span className="section-label">GALLERY & MEDIA</span>
            </div>
            
            <h1 className="gallery-editorial-heading">
              Moments that drive our journey.
            </h1>
            
            <p className="gallery-editorial-desc">
              From global exhibitions to industry meets, every experience strengthens our commitment to quality and partnerships. Explore our key milestones, award ceremonies, and dealer alignments across India.
            </p>
          </div>

          <div className="editorial-right">
            {filteredEvents.length > 0 && (
              <div className="gallery-featured-card">
                <div className="featured-image-container">
                  <img 
                    src={filteredEvents[featuredEventIndex].image} 
                    alt={filteredEvents[featuredEventIndex].title} 
                    className="featured-card-img" 
                    loading="lazy"
                  />
                  <div className="featured-card-gradient-overlay" />
                  
                  {/* Card Content Overlay */}
                  <div className="featured-card-content">
                    <span className="featured-badge">FEATURED</span>
                    
                    <div className="featured-date-row">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', color: '#F97316' }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{filteredEvents[featuredEventIndex].date}</span>
                    </div>

                    <h2 className="featured-event-title">
                      {filteredEvents[featuredEventIndex].title}
                    </h2>

                    <p className="featured-event-desc">
                      {filteredEvents[featuredEventIndex].desc}
                    </p>

                    <button 
                      onClick={() => {
                        setLightboxImgIndex(0);
                        setLightboxActive(true);
                      }} 
                      className="featured-album-btn"
                    >
                      <span>View Album</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>

                  {/* Navigation Arrows inside Card Bottom Right */}
                  <div className="featured-nav-controls">
                    <button 
                      className="featured-nav-btn" 
                      onClick={(e) => { e.stopPropagation(); prevEvent(); }} 
                      aria-label="Previous event"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                      </svg>
                    </button>
                    <button 
                      className="featured-nav-btn" 
                      onClick={(e) => { e.stopPropagation(); nextEvent(); }} 
                      aria-label="Next event"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 2. Explore More Events & Filters Section */}
        <section className="gallery-explore-section">
          <div className="explore-header-row">
            <div className="explore-title-wrap">
              <span className="explore-orange-dash" />
              <h2 className="explore-section-title">Explore More Events</h2>
            </div>

            <div className="explore-filters-pills">
              {['All Events', 'Exhibitions', 'Industry Meets', 'Plant Visits', 'Dealer Meets'].map((cat) => {
                const apiCat = cat === 'All Events' ? 'All' : cat;
                const isActive = activeCategory === apiCat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(apiCat)}
                    className={`explore-filter-pill ${isActive ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5-Column Thumbnail Row */}
          <div className="gallery-thumbnail-row">
            {paginatedEvents.map((event, index) => {
              const globalIndex = (currentPage - 1) * itemsPerPage + index;
              const isActive = globalIndex === featuredEventIndex;
              return (
                <div
                  key={event.id}
                  className={`gallery-thumb-card ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setFeaturedEventIndex(globalIndex);
                    setLightboxImgIndex(0);
                    setLightboxActive(true);
                  }}
                >
                  <div className="thumb-image-box">
                    <img src={event.image} alt={event.title} className="thumb-card-img" loading="lazy" />
                    <span className="thumb-date-badge">{event.date}</span>
                  </div>
                  
                  <div className="thumb-card-meta">
                    <h3 className="thumb-card-title">{event.title}</h3>
                    <div className="thumb-location-row">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px', color: '#6B7280' }}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="thumb-arrow-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls — Cherrish Red Accent */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10 mb-2 font-['Manrope']">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white text-[13px] font-bold text-slate-700 hover:border-[#D62E2E] hover:text-[#D62E2E] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-full text-[13px] font-bold flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === page
                      ? "bg-[#D62E2E] text-white shadow-md scale-105"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-[#D62E2E] hover:text-[#D62E2E]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white text-[13px] font-bold text-slate-700 hover:border-[#D62E2E] hover:text-[#D62E2E] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
              >
                Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </section>

        {/* Contact Event CTA Card */}
        <section className="gallery-event-cta-section">
          <div className="gallery-event-cta-container">
            <div className="cta-left-box">
              <div className="cta-calendar-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <circle cx="16" cy="16" r="3" />
                </svg>
              </div>
              <div className="cta-text-details">
                <h3 className="cta-main-title">Want to meet us at our next event?</h3>
                <p className="cta-sub-title">Let's connect, collaborate and build a stronger future together.</p>
              </div>
            </div>

            <div className="cta-right-box">
              <a href="/#contact" className="cta-red-action-btn">
                <span>CONTACT US</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Fullscreen Lightbox Modal */}
      {lightboxActive && filteredEvents[featuredEventIndex] && (
        <div className="gallery-lightbox" onClick={() => setLightboxActive(false)}>
          <button className="gallery-lightbox-close" onClick={() => setLightboxActive(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {/* Side navigation arrows inside Lightbox */}
          {filteredEvents[featuredEventIndex].album.length > 1 && (
            <>
              <button 
                className="lightbox-side-nav-btn prev" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setLightboxImgIndex(prev => (prev - 1 + filteredEvents[featuredEventIndex].album.length) % filteredEvents[featuredEventIndex].album.length); 
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button 
                className="lightbox-side-nav-btn next" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setLightboxImgIndex(prev => (prev + 1) % filteredEvents[featuredEventIndex].album.length); 
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}

          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredEvents[featuredEventIndex].album[lightboxImgIndex]} 
              alt="Lightbox Preview" 
              className="gallery-lightbox-img" 
            />
            
            {/* Info details overlay inside Lightbox */}
            <div className="lightbox-details-overlay">
              <span className="lightbox-item-category">
                {filteredEvents[featuredEventIndex].category.toUpperCase()}
              </span>
              <h3 className="lightbox-item-title">
                {filteredEvents[featuredEventIndex].title} ({lightboxImgIndex + 1}/{filteredEvents[featuredEventIndex].album.length})
              </h3>
              <p className="lightbox-item-desc">
                {filteredEvents[featuredEventIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
