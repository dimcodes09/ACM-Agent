"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
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

// Placeholder figures — swap for your real projected numbers before shipping.
const STATS = [
  { value: 2, suffix: "", label: "Days of Programming" },
  { value: 7, suffix: "+", label: "Core Learning Outcomes" },
  { value: 50, suffix: "+", label: "Teams Expected" },
  { value: 10, suffix: "+", label: "Industry Mentors" },
];

// Real photography, reused from elsewhere on the site for visual consistency.
const TRUST_PHOTOS = [
  "/campus.jpg",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&auto=format&fit=crop",
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const duration = 1600;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  // Controlled scroll parallax for a subtle, professional feel
  const yText = useTransform(scrollY, [0, 500], [0, 60]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center bg-gradient-to-b from-[#0e1015] to-[#08090c]"
    >
      {/* Handcrafted background environment: subtle dark grids, soft glow, and editorial wordmark */}
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

        {/* Editorial ghost wordmark — sits in the open band above the headline, not underneath it,
            so it's actually visible instead of hidden behind solid white type. */}
        <div className="absolute top-[9%] sm:top-[10%] inset-x-0 flex justify-center select-none">
          <span
            className="font-display font-black leading-none tracking-tight whitespace-nowrap text-[clamp(4.5rem,16vw,13rem)]"
            style={{ color: "transparent", WebkitTextStroke: "1.4px rgba(255,255,255,0.08)" }}
          >
            ACM
          </span>
        </div>

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
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-raised/80 px-4 py-1.5 font-mono-ui text-[10px] tracking-wider text-text uppercase"
        >
          <div className="flex items-center -space-x-1.5 flex-shrink-0">
            <img src="/acm-student.png" alt="ACM Student Chapter Logo" className="h-6 w-auto object-contain relative z-10" />
            <img src="/acm-women.png" alt="ACM-W Student Chapter Logo" className="h-6 w-auto object-contain relative z-0" />
          </div>
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
          className="mt-6 max-w-2xl text-balance text-base text-muted-custom sm:text-lg md:text-xl font-light leading-relaxed"
        >
          {EVENT.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono-ui text-xs tracking-widest text-muted-custom uppercase border-t border-b border-border/40 py-3 px-6"
        >
          <span>{EVENT.dates}</span>
          <span className="h-1 w-1 rounded-full bg-white/55" />
          <span>{EVENT.format}</span>
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <a
            href="https://unstop.com/college-fests/agents-of-change-2026-acm-student-chapter-oist-483016"
            target="_blank"
            rel="noopener noreferrer"
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

      {/* Impact in Numbers — independent of hero fade, counts up when scrolled into view */}
      <div className="relative z-10 mt-20 md:mt-28 w-full max-w-3xl mx-auto border-t border-border/40 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <div className="font-display text-4xl sm:text-5xl font-black text-text tracking-tight tabular-nums">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-mono-ui text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-muted-custom max-w-[10ch] sm:max-w-none mx-auto">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photographic trust strip — a human, authentic touch grounding the event in real people and place */}
      <div className="relative z-10 mt-12 flex items-center gap-4 rounded-full border border-border bg-surface-raised/60 backdrop-blur-sm pl-2 pr-5 py-2">
        <div className="flex -space-x-3">
          {TRUST_PHOTOS.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-9 w-9 rounded-full object-cover border-2 border-[#0e1015]"
              style={{ zIndex: TRUST_PHOTOS.length - i }}
            />
          ))}
        </div>
        <span className="font-mono-ui text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-muted-custom text-left">
          Hosted at OIST Campus, Bhopal — by the ACM and ACM-W Student Chapter
        </span>
      </div>
    </section>
  );
}