"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import { EVENT, OVERVIEW } from "@/data/event";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const reduce = useReducedMotion();

  // Scroll parallax for a clean, human editorial offset
  const yImage = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -35]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden px-6 py-28 md:py-36 bg-gradient-to-b from-[#08090c] to-[#0e1015]"
    >
      {/* Background visual restraint */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[350px] w-[350px] rounded-full bg-signal/5 blur-[90px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:items-center">
          
          {/* Left Column: Handcrafted Photo Card */}
          <motion.div
            style={reduce ? {} : { y: yImage }}
            className="relative rounded-2xl border border-border bg-surface p-2 overflow-hidden shadow-2xl group"
          >
            <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-full">
              <img
                src="/about_workshop.png"
                alt="AI Bootcamp Workshop Session"
                className="w-full h-full object-cover grayscale-0 opacity-95 group-hover:grayscale group-hover:opacity-80 group-hover:scale-101 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)]/20 to-transparent" />
            </div>
            <div className="mt-3 px-3 pb-2 flex justify-between items-center font-mono-ui text-[9px] tracking-wider text-text-faint uppercase">
              <span>Figure 01 // Interactive Coding Session</span>
              <span>BPL_2026</span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Stats */}
          <div>
            <Reveal>
              <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
                01 — ABOUT THE EVENT
              </span>
              <h2 className="mt-4 font-display text-5xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
                A workshop first.<br />
                A build second.
              </h2>
              <p className="mt-6 text-sm md:text-base leading-relaxed text-text-muted font-light max-w-lg">
                {OVERVIEW}
              </p>

              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-3">
                <Stat label="Dates" value={EVENT.dates} />
                <Stat label="Format" value={EVENT.format} />
                <Stat label="Organizer" value={EVENT.organizer} />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono-ui text-[10px] uppercase tracking-wider text-text-faint">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-text uppercase">
        {value}
      </p>
    </div>
  );
}
