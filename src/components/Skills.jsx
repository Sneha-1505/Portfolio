import { Brain, CodeXml, Database, Server } from 'lucide-react';
import { skills, skillsSection } from '../data/content.js';
import { Reveal, RevealItem, SectionHeader } from './ui.jsx';

const icons = { code: CodeXml, web: Server, ai: Brain, data: Database };

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <Reveal className="container-page">
        <SectionHeader id="skills-title" title={skillsSection.title} subtitle={skillsSection.subtitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => {
            const Icon = icons[group.icon] ?? CodeXml;
            return (
              <RevealItem key={group.title} className="card p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            );
          })}
        </div>
        <RevealItem as="p" className="mt-8 text-muted">
          {skillsSection.also}
        </RevealItem>
      </Reveal>
    </section>
  );
}
