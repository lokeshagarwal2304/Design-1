"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  "210 YST",
  "310/355 YST",
  "GP Pipes",
  "GI Pipes",
];

const STATES = ["Andhra Pradesh", "Telangana", "All of the above"];

const AP_DISTRICTS = [
  "All Districts",
  "Vijayawada",
  "Visakhapatnam",
  "Guntur",
  "Tirupati",
  "Kakinada",
];

const PRODUCT_TABLE_DATA = {
  "210 YST": {
    rows: [
      { thickness: ">2MM", rcp: "83800" },
      { thickness: "2MM", rcp: "84400" },
      { thickness: "1.6MM", rcp: "87300" },
    ],
  },
  "310/355 YST": {
    rows: [
      { thickness: ">2MM", rcp: "85200" },
      { thickness: "2MM", rcp: "85800" },
      { thickness: "1.6MM", rcp: "88700" },
    ],
  },
  "GP Pipes": {
    rows: [
      { thickness: ">2MM", rcp: "81500" },
      { thickness: "2MM", rcp: "82100" },
      { thickness: "1.6MM", rcp: "84900" },
    ],
  },
  "GI Pipes": {
    rows: [
      { thickness: ">2MM", rcp: "89400" },
      { thickness: "2MM", rcp: "90100" },
      { thickness: "1.6MM", rcp: "92800" },
    ],
  },
};

const TG_DISTRICTS = [
  "All Districts",
  "Hyderabad",
  "Warangal",
  "Nizamabad",
  "Karimnagar",
  "Khammam",
];

const PRICE_LIST_DATA = [
  {
    id: 1,
    product: "210 YST",
    state: "Andhra Pradesh",
    district: "Vijayawada",
    title: "210 YST – Andhra Pradesh",
    image: "/Pricelist-1.jpg",
    updatedDate: "July 2026",
  },
  {
    id: 2,
    product: "210 YST",
    state: "Telangana",
    district: "Hyderabad",
    title: "210 YST – Telangana",
    image: "/Pricelist-2.jpg",
    updatedDate: "July 2026",
  },
  {
    id: 3,
    product: "310/355 YST",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    title: "310/355 YST – Andhra Pradesh",
    image: "/Pricelist-3.jpg",
    updatedDate: "July 2026",
  },
  {
    id: 4,
    product: "310/355 YST",
    state: "Telangana",
    district: "Warangal",
    title: "310/355 YST – Telangana",
    image: "/Pricelist-1.jpg",
    updatedDate: "July 2026",
  },
  {
    id: 5,
    product: "310/355 YST",
    state: "Andhra Pradesh",
    district: "Guntur",
    title: "310/355 YST (355 Grade) – Andhra Pradesh",
    image: "/Pricelist-2.jpg",
    updatedDate: "July 2026",
  },
  {
    id: 6,
    product: "310/355 YST",
    state: "Telangana",
    district: "Nizamabad",
    title: "310/355 YST (355 Grade) – Telangana",
    image: "/Pricelist-3.jpg",
    updatedDate: "July 2026",
  },
  {
    id: 7,
    product: "GP Pipes",
    state: "Andhra Pradesh",
    district: "Tirupati",
    title: "GP Pipes – Andhra Pradesh",
    image: "/Pricelist-1.jpg",
    updatedDate: "July 2026",
  },
  {
    id: 8,
    product: "GP Pipes",
    state: "Telangana",
    district: "Karimnagar",
    title: "GP Pipes – Telangana",
    image: "/Pricelist-2.jpg",
    updatedDate: "July 2026",
  },
  {
    id: 9,
    product: "GI Pipes",
    state: "Andhra Pradesh",
    district: "Kakinada",
    title: "GI Pipes – Andhra Pradesh",
    image: "/Pricelist-3.jpg",
    updatedDate: "July 2026",
  },
  {
    id: 10,
    product: "GI Pipes",
    state: "Telangana",
    district: "Khammam",
    title: "GI Pipes – Telangana",
    image: "/Pricelist-1.jpg",
    updatedDate: "July 2026",
  },
];

