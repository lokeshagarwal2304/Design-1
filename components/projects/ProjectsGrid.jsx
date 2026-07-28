"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ALL_PROJECTS = [
  {
    id: 1, year: "2024", category: "industrial", categoryLabel: "Industrial",
    name: "Cantilever Glass Bridge",
    location: "Visakhapatnam, Andhra Pradesh, India",
    product: "Tata Structura Hollow Section Pipes",
    tonnage: "1,450+ MT",
    status: "Completed",
    description: "The longest cantilever glass skywalk of India located in Visakhapatnam, is built on the strength of Tata Structura hollow section pipes (100% Share of Business).",
    images: [
      "/projects/Cantilever-glass-bridge/glass-1.jpeg",
      "/projects/Cantilever-glass-bridge/glass-2.jpeg",
      "/projects/Cantilever-glass-bridge/glass-3.jpeg",
    ],
  },
  {
    id: 2, year: "2023", category: "infrastructure", categoryLabel: "Infrastructure",
    name: "Fortum EV Charging Stations",
    location: "Pan India (Hyderabad, Delhi, Bengaluru)",
    product: "Tata Structura Z+ Galvanized Steel Canopy Sections",
    tonnage: "850+ MT",
    status: "Completed",
    description: "Modern EV charging canopy infrastructure built with corrosion-resistant Tata Structura Z+ galvanized steel tubes for weatherproof outdoor EV charging hubs across major metros.",
    images: [
      "/projects/Fortum-Ev-Charging-stations/EV-1.jpeg",
      "/projects/Fortum-Ev-Charging-stations/EV-2.jpeg",
    ],
  },
  {
    id: 3, year: "2022", category: "warehouse", categoryLabel: "Warehouse",
    name: "Guntur Cold Storage",
    location: "Guntur, Andhra Pradesh, India",
    product: "Tata Structura Heavy Hollow RHS & SHS Sections",
    tonnage: "2,400+ MT",
    status: "Completed",
    description: "High-capacity temperature-controlled agricultural cold storage infrastructure built with precision-engineered Tata Structura steel sections for thermal efficiency & heavy storage loads.",
    images: [
      "/projects/Guntur-cold-storage/Storage-1.jpeg",
      "/projects/Guntur-cold-storage/Storage-2.jpeg",
      "/projects/Guntur-cold-storage/Storage-3.jpeg",
      "/projects/Guntur-cold-storage/Storage-4.jpeg",
    ],
  },
  {
    id: 4, year: "2022", category: "infrastructure", categoryLabel: "Infrastructure",
    name: "Hitec City Railway FOB",
    location: "Hitec City, Hyderabad, Telangana, India",
    product: "Tata Structura YST 310 Tubular Bridge Truss Sections",
    tonnage: "1,100+ MT",
    status: "Completed",
    description: "Pedestrian foot-over-bridge (FOB) structural framework connecting Hitec City Railway station with IT corridors, built with high-tensile Tata Structura hollow steel sections.",
    images: [
      "/projects/Hitec City Railway FOB/FOB-1.jpeg",
    ],
  },
  {
    id: 5, year: "2023", category: "industrial", categoryLabel: "Industrial",
    name: "NSEPOXY & FABRICATION SOLUTIONS PVT LTD",
    location: "Telangana, India",
    product: "Tata Structura High-Strength Industrial Framing Sections",
    tonnage: "1,800+ MT",
    status: "Completed",
    description: "Advanced industrial fabrication and epoxy coating plant structure constructed with high-tensile Tata Structura hollow sections engineered for heavy industrial load distribution.",
    images: [
      "/projects/NSEPOXY & FABRICATION SOLUTIONS PVT LTD/plant-1.jpeg",
    ],
  },
  {
    id: 6, year: "2023", category: "warehouse", categoryLabel: "Warehouse",
    name: "Shamshabad Warehouse",
    location: "Shamshabad, Hyderabad, Telangana, India",
    product: "Tata Structura Heavy Hollow Section Warehousing Framework",
    tonnage: "3,100+ MT",
    status: "Completed",
    description: "Modern logistics warehousing facility located near Shamshabad Airport corridor, built with high-span Tata Structura steel hollow sections for maximum storage volume and durability.",
    images: [
      "/projects/Shamshabad-warehouse/Warehouse-1.jpeg",
    ],
  },
];

const CATEGORY_COLOR = {
  industrial: "#E53935",
  infrastructure: "#1565C0",
  commercial: "#2E7D32",
  warehouse: "#E65100",
  institutional: "#6A1B9A",
  residential: "#00838F",
  overseas: "#37474F",
};

