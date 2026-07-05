"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

// Schedule — Day 1 is workshop only, Day 2 carries the full buildathon arc.
const AUTO_DURATION = 6000; // ms per day before auto-advancing

const DAYS = [
  {
    label: "Day 1",
    date: "10 July",
    tag: "Workshop",
    location: "OIST Campus",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    items: [
      {
        time: "10:00 – 11:00",
        title: "Welcome & Keynote",
        description: "Inauguration and an introduction to Agentic AI open the day.",
      },
      {
        time: "11:00 – 13:00",
        title: "Workshop: Building AI Agents",
        description: "Hands-on session on architecture, tool calling, memory and RAG.",
      },
      {
        time: "13:00 – 14:00",
        title: "Lunch",
        description: "Break before teams head into the buildathon tomorrow.",
      },
    ],
  },
  {
    label: "Day 2",
    date: "11 July",
    tag: "Buildathon",
    location: "OIST Campus",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    items: [
      {
        time: "09:00 – 09:30",
        title: "Briefing & Team Formation",
        description: "The Campus AI Assistant problem statement drops, and teams form around it.",
      },
      {
        time: "09:30 – 17:00",
        title: "Build Phase with Mentors",
        description: "Teams build their agent end-to-end, with mentors on hand throughout the day.",
      },
      {
        time: "17:00 – 18:00",
        title: "Evaluation & Live Demos",
        description: "Judges review every submission and shortlisted teams demo live.",
      },
      {
        time: "18:00 – 19:00",
        title: "Awards & Closing",
        description: "Winners are announced and the event wraps up.",
      },
    ],
  },
];

export default function Journey() {
  const [activeDay, setActiveDay] = useState(0);
  const [cycle, setCycle] = useState(0);
  const day = DAYS[activeDay];

  const goToDay = (idx: number) => {
    setActiveDay(idx);
    setCycle((c) => c + 1);
  };

  // Smart auto-advance — cycles days on its own, resets whenever the user picks one manually.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveDay((prev) => (prev + 1) % DAYS.length);
    }, AUTO_DURATION);
    return () => clearTimeout(timer);
  }, [activeDay, cycle]);

  return (
    <section
      id="journey"
      className="relative overflow-hidden px-6 py-28 md:py-36 bg-gradient-to-b from-[#0e1015] to-[#08090c] w-full border-t border-b border-border"
    >
      <div className="mx-auto max-w-5xl w-full relative z-10">
        <Reveal className="max-w-2xl text-center mb-14 mx-auto">
          <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
            04 — THE JOURNEY
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
            One continuous trace, start to finish.
          </h2>
        </Reveal>

        {/* Story-style auto-advancing day tabs */}
        <div className="flex items-start justify-center gap-4 sm:gap-8 mb-10">
          {DAYS.map((d, idx) => (
            <button
              key={d.label}
              onClick={() => goToDay(idx)}
              className="flex flex-col items-center gap-3 group"
            >
              <span
                className={`font-mono-ui text-xs uppercase tracking-[0.15em] font-semibold transition-colors ${
                  idx === activeDay ? "text-white" : "text-faint-custom-30 group-hover:text-white/60"
                }`}
              >
                {d.label} <span className="text-faint-custom-30">·</span> {d.tag}
              </span>
              <div className="w-24 sm:w-36 h-[3px] rounded-full bg-white/10 overflow-hidden">
                {idx === activeDay && (
                  <div
                    key={`${activeDay}-${cycle}`}
                    className="h-full bg-signal rounded-full"
                    style={{ animation: `journeyFill ${AUTO_DURATION}ms linear forwards` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Split panel */}
        <div className="rounded-[28px] border border-white/[0.08] bg-[var(--color-surface)] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <div className="grid md:grid-cols-[40%_60%]">
            {/* Photograph column */}
            <div className="relative h-[280px] md:h-auto min-h-[420px] overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={day.image}
                  src={day.image}
                  alt={`${day.label} — ${day.tag}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover grayscale-0 contrast-[1.1] group-hover:grayscale transition-all duration-700"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a3a]/70 via-[var(--color-surface)]/30 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-white/85 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
                  {day.tag}
                </span>
              </div>
            </div>

            {/* Schedule column */}
            <div className="relative p-8 md:p-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Header */}
                  <div className="relative mb-8">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none select-none absolute -top-8 -left-1 font-display font-black leading-none text-[110px] z-0"
                      style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.05)" }}
                    >
                      {String(activeDay + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10 flex items-baseline justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white uppercase leading-none">
                          {day.label}
                        </h3>
                        <p className="mt-1 font-mono-ui text-xs uppercase tracking-[0.15em] text-signal font-semibold">
                          {day.date}
                        </p>
                      </div>
                      <span className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-faint-custom-40">
                        {day.location}
                      </span>
                    </div>
                    <div className="relative z-10 mt-6 h-px w-full bg-white/[0.08]" />
                  </div>

                  {/* Schedule list with connecting spine */}
                  <div className="relative pl-6">
                    <div className="absolute left-[3px] top-2 bottom-2 w-px bg-white/[0.08]" />

                    <div className="flex flex-col gap-7">
                      {day.items.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          className="relative group"
                        >
                          <div className="absolute -left-6 top-1.5 h-[7px] w-[7px] rounded-full bg-white/25 group-hover:bg-signal transition-colors" />
                          <span className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-faint-custom-40">
                            {item.time}
                          </span>
                          <h4 className="mt-1 font-display text-lg sm:text-xl font-bold tracking-tight text-white uppercase leading-tight">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-[13px] sm:text-sm leading-relaxed text-faint-custom font-light max-w-md">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes journeyFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}