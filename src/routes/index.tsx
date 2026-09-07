import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { eventYears, registerUrl } from "@/lib/events";
import { TeamSection } from "@/components/team-section";
import leadspace from "@/assets/qiskit-fall-fest-leadspace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Qiskit Fall Fest OAU | Quantum for Young Minds" },
    { name: "description", content: "Explore Qiskit Fall Fest at OAU: our 2024–2026 journey bringing practical quantum computing to young Nigerians." },
    { property: "og:title", content: "Qiskit Fall Fest OAU" },
    { property: "og:description", content: "Three editions. One growing quantum computing community in Nigeria." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <section className="home-hero">
        <img src={leadspace} alt="Illustrated quantum scientists and the number 100" className="home-hero-art" />
        <div className="site-container relative z-10 flex min-h-[calc(100svh-4.5rem)] flex-col justify-between py-12 sm:py-16">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold"><span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-primary" />27–28 November 2026</span><span className="inline-flex items-center gap-2"><MapPin className="size-4 text-primary" />Obafemi Awolowo University</span></div>
          <div className="max-w-4xl py-16"><p className="eyebrow text-primary">2026 IBM Qiskit Fall Fest Plus · OAU</p><h1 className="hero-title mt-5">Quantum computing for <span className="text-primary">young Nigerian minds.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Two focused programmes. Five secondary schools. An open university community. One practical invitation to help shape Africa’s quantum future.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><a href={registerUrl} target="_blank" rel="noreferrer">Register now <ArrowUpRight /></a></Button><Button asChild size="lg" variant="outline"><Link to="/2026">Explore 2026 <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/partnership">Partnership opportunities</Link></Button></div></div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">An annual learning programme hosted at OAU, growing from a student challenge into a wider platform for access, research culture, and collaboration.</p>
        </div>
      </section>

      <section className="section-pad bg-ink text-paper"><div className="site-container"><SectionHeading eyebrow="Our trajectory" detail="Each edition has its own character, while every year advances the same mission: make quantum computing tangible and reachable.">Three years of turning curiosity into capability.</SectionHeading><div className="mt-16 grid border-y border-paper/20 md:grid-cols-3">{eventYears.map((event, index) => <Link key={event.year} to={event.href} className="year-card group"><span className="font-mono text-xs text-signal">0{index + 1} / {event.status}</span><span className="mt-10 font-display text-6xl font-semibold">{event.year}</span><span className="mt-6 text-xl font-semibold">{event.title}</span><span className="mt-3 text-sm leading-6 text-paper/65">{event.summary}</span><ArrowRight className="mt-8 transition-transform group-hover:translate-x-2" /></Link>)}</div></div></section>

      <section className="section-pad"><div className="site-container"><SectionHeading eyebrow="Why this matters" detail="Exposure becomes confidence. Confidence becomes participation. Participation is how new research communities begin.">Africa should help define the quantum era—not only observe it.</SectionHeading><div className="mt-16 grid gap-px bg-border md:grid-cols-3"><article className="impact-block"><span className="metric">05</span><h3>Schools invited</h3><p>A deliberate mix of public, private, mixed, and all-female institutions in Ile-Ife.</p></article><article className="impact-block"><span className="metric">02</span><h3>Learning pathways</h3><p>Age-appropriate experiences for secondary school and university students.</p></article><article className="impact-block"><span className="metric">01</span><h3>Shared ambition</h3><p>Developing quantum awareness, technical confidence, and a research culture in Nigeria.</p></article></div></div></section>

      <TeamSection />

      <section className="partnership-band"><div className="site-container grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow">Partnership</p><h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold sm:text-6xl">Help make first encounters with quantum computing count.</h2></div><Button asChild size="lg" variant="secondary"><Link to="/partnership">Build with us <ArrowRight /></Link></Button></div></section>
    </>
  );
}
