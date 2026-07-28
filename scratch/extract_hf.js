const fs = require('fs');

const pageContent = fs.readFileSync('app/page.js', 'utf8');

// --- Create GlobalHeader.jsx ---
let headerImports = `"use client";\nimport React, { useState, useEffect, useRef } from 'react';\nimport './page.css';\n\n`;

// Extract navItems
let navItemsMatch = pageContent.match(/const navItems = \[\s*[\s\S]*?\n  \];/);
let navItems = navItemsMatch ? navItemsMatch[0] : '';

// Extract Header JSX
let headerStart = pageContent.indexOf('<header\n          className="header-capsule nav-visible"');
if (headerStart === -1) headerStart = pageContent.indexOf('<header');
let headerEnd = pageContent.indexOf('</header>', headerStart) + 9;
let headerJSX = pageContent.substring(headerStart, headerEnd);

// Extract Mobile Menu Drawer
let mobileStart = pageContent.indexOf('{/* Mobile Full-Screen Nav Drawer */}');
let mobileEnd = pageContent.indexOf('</div>\n        )}\n', mobileStart) + 18;
let mobileJSX = mobileStart !== -1 ? pageContent.substring(mobileStart, mobileEnd) : '';

let globalHeaderComponent = `${headerImports}export default function GlobalHeader() {
  const [activeItem, setActiveItem] = useState('Home');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
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

  ${navItems}

  return (
    <>
      <div 
        className="nav-trigger-zone"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      ${headerJSX}
      ${mobileJSX}
    </>
  );
}
`;
fs.writeFileSync('components/GlobalHeader.jsx', globalHeaderComponent);

// --- Create GlobalFooter.jsx ---
let footerStart = pageContent.indexOf('<footer');
let footerEnd = pageContent.indexOf('</footer>', footerStart) + 9;
let footerJSX = pageContent.substring(footerStart, footerEnd);

let globalFooterComponent = `"use client";\nimport React from 'react';\nimport './page.css';\n\nexport default function GlobalFooter() {\n  return (\n    ${footerJSX}\n  );\n}\n`;
fs.writeFileSync('components/GlobalFooter.jsx', globalFooterComponent);

console.log('GlobalHeader and GlobalFooter created successfully.');
