"use client";

import React, { useState } from "react";

export default function Footer({ setActiveDropdown }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer-container opacity-100 relative z-30 bg-[#081B3A]" id="footer" style={{ opacity: 1, visibility: 'visible' }}>

      {/* Section 2: Main Footer Content */}
      <div className="footer-main-content">

        {/* Left Side: Brand Logo & Description */}
        <div className="footer-left-col">
          <div className="footer-logo">
            <img src="/m2-logo-only.png" alt="Mutyam Steel Logo" className="logo-icon-img" loading="lazy" />
            <img src="/logo-text.png" alt="Mutyam Steel" className="logo-text-img" loading="lazy" />
          </div>
          <p className="footer-desc">
            Authorized distribution partner of TATA Steel. Powering industrial projects, infrastructure networks, and commercial landmarks across South India since 1998.
          </p>
          <div className="footer-socials-list">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/mutyam-steel-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/mutyamsteelpvtltd/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@mutyamsteelpvtltd1202" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="YouTube">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.029-1.078-1.838-2.103-2.11-1.853-.5-9.395-.5-9.395-.5s-7.543 0-9.395.5c-1.025.272-1.83 1.081-2.103 2.11-.5 1.854-.5 5.72-.5 5.72s0 3.865.5 5.719c.272 1.029 1.078 1.838 2.103 2.11 1.852.5 9.395.5 9.395.5s7.543 0 9.395-.5c1.025-.272 1.83-1.081 2.103-2.11.5-1.854.5-5.72.5-5.72s0-3.866-.5-5.72zm-14.248 9.482v-7.284l6.386 3.642-6.386 3.642z" /></svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/MSPLHYD" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            {/* Twitter / X */}
            <a href="https://x.com/mutyamsteel" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Twitter">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.258 5.629 5.906-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>
        </div>

        {/* Center Columns */}
        <div className="footer-columns-group">

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li><a href="#about-us" className="footer-link">Corporate Profile</a></li>
              <li><a href="#leadership" className="footer-link">Board &amp; Leadership</a></li>
              <li><a href="#gallery" className="footer-link">Project Showcase</a></li>
              <li><a href="#dealers" className="footer-link">Distribution Network</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
              <li><a href="#contact" className="footer-link">Contact Relations</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-links-list">
              <li><a href="https://www.tatastructura.com/yst210" target="_blank" rel="noopener noreferrer" className="footer-link">Tata Structura 210 YST</a></li>
              <li><a href="https://www.tatastructura.com/yst355" target="_blank" rel="noopener noreferrer" className="footer-link">Tata Structura 310/355 YST</a></li>
              <li><a href="https://www.tatastructura.com/zplus" target="_blank" rel="noopener noreferrer" className="footer-link">Tata Structura Z+</a></li>
              <li><a href="https://www.tatapipes.com/products/galvanized-pipes/" target="_blank" rel="noopener noreferrer" className="footer-link">Tata Structura GP Pipes</a></li>
              <li><a href="https://www.tatasteel.com/products-solutions/india/products/tata-agrico-agriculture-construction-hand-tools/" target="_blank" rel="noopener noreferrer" className="footer-link">Tata Agrico</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Sectors</h4>
            <ul className="footer-links-list">
              <li><span className="footer-static-link">Heavy Infrastructure</span></li>
              <li><span className="footer-static-link">Commercial High-Rises</span></li>
              <li><span className="footer-static-link">Residential Projects</span></li>
              <li><span className="footer-static-link">Industrial Infrastructure</span></li>
              <li><span className="footer-static-link">Smart Warehousing</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Applications</h4>
            <ul className="footer-links-list">
              <li><a href="https://www.tatastructura.com/CarParking" target="_blank" rel="noopener noreferrer" className="footer-link">Car Parking</a></li>
              <li><a href="https://www.tatastructura.com/GatePage" target="_blank" rel="noopener noreferrer" className="footer-link">Gates</a></li>
              <li><a href="https://www.tatastructura.com/Railings" target="_blank" rel="noopener noreferrer" className="footer-link">Railings</a></li>
              <li><a href="https://www.tatastructura.com/Roofs" target="_blank" rel="noopener noreferrer" className="footer-link">Roofs</a></li>
              <li><a href="https://www.tatastructura.com/Generic1#airport" target="_blank" rel="noopener noreferrer" className="footer-link">Airport Framework</a></li>
              <li><a href="https://www.tatastructura.com/Generic1#warehouse" target="_blank" rel="noopener noreferrer" className="footer-link">Warehouses</a></li>
            </ul>
          </div>

        </div>

        {/* Right Side: Let's Build Together & CTA */}
        <div className="footer-right-col">
          <div className="footer-cta-box">
            <h4 className="cta-heading">Enterprise Solutions</h4>
            <p className="cta-text">
              Connect with our industrial division to discuss custom logistics, pricing frameworks, and bulk procurement contracts.
            </p>
            <button className="cta-pill-btn">
              <span>Request Enterprise Pricing</span>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="cta-btn-arrow">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Newsletter Section */}
      <div className="footer-newsletter-bar">
        <div className="newsletter-left">
          <div className="newsletter-icon-wrap">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="newsletter-texts">
            <h4 className="newsletter-title">Subscribe to our Quarterly Steel Intelligence report for raw material trends &amp; market pricing.</h4>
          </div>
        </div>
        <div className="newsletter-right">
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={subscribed ? "Subscription successful!" : "Enter corporate email address"}
              className="newsletter-input"
              required
              disabled={subscribed}
            />
            <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe" disabled={subscribed}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="newsletter-arrow">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="bottom-left">
          <span>© 2026 Mutyam Steel Pvt. Ltd.</span>
        </div>
        <div className="bottom-center">
          <a href="#privacy" className="bottom-bar-link">Privacy Policy</a>
          <span className="bottom-link-dot"></span>
          <a href="#terms" className="bottom-bar-link">Terms of Use</a>
          <span className="bottom-link-dot"></span>
          <a href="#cookies" className="bottom-bar-link">Cookie Preferences</a>
          <span className="bottom-link-dot"></span>
          <a href="#sitemap" className="bottom-bar-link">Sitemap</a>
        </div>
        <div className="bottom-right">
          <div className="bottom-right-handcrafted">
            <span>Handcrafted with</span>
            <svg className="heart-icon" width="12" height="12" viewBox="0 0 24 24" fill="#E53935" style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 4px' }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>by</span>
            <img src="/fsi-logo-transparent.png" alt="FSI Logo" className="fsi-footer-logo" loading="lazy" style={{ height: '18px', width: 'auto', display: 'inline-block', margin: '0 4px' }} />
            <span>Flyingstars</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
