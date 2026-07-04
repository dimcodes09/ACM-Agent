"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { AgentArchitectureDiagram } from "@/components/ui/AbstractVisuals";

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
    <section className="relative overflow-hidden px-6 py-28 md:py-36 bg-[#0e1015]">
      {/* Subtle background environment */}
      <div className="pointer-events-none absolute right-[10%] top-1/4 h-[300px] w-[300px] rounded-full bg-signal/5 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
            02 — WHY AGENTIC AI
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
            Software that reasons, not just responds.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          {/* Left Column: Authentic Technical Block Diagram */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <AgentArchitectureDiagram />
            </Reveal>
          </div>

          {/* Right Column: Clean cards with high-contrast text */}
          <div className="order-1 grid gap-5 sm:grid-cols-2 lg:order-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <WhyCard label={p.label} title={p.title} body={p.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCard({ label, title, body }: { label: string; title: string; body: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group relative h-full rounded-[var(--radius-card)] border border-border bg-surface-raised/35 p-8 overflow-hidden transition-all duration-300 hover:border-border-hover hover:shadow-lg"
      whileHover={
        reduce
          ? {}
          : {
              y: -2,
            }
      }
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10 space-y-3">
        <span className="font-mono-ui text-[10px] uppercase tracking-widest text-signal font-semibold">
          {label}
        </span>
        <h3 className="font-display text-lg font-bold tracking-tight text-text uppercase">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted font-light">
          {body}
        </p>
      </div>
    </motion.div>
  );
}
