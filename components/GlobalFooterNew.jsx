"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GlobalFooterNew({ onToggle }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && footerRef.current) {
          footerRef.current.classList.add("in-view");
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      ref={footerRef}
      className="footer-container in-view scroll-reveal opacity-100 relative z-30 bg-[#F8FAFC] overflow-hidden border-t border-slate-200/90"
      id="footer-new"
      style={{ opacity: 1, visibility: "visible" }}
    >
      {/* Enhanced Dynamic Light Design Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Hexagonal Honeycomb Steel Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66ZM28 100L0 84L0 50L28 66L56 50L56 84L28 100Z' fill='none' stroke='%230284C7' stroke-width='1.2'/%3E%3C/svg%3E")`,
            backgroundSize: '56px 100px'
          }}
        />

        {/* Floating Animated Light Orbs */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-blue-300/30 via-sky-200/25 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-200/35 via-blue-200/20 to-transparent rounded-full blur-3xl"
        />

        <motion.div 
          animate={{
            scale: [1, 1.25, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 left-1/3 w-[400px] h-[400px] bg-gradient-to-t from-cyan-200/30 via-sky-100/20 to-transparent rounded-full blur-3xl"
        />

        {/* Decorative Isometric Steel Beam Lines Art (Left Watermark) */}
        <svg className="absolute left-[-40px] top-12 w-80 h-80 opacity-[0.06] text-blue-800" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="100,10 180,50 180,150 100,190 20,150 20,50" />
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="180" y1="50" x2="20" y2="150" />
          <line x1="20" y1="50" x2="180" y2="150" />
        </svg>
      </div>

      {/* Reverse Button in Top Right */}
      <div className="w-full max-w-[1440px] mx-auto relative px-6 pt-4">
        <button
          onClick={onToggle}
          className="absolute top-2 right-6 md:right-10 w-11 h-11 rounded-full bg-white text-slate-800 hover:bg-[#5B50D6] hover:text-white shadow-xl border border-slate-200 flex items-center justify-center transition-all cursor-pointer hover:scale-110 group z-30"
          aria-label="Toggle Footer View"
          title="Switch Footer View"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </button>
      </div>

      {/* Main Section: Left Branding & Right Navigation Links */}
      <div className="max-w-[1360px] mx-auto px-6 pt-6 pb-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Branding Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 flex flex-col items-center text-center"
        >
          {/* Big Scaled Up Logo */}
          <div className="flex items-center justify-center gap-5 -mb-4 hover:scale-105 transition-transform duration-500 cursor-pointer">
            <img src="/m2-logo-only.png" alt="Mutyam Steel Logo" className="h-20 md:h-24 w-auto drop-shadow-md" loading="lazy" />
            <img src="/logo-text.jpg" alt="Mutyam Steel" className="w-[420px] md:w-[480px] h-[160px] md:h-[180px] object-contain" loading="lazy" />
          </div>

          {/* Big Readable Description */}
          <p className="text-[18px] md:text-[21px] font-semibold text-slate-800 leading-relaxed max-w-[800px] mb-5">
            Authorized distribution partner of <span className="text-[23px] md:text-[26px] font-black uppercase bg-gradient-to-r from-[#0284C7] via-[#2563EB] to-[#5B50D6] bg-clip-text text-transparent inline-block tracking-wider mx-1.5 drop-shadow-xs">TATA STEEL</span>. Powering industrial projects, infrastructure networks, and commercial landmarks across South India since 1998.
          </p>

          {/* Large Original Colored Social Icon Circles */}
          <div className="flex items-center justify-center gap-4 md:gap-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/mutyam-steel-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0284C7] flex items-center justify-center transition-all duration-300 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-115 hover:shadow-lg hover:shadow-[#0A66C2]/30 cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mutyamsteelpvtltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#FCE7F3] border border-[#FBCFE8] text-[#E11D48] flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:scale-115 hover:shadow-lg hover:shadow-[#dc2743]/30 cursor-pointer"
              aria-label="Instagram"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@mutyamsteelpvtltd1202"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#FEE2E2] border border-[#FECACA] text-[#EF4444] flex items-center justify-center transition-all duration-300 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:scale-115 hover:shadow-lg hover:shadow-[#FF0000]/30 cursor-pointer"
              aria-label="YouTube"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.029-1.078-1.838-2.103-2.11-1.853-.5-9.395-.5-9.395-.5s-7.543 0-9.395.5c-1.025.272-1.83 1.081-2.103 2.11-.5 1.854-.5 5.72-.5 5.72s0 3.865.5 5.719c.272 1.029 1.078 1.838 2.103 2.11 1.852.5 9.395.5 9.395.5s7.543 0 9.395-.5c1.025-.272 1.83-1.081 2.103-2.11.5-1.854.5-5.72.5-5.72s0-3.866-.5-5.72zm-14.248 9.482v-7.284l6.386 3.642-6.386 3.642z" /></svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/MSPLHYD"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#DBEAFE] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-115 hover:shadow-lg hover:shadow-[#1877F2]/30 cursor-pointer"
              aria-label="Facebook"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/mutyamsteel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-[#334155] flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-115 hover:shadow-lg hover:shadow-black/20 cursor-pointer"
              aria-label="Twitter"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.258 5.629 5.906-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>
        </motion.div>

        {/* Right Navigation Links - Simple Metallic Black List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-4 flex flex-col gap-2.5 px-4 translate-x-[180px] translate-y-[25px]"
        >
          <a href="/about/mutyam-steel-profile" className="text-[16px] font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200">
            Mutyam Steel Profile
          </a>
          <a href="/about/leadership" className="text-[16px] font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200">
            Leadership
          </a>
          <a href="/about/directorship" className="text-[16px] font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200">
            Directorship
          </a>
          <a href="/about/vision-mission" className="text-[16px] font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200">
            Vision and Mission
          </a>
          <a href="/products" className="text-[16px] font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200">
            Products
          </a>
          <a href="/projects" className="text-[16px] font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200">
            Projects
          </a>
          <a href="/gallery" className="text-[16px] font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200">
            Gallery
          </a>
          <a href="/products#applications" className="text-[16px] font-bold text-slate-900 hover:text-blue-600 hover:translate-x-1 transition-colors duration-200">
            Applications
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar text-[14px] md:text-[15px] font-bold text-slate-700">
        <div className="bottom-left font-bold text-[14px] md:text-[15px]">
          <span>© 2026 Mutyam Steel Pvt. Ltd.</span>
        </div>
        <div className="bottom-center font-bold text-[14px] md:text-[15px]">
          <a href="#privacy" className="bottom-bar-link font-bold text-[14px] md:text-[15px]">Privacy Policy</a>
          <span className="bottom-link-dot"></span>
          <a href="#terms" className="bottom-bar-link font-bold text-[14px] md:text-[15px]">Terms of Use</a>
          <span className="bottom-link-dot"></span>
          <a href="#cookies" className="bottom-bar-link font-bold text-[14px] md:text-[15px]">Cookie Preferences</a>
          <span className="bottom-link-dot"></span>
          <a href="#sitemap" className="bottom-bar-link font-bold text-[14px] md:text-[15px]">Sitemap</a>
        </div>
        <div className="bottom-right font-bold text-[14px] md:text-[15px]">
          <div className="bottom-right-handcrafted font-bold text-[14px] md:text-[15px]">
            <span>Handcrafted with</span>
            <svg className="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="#E53935" style={{ display: "inline-block", verticalAlign: "middle" }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>by</span>
            <img src="/fsi-logo-transparent.png" alt="FSI Logo" className="fsi-footer-logo" loading="lazy" />
            <span>Flyingstars</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
