import { Link } from "@tanstack/react-router";
import { eventYears } from "@/lib/events";

export function YearSwitcher({ current }: { current: string }) {
  return (
    <nav className="year-switcher" aria-label="Choose an event year">
      <span className="eyebrow mr-auto">Editions</span>
      {eventYears.map((event) => (
        <Link key={event.year} to={event.href} className={event.year === current ? "year-pill year-pill-active" : "year-pill"}>
          {event.year}
        </Link>
      ))}
    </nav>
  );
}