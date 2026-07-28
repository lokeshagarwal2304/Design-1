import React from "react";
import { ShieldCheck, Lightbulb, Users, Award, Quote } from "lucide-react";
import { motion } from "framer-motion";

const PHILOSOPHY_CARDS = [
  {
    title: "Integrity",
    icon: ShieldCheck,
    desc: "We believe in transparency, honesty and strong ethical principles in all our actions.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    desc: "We embrace new ideas and advanced solutions to build a better tomorrow.",
  },
  {
    title: "Responsibility",
    icon: Users,
    desc: "We are committed to our people, our community and our environment.",
  },
  {
    title: "Excellence",
    icon: Award,
    desc: "We strive for excellence in quality, processes and every outcome.",
  },
];

export default function LeadershipPhilosophy() {
  return (
    <section className="relative z-30 w-full bg-[#F8FAFC] pt-8 pb-16 md:pt-10 md:pb-20 px-6 md:px-[80px] font-['Manrope'] border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Heading & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-6"
          >
            <span className="text-[#EF4444] text-xs font-bold uppercase tracking-[0.25em] bg-[#EF4444]/10 border border-[#EF4444]/25 px-4 py-1.5 rounded-full inline-block">
              OUR PHILOSOPHY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] font-['Space_Grotesk'] leading-[1.15] tracking-tight">
              Guided by <span className="text-[#EF4444]">Values</span>,<br />
              Driven by <span className="text-[#EF4444]">Purpose</span>.
            </h2>

            <div className="relative pt-2">
              <Quote className="w-12 h-10 text-[#EF4444]/30 mb-2" />
              <p className="text-lg md:text-xl font-bold text-[#0F172A] font-['Space_Grotesk'] leading-relaxed">
                &ldquo;True leadership is not about commanding people. It is about empowering them.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right Column: 4 Equal Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-6">
            {PHILOSOPHY_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 sm:p-7 rounded-[20px] sm:rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer text-center"
                >
                  <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-red-50 text-[#EF4444] w-fit mx-auto mb-2.5 sm:mb-4 border border-red-100 group-hover:scale-110 group-hover:bg-[#EF4444] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-[#0F172A] font-['Space_Grotesk'] mb-1 sm:mb-2 group-hover:text-[#EF4444] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-snug sm:leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
