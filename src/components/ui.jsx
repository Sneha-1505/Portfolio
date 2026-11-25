import { m } from 'framer-motion';
import { siGithub } from 'simple-icons';
import { Linkedin, Mail } from 'lucide-react';

/* Section reveal: fade up 16px, 0.5s, children staggered 0.08s. Reduced motion is handled by MotionConfig. */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* `immediate` renders already visible (used by the hero, which is on screen at load). */
export function Reveal({ as = 'div', className, children, immediate = false, ...rest }) {
  const Tag = m[as];
  const trigger = immediate
    ? { initial: false, animate: 'show' }
    : { whileInView: 'show', viewport: { once: true, margin: '0px 0px -80px 0px' } };
  return (
    <Tag className={className} variants={container} initial="hidden" {...trigger} {...rest}>
      {children}
    </Tag>
  );
}

export function RevealItem({ as = 'div', className, children, ...rest }) {
  const Tag = m[as];
  return (
    <Tag className={className} variants={item} {...rest}>
      {children}
    </Tag>
  );
}

/* External links always open in a new tab safely. */
export function ExtLink({ href, children, className, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}

export function GithubIcon({ size = 18, className }) {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d={siGithub.path} />
    </svg>
  );
}

export const socialIcons = {
  github: GithubIcon,
  linkedin: (props) => <Linkedin aria-hidden="true" size={props.size ?? 18} className={props.className} />,
  email: (props) => <Mail aria-hidden="true" size={props.size ?? 18} className={props.className} />,
};

export function SectionHeader({ title, subtitle, id }) {
  return (
    <RevealItem className="mb-10 md:mb-12">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {subtitle && <p className="mt-2 max-w-prose text-muted">{subtitle}</p>}
    </RevealItem>
  );
}
