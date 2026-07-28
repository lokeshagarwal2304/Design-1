import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function LeaderProfile() {
  return (
    <section id="leader-profile" className="relative z-30 w-full bg-white rounded-t-[36px] md:rounded-t-[48px] pt-16 pb-6 md:pt-20 md:pb-8 px-6 md:px-[80px] overflow-hidden font-['Manrope'] shadow-[0_-30px_60px_rgba(0,0,0,0.25)] border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Portrait Photo with AUTOMATIC Scroll Grow/Scale Reveal Animation */}
          <motion.div
            initial={{ opacity: 0.2, scale: 0.68, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Red Dotted Pattern Accent behind image */}
            <div className="absolute -top-6 -left-6 w-44 h-44 opacity-30 bg-[radial-gradient(#EF4444_2px,transparent_2px)] [background-size:12px_12px] z-0" />

            {/* Main Larger Portrait Container */}
            <div className="relative z-10 w-full h-[460px] sm:h-[520px] md:h-[580px] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-slate-100 to-slate-200">
              <Image
                src="/Mutyam-steel-Profile/Mahendar-reddy.png"
                alt="Mr. Mahendar Reddy - Chairman & Managing Director"
                fill
                priority
                className="object-cover object-top opacity-100"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Leader Details & Full Biography */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 pt-6 lg:pt-0"
          >
            {/* Small Label */}
            <div className="inline-block">
              <span className="text-[#EF4444] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-[#EF4444]/10 border border-[#EF4444]/25 px-4 py-1.5 rounded-full">
                OUR LEADER
              </span>
            </div>

            {/* Heading & LinkedIn Icon */}
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] font-['Space_Grotesk'] tracking-tight">
                Mahendar Reddy
              </h2>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" /></svg>
              </a>
            </div>

            <p className="text-sm md:text-base font-bold text-[#EF4444] font-['Space_Grotesk'] uppercase tracking-wider">
              Chairman & Managing Director
            </p>

            {/* Large Highlighted Quote */}
            <div className="relative pl-6 border-l-4 border-[#EF4444] py-1 bg-red-50/50 rounded-r-2xl">
              <Quote className="w-16 h-8 text-[#EF4444] opacity-40 mb-1" />
              <blockquote className="text-lg md:text-xl font-bold text-[#0F172A] leading-snug font-['Space_Grotesk']">
                &ldquo;A visionary leader who has given life to many people and has inspired the current generation to move forward in achieving their goals.&rdquo;
              </blockquote>
            </div>

            {/* Biography Narrative */}
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                He graduated from the Osmania University, Hyderabad in 1982 and LEC polytechnic, Gulbarga. Mr. Reddy started his career with a continuous hard work from a town you&apos;ll can called as neredmet in late Nalgonda region in 1986.
              </p>
              <p>
                In 1993, he began Vasugura Steel Rolling Mills, Hyderabad in a very single spare facility to achieve his vision to provide food and shelter to people who trusted him.
              </p>
              <p>
                In 2000, he started Chalavarya Steel Tubes at Burugga town, Mahbubnagar Area. His determination & believer in &apos;syal makes the identities, hope gives to achieve&apos; set standard in turn adding to favourable outcomes for the projects.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
