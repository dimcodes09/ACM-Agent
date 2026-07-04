"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { SCHEDULE } from "@/data/event";

interface DayBlock {
  label: string;
  date: string;
  heading: string;
  items: readonly { time: string; activity: string }[];
}

export default function ScheduleTimeline() {
  const days: DayBlock[] = [SCHEDULE.day1, SCHEDULE.day2];

  return (
    <div className="space-y-36">
      {days.map((day, idx) => (
        <DaySection key={day.label} day={day} isDay1={idx === 0} />
      ))}
    </div>
  );
}

function DaySection({ day, isDay1 }: { day: DayBlock; isDay1: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for this specific day's timeline progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.4", "end 0.6"],
  });

  const timelineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      ref={containerRef}
      className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20 relative"
    >
      {/* Left Column: Sticky Tall Image Card with Overlays */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] border border-border bg-surface aspect-[4/5] lg:h-[550px] w-full flex flex-col justify-between p-8 group shadow-2xl">
            {/* Background Image with dark overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={isDay1 ? "https://www.buildversehackathon.in/conclave-assets/schedule-day1.jpg" : "https://www.buildversehackathon.in/conclave-assets/schedule-day2.jpg"}
                alt={day.heading}
                className="w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)] via-[var(--color-base)]/50 to-transparent" />
            </div>

            {/* Overlays at the top */}
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h2 className="font-display text-6xl md:text-7xl font-bold tracking-tight text-text uppercase leading-none select-none">
                  {day.label}
                </h2>
                <p className="mt-2 font-display text-xl md:text-2xl tracking-wide text-text uppercase select-none opacity-80">
                  {day.date.toUpperCase()}
                </p>
              </div>
              <span className="font-mono-ui text-[10px] tracking-[0.2em] text-text-muted uppercase bg-base/60 border border-border rounded-full px-3 py-1 backdrop-blur-sm">
                {isDay1 ? "OIST Campus" : "Finale"}
              </span>
            </div>

            {/* Title at the bottom */}
            <div className="relative z-10">
              <span className="font-mono-ui text-[10px] tracking-[0.25em] text-signal uppercase font-semibold">
                // {isDay1 ? "Workshop Flow" : "Evaluation Flow"}
              </span>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight text-text uppercase">
                {day.heading}
              </h3>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Right Column: Scroll-Linked Timeline list */}
      <div className="relative pl-8 md:pl-12">
        {/* Timeline background track line */}
        <div className="absolute left-[8px] md:left-[16px] top-4 bottom-4 w-[1px] bg-[var(--color-border)]" />
        
        {/* Scroll-activated active progress line */}
        <motion.div
          className="absolute left-[8px] md:left-[16px] top-4 w-[1px] origin-top bg-[var(--color-signal)]"
          style={{ scaleY: timelineHeight, height: "96%" }}
        />

        <div className="space-y-10">
          {day.items.map((item, i) => (
            <TimelineItem
              key={item.time}
              time={item.time}
              activity={item.activity}
              index={i}
              dayProgress={scrollYProgress}
              totalItems={day.items.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  time,
  activity,
  index,
  dayProgress,
  totalItems,
}: {
  time: string;
  activity: string;
  index: number;
  dayProgress: MotionValue<number>;
  totalItems: number;
}) {
  const reduce = useReducedMotion();
  const triggerPoint = index / totalItems;
  const isPassed = useTransform(dayProgress, (p: number) => p >= triggerPoint);
  const [active, setActive] = useState(false);

  useTransform(isPassed, (p) => {
    if (p !== active) {
      setActive(p);
    }
  });

  // Helper to split long activity texts into Title and Description dynamically
  const { title, desc } = parseActivity(activity);

  return (
    <Reveal delay={index * 0.04} className="relative">
      {/* Timeline bullet node */}
      <div className="absolute -left-[32px] md:-left-[44px] top-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
        <div
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            active
              ? "bg-[var(--color-active)] scale-125 ring-4 ring-[var(--color-active)]/20"
              : "bg-[var(--color-border-hover)]"
          }`}
        />
      </div>

      {/* Glass card container */}
      <motion.div
        className={`group relative overflow-hidden rounded-[20px] border p-6 backdrop-blur-sm transition-all duration-500 ${
          active
            ? "border-border-hover bg-surface shadow-[0_4px_30px_rgba(129,140,248,0.02)]"
            : "border-border/50 bg-surface/10"
        }`}
        whileHover={
          reduce
            ? {}
            : {
                y: -3,
                borderColor: "var(--color-signal)",
              }
        }
        transition={{ duration: 0.3 }}
      >
        <span className={`font-mono-ui text-xs font-semibold ${
          active ? "text-signal" : "text-text-faint"
        }`}>
          {time}
        </span>
        
        {/* Formatted Title (using Anton font) */}
        <h4 className={`mt-2 font-display text-xl md:text-2xl font-bold tracking-tight uppercase leading-none transition-colors duration-300 ${
          active ? "text-text" : "text-text-muted"
        }`}>
          {title}
        </h4>

        {/* Optional Description (using Inter font) */}
        {desc && (
          <p className={`mt-2.5 text-sm font-light leading-relaxed transition-colors duration-300 ${
            active ? "text-text-muted" : "text-text-faint"
          }`}>
            {desc}
          </p>
        )}
        
        {/* Subtle coordinate marker */}
        <div className="absolute bottom-3 right-4 font-mono-ui text-[8px] text-text-faint opacity-0 group-hover:opacity-60 transition-opacity duration-300">
          SEC // {time.replace(/[:–]/g, "")}
        </div>
      </motion.div>
    </Reveal>
  );
}

/** Parses activity copy to extract titles and descriptions */
function parseActivity(activity: string) {
  let title = activity;
  let desc = "";

  if (activity.includes(": ")) {
    const parts = activity.split(": ");
    title = parts[0];
    desc = parts[1];
  } else if (activity.includes(" (")) {
    const parts = activity.split(" (");
    title = parts[0];
    desc = parts[1].replace(")", "");
  } else if (activity.includes(", Team ")) {
    const parts = activity.split(", Team ");
    title = parts[0];
    desc = "Team " + parts[1];
  } else if (activity.includes(" with ")) {
    const parts = activity.split(" with ");
    title = parts[0];
    desc = "with " + parts[1];
  } else if (activity.includes(" and ")) {
    const parts = activity.split(" and ");
    title = parts[0];
    desc = "and " + parts[1];
  }

  return { title, desc };
}
