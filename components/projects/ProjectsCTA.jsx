"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="w-full py-12 px-6 md:px-[60px] bg-[#FAF8F5]">
      <div className="max-w-[1536px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
          style={{ minHeight: "260px" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/projects/project-banner.png"
              alt="CTA Background"
              fill
              className="object-cover object-center"
            />
            {/* Dark overlay — deep charcoal gradient from left */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(100deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.88) 40%, rgba(10,10,10,0.70) 65%, rgba(10,10,10,0.50) 100%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 md:px-16 py-14">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-[32px] md:text-[44px] font-extrabold font-['Space_Grotesk'] text-white leading-tight mb-2">
                Have a Project in Mind?
              </h2>
              <p className="text-[#CBD5E1] text-[16px] md:text-[17px] font-['Manrope'] font-medium">
                Let&apos;s build something stronger together with precision steel solutions.
              </p>
            </motion.div>

            {/* Right — Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="group shrink-0 inline-flex items-center gap-3 bg-[#D62E2E] hover:bg-[#b52020] text-white text-[15px] font-bold font-['Manrope'] px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_10px_28px_rgba(214,46,46,0.45)] hover:-translate-y-0.5"
              >
                <span>Discuss Your Project</span>
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" x2="19" y1="12" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