// ── CUSTOM ANIMATED DROPDOWN COMPONENT ──
function CustomSelect({ label, value, options, onChange, disabled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-1.5 relative" ref={containerRef}>
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block pl-2.5">
        {label}
      </label>

      {/* Trigger Box */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative w-full h-11 pl-4 pr-10 rounded-xl text-sm font-semibold flex items-center justify-between transition-all duration-200 border text-left ${disabled
          ? "bg-slate-100/80 border-slate-200 text-slate-400 cursor-not-allowed"
          : isOpen
            ? "bg-white border-[#3b1268] text-slate-900 shadow-md shadow-[#3b1268]/10 ring-2 ring-[#3b1268]/10"
            : "bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-800"
          }`}
      >
        <span className="truncate">{value}</span>
        <div
          className={`absolute right-3.5 top-1/2 -translate-y-1/2 transition-transform duration-200 text-slate-400 ${isOpen ? "rotate-180 text-[#3b1268]" : ""
            }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu Overlay */}
      <AnimatePresence>
        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-50 bg-white border border-slate-200/90 rounded-2xl shadow-xl p-1.5 overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto space-y-0.5 custom-scrollbar">
              {options.map((opt) => {
                const isSelected = value === opt;
                const isHovered = hoveredOption === opt;

                return (
                  <button
                    key={opt}
                    type="button"
                    onMouseEnter={() => setHoveredOption(opt)}
                    onMouseLeave={() => setHoveredOption(null)}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all duration-150 group ${isSelected
                      ? "bg-[#3b1268]/10 text-[#3b1268]"
                      : "text-slate-700 hover:bg-[#3b1268]/8 hover:text-[#3b1268]"
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b1268] shrink-0" />
                      )}
                      <span className={isSelected ? "font-bold text-[#3b1268]" : ""}>{opt}</span>
                    </span>

                    {/* Animated > Arrow on hover */}
                    <AnimatePresence>
                      {(isHovered || isSelected) && (
                        <motion.div
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -6 }}
                          transition={{ duration: 0.15 }}
                          className="text-[#3b1268] flex items-center gap-1 font-bold text-xs"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="w-3.5 h-3.5">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function PriceCatalogue() {
  const [selectedProduct, setSelectedProduct] = useState("210 YST");
  const [selectedState, setSelectedState] = useState("Andhra Pradesh");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [activeModalImg, setActiveModalImg] = useState(null);

  // Preload price list images into memory on mount for 0ms lag-free switching
  useEffect(() => {
    if (typeof window !== "undefined") {
      const img1 = new window.Image();
      img1.src = "/Pricelist/one-state.png";
      const img2 = new window.Image();
      img2.src = "/Pricelist/two-state.png";
    }
  }, []);

  // Handle state change & clear district
  const handleStateChange = (stateVal) => {
    setSelectedState(stateVal);
    setSelectedDistrict("All Districts");
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedProduct("210 YST");
    setSelectedState("Andhra Pradesh");
    setSelectedDistrict("All Districts");
  };

  // Get current available districts
  const currentDistricts =
    selectedState === "Andhra Pradesh"
      ? AP_DISTRICTS
      : selectedState === "Telangana"
        ? TG_DISTRICTS
        : ["All Districts"];

  // Filter items
  const filteredData = PRICE_LIST_DATA.filter((item) => {
    const matchProduct =
      selectedProduct === "All Products" || item.product === selectedProduct;
    const matchState =
      selectedState === "All States" || selectedState === "All of the above" || item.state === selectedState;
    const matchDistrict =
      selectedDistrict === "All Districts" || item.district === selectedDistrict;
    return matchProduct && matchState && matchDistrict;
  });

  return (
    <div className="w-full bg-[#f8f9fa] pt-2 pb-8 md:pb-12 px-4 sm:px-6 md:px-12 font-['Inter',sans-serif]">
      <div className="max-w-[1400px] mx-auto space-y-7">

        {/* ── SECTION 1: PRICE FINDER PANEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6"
        >
          {/* Left: Header Info */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3b1268]/10 text-[#3b1268] flex items-center justify-center shrink-0 mt-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                Find Your Price List
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-0.5 max-w-md">
                Find the latest structural steel price list according to product and location.
              </p>
            </div>
          </div>

          {/* Right: Inline Filter Controls (State, Product & Square Reset Button) */}
          <div className="flex items-end gap-3.5 w-full lg:w-auto flex-wrap sm:flex-nowrap pt-1">
            {/* State Dropdown */}
            <div className="w-full sm:w-44">
              <CustomSelect
                label="Select State"
                value={selectedState}
                options={STATES}
                onChange={(val) => handleStateChange(val)}
              />
            </div>

            {/* Product Dropdown */}
            <div className="w-full sm:w-48">
              <CustomSelect
                label="Select Product"
                value={selectedProduct}
                options={PRODUCTS}
                onChange={(val) => setSelectedProduct(val)}
              />
            </div>

            {/* Square Box Clear Filter Button */}
            <div className="flex flex-col justify-end">
              <button
                type="button"
                onClick={handleClearFilters}
                title="Clear Filters"
                className="w-11 h-11 bg-slate-50 hover:bg-[#E53935]/10 text-slate-600 hover:text-[#E53935] border border-slate-200 hover:border-[#E53935]/40 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs group cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                >
                  <path d="M21.5 2v6h-6M2.5 22v-6h6" />
                  <path d="M2 11.5a10 10 0 0 1 18.8-4.3L21.5 8M2.5 16l1.2 1.2A10 10 0 0 0 22 12.5" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── SECTION 2: HARDWARE-ACCELERATED INSTANT PRELOADED IMAGE DISPLAY ── */}
        <div className="flex justify-center items-center py-2">
          <div className="bg-white p-3 md:p-4 rounded-3xl border border-slate-200/90 shadow-xl max-w-[1150px] w-full overflow-hidden relative">
            {/* Dynamic Text Overlay on Top of Image Header */}
            <div className="absolute top-[15%] sm:top-[15.5%] md:top-[16%] left-1/2 -translate-x-1/2 w-[85%] sm:w-[78%] text-center z-20 pointer-events-none flex flex-col items-center justify-center font-['Arial',sans-serif]">
              <h3 className="text-xs sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#0f172a] uppercase tracking-wide leading-tight">
                RECOMMENDED CONSUMER PRICE
              </h3>
              <h4 className="text-[11px] sm:text-sm md:text-lg lg:text-[22px] font-bold text-[#21155C] uppercase tracking-wider leading-tight mt-0.5 sm:mt-1">
                {selectedState === "All of the above" || selectedState === "All States"
                  ? "ANDHRA PRADESH & TELANGANA"
                  : selectedState.toUpperCase()}
              </h4>
              <p className="text-sm sm:text-lg md:text-2xl lg:text-[28px] font-normal text-[#0f172a] tracking-wide leading-tight mt-0.5 sm:mt-1">
                Prices of {selectedProduct.includes("YST") ? `Black ${selectedProduct}` : selectedProduct}
              </p>
            </div>

            {/* Table Header Overlay (Dark Purple Bar) */}
            <div className="absolute top-[24.5%] left-[6.8%] right-[6.8%] h-[6.5%] z-20 pointer-events-none grid grid-cols-12 items-center text-center font-['Arial',sans-serif] font-black text-white">
              <div className="col-span-6 text-[10px] sm:text-base md:text-xl lg:text-[25px] tracking-wider">Size (MM)</div>
              <div className="col-span-3 text-[9px] sm:text-sm md:text-lg lg:text-[21px]">Thickness (MM)</div>
              <div className="col-span-3 text-[10px] sm:text-base md:text-xl lg:text-[25px] tracking-wider">RCP</div>
            </div>

            {/* Table Body 3-Row Overlay */}
            <div className="absolute top-[31.5%] left-[6.8%] right-[6.8%] h-[24.5%] z-20 pointer-events-none flex flex-col justify-between font-['Arial',sans-serif] text-white">
              {[
                { size: "15 NB to 125 NB", rowData: (PRODUCT_TABLE_DATA[selectedProduct] || PRODUCT_TABLE_DATA["210 YST"]).rows[0] },
                { size: "20x20 to 150x150", rowData: (PRODUCT_TABLE_DATA[selectedProduct] || PRODUCT_TABLE_DATA["210 YST"]).rows[1] },
                { size: "40x20 to 200x100", rowData: (PRODUCT_TABLE_DATA[selectedProduct] || PRODUCT_TABLE_DATA["210 YST"]).rows[2] },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 items-center text-center h-[31%]">
                  {/* Left Column: Size */}
                  <div className="col-span-6 font-black text-[11px] sm:text-lg md:text-2xl lg:text-[31px] leading-tight drop-shadow-xs">
                    {item.size}
                  </div>
                  {/* Middle Column: Thickness */}
                  <div className="col-span-3 font-black text-center drop-shadow-xs flex items-baseline justify-center">
                    <span className="text-[14px] sm:text-2xl md:text-4xl lg:text-[40px] font-black">
                      {item.rowData?.thickness ? item.rowData.thickness.replace("MM", "") : ""}
                    </span>
                    <span className="text-[10px] sm:text-base md:text-xl lg:text-[27px] font-bold ml-[1px]">
                      MM
                    </span>
                  </div>
                  {/* Right Column: RCP */}
                  <div className="col-span-3 font-black text-[12px] sm:text-xl md:text-3xl lg:text-[36px] tracking-wider drop-shadow-xs">
                    {item.rowData?.rcp}
                  </div>
                </div>
              ))}
            </div>

            {/* Terms & Conditions Overlay */}
            <div className="absolute top-[57.8%] left-[7.5%] z-20 pointer-events-none font-['Arial',sans-serif]">
              <h5 className="font-black underline text-[12px] sm:text-lg md:text-2xl lg:text-[28px] leading-tight text-black tracking-wide">
                Terms &amp; Conditions
              </h5>
            </div>

            {/* First Bullet Point Overlay */}
            <div className="absolute top-[60.4%] left-[10.8%] z-20 pointer-events-none font-['Arial',sans-serif]">
              <p className="font-black text-[12px] sm:text-[19px] md:text-2xl lg:text-[24px] leading-snug text-black tracking-wide">
                The above prices are inclusive of all taxes.
              </p>
            </div>

            {/* Second Bullet Point Overlay */}
            <div className="absolute top-[63.3%] left-[10.8%] z-20 pointer-events-none font-['Arial',sans-serif]">
              <p className="font-black text-[12px] sm:text-[19px] md:text-2xl lg:text-[24px] leading-snug text-black tracking-wide">
                All Material as per IS 1161 &amp; IS 4923.
              </p>
            </div>

            {/* Third Bullet Point Overlay */}
            <div className="absolute top-[66.2%] left-[10.8%] w-[58%] z-20 pointer-events-none font-['Arial',sans-serif]">
              <p className="font-black text-[12px] sm:text-[19px] md:text-2xl lg:text-[24px] leading-snug text-black tracking-wide">
                Above prices are applicable for material sold through the Authorised BDP Network.,
              </p>
            </div>

            {/* Red Mutyam Steel Date Overlay */}
            <div className="absolute top-[72%] left-[9.6%] z-20 pointer-events-none font-['Arial',sans-serif]">
              <p className="font-black text-[13px] sm:text-xl md:text-3xl lg:text-[30px] leading-snug text-[#D9342B] tracking-tight">
                Mutyam Steel Pvt. Ltd., w.e.f. 5<sup>th</sup> June 2026
              </p>
            </div>

            {/* Fourth Bullet Point Overlay */}
            <div className="absolute top-[76.2%] left-[10.8%] w-[58%] z-20 pointer-events-none font-['Arial',sans-serif]">
              <p className="font-black text-[12px] sm:text-[19px] md:text-2xl lg:text-[24px] leading-snug text-black tracking-wide">
                The above prices are subjected to alteration without notice and supersede all previous notification on the subject.
              </p>
            </div>

            {/* Special Discount Badge Text Overlay */}
            <div className="absolute top-[56.1%] right-[8.8%] w-[23.5%] h-[18.5%] z-20 pointer-events-none flex flex-col items-center justify-center text-center font-['Arial',sans-serif] text-white leading-tight">
              <span className="font-black text-[12px] sm:text-2xl md:text-3xl lg:text-[30px] uppercase tracking-wide drop-shadow-xs">
                Special
              </span>
              <span className="font-black text-[12px] sm:text-2xl md:text-3xl lg:text-[30px] uppercase tracking-wide drop-shadow-xs">
                Discount
              </span>
              <span className="font-bold text-[10px] sm:text-base md:text-xl lg:text-[21px] mt-0.5 drop-shadow-xs">
                is available
              </span>
              <span className="font-black text-[11px] sm:text-xl md:text-2xl lg:text-[26px] tracking-tight mt-0.5 drop-shadow-xs">
                on Aashiyana
              </span>
            </div>

            {/* Bottom Footer Bar Text Overlay */}
            <div className="absolute top-[94.4%] left-1/2 -translate-x-1/2 w-[96%] z-20 pointer-events-none text-center font-['Arial',sans-serif] text-white">
              <p className="font-black text-[8px] sm:text-xs md:text-sm lg:text-[17px] tracking-wider leading-tight drop-shadow-xs">
                Toll Free No. : 1800 108 8282, e-mail: tatastructura@tatasteel.com, www.tatastructura.com
              </p>
            </div>

            {/* QR Code Box Overlay */}
            <div className="absolute top-[83.0%] left-[8.2%] w-[10.5%] aspect-square z-20 pointer-events-none rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-white border-[3px] border-[#00B4B4] p-0.5">
              <img
                src="/Pricelist/QR-code.jpg"
                alt="Scan QR Code"
                className="w-full h-full object-cover scale-125 rounded-md"
              />
            </div>

            {/* Text Next to QR Code Overlay */}
            <div className="absolute top-[83.1%] left-[19.8%] z-20 pointer-events-none flex flex-col justify-center text-black font-black leading-snug font-['Arial',sans-serif]">
              <span className="text-[11px] sm:text-lg md:text-2xl lg:text-[23px] tracking-tight">
                For Online orders
              </span>
              <span className="text-[11px] sm:text-lg md:text-2xl lg:text-[23px] tracking-tight">
                Scan to visit
              </span>
              <span className="text-[12px] sm:text-xl md:text-3xl lg:text-[25px] tracking-tight">
                Tata Steel Aashiyana
              </span>
            </div>

            {/* Image 1: Two States (All States / All of the above) */}
            <img
              src="/Pricelist/two-state.png"
              alt="Tata Structura Price List - All States"
              decoding="async"
              fetchPriority="high"
              className={`w-full h-auto object-contain rounded-2xl shadow-sm transition-opacity duration-300 ease-in-out ${selectedState === "All of the above" || selectedState === "All States"
                ? "opacity-100 relative z-10"
                : "opacity-0 absolute inset-0 p-3 md:p-4 pointer-events-none z-0"
                }`}
              style={{ transform: "translateZ(0)", willChange: "opacity" }}
            />

            {/* Image 2: One State (Telangana / Andhra Pradesh) */}
            <img
              src="/Pricelist/one-state.png"
              alt="Tata Structura Price List - Single State"
              decoding="async"
              fetchPriority="high"
              className={`w-full h-auto object-contain rounded-2xl shadow-sm transition-opacity duration-300 ease-in-out ${selectedState !== "All of the above" && selectedState !== "All States"
                ? "opacity-100 relative z-10"
                : "opacity-0 absolute inset-0 p-3 md:p-4 pointer-events-none z-0"
                }`}
              style={{ transform: "translateZ(0)", willChange: "opacity" }}
            />
          </div>
        </div>


        {/* ── SECTION 4: BULK PRICING CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#1d0a36] via-[#2a0e4e] to-[#17072c] text-white p-8 md:p-10 shadow-xl border border-purple-900/40"
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                  Need Bulk Pricing?
                </h3>
                <p className="text-xs md:text-sm text-purple-200/80 mt-1">
                  Get in touch with our sales team for dealer &amp; bulk pricing.
                </p>
              </div>
            </div>

            <a
              href="/#contact"
              className="group shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-xs md:text-sm shadow-lg hover:shadow-amber-400/20 flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
            >
              <span>Get Dealer Pricing</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4 transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>

      {/* Lightbox / Modal for Preview */}
      <AnimatePresence>
        {activeModalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActiveModalImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-slate-900">{activeModalImg.title}</h3>
                <button
                  type="button"
                  onClick={() => setActiveModalImg(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors text-xs font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-auto max-h-[75vh] flex justify-center bg-slate-900 rounded-xl p-2">
                <img
                  src={activeModalImg.image}
                  alt={activeModalImg.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModalImg(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
                <a
                  href={activeModalImg.image}
                  download={`${activeModalImg.title}.jpg`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-[#3b1268] hover:bg-[#2d0d52] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download High Quality
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
