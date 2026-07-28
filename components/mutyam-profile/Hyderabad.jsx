import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const OVERVIEW_BULLETS = [
  "Based in Telangana — Hyderabad, with 10 years of experience in the steel industry.",
  "Served pioneers methodologies for designing robust business structures, automation, and coordination.",
  "Focus on product quality and customer service as essential partners.",
  "A strong infrastructural resources, we want to reach the top of the layers in this industry.",
  "Our products are used in various construction projects and energy buildings that are thermally responsive.",
  "Our long term goal is to build as many sustainable buildings as possible with the Mutyam steel.",
  "We provide MS Iron and Tata Structura products which include Structural Pipes | GP/GC | Color Coated.",
];

export default function Hyderabad() {
  return (
    <section className="relative z-30 w-full bg-slate-50 pt-12 pb-4 md:pt-16 md:pb-6 px-6 md:px-[80px] font-['Space_Grotesk'] border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Dark Navy Card with Charminar Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-[24px] bg-[#081B3A] text-white p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Text Left */}
              <div className="md:col-span-7 space-y-3">
                <span className="text-[#EF4444] text-xs font-extrabold uppercase tracking-[0.25em]">
                  OUR PRESENCE
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
                  HYDERABAD
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-['Space_Grotesk'] opacity-90">
                  In Hyderabad, Our leader Mahendar reddy seeded MSPI, in the year 2012 with a vision to ensure you build the home of your dreams with top quality building materials and long lasting strength. At mutyam steel, our goal is to supply some of the best quality building materials in India with unmatched precision, discipline and in a timely manner. We are committed to meeting the client expectations and we will strive to achieve maximum efficiency while providing useful assistance and top quality building materials in a fair and transparent manner while ensuring every family achieves their dream of building a home without bankrupting themselves.
                </p>
              </div>

              {/* Charminar Image Right */}
              <div className="md:col-span-5 relative w-full h-[280px] md:h-[340px] rounded-xl overflow-hidden shadow-lg border border-white/10">
                <Image
                  src="/Mutyam-steel-Profile/Hyderabad.png"
                  alt="Hyderabad Charminar Landmark"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: White Card with Red Circle Check Bullets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-[24px] bg-white border border-slate-200 p-6 md:p-8 flex flex-col justify-center shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-extrabold text-[#0F172A] font-['Space_Grotesk'] mb-5 uppercase tracking-wide">
              OVERVIEW OF THE COMPANY
            </h3>

            <ul className="space-y-3.5 text-xs md:text-sm text-slate-700 font-['Space_Grotesk'] font-medium">
              {OVERVIEW_BULLETS.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                  <span className="leading-snug">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