const FEATURE_PILLARS = [
  {
    id: "portfolio",
    title: "Diverse Portfolio",
    desc: "Projects spanning multiple industries and sectors",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 15l-2 5l9-11h-7l2-5l-9 11h7z"/>
      </svg>
    ),
  },
  {
    id: "quality",
    title: "Quality Assured",
    desc: "Built with the highest standards of safety and quality",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    id: "delivery",
    title: "On-Time Delivery",
    desc: "Timely execution and delivery is our commitment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    id: "satisfaction",
    title: "Client Satisfaction",
    desc: "Long-term relationships built on trust and reliability",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: "global",
    title: "Global Reach",
    desc: "Serving clients across India and overseas regions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

function ProjectTile({ project, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  const mainImg = project.images[0];
  const thumbs = project.images.slice(1, 4);
  const extraCount = project.images.length - 4;
  const slideDirectionX = index % 2 === 0 ? -35 : 35;

  return (
    <motion.div
      initial={{ opacity: 0, x: slideDirectionX, y: 25, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.09, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
      className="group bg-white border border-[#EAEAEA] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#D62E2E]/40 hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)]"
    >
      {/* Image area */}
      <div className="flex h-[162px] overflow-hidden">
        {/* Main large image */}
        <div className="relative flex-1 overflow-hidden">
          {/* Year badge */}
          <div className="absolute top-2.5 left-2.5 z-20 bg-white/95 backdrop-blur-sm text-[11px] font-bold font-['Inter'] text-[#111] px-2 py-0.5 rounded shadow-sm">
            {project.year}
          </div>
          <div
            className="absolute inset-0 transition-transform duration-500 ease-out"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          >
            <Image src={mainImg} alt={project.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
          </div>
        </div>

        {/* Thumbnail strip — right side */}
        {thumbs.length > 0 && (
          <div className="w-[64px] flex flex-col gap-[2px] pl-[2px] shrink-0 bg-[#F4F4F4]">
            {thumbs.map((thumb, ti) => (
              <div key={ti} className="relative flex-1 overflow-hidden">
                {ti === 2 && extraCount > 0 ? (
                  <>
                    <Image src={thumb} alt="" fill className="object-cover opacity-50" sizes="64px" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white text-[11px] font-bold font-['Inter']">+{extraCount}</span>
                    </div>
                  </>
                ) : (
                  <Image
                    src={thumb} alt="" fill className="object-cover transition-transform duration-500" sizes="64px"
                    style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom info */}
      <div className="px-3.5 py-3.5 flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-[13.5px] font-bold text-[#111] font-['Manrope'] leading-snug truncate mb-1 group-hover:text-[#D62E2E] transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center gap-1 mb-1.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-[#999] shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-[11px] text-[#777] font-['Inter'] truncate">{project.location}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold font-['Inter'] uppercase tracking-[0.8px]" style={{ color: CATEGORY_COLOR[project.category] || "#D62E2E" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CATEGORY_COLOR[project.category] || "#D62E2E" }} />
            {project.categoryLabel}
          </span>
        </div>
        {/* Arrow */}
        <div
          className="w-7.5 h-7.5 rounded-full border border-[#E5E5E5] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#D62E2E] group-hover:bg-[#D62E2E]"
          style={{ transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "all 0.3s ease" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 transition-colors duration-300 ${hovered ? "text-white" : "text-[#333]"}`}>
            <line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

const ITEMS_PER_PAGE = 8;

export default function ProjectsGrid({
  activeCategory,
  filters = { year: "all", product: "all", scale: "all" },
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const filtered = ALL_PROJECTS.filter((project) => {
    // 1. Category Filter
    if (activeCategory !== "all" && project.category !== activeCategory) {
      return false;
    }
    // 2. Completion Year Filter
    if (filters.year !== "all") {
      if (filters.year === "2020") {
        if (parseInt(project.year) > 2020) return false;
      } else if (project.year !== filters.year) {
        return false;
      }
    }
    // 3. Steel Product Grade Filter
    if (filters.product !== "all") {
      const prodLower = project.product.toLowerCase();
      if (filters.product === "yst210" && !prodLower.includes("210")) return false;
      if (filters.product === "yst310" && !prodLower.includes("310")) return false;
      if (filters.product === "yst355" && !prodLower.includes("355")) return false;
      if (filters.product === "zplus" && !prodLower.includes("z+")) return false;
      if (filters.product === "gp" && !prodLower.includes("gp")) return false;
    }
    // 4. Project Scale (Tonnage) Filter
    if (filters.scale !== "all") {
      const rawNum = parseInt(project.tonnage.replace(/[^0-9]/g, "")) || 0;
      if (filters.scale === "mega" && rawNum <= 5000) return false;
      if (filters.scale === "major" && (rawNum < 2000 || rawNum > 5000)) return false;
      if (filters.scale === "standard" && rawNum >= 2000) return false;
    }
    return true;
  });

  // Reset to page 1 when category or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, filters]);

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === "ArrowRight") {
        setSelectedImgIndex((prev) => (prev + 1) % selectedProject.images.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
      } else if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const goTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 550, behavior: "smooth" });
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setSelectedImgIndex(0);
  };

  return (
    <section className="w-full bg-[#FAFAFA]">
      
      {/* ── PROJECTS GRID CONTAINER ── */}
      <div className="w-full py-[60px]">
        <div className="max-w-[1536px] mx-auto px-6 md:px-[60px]">

          {/* Header — showing count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-[13px] text-[#888] font-['Manrope'] font-medium">
              Showing{" "}
              <span className="text-[#111] font-bold">{startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, filtered.length)}</span>
              {" "}of{" "}
              <span className="text-[#111] font-bold">{filtered.length}</span>{" "}projects
            </p>

            {/* Page indicator right */}
            {totalPages > 1 && (
              <p className="text-[12px] text-[#888] font-['Manrope'] font-medium">
                Page <span className="text-[#111] font-bold">{currentPage}</span> / {totalPages}
              </p>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-[#888] font-['Manrope'] text-lg">No projects found in this category.</div>
          ) : (
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {paginated.map((project, i) => (
                <ProjectTile key={project.id} project={project} index={i} onClick={openProjectModal} />
              ))}
            </motion.div>
          )}

          {/* Pagination Controls — Perfect Red Circle active pill */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              {/* Prev */}
              <button
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5E7EB] bg-white text-[13px] font-['Manrope'] font-bold text-[#475569] hover:border-[#D62E2E] hover:text-[#D62E2E] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                <span>Prev</span>
              </button>

              {/* Page numbers — Perfect Round Circles */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = page === currentPage;
                  const showPage = page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
                  const showEllipsisBefore = page === currentPage - 2 && page > 2;
                  const showEllipsisAfter = page === currentPage + 2 && page < totalPages - 1;

                  if (showEllipsisBefore || showEllipsisAfter) {
                    return <span key={page} className="px-1 text-[#BBB] text-[13px]">…</span>;
                  }
                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => goTo(page)}
                      className={`w-10 h-10 rounded-full text-[14px] font-['Manrope'] font-bold flex items-center justify-center transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#D62E2E] text-white shadow-[0_4px_14px_rgba(214,46,46,0.35)] scale-105"
                          : "bg-white border border-[#E5E7EB] text-[#475569] hover:border-[#D62E2E] hover:text-[#D62E2E]"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next */}
              <button
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5E7EB] bg-white text-[13px] font-['Manrope'] font-bold text-[#475569] hover:border-[#D62E2E] hover:text-[#D62E2E] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
              >
                <span>Next</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          )}

        </div>
      </div>



      {/* ── PROJECT LIGHTBOX MODAL (Creamish Light Pastel Theme + Lower Shift + WhatsApp Integration) ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24"
          >
            {/* Modal Body Card — Compact & Neat Layout */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[920px] bg-[#FAF8F5] rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-2xl flex flex-col my-auto"
            >
              {/* TOP — Gallery Image Display */}
              <div className="relative w-full bg-[#0F172A] h-[360px] sm:h-[400px] md:h-[430px] flex flex-col justify-between overflow-hidden">
                {/* Main Image */}
                <div className="relative w-full flex-1 h-full">
                  <Image
                    src={selectedProject.images[selectedImgIndex]}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                  {/* Image Counter Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold font-['Manrope'] px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                    IMAGE {selectedImgIndex + 1} OF {selectedProject.images.length}
                  </div>

                  {/* Cherrish Red Circular Close Button (Top Right) */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-[#D62E2E] hover:bg-[#b82424] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 border border-white/20 shrink-0"
                    aria-label="Close modal"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>

                  {/* Side Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-[#D62E2E] text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer shadow-md"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                          <polyline points="15 18 9 12 15 6"/>
                        </svg>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImgIndex((prev) => (prev + 1) % selectedProject.images.length);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-[#D62E2E] text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer shadow-md"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Bottom Thumbnails Strip Over Image */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-3 left-4 right-4 z-20 p-2.5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/15 flex items-center justify-center gap-2.5 overflow-x-auto no-scrollbar w-fit mx-auto">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImgIndex(idx)}
                        className={`relative w-16 h-11 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                          idx === selectedImgIndex ? "border-[#D62E2E] opacity-100 scale-105 shadow-md" : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                      >
                        <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* BOTTOM — Compact Information Strip ("White Patti Neeche") */}
              <div className="w-full bg-[#FAF8F5] px-6 py-4 md:px-8 md:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#E2E8F0] text-[#0F172A]">
                {/* Left: Project Title */}
                <h2 className="text-xl sm:text-2xl md:text-[26px] font-black font-['Space_Grotesk'] text-[#0F172A] leading-tight">
                  {selectedProject.name}
                </h2>

                {/* Right: Badges */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <span
                    className="px-4 py-1.5 rounded-full text-xs font-extrabold font-['Manrope'] uppercase tracking-wider text-white shadow-sm"
                    style={{ backgroundColor: CATEGORY_COLOR[selectedProject.category] || "#D62E2E" }}
                  >
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs font-extrabold font-['Manrope'] text-[#475569] bg-[#E2E8F0] px-4 py-1.5 rounded-full border border-[#CBD5E1]">
                    YEAR {selectedProject.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
