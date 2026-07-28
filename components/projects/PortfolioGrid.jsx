import React from "react";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS_COL_1 = [
  {
    id: 1,
    title: "Water Supply Project",
    location: "Jadcherla, Telangana",
    category: "Infrastructure",
    img: "/rooftop.png",
    aspect: "aspect-[4/5]",
  },
  {
    id: 2,
    title: "Rural Empowerment",
    location: "Livelihood & Skills",
    category: "Community Development",
    img: "/csr/img-3.jpeg",
    aspect: "aspect-[4/3]",
    hasTowerDoodle: true,
  },
];

const PROJECTS_COL_2 = [
  {
    id: 3,
    title: "School Development",
    location: "Mahbubnagar, Telangana",
    category: "Education",
    img: "/csr/img-1.jpeg",
    aspect: "aspect-[16/10]",
    hasTape: true,
  },
  {
    id: 4,
    title: "Community Centers",
    location: "Rural Telangana",
    category: "Community Development",
    img: "/csr/img-4.jpeg",
    aspect: "aspect-[16/10]",
  },
  {
    id: 5,
    title: "Industrial Infrastructure",
    location: "Engineering Future",
    category: "Industrial",
    img: "/steel_framework_cad.png",
    aspect: "aspect-[16/10]",
  },
];

const PROJECTS_COL_3 = [
  {
    id: 6,
    title: "Healthcare Access",
    location: "Community Clinics",
    category: "Healthcare",
    img: "/csr/img-2.jpeg",
    aspect: "aspect-[3/4]",
    hasDots: true,
  },
  {
    id: 7,
    title: "Green Initiatives",
    location: "Sustainable Tomorrow",
    category: "Environment",
    img: "/solarsheds.png",
    aspect: "aspect-[4/3]",
  },
];

export default function PortfolioGrid({ activeCategory }) {
  return (
    <section className="relative w-full bg-[#FAFAF8] py-16 md:py-24 px-6 md:px-[80px] font-['Manrope'] overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        
        {/* 3-Column Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* COLUMN 1 */}
          <div className="space-y-8">
            {PROJECTS_COL_1.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-8">
            {PROJECTS_COL_2.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-8">
            {PROJECTS_COL_3.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function ProjectCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group cursor-pointer"
    >
      {/* Tape Accent Graphic (top left) */}
      {item.hasTape && (
        <div className="absolute -top-3 left-6 z-20 w-16 h-6 bg-[#EBE5D9]/90 border border-slate-300/60 rotate-[-4deg] shadow-sm pointer-events-none" />
      )}

      {/* Crane / Blueprint Line Accents */}
      {item.hasTowerDoodle && (
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden xl:block z-0 opacity-40 pointer-events-none">
          <svg className="w-16 h-32 text-slate-400 stroke-current fill-none" viewBox="0 0 40 100">
            <path d="M20 0 v100 M0 20 h40 M5 40 h30 M10 60 h20 M15 80 h10" strokeWidth="1" />
          </svg>
        </div>
      )}

      {/* Image Container with 22px Rounded Corners */}
      <div className={`relative w-full ${item.aspect} rounded-[22px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] bg-slate-100 border border-slate-200/60`}>
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 z-10" />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
          
          {/* Hand-Drawn White Corners Accent */}
          {item.hasDots && (
            <>
              {/* Top Right Corner */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-70">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                   <path d="M20 2 L2 2 L2 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Bottom Right Corner */}
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none opacity-70">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                   <path d="M20 18 L2 18 L2 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </>
          )}

          <motion.div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 
              className="text-2xl md:text-[28px] text-white drop-shadow-sm font-normal"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: '0.5px' }}
            >
              {item.title}
            </h3>
            
            <div className="flex items-center justify-between text-slate-200 text-xs font-medium pt-1">
              <span className="flex items-center gap-1 opacity-90">
                <MapPin className="w-3.5 h-3.5 text-[#D93025]" />
                {item.location}
              </span>
              
              <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#D93025] group-hover:scale-110 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
