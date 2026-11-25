import { useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { ui } from '../data/content.js';
import { ExtLink, GithubIcon } from './ui.jsx';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function Block({ title, children }) {
  return (
    <section className="mt-8">
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="mt-2 text-muted">{children}</div>
    </section>
  );
}

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = `modal-title-${project.id}`;

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const nodes = [...panelRef.current.querySelectorAll(FOCUSABLE)];
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (!panelRef.current.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const { links } = project;

  return (
    <m.div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-[#0F0D1A]/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <m.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-border bg-surface p-6 shadow-2xl sm:rounded-2xl sm:p-10"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={ui.closeModal}
          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full text-muted hover:bg-primary-soft hover:text-primary"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <h2 id={titleId} className="pr-12 text-2xl font-semibold sm:text-[28px]">
          {project.title}
        </h2>
        <p className="mt-3 text-[17px] text-muted">{project.summary}</p>

        <Block title={ui.modal.problem}>
          <p>{project.problem}</p>
        </Block>
        <Block title={ui.modal.whatIDid}>
          <p>{project.whatIDid}</p>
        </Block>
        <Block title={ui.modal.howItWorks}>
          {project.howItWorksIntro && <p className="mb-3">{project.howItWorksIntro}</p>}
          <ol className="space-y-2.5">
            {project.howItWorks.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft font-mono text-[12px] text-primary">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Block>
        <Block title={ui.modal.results}>
          <p>{project.results}</p>
        </Block>
        <Block title={ui.modal.stack}>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </Block>
        {(links.github || links.demo) && (
          <Block title={ui.modal.links}>
            <div className="flex flex-wrap gap-3">
              {links.github && (
                <ExtLink href={links.github} className="btn-secondary min-h-[40px] px-5 text-sm">
                  <GithubIcon size={16} />
                  {ui.github}
                </ExtLink>
              )}
              {links.demo && (
                <ExtLink href={links.demo} className="btn-primary min-h-[40px] px-5 text-sm">
                  <ExternalLink size={16} aria-hidden="true" />
                  {links.demoLabel ?? ui.liveDemo}
                </ExtLink>
              )}
            </div>
          </Block>
        )}
      </m.div>
    </m.div>
  );
}
