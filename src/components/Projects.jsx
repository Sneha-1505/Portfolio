import { useCallback, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects, projectsSection } from '../data/content.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';
import { ExtLink, Reveal, RevealItem, SectionHeader } from './ui.jsx';

export default function Projects() {
  const [active, setActive] = useState(null);
  const triggerRef = useRef(null);

  const open = useCallback((project, trigger) => {
    triggerRef.current = trigger;
    setActive(project);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    // Return focus to the button that opened the modal
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <Reveal className="container-page">
        <SectionHeader id="projects-title" title={projectsSection.title} subtitle={projectsSection.subtitle} />

        <div className="grid gap-6">
          {featured.map((p) => (
            <RevealItem key={p.id}>
              <ProjectCard project={p} onOpen={open} />
            </RevealItem>
          ))}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <RevealItem key={p.id}>
                <ProjectCard project={p} onOpen={open} />
              </RevealItem>
            ))}
          </div>
        </div>

        <RevealItem className="mt-10">
          <ExtLink href={projectsSection.moreHref} className="link">
            {projectsSection.moreLabel}
          </ExtLink>
        </RevealItem>
      </Reveal>

      <AnimatePresence>{active && <ProjectModal key={active.id} project={active} onClose={close} />}</AnimatePresence>
    </section>
  );
}
