"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { EVENT } from "@/data/event";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  // Controlled scroll parallax for a subtle, professional feel
  const yText = useTransform(scrollY, [0, 500], [0, 60]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center bg-gradient-to-b from-[#0e1015] to-[#08090c]"
    >
      {/* Handcrafted background environment: subtle dark grids and soft central graphite glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft, clean radial spotlight */}
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[110px]" />
        
        {/* Subtle, static technical grid sheet */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-text)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Clean, structural horizontal lines defining layout boundaries */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-[var(--color-border)]/50" />
      </div>

      <motion.div
        style={reduce ? {} : { y: yText, opacity: opacityText }}
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-4xl flex-col items-center z-10"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised/80 px-4 py-1.5 font-mono-ui text-[10px] tracking-wider text-text uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
          {EVENT.organizer.toUpperCase()} Presents
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-text uppercase leading-none max-w-5xl"
        >
          {EVENT.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-balance text-base text-text-muted sm:text-lg md:text-xl font-light leading-relaxed"
        >
          {EVENT.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono-ui text-xs tracking-widest text-text-muted uppercase border-t border-b border-border/40 py-3 px-6"
        >
          <span>{EVENT.dates}</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-text-faint)]" />
          <span>{EVENT.format}</span>
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <a
            href="#register"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-[var(--color-text)] px-8 py-4 font-semibold text-[var(--color-base)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            <span>Register Now</span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
