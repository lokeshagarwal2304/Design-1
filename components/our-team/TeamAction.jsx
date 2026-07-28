import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ACTION_SLIDES = [
  {
    title: "Factory Operations & Safety",
    desc: "Engineers monitoring structural steel manufacturing & safety compliance.",
    image: "/Banner-2.png",
  },
  {
    title: "Executive Planning Meetings",
    desc: "Cross-functional teams discussing project blueprints and logistics.",
    image: "/Session meet.png",
  },
  {
    title: "Warehouse & Inventory Operations",
    desc: "High-capacity inventory reserves ready for dispatch across South India.",
    image: "/rooftop.png",
  },
  {
    title: "Quality Control & Metallurgical Inspection",
    desc: "Tata Structura certified quality testing for extreme durability.",
    image: "/About-office.png",
  },
  {
    title: "Client Consultation & Technical Discussions",
    desc: "Working closely with commercial partners and structural architects.",
    image: "/NSPL-dealer-meet.png",
  },
];

export default function TeamAction() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slider every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ACTION_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? ACTION_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ACTION_SLIDES.length);
  };

  return (
    <section className="relative z-30 w-full bg-[#F8FAFC] py-20 md:py-28 px-6 md:px-[80px] font-['Manrope'] border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12"
        >
          <span className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-red-50 border border-red-100 px-4 py-1.5 rounded-full inline-block">
            EXCELLENCE IN ACTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#0F172A] font-['Space_Grotesk'] tracking-tight">
            Team in <span className="text-[#E53935]">Action</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Card */}
          <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
            <Image
              src={ACTION_SLIDES[currentIndex].image}
              alt={ACTION_SLIDES[currentIndex].title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            {/* Dark Overlay Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Bottom Slide Info */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white space-y-1">
              <h3 className="text-xl md:text-2xl font-bold font-['Space_Grotesk']">
                {ACTION_SLIDES[currentIndex].title}
              </h3>
              <p className="text-xs md:text-sm text-slate-200 font-medium">
                {ACTION_SLIDES[currentIndex].desc}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 p-3.5 rounded-full bg-white text-[#0F172A] shadow-xl hover:bg-[#E53935] hover:text-white transition-all duration-300 border border-slate-200 z-20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 p-3.5 rounded-full bg-white text-[#0F172A] shadow-xl hover:bg-[#E53935] hover:text-white transition-all duration-300 border border-slate-200 z-20"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {ACTION_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#E53935]" : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
