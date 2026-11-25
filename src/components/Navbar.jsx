import { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { contact, nav, site, ui } from '../data/content.js';

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/*
 * The inline script in index.html applies the saved/system theme before paint.
 * Here we start as 'light' (matching the prerendered HTML), then read the real
 * theme from <html> right after mount. Only an explicit toggle is saved.
 */
function useTheme() {
  const [theme, setTheme] = useState('light');

  useIsoLayoutEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable: theme still works for this visit */
    }
  };

  return [theme, toggle];
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;
  const ThemeIcon = theme === 'dark' ? Sun : Moon;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid ? 'border-b border-border bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
      >
        {ui.skipToContent}
      </a>
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <a href="#home" className="font-heading text-[17px] font-semibold tracking-tight text-text">
          {site.name}
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-[15px] font-medium text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? ui.themeToLight : ui.themeToDark}
            className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-primary-soft hover:text-primary"
          >
            <ThemeIcon size={18} aria-hidden="true" />
          </button>

          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary hidden min-h-[40px] px-5 text-sm sm:inline-flex"
          >
            {ui.resume}
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            className="grid h-11 w-11 place-items-center rounded-full text-text hover:bg-primary-soft md:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 pb-5 pt-1">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-[16px] font-medium text-text hover:bg-primary-soft hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                  onClick={() => setOpen(false)}
                >
                  {ui.resume}
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
