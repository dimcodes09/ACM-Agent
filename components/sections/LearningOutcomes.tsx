"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { LEARNING_OUTCOMES } from "@/data/event";

// Editorial photography for each outcome — treated as duotone, not decoration.
// Chosen to feel like documentation stills: whiteboards, terminals, working hands.
const OUTCOME_IMAGES: Record<string, string> = {
  architecture: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
  llms: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop",
  memory: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=900&auto=format&fit=crop",
  tools: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
  "multi-agent": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
  "team-dev": "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop",
  e2e: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop",
};

// Short editorial eyebrows — gives each card a distinct place in the "curriculum"
// rather than reading as seven instances of the same template.
const CATEGORY_LABEL: Record<string, string> = {
  architecture: "System Design",
  llms: "Model Layer",
  memory: "Memory Systems",
  tools: "Tool Use",
  "multi-agent": "Agent Collaboration",
  "team-dev": "Team Workflow",
  e2e: "Shipping",
};

// Small format tag — signals what kind of learning this is, adds texture/personality.
const SKILL_TAG: Record<string, string> = {
  architecture: "Core Concept",
  llms: "Foundations",
  memory: "Deep Dive",
  tools: "Hands-On",
  "multi-agent": "Advanced",
  "team-dev": "Practice",
  e2e: "Capstone",
};

export default function LearningOutcomes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const N = LEARNING_OUTCOMES.length;

  // Responsive layout width detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : N - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % N);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Autoplay loop
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2800);

    return () => clearInterval(timer);
  }, [activeIndex]);

  // Drag swiping threshold
  const dragThreshold = 40;
  const onDragEnd = (event: any, info: any) => {
    const swipe = info.offset.x;
    if (swipe < -dragThreshold) {
      handleNext();
    } else if (swipe > dragThreshold) {
      handlePrev();
    }
  };

  return (
    <section
      id="learning"
      className="relative overflow-hidden px-6 py-28 md:py-36 bg-gradient-to-b from-[#08090c] to-[#0e1015] w-full min-h-[920px] flex items-center justify-center border-t border-b border-border"
    >

      <div className="mx-auto max-w-6xl w-full relative z-10 flex flex-col items-center">
        <Reveal className="max-w-2xl text-center mb-16">
          <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
            LEARNING OUTCOMES
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
            What you&apos;ll walk away with.
          </h2>
          <p className="mt-4 text-sm text-muted-custom font-light max-w-md mx-auto">
            Seven skills, taught in sequence. Swipe or use the controls below.
          </p>
        </Reveal>

        {/* 3D Cylindrical Wheel Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[300px] sm:max-w-[340px] h-[500px] flex items-center justify-center"
          style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
        >
          {LEARNING_OUTCOMES.map((o, idx) => {
            const cardImg = OUTCOME_IMAGES[o.id] ?? OUTCOME_IMAGES.architecture;
            const eyebrow = CATEGORY_LABEL[o.id] ?? "Learning Outcome";
            const tag = SKILL_TAG[o.id] ?? "Core Concept";
            const indexLabel = String(idx + 1).padStart(2, "0");

            // Calculate relative offset on the circle
            let offset = idx - activeIndex;

            // Shortest-path circular wrap logic (looping)
            const halfN = N / 2;
            if (offset > halfN) {
              offset -= N;
            } else if (offset < -halfN) {
              offset += N;
            }

            // Math to place cards on a 3D cylinder
            const angleStep = 360 / N; // ~51.4 degrees
            const angle = offset * angleStep;
            const rad = (angle * Math.PI) / 180;

            const radius = isMobile ? 200 : 360; // Radius of the Y-cylinder
            const xVal = radius * Math.sin(rad);
            const zVal = radius * (Math.cos(rad) - 1);
            const rotateY = -angle; // Face outward from cylinder center

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2; // Show active + neighbors + far neighbors

            const zIndex = 10 - Math.abs(offset);

            // Opacity curve: active (1), neighbors (0.8), far neighbors (0.4)
            const opacity = isVisible
              ? offset === 0
                ? 1
                : Math.abs(offset) === 1
                ? 0.8
                : 0.4
              : 0;

            return (
              <motion.div
                key={o.id}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={onDragEnd}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  zIndex,
                  transformStyle: "preserve-3d",
                  pointerEvents: isActive ? "auto" : "none",
                  willChange: "transform, opacity",
                }}
                animate={{
                  x: xVal,
                  z: zVal,
                  rotateY,
                  scale: isActive ? 1 : 0.82,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 22,
                  mass: 0.9,
                }}
                whileHover={
                  isActive && !reduce
                    ? {
                        y: -6,
                        scale: 1.02,
                        boxShadow: "0 30px 70px -12px rgba(0,0,0,0.65)",
                      }
                    : {}
                }
                className={`select-none cursor-grab active:cursor-grabbing rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 ${
                  isActive
                    ? "border border-white/[0.08] bg-[var(--color-surface)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]"
                    : "border border-white/[0.04] bg-[var(--color-surface)]/70 blur-[1px]"
                }`}
              >
                {/* Photograph band — duotone treatment, tells the story rather than decorating it */}
                <div className="relative h-[46%] w-full flex-shrink-0 overflow-hidden">
                  <img
                    src={cardImg}
                    alt={eyebrow}
                    className="w-full h-full object-cover grayscale-0 contrast-[1.1] group-hover:grayscale transition-all duration-500 select-none pointer-events-none"
                    draggable="false"
                  />
                  {/* Signal-tinted duotone wash — ties every photo to the site's accent color */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a3a]/80 via-[#0b0e1c]/40 to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 bg-[#05070f]/35" />
                  {/* Fade into card body */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0b0e1c] to-transparent" />

                  {/* Skill tag, sits over the photo */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-white/85 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
                      {tag}
                    </span>
                  </div>
                </div>

                {/* Oversized ghost numeral — overlaps the photo/body seam, editorial "spec sheet" device */}
                <div className="relative px-6 -mt-2 pointer-events-none select-none">
                  <span
                    className="absolute -top-[0.62em] left-4 font-display font-black leading-none text-[92px] sm:text-[104px]"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1.5px rgba(255,255,255,0.14)",
                    }}
                  >
                    {indexLabel}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="relative z-10 flex flex-col flex-1 px-6 pt-8 pb-5">
                  <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-signal font-semibold">
                    {eyebrow}
                  </span>

                  <h3 className="mt-2 font-display text-xl sm:text-[22px] font-bold tracking-tight text-white uppercase leading-[1.1]">
                    {o.title}
                  </h3>

                  <p className="mt-3 text-[13px] sm:text-sm leading-relaxed text-faint-custom font-light line-clamp-3">
                    {o.description}
                  </p>

                  {/* Footer — index + subtle "explore" affordance, no boilerplate spec tags */}
                  <div className="mt-auto pt-4 border-t border-white/[0.07] flex items-center justify-between">
                    <span className="font-mono-ui text-[9px] text-faint-custom-30 tracking-[0.15em] uppercase">
                      {indexLabel} / {String(N).padStart(2, "0")} — CONF 2026
                    </span>
                    <ArrowUpRight
                      className={`h-3.5 w-3.5 transition-colors ${
                        isActive ? "text-signal" : "text-white/20"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Navigation UI */}
        <div className="mt-12 flex flex-col items-center gap-6">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous outcome"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 text-white/80" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next outcome"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 text-white/80" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex gap-2">
            {LEARNING_OUTCOMES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-6 bg-signal"
                    : "w-2 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}