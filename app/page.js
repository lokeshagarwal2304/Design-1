"use client";

import React, { useState, useEffect, useRef } from 'react';
import './page.css';
import CorporateSection from '@/components/CorporateSection';

// Dynamic CountUp animation component
function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
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

  return <span ref={elementRef}>{count}</span>;
}

export default function Home() {
  const [activeItem, setActiveItem] = useState('Home');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [utilsOpen, setUtilsOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [hoveredAboutCategory, setHoveredAboutCategory] = useState('Our Organisation');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Dealers");
  const lastScrollY = useRef(0);
  const parallaxImgRef = useRef(null);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handlePartnerCategory = (e) => {
      if (e.detail && e.detail.category) {
        setSelectedCategory(e.detail.category);
      }
    };
    window.addEventListener("partnerCategoryChange", handlePartnerCategory);

    const checkUrlCategory = () => {
      if (typeof window !== 'undefined') {
        const urlObj = new URL(window.location.href);
        const catParam = urlObj.searchParams.get('category');
        if (catParam) {
          const lower = catParam.toLowerCase();
          if (lower.includes('fabricator')) {
            setSelectedCategory('Fabricators');
          } else if (lower.includes('architect') || lower.includes('engineer')) {
            setSelectedCategory('Architect & Engineers');
          } else if (lower.includes('dealer')) {
            setSelectedCategory('Dealers');
          }
        }
        if (urlObj.hash === '#dealer-network' || urlObj.hash === '#dealers') {
          setTimeout(() => {
            const el = document.getElementById('dealer-network');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      }
    };
    checkUrlCategory();
    window.addEventListener("hashchange", checkUrlCategory);

    return () => {
      window.removeEventListener("partnerCategoryChange", handlePartnerCategory);
      window.removeEventListener("hashchange", checkUrlCategory);
    };
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

  const navItems = [
    { name: 'Home', hasDropdown: false },
    {
      name: 'About Us', hasDropdown: true, dropdownItems: [
        { label: "Our Organisation", href: "/about/mutyam-steel-profile" },
      ]
    },
    {
      name: 'Products', hasDropdown: true, dropdownItems: [
        { label: "Tata Structura 210 YST", href: "https://www.tatastructura.com/yst210" },
        { label: "Tata Structura 310/355 YST", href: "https://www.tatastructura.com/yst355" },
        { label: "Tata Structura Z+", href: "https://www.tatastructura.com/zplus" },
        { label: "Tata Structura GP Pipes", href: "https://www.tatapipes.com/products/galvanized-pipes/" },
        { label: "Tata Agrico", href: "https://www.tatasteel.com/products-solutions/india/products/tata-agrico-agriculture-construction-hand-tools/" }
      ]
    },
    {
      name: 'Partners', hasDropdown: true, dropdownItems: [
        { label: "Dealers", href: "#dealers" },
        { label: "Fabricators", href: "#dealers" },
        { label: "Architect and Engineers", href: "#dealers" },
      ]
    },
    {
      name: 'Projects', hasDropdown: true, dropdownItems: [
        { label: "Infrastructure & Commercial", href: "#clients-projects" },
        { label: "Agriculture & Water Systems", href: "#clients-projects" },
        { label: "Automotive & Industrial", href: "#clients-projects" },
        { label: "Energy & Transmission", href: "#clients-projects" },
      ]
    },
    {
      name: 'Gallery', hasDropdown: true, href: '/gallery', dropdownItems: [
        { label: "Media", href: "/gallery" },
        { label: "Brochures", href: "/gallery" },
      ]
    },
    { name: 'Events', href: '/events', hasDropdown: false },
    {
      name: 'Applications', hasDropdown: true, dropdownItems: [
        { label: "Car Parking", href: "#products" },
        { label: "Gates Page", href: "#products" },
        { label: "Railings", href: "#products" },
        { label: "Roofs", href: "#products" },
        { label: "Commercial »", href: "#products" },
        { label: "Infrastructure »", href: "#products" },
        { label: "Industrial »", href: "#products" },
        { label: "Architectural »", href: "#products" },
        { label: "General Engineering »", href: "#products" }
      ]
    },
    { name: 'Contact', hasDropdown: false }
  ];

  const slides = [
    {
      image: '/banner-8.webp',
      mobileImage: '/mobile-review.png',
      hideContent: true
    },
    {
      image: '/banner-9.png',
      mobileImage: '/banner-10.png',
      hideContent: true
    },
    {
      image: '/banner-1.png',
      badgeText: 'AUTHORISED DISTRIBUTOR OF',
      badgeType: 'tata',
      subtitle: 'TRUSTED INFRASTRUCTURE',
      line1: 'BUILT FOR',
      line2: 'LANDMARK',
      line3: 'PROJECTS',
      desc: 'Our structural steel solutions are trusted in airports, commercial buildings and major infrastructure projects built to perform for years.',
      btnExplore: 'Explore Projects',
      exploreLink: '/projects',
      btnWatch: 'Watch Our Story',
      watchLink: 'https://youtu.be/aYsLIgmbZlo?si=R1hdGjqNC4N0QoNg'
    },
    {
      image: '/Banner-2.png',
      badgeText: 'STRONG. STYLISH. RELIABLE.',
      badgeType: 'simple',
      subtitle: '',
      line1: 'BUILT TO',
      line2: 'PROTECT',
      line3: 'EVERY DRIVE',
      desc: 'Our steel car sheds are designed to withstand every season, giving your vehicle the safety and care it deserves.',
      btnExplore: 'View more on this',
      exploreLink: 'https://www.tatastructura.com/CarParking',
      btnWatch: 'Watch Our Story',
      watchLink: 'https://youtu.be/BWeyirBiu14?si=G8USqAyyOeMTVhyx'
    },
    {
      image: '/banner-3.png',
      badgeText: 'RESIDENTIAL SOLUTIONS',
      badgeType: 'simple',
      subtitle: '',
      line1: 'SMART STEEL FOR',
      line2: 'MODERN',
      line3: 'HOMES',
      desc: 'Beautiful steel gates, railings, pergolas and roof structures designed for safe, stylish and long-lasting homes.',
      btnExplore: 'More About this',
      exploreLink: 'https://www.tatastructura.com/GatePage',
      btnWatch: 'Watch Our Story',
      watchLink: 'https://youtu.be/fdRERIziOkw?si=Oxbt9IUHpx9sQvkc'
    },
    {
      image: '/banner-4.png',
      badgeText: 'RESIDENTIAL SOLUTIONS',
      badgeType: 'simple',
      subtitle: '',
      line1: 'STEEL THAT COMPLETES',
      line2: 'YOUR HOME',
      line3: '',
      desc: 'Beautiful gates, railings, window grills and roof structures crafted for safety, style and long-lasting performance.',
      btnExplore: 'Know More',
      exploreLink: 'https://www.tatastructura.com/Railings',
      btnWatch: 'Watch Story',
      watchLink: 'https://youtu.be/Ebrtu5vi1dw?si=7bKr5aN4NdOTBr0T',
      showFeatures: true
    },
    {
      image: '/banner-5.png',
      badgeText: 'INDUSTRIAL SOLUTIONS',
      badgeType: 'simple',
      subtitle: '',
      line1: 'STEEL FOR LARGE',
      line2: 'INDUSTRIAL',
      line3: 'INFRASTRUCTURE',
      desc: 'Heavy-duty structural sections, hollow profiles and portal frame solutions engineered for massive warehouses, metro lines and factories.',
      btnExplore: 'Our Work',
      exploreLink: '/projects',
      btnWatch: 'Watch Story',
      watchLink: 'https://youtu.be/A8vG8yiPd1A?si=1JXBtsyS_ozA9v1v'
    }
  ];

  // Viewport scroll reveal observer (dynamic in-and-out)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Track window scroll for parallax and smart navbar auto-hide
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Only hide nav if we have scrolled past 60px
          if (currentScrollY <= 60) {
            setNavVisible(true);
          } else {
            // Scrolling down -> hide; Scrolling up -> show
            if (currentScrollY > lastScrollY.current) {
              setNavVisible(false);
            } else {
              setNavVisible(true);
            }
          }

          // Direct DOM manipulation for parallax zoom & fade out to avoid React page-wide re-renders
          if (parallaxImgRef.current) {
            const parentSection = parallaxImgRef.current.closest('.about-section');
            if (parentSection) {
              const rect = parentSection.getBoundingClientRect();

              // We start the zoom & fade when the top of the About section reaches 10% of viewport height
              const startScroll = window.innerHeight * 0.1;
              // We complete the zoom & fade when it scrolls out by 85% of its height
              const endScroll = -rect.height * 0.85;

              let p = 0;
              if (rect.top < startScroll) {
                p = Math.min(1, Math.max(0, (rect.top - startScroll) / (endScroll - startScroll)));
              }

              // Scale from 1.0 to 1.30 (zoom in)
              const scaleVal = 1 + p * 0.30;
              // Opacity from 1.0 to 0.0 (fade out)
              const opacityVal = 1 - p;

              parallaxImgRef.current.style.transform = `scale(${scaleVal})`;
              parallaxImgRef.current.style.opacity = `${opacityVal}`;
            }
          }

          setScrollY(prev => {
            if (currentScrollY > 300 && prev <= 300) return currentScrollY;
            if (currentScrollY <= 300 && prev > 300) return currentScrollY;
            return prev;
          });
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play slides
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + 1;
      });
    }, 60); // Roughly 6 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((curr) => (curr - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleNextSlide = () => {
    setCurrentSlide((curr) => (curr + 1) % slides.length);
    setProgress(0);
  };

  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const isInteractiveElement = (target) => {
    if (!target) return false;
    return (
      target.closest('button') ||
      target.closest('a') ||
      target.closest('input') ||
      target.closest('header') ||
      target.closest('.nav-trigger-zone') ||
      target.closest('.carousel-progress-bars') ||
      target.closest('.scroll-indicator-chevrons') ||
      target.closest('.tata-campaign-banner')
    );
  };

  const handleTouchStart = (e) => {
    if (isInteractiveElement(e.target)) return;
    dragStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    const threshold = 50; // swipe threshold in px
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    isDragging.current = false;
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    if (isInteractiveElement(e.target)) return;
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const diff = dragStartX.current - e.clientX;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    isDragging.current = false;
  };

  const handleBannerMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <div className={`page-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <section
        className="hero-banner-section"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleBannerMouseLeave}
      >
        {/* Background Carousel Slides */}
        <div className="carousel-background">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`slide-item ${idx === currentSlide ? 'active' : ''} ${slide.hideContent ? 'contain-slide' : ''}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                '--mobile-bg': `url(${slide.mobileImage || slide.image})`
              }}
            />
          ))}
          {/* Ambient Dark Gradient Overlay */}
          {!slides[currentSlide].hideContent && <div className="carousel-overlay"></div>}
        </div>

        

        

        


        {/* Main Full-Screen Layout */}
        <main className={`main-carousel-layout slide-active-${currentSlide}`}>

          {/* Tata Steel Campaign Banner - Top Right */}


          {/* Content Column */}
          {!slides[currentSlide].hideContent && (
            <div className="carousel-content-left">
              <div className="distributor-badge-static-v2">
                <span className="badge-text-left">{slides[currentSlide].badgeText}</span>
                {slides[currentSlide].badgeType === 'tata' && (
                  <>
                    <span className="badge-divider-v2">|</span>
                    <div className="tata-logo-badge-inline">
                      <svg className="badge-tata-logo-svg" viewBox="0 0 122.88 65" width="20" height="11" fill="currentColor">
                        <path d="M52.93,29.1c.75-5.07.65-7.72-6.78-7.31A162.78,162.78,0,0,0,16,25.73a21.3,21.3,0,0,0-.61,5c0,5.83,2.38,11.47,6.86,16.32a42.94,42.94,0,0,0,16.6,10.56,59.1,59.1,0,0,0,7.73,2.25c.5-2,3.68-15,6.2-30l.11-.78Zm54-3.37a162.8,162.8,0,0,0-30.1-3.94C69.38,21.38,69.29,24,70,29.1l.18,1.15C72.7,45,75.8,57.71,76.34,59.87c18.11-4.14,31.18-15.62,31.18-29.11a21.83,21.83,0,0,0-.6-5ZM105,20.65a27.52,27.52,0,0,0-4.37-6.21A42.83,42.83,0,0,0,84.07,3.88,65.67,65.67,0,0,0,61.48,0,65.59,65.59,0,0,0,38.89,3.88a42.94,42.94,0,0,0-16.6,10.56,27.61,27.61,0,0,0-4.37,6.21c8.84-2.13,24-5,38-5.26a3.36,3.36,0,0,1,2.9,1.19c.75.94.7,4.32.68,5.83l-.4,39.06c.79,0,1.58.05,2.38.05s1.6,0,2.39,0l-.4-39.07c0-1.51-.08-4.89.67-5.83A3.39,3.39,0,0,1,67,15.39c14,.3,29.15,3.12,38,5.26Z" />
                      </svg>
                      <span className="badge-text-right">TATA STEEL</span>
                    </div>
                  </>
                )}
              </div>

              <div className="hero-accent-container">
                {slides[currentSlide].subtitle ? (
                  <span className="hero-subtitle-caps animate-slide-up" key={`sub-${currentSlide}`}>{slides[currentSlide].subtitle}</span>
                ) : (
                  <div className="hero-accent-line animate-slide-up" key={`line-${currentSlide}`} />
                )}
              </div>

              <h1 className="hero-heading-carousel animate-slide-up" key={`heading-${currentSlide}`}>
                <span>{slides[currentSlide].line1}</span>
                <span className="gradient-text-stronger">{slides[currentSlide].line2}</span>
                <span>{slides[currentSlide].line3}</span>
              </h1>

              <p className="hero-desc-carousel animate-fade-in" key={`desc-${currentSlide}`}>
                {slides[currentSlide].desc}
              </p>

              <div className="hero-cta-buttons">
                <button 
                  className="btn-explore-cta"
                  onClick={() => {
                    const link = slides[currentSlide].exploreLink;
                    if (link) {
                      if (link.startsWith('http')) {
                        window.open(link, '_blank');
                      } else if (link.startsWith('#')) {
                        const el = document.getElementById(link.substring(1));
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = link;
                      }
                    }
                  }}
                >
                  <span className="btn-text">{slides[currentSlide].btnExplore}</span>
                  <div className="cta-icon-circle">
                    <svg className="btn-arrow-icon" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                <button 
                  className="btn-watch-cta"
                  onClick={() => {
                    const link = slides[currentSlide].watchLink;
                    if (link) {
                      if (link.startsWith('http')) {
                        window.open(link, '_blank');
                      } else if (link.startsWith('#')) {
                        const el = document.getElementById(link.substring(1));
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = link;
                      }
                    }
                  }}
                >
                  <div className="play-icon-circle">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L8.5 6L1 10.5V1.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="watch-text">{slides[currentSlide].btnWatch}</span>
                </button>
              </div>

              {slides[currentSlide].showFeatures && (
                <div className="hero-features-block animate-fade-in" key={`features-${currentSlide}`}>
                  <div className="hero-features-title">
                    <span className="features-accent-line">|</span>
                    <span>BUILT TO LAST. DESIGNED TO INSPIRE.</span>
                  </div>
                  <div className="hero-features-grid">
                    <div className="hero-feature-item">
                      <div className="feature-icon-wrapper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <span className="feature-text">STRONG<br />& SAFE</span>
                    </div>
                    <div className="hero-feature-item">
                      <div className="feature-icon-wrapper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
                        </svg>
                      </div>
                      <span className="feature-text">MODERN<br />DESIGN</span>
                    </div>
                    <div className="hero-feature-item">
                      <div className="feature-icon-wrapper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 3h12l4 6-10 13L2 9z" />
                          <path d="M11 3 8 9l4 13 4-13-3-6" />
                          <path d="M2 9h20" />
                        </svg>
                      </div>
                      <span className="feature-text">PREMIUM<br />QUALITY</span>
                    </div>
                    <div className="hero-feature-item">
                      <div className="feature-icon-wrapper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <span className="feature-text">LONG<br />LASTING</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Right Action Spacer */}
          <div className="carousel-sidebar-right-spacer"></div>

          {/* Bottom Section - Controls */}
          <div className="carousel-bottom-panel">
            {/* Slide Indicator & Controls */}
            <div className="carousel-controls-wrapper">
              <div className="carousel-nav-arrows">
                <button className="btn-arrow-control prev" onClick={handlePrevSlide} aria-label="Previous Slide">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9L1 5L5 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="btn-arrow-control play-pause" onClick={() => setIsPaused(!isPaused)} aria-label={isPaused ? "Play" : "Pause"}>
                  {isPaused ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 2L8 5L3 8V2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 2V8M7 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
                <button className="btn-arrow-control next" onClick={handleNextSlide} aria-label="Next Slide">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {/* Progress Bars */}
              <div className="carousel-progress-bars">
                {slides.map((_, idx) => (
                  <div key={idx} className="progress-bar-track" onClick={() => { setCurrentSlide(idx); setProgress(0); }}>
                    <div
                      className="progress-bar-fill"
                      style={{ width: idx === currentSlide ? `${progress}%` : idx < currentSlide ? '100%' : '0%' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Cascading Scroll Down Chevrons */}
            <div
              className="scroll-indicator-chevrons"
              onClick={() => {
                const section = document.getElementById('about-us');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg className="scroll-chevron chevron-1" width="22" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className="scroll-chevron chevron-2" width="22" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className="scroll-chevron chevron-3" width="22" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </main>
      </section>

      {/* About Us Section with Scroll Parallax Zoom */}
      <section className="about-section" id="about-us">
        <div className="about-container">
          <div className="about-text-content scroll-reveal">
            <span className="about-subtitle">About Mutyam Steel</span>
            <h2 className="about-heading">
              Forged with <span className="about-highlight">Integrity,</span><br />
              Built on <span className="about-highlight">Trust.</span>
            </h2>
            <p className="about-desc about-desc--lead">
              At Mutyam Steel, steel is more than a material—
              it&apos;s a commitment we uphold every single day.
            </p>
            <p className="about-desc about-desc--second">
              As an authorized distributor of Tata Steel, we deliver premium steel products backed by precision, reliability, and decades of industry expertise. Our solutions empower builders, engineers, and industries across Telangana and Andhra Pradesh to build safer, stronger, and more sustainable structures.
            </p>
            <div className="about-stats-row">
              <div className="about-stat-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="about-stat-icon" style={{ marginBottom: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L3 7V12C3 16.55 7.08 20.74 12 22C16.92 20.74 21 16.55 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="about-stat-num"><CountUp end={25} />+</span>
                </div>
                <span className="about-stat-label">YEARS OF LEGACY</span>
                <span className="about-stat-sublabel">Trusted since 1999</span>
              </div>
              <div className="about-stat-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="about-stat-icon" style={{ marginBottom: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23 21V19C23 17.13 21.74 15.54 20 15.09" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13C17.74 3.58 19 5.17 19 7.05C19 8.93 17.74 10.52 16 10.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="about-stat-num"><CountUp end={500} />+</span>
                </div>
                <span className="about-stat-label">DEALERS NETWORK</span>
                <span className="about-stat-sublabel">Across Telangana &amp; Andhra Pradesh</span>
              </div>
            </div>
          </div>
          <div className="about-parallax-wrapper scroll-reveal">
            <div
              className="about-parallax-image-container"
              ref={parallaxImgRef}
            >
              <img
                src="/About-office.png"
                alt="About Mutyam Steel Office"
                className="about-parallax-img"
                loading="lazy"
              />
              {/* Tata Steel Badge Overlay */}
              <div className="about-tata-badge-overlay">
                <div className="about-tata-badge-left">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 7V12C3 16.55 7.08 20.74 12 22C16.92 20.74 21 16.55 21 12V7L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="about-tata-badge-text">
                    <span className="about-tata-badge-small">Authorized<br />Distributor of</span>
                    <span className="about-tata-badge-brand">TATA STEEL</span>
                  </div>
                </div>
                <div className="about-tata-badge-divider"></div>
                <div className="about-tata-badge-right">
                  <div className="about-tata-dots">
                    <span className="about-dot" style={{ background: '#E61E1E' }}></span>
                    <span className="about-dot" style={{ background: '#0096EB' }}></span>
                    <span className="about-dot" style={{ background: '#FF7800' }}></span>
                    <span className="about-dot" style={{ background: '#3CA55C' }}></span>
                  </div>
                  <span className="about-tata-badge-campaign">#YehTikega</span>
                </div>
              </div>
            </div>
            <div className="about-image-glow-ring"></div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Products Section */}
      <ProductsSection />

      {/* Product Benefits Section */}
      <BenefitsSection />

      {/* Corporate Clients & Projects Section */}
      <TrustProjectsSection />

      <CorporateSection />

      {/* Network Section */}
      <NetworkSection selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Gallery Showcase Section */}
      <section className="gallery-showcase-section scroll-reveal" id="gallery">
        <div className="gallery-section-header">
          <span className="about-subtitle">Gallery showcase</span>
          <h2 className="about-heading">Excellence in Motion</h2>
        </div>

        <GalleryShowcase />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}


      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`scroll-to-top-btn ${scrollY > 300 ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      {/* Floating WhatsApp Button with Pulsing Glow */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse-btn"
        aria-label="Chat on WhatsApp"
      >
        <div className="whatsapp-pulse-glow" />
        <div className="whatsapp-pulse-glow delay" />
        <div className="whatsapp-pulse-icon-container">
          <svg className="whatsapp-icon-svg" viewBox="0 0 24 24" width="28" height="28">
            <path fill="currentColor" d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.758.459 3.412 1.33 4.869l-1.414 5.162 5.283-1.386c1.397.762 2.977 1.168 4.588 1.168 5.505 0 10.012-4.482 10.012-9.988 0-5.506-4.507-9.988-10.012-9.988zm0 18.293c-1.48 0-2.934-.398-4.205-1.15l-.302-.18-3.125.82.834-3.044-.197-.314c-.827-1.319-1.264-2.85-1.264-4.437 0-4.571 3.72-8.291 8.29-8.291 4.57 0 8.291 3.72 8.291 8.291 0 4.571-3.721 8.291-8.291 8.291zm4.56-6.223c-.25-.124-1.477-.727-1.707-.81-.23-.084-.397-.124-.567.125-.17.25-.65.81-.796.976-.147.166-.293.187-.543.063-.25-.125-1.054-.388-2.008-1.238-.742-.662-1.243-1.48-1.389-1.73-.146-.25-.015-.385.11-.51.112-.111.25-.292.375-.438.125-.146.166-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.567-1.365-.777-1.87-.205-.494-.41-.424-.567-.431-.146-.006-.312-.006-.479-.006-.166 0-.437.062-.667.312-.23.25-.875.854-.875 2.083 0 1.23.896 2.417.996 2.55.1.135 1.76 2.688 4.26 3.766.596.257 1.06.41 1.423.526.6.19 1.144.164 1.576.1.48-.073 1.477-.604 1.685-1.187.208-.583.208-1.083.146-1.187-.062-.104-.23-.166-.48-.29z" />
          </svg>
        </div>
      </a>


    </div>
  );
}

// Redesigned Sticky Scroll Products Component
function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const productRef0 = useRef(null);
  const productRef1 = useRef(null);
  const productRef2 = useRef(null);
  const productRef3 = useRef(null);
  const productRef4 = useRef(null);

  const products = [
    {
      number: "01",
      tag: "TATA STRUCTURA 210 YST",
      sub: "GALVANIZED STEEL HOLLOW SECTIONS",
      title: "Tata Structura 210 YST",
      text: "CII-IGBC Green-Pro certified premium hollow sections with consistent yield strength ≥210 MPa and superior geometric properties. Saves up to 40% material compared to open sections — ideal for gates, railings, roof sheds and institutional structures.",
      specs: [
        { label: "Yield Strength", val: "≥ 210 MPa" },
        { label: "Tensile Strength", val: "≥ 330 MPa" },
        { label: "Material Savings", val: "Up to 40% vs Open Sections" },
      ],
      btnLabel: "Explore 210 YST",
      exploreLink: "https://www.tatastructura.com/yst210",
      image: "/YST-210.png",
      badgeLabel: "TATA STRUCTURA 210 YST",
      indicatorLabel: "01 / 210 YST",
      applications: [
        {
          num: "01",
          label: "APPLICATION",
          title: "Gates & Railings",
          image: "/gates.jpg"
        },
        {
          num: "02",
          label: "APPLICATION",
          title: "Roof Sheds",
          image: "/carshed.jpg"
        }
      ]
    },
    {
      number: "02",
      tag: "TATA STRUCTURA 310/355 YST",
      sub: "HIGH TENSILE HOLLOW SECTIONS",
      title: "Tata Structura 310/355 YST",
      text: "Heavy-duty high yield strength structural hollow sections (≥310 MPa to ≥355 MPa) designed for large-span airport terminals, metro stations, stadiums, high-rises, and industrial warehouses.",
      specs: [
        { label: "Yield Strength", val: "≥ 310 - 355 MPa" },
        { label: "Load Capacity", val: "High Load Infrastructure" },
      ],
      btnLabel: "Explore 310/355 YST",
      exploreLink: "https://www.tatastructura.com/yst355",
      image: "/YST-310.png",
      badgeLabel: "TATA STRUCTURA 310/355 YST",
      indicatorLabel: "02 / 310/355 YST",
      applications: [
        {
          num: "01",
          label: "APPLICATION",
          title: "Airports & Stadiums",
          image: "/hyderabad_airport.png"
        },
        {
          num: "02",
          label: "APPLICATION",
          title: "Metro & Infrastructure",
          image: "/metro_rail.png"
        }
      ]
    },
    {
      number: "03",
      tag: "TATA STRUCTURA Z+",
      sub: "360 GSM ZINC COATED HOLLOW SECTIONS",
      title: "Tata Structura Z+",
      text: "360 GSM (~50 micron) pure zinc coating offers dual barrier and sacrificial protection against corrosion. Available in RHS, SHS & CHS profiles — most suitable for high rainfall and humid regions. Green-Pro certified by CII-IGBC.",
      specs: [
        { label: "Zinc Coating", val: "360 GSM (~50 Microns)" },
        { label: "Protection", val: "Barrier + Sacrificial (Zinc Oxide)" },
        { label: "Material Savings", val: "Up to 40% vs Open Sections" },
      ],
      btnLabel: "Explore Structura Z+",
      exploreLink: "https://www.tatastructura.com/zplus",
      image: "/Structura-z+.png",
      badgeLabel: "TATA STRUCTURA Z+",
      indicatorLabel: "03 / Z+",
      applications: [
        {
          num: "01",
          label: "APPLICATION",
          title: "Gates, Grilles & Pergolas",
          image: "/gates.jpg"
        },
        {
          num: "02",
          label: "APPLICATION",
          title: "Car Sheds & Rooftops",
          image: "/carshed.jpg"
        }
      ]
    },
    {
      number: "04",
      tag: "TATA STRUCTURA GP PIPES",
      sub: "IS:1239 & IS:3589 GALVANIZED IRON PIPES",
      title: "Tata Structura GP Pipes",
      text: "Market leader in galvanized steel pipes manufactured using high-quality Boron + Steel HR strips from Tata Steel's Hot Strip Mill. Uses HFIW process with hi-tech hot-dip galvanizing (≥360 GSM pure zinc coating) for exceptional rust resistance and weld consistency. Green-Pro Certified and manufactured as per IS: 1239 & IS: 3589 standards.",
      specs: [
        { label: "Zinc Coating", val: "≥ 360 GSM Pure Zinc" },
        { label: "Quality Standards", val: "IS: 1239 & IS: 3589 (BIS Licensed)" },
        { label: "Material Composition", val: "Boron + Steel (Extended Life)" },
      ],
      btnLabel: "Explore GP Pipes",
      exploreLink: "https://www.tatapipes.com/products/galvanized-pipes/",
      image: "/GP-pipe.jpg",
      objectPosition: "center center",
      badgeLabel: "TATA STRUCTURA GP PIPES",
      indicatorLabel: "04 / GP PIPES",
      applications: [
        {
          num: "01",
          label: "APPLICATION",
          title: "Plumbing & Irrigation",
          image: "/gi-pipes.png"
        },
        {
          num: "02",
          label: "APPLICATION",
          title: "Fire Fighting & Infrastructure",
          image: "/fire-pipes.png"
        }
      ]
    },
    {
      number: "05",
      tag: "TATA AGRICO",
      sub: "AGRICULTURE & CONSTRUCTION HAND TOOLS",
      title: "Tata Agrico",
      text: "The oldest brand of Tata Steel (Pioneer since 1925), Tata Agrico is India's leading manufacturer of high-quality handheld implements including hoes, shovels, sickles, crowbars, pickaxes and hammers. ISO 9001:2008 certified and 100% guaranteed against manufacturing defects for agricultural, infrastructure and mining sectors.",
      specs: [
        { label: "Brand Heritage", val: "Tata Steel's Oldest Brand (Since 1925)" },
        { label: "Quality Assurance", val: "ISO 9001:2008 Certified" },
        { label: "Guarantee", val: "100% Manufacturing Defect Protection" },
      ],
      image: "/TATA_Agrico.png",
      objectPosition: "center center",
      badgeLabel: "TATA AGRICO",
      indicatorLabel: "05 / AGRICO",
      applications: [
        {
          num: "01",
          label: "APPLICATION",
          title: "Agricultural Implements",
          image: "/agro-app.png"
        },
        {
          num: "02",
          label: "APPLICATION",
          title: "Construction & Mining Tools",
          image: "/agro-app2.png"
        }
      ]
    }
  ];


  const productRefs = [productRef0, productRef1, productRef2, productRef3, productRef4];

  useEffect(() => {
    const observers = productRefs.map((ref, idx) => {
      if (!ref.current) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveProduct(idx);
        },
        {
          threshold: 0.3,
          rootMargin: '-20% 0px -20% 0px'  /* Trigger when card is in central 60% of viewport */
        }
      );
      obs.observe(ref.current);
      return obs;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <section className="products-section" id="products">
      {/* Desktop-only Storytelling Pinned Layout */}
      <div className="products-sticky-container products-desktop-only">

        {/* Left Side: Scrolling Content Narratives */}
        <div className="products-left-scrolling">
          <div className="products-header-sticky-helper scroll-reveal">
            <span className="products-subtitle">Our products</span>
            <h2 className="products-heading">Built on Quality. Backed by Tata.</h2>
          </div>

          {products.map((product, idx) => (
            <div
              key={idx}
              className="product-scroll-card-v2 scroll-reveal"
              ref={productRefs[idx]}
            >
              <span className="product-card-watermark">{product.number}</span>
              <div className="product-card-info-v2">
                <span className="product-tag-v2">{product.tag}</span>
                <span className="product-sub-v2">{product.sub}</span>
                <h3 className="product-title-v2">{product.title}</h3>
                <p className="product-text-v2">{product.text}</p>

                <div className="product-spec-grid">
                  {product.specs.map((spec, i) => (
                    <div className="spec-item" key={i}>
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-val">{spec.val}</span>
                    </div>
                  ))}
                </div>

                {product.btnLabel && (
                  <button 
                    className="product-explore-btn-v2"
                    onClick={() => {
                      if (product.exploreLink) window.open(product.exploreLink, '_blank');
                    }}
                  >
                    <span className="btn-text">{product.btnLabel}</span>
                    <div className="btn-icon-wrapper-v2">
                      <svg className="btn-arrow-icon-v2" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Sticky Visual Showcase Panel */}
        <div className="products-right-sticky-visuals scroll-reveal">
          <div className="product-visual-sticky-frame">
            {products.map((product, idx) => (
              <div key={idx} className={`product-visual-image-item ${idx === activeProduct ? 'active' : ''}`}>
                <div className="product-visual-split-layout">
                  {/* Left (70%) - Large Product Image */}
                  <div className="product-main-visual">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-main-visual-img"
                      loading="lazy"
                      style={{ objectPosition: product.objectPosition || '-25px center' }}
                    />
                    {!product.hideBadge && (
                      <div className="product-visual-badge-overlay">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                        </svg>
                        <span className="visual-badge-label">{product.badgeLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* Right (30%) - Stacked Cards */}
                  <div className="product-app-cards-stack">
                    {product.applications && product.applications.map((app, i) => (
                      <div className="product-app-card" key={i}>
                        <div className="app-card-text-header">
                          <div className="app-card-label-row">
                            <span className="app-card-number">{app.num}</span>
                            <span className="app-card-label">{app.label}</span>
                          </div>
                          <h4 className="app-card-title">{app.title}</h4>
                        </div>
                        <div className="app-card-image-wrap">
                          <img src={app.image} alt={app.title} className="app-card-img" loading="lazy" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Indicator Control Links */}
          <div className="product-visual-nav-indicators">
            {products.map((product, idx) => (
              <div
                key={idx}
                className={`product-indicator-nav-dot ${idx === activeProduct ? 'active' : ''}`}
                onClick={() => {
                  setActiveProduct(idx);
                  productRefs[idx].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <span className="dot-label">{product.indicatorLabel}</span>
                <div className="dot-line-bar">
                  <div className="dot-line-fill" style={{ width: idx === activeProduct ? '100%' : '0%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile-only Vertically Flowing Product Layout */}
      <div className="products-mobile-only">
        <div className="products-header-mobile">
          <span className="products-subtitle">Our products</span>
          <h2 className="products-heading">Built on Quality. Backed by Tata.</h2>
        </div>

        <div className="product-mobile-list">
          {products.map((product, idx) => (
            <div key={idx} className="product-mobile-item">

              {/* 1. Large Product Image */}
              <div className="product-main-visual-mobile">
                <img src={product.image} alt={product.title} className="product-main-visual-img" loading="lazy" />
                {!product.hideBadge && (
                  <div className="product-visual-badge-overlay-mobile">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                    </svg>
                    <span className="visual-badge-label">{product.badgeLabel}</span>
                  </div>
                )}
              </div>

              {/* 2. Two Application Cards */}
              <div className="product-app-cards-stack-mobile">
                {product.applications && product.applications.map((app, i) => (
                  <div className="product-app-card-mobile" key={i}>
                    <div className="app-card-text-header">
                      <div className="app-card-label-row">
                        <span className="app-card-number">{app.num}</span>
                        <span className="app-card-label">{app.label}</span>
                      </div>
                      <h4 className="app-card-title">{app.title}</h4>
                    </div>
                    <div className="app-card-image-wrap">
                      <img src={app.image} alt={app.title} className="app-card-img" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>

              {/* 3. Product Information */}
              <div className="product-info-card-mobile">
                <span className="product-tag-v2">{product.tag}</span>
                <span className="product-sub-v2">{product.sub}</span>
                <h3 className="product-title-v2">{product.title}</h3>
                <p className="product-text-v2">{product.text}</p>

                <div className="product-spec-grid">
                  {product.specs.map((spec, i) => (
                    <div className="spec-item" key={i}>
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-val">{spec.val}</span>
                    </div>
                  ))}
                </div>

                {product.btnLabel && (
                  <button 
                    className="product-explore-btn-v2"
                    onClick={() => {
                      if (product.exploreLink) window.open(product.exploreLink, '_blank');
                    }}
                  >
                    <span className="btn-text">{product.btnLabel}</span>
                    <div className="btn-icon-wrapper-v2">
                      <svg className="btn-arrow-icon-v2" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Premium engineered benefits section for Mutyam Steel
function BenefitsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  const benefits = [
    {
      number: "01",
      title: "Cost Effective",
      eyebrow: "COST EFFECTIVE",
      desc: "Higher strength-to-weight ratio results in up to 30% reduction in steel consumption, delivering direct project economy.",
      image: "/Product-rect-3.png",
      badge: "Up to 30% reduction in steel consumption",
      points: [
        {
          title: "Reduces Overall Cost",
          text: "Lower handling, transportation, painting, and structural fabrication costs.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          )
        },
        {
          title: "Optimized Material Usage",
          text: "Maximizes load capacity using thinner walls, saving heavy tonnage.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          )
        },
        {
          title: "Higher Efficiency",
          text: "Faster installation cycles result in massive labor and overhead savings.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          )
        }
      ],
      menuIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      )
    },
    {
      number: "02",
      title: "High Strength",
      eyebrow: "HIGH STRENGTH",
      desc: "Superior load-bearing capacity engineered to deliver maximum yield strengths under heavy structural loads.",
      image: "/product-square.png",
      badge: "Certified high load 310/355 YST grade steel",
      points: [
        {
          title: "310/355 YST Grade Performance",
          text: "Certified grade steel designed to withstand extreme load demands.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          )
        },
        {
          title: "Heavy Structural Load Limits",
          text: "Ideal for column grids, long spans, high-rise buildings, and factory halls.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="10" x2="6" y2="14"></line>
              <line x1="18" y1="10" x2="18" y2="14"></line>
            </svg>
          )
        },
        {
          title: "Seismic Safety Performance",
          text: "High tensile flexibility absorbs stress waves, securing frames from cracking.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
          )
        }
      ],
      menuIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      number: "03",
      title: "Corrosion Resistant",
      eyebrow: "CORROSION RESISTANT",
      desc: "Industrial-grade hot-dip galvanized protective shielding designed to survive highly humid and coastal weather.",
      image: "/product-circular.png",
      badge: "Up to 360 GSM hot-dip zinc shield",
      points: [
        {
          title: "360 GSM Galvanized Shield",
          text: "Prevents rust nucleation and water penetration at joint junctions.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          )
        },
        {
          title: "Maintenance-Free Longevity",
          text: "Retains structural integrity for decades without recurring paint coats.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          )
        },
        {
          title: "Harsh Environment Survival",
          text: "Maintains optimal resistance against salt air, rain, and atmospheric pollutants.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
          )
        }
      ],
      menuIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      number: "04",
      title: "Easy Fabrication",
      eyebrow: "EASY FABRICATION",
      desc: "Outstanding weldability and structural ductility ensure clean cuts and joints without compromise.",
      image: "/Product-rect-1.png",
      badge: "Speeds up workshop fabrication by 25%",
      points: [
        {
          title: "Seamless Welded Joints",
          text: "Chemical balance guarantees excellent ductility and smooth weld seams.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="3" x2="6" y2="21"></line>
              <line x1="18" y1="3" x2="18" y2="21"></line>
              <line x1="6" y1="12" x2="18" y2="12"></line>
            </svg>
          )
        },
        {
          title: "Workshop Pre-Shaping",
          text: "High malleability allows precise roll-forming and cutting offsets.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          )
        },
        {
          title: "Standard Tool Compatibility",
          text: "Reduces wear and tear on bending dies, saws, and automated machinery.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
          )
        }
      ],
      menuIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      number: "05",
      title: "Design Flexibility",
      eyebrow: "DESIGN FLEXIBILITY",
      desc: "Clean geometric profiles and elegant corners allow architect-led custom framing and columns.",
      image: "/rooftop.png",
      badge: "Enables aesthetic modern framing profiles",
      points: [
        {
          title: "Architectural Cleanliness",
          text: "Clean visual edges complement modern glass, wood, and concrete interfaces.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          )
        },
        {
          title: "Space-Saving Columns",
          text: "High loading limits per unit volume translate to minimal bulk profiles.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <line x1="15" y1="3" x2="15" y2="21"></line>
            </svg>
          )
        },
        {
          title: "Internal Conduit Routing",
          text: "Hollow profile centers allow routing utility wiring and pipes internally.",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          )
        }
      ],
      menuIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      )
    }
  ];

  const updateSlider = () => {
    const activeBtn = tabRefs.current[activeTab];
    if (activeBtn) {
      setSliderStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [activeTab]);

  const activeBenefit = benefits[activeTab];

  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">

        {/* Top Header */}
        <div className="benefits-header">
          <span className="benefits-eyebrow">WHY CHOOSE MUTYAM STEEL?</span>
          <h2 className="benefits-heading">Engineered Benefits. Built to Last.</h2>
          <p className="benefits-subheading">
            Each feature is designed to deliver unmatched value and precision engineering across every application.
          </p>
        </div>

        {/* Magic Menu Navigation */}
        <div className="magic-menu-wrapper">
          <div className="magic-menu-container">
            {/* Sliding Background Pill */}
            <div
              className="magic-menu-indicator"
              style={{
                left: `${sliderStyle.left}px`,
                width: `${sliderStyle.width}px`
              }}
            />
            {benefits.map((benefit, idx) => (
              <button
                key={idx}
                ref={(el) => (tabRefs.current[idx] = el)}
                className={`magic-menu-btn ${idx === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="magic-btn-icon-circle">
                  {benefit.menuIcon}
                </span>
                <span className="magic-btn-text">{benefit.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Panel */}
        <div className="benefit-panel-card" key={activeTab}>
          {/* Left Column: Details */}
          <div className="benefit-panel-left">
            <span className="benefit-panel-number">{activeBenefit.number} —</span>
            <h3 className="benefit-panel-title">{activeBenefit.title}</h3>
            <p className="benefit-panel-desc">{activeBenefit.desc}</p>

            <div className="benefit-panel-divider" />

            <div className="benefit-points-list">
              {activeBenefit.points.map((point, idx) => (
                <div className="benefit-point-item" key={idx}>
                  <div className="benefit-point-icon-box">
                    {point.icon}
                  </div>
                  <div className="benefit-point-text-box">
                    <h4 className="benefit-point-title">{point.title}</h4>
                    <p className="benefit-point-desc">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="benefit-panel-right">
            {/* Radial background glow decoration */}
            <div className="benefit-image-bg-glow" />

            <div className="benefit-image-frame">
              <img
                src={activeBenefit.image}
                alt={activeBenefit.title}
                className="benefit-right-image"
                loading="lazy"
              />

              {/* Floating Stat Widget */}
              <div className="benefit-floating-widget">
                <div className="benefit-widget-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="benefit-widget-text">{activeBenefit.badge}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


// Corporate Clients & Prestigious Projects Section
function TrustProjectsSection() {
  const sectionRef = useRef(null);

  const clientLogos = [
    { name: "Sri Sreenivasa Constructions", el: (<div className="trust-logo-inner"><div className="trust-logo-circle-icon" style={{ borderColor: '#0056A4' }}><svg width="14" height="14" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="#0056A4" strokeWidth="2.5" fill="none" /><path d="M10 20 C10 12, 22 12, 22 20" stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" /><circle cx="16" cy="16" r="3" fill="#0056A4" /></svg></div><div className="trust-logo-text-group"><span className="trust-logo-name" style={{ color: '#0056A4' }}>Sri Sreenivasa</span><span className="trust-logo-sub" style={{ color: '#E53935' }}>CONSTRUCTIONS</span></div></div>) },
    { name: "Phoenix Group", el: (<div className="trust-logo-inner"><svg width="22" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 18 C4 10, 20 10, 20 18" stroke="#800020" strokeWidth="4" fill="none" strokeLinecap="round" /><path d="M8 18 C8 14, 16 14, 16 18" stroke="#E53935" strokeWidth="2" fill="none" strokeLinecap="round" /></svg><span className="trust-logo-name" style={{ color: '#1E293B' }}>PHOENIX GROUP</span></div>) },
    { name: "NCC Ltd", el: (<div className="trust-logo-inner"><div className="trust-logo-square-icon" style={{ background: '#005A9C' }}>NCC</div><span className="trust-logo-name" style={{ color: '#071827' }}>NCC LTD</span></div>) },
    { name: "Aparna", el: (<div className="trust-logo-inner trust-logo-center"><span className="trust-logo-big" style={{ color: '#0F172A', letterSpacing: '0.18em' }}>APARNA</span><span className="trust-logo-caption">LEAD WITH VALUE</span></div>) },
    { name: "L&T", el: (<div className="trust-logo-inner"><div className="trust-logo-lt-badge">L&T</div><div className="trust-logo-text-group"><span className="trust-logo-name" style={{ color: '#071827' }}>LARSEN & TOUBRO</span><span className="trust-logo-caption">Engineering Trust</span></div></div>) },
    { name: "JSW Cement", el: (<div className="trust-logo-inner"><span className="trust-logo-big" style={{ color: '#0056A4', fontStyle: 'italic' }}>JSW</span><span className="trust-logo-name" style={{ color: '#0056A4' }}>Cement</span></div>) },
    { name: "MEIL", el: (<div className="trust-logo-inner"><div className="trust-logo-square-icon" style={{ background: '#E53935' }}>M</div><div className="trust-logo-text-group"><span className="trust-logo-name" style={{ color: '#002B7F' }}>meil</span><span className="trust-logo-caption">Megha Engineering</span></div></div>) },
    { name: "Tata Steel", el: (<div className="trust-logo-inner trust-logo-center"><span className="trust-logo-big" style={{ color: '#005A9C', letterSpacing: '0.15em' }}>TATA</span><span className="trust-logo-caption">TATA STEEL</span></div>) },
  ];

  const projects = [
    { 
      image: '/projects/Cantilever-glass-bridge/glass-1.jpeg', 
      category: 'Industrial', 
      date: 'Visakhapatnam, AP', 
      name: 'Cantilever Glass Bridge', 
      desc: "India's longest cantilever glass skywalk built on the strength of 100% Tata Structura hollow section pipes." 
    },
    { 
      image: '/projects/Guntur-cold-storage/Storage-1.jpeg', 
      category: 'Warehouse', 
      date: 'Guntur, AP', 
      name: 'Guntur Cold Storage', 
      desc: 'High-capacity temperature-controlled agricultural storage built with precision Tata Structura steel sections.' 
    },
    { 
      image: '/projects/Shamshabad-warehouse/Warehouse-1.jpeg', 
      category: 'Warehouse', 
      date: 'Shamshabad, Hyd', 
      name: 'Shamshabad Warehouse', 
      desc: 'Modern logistics warehousing facility built with high-span Tata Structura steel hollow sections for maximum storage.' 
    }
  ];

  // Scroll-triggered text reveal
  useEffect(() => {
    const els = document.querySelectorAll('.trust-animate');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('trust-in-view'), Number(delay));
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Duplicate logos for seamless marquee loop
  const marqueLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="trust-section scroll-reveal" id="clients-projects" ref={sectionRef}>
      <div className="trust-cad-bg" style={{ backgroundImage: "url('/steel_framework_cad.png')" }} />
      <div className="trust-dot-grid" />
      <div className="trust-wrapper">
        {/* Section Title */}
        <div className="trust-section-title">
          <span className="about-subtitle trust-animate" data-delay="0">Partnerships &amp; projects</span>
          <h2 className="about-heading trust-animate" data-delay="50">Resting on Strong Foundations</h2>
          <p className="trust-section-desc trust-animate" data-delay="100">We proudly collaborate with India's leading infrastructure companies and contribute to some of the country's most significant commercial, industrial, and public infrastructure developments.</p>
        </div>

        <div className="trust-blocks-stack">
          {/* Block 1: Clients â€” Infinite Marquee */}
          <div className="trust-block trust-clients-block trust-animate" data-delay="150">
            {/* Left label */}
            <div className="trust-clients-label">
              <span className="trust-block-tag">Our Partners</span>
              <h3 className="trust-block-heading">Corporate Clients</h3>
              <p className="trust-block-sub">Collaborating with industry pioneers.</p>
            </div>

            {/* Google Rating */}
            <div className="trust-rating-widget">
              <div className="trust-google-logo-block">
                <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,19.001,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                <div className="trust-google-label">
                  <span className="trust-google-title">Google</span>
                  <span className="trust-google-sub">Reviews</span>
                </div>
              </div>
              <div className="trust-rating-text">
                <div className="trust-stars">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                  ))}
                  <span className="trust-rating-score">5.0</span>
                </div>
                <span className="trust-rating-count">6,500+ Google Reviews</span>
              </div>
            </div>

            {/* Infinite Marquee */}
            <div className="trust-marquee-wrap">
              <div className="trust-marquee-fade-left" />
              <div className="trust-marquee-fade-right" />
              <div className="trust-marquee-track">
                {marqueLogos.map((item, i) => (
                  <div key={i} className="trust-marquee-item">
                    <div className="trust-logo-card">{item.el}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Block 2: Projects */}
          <div className="trust-block trust-projects-block">
            <div className="trust-projects-label">
              <span className="trust-block-tag trust-animate" data-delay="0">— Prestigious Portfolio</span>
              <h3 className="trust-projects-heading trust-animate" data-delay="80">Projects That<br />Define Quality.</h3>
              <p className="trust-block-sub trust-animate" data-delay="160">We contribute to India's key infrastructure developments, delivering unparalleled strength and structural durability through premium-grade steel distribution.</p>
              <a href="/projects" className="trust-view-all-btn trust-animate" data-delay="220">
                <span className="btn-text">View All Projects</span>
                <span className="btn-icon-wrapper">
                  <svg className="btn-arrow-icon" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="trust-project-cards">
              {projects.map((p, i) => (
                <div key={i} className={`trust-project-card trust-animate`} data-delay={`${i * 100}`}>
                  <div className="trust-card-img-wrap">
                    <img src={p.image} alt={p.name} className="trust-card-img" loading="lazy" />
                    <span className="trust-card-category">{p.category}</span>
                  </div>
                  <div className="trust-card-body">
                    <span className="trust-card-date">{p.date}</span>
                    <h4 className="trust-card-title">{p.name}</h4>
                    <p className="trust-card-desc">{p.desc}</p>
                    <a href="/projects" className="trust-card-link">
                      <span>Read More</span>
                      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// Interactive Gallery Showcase Component
function GalleryShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const galleryItems = [
    {
      title: "GATES MAKE THE WAY TO YOUR HOME. MORE SECURE. MORE SAFER.",
      desc: "",
      image: "/gates.jpg",
      cta: "Explore Gallery",
      category: "Manufacturing Excellence",
      number: "01",
      iconImg: "/gates.jpg"
    },
    {
      title: "UNCOMPROMISING QUALITY ASSURANCE.",
      desc: "Building the Future. Not for Today — Always for Tomorrow.",
      image: "/projects/Shamshabad-warehouse/Warehouse-1.jpeg",
      cta: "View Quality Controls",
      category: "Quality Assurance",
      number: "02",
      iconImg: "/projects/Shamshabad-warehouse/Warehouse-1.jpeg"
    },
    {
      title: "WORK THAT SHINES TOGETHER. VIBE TOGETHER. ALWAYS BEAUTIFUL.",
      desc: "",
      image: "/carshed.jpg",
      cta: "See Our Work",
      category: "Reliable and Stronger",
      number: "03",
      iconImg: "/carshed.jpg"
    },
    {
      title: "SMART STEEL FOR MODERN HOMES.",
      desc: "From roofs and sheds to grills and railings, we create strong steel solutions for safe, stylish and long-lasting homes.",
      image: "/projects/Cantilever-glass-bridge/glass-1.jpeg",
      cta: "Explore Residential Range",
      category: "Residential Solutions",
      number: "04",
      iconImg: "/projects/Cantilever-glass-bridge/glass-1.jpeg"
    },
    {
      title: "SOLAR MOUNTING STRUCTURES.",
      desc: "Engineered galvanized steel structures designed to support solar installations with long-term durability and corrosion resistance.",
      image: "/Solarsheds.png",
      cta: "Explore Solar Solutions",
      category: "Sustainable Future",
      number: "05",
      iconImg: "/Solarsheds.png"
    },
    {
      title: "OUR PEOPLE — FORGING TOMORROW.",
      desc: "Our skilled workforce and engineering experts unite under strict standards to guide our steel legacy forward.",
      image: "/building_thumbnail.png",
      cta: "Meet Our Team",
      category: "Our People",
      number: "06",
      iconImg: "/engineer_helmet.png"
    }
  ];

  // Auto-play vertical tabs, resetting timer on manual user interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % galleryItems.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer);
  }, [activeTab, galleryItems.length]);

  return (
    <div className="gallery-accordion-container">
      {galleryItems.map((item, idx) => {
        const isActive = idx === activeTab;
        return (
          <div
            key={idx}
            className={`gallery-accordion-item ${isActive ? 'active' : ''}`}
            onClick={() => {
              if (!isActive) setActiveTab(idx);
            }}
          >
            {/* The Background Image for Active Item */}
            <div
              className="gallery-item-bg"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Dark readability overlay for active item */}
            <div className="gallery-item-overlay" />

            {/* Collapsed State Visuals */}
            <div className="gallery-item-collapsed-content">
              <div className="collapsed-steel-image-wrapper">
                <img src={item.iconImg} alt={item.category} className="collapsed-thumbnail-img" loading="lazy" />
              </div>
              <span className="collapsed-label">{item.category}</span>
            </div>

            {/* Expanded State Visuals */}
            <div className="gallery-item-expanded-content">
              <div className="expanded-text-wrapper">
                <span className="expanded-category-tag">{item.category}</span>
                <h3 className="expanded-title">{item.title}</h3>
                {item.desc && <div className="expanded-separator" />}
                {item.desc && <p className="expanded-desc">{item.desc}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// --------------------------------------------------------------------------
// Network & Dealers Interactive Map Component
// --------------------------------------------------------------------------

const dealerData = [
  {
    id: "tg-hyd-1",
    name: "Mutyam Steel Depot",
    address: "Plot No. 2, Sagar \"X\" Road, L.B. Nagar, Hyderabad, Telangana - 500074",
    phone: "+91 74167 25999",
    state: "Telangana",
    district: "Hyderabad",
    category: "Dealers",
    lat: 17.3458,
    lon: 78.5522
  },
  {
    id: "tg-hyd-2",
    name: "Sri Srinivasa Iron & Steel Traders",
    address: "Sy No. 12, Suchitra Junction, Quthbullapur, Hyderabad, Telangana - 500067",
    phone: "+91 74167 25111",
    state: "Telangana",
    district: "Hyderabad",
    category: "Dealers",
    lat: 17.4988,
    lon: 78.4722
  },
  {
    id: "tg-wgl-1",
    name: "Warangal Steel Hub",
    address: "H.No. 4-12-88, Hunter Road, Hanamkonda, Warangal, Telangana - 506001",
    phone: "+91 74167 25222",
    state: "Telangana",
    district: "Warangal",
    category: "Dealers",
    lat: 17.9689,
    lon: 79.5941
  },
  {
    id: "tg-krm-1",
    name: "Karimnagar Steel Corporation",
    address: "Collectorate Road, Mukarampura, Karimnagar, Telangana - 505001",
    phone: "+91 74167 25333",
    state: "Telangana",
    district: "Karimnagar",
    category: "Dealers",
    lat: 18.4386,
    lon: 79.1288
  },
  {
    id: "tg-nzb-1",
    name: "Nizamabad Iron & Steel Syndicate",
    address: "Armoor Road, Nizamabad, Telangana - 503001",
    phone: "+91 74167 25444",
    state: "Telangana",
    district: "Nizamabad",
    category: "Dealers",
    lat: 18.6722,
    lon: 78.0988
  },
  {
    id: "tg-kmm-1",
    name: "Khammam Steel Agency",
    address: "Wyra Road, Khammam, Telangana - 507001",
    phone: "+91 74167 25555",
    state: "Telangana",
    district: "Khammam",
    category: "Dealers",
    lat: 17.2472,
    lon: 80.1512
  },
  {
    id: "tg-nlg-1",
    name: "Nalgonda Steel Dealers",
    address: "Devarakonda Road, Nalgonda, Telangana - 508001",
    phone: "+91 74167 25666",
    state: "Telangana",
    district: "Nalgonda",
    category: "Dealers",
    lat: 17.0500,
    lon: 79.2700
  },
  {
    id: "ap-vjw-1",
    name: "Vijayawada Steel Corporation",
    address: "Eluru Road, Benz Circle, Vijayawada, Andhra Pradesh - 520010",
    phone: "+91 74167 25777",
    state: "Andhra Pradesh",
    district: "Krishna",
    category: "Dealers",
    lat: 16.5062,
    lon: 80.6480
  },
  {
    id: "ap-vsk-1",
    name: "Vizag Steel & Alloys",
    address: "Gajuwaka Junction, Visakhapatnam, Andhra Pradesh - 530026",
    phone: "+91 74167 25888",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    category: "Dealers",
    lat: 17.6868,
    lon: 83.2185
  },
  {
    id: "ap-gnt-1",
    name: "Guntur Steel Agencies",
    address: "Amaravathi Road, Guntur, Andhra Pradesh - 522002",
    phone: "+91 74167 25001",
    state: "Andhra Pradesh",
    district: "Guntur",
    category: "Dealers",
    lat: 16.3067,
    lon: 80.4363
  },
  {
    id: "ap-nlr-1",
    name: "Nellore Iron & Steel Traders",
    address: "Trunk Road, Nellore, Andhra Pradesh - 524001",
    phone: "+91 74167 25002",
    state: "Andhra Pradesh",
    district: "Nellore",
    category: "Dealers",
    lat: 14.4426,
    lon: 79.9865
  },
  {
    id: "ap-tpt-1",
    name: "Tirupati Steel Depot",
    address: "Renigunta Road, Tirupati, Andhra Pradesh - 517501",
    phone: "+91 74167 25003",
    state: "Andhra Pradesh",
    district: "Chittoor",
    category: "Dealers",
    lat: 13.6288,
    lon: 79.4192
  },
  {
    id: "ap-knl-1",
    name: "Kurnool Steel Emporium",
    address: "Bellary Road, Kurnool, Andhra Pradesh - 518001",
    phone: "+91 74167 25004",
    state: "Andhra Pradesh",
    district: "Kurnool",
    category: "Dealers",
    lat: 15.8281,
    lon: 78.0373
  },
  {
    id: "ap-rjy-1",
    name: "Rajahmundry Steel Traders",
    address: "Main Road, Rajahmundry, East Godavari, Andhra Pradesh - 533101",
    phone: "+91 74167 25005",
    state: "Andhra Pradesh",
    district: "East Godavari",
    category: "Dealers",
    lat: 17.0005,
    lon: 81.7963
  },
  // Fabricators (Telangana)
  {
    id: "tg-hyd-fab-1",
    name: "Deccan Structural Fabricators",
    address: "IDAL, Jeedimetla Phase 3, Hyderabad, Telangana - 500055",
    phone: "+91 98480 12345",
    state: "Telangana",
    district: "Hyderabad",
    category: "Fabricators",
    lat: 17.5150,
    lon: 78.4500
  },
  {
    id: "tg-hyd-fab-2",
    name: "Metro Steel Erectors",
    address: "Industrial Area, Nacharam, Hyderabad, Telangana - 500076",
    phone: "+91 98480 54321",
    state: "Telangana",
    district: "Hyderabad",
    category: "Fabricators",
    lat: 17.4250,
    lon: 78.5600
  },
  {
    id: "tg-wgl-fab-1",
    name: "Kakatiya Iron Fabricators",
    address: "Industrial Estate, Warangal, Telangana - 506007",
    phone: "+91 98480 67890",
    state: "Telangana",
    district: "Warangal",
    category: "Fabricators",
    lat: 17.9800,
    lon: 79.5700
  },
  // Fabricators (Andhra Pradesh)
  {
    id: "ap-vsk-fab-1",
    name: "Coastal Heavy Engineering & Fabricators",
    address: "Autonagar, Gajuwaka, Visakhapatnam, Andhra Pradesh - 530012",
    phone: "+91 89120 12345",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    category: "Fabricators",
    lat: 17.7000,
    lon: 83.2000
  },
  {
    id: "ap-vjw-fab-1",
    name: "Krishna Valley Fabricators",
    address: "Feeder Road, Kanuru, Vijayawada, Andhra Pradesh - 520007",
    phone: "+91 86620 54321",
    state: "Andhra Pradesh",
    district: "Krishna",
    category: "Fabricators",
    lat: 16.4950,
    lon: 80.6800
  },
  // Architect & Engineers (Telangana)
  {
    id: "tg-hyd-arc-1",
    name: "Vanguard Structural Design Consultants",
    address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana - 500033",
    phone: "+91 94400 12345",
    state: "Telangana",
    district: "Hyderabad",
    category: "Architect & Engineers",
    lat: 17.4300,
    lon: 78.4000
  },
  {
    id: "tg-hyd-arc-2",
    name: "Aura Architects & Partners",
    address: "Hitech City, Madhapur, Hyderabad, Telangana - 500081",
    phone: "+91 94400 54321",
    state: "Telangana",
    district: "Hyderabad",
    category: "Architect & Engineers",
    lat: 17.4500,
    lon: 78.3800
  },
  {
    id: "tg-wgl-arc-1",
    name: "Warangal Design Engineers",
    address: "Subedari, Hanamkonda, Warangal, Telangana - 506001",
    phone: "+91 94400 67890",
    state: "Telangana",
    district: "Warangal",
    category: "Architect & Engineers",
    lat: 17.9900,
    lon: 79.5800
  },
  // Architect & Engineers (Andhra Pradesh)
  {
    id: "ap-vsk-arc-1",
    name: "Vizag Engineering Consultants",
    address: "Siripuram Junction, Visakhapatnam, Andhra Pradesh - 530003",
    phone: "+91 89140 12345",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    category: "Architect & Engineers",
    lat: 17.7200,
    lon: 83.3100
  },
  {
    id: "ap-vjw-arc-1",
    name: "Amaravati Architects & Associates",
    address: "M.G. Road, Vijayawada, Andhra Pradesh - 520010",
    phone: "+91 86640 54321",
    state: "Andhra Pradesh",
    district: "Krishna",
    category: "Architect & Engineers",
    lat: 16.5100,
    lon: 80.6300
  }
];

const districtsByState = {
  "All": ["All Districts"],
  "Telangana": ["All Districts", "Hyderabad", "Karimnagar", "Warangal", "Khammam", "Nizamabad", "Nalgonda"],
  "Andhra Pradesh": ["All Districts", "Krishna", "Visakhapatnam", "Guntur", "Nellore", "Chittoor", "Kurnool", "East Godavari"]
};

const minLon = 76.5;
const maxLon = 85.0;
const minLat = 13.0;
const maxLat = 20.0;
const mapWidth = 500;
const mapHeight = 410;

const project = (lon, lat) => {
  const x = ((lon - minLon) / (maxLon - minLon)) * mapWidth;
  const y = mapHeight - ((lat - minLat) / (maxLat - minLat)) * mapHeight;
  return [x, y];
};

const getPathData = (geometry) => {
  if (!geometry) return "";
  let d = "";
  if (geometry.type === "Polygon") {
    geometry.coordinates.forEach((ring) => {
      const points = ring.map((pt) => project(pt[0], pt[1]));
      d += ` M ${points.map((p) => p.join(",")).join(" L ")} Z`;
    });
  } else if (geometry.type === "MultiPolygon") {
    geometry.coordinates.forEach((poly) => {
      poly.forEach((ring) => {
        const points = ring.map((pt) => project(pt[0], pt[1]));
        d += ` M ${points.map((p) => p.join(",")).join(" L ")} Z`;
      });
    });
  }
  return d;
};

function NetworkSection({ selectedCategory, setSelectedCategory }) {
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [districtDropdownOpen, setDistrictDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const stateRef = useRef(null);
  const districtRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (stateRef.current && !stateRef.current.contains(event.target)) {
        setStateDropdownOpen(false);
      }
      if (districtRef.current && !districtRef.current.contains(event.target)) {
        setDistrictDropdownOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [telanganaGeo, setTelanganaGeo] = useState(null);
  const [andhraGeo, setAndhraGeo] = useState(null);
  const [selectedState, setSelectedState] = useState("All");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");

  const initialList = dealerData.filter((d) => d.category === selectedCategory);
  const [filteredDealers, setFilteredDealers] = useState(initialList);
  const [activeDealer, setActiveDealer] = useState(initialList[0]);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  useEffect(() => {
    Promise.all([
      fetch("/telangana.geojson").then((res) => res.json()),
      fetch("/andhra.geojson").then((res) => res.json())
    ])
      .then(([tgData, apData]) => {
        setTelanganaGeo(tgData);
        setAndhraGeo(apData);
      })
      .catch((err) => console.error("Error loading GeoJSON paths:", err));
  }, []);

  const handleFilterNetwork = (category, state, district) => {
    let result = dealerData;
    // Filter by category
    result = result.filter((d) => d.category === category);
    // Filter by state
    if (state !== "All") {
      result = result.filter((d) => d.state === state);
    }
    // Filter by district
    if (district !== "All Districts") {
      result = result.filter((d) => d.district === district);
    }

    setFilteredDealers(result);

    if (result.length > 0) {
      const dealer = result[0];
      setActiveDealer(dealer);
      const [x, y] = project(dealer.lon, dealer.lat);
      const scale = 2.0;
      setZoom(scale);
      setPan({ x: mapWidth / 2 - x * scale, y: mapHeight / 2 - y * scale });
    } else {
      setActiveDealer(null);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    setSelectedState("All");
    setSelectedDistrict("All Districts");
    handleFilterNetwork(selectedCategory, "All", "All Districts");
  }, [selectedCategory]);

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedDistrict("All Districts");
    handleFilterNetwork(selectedCategory, state, "All Districts");
  };

  const focusOnCoordinate = (lon, lat) => {
    const [x, y] = project(lon, lat);
    const scale = 2.0;
    setZoom(scale);
    setPan({ x: mapWidth / 2 - x * scale, y: mapHeight / 2 - y * scale });
  };

  const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  const handleZoom = (direction) => {
    setZoom((prev) => {
      const nextZoom = direction === "in" ? Math.min(prev + 0.4, 4) : Math.max(prev - 0.4, 0.8);
      setPan((prevPan) => ({
        x: mapWidth / 2 - (mapWidth / 2 - prevPan.x) * (nextZoom / prev),
        y: mapHeight / 2 - (mapHeight / 2 - prevPan.y) * (nextZoom / prev)
      }));
      return nextZoom;
    });
  };

  const handleSelectDealer = (dealer) => {
    setActiveDealer(dealer);
    focusOnCoordinate(dealer.lon, dealer.lat);
  };

  const connections = [];
  const renderedConnections = new Set();
  for (let i = 0; i < filteredDealers.length; i++) {
    for (let j = i + 1; j < filteredDealers.length; j++) {
      const d1 = filteredDealers[i];
      const d2 = filteredDealers[j];
      const [x1, y1] = project(d1.lon, d1.lat);
      const [x2, y2] = project(d2.lon, d2.lat);
      const dist = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
      if (dist < 65) {
        const key = `${d1.id}-${d2.id}`;
        if (!renderedConnections.has(key)) {
          connections.push([x1, y1, x2, y2, key]);
          renderedConnections.add(key);
        }
      }
    }
  }

  const telanganaCenter = project(79.0, 17.8);
  const andhraCenter = project(79.8, 15.8);

  return (
    <section id="dealer-network" className="network-section scroll-reveal scroll-mt-28">
      <div className="network-bg-dots" />
      <div className="network-bg-grid" />

      <div className="network-wrapper">
        <div className="network-grid">

          <div className="network-info">
            <span className="network-tagline">Network that reaches everywhere</span>
            <h2 className="network-heading">
              Our {selectedCategory} <span className="accent">&amp; Network</span>
            </h2>
            <p className="network-desc">
              A strong distribution network spanning across Telangana &amp; Andhra Pradesh to serve you better, faster, and stronger.
            </p>

            {/* Filters panel */}
            <div className="network-filters-box">
              <div className="network-filters-grid">

                <div className="filter-group">
                  <label className="filter-label">Select State</label>
                  <div className="dropdown-container" ref={stateRef}>
                    <button
                      onClick={() => {
                        setStateDropdownOpen(!stateDropdownOpen);
                        setDistrictDropdownOpen(false);
                        setCategoryDropdownOpen(false);
                      }}
                      className={`dropdown-btn ${stateDropdownOpen ? 'open' : ''}`}
                    >
                      <span>{selectedState === "All" ? "States" : selectedState}</span>
                      <span className="dropdown-arrow">
                        <svg className="w-3.5 h-3.5" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {stateDropdownOpen && (
                      <ul className="dropdown-list">
                        {[
                          { label: "States", value: "All" },
                          { label: "Telangana", value: "Telangana" },
                          { label: "Andhra Pradesh", value: "Andhra Pradesh" }
                        ].map((opt) => (
                          <li
                            key={opt.value}
                            onClick={() => {
                              handleStateChange(opt.value);
                              setStateDropdownOpen(false);
                            }}
                            className={`dropdown-item ${selectedState === opt.value ? 'selected' : ''}`}
                          >
                            <span>{opt.label}</span>
                            {selectedState === opt.value && <span className="selected-dot" />}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Select District</label>
                  <div className="dropdown-container" ref={districtRef}>
                    <button
                      onClick={() => {
                        setDistrictDropdownOpen(!districtDropdownOpen);
                        setStateDropdownOpen(false);
                        setCategoryDropdownOpen(false);
                      }}
                      className={`dropdown-btn ${districtDropdownOpen ? 'open' : ''}`}
                    >
                      <span>{selectedDistrict === "All Districts" ? "Districts" : selectedDistrict}</span>
                      <span className="dropdown-arrow">
                        <svg className="w-3.5 h-3.5" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {districtDropdownOpen && (
                      <ul className="dropdown-list">
                        {districtsByState[selectedState].map((dist) => (
                          <li
                            key={dist}
                            onClick={() => {
                              setSelectedDistrict(dist);
                              setDistrictDropdownOpen(false);
                              handleFilterNetwork(selectedCategory, selectedState, dist);
                            }}
                            className={`dropdown-item ${selectedDistrict === dist ? 'selected' : ''}`}
                          >
                            <span>{dist === "All Districts" ? "Districts" : dist}</span>
                            {selectedDistrict === dist && <span className="selected-dot" />}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Select Category</label>
                  <div className="dropdown-container" ref={categoryRef}>
                    <button
                      onClick={() => {
                        setCategoryDropdownOpen(!categoryDropdownOpen);
                        setStateDropdownOpen(false);
                        setDistrictDropdownOpen(false);
                      }}
                      className={`dropdown-btn ${categoryDropdownOpen ? 'open' : ''}`}
                      style={{ border: '1.5px solid #0066ff' }}
                    >
                      <span>{selectedCategory}</span>
                      <span className="dropdown-arrow">
                        <svg className="w-3.5 h-3.5" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {categoryDropdownOpen && (
                      <ul className="dropdown-list">
                        {["Dealers", "Fabricators", "Architect & Engineers"].map((cat) => (
                          <li
                            key={cat}
                            onClick={() => {
                              setSelectedCategory(cat);
                              setCategoryDropdownOpen(false);
                              handleFilterNetwork(cat, selectedState, selectedDistrict);
                            }}
                            className={`dropdown-item ${selectedCategory === cat ? 'selected' : ''}`}
                          >
                            <span>{cat}</span>
                            {selectedCategory === cat && <span className="selected-dot" />}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Dealers List */}
            <div className="dealers-list-box">
              <h3 className="dealers-list-title">
                {selectedCategory} ({filteredDealers.length})
              </h3>
              {filteredDealers.length > 0 ? (
                <div className="dealers-scrollbar">
                  {filteredDealers.map((dealer) => {
                    const isActive = activeDealer?.id === dealer.id;
                    return (
                      <button
                        key={dealer.id}
                        onClick={() => handleSelectDealer(dealer)}
                        className={`dealer-item-btn ${isActive ? 'active' : ''}`}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, paddingRight: '10px', flex: 1 }}>
                          <span className="dealer-item-name">{dealer.name}</span>
                          <span className="dealer-item-addr">{dealer.address}</span>
                        </div>
                        <svg className="dealer-item-arrow" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="no-dealers-msg">
                  No {selectedCategory.toLowerCase()} found in this area.
                </div>
              )}
            </div>

          </div>

          {/* Right Panel Map */}
          <div className="map-frame-wrapper">
            <div className="map-viewport">

              <div className="map-counters">
                <div className="map-counter-pill">
                  <span className="map-counter-num">{selectedCategory === "Fabricators" ? "20+" : selectedCategory === "Architect & Engineers" ? "15+" : "50+"}</span>
                  <span className="map-counter-lbl">{selectedCategory === "Fabricators" ? "Fabricators" : selectedCategory === "Architect & Engineers" ? "Architects" : "Dealers"}</span>
                </div>
                <div className="map-counter-pill">
                  <span className="map-counter-num">100+</span>
                  <span className="map-counter-lbl">Locations</span>
                </div>
              </div>

              <div className="map-status-tag">
                <span className="status-dot-ping"></span>
                <span className="status-text">Locate Our {selectedCategory}</span>
              </div>

              <svg className="w-full h-full select-none" viewBox={`0 0 ${mapWidth} ${mapHeight}`} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ray-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0066ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="glow-radial" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0066ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
                  </radialGradient>
                  <filter id="glow-border" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, transformOrigin: "0 0", transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                  <g style={{ transform: "rotate(-10deg) scaleY(0.65)", transformOrigin: "250px 205px" }}>

                    {/* Layered base shapes to give 3D depth */}
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <g key={`extr-layer-${idx}`} style={{ transform: `translate(0px, ${idx * 0.8}px)` }} className="pointer-events-none">
                        {telanganaGeo && <path d={getPathData(telanganaGeo.features[0].geometry)} fill="#cbd5e0" stroke="#cbd5e0" strokeWidth={1} strokeLinejoin="round" />}
                        {andhraGeo && <path d={getPathData(andhraGeo.features[0].geometry)} fill="#cbd5e0" stroke="#cbd5e0" strokeWidth={1} strokeLinejoin="round" />}
                      </g>
                    ))}

                    {telanganaGeo && (
                      <path
                        d={getPathData(telanganaGeo.features[0].geometry)}
                        onClick={() => handleStateChange("Telangana")}
                        className={`state-polygon ${selectedState === "Telangana" ? 'active' : ''}`}
                        stroke={selectedState === "Telangana" ? "#0066ff" : "rgba(0, 102, 255, 0.25)"}
                        strokeWidth={selectedState === "Telangana" ? 1.8 : 1}
                        strokeLinejoin="round"
                      />
                    )}

                    {andhraGeo && (
                      <path
                        d={getPathData(andhraGeo.features[0].geometry)}
                        onClick={() => handleStateChange("Andhra Pradesh")}
                        className={`state-polygon ${selectedState === "Andhra Pradesh" ? 'active' : ''}`}
                        stroke={selectedState === "Andhra Pradesh" ? "#0066ff" : "rgba(0, 102, 255, 0.25)"}
                        strokeWidth={selectedState === "Andhra Pradesh" ? 1.8 : 1}
                        strokeLinejoin="round"
                      />
                    )}

                    {telanganaGeo && (
                      <text x={telanganaCenter[0]} y={telanganaCenter[1]} className="map-text-label" opacity={selectedState === "Telangana" || selectedState === "All" ? 0.75 : 0.25} textAnchor="middle">
                        TELANGANA
                      </text>
                    )}

                    {andhraGeo && (
                      <text x={andhraCenter[0]} y={andhraCenter[1] + 15} className="map-text-label" opacity={selectedState === "Andhra Pradesh" || selectedState === "All" ? 0.75 : 0.25} textAnchor="middle">
                        ANDHRA PRADESH
                      </text>
                    )}

                    {connections.map(([x1, y1, x2, y2, key]) => (
                      <line key={key} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0066ff" strokeWidth={0.8} strokeDasharray="2.5 1.5" opacity={0.25} className="pointer-events-none" />
                    ))}

                    {filteredDealers.map((dealer) => {
                      const [x, y] = project(dealer.lon, dealer.lat);
                      const isActive = activeDealer?.id === dealer.id;
                      return (
                        <g key={dealer.id} transform={`translate(${x}, ${y})`} style={{ cursor: 'pointer' }} onClick={() => handleSelectDealer(dealer)}>
                          <g className="map-pin-float">
                            <g style={{ transform: "scaleY(1.54) rotate(10deg)", transformOrigin: "0px 0px" }}>

                              {/* Pulsing glow under active pin */}
                              {isActive && (
                                <circle r={16} className="map-pin-pulse" />
                              )}

                              <line x1={0} y1={0} x2={0} y2={28} stroke="url(#ray-gradient)" strokeWidth={1.5} style={{ animation: "pulseAnimation 1.5s infinite" }} />
                              <ellipse cx={0} cy={28} rx={6} ry={2} fill="url(#glow-radial)" style={{ animation: "pulseAnimation 1.5s infinite" }} />

                              {/* Pin shape */}
                              <path
                                d="M0,0 C-4.5,-4.5 -6.5,-9 -6.5,-13 C-6.5,-17 -3.5,-20 0,-20 C3.5,-20 6.5,-17 6.5,-13 C6.5,-9 4.5,-4.5 0,0 Z"
                                fill={isActive ? "#0066ff" : "#5e6d82"}
                                stroke="#ffffff"
                                strokeWidth={isActive ? 1.5 : 1}
                                style={{ transition: "all 0.3s ease" }}
                              />
                              <circle cx={0} cy={-13} r={2.0} fill="#ffffff" />
                            </g>
                          </g>
                        </g>
                      );
                    })}

                  </g>
                </g>
              </svg>

              <div className="map-zoom-controls">
                <button onClick={() => handleZoom("in")} className="zoom-btn" title="Zoom In">+</button>
                <button onClick={() => handleZoom("out")} className="zoom-btn" title="Zoom Out">-</button>
                <button onClick={resetView} className="zoom-btn" title="Reset View">
                  <svg className="w-5 h-5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </button>
              </div>

              {activeDealer && (
                <div className="map-detail-overlay">
                  <span className="detail-state-lbl">{activeDealer.state} • {activeDealer.district} District</span>
                  <h4 className="detail-name">{activeDealer.name}</h4>
                  <div className="detail-info-row">
                    <p className="detail-info-item">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{activeDealer.address}</span>
                    </p>
                    <p className="detail-info-item">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{activeDealer.phone}</span>
                    </p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeDealer.name + " " + activeDealer.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-btn"
                  >
                    <span>Get Directions</span>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              )}

            </div>

            {activeDealer && (
              <div className="mobile-detail-drawer">
                <span className="detail-state-lbl">{activeDealer.state} • {activeDealer.district} District</span>
                <h4 className="detail-name">{activeDealer.name}</h4>
                <div className="detail-info-row">
                  <p className="detail-info-item">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{activeDealer.address}</span>
                  </p>
                  <p className="detail-info-item">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{activeDealer.phone}</span>
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeDealer.name + " " + activeDealer.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-btn"
                >
                  <span>Get Directions</span>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// Contact Section Component
// --------------------------------------------------------------------------
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    inquiryType: 'General Inquiry', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [inquiryDropdownOpen, setInquiryDropdownOpen] = useState(false);
  const inquiryRef = useRef(null);

  const [activeBranch, setActiveBranch] = useState(0);
  const branches = [
    {
      name: "Head Office",
      address: "Plot No: 2, Sagar 'X' Road, L.B Nagar, Hyderabad – 500 074",
      phone: "+91 74167 25999",
      email: "sales@mutyamsteel.com",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.665792984187!2d78.54519967596956!3d17.3488734046197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f1a2cc0949d%3A0xe1fe844ea1d5be7!2sSagar%20X%20Rd%2C%20L.B.%20Nagar%2C%20Hyderabad%2C%20Telangana%20500074!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin",
      directions: "https://maps.google.com/?q=Plot+No+2+Sagar+X+Road+LB+Nagar+Hyderabad"
    },
    {
      name: "Warehouse",
      address: "Survey No. 42 & 43, Outer Ring Road, Medchal, Hyderabad – 501 401",
      phone: "+91 74167 25888",
      email: "depot@mutyamsteel.com",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.220199175373!2d78.48419967596956!3d17.6288734046197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f1a2cc0949d%3A0xe1fe844ea1d5be7!2sMedchal%2C%20Hyderabad%2C%20Telangana%20501401!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin",
      directions: "https://maps.google.com/?q=Medchal+Hyderabad+Telangana"
    },
    {
      name: "Registered Office",
      address: "Level 4, Phoenix Prime, Jubilee Hills, Road No 36, Hyderabad – 500 033",
      phone: "+91 40 2345 6789",
      email: "corp@mutyamsteel.com",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.665792984187!2d78.40519967596956!3d17.4288734046197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f1a2cc0949d%3A0xe1fe844ea1d5be7!2sJubilee+Hills%2C+Road+No+36%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin",
      directions: "https://maps.google.com/?q=Phoenix+Prime+Jubilee+Hills+Hyderabad"
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inquiryRef.current && !inquiryRef.current.contains(event.target)) {
        setInquiryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', inquiryType: 'General Inquiry', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="cs-section scroll-reveal" id="contact">

      <div className="cs-inner">

        {/* LEFT COLUMN */}
        <div className="cs-left">

          {/* Label */}
          <div className="cs-label-row">
            <div className="cs-label-line"></div>
            <span className="cs-label-text">Contact us</span>
          </div>

          {/* Description */}
          <p className="cs-desc">
            Have a question, need a quote, or planning your next project?<br />
            We&apos;re here to help you with the best steel solutions.
          </p>

          {/* Location Selector Tabs */}
          <div className="branch-tabs">
            {branches.map((b, idx) => (
              <button
                key={idx}
                type="button"
                className={`branch-tab-btn ${idx === activeBranch ? 'active' : ''}`}
                onClick={() => setActiveBranch(idx)}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* 4-column horizontal info row */}
          <div className="cs-info-row">

            <div className="cs-info-item item-office">
              <div className="cs-info-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="cs-info-label">{branches[activeBranch].name.toUpperCase()}</span>
              <p className="cs-info-value" dangerouslySetInnerHTML={{ __html: branches[activeBranch].address.replace(', ', ',<br />') }}></p>
            </div>

            <div className="cs-info-item item-phone">
              <div className="cs-info-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="cs-info-label">PHONE</span>
              <p className="cs-info-value">{branches[activeBranch].phone}</p>
            </div>

            <div className="cs-info-item item-email">
              <div className="cs-info-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="cs-info-label">EMAIL</span>
              <p className="cs-info-value">{branches[activeBranch].email}</p>
            </div>

            <div className="cs-info-item item-hours">
              <div className="cs-info-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="cs-info-label">OFFICE HOURS</span>
              <p className="cs-info-value">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>

          </div>

          {/* Google Map */}
          <div className="cs-map-wrap">
            <iframe
              src={branches[activeBranch].mapEmbed}
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={branches[activeBranch].name}
            />
            <a href={branches[activeBranch].directions} target="_blank" rel="noopener noreferrer" className="cs-directions-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 22l10-4 10 4L12 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Get Directions
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="cs-right">
          <div className="cs-form-card">
            {submitted ? (
              <div className="cs-success">
                <div className="cs-success-icon">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3>Message Sent</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cs-form">

                <div className="cs-form-header">
                  <h3 className="cs-form-title">Send us a message</h3>
                  <div className="cs-form-bar"></div>
                  <p className="cs-form-subtitle">Fill in the details below and our team will get back to you as soon as possible.</p>
                </div>

                <div className="cs-form-row">
                  <div className="cs-field">
                    <input type="text" id="cs-name" name="name" value={formData.name} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="cs-name">Full Name</label>
                    <span className="cs-field-icon"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></span>
                  </div>
                  <div className="cs-field">
                    <input type="email" id="cs-email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="cs-email">Email Address</label>
                    <span className="cs-field-icon"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                  </div>
                </div>

                <div className="cs-form-row">
                  <div className="cs-field">
                    <input type="tel" id="cs-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="cs-phone">Phone Number</label>
                    <span className="cs-field-icon"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                  </div>
                  <div className="cs-field">
                    <input type="text" id="cs-company" name="company" value={formData.company} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="cs-company">Company Name</label>
                    <span className="cs-field-icon"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></span>
                  </div>
                </div>

                <div className="cs-select-container" ref={inquiryRef}>
                  <button
                    type="button"
                    onClick={() => setInquiryDropdownOpen(!inquiryDropdownOpen)}
                    className={`cs-dropdown-btn ${inquiryDropdownOpen ? 'open' : ''}`}
                  >
                    <span>{formData.inquiryType}</span>
                    <span className="cs-select-arrow">
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {inquiryDropdownOpen && (
                    <ul className="cs-dropdown-list">
                      {[
                        "General Inquiry",
                        "Get a Quote",
                        "Enterprise Solutions",
                        "Technical Support",
                        "Distribution Partnership"
                      ].map((type) => (
                        <li
                          key={type}
                          onClick={() => {
                            setFormData({ ...formData, inquiryType: type });
                            setInquiryDropdownOpen(false);
                          }}
                          className={`cs-dropdown-item ${formData.inquiryType === type ? 'selected' : ''}`}
                        >
                          <span>{type}</span>
                          {formData.inquiryType === type && <span className="selected-dot" />}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="cs-field cs-textarea-field">
                  <textarea id="cs-message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder=" " required></textarea>
                  <label htmlFor="cs-message">Your Message</label>
                </div>

                <div className="cs-cta-row">
                  <button type="submit" className="cs-submit-btn">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="cs-btn-arrow">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="cs-privacy">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#10B981" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>We respect your privacy.<br />Your information is safe with us.</span>
                  </div>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}

