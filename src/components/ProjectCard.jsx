import { ExternalLink } from 'lucide-react';
import { ui } from '../data/content.js';
import ProjectVisual from './ProjectVisual.jsx';
import { ExtLink, GithubIcon } from './ui.jsx';

export default function ProjectCard({ project, onOpen }) {
  const { featured, title, summary, stack, links } = project;
  const headingId = `project-${project.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className={`card card-lift flex h-full flex-col overflow-hidden ${
        featured ? 'lg:grid lg:grid-cols-[1.15fr_1fr]' : ''
      }`}
    >
      <div
        className={`border-b border-border ${
          featured ? 'min-h-[300px] lg:border-b-0 lg:border-r' : 'aspect-[16/10]'
        }`}
      >
        <ProjectVisual project={project} />
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? 'sm:p-8 lg:justify-center lg:p-10' : 'sm:p-7'}`}>
        <h3 id={headingId} className={featured ? 'text-2xl font-semibold sm:text-[28px]' : 'text-xl font-semibold'}>
          {title}
        </h3>
        <p className="mt-3 text-muted">{summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} ${ui.techStack}`}>
          {(featured ? stack : stack.slice(0, 5)).map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
          {!featured && stack.length > 5 && (
            <li className="chip bg-transparent text-muted">+{stack.length - 5}</li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
          <button
            type="button"
            onClick={(e) => onOpen(project, e.currentTarget)}
            className="btn-primary min-h-[40px] px-5 text-sm"
            aria-haspopup="dialog"
          >
            {ui.caseStudy}
            <span className="sr-only">: {title}</span>
          </button>
          {links.github && (
            <ExtLink href={links.github} className="link inline-flex items-center gap-2 text-sm">
              <GithubIcon size={16} />
              {ui.github}
              <span className="sr-only">
                {ui.repositoryFor} {title} {ui.opensNewTab}
              </span>
            </ExtLink>
          )}
          {links.demo && (
            <ExtLink href={links.demo} className="link inline-flex items-center gap-2 text-sm">
              <ExternalLink size={16} aria-hidden="true" />
              {links.demoLabel ?? ui.liveDemo}
              <span className="sr-only">
                {title} {ui.opensNewTab}
              </span>
            </ExtLink>
          )}
        </div>
      </div>
    </article>
  );
}
