"use client";

import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Users, Compass, Trophy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { EVENT } from "@/data/event";
import { AnimatedBlueprintGrid } from "@/components/ui/SubtleBackgrounds";

const STRUCTURE_ITEMS = [
  {
    icon: BookOpen,
    title: "1-DAY IMMERSIVE WORKSHOP",
    desc: "Understand Agentic AI workflows, LLM tool calling, RAG memory, and multi-agent coordination from industry mentors.",
  },
  {
    icon: Users,
    title: "TEAM BUILDATHON",
    desc: "Form teams and build a functional 'Campus AI Assistant' end-to-end to solve student problems.",
  },
  {
    icon: Compass,
    title: "MENTOR INTERACTION",
    desc: "Get hands-on guidance and tech stack architecture feedback from industry experts during development sessions.",
  },
  {
    icon: Trophy,
    title: "EVALUATION & SHOWCASE",
    desc: "Present your live demo and final project submission (GitHub repository + video) to the expert jury panel.",
  },
];

export default function EventStructure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Scroll linked line drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden px-6 py-28 md:py-36 bg-gradient-to-b from-[#0e1015] to-[#08090c] border-t border-b border-border"
    >
      {/* Subtle background environment */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[110px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:items-start">
          
          {/* Left Column: Intro */}
          <div className="lg:sticky lg:top-36 lg:self-start space-y-5">
            <Reveal>
              <span className="font-mono-ui text-xs tracking-[0.25em] text-signal uppercase font-semibold">
                EVENT STRUCTURE
              </span>
              <h2 className="mt-4 font-display text-5xl md:text-7xl font-black tracking-tight text-text uppercase leading-none">
                WHAT TEAMS<br />EXPERIENCE
              </h2>
              <p className="mt-5 text-base text-muted-custom font-light leading-relaxed max-w-md">
                A serious builder environment designed for real product development, deep technical review, and long-term innovation outcomes.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Timeline Points */}
          <div className="relative pl-8 md:pl-12">
            {/* Visual dividing vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[var(--color-border)]/40" />
            <motion.div
              className="absolute left-0 top-2 w-[2px] origin-top bg-[var(--color-signal)]"
              style={{ scaleY, height: "96%" }}
            />

            <div className="space-y-12">
              {STRUCTURE_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={idx * 0.05}>
                    <div className="flex gap-5 md:gap-8 items-start group">
                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-signal" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2.5">
                        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-text uppercase leading-none group-hover:text-white transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-custom font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
