"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const POINTS = [
  {
    label: "What it is",
    title: "Beyond a chatbot",
    body: "An agent doesn't just answer — it plans, reasons over multiple steps, uses tools, and remembers context to complete a goal on its own.",
  },
  {
    label: "Why now",
    title: "The shift is happening",
    body: "Software is moving from static apps to systems that reason and act. Every major AI lab is racing to build agent infrastructure right now.",
  },
  {
    label: "Why it matters to you",
    title: "The next core skill",
    body: "Understanding agent architecture — memory, tools, orchestration — is becoming as fundamental as understanding APIs was a decade ago.",
  },
  {
    label: "Why this bootcamp",
    title: "Learn by shipping",
    body: "Instead of only theory, you'll leave having actually built and shipped a working multi-agent system end to end.",
  },
];

export default function WhyAgenticAI() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36 bg-gradient-to-b from-[#0e1015] to-[#08090c]">
      {/* Subtle background environment */}
      <div className="pointer-events-none absolute right-[5%] top-1/3 h-[400px] w-[400px] rounded-full bg-signal/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-[10%] bottom-10 h-[300px] w-[300px] rounded-full bg-active/5 blur-[100px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1.3fr] lg:gap-24 items-start">
          
          {/* Left Column: Title and Image Card */}
          <div className="lg:sticky lg:top-24 space-y-12">
            <Reveal>
              <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
                02 — WHY AGENTIC AI
              </span>
              <h2 className="mt-4 font-display text-5xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
                Software that reasons,<br />not just responds.
              </h2>
            </Reveal>

            {/* Custom Premium Photo Card */}
            <Reveal>
              <div className="relative rounded-2xl border border-border bg-surface p-3 overflow-hidden shadow-2xl group">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                <div className="relative overflow-hidden rounded-xl aspect-[1.4/1] w-full bg-base">
                  <img
                    src="/why_agentic_ai.png"
                    alt="Engineers planning agent architectures"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-95 group-hover:scale-102 transition-all duration-700 ease-signature"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)]/30 to-transparent" />
                </div>
                <div className="mt-4 px-2 pb-1 flex justify-between items-center font-mono-ui text-[9px] tracking-wider text-faint-custom uppercase select-none">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-signal animate-pulse" />
                    Figure 02 // Core Reasoning Architecture
                  </span>
                  <span>SYS_REF_2026</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative List Rows */}
          <div className="lg:pt-20 space-y-0">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <WhyRow
                  index={i + 1}
                  label={p.label}
                  title={p.title}
                  body={p.body}
                />
              </Reveal>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

function WhyRow({
  index,
  label,
  title,
  body,
}: {
  index: number;
  label: string;
  title: string;
  body: string;
}) {
  const reduce = useReducedMotion();
  const indexStr = String(index).padStart(2, "0");

  return (
    <motion.div
      className="group relative flex flex-col md:flex-row gap-4 md:gap-8 border-t border-border/40 py-8 md:py-10 transition-all duration-300"
      whileHover={
        reduce
          ? {}
          : {
              x: 6,
            }
      }
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtle background highlight */}
      <div className="absolute inset-0 -mx-4 rounded-xl bg-surface/0 group-hover:bg-surface-raised/20 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />

      {/* Left part of row: Index and Eyebrow */}
      <div className="flex md:flex-col justify-between md:justify-start items-baseline md:items-start md:w-32 flex-shrink-0">
        <span className="font-mono-ui text-xs tracking-wider text-signal/70 group-hover:text-signal font-semibold transition-colors duration-300">
          {indexStr}.
        </span>
        <span className="font-mono-ui text-[9px] uppercase tracking-widest text-faint-custom mt-1 select-none">
          {label}
        </span>
      </div>

      {/* Right part of row: Title and Body */}
      <div className="flex-1 space-y-2 md:space-y-3">
        <h3 className="font-display text-xl font-bold tracking-tight text-text uppercase group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-custom group-hover:text-muted-custom font-light transition-colors duration-300">
          {body}
        </p>
      </div>

      {/* Accent arrow on hover */}
      <div className="hidden md:flex items-center justify-center w-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-signal/80">
        <span className="font-mono-ui text-sm">→</span>
      </div>
    </motion.div>
  );
}

