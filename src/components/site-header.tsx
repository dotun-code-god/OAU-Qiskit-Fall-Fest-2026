import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { registerUrl } from "@/lib/events";


const links = [
  ["2024", "/2024"],
  ["2025", "/2025"],
  ["2026", "/2026"],
  ["Partnership", "/partnership"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container flex h-18 items-center justify-between gap-5">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Qiskit Fall Fest OAU home">
          {/* <span className="brand-mark"><Atom aria-hidden="true" /></span> */}
          <img src="icon.svg" />
          <span className="font-display text-sm font-bold leading-tight sm:text-base">Qiskit Fall Fest <span className="text-primary">OAU</span></span>
        </Link>
        <nav className="scrollbar-none flex items-center gap-1 overflow-x-auto" aria-label="Main navigation">
          {links.map(([label, to]) => (
            <Link key={to} to={to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild>
            <a href={registerUrl} target="_blank" rel="noreferrer">Register <ArrowUpRight /></a>
          </Button>
          <Button asChild variant="outline" className="hidden lg:inline-flex">
            <Link to="/partnership">Partner with us</Link>
          </Button>
        </div>

      </div>
    </header>
  );
}