"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EVENT } from "@/data/event";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#learning", label: "Learn" },
  { href: "/schedule", label: "Schedule" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-colors duration-300 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--color-signal)]" />
          {EVENT.name}
        </Link>

        <nav className="hidden items-center gap-7 font-mono-ui text-xs tracking-wide text-text-muted md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-text"
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <Link
          href="/register"
          className="rounded-full bg-[var(--color-text)] px-4 py-2 text-xs font-medium text-[var(--color-base)] transition-transform hover:scale-105"
        >
          Register
        </Link>
      </div>
    </motion.header>
  );
}
