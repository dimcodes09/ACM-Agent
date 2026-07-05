import Link from "next/link";
import { EVENT } from "@/data/event";
import { Mail, MapPin } from "lucide-react";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#learning", label: "Learning Outcomes" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-20 bg-gradient-to-b from-[#08090c] to-[#040507] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-[10%] bottom-0 h-[350px] w-[350px] rounded-full bg-signal/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-[5%] top-1/4 h-[300px] w-[300px] rounded-full bg-active/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Middle: 4-Column Directory Grid */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
          {/* Column 1: Brand & Chapter details */}
          <div className="space-y-5 md:col-span-1">
            <div className="flex items-center -space-x-3 mb-2">
              <img src="/acm-student.png" alt="ACM Student Chapter Logo" className="h-12 w-auto object-contain relative z-10" />
              <img src="/acm-women.png" alt="ACM-W Student Chapter Logo" className="h-12 w-auto object-contain relative z-0" />
            </div>
            <div>
              <p className="font-display text-lg font-bold tracking-tight text-white uppercase leading-none">
                {EVENT.name}
              </p>
              <p className="mt-2 text-xs text-faint-custom leading-relaxed">
                {EVENT.organizer}
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-signal font-semibold">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-muted-custom transition-colors duration-200 hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Event Info */}
          <div>
            <p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-signal font-semibold">
              Event Details
            </p>
            <div className="mt-5 space-y-3.5 text-xs text-muted-custom font-light">
              <div>
                <span className="font-mono-ui text-[9px] text-faint-custom block uppercase tracking-wider mb-0.5">DATES</span>
                <span className="text-white font-medium text-sm">{EVENT.dates}</span>
              </div>
              <div>
                <span className="font-mono-ui text-[9px] text-faint-custom block uppercase tracking-wider mb-0.5">FORMAT</span>
                <span>{EVENT.format}</span>
              </div>
              <div className="flex items-start gap-1 mt-2 text-faint-custom">
                <MapPin className="h-3.5 w-3.5 text-signal shrink-0 mt-0.5" />
                <span className="leading-relaxed">Oriental Campus, Bhopal</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-4">
            <p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-signal font-semibold">
              Contact & Socials
            </p>
            <ul className="mt-5 space-y-3.5 text-xs text-muted-custom font-light">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-signal shrink-0" />
                <a href="mailto:acm@oist.bhopal.edu" className="hover:text-white transition-colors duration-200">
                  acm@oist.bhopal.edu
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/oist-acm-student-chapter/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-faint-custom hover:bg-white/[0.08] hover:text-white transition-colors duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/acmoist/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-faint-custom hover:bg-white/[0.08] hover:text-white transition-colors duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright and Credits */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-faint-custom">
          <p>© {new Date().getFullYear()} {EVENT.organizer}. All rights reserved.</p>
          <div className="font-mono-ui text-[10px] tracking-wider uppercase flex items-center gap-1.5">
            <span>DESIGNED BY</span>
            <a 
              href="https://www.linkedin.com/in/divyanshu-kubde-966740332/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-signal transition-colors duration-250 border-b border-white/20 hover:border-signal pb-0.5"
            >
              DIVYANSHU KUBDE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
