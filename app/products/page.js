"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../page.css';

export default function ProductsPage() {
  const [activeItem, setActiveItem] = useState('Products');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
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
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', hasDropdown: true, dropdownItems: [
      { label: "Our Organisation", href: "/#about" },
      { label: "Our Value Chain", href: "/#about" },
      { label: "Our Business Footprints", href: "/#about" },
    ]},
    { name: 'Products', hasDropdown: true, dropdownItems: [
      { label: "Tata Structura 210 YST", href: "https://www.tatastructura.com/yst210" },
      { label: "Tata Structura 310/355 YST", href: "https://www.tatastructura.com/yst355" },
      { label: "Tata Structura Z+", href: "https://www.tatastructura.com/zplus" },
      { label: "Tata Structura GP Pipes", href: "https://www.tatapipes.com/products/galvanized-pipes/" },
      { label: "Tata Agrico", href: "https://www.tatasteel.com/products-solutions/india/products/tata-agrico-agriculture-construction-hand-tools/" }
    ]},
    { name: 'Partners', hasDropdown: true, dropdownItems: [
      { label: "Dealers", href: "/#dealers" },
      { label: "Fabricators", href: "/#dealers?category=Fabricators" },
      { label: "Architect and Engineers", href: "/#dealers?category=Architects" }
    ]},
    { name: 'Projects', href: '/projects', hasDropdown: false },
    { name: 'Events', hasDropdown: true, dropdownItems: [
      { label: "Media Center", href: "/gallery" },
      { label: "Event Updates", href: "/events-new" }
    ]},
    { name: 'Applications', hasDropdown: true, dropdownItems: [
      { label: "Car Parking", img: "/carshed.jpg", href: "https://www.tatastructura.com/CarParking" },
      { label: "Gates Page", img: "/gates.jpg", href: "https://www.tatastructura.com/GatePage" },
      { label: "Railings", img: "/highway_flyover.png", href: "https://www.tatastructura.com/Railings" },
      { label: "Roofs", img: "/rooftop.png", href: "https://www.tatastructura.com/Roofs" },
    ]},
    { name: 'Contact', href: '/#contact' }
  ];

  const categories = [
    { name: 'All Products', icon: 'all' },
    { name: 'Tata Structura 210 YST', icon: 'steel' },
    { name: 'Tata Structura 310/355 YST', icon: 'steel' },
    { name: 'Tata Structura Z+', icon: 'steel' },
    { name: 'Tata Structura GP Pipes', icon: 'pipe' },
    { name: 'Tata Agrico', icon: 'tool' }
  ];

  const productsData = [
    {
      title: 'Tata Structura 210 YST',
      categoryTag: 'GALVANIZED HOLLOW SECTIONS',
      pillarTag: 'Galvanized Hollow Sections',
      desc: 'Premium galvanized hollow sections engineered for strength, durability and long lasting performance.',
      details: 'CII-IGBC Green-Pro certified premium hollow sections with consistent yield strength ≥210 MPa and superior geometric properties.',
      stats: [
        { val: '210', unit: 'MPa', label: 'Yield Strength', icon: 'shield' },
        { val: '330', unit: 'MPa', label: 'Tensile Strength', icon: 'tensile' },
        { val: '40%', unit: '', label: 'Material Saving', icon: 'chart' },
        { val: 'Light', unit: '', label: 'Weight', icon: 'feather' }
      ],
      suitedFor: ['Industrial', 'Infrastructure', 'Metro & Rail', 'Commercial'],
      sizes: '20x20 to 100x100 mm  |  1.2mm to 6.0mm Thickness',
      image: '/Circular-hollow.webp',
      categories: ['Tata Structura 210 YST'],
      iconType: 'hollow',
      href: 'https://www.tatastructura.com/yst210'
    },
    {
      title: 'Tata Structura 310/355 YST',
      categoryTag: 'HIGH-STRENGTH HOLLOW SECTIONS',
      pillarTag: 'Heavy-Duty Structural Steel',
      desc: 'Heavy-duty, high-tensile hollow sections designed for large scale infrastructure and high-load structures.',
      details: "India's first YST 355 grade hollow section. Delivers superior strength-to-weight ratio with up to 40% steel savings.",
      stats: [
        { val: '355', unit: 'MPa', label: 'Yield Strength', icon: 'shield' },
        { val: '490', unit: 'MPa', label: 'Tensile Strength', icon: 'tensile' },
        { val: '40%', unit: '', label: 'Steel Saving', icon: 'chart' },
        { val: 'Optimal', unit: '', label: 'Weight', icon: 'feather' }
      ],
      suitedFor: ['Infrastructure', 'Airports', 'Metro & Rail', 'Commercial'],
      sizes: '50x50 to 300x300 mm  |  3.0mm to 12.0mm Thickness',
      image: '/YST-310.png',
      categories: ['Tata Structura 310/355 YST'],
      iconType: 'hollow',
      href: 'https://www.tatastructura.com/yst355'
    },
    {
      title: 'Tata Structura Z+',
      categoryTag: 'ZINC COATED HOLLOW SECTIONS',
      pillarTag: 'Corrosion Resistant Steel',
      desc: 'Galvanized tubes with advanced 360 GSM zinc coating for superior rust protection in harsh environments.',
      details: '360 GSM (~50 micron) pure zinc coating offers dual barrier and sacrificial protection against rust in high rainfall regions.',
      stats: [
        { val: '360', unit: 'GSM', label: 'Zinc Coating', icon: 'shield' },
        { val: '50', unit: 'µm', label: 'Layer Depth', icon: 'tensile' },
        { val: '40%', unit: '', label: 'Life Saving', icon: 'chart' },
        { val: 'High', unit: '', label: 'Durability', icon: 'feather' }
      ],
      suitedFor: ['Coastal', 'Roofing', 'Car Sheds', 'Infrastructure'],
      sizes: '25x25 to 150x150 mm  |  1.6mm to 5.0mm Thickness',
      image: '/Structura-z+.png',
      categories: ['Tata Structura Z+'],
      iconType: 'hollow',
      href: 'https://www.tatastructura.com/zplus'
    },
    {
      title: 'Tata Structura GP Pipes',
      categoryTag: 'GALVANIZED PIPES & TUBES',
      pillarTag: 'Galvanized Steel Pipes',
      desc: 'High-quality galvanized pipes engineered for plumbing, civil construction, and industrial structural use.',
      details: 'High-grade hot-dip galvanized steel pipes engineered for high pressure resistance, weather durability, and flawless welding.',
      stats: [
        { val: 'Hot-Dip', unit: '', label: 'Zinc Layer', icon: 'shield' },
        { val: 'High', unit: '', label: 'Pressure', icon: 'tensile' },
        { val: '100%', unit: '', label: 'Leak Proof', icon: 'chart' },
        { val: 'Rugged', unit: '', label: 'Quality', icon: 'feather' }
      ],
      suitedFor: ['Plumbing', 'Civil Structure', 'Water Pipes', 'Industrial'],
      sizes: '15 NB to 150 NB  |  1.4mm to 4.5mm Thickness',
      image: '/GP-pipe.jpg',
      categories: ['Tata Structura GP Pipes'],
      iconType: 'pipe',
      href: 'https://www.tatapipes.com/products/galvanized-pipes/'
    },
    {
      title: 'Tata Agrico',
      categoryTag: 'AGRICULTURE & CONSTRUCTION TOOLS',
      pillarTag: 'Hand Tools & Hardware',
      desc: 'Agriculture and construction hand tools crafted from high-carbon forged steel for maximum durability.',
      details: 'Ergonomically engineered premium forged tools crafted from high-carbon Tata steel for heavy-duty field reliability.',
      stats: [
        { val: 'Forged', unit: '', label: 'Steel Grade', icon: 'shield' },
        { val: 'Carbon', unit: '', label: 'High Grade', icon: 'tensile' },
        { val: 'Heavy', unit: '', label: 'Field Duty', icon: 'chart' },
        { val: 'Pro', unit: '', label: 'Ergonomic', icon: 'feather' }
      ],
      suitedFor: ['Agriculture', 'Construction', 'Mining', 'Hardware'],
      sizes: 'Standard & Heavy Duty Sizes Available',
      image: '/TATA_Agrico.png',
      categories: ['Tata Agrico'],
      iconType: 'tool',
      href: 'https://www.tatasteel.com/products-solutions/india/products/tata-agrico-agriculture-construction-hand-tools/'
    }
  ];

  const filteredProducts = activeFilter === 'All Products'
    ? productsData
    : productsData.filter(p => p.categories.includes(activeFilter) || p.title === activeFilter);

  const getCategoryIcon = (type) => {
    switch (type) {
      case 'all':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
          </svg>
        );
      case 'steel':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        );
      case 'pipe':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        );
      case 'tool':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
          </svg>
        );
    }
  };

  const getProductBadgeIcon = (type) => {
    switch (type) {
      case 'hollow':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="#34145a" strokeWidth="2">
            <rect x="5" y="5" width="14" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="9" y="9" width="6" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'pipe':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="#34145a" strokeWidth="2">
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        );
      case 'bar':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="#34145a" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeWidth="2.5" />
            <path d="M7 4v16M17 4v16" strokeLinecap="round" strokeDasharray="2 2" />
          </svg>
        );
      case 'roof':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="#34145a" strokeWidth="2">
            <path d="M3 17l4-10 5 10 4-10 5 10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'plate':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="#34145a" strokeWidth="2">
            <path d="M3 8l9-4 9 4-9 4-9-4z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12l9 4 9-4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 16l9 4 9-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pricelist-page">
      {/* Main Content Area */}
      <main className="pricelist-main-content">
        {/* Hero Banner Section (Natural Warehouse Style) */}
        <section className="relative w-full min-h-[480px] md:min-h-[540px] pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden flex items-center bg-[#0F172A]">
          {/* Full-width Warehouse Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-right md:bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url('/Blueprints/warehouse-banner.png')` }}
          >
            {/* Subtle Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
          </div>

          {/* Content Container */}
          <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col justify-center z-10">
            {/* Products Range Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="text-[#F97316] text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] bg-[#F97316]/15 border border-[#F97316]/40 px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                PRODUCTS RANGE
              </span>
            </motion.div>

            {/* Heading with Premium Slow-Moving Orange Watery Gradient */}
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-3 leading-tight font-['Space_Grotesk'] text-white"
            >
              <span className="watery-orange-gradient">
                Our Products
              </span>
            </motion.h1>

            {/* Small Orange Underline Accent */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-14 h-1.5 bg-[#F97316] rounded-full mb-5 origin-left"
            />

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl font-medium leading-relaxed"
            >
              High-quality structural steel solutions built to power every project, every industry.
            </motion.p>
          </div>

          {/* Watery Orange Shimmer CSS Keyframe */}
          <style jsx>{`
            @keyframes wateryOrangeShimmer {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            .watery-orange-gradient {
              background: linear-gradient(
                120deg,
                #ffffff 0%,
                #F97316 25%,
                #FBBF24 50%,
                #FB923C 75%,
                #ffffff 100%
              );
              background-size: 200% auto;
              color: transparent;
              -webkit-background-clip: text;
              background-clip: text;
              animation: wateryOrangeShimmer 6s ease-in-out infinite;
              display: inline-block;
            }
          `}</style>
        </section>

        {/* Section 1: OUR PRODUCT RANGE */}
        <section className="products-range-section">


          {/* Category Filter Pills */}
          <div className="category-filter-container" style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '24px 16px 30px 16px', overflowX: 'auto' }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-pill ${activeFilter === cat.name ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.name)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: '100px',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  border: activeFilter === cat.name ? 'none' : '1px solid rgba(16, 29, 44, 0.12)',
                  background: activeFilter === cat.name ? '#34145A' : '#ffffff',
                  color: activeFilter === cat.name ? '#ffffff' : '#34145A',
                  boxShadow: activeFilter === cat.name ? '0 8px 20px rgba(52, 20, 90, 0.25)' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Section 2: Products Cards Grid */}
          <div className="products-grid-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', maxWidth: '1280px', margin: '0 auto', padding: '0 16px 30px 16px' }}>
            {filteredProducts.map((p, idx) => (
              <div
                key={idx}
                className="product-flip-card group"
                style={{
                  perspective: '1200px',
                  flex: '0 1 345px',
                  width: '345px',
                  height: '550px',
                  maxWidth: '100%',
                  cursor: 'pointer'
                }}
              >
                <div
                  className="flip-card-inner"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformStyle: 'preserve-3d',
                    borderRadius: '28px',
                    boxShadow: '0 20px 40px -15px rgba(16, 29, 44, 0.08), 0 0 0 1px rgba(16, 29, 44, 0.04)'
                  }}
                >
                  {/* FRONT SIDE */}
                  <div
                    className="flip-card-front product-card"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRadius: '28px',
                      background: '#ffffff',
                      border: '1px solid rgba(16, 29, 44, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Top 60% Image Container */}
                    <div style={{ height: '330px', position: 'relative', overflow: 'hidden', borderRadius: '28px 28px 0 0' }}>
                      <img
                        src={p.image}
                        alt={p.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        className="group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Top Right Floating Pill */}
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        padding: '6px 14px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: '700',
                        color: '#34145A',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="3" y="3" width="7" height="7" rx="1.5" />
                          <rect x="14" y="3" width="7" height="7" rx="1.5" />
                          <rect x="14" y="14" width="7" height="7" rx="1.5" />
                          <rect x="3" y="14" width="7" height="7" rx="1.5" />
                        </svg>
                        <span>{p.pillarTag}</span>
                      </div>
                    </div>

                    {/* Front Body Content */}
                    <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ width: '32px', height: '3px', background: '#D4A017', borderRadius: '2px', marginBottom: '12px' }} />
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', margin: '0 0 8px 0', letterSpacing: '-0.3px' }}>
                          {p.title}
                        </h3>
                        <p style={{ fontSize: '13px', lineHeight: '1.55', color: '#64748b', margin: 0 }}>
                          {p.desc}
                        </p>
                      </div>

                      <a
                        href={p.href}
                        target={p.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justify: 'center',
                          gap: '8px',
                          padding: '10px 22px',
                          borderRadius: '100px',
                          background: '#34145A',
                          color: '#ffffff',
                          fontSize: '12.5px',
                          fontWeight: '700',
                          textDecoration: 'none',
                          boxShadow: '0 6px 16px rgba(52, 20, 90, 0.25)',
                          transition: 'all 0.2s ease',
                          marginTop: '16px',
                          width: 'fit-content'
                        }}
                      >
                        <span>View Details</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className="flip-card-back"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      borderRadius: '28px',
                      background: 'linear-gradient(145deg, #22103F 0%, #35155D 50%, #4C2582 100%)',
                      color: '#ffffff',
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between',
                      boxShadow: '0 24px 48px rgba(34, 16, 63, 0.45)',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    <div>
                                            <span style={{ fontSize: '10.5px', fontWeight: '800', color: '#D4A017', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                        {p.categoryTag}
                      </span>
                      <h3 style={{ fontSize: '21px', fontWeight: '800', color: '#ffffff', margin: '4px 0 8px 0', letterSpacing: '-0.3px' }}>
                        {p.title}
                      </h3>
                      <p style={{ fontSize: '12px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                        {p.details}
                      </p>

                      <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.15)', margin: '16px 0' }} />

                      {/* SECTION 1: PERFORMANCE HIGHLIGHTS */}
                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', fontWeight: '800', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                          </svg>
                          <span>PERFORMANCE HIGHLIGHTS</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                          {p.stats.map((st, stIdx) => (
                            <div key={stIdx} style={{ background: 'rgba(255, 255, 255, 0.07)', borderRadius: '14px', padding: '10px 6px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                              <div style={{ fontSize: '15px', fontWeight: '800', color: '#D4A017', lineHeight: '1.1' }}>
                                {st.val} <span style={{ fontSize: '9px', fontWeight: '600' }}>{st.unit}</span>
                              </div>
                              <div style={{ fontSize: '9.5px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px', fontWeight: '500', lineHeight: '1.2' }}>
                                {st.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SECTION 2: BEST SUITED FOR */}
                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', fontWeight: '800', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M3 21h18M3 7v14M21 7v14M6 11h4M6 15h4M14 11h4M14 15h4M9 3l3 3 3-3" />
                          </svg>
                          <span>BEST SUITED FOR</span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {p.suitedFor.map((item, tagIdx) => (
                            <span key={tagIdx} style={{ background: 'rgba(255, 255, 255, 0.07)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '100px', padding: '4px 10px', fontSize: '10.5px', fontWeight: '600', color: '#ffffff' }}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* SECTION 3: AVAILABLE SIZES */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', fontWeight: '800', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 9h18M9 21V9" />
                          </svg>
                          <span>AVAILABLE SIZES</span>
                        </div>
                        <div style={{ fontSize: '11.5px', fontWeight: '600', color: 'rgba(255, 255, 255, 0.9)' }}>
                          {p.sizes}
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM ACTIONS */}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                      <a
                        href={p.href}
                        target={p.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justify: 'center',
                          gap: '6px',
                          padding: '12px 16px',
                          borderRadius: '100px',
                          background: '#D4A017',
                          color: '#22103F',
                          fontSize: '12px',
                          fontWeight: '800',
                          textDecoration: 'none',
                          boxShadow: '0 6px 16px rgba(212, 160, 23, 0.35)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span>View Full Specifications</span>
                        <span>→</span>
                      </a>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Download Datasheet"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justify: 'center',
                          gap: '6px',
                          padding: '12px 14px',
                          borderRadius: '100px',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          background: 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          fontSize: '11.5px',
                          fontWeight: '700',
                          textDecoration: 'none',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Need Custom Steel Solutions? CTA */}
        <section className="products-cta-section">
          <div className="products-cta-card">
            <div className="products-cta-left">
              <span className="products-cta-tag">NEED CUSTOM SOLUTIONS?</span>
              <h3 className="products-cta-title">
                Can't find what you need?<br />We're here to help.
              </h3>
              <p className="products-cta-desc">
                Get in touch with our team for custom requirements, technical specifications and bulk enquiries.
              </p>
              <a href="/#contact" className="products-cta-btn">
                <span>Contact Our Experts</span>
                <span>→</span>
              </a>
            </div>

            <div className="products-cta-right">
              <div className="products-feature-item">
                <div className="products-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#34145a" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="products-feature-text">High Quality Standards</span>
              </div>

              <div className="products-feature-item">
                <div className="products-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#34145a" strokeWidth="2.2">
                    <rect x="1" y="3" width="15" height="13" rx="2" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <span className="products-feature-text">Timely Delivery</span>
              </div>

              <div className="products-feature-item">
                <div className="products-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#34145a" strokeWidth="2.2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="products-feature-text">Trusted by Industry Leaders</span>
              </div>
            </div>
          </div>
        </section>
      </main>    </div>
  );
}
