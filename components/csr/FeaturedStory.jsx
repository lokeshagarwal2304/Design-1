import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedStory() {
  return (
    <section className="relative z-30 w-full bg-[#F5F2EB] py-10 md:py-14 px-4 sm:px-6 md:px-[80px] font-['Manrope'] border-y border-slate-200/80">
      <div className="max-w-[1380px] mx-auto w-full">
        
        {/* Floating White Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white rounded-[28px] md:rounded-[36px] border border-slate-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.05)] p-6 sm:p-10 md:p-14 relative overflow-hidden"
        >
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Large Photograph */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative w-full h-[340px] sm:h-[420px] md:h-[460px] rounded-[24px] overflow-hidden shadow-sm border border-slate-200/80 bg-white group">
                <Image
                  src="/csr/img-2.jpeg"
                  alt="Mutyam Steel Community Clinic CSR Initiative"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Right Column: Story Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="space-y-3">
                <span className="text-[#D9342B] text-xs font-extrabold uppercase tracking-[0.25em] bg-[#D9342B]/10 border border-[#D9342B]/30 px-4 py-1.5 rounded-full inline-block shadow-2xs">
                  FEATURED STORY
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#111111] font-['Space_Grotesk'] leading-[1.12] tracking-tight">
                  Building Hope<br />
                  through <span className="animate-watery-gradient font-black">Community Care.</span>
                </h2>
              </div>

              <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                From setting up schools to supporting health camps and providing clean drinking water, our initiatives are driven by compassion, dedication and the vision of a stronger society.
              </p>

              <div className="pt-2">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#D9342B] text-white transition-all duration-300 font-bold text-xs sm:text-sm shadow-md group"
                >
                  <span>Read the full story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
