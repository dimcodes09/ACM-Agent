"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type BootLine = {
  cmd: string;
  result: string;
};

const BOOT_SEQUENCE: BootLine[] = [
  { cmd: "npx oist-acm@2026 init", result: "OPENING CAMPUS GATEWAY..." },
  { cmd: "scan --agentic-architectures", result: "PLANNING, MEMORY, RAG, TOOL-CALLING READY" },
  { cmd: "sync --mentors --teams", result: "BUILDER ARENA ONLINE" },
  { cmd: "run buildathon --hours 30", result: "10 - 11 JULY BOOT COMPLETE" },
];

export default function AgentBootLoader({
  onDone,
}: {
  onDone: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [resultVisible, setResultVisible] = useState(false);
  const [doneLines, setDoneLines] = useState<BootLine[]>([]);
  const [exiting, setExiting] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      const t = setTimeout(() => onDone(), 100);
      return () => clearTimeout(t);
    }
  }, [reduceMotion, onDone]);

  useEffect(() => {
    if (reduceMotion) return;

    // Sequence end: hold at 100% briefly to let the user see complete state, then exit
    if (lineIndex >= BOOT_SEQUENCE.length) {
      if (!finishedRef.current) {
        finishedRef.current = true;
        const t = setTimeout(() => setExiting(true), 600);
        return () => clearTimeout(t);
      }
      return;
    }

    const currentLine = BOOT_SEQUENCE[lineIndex];

    // 1. Fast typing phase
    if (typed.length < currentLine.cmd.length) {
      const t = setTimeout(() => {
        setTyped(currentLine.cmd.slice(0, typed.length + 1));
      }, 10); // Sped up typing
      return () => clearTimeout(t);
    }

    // 2. Reveal result shortly after typing command
    if (!resultVisible) {
      const t = setTimeout(() => {
        setResultVisible(true);
      }, 100);
      return () => clearTimeout(t);
    }

    // 3. Pause briefly on result before initiating next command
    const t = setTimeout(() => {
      setDoneLines((prev) => [...prev, currentLine]);
      setTyped("");
      setResultVisible(false);
      setLineIndex((prev) => prev + 1);
    }, 350); // Sped up pause
    return () => clearTimeout(t);
  }, [typed, lineIndex, resultVisible, reduceMotion]);

  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(onDone, 300);
    return () => clearTimeout(t);
  }, [exiting, onDone]);

  useEffect(() => {
    if (reduceMotion) return;
    const skip = () => setExiting(true);
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("click", skip, { once: true });
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  // Calculate dynamic loading progress percentage
  let progress = 0;
  if (lineIndex >= BOOT_SEQUENCE.length) {
    progress = 100;
  } else {
    const currentLine = BOOT_SEQUENCE[lineIndex];
    const baseProgress = lineIndex * 25;
    const typingProgress = (typed.length / currentLine.cmd.length) * 15;
    const resultProgress = resultVisible ? 10 : 0;
    progress = Math.min(100, Math.round(baseProgress + typingProgress + resultProgress));
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08090c] px-6 select-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: exiting ? "none" : "auto" }}
      aria-hidden={exiting}
    >
      {/* Background ambient theme-matched blue glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-signal/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-active/5 blur-[130px]" />

      <div className="w-full max-w-3xl flex flex-col items-center gap-6">
        {/* Terminal Window Container */}
        <div className="w-full rounded-2xl border border-white/10 bg-[#0c0e12]/80 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden font-mono-ui">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0e1015]/90">
            {/* Window dot controls */}
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            {/* Header path */}
            <div className="text-faint-custom-40 text-[10px] tracking-wider uppercase font-semibold">
              ROOT@AGENTS-OF-CHANGE-26: ~/OIST-ACM
            </div>
            <div className="w-16" /> {/* Spacer to balance dots */}
          </div>

          {/* Body */}
          <div className="p-8 md:p-12 flex flex-col justify-between gap-10 min-h-[380px]">
            {/* Top Brand Info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-white/5 pb-8">
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-none drop-shadow-[0_0_20px_rgba(96,165,250,0.35)]">
                  AGENTS OF<br />CHANGE
                </h1>
              </div>
              <div className="flex flex-col sm:items-end gap-3.5">
                <span className="text-[9px] tracking-[0.25em] text-faint-custom-40 uppercase font-semibold">
                  ACM EVENT SYSTEM BOOT
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <img src="/acm-logo.png" alt="ACM Logo" className="h-7 w-auto object-contain brightness-110" />
                  <div className="h-5 w-px bg-white/15" />
                  {/* Circular badge for OIST logo to handle non-transparent image edges cleanly */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1 shadow-inner">
                    <img src="/oist-logo.png" alt="OIST Logo" className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Logging Content */}
            <div className="flex-1 flex flex-col justify-start gap-5 min-h-[140px] text-sm">
              {/* Display completed lines */}
              {doneLines.map((line, i) => (
                <div key={i} className="space-y-1.5 animate-fade-in">
                  <div className="flex items-center gap-2.5">
                    <span className="text-active font-semibold select-none">agents-of-change $</span>
                    <span className="text-white font-medium">{line.cmd}</span>
                  </div>
                  <div className="text-xs text-white/45 pl-6 tracking-wide uppercase font-semibold">
                    {line.result}
                  </div>
                </div>
              ))}

              {/* Active typing line */}
              {lineIndex < BOOT_SEQUENCE.length && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-active font-semibold select-none">agents-of-change $</span>
                    <span className="text-white font-medium">{typed}</span>
                    <span className="inline-block w-1.5 h-4 bg-signal animate-pulse" />
                  </div>
                  {resultVisible && (
                    <div className="text-xs text-white/45 pl-6 tracking-wide uppercase font-semibold animate-fade-in">
                      {BOOT_SEQUENCE[lineIndex].result}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Progress Area */}
            <div className="border-t border-white/5 pt-8">
              <div className="h-2 w-full bg-white/5 overflow-hidden rounded-full p-[1px] border border-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-signal to-active"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </div>
              <div className="mt-4 flex justify-between items-center text-[10px] tracking-widest text-faint-custom-40 uppercase">
                <span className="font-semibold">BOOT PROGRESS</span>
                <span className="font-semibold text-white/60">
                  {progress === 100 ? "READY TO BUILD 100%" : `BOOTING RUNTIME ${progress}%`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info below terminal */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] tracking-[0.2em] text-faint-custom-30 uppercase font-mono-ui">
          <span>OIST ACM-W STUDENT CHAPTER X AGENTS OF CHANGE 2026</span>
          <span className="opacity-75">Press any key or click anywhere to skip</span>
        </div>
      </div>
    </motion.div>
  );
}
