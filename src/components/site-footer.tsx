import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-paper">
      <div className="site-container grid gap-12 py-14 md:grid-cols-[1.4fr_1fr]">
        <div><p className="eyebrow text-signal">OAU · Ile-Ife, Nigeria</p><p className="mt-4 max-w-xl font-display text-3xl font-semibold">Building a generation that can understand, use, and shape quantum technology.</p></div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <Link to="/2024" className="footer-link">2024 archive</Link>
          <Link to="/2025" className="footer-link">2025 archive</Link>
          <Link to="/2026" className="footer-link">2026 programme</Link>
          <Link to="/partnership" className="footer-link">Partnership <ArrowUpRight className="inline size-4" /></Link>
        </div>
      </div>
      <div className="site-container footer-partners">
        <p className="eyebrow text-signal">Hosted with</p>
        <ul className="footer-logos">
          <li>
            <img
              src="/OAU-logo.png"
              alt="Obafemi Awolowo University crest — host institution, Ile-Ife, Nigeria"
              title="Obafemi Awolowo University — host institution"
            />
          </li>
          <li>
            <img
              src="/qiskit_white.png"
              alt="Qiskit logo — IBM Quantum's open-source SDK and Fall Fest programme"
              title="Qiskit — IBM Quantum"
            />
          </li>
          <li>
            <img
              src="/icon.svg"
              alt="Google Developer Groups on Campus OAU logo — community partner"
              title="GDG on Campus OAU — community partner"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}