import { Award, ExternalLink } from 'lucide-react';
import { certificates, journey, journeySection, ui } from '../data/content.js';
import { ExtLink, Reveal, RevealItem, SectionHeader } from './ui.jsx';

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="section border-y border-border bg-surface/60">
      <Reveal className="container-page">
        <SectionHeader id="journey-title" title={journeySection.title} subtitle={journeySection.subtitle} />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Timeline, newest first */}
          <ol className="relative ml-1.5 border-l-2 border-border">
            {journey.map((entry, i) => (
              <RevealItem as="li" key={entry.title} className="relative pb-9 pl-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-[3px] border-bg ${
                    i === 0 ? 'bg-primary' : 'bg-primary/40'
                  }`}
                />
                {entry.when && <p className="font-mono text-[13px] text-muted">{entry.when}</p>}
                <h3 className="mt-1 text-lg font-semibold">{entry.title}</h3>
                <p className="text-[15px] font-medium text-primary">{entry.organiser}</p>
                <p className="mt-1.5 max-w-prose text-muted">{entry.line}</p>
              </RevealItem>
            ))}
          </ol>

          {/* Certificates */}
          <div>
            <RevealItem as="h3" className="mb-5 text-lg font-semibold">
              {journeySection.certificatesTitle}
            </RevealItem>
            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {certificates.map((cert) => (
                <RevealItem as="li" key={cert.title} className="card flex gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Award size={20} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[15px] font-semibold leading-snug">{cert.title}</h4>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <span className="font-mono text-[13px] text-muted">{cert.date}</span>
                      {cert.url && (
                        <ExtLink href={cert.url} className="link inline-flex items-center gap-1 text-sm">
                          {ui.view}
                          <ExternalLink size={14} aria-hidden="true" />
                          <span className="sr-only">
                            {cert.title} {ui.opensNewTab}
                          </span>
                        </ExtLink>
                      )}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
