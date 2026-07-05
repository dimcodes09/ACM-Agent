import Link from "next/link";
import { EVENT } from "@/data/event";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#learning", label: "Learning Outcomes" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="h-2 w-2 rounded-full bg-[var(--color-signal)]" />
            {EVENT.name}
          </p>
          <p className="mt-2 text-sm text-muted-custom">
            {EVENT.organizer}
          </p>
        </div>

        <div>
          <p className="font-mono-ui text-xs uppercase tracking-wider text-faint-custom">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-sm text-muted-custom transition-colors hover:text-text"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-ui text-xs uppercase tracking-wider text-faint-custom">
            Event
          </p>
          <p className="mt-4 text-sm text-muted-custom">
            {EVENT.dates}
          </p>
          <p className="mt-1 text-sm text-muted-custom">
            {EVENT.format}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-border pt-6 text-xs text-faint-custom">
        © {new Date().getFullYear()} {EVENT.organizer}. All rights reserved.
      </div>
    </footer>
  );
}
