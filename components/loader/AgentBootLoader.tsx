"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type BootLine = {
  cmd: string;
  result: string;
};

const BOOT_SEQUENCE: BootLine[] = [
  { cmd: "agent init --event=agents-of-change", result: "runtime ready" },
  { cmd: "agent connect --memory rag-store", result: "memory linked" },
  { cmd: "agent sync --mode multi-agent", result: "agents coordinated" },
];

const TYPE_SPEED_MS = 4;
const LINE_PAUSE_MS = 40;

export default function AgentBootLoader({
  onDone,
}: {
  onDone: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [doneLines, setDoneLines] = useState<BootLine[]>([]);
  const [exiting, setExiting] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      // Skip straight to hero for reduced-motion users.
      const t = setTimeout(() => onDone(), 200);
      return () => clearTimeout(t);
    }
  }, [reduceMotion, onDone]);

  useEffect(() => {
    if (reduceMotion) return;
    if (lineIndex >= BOOT_SEQUENCE.length) {
      if (!finishedRef.current) {
        finishedRef.current = true;
        const t = setTimeout(() => setExiting(true), 150);
        return () => clearTimeout(t);
      }
      return;
    }

    const current = BOOT_SEQUENCE[lineIndex].cmd;
    if (typed.length < current.length) {
      const t = setTimeout(
        () => setTyped(current.slice(0, typed.length + 1)),
        TYPE_SPEED_MS
      );
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setDoneLines((prev) => [...prev, BOOT_SEQUENCE[lineIndex]]);
      setTyped("");
      setLineIndex((i) => i + 1);
    }, LINE_PAUSE_MS);
    return () => clearTimeout(t);
  }, [typed, lineIndex, reduceMotion]);

  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(onDone, 350);
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

  const progress = Math.min(
    100,
    Math.round(
      ((lineIndex + (typed.length > 0 ? 0.5 : 0)) / BOOT_SEQUENCE.length) * 100
    )
  );

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-base px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: exiting ? "none" : "auto" }}
      aria-hidden={exiting}
    >
      <div className="w-full max-w-lg font-mono-ui text-sm">
        <div className="flex items-center gap-2 mb-4 opacity-60">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]" />
          <span className="text-text-muted text-xs tracking-wide">
            agents-of-change · boot
          </span>
        </div>

        <div className="space-y-1.5 min-h-[130px]">
          {doneLines.map((line, i) => (
            <div key={i} className="flex flex-wrap gap-x-2">
              <span className="text-signal">$</span>
              <span className="text-text">{line.cmd}</span>
              <span className="text-active">
                — {line.result}
              </span>
            </div>
          ))}
          {lineIndex < BOOT_SEQUENCE.length && (
            <div className="flex gap-2">
              <span className="text-signal">$</span>
              <span className="text-text">{typed}</span>
              <span className="inline-block w-[7px] h-[15px] bg-[var(--color-signal)] animate-pulse" />
            </div>
          )}
        </div>

        <div className="mt-6">
          <div className="h-[2px] w-full bg-[var(--color-border)] overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-[var(--color-signal)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[10px] tracking-wider text-text-faint uppercase">
            <span>Booting reasoning runtime</span>
            <span>{progress}%</span>
          </div>
        </div>
        <p className="mt-8 text-center text-[10px] tracking-wider text-text-faint opacity-60">
          click anywhere to skip
        </p>
      </div>
    </motion.div>
  );
}
