const fs = require('fs');

let content = fs.readFileSync('app/page.js', 'utf8');

// 1. Remove invisible hover trigger zone
content = content.replace(/\{\s*\/\*\s*Invisible hover trigger zone[^\}]*\}[^<]*<div\s+className="nav-trigger-zone"[\s\S]*?\/>/, '');

// 2. Remove floating header capsule
content = content.replace(/\{\s*\/\*\s*Floating Header Capsule\s*\*\/\s*\}[^<]*<header[\s\S]*?<\/header>/, '');

// 3. Remove mobile full-screen nav drawer
content = content.replace(/\{\s*\/\*\s*Mobile Full-Screen Nav Drawer\s*\*\/\s*\}[^{]*\{mobileMenuOpen && \([\s\S]*?<\/div>\n\s*\)\}/, '');

// 4. Remove footer
content = content.replace(/<footer className="footer-container scroll-reveal" id="footer">[\s\S]*?<\/footer>/, '');

fs.writeFileSync('app/page.js', content);
console.log('Cleaned app/page.js successfully');
