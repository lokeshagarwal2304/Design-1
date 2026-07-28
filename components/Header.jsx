"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({ darkTheme = false }) {
  const [activeItem, setActiveItem] = useState("About Us");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredAboutCategory, setHoveredAboutCategory] = useState("Our Organisation");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hoverTimeout = useRef(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    {
      name: "About Us",
      href: "/about/mutyam-steel-profile",
      hasDropdown: true,
      dropdownItems: [
        { label: "Our Organisation", href: "/about/mutyam-steel-profile" },
      ],
    },
    {
      name: "Products",
      href: "/#products",
      hasDropdown: true,
      dropdownItems: [
        { label: "Tata Structura 210 YST", href: "https://www.tatastructura.com/yst210" },
        { label: "Tata Structura 310/355 YST", href: "https://www.tatastructura.com/yst355" },
        { label: "Tata Structura Z+", href: "https://www.tatastructura.com/zplus" },
        { label: "Tata Structura GP Pipes", href: "https://www.tatapipes.com/products/galvanized-pipes/" },
        { label: "Tata Agrico", href: "https://www.tatasteel.com/products-solutions/india/products/tata-agrico-agriculture-construction-hand-tools/" },
      ],
    },
    {
      name: "Partners",
      href: "/#dealer-network",
      hasDropdown: true,
      dropdownItems: [
        { label: "Dealers", href: "/#dealer-network?category=Dealers" },
        { label: "Fabricators", href: "/#dealer-network?category=Fabricators" },
        { label: "Architect and Engineers", href: "/#dealer-network?category=Architect%20%26%20Engineers" },
      ],
    },
    { name: "Projects", href: "/projects", hasDropdown: false },
    {
      name: "Events",
      hasDropdown: true,
      dropdownItems: [
        { label: "Media Center", href: "/gallery" },
        { label: "Event Updates", href: "/events-new" },
      ],
    },
    {
      name: "Applications",
      href: "/#applications",
      hasDropdown: true,
      dropdownItems: [
        { label: "Car Parking", href: "/#applications" },
        { label: "Gates Page", href: "/#applications" },
        { label: "Railings", href: "/#applications" },
        { label: "Roofs", href: "/#applications" },
        { label: "Scaffolding", href: "/#applications" },
      ],
    },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <>
      {/* Floating Header Capsule */}
      <header
        className="header-capsule nav-visible"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo Section */}
        <div
          className="logo-container"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
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
              style={{ position: "relative" }}
            >
              <a
                href={item.href}
                className={`nav-link ${activeItem === item.name ? "active" : ""}`}
                onClick={(e) => {
                  if (!item.hasDropdown) {
                    setActiveItem(item.name);
                    setActiveDropdown(null);
                  }
                }}
              >
                <span className="nav-text">{item.name}</span>
                {item.hasDropdown && (
                  <svg
                    className={`chevron-icon ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    style={{ transition: "transform 0.3s ease" }}
                    width="8"
                    height="5"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>

              {/* 1. About Us Mega Dropdown */}
              {item.hasDropdown && item.name === "About Us" && (
                <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? "active" : ""}`}>
                  <div className="mega-pointer" />
                  <div className="mega-container" style={{ height: "360px", width: "680px" }}>
                    <div className="mega-top-line" />

                    {/* Left Panel */}
                    <div className="mega-left-panel" style={{ width: "36%", padding: "20px" }}>
                      <div className="mega-steel-lines" />
                      <div className="mega-glow" />
                      <div className="mega-left-content">
                        <span className="mega-label">ABOUT US</span>
                        <h2 className="mega-heading-text" style={{ fontSize: "18.5px", lineHeight: "1.25" }}>
                          Legacy of<br />Excellence
                        </h2>
                        <div className="mega-accent" style={{ margin: "8px 0 10px 0" }} />
                        <p className="mega-desc-text" style={{ fontSize: "11px", lineHeight: "1.45", opacity: 0.75 }}>
                          Our 25+ years journey, TATA Steel partnership & industrial commitment across South India.
                        </p>
                      </div>
                    </div>

                    {/* Right Panel */}
                    <div className="mega-right-panel" style={{ flex: 1, height: "100%", background: darkTheme ? "#1e293b" : "#ffffff", padding: "18px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "repeat(3, 1fr)", gap: "10px 12px", boxSizing: "border-box" }}>
                      {[
                        { title: "Mutyam Steel Profile", desc: "Our 25+ years legacy, TATA Steel partnership & leadership.", href: "/about/mutyam-steel-profile" },
                        { title: "Vision & Mission", desc: "Core values, industrial standards & future outlook.", href: "/vision-mission" },
                        { title: "Leadership Team", desc: "Meet the directors & management driving steel distribution.", href: "/leadership" },
                        { title: "Directorship", desc: "Board of Directors & advisors.", href: "/directorship" },
                        { title: "Warehousing Facilities", desc: "State-of-the-art warehousing infrastructure.", href: "/blueprints/warehouses" },
                        { title: "CSR", desc: "Social responsibility & community initiatives.", href: "/csr" },
                      ].map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          style={{
                            height: "100%",
                            boxSizing: "border-box",
                            justifyContent: "center",
                            color: darkTheme ? "#ffffff" : "#1e293b",
                            textDecoration: "none",
                            padding: "12px 14px",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "3px",
                            background: darkTheme ? "rgba(255, 255, 255, 0.03)" : "rgba(16, 29, 44, 0.02)",
                            border: darkTheme ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(16, 29, 44, 0.06)",
                            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span style={{ fontSize: "13px", fontWeight: "700", color: darkTheme ? "#ffffff" : "#1e293b" }}>{subItem.title}</span>
                          <span style={{ fontSize: "10.5px", color: darkTheme ? "#94a3b8" : "#5e6d82", fontWeight: "500", lineHeight: "1.25" }}>{subItem.desc}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Products Mega Dropdown */}
              {item.hasDropdown && item.name === "Products" && (
                <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? "active" : ""}`}>
                  <div className="mega-pointer" />
                  <div className="mega-container" style={{ height: "340px", width: "680px" }}>
                    <div className="mega-top-line" />

                    {/* Left Panel */}
                    <div className="mega-left-panel" style={{ width: "36%", padding: "16px 18px" }}>
                      <div className="mega-steel-lines" />
                      <div className="mega-glow" />
                      <div className="mega-left-content">
                        <span className="mega-label">OUR PRODUCTS</span>
                        <h2 className="mega-heading-text" style={{ fontSize: "18px", lineHeight: "1.2" }}>
                          Built on<br />Tata Quality
                        </h2>
                        <div className="mega-accent" style={{ margin: "6px 0 8px 0" }} />
                        <p className="mega-desc-text" style={{ fontSize: "10.5px", lineHeight: "1.4", opacity: 0.75 }}>
                          Supplying premium structural steel solutions across Telangana and Andhra Pradesh.
                        </p>
                      </div>
                      <a href="/products" className="mega-explore-btn" style={{ padding: "8px 14px", fontSize: "11px" }} onClick={() => setActiveDropdown(null)}>
                        EXPLORE ALL
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                    {/* Right Panel */}
                    <div className="mega-right-panel" style={{ display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", height: "100%", padding: "12px 16px", flex: 1, boxSizing: "border-box" }}>
                      {[
                        { title: "Tata Structura 210 YST", desc: "Lightweight, high-strength structural hollow sections.", img: "/Circular-hollow.webp", href: "https://www.tatastructura.com/yst210" },
                        { title: "Tata Structura 310/355 YST", desc: "Heavy-duty, high-tensile hollow sections for infrastructure.", img: "/product-square.png", href: "https://www.tatastructura.com/yst355" },
                        { title: "Tata Structura Z+", desc: "Galvanized tubes with zinc coating for rust protection.", img: "/gi-pipes.png", href: "https://www.tatastructura.com/zplus" },
                        { title: "Tata Structura GP Pipes", desc: "Galvanized pipes for plumbing and industrial use.", img: "/GP-pipe.jpg", href: "https://www.tatapipes.com/products/galvanized-pipes/" },
                        { title: "Tata Agrico", desc: "Agriculture and construction hand tools.", img: "/TATA_Agrico.png", href: "https://www.tatasteel.com/products-solutions/india/products/tata-agrico-agriculture-construction-hand-tools/" },
                      ].map((prod) => (
                        <a
                          key={prod.title}
                          href={prod.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-list-item"
                          style={{ padding: "6px 10px", gap: "10px" }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <img src={prod.img} alt={prod.title} className="mega-list-item-img" style={{ width: "40px", height: "32px", borderRadius: "6px" }} loading="lazy" />
                          <div className="mega-list-item-text" style={{ flex: 1 }}>
                            <h3 style={{ fontSize: "12.5px", margin: 0, fontWeight: 700 }}>{prod.title}</h3>
                            <p style={{ fontSize: "10.5px", margin: "1px 0 0 0", lineHeight: "1.2" }}>{prod.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Partners Dropdown */}
              {item.hasDropdown && item.name === "Partners" && (
                <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? "active" : ""}`}>
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
                        { title: "Dealers", desc: "Widespread footprint & authorized dealer network.", cat: "Dealers" },
                        { title: "Fabricators", desc: "Authorized structural fabricator partners.", cat: "Fabricators" },
                        { title: "Architect and Engineers", desc: "Structural design & architectural consultants.", cat: "Architect & Engineers" },
                      ].map((pItem) => (
                        <a
                          key={pItem.title}
                          href={`/#dealer-network?category=${encodeURIComponent(pItem.cat)}`}
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
                            setActiveDropdown(null);
                            if (typeof window !== "undefined") {
                              window.dispatchEvent(new CustomEvent("partnerCategoryChange", { detail: { category: pItem.cat } }));
                              if (window.location.pathname === "/") {
                                const el = document.getElementById("dealer-network");
                                if (el) {
                                  e.preventDefault();
                                  el.scrollIntoView({ behavior: "smooth" });
                                }
                              }
                            }
                          }}
                        >
                          <span style={{ fontSize: "13.5px", fontWeight: "700", color: darkTheme ? "#ffffff" : "#1e293b" }}>{pItem.title}</span>
                          <span style={{ fontSize: "11px", color: darkTheme ? "#94a3b8" : "#5e6d82", fontWeight: "500" }}>{pItem.desc}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Projects Mega Dropdown */}
              {item.hasDropdown && item.name === "Projects" && (
                <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? "active" : ""}`}>
                  <div className="mega-pointer" />
                  <div className="mega-container" style={{ height: "390px", width: "700px" }}>
                    <div className="mega-top-line" />

                    <div className="mega-left-panel" style={{ width: "38%" }}>
                      <div className="mega-steel-lines" />
                      <div className="mega-glow" />
                      <div className="mega-left-content">
                        <span className="mega-label">OUR PROJECTS</span>
                        <h2 className="mega-heading-text" style={{ fontSize: "19px", lineHeight: "1.25" }}>
                          Engineered<br />for Projects
                        </h2>
                        <div className="mega-accent" />
                        <p className="mega-desc-text" style={{ fontSize: "11px", lineHeight: "1.45", opacity: 0.75 }}>
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

                    <div className="mega-right-panel" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px 20px", flex: 1, justifyContent: "center" }}>
                      {[
                        { title: "Infrastructure & Commercial", desc: "Structural solutions for modern industrial buildings.", img: "/hyderabad_airport.png" },
                        { title: "Agriculture & Water Systems", desc: "Durable pipes and tubing built for irrigation.", img: "/gi-pipes.png" },
                        { title: "Automotive & Industrial", desc: "Precision components for heavy machinery.", img: "/steel_framework_cad.png" },
                        { title: "Energy & Transmission", desc: "Steel frameworks engineered for solar power.", img: "/Solarsheds.png" },
                      ].map((proj) => (
                        <a key={proj.title} href="/projects" className="mega-list-item" onClick={() => setActiveDropdown(null)}>
                          <img src={proj.img} alt={proj.title} className="mega-list-item-img" loading="lazy" />
                          <div className="mega-list-item-text">
                            <h3>{proj.title}</h3>
                            <p>{proj.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Events Dropdown */}
              {item.hasDropdown && item.name === "Events" && (
                <div className={`nav-dropdown nav-mega-dropdown ${activeDropdown === item.name ? "active" : ""}`}>
                  <div className="mega-pointer" />
                  <div className="mega-container" style={{ height: "260px", width: "600px" }}>
                    <div className="mega-top-line" />
                    <div className="mega-left-panel" style={{ width: "40%", padding: "20px" }}>
                      <div className="mega-steel-lines" />
                      <div className="mega-glow" />
                      <div className="mega-left-content">
                        <span className="mega-label">MEDIA & EVENTS</span>
                        <h2 className="mega-heading-text" style={{ fontSize: "18px", margin: "4px 0 8px 0", lineHeight: "1.25" }}>Events &<br />Media</h2>
                        <div className="mega-accent" />
                        <p className="mega-desc-text" style={{ fontSize: "11px", lineHeight: "1.45", opacity: 0.75 }}>
                          Highlights, corporate events, and media gallery.
                        </p>
                      </div>
                    </div>

                    <div className="mega-right-panel" style={{ flex: 1, background: darkTheme ? "#1e293b" : "#ffffff", padding: "20px 24px", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>
                      {[
                        { title: "Media Center", desc: "View photos, press coverage & latest media showcases.", href: "/gallery" },
                        { title: "Event Updates", desc: "Corporate events, trade expos & industrial exhibitions.", href: "/events-new" },
                      ].map((card) => (
                        <a key={card.title} href={card.href} className="mega-list-item" style={{ padding: "10px 14px", borderRadius: "10px" }} onClick={() => setActiveDropdown(null)}>
                          <div className="mega-list-item-text">
                            <h3 style={{ fontSize: "13px", margin: 0, fontWeight: 700 }}>{card.title}</h3>
                            <p style={{ fontSize: "11px", margin: "2px 0 0 0" }}>{card.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a href="/pricelist" className="btn-quote" style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A", textDecoration: "none", marginRight: "12px" }}>
            Price List
          </a>

          <a
            href="https://aashiyana.tatasteel.com/in/en/brands/tata-structura-hollow-tube.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shop-now"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px" }}>
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span>Shop Now</span>
          </a>
        </div>
      </header>
    </>
  );
}
