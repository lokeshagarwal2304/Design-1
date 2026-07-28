import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TEAM_MEMBERS = [
  {
    name: "Srihari",
    designation: "General Manager",
    image: "/Our-team/srihari-gm.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Joythi",
    designation: "Finance",
    image: "/Our-team/Jyothi-finance.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ravi Kumar",
    designation: "Projects",
    image: "/Our-team/Ravikumar-projects.png",
    linkedin: "https://linkedin.com",
  },
];

export default function TeamMembers() {
  return (
    <section className="relative z-30 w-full bg-[#F8FAFC] py-20 md:py-28 px-6 md:px-[80px] font-['Manrope'] border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-16"
        >
          <span className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-red-50 border border-red-100 px-4 py-1.5 rounded-full inline-block">
            LEADERSHIP & MANAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#0F172A] font-['Space_Grotesk'] tracking-tight">
            Meet Our <span className="text-[#E53935]">Team</span>
          </h2>
        </motion.div>

        {/* 3 Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="rounded-[24px] bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
            >
              {/* Member Portrait */}
              <div className="relative w-full h-[320px] bg-slate-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-100"
                />
              </div>

              {/* Card Bottom Details */}
              <div className="p-6 flex items-center justify-between bg-white relative">
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] font-['Space_Grotesk'] group-hover:text-[#E53935] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-slate-500 mt-0.5">
                    {member.designation}
                  </p>
                </div>

                {/* LinkedIn Button */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-sm shrink-0"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
                </a>

                {/* Thin Amber Underline Animation on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D9911A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
