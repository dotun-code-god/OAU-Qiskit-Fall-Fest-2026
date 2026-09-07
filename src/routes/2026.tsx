import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, Laptop, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YearSwitcher } from "@/components/year-switcher";
import { TeamSection } from "@/components/team-section";
import { hackathonTracks, hackathonWeeks, registerUrl, schools2026 } from "@/lib/events";
import heroArt from "@/assets/qiskit-fall-fest-2026-hero.jpg";

export const Route = createFileRoute("/2026")({ head: () => ({ meta: [
  { title: "Qiskit Fall Fest OAU 2026 | Young Nigerian Minds" }, { name: "description", content: "See the November 2026 Qiskit Fall Fest Plus at OAU: a four-week virtual hackathon plus programmes for secondary and university students." },
  { property: "og:title", content: "Qiskit Fall Fest OAU 2026" }, { property: "og:description", content: "A four-week virtual hackathon leading into two days of practical quantum computing for young Nigerian minds." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Page });

const schoolFlow = ["Opening and welcome", "Introductory session with the IBM speaker", "Break, games, and guest talk", "Hands-on quantum activity", "Closing ceremony"];
const universityFlow = ["Opening and keynote — “Beyond limits: pushing past benchmarks in quantum computing”", "Panel conversation with three speakers", "Workshops and challenges with prizes", "Hackathon awards", "Closing ceremony"];

function Page() {
  return (
    <div className="edition-2026">
      <section className="site-container py-8">
        <YearSwitcher current="2026" />
        <div className="hero-2026">
          <div className="hero-art" aria-hidden="true"><img src={heroArt} alt="Qiskit Fall Fest 2026 badge with illustrated hummingbirds" /></div>
          <div className="relative z-10">
            <p className="eyebrow text-primary">Upcoming · Hackathon from 21 September · Fall Fest 27–28 November</p>
            <h1>Quantum for<br /><span>young Nigerian minds.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">A four-week virtual training and hackathon campaign, leading into two days on campus designed to make quantum computing visible, practical, and worth pursuing.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href={registerUrl} target="_blank" rel="noreferrer">Register now <ArrowUpRight /></a></Button>
              <Button asChild size="lg" variant="outline"><Link to="/partnership">Support the programme <ArrowRight /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-accent">
        <div className="site-container">
          <p className="eyebrow text-primary">Campaign · Begins 21 September · Fully virtual</p>
          <div className="mt-5 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <h2 className="font-display text-5xl font-semibold leading-tight">Four weeks of training and building before Fall Fest.</h2>
            <p className="leading-7 text-muted-foreground">Applicants are screened for programming experience. Everyone trains together in week one, chooses a track in week two, and builds through the hackathon until Fall Fest.</p>
          </div>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {hackathonWeeks.map(([week, title, detail]) => (
              <article key={week} className="impact-block">
                <span className="metric">{week}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <p className="eyebrow text-primary">Three categories</p>
            <div className="mt-6">
              {hackathonTracks.map((track, i) => (
                <div className="track-row" key={track.name}>
                  <span>Track 0{i + 1}</span>
                  <div><strong className="font-display text-2xl font-semibold">{track.name}</strong><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">{track.detail}</p></div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">Every track is measured against defined benchmarks, and winners are awarded on the second day of Fall Fest.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-paper">
        <div className="site-container">
          <p className="eyebrow text-signal">Two audiences · one mission</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="programme-card">
              <div className="flex items-start justify-between"><span className="programme-number">01</span><Users /></div>
              <p className="eyebrow mt-12 text-signal">Secondary students</p>
              <h2>Friday, 27 November</h2>
              <div className="programme-facts"><span><MapPin />Onsite</span><span><CalendarDays />10 AM–2 PM</span><span><Users />120–130 expected</span></div>
              <ol>{schoolFlow.map((x, i) => <li key={x}><span>0{i + 1}</span>{x}</li>)}</ol>
            </article>
            <article className="programme-card programme-card-light">
              <div className="flex items-start justify-between"><span className="programme-number">02</span><Laptop /></div>
              <p className="eyebrow mt-12 text-primary">University students</p>
              <h2>Saturday, 28 November</h2>
              <div className="programme-facts"><span><Laptop />Hybrid</span><span><CalendarDays />10 AM–4 PM</span><span><Users />60 onsite + online</span></div>
              <ol>{universityFlow.map((x, i) => <li key={x}><span>0{i + 1}</span>{x}</li>)}</ol>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-primary">Schools invited</p>
            <h2 className="section-title mt-4">Access is designed into the room.</h2>
            <p className="mt-6 leading-7 text-muted-foreground">Twenty students and two teachers are invited from each school, bringing together public, private, mixed, and all-female institutions.</p>
          </div>
          <div className="school-list">{schools2026.map((school, i) => <div key={school}><span>0{i + 1}</span><strong>{school}</strong></div>)}</div>
        </div>
      </section>

      <TeamSection />

      <section className="partnership-band">
        <div className="site-container grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow">Registration is open</p><h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold sm:text-6xl">One form for secondary and university participants.</h2></div>
          <Button asChild size="lg" variant="secondary"><a href={registerUrl} target="_blank" rel="noreferrer">Register now <ArrowUpRight /></a></Button>
        </div>
      </section>
    </div>
  );
}
