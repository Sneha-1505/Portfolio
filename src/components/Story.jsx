import { GraduationCap } from 'lucide-react';
import { education, story } from '../data/content.js';
import { Reveal, RevealItem, SectionHeader } from './ui.jsx';

export default function Story() {
  return (
    <section id="about" aria-labelledby="about-title" className="section border-t border-border bg-surface/60">
      <Reveal className="container-page grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <SectionHeader id="about-title" title={story.title} />
          <div className="max-w-prose space-y-5 text-[17px] md:text-lg">
            {story.paragraphs.map((p) => (
              <RevealItem as="p" key={p.slice(0, 24)}>
                {p}
              </RevealItem>
            ))}
          </div>
        </div>

        <div className="space-y-6 self-start lg:mt-[76px]">
        <RevealItem as="figure" className="card overflow-hidden">
          <img
            src={story.photo.src}
            alt={story.photo.alt}
            width="750"
            height="600"
            loading="lazy"
            decoding="async"
            className="aspect-[5/4] w-full object-cover"
          />
          <figcaption className="px-5 py-3 text-sm text-muted">{story.photo.caption}</figcaption>
        </RevealItem>

        <RevealItem as="aside" aria-labelledby="education-title" className="card p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
              <GraduationCap size={20} aria-hidden="true" />
            </span>
            <h3 id="education-title" className="text-lg font-semibold">
              {story.educationTitle}
            </h3>
          </div>
          <ul className="mt-6 divide-y divide-border">
            {education.map((e) => (
              <li key={e.institution} className="py-4 first:pt-0 last:pb-0">
                <h4 className="text-[15px] font-semibold leading-snug">{e.institution}</h4>
                <p className="mt-1 text-sm text-muted">{e.programme}</p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="chip">{e.score}</span>
                  <span className="font-mono text-[13px] text-muted">{e.years}</span>
                </div>
              </li>
            ))}
          </ul>
        </RevealItem>
        </div>
      </Reveal>
    </section>
  );
}
