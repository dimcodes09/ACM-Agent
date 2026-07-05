// components/Nav.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EVENT } from "@/data/event";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#learning", label: "Learn" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <motion.div
        animate={{
          width: scrolled ? "min(720px, 94vw)" : "100vw",
          marginTop: scrolled ? 12 : 0,
          borderRadius: scrolled ? 9999 : 0,
          paddingLeft: scrolled ? 22 : 28,
          paddingRight: scrolled ? 22 : 28,
          paddingTop: scrolled ? 11 : 20,
          paddingBottom: scrolled ? 11 : 20,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          backgroundColor: scrolled ? "rgba(14,16,21,0.9)" : "rgba(0,0,0,0)",
          boxShadow: scrolled
            ? "0 8px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)"
            : "0 0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
        className="flex max-w-[100vw] items-center justify-between"
      >
        {/* Logo + name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img src="/acm-logo.png" alt="ACM" className="h-8 w-8 object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight text-text whitespace-nowrap">
              {EVENT.name}
            </span>
            <span className="hidden sm:block font-mono-ui text-[9px] font-medium uppercase tracking-[0.18em] text-white/55 whitespace-nowrap mt-1">
              {EVENT.organizer}
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-9 font-mono-ui text-[13px] font-medium tracking-wide text-white/75 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-text">
              {l.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Desktop register */}
        <Link
          href="/register"
          className="hidden md:inline-block rounded-full bg-[var(--color-text)] px-5 py-2.5 text-[13px] font-semibold text-[var(--color-base)] transition-transform hover:scale-105"
        >
          Register
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[76px] z-50 flex flex-col gap-5 rounded-2xl border border-border bg-[#0e1015] px-6 py-7 shadow-[0_20px_40px_rgba(0,0,0,0.5)] md:hidden"
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono-ui text-sm uppercase tracking-wide text-white/75 hover:text-text"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="w-full rounded-full bg-[var(--color-text)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--color-base)]"
            >
              Register
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}