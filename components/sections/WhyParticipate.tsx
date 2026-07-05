"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { WHY_PARTICIPATE } from "@/data/event";

// Curated photorealistic images matching the 5 cards
const IMAGES = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop", // national visibility / stage showcase
  "/developer_setup.png", // product-first / coding IDE
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", // mentor access / feedback session
  "/workshop_collaboration.png", // startup pathways / whiteboard session
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop", // community / network group
];

export default function WhyParticipate() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36 bg-gradient-to-b from-[#08090c] to-[#0e1015] border-t border-border/30">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
            WHAT&apos;S IN IT FOR YOU
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-text uppercase leading-none">
            WHY PARTICIPATE?
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-muted-custom font-light max-w-2xl mx-auto">
            Build, validate, present, and connect inside one of Bhopal&apos;s flagship national-level innovation platforms
          </p>
        </Reveal>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {WHY_PARTICIPATE.map((benefit, i) => {
            const image = IMAGES[i % IMAGES.length];

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden border border-border bg-surface h-[460px] md:h-[480px] transition-all duration-300 hover:border-border-hover hover:shadow-2xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={image}
                    alt={benefit.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/75 to-[#08090c]/20 z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a3a]/40 via-transparent to-transparent mix-blend-multiply z-10" />

                {/* Text Content at the Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 space-y-3">
                  <h3 className="font-display text-2xl font-black text-white uppercase leading-[1.1] tracking-tight group-hover:text-signal transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-custom font-light transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Fine technical border overlay */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.03] rounded-2xl pointer-events-none z-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}