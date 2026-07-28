import React from "react";
import Image from "next/image";
import { ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="relative z-30 w-full bg-[#F8FAFC] py-12 md:py-16 px-6 md:px-[80px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Story Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-block">
              <span className="text-[#EF4444] text-xs md:text-sm font-bold uppercase tracking-[0.25em] bg-[#EF4444]/10 border border-[#EF4444]/25 px-4 py-1.5 rounded-full">
                OUR STORY
              </span>
            </div>

            {/* Human-crafted Editorial Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.1] tracking-tight font-['Space_Grotesk']">
              <span className="block text-[#0F172A] font-extrabold italic tracking-wide">
                Built on Trust.
              </span>
              <span className="block text-[#EF4444] font-black tracking-tight mt-1">
                Driven by Purpose.
              </span>
            </h2>

            <div className="space-y-4 text-[#475569] text-base md:text-lg leading-relaxed font-['Space_Grotesk']">
              <p>
                Mutyam Steel fulfills the desires of millions of people to build their dream houses by providing sustainable and quality products at a reasonable stake. Every single day, we have our client base increasing undoubtedly due to our commitment to excellence.
              </p>
              <p>
                As a matter of fact, steel has become an integral part in our lives. It is an essential element in every tool/machinery we use in our daily lives such as vehicles, houses, bridges, equipment, and many customised goods.
              </p>
              <p>
                Therefore, we want Mutyam Steel company to extend its capabilities in order to provide sustainable products and effective services to people for the sake of a better community. We strive hard to deliver the most trusted, sustainable, long-lasting and durable products within precise time, work harder and achieve more success.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Prominent Pop Reveal Image with Red Glow & Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.88 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Glowing Red Background Accent */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#EF4444]/20 via-[#38BDF8]/20 to-transparent rounded-[36px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="relative w-full h-[380px] md:h-[460px] lg:h-[500px] rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(239,68,68,0.22)] border-4 border-white group cursor-pointer">
              <Image
                src="/Mutyam-steel-Profile/Built-on-trust-ladies.png"
                alt="Mutyam Steel Engineers & Team"
                fill
                priority
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B3A]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Floating Quality Badge Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-3.5"
              >
                <div className="p-3 rounded-xl bg-[#EF4444] text-white shrink-0 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#0F172A] font-bold text-sm md:text-base font-['Space_Grotesk']">
                    100% Quality Certified Steel
                  </h4>
                  <p className="text-[#475569] text-xs font-['Space_Grotesk']">
                    Tested for extreme durability, seismic resilience & safety standards.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
