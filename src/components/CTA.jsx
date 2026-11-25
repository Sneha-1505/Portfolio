import { cta } from '../data/content.js';
import { Reveal, RevealItem } from './ui.jsx';

export default function CTA() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-[linear-gradient(120deg,#6D28D9_0%,#7C3AED_45%,#4C1D95_100%)] text-white dark:bg-[linear-gradient(120deg,#3B1C7A_0%,#4C1D95_45%,#2E1065_100%)]">
      {/* Decorative concentric rings */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 opacity-20"
        viewBox="0 0 200 200"
      >
        {[30, 50, 70, 90].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="white" strokeWidth="0.6" />
        ))}
      </svg>
      <Reveal className="container-page relative py-16 md:py-24">
        <RevealItem as="h2" id="cta-title" className="max-w-xl text-[30px] font-semibold text-white md:text-[40px]">
          {cta.title}
        </RevealItem>
        <RevealItem as="p" className="mt-4 max-w-prose text-lg text-white/85">
          {cta.line}
        </RevealItem>
        <RevealItem className="mt-8 flex flex-wrap gap-3">
          <a
            href={cta.primary.href}
            className="btn bg-white text-[#5B21B6] hover:bg-[#EDE9FE] focus-visible:outline-white"
          >
            {cta.primary.label}
          </a>
          <a
            href={cta.secondary.href}
            className="btn border border-white/70 text-white hover:bg-white/10 focus-visible:outline-white"
          >
            {cta.secondary.label}
          </a>
        </RevealItem>
      </Reveal>
    </section>
  );
}
