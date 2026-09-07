import { useState } from "react";
import { team, type TeamMember } from "@/lib/events";

function initials(name: string) {
  return name
    .replace(/^Dr\s+/i, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  // Until the photo file lands in public/team/, the monogram stands in for it.
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <article className="team-card">
      <div className="team-photo">
        {hasPhoto ? (
          <img src={member.photo} alt={member.name} loading="lazy" onError={() => setHasPhoto(false)} />
        ) : (
          <span className="team-monogram" aria-hidden="true">{initials(member.name)}</span>
        )}
      </div>
      <div className="team-meta">
        <span>0{index + 1}</span>
        <strong>{member.name}</strong>
        <p>{member.role}</p>
      </div>
    </article>
  );
}

export function TeamSection() {
  return (
    <section className="section-pad bg-accent">
      <div className="site-container">
        <p className="eyebrow text-primary">The team</p>
        <div className="mt-5 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <h2 className="font-display text-5xl font-semibold leading-tight">The people organising Fall Fest at OAU.</h2>
          <p className="leading-7 text-muted-foreground">A student-led team with faculty support, working with IBM Quantum and GDG on Campus OAU. Full roles and photographs will be added shortly.</p>
        </div>
        <div className="mt-14 team-grid">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
