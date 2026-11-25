import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { contact, footer, nav, ui } from '../data/content.js';
import { ExtLink, socialIcons } from './ui.jsx';

function CopyEmail() {
  const [status, setStatus] = useState('idle'); // idle | copied | failed
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus('idle'), 2200);
  };

  return (
    <div className="relative">
      <button type="button" onClick={copy} className="btn-secondary min-h-[40px] px-4 text-sm">
        {status === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {ui.copyEmail}
      </button>
      {/* Toast */}
      <p
        role="status"
        aria-live="polite"
        className={`absolute bottom-full left-0 mb-2 whitespace-nowrap rounded-full bg-text px-3 py-1 text-[13px] text-bg transition-all duration-200 ${
          status === 'idle' ? 'pointer-events-none translate-y-1 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {status === 'copied' ? ui.copied : status === 'failed' ? `${ui.copyFailed}${contact.email}` : ''}
      </p>
    </div>
  );
}

const channels = [
  { key: 'email', label: ui.social.email, href: `mailto:${contact.email}`, text: contact.email, external: false },
  { key: 'linkedin', label: ui.social.linkedin, href: contact.linkedin, text: contact.linkedinText, external: true },
  { key: 'github', label: ui.social.github, href: contact.github, text: contact.githubText, external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" aria-labelledby="contact-title" className="border-t border-border">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-20">
        <div>
          <h2 id="contact-title" className="section-title">
            {footer.contactTitle}
          </h2>
          <p className="mt-2 text-muted">{footer.contactLine}</p>
          <ul className="mt-8 space-y-4">
            {channels.map(({ key, label, href, text, external }) => {
              const Icon = socialIcons[key];
              const inner = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-muted transition-colors group-hover:border-primary group-hover:text-primary">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block break-all font-medium text-text group-hover:text-primary">{text}</span>
                  </span>
                </>
              );
              return (
                <li key={key}>
                  {external ? (
                    <ExtLink href={href} className="group inline-flex items-center gap-4">
                      {inner}
                    </ExtLink>
                  ) : (
                    <a href={href} className="group inline-flex items-center gap-4">
                      {inner}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <CopyEmail />
          </div>
        </div>

        <nav aria-labelledby="footer-nav-title">
          <h3 id="footer-nav-title" className="text-base font-semibold">
            {footer.navTitle}
          </h3>
          <ul className="mt-4 space-y-1">
            {nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-block py-1.5 text-[15px] text-muted hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ExtLink href={contact.resume} className="inline-block py-1.5 text-[15px] text-muted hover:text-primary">
                {contact.resumeLabel}
              </ExtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col-reverse gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p suppressHydrationWarning>{footer.copyright.replace('{year}', year)}</p>
          <a href="#home" className="link self-start sm:self-auto">
            {ui.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
