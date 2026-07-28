"use client";
import React, { useState, useEffect, useRef } from 'react';


export default function GlobalHeader() {
  const [activeItem, setActiveItem] = useState('Home');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
  const [hoveredAboutCategory, setHoveredAboutCategory] = useState('Our Organisation');
  const [activeAppCategory, setActiveAppCategory] = useState('Commercial');
  const [darkTheme, setDarkTheme] = useState(false);
  const lastScrollY = useRef(0);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > 50) {
            if (currentScrollY > lastScrollY.current) {
              setNavVisible(false);
            } else {
              setNavVisible(true);
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
    { name: 'Home', href: '/', hasDropdown: false },
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
    { name: 'Projects', href: '/projects', hasDropdown: false },
    {
      name: 'Events', hasDropdown: true, dropdownItems: [
        { label: "Media Center", href: "/gallery" },
        { label: "Event Updates", href: "/events-new" },
      ]
    },
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
    { name: 'Contact', href: '/contact', hasDropdown: false }
  ];

  return (
    <>
      <div 
        className="nav-trigger-zone"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <header
          className="header-capsule nav-visible"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Logo Section */}
          <div className="logo-container" style={{ cursor: 'pointer' }} onClick={() => { if (typeof window !== 'undefined' && window.location.pathname !== '/') { window.location.href = '/'; } else { window.scrollTo({ top: 0, behavior: 'smooth' }); } }}>
            <img src="/m2-logo-only.png" alt="Mutyam Steel Logo" className="logo-icon-img" />
            <img src="/logo-text.png" alt="Mutyam Steel" className="logo-text-img" />
          </div>

          {/* Navigation Menu */}
          <nav className="nav-menu">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="nav-item-container"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                style={{ position: 'relative' }}
              >
                <a
                  href={item.href || `#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`nav-link ${activeItem === item.name ? 'active' : ''}`}
                  onClick={(e) => {
                    if (item.name === 'Home' || item.name === 'Events' || item.name === 'Gallery' || item.name === 'Projects' || item.name === 'Contact') {
                      setActiveDropdown(null);
                      setActiveItem(item.name);
                      const targetHref = item.href || (item.name === 'Home' ? '/' : `/${item.name.toLowerCase()}`);
                      if (typeof window !== 'undefined' && window.location.pathname !== targetHref) {
                        e.preventDefault();
                        window.location.href = targetHref;
                      }
                    } else if (item.hasDropdown) {
                      e.preventDefault();
                    } else {
                      if (typeof window !== 'undefined' && window.location.pathname !== '/') {
                        e.preventDefault();
                        const target = item.href || `/${item.name.toLowerCase().replace(/\s+/g, '-')}`;
                        window.location.href = target.startsWith('/') ? target : `/${target}`;
                        return;
                      }
                      e.preventDefault();
                      setActiveItem(item.name);
                      const section = document.getElementById(item.name.toLowerCase().replace(/\s+/g, '-'));
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  <span className="nav-text">{item.name}</span>
                  {item.hasDropdown && (
                    <svg className={`chevron-icon ${activeDropdown === item.name ? 'rotate-180' : ''}`} style={{ transition: 'transform 0.3s ease' }} width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
                {item.hasDropdown && item.name === 'About Us' && (
                  <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                    <div className="mega-pointer" />
                    <div className="mega-container" style={{ height: '360px', width: '680px' }}>
                      <div className="mega-top-line" />

                      {/* Left Panel */}
                      <div className="mega-left-panel" style={{ width: '36%', padding: '20px' }}>
                        <div className="mega-steel-lines" />
                        <div className="mega-glow" />
                        <div className="mega-left-content">
                          <span className="mega-label">ABOUT US</span>
                          <h2 className="mega-heading-text" style={{ fontSize: '18.5px', lineHeight: '1.25' }}>
                            Legacy of<br />Excellence
                          </h2>
                          <div className="mega-accent" style={{ margin: '8px 0 10px 0' }} />
                          <p className="mega-desc-text" style={{ fontSize: '11px', lineHeight: '1.45', opacity: 0.75 }}>
                            Our 25+ years journey, TATA Steel partnership & industrial commitment across South India.
                          </p>
                        </div>
                      </div>

                      {/* Right Panel */}
                      <div className="mega-right-panel" style={{ flex: 1, height: "100%", background: darkTheme ? '#1e293b' : '#ffffff', padding: '18px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(3, 1fr)', gap: '10px 12px', boxSizing: 'border-box' }}>
                        {[
                          { title: "Mutyam Steel Profile", desc: "Our journey, legacy, and capacity.", href: "/about/mutyam-steel-profile" },
                          { title: "Vision, Mission & Values", desc: "Core principles driving our steel.", href: "/vision-mission" },
                          { title: "Leadership", desc: "Visionaries guiding our success.", href: "/leadership" },
                          { title: "Directorship", desc: "Board of Directors & advisors.", href: "/directorship" },
                          { title: "Warehousing Facilities", desc: "State-of-the-art warehousing infrastructure.", href: "/blueprints/warehouses" },
                          { title: "CSR", desc: "Social responsibility & community.", href: "/csr" }
                        ].map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href || "#about"}
                            style={{
                              height: "100%",
                              boxSizing: "border-box",
                              justifyContent: "center",
                              color: darkTheme ? '#ffffff' : '#1e293b',
                              textDecoration: 'none',
                              padding: '12px 14px',
                              borderRadius: '10px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              gap: '3px',
                              background: darkTheme ? 'rgba(255, 255, 255, 0.03)' : 'rgba(16, 29, 44, 0.02)',
                              border: darkTheme ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(16, 29, 44, 0.06)',
                              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = darkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 102, 255, 0.04)';
                              e.currentTarget.style.borderColor = darkTheme ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 102, 255, 0.15)';
                              e.currentTarget.style.transform = 'translateY(-1.5px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = darkTheme ? 'rgba(255, 255, 255, 0.03)' : 'rgba(16, 29, 44, 0.02)';
                              e.currentTarget.style.borderColor = darkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(16, 29, 44, 0.06)';
                              e.currentTarget.style.transform = 'none';
                            }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span style={{ fontSize: '13px', fontWeight: '700', color: darkTheme ? '#ffffff' : '#1e293b' }}>
                              {subItem.title}
                            </span>
                            <span style={{ fontSize: '10.5px', color: darkTheme ? '#94a3b8' : '#5e6d82', fontWeight: '500', lineHeight: '1.25' }}>
                              {subItem.desc}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {item.hasDropdown && item.name === 'Products' && (
                  <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                    <div className="mega-pointer" />
                    <div className="mega-container" style={{ height: '340px', width: '680px' }}>
                      <div className="mega-top-line" />

                      {/* Left Panel */}
                      <div className="mega-left-panel" style={{ width: '36%', padding: '16px 18px' }}>
                        <div className="mega-steel-lines" />
                        <div className="mega-glow" />
                        <div className="mega-left-content">
                          <span className="mega-label">OUR PRODUCTS</span>
                          <h2 className="mega-heading-text" style={{ fontSize: '18px', lineHeight: '1.2' }}>Built on<br />Tata Quality</h2>
                          <div className="mega-accent" style={{ margin: '6px 0 8px 0' }} />
                          <p className="mega-desc-text" style={{ fontSize: '10.5px', lineHeight: '1.4', opacity: 0.75 }}>
                            Supplying premium structural steel solutions across Telangana and Andhra Pradesh.
                          </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', marginTop: 'auto' }}>
                          <a href="/brochures" className="mega-explore-btn" style={{ background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '8px 12px', fontSize: '11px' }} onClick={() => setActiveDropdown(null)}>
                            BROCHURES
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                            </svg>
                          </a>
                          <a href="/products" className="mega-explore-btn" style={{ padding: '8px 12px', fontSize: '11px' }} onClick={() => setActiveDropdown(null)}>
                            EXPLORE ALL
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Right Panel - Vertical List of Product Cards */}
                      <div className="mega-right-panel" style={{ display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'center', height: '100%', padding: '12px 16px', flex: 1, boxSizing: 'border-box' }}>

                        <a
                          href="https://www.tatastructura.com/yst210"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-list-item"
                          style={{ padding: '6px 10px', gap: '10px' }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <img src="/Circular-hollow.webp" alt="210 YST" className="mega-list-item-img" style={{ width: '40px', height: '32px', borderRadius: '6px' }} loading="lazy" />
                          <div className="mega-list-item-text" style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '12.5px', margin: 0, fontWeight: 700 }}>Tata Structura 210 YST</h3>
                            <p style={{ fontSize: '10.5px', margin: '1px 0 0 0', lineHeight: '1.2' }}>Lightweight, high-strength structural hollow sections ideal for general construction.</p>
                          </div>
                        </a>

                        <a
                          href="https://www.tatastructura.com/yst355"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-list-item"
                          style={{ padding: '6px 10px', gap: '10px' }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <img src="/product-square.png" alt="310/355 YST" className="mega-list-item-img" style={{ width: '40px', height: '32px', borderRadius: '6px' }} loading="lazy" />
                          <div className="mega-list-item-text" style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '12.5px', margin: 0, fontWeight: 700 }}>Tata Structura 310/355 YST</h3>
                            <p style={{ fontSize: '10.5px', margin: '1px 0 0 0', lineHeight: '1.2' }}>Heavy-duty, high-tensile hollow sections designed for large scale infrastructure.</p>
                          </div>
                        </a>

                        <a
                          href="https://www.tatastructura.com/zplus"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-list-item"
                          style={{ padding: '6px 10px', gap: '10px' }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <img src="/gi-pipes.png" alt="Z+" className="mega-list-item-img" style={{ width: '40px', height: '32px', borderRadius: '6px' }} loading="lazy" />
                          <div className="mega-list-item-text" style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '12.5px', margin: 0, fontWeight: 700 }}>Tata Structura Z+</h3>
                            <p style={{ fontSize: '10.5px', margin: '1px 0 0 0', lineHeight: '1.2' }}>Galvanized tubes with advanced zinc coating for superior rust protection.</p>
                          </div>
                        </a>

                        <a
                          href="https://www.tatapipes.com/products/galvanized-pipes/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-list-item"
                          style={{ padding: '6px 10px', gap: '10px' }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <img src="/GP-pipe.jpg" alt="GP Pipes" className="mega-list-item-img" style={{ width: '40px', height: '32px', borderRadius: '6px' }} loading="lazy" />
                          <div className="mega-list-item-text" style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '12.5px', margin: 0, fontWeight: 700 }}>Tata Structura GP Pipes</h3>
                            <p style={{ fontSize: '10.5px', margin: '1px 0 0 0', lineHeight: '1.2' }}>High-quality galvanized pipes for plumbing, construction and industrial use.</p>
                          </div>
                        </a>

                        <a
                          href="https://www.tatasteel.com/products-solutions/india/products/tata-agrico-agriculture-construction-hand-tools/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-list-item"
                          style={{ padding: '6px 10px', gap: '10px' }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <img src="/TATA_Agrico.png" alt="Tata Agrico" className="mega-list-item-img" style={{ width: '40px', height: '32px', borderRadius: '6px' }} loading="lazy" />
                          <div className="mega-list-item-text" style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '12.5px', margin: 0, fontWeight: 700 }}>Tata Agrico</h3>
                            <p style={{ fontSize: '10.5px', margin: '1px 0 0 0', lineHeight: '1.2' }}>Agriculture and construction hand tools trusted for quality and durability.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Partners Dropdown */}
                {item.hasDropdown && item.name === 'Partners' && (
                  <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                    <div className="mega-pointer" />
                    <div
                      className="mega-container"
                      style={{
                        height: "auto",
                        minHeight: "220px",
                        width: "380px",
                        padding: "16px",
                        background: darkTheme ? "#1e293b" : "#ffffff",
                        borderRadius: "16px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                        border: darkTheme ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "11px", fontWeight: "800", color: "#F97316", letterSpacing: "1px", textTransform: "uppercase", padding: "0 8px 4px 8px" }}>
                          OUR PARTNERS
                        </span>
                        {[
                          {
                            title: "Dealers",
                            desc: "Widespread footprint & authorized dealer network.",
                            cat: "Dealers",
                          },
                          {
                            title: "Fabricators",
                            desc: "Authorized structural fabricator partners.",
                            cat: "Fabricators",
                          },
                          {
                            title: "Architect and Engineers",
                            desc: "Structural design & architectural consultants.",
                            cat: "Architect & Engineers",
                          },
                        ].map((pItem) => (
                          <a
                            key={pItem.title}
                            href="#dealer-network"
                            style={{
                              color: darkTheme ? "#ffffff" : "#1e293b",
                              textDecoration: "none",
                              padding: "10px 14px",
                              borderRadius: "10px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              gap: "2px",
                              background: darkTheme ? "rgba(255, 255, 255, 0.03)" : "rgba(16, 29, 44, 0.02)",
                              border: darkTheme ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(16, 29, 44, 0.06)",
                              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(null);
                              const targetCat = pItem.cat;
                              if (typeof window !== "undefined") {
                                const pathname = window.location.pathname;
                                if (pathname === "/" || pathname === "") {
                                  window.dispatchEvent(
                                    new CustomEvent("partnerCategoryChange", {
                                      detail: { category: targetCat },
                                    })
                                  );
                                  const el = document.getElementById("dealer-network");
                                  if (el) el.scrollIntoView({ behavior: "smooth" });
                                } else {
                                  window.location.href = `/?category=${encodeURIComponent(targetCat)}#dealer-network`;
                                }
                              }
                            }}
                          >
                            <span style={{ fontSize: "13.5px", fontWeight: "700", color: darkTheme ? "#ffffff" : "#1e293b" }}>
                              {pItem.title}
                            </span>
                            <span style={{ fontSize: "11px", color: darkTheme ? "#94a3b8" : "#5e6d82", fontWeight: "500" }}>
                              {pItem.desc}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.hasDropdown && item.name === 'Projects' && (
                  <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                    <div className="mega-pointer" />
                    <div className="mega-container" style={{ height: '390px', width: '700px' }}>
                      <div className="mega-top-line" />

                      {/* Left Panel */}
                      <div className="mega-left-panel" style={{ width: '38%' }}>
                        <div className="mega-steel-lines" />
                        <div className="mega-glow" />
                        <div className="mega-left-content">
                          <span className="mega-label">OUR PROJECTS</span>
                          <h2 className="mega-heading-text" style={{ fontSize: '19px', lineHeight: '1.25' }}>Engineered<br />for Projects</h2>
                          <div className="mega-accent" />
                          <p className="mega-desc-text" style={{ fontSize: '11px', lineHeight: '1.45', opacity: 0.75 }}>
                            High-grade steel solutions customized for landmark structural projects.
                          </p>
                        </div>
                        <a href="/projects" className="mega-explore-btn" onClick={() => setActiveDropdown(null)}>
                          VIEW PORTFOLIO
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>

                      {/* Right Panel - Vertical List of Solution Cards */}
                      <div className="mega-right-panel" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px', flex: 1, justifyContent: 'center' }}>

                        <a href="/projects" className="mega-list-item" onClick={() => setActiveDropdown(null)}>
                          <img src="/hyderabad_airport.png" alt="Infrastructure" className="mega-list-item-img" loading="lazy" />
                          <div className="mega-list-item-text">
                            <h3>Infrastructure & Commercial</h3>
                            <p>Robust structural solutions for modern industrial buildings, malls, and flyovers.</p>
                          </div>
                        </a>

                        <a href="/projects" className="mega-list-item" onClick={() => setActiveDropdown(null)}>
                          <img src="/gi-pipes.png" alt="Agriculture" className="mega-list-item-img" loading="lazy" />
                          <div className="mega-list-item-text">
                            <h3>Agriculture & Water Systems</h3>
                            <p>Durable pipes and tubing built for irrigation systems and industrial farming.</p>
                          </div>
                        </a>

                        <a href="/projects" className="mega-list-item" onClick={() => setActiveDropdown(null)}>
                          <img src="/steel_framework_cad.png" alt="Automotive" className="mega-list-item-img" loading="lazy" />
                          <div className="mega-list-item-text">
                            <h3>Automotive & Industrial</h3>
                            <p>High-precision components and tubing manufactured for heavy industrial machinery.</p>
                          </div>
                        </a>

                        <a href="/projects" className="mega-list-item" onClick={() => setActiveDropdown(null)}>
                          <img src="/Solarsheds.png" alt="Energy" className="mega-list-item-img" loading="lazy" />
                          <div className="mega-list-item-text">
                            <h3>Energy & Transmission</h3>
                            <p>Reliable steel frameworks engineered for solar power structures and transmission lines.</p>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>
                )}

                {item.hasDropdown && item.name === 'Events' && (
                  <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                    <div className="mega-pointer" />
                    <div className="mega-container" style={{ height: '260px', width: '600px' }}>
                      <div className="mega-top-line" />

                      {/* Left Side: Dark Panel */}
                      <div className="mega-left-panel" style={{ width: '38%', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="mega-steel-lines" />
                        <div className="mega-glow" />
                        <div className="mega-left-content" style={{ textAlign: 'left' }}>
                          <span className="mega-label">MEDIA & EVENTS</span>
                          <h2 className="mega-heading-text" style={{ fontSize: '18px', margin: '4px 0 8px 0', lineHeight: '1.25' }}>Events &<br />Media</h2>
                          <div className="mega-accent" style={{ margin: '8px 0' }} />
                          <p className="mega-desc-text" style={{ fontSize: '11px', lineHeight: '1.4', opacity: 0.75 }}>
                            Highlights, corporate events, and media gallery.
                          </p>
                        </div>
                      </div>

                      {/* Right Side: Options Cards Grid (Light Panel) */}
                      <div className="mega-right-panel" style={{ flex: 1, background: darkTheme ? '#1e293b' : '#ffffff', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
                        {[
                          {
                            title: "Media Center",
                            desc: "View photos, press coverage & latest media showcases.",
                            href: "/gallery",
                            icon: (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7262E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                <circle cx="12" cy="13" r="4" />
                              </svg>
                            )
                          },
                          {
                            title: "Event Updates",
                            desc: "Corporate events, trade expos & industrial exhibitions.",
                            href: "/events-new",
                            icon: (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7262E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                              </svg>
                            )
                          }
                        ].map((card) => (
                          <a
                            key={card.title}
                            href={card.href}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '12px 14px',
                              borderRadius: '12px',
                              background: darkTheme ? 'rgba(255, 255, 255, 0.03)' : 'rgba(16, 29, 44, 0.02)',
                              border: darkTheme ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(16, 29, 44, 0.06)',
                              textDecoration: 'none',
                              transition: 'all 0.25s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateX(3px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = darkTheme ? 'rgba(255, 255, 255, 0.03)' : 'rgba(16, 29, 44, 0.02)';
                              e.currentTarget.style.borderColor = darkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(16, 29, 44, 0.06)';
                              e.currentTarget.style.transform = 'none';
                            }}
                            onClick={() => {
                              setActiveDropdown(null);
                            }}
                          >
                            <div style={{
                              width: '38px',
                              height: '38px',
                              borderRadius: '10px',
                              background: darkTheme ? 'rgba(255, 255, 255, 0.06)' : 'rgba(215, 38, 46, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              {card.icon}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <span style={{ fontSize: '14px', fontWeight: '700', color: darkTheme ? '#ffffff' : '#1e293b' }}>{card.title}</span>
                              <span style={{ fontSize: '11px', color: darkTheme ? '#94a3b8' : '#5e6d82', fontWeight: '500', marginTop: '1px' }}>{card.desc}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.hasDropdown && item.name === 'Partners' && (
                  <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                    <div className="mega-pointer" />
                    <div className="mega-container" style={{ height: '335px', width: '660px' }}>
                      <div className="mega-top-line" />

                      {/* Left Side: Dark Panel */}
                      <div className="mega-left-panel" style={{ width: '38%', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="mega-steel-lines" />
                        <div className="mega-glow" />
                        <div className="mega-left-content" style={{ textAlign: 'left' }}>
                          <span className="mega-label">PARTNERS NETWORK</span>
                          <h2 className="mega-heading-text" style={{ fontSize: '18px', margin: '4px 0 8px 0', lineHeight: '1.25' }}>Connect<br />With Us</h2>
                          <div className="mega-accent" style={{ margin: '8px 0' }} />
                          <p className="mega-desc-text" style={{ fontSize: '11.5px', lineHeight: '1.45', opacity: 0.75 }}>
                            Building stronger bonds with dealers, engineers, and fabricators across the twin states.
                          </p>
                        </div>
                      </div>

                      {/* Right Side: Options Cards Grid (Light Panel) */}
                      <div className="mega-right-panel" style={{ flex: 1, background: darkTheme ? '#1e293b' : '#ffffff', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
                        {[
                          {
                            title: "Dealers",
                            desc: "Locate authorized distributors and steel dealers near you.",
                            href: "#dealers",
                            icon: (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7262E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                            )
                          },
                          {
                            title: "Fabricators",
                            desc: "Find skilled fabricators for custom steel construction.",
                            href: "#dealers",
                            icon: (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7262E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                <polyline points="2 17 12 22 22 17" />
                                <polyline points="2 12 12 17 22 12" />
                              </svg>
                            )
                          },
                          {
                            title: "Architect and Engineers",
                            desc: "Technical specs and guidance for consultants and developers.",
                            href: "#dealers",
                            icon: (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7262E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                              </svg>
                            )
                          }
                        ].map((card) => (
                          <a
                            key={card.title}
                            href={card.href}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '14px',
                              padding: '10px 14px',
                              borderRadius: '10px',
                              background: darkTheme ? 'rgba(255, 255, 255, 0.03)' : 'rgba(16, 29, 44, 0.02)',
                              border: darkTheme ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(16, 29, 44, 0.06)',
                              textDecoration: 'none',
                              textAlign: 'left',
                              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = darkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 102, 255, 0.04)';
                              e.currentTarget.style.borderColor = darkTheme ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 102, 255, 0.15)';
                              e.currentTarget.style.transform = 'translateX(3px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = darkTheme ? 'rgba(255, 255, 255, 0.03)' : 'rgba(16, 29, 44, 0.02)';
                              e.currentTarget.style.borderColor = darkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(16, 29, 44, 0.06)';
                              e.currentTarget.style.transform = 'none';
                            }}
                            onClick={(e) => {
                              setActiveDropdown(null);
                              let cat = "Dealers";
                              if (card.title === "Fabricators") cat = "Fabricators";
                              if (card.title === "Architect and Engineers") cat = "Architect & Engineers";
                              if (typeof window !== 'undefined') {
                                const pathname = window.location.pathname;
                                if (pathname === "/" || pathname === "") {
                                  e.preventDefault();
                                  window.dispatchEvent(new CustomEvent('partnerCategoryChange', { detail: { category: cat } }));
                                  const targetId = card.href ? card.href.substring(1) : 'dealer-network';
                                  const section = document.getElementById(targetId) || document.getElementById('dealer-network');
                                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                  window.location.href = `/?category=${encodeURIComponent(cat)}#dealer-network`;
                                }
                              }
                            }}
                          >
                            <div style={{
                              width: '34px',
                              height: '34px',
                              borderRadius: '8px',
                              background: darkTheme ? 'rgba(255, 255, 255, 0.06)' : 'rgba(215, 38, 46, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              {card.icon}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <span style={{ fontSize: '13px', fontWeight: '700', color: darkTheme ? '#ffffff' : '#1e293b' }}>{card.title}</span>
                              <span style={{ fontSize: '10.5px', color: darkTheme ? '#94a3b8' : '#5e6d82', fontWeight: '500', marginTop: '1.5px', lineHeight: '1.2' }}>{card.desc}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.hasDropdown && item.name === 'Applications' && (
                  <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? 'active' : ''}`} style={{ transform: 'translateX(calc(-50% - 180px))', marginTop: '10px', overflow: 'visible' }}>
                    <div className="mega-pointer" style={{ transform: 'translateX(180px)' }} />
                    <div className="mega-container" style={{ height: '360px', width: '680px', overflow: 'visible', position: 'relative', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.18), 0 4px 15px rgba(0, 0, 0, 0.05)' }}>
                      <div className="mega-top-line" style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />

                      {/* Left Panel: Dark Steel Theme */}
                      <div className="mega-left-panel" style={{ width: '35%', padding: '20px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}>
                        <div>
                          <div className="mega-steel-lines" />
                          <div className="mega-glow" />
                          <div className="mega-left-content" style={{ textAlign: 'left' }}>
                            <span className="mega-label">APPLICATIONS</span>
                            <h2 className="mega-heading-text" style={{ fontSize: '18px', margin: '4px 0 8px 0', lineHeight: '1.25' }}>
                              Engineered<br />For Strength
                            </h2>
                            <div className="mega-accent" style={{ margin: '6px 0' }} />
                            <p className="mega-desc-text" style={{ fontSize: '10.5px', lineHeight: '1.4', opacity: 0.85, fontWeight: '600' }}>
                              Versatile Tata Structura hollow sections engineered for infrastructure & commercial projects.
                            </p>
                          </div>
                        </div>

                        <div style={{ padding: '8px 10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                          <span style={{ fontSize: '9.5px', color: '#D7262E', fontWeight: '800', letterSpacing: '0.5px' }}>TATA STRUCTURA</span>
                          <p style={{ fontSize: '9.5px', color: '#cbd5e1', margin: '1px 0 0 0', lineHeight: '1.25', fontWeight: '600' }}>High yield strength steel hollow tubes.</p>
                        </div>
                      </div>

                      {/* Right Panel: 2-Column 10 Cards Grid */}
                      <div className="mega-right-panel" style={{ flex: 1, background: darkTheme ? '#1e293b' : '#ffffff', padding: '12px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 10px', alignItems: 'center', boxSizing: 'border-box', borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }}>
                        {[
                          // Row 1
                          { title: "Car Parking", desc: "Covered parking structures & sheds.", img: "/carshed.jpg", href: "https://www.tatastructura.com/CarParking" },
                          { title: "Commercial", desc: "Shopping malls & office spaces.", img: "/About-office.png", isCategory: true, categoryName: "Commercial" },
                          // Row 2
                          { title: "Gates Page", desc: "Architectural gates & boundary enclosures.", img: "/gates.jpg", href: "https://www.tatastructura.com/GatePage" },
                          { title: "Infrastructure", desc: "Metros, airports, stadiums & FOBs.", img: "/hyderabad_airport.png", isCategory: true, categoryName: "Infrastructure" },
                          // Row 3
                          { title: "Railings", desc: "Highway median barriers & handrails.", img: "/highway_flyover.png", href: "https://www.tatastructura.com/Railings" },
                          { title: "Industrial", desc: "Warehouses, gantries & pipe racks.", img: "/Product-rect-3.png", isCategory: true, categoryName: "Industrial" },
                          // Row 4
                          { title: "Roofs", desc: "Industrial & commercial roof trusses.", img: "/rooftop.png", href: "https://www.tatastructura.com/Roofs" },
                          { title: "Architectural", desc: "Window grills, fencing & screens.", img: "/metro_rail.png", isCategory: true, categoryName: "Architectural" },
                          // Row 5
                          { title: "Agrico Products", desc: "Agricultural & construction tools.", img: "/TATA_Agrico.png", href: "https://www.tatasteel.com/products-solutions/india/products/tata-agrico-agriculture-construction-hand-tools/" },
                          { title: "General Engineering", desc: "Scaffolding, truck bodies & furniture.", img: "/engineer_helmet.png", isCategory: true, categoryName: "General Engineering" }
                        ].map((card) => (
                          <div
                            key={card.title}
                            className={`mega-list-item ${card.isCategory ? 'has-submenu' : ''}`}
                            onClick={() => {
                              if (!card.isCategory && card.href) {
                                window.open(card.href, '_blank');
                                setActiveDropdown(null);
                              }
                            }}
                            style={{
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '8px 10px',
                              borderRadius: '10px',
                              textDecoration: 'none',
                              color: darkTheme ? '#ffffff' : '#0F172A',
                              background: activeAppCategory === card.categoryName ? (darkTheme ? 'rgba(255, 255, 255, 0.12)' : 'rgba(215, 38, 46, 0.08)') : (darkTheme ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 23, 42, 0.03)'),
                              border: activeAppCategory === card.categoryName ? '1px solid rgba(215, 38, 46, 0.4)' : (darkTheme ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(15, 23, 42, 0.09)'),
                              transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                              height: '100%',
                              boxSizing: 'border-box',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              if (card.isCategory) {
                                setActiveAppCategory(card.categoryName);
                              }
                              e.currentTarget.style.background = darkTheme ? 'rgba(255, 255, 255, 0.09)' : 'rgba(215, 38, 46, 0.06)';
                              e.currentTarget.style.borderColor = 'rgba(215, 38, 46, 0.35)';
                              e.currentTarget.style.transform = 'translateY(-1.5px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = activeAppCategory === card.categoryName ? (darkTheme ? 'rgba(255, 255, 255, 0.12)' : 'rgba(215, 38, 46, 0.08)') : (darkTheme ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 23, 42, 0.03)');
                              e.currentTarget.style.borderColor = activeAppCategory === card.categoryName ? 'rgba(215, 38, 46, 0.4)' : (darkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.09)');
                              e.currentTarget.style.transform = 'none';
                            }}
                          >
                            <img src={card.img} alt={card.title} style={{ width: '42px', height: '32px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0 }} loading="lazy" />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden', flex: 1 }}>
                              <span style={{ fontSize: '12.5px', fontWeight: '800', color: darkTheme ? '#ffffff' : '#0F172A', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', letterSpacing: '-0.2px' }}>
                                {card.title}
                              </span>
                              <span style={{ fontSize: '10.5px', color: darkTheme ? '#cbd5e1' : '#334155', fontWeight: '600', lineHeight: '1.2', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {card.desc}
                              </span>
                            </div>

                            {card.isCategory && (
                              <div style={{
                                width: '22px',
                                height: '22px',
                                borderRadius: '50%',
                                background: activeAppCategory === card.categoryName ? '#D7262E' : (darkTheme ? '#334155' : '#cbd5e1'),
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: '4px',
                                flexShrink: 0,
                                transition: 'all 0.2s ease',
                                boxShadow: activeAppCategory === card.categoryName ? '0 2px 6px rgba(215, 38, 46, 0.4)' : 'none'
                              }}>
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Separate Outer Floating Side Dropdown Card Box (Aligned with Item Y-Level) */}
                      {activeAppCategory && (
                        <div
                          className="outer-side-flyout"
                          style={{
                            position: 'absolute',
                            left: 'calc(100% + 2px)',
                            top: {
                              Commercial: '12px',
                              Infrastructure: '72px',
                              Industrial: '136px',
                              Architectural: '170px',
                              "General Engineering": '95px'
                            }[activeAppCategory] || '12px',
                            width: '265px',
                            height: 'auto',
                            background: darkTheme ? '#1e293b' : '#ffffff',
                            border: '1px solid rgba(215, 38, 46, 0.3)',
                            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.18), 0 4px 15px rgba(215, 38, 46, 0.08)',
                            borderRadius: '16px',
                            padding: '12px 14px',
                            zIndex: 999999,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            boxSizing: 'border-box',
                            transition: 'top 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '8px', marginBottom: '4px', borderBottom: darkTheme ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(15,23,42,0.08)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D7262E', display: 'inline-block' }} />
                              <span style={{ fontSize: '11.5px', fontWeight: '800', color: '#D7262E', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                {activeAppCategory}
                              </span>
                            </div>
                            <span style={{ fontSize: '9.5px', fontWeight: '700', color: darkTheme ? '#cbd5e1' : '#475569', background: darkTheme ? 'rgba(255,255,255,0.08)' : 'rgba(215,38,46,0.08)', padding: '2px 8px', borderRadius: '10px' }}>
                              {
                                {
                                  Commercial: 2,
                                  Infrastructure: 5,
                                  Industrial: 4,
                                  Architectural: 4,
                                  "General Engineering": 7
                                }[activeAppCategory] || 0
                              } items
                            </span>
                          </div>

                          {(
                            {
                              Commercial: [
                                { label: "SHOPPING MALLS & OFFICE SPACES", href: "https://www.tatastructura.com/Generic1#shopping" },
                                { label: "ATRIUMS / SKYLIGHTS & FACADES", href: "https://www.tatastructura.com/Generic1#atriums" }
                              ],
                              Infrastructure: [
                                { label: "METRO STATION / RAILWAY STATION", href: "https://www.tatastructura.com/Generic1#metrostation" },
                                { label: "AIRPORT FRAMEWORK", href: "https://www.tatastructura.com/Generic1#airport" },
                                { label: "STADIUMS / EXPO CENTRES", href: "https://www.tatastructura.com/Generic1#stadium" },
                                { label: "FOOT OVER BRIDGES", href: "https://www.tatastructura.com/Generic1#foot" },
                                { label: "BUS SHELTERS", href: "https://www.tatastructura.com/Generic2#busshelter" }
                              ],
                              Industrial: [
                                { label: "Warehouse & Industrial Enclosures", href: "https://www.tatastructura.com/Generic1#warehouse" },
                                { label: "Bulk Material Handling", href: "https://www.tatastructura.com/Generic1#bulk" },
                                { label: "Pipe Racks", href: "https://www.tatastructura.com/Generic1#pipe" },
                                { label: "Solar Panel Support Structure", href: "https://www.tatastructura.com/Generic1#solar" }
                              ],
                              Architectural: [
                                { label: "Window Grill", href: "https://www.tatastructura.com/Generic2#window" },
                                { label: "Fence", href: "https://www.tatastructura.com/Generic2#fence" },
                                { label: "Partition Screen", href: "https://www.tatastructura.com/Generic2#partition" },
                                { label: "Facade", href: "https://www.tatastructura.com/Generic2#facade" }
                              ],
                              "General Engineering": [
                                { label: "FURNITURE", href: "https://www.tatastructura.com/Generic2#furniture" },
                                { label: "VEHICLE SUPPORTS / CHASSIS", href: "https://www.tatastructura.com/Generic2#vehicle" },
                                { label: "GREENHOUSE STRUCTURES", href: "https://www.tatastructura.com/Generic2#greenhouse" },
                                { label: "TRUCK BODIES", href: "https://www.tatastructura.com/Generic2#truckbodies" },
                                { label: "SIGNAGES", href: "https://www.tatastructura.com/Generic2#signages" },
                                { label: "SCAFFOLDING", href: "https://www.tatastructura.com/Generic2#scaffolding" },
                                { label: "PLAYGROUND EQUIPMENT", href: "https://www.tatastructura.com/Generic2#playground" }
                              ]
                            }[activeAppCategory] || []
                          ).map((subOpt) => (
                            <a
                              key={subOpt.label}
                              href={subOpt.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '8px 10px',
                                borderRadius: '8px',
                                fontSize: '11.5px',
                                fontWeight: '700',
                                color: darkTheme ? '#ffffff' : '#0F172A',
                                textDecoration: 'none',
                                background: darkTheme ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.02)',
                                border: darkTheme ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(15,23,42,0.06)',
                                transition: 'all 0.18s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(215, 38, 46, 0.08)';
                                e.currentTarget.style.borderColor = 'rgba(215, 38, 46, 0.3)';
                                e.currentTarget.style.color = '#D7262E';
                                e.currentTarget.style.transform = 'translateX(3px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = darkTheme ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.02)';
                                e.currentTarget.style.borderColor = darkTheme ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(15,23,42,0.06)';
                                e.currentTarget.style.color = darkTheme ? '#ffffff' : '#0F172A';
                                e.currentTarget.style.transform = 'none';
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveDropdown(null);
                              }}
                            >
                              <span style={{ lineHeight: '1.25' }}>{subOpt.label}</span>
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '6px' }}>
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                              </svg>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {item.hasDropdown && item.name !== 'Products' && item.name !== 'Projects' && item.name !== 'About Us' && item.name !== 'Events' && item.name !== 'Partners' && item.name !== 'Applications' && (
                  <div className={`nav-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                    {item.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="dropdown-item"
                        onClick={(e) => {
                          const targetId = subItem.href.substring(1);
                          const section = document.getElementById(targetId);
                          if (section) {
                            e.preventDefault();
                            section.scrollIntoView({ behavior: 'smooth' });
                            setActiveDropdown(null);
                          }
                        }}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            {/* Shop Now Button */}
            <a
              href="https://aashiyana.tatasteel.com/in/en/brands/tata-structura-hollow-tube.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shop-now"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span>Shop Now</span>
            </a>

            {/* Search Bar (Contact & Quote) */}
            <div className="util-search-wrap header-search-wrap">
              <input
                type="text"
                className="util-search-input"
                placeholder="Search..."
                aria-label="Search site"
              />
              <button className="util-btn search-submit" aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>

            <a
              href="/pricelist"
              className="btn-quote"
              style={{ textDecoration: 'none' }}
            >
              <span className="btn-text">Price List</span>
              <div className="btn-icon-wrapper">
                <svg className="btn-arrow-icon" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
            {/* Mobile Hamburger Button */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>

          </div>
          <div className="nav-hidden-indicator">
            <svg width="16" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </header>
      {/* Mobile Full-Screen Nav Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer" onClick={() => setMobileMenuOpen(false)}>
            <div className="mobile-nav-inner" onClick={e => e.stopPropagation()}>
              <div className="mobile-nav-header">
                <img src="/m2-logo-only.png" alt="Logo" style={{ height: '40px' }} />
                <button className="mobile-nav-close" onClick={() => setMobileMenuOpen(false)}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <nav className="mobile-nav-links">
                {navItems.map((item) => (
                  <div key={item.name} className="mobile-nav-item">
                    <div
                      className="mobile-nav-link"
                      onClick={() => {
                        if (item.hasDropdown) {
                          setMobileExpandedItem(prev => prev === item.name ? null : item.name);
                        } else {
                          setMobileMenuOpen(false);
                          if (item.href && item.href.startsWith("/")) {
                            window.location.href = item.href;
                            return;
                          }
                          const section = document.getElementById(item.name.toLowerCase().replace(/\s+/g, '-'));
                          if (section) section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <svg
                          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          style={{ transform: mobileExpandedItem === item.name ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.25s' }}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      )}
                    </div>
                    {item.hasDropdown && mobileExpandedItem === item.name && (
                      <div className="mobile-nav-sub">
                        {item.dropdownItems.map(sub => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="mobile-nav-sub-link"
                            onClick={(e) => {
                              setMobileMenuOpen(false);
                              let cat = "Dealers";
                              if (sub.label === "Fabricators") cat = "Fabricators";
                              if (sub.label === "Architect and Engineers") cat = "Architect & Engineers";
                              if (typeof window !== 'undefined') {
                                window.dispatchEvent(new CustomEvent('partnerCategoryChange', { detail: { category: cat } }));
                              }
                              
                              if (sub.href && sub.href.startsWith("#")) {
                                e.preventDefault();
                                const section = document.getElementById(sub.href.substring(1)) || document.getElementById('dealer-network');
                                if (section) section.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mobile-nav-footer">
                <a href="/pricelist" className="mobile-nav-cta" onClick={() => setMobileMenuOpen(false)}>Price List</a>
              </div>
            </div>
          </div>
        )}

    </>
  );
}
