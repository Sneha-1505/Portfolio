import { contact, hero, site, ui } from '../data/content.js';
import { ExtLink, Reveal, RevealItem, socialIcons } from './ui.jsx';

const socials = [
  { key: 'github', href: contact.github, label: ui.social.github },
  { key: 'linkedin', href: contact.linkedin, label: ui.social.linkedin },
  { key: 'email', href: `mailto:${contact.email}`, label: ui.social.email },
];

// Split a trailing emoji off the greeting so it can wave on its own.
const [, greetingText, greetingEmoji] = hero.greeting.match(/^(.*?)\s*(\p{Extended_Pictographic}?)$/u);

function Avatar() {
  return (
    <div className="relative mx-auto aspect-square w-[180px] sm:w-[240px] lg:w-[280px]">
      {/* Offset outline ring: a quiet echo of the circle, slowly turning */}
      <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3">
        <div className="h-full w-full rounded-full border-2 border-dashed border-primary/40 motion-safe:animate-spin-slow" />
      </div>
      {hero.photo ? (
        <img
          src={hero.photo}
          srcSet={hero.photoSmall ? `${hero.photoSmall} 360w, ${hero.photo} 640w` : undefined}
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 240px, 180px"
          alt={hero.photoAlt}
          width="280"
          height="280"
          className="relative h-full w-full rounded-full object-cover ring-4 ring-surface shadow-[0_18px_40px_-16px_rgba(91,33,182,0.45)] motion-safe:animate-pop"
        />
      ) : (
        <div
          role="img"
          aria-label={site.name}
          className="relative grid h-full w-full place-items-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#C4B5FD_0%,#8B5CF6_45%,#5B21B6_100%)] shadow-[inset_0_-20px_40px_rgba(46,16,101,0.35)]"
        >
          <span className="font-heading text-[60px] font-light tracking-tight text-white sm:text-[76px] lg:text-[84px]">
            {site.initials}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* Decorative violet glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(var(--primary)/0.18),transparent)] blur-2xl md:left-[65%]"
      />
      <Reveal immediate className="container-page relative grid items-center gap-12 md:grid-cols-[1.25fr_1fr] md:gap-8">
        <div>
          <RevealItem as="p" className="font-heading text-lg text-muted md:text-xl">
            {greetingText}
            {greetingEmoji && (
              <span
                aria-hidden="true"
                className="ml-1 inline-block origin-[70%_80%] motion-safe:animate-wave"
              >
                {greetingEmoji}
              </span>
            )}
          </RevealItem>
          <RevealItem
            as="h1"
            id="hero-title"
            className="mt-3 whitespace-pre-line text-[31px] font-bold leading-[1.08] sm:text-[40px] md:text-[32px] lg:text-[52px]"
          >
            {hero.headline}
          </RevealItem>
          <RevealItem as="p" className="mt-6 max-w-prose text-[17px] text-muted md:text-lg">
            {hero.intro}
          </RevealItem>
          <RevealItem className="mt-8 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </RevealItem>
          <RevealItem as="ul" className="mt-8 flex items-center gap-2" aria-label={ui.socialLinks}>
            {socials.map(({ key, href, label }) => {
              const Icon = socialIcons[key];
              const isMail = key === 'email';
              const cls =
                'grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-primary hover:text-primary';
              return (
                <li key={key}>
                  {isMail ? (
                    <a href={href} aria-label={label} className={cls}>
                      <Icon />
                    </a>
                  ) : (
                    <ExtLink href={href} aria-label={label} className={cls}>
                      <Icon />
                    </ExtLink>
                  )}
                </li>
              );
            })}
          </RevealItem>
        </div>
        <RevealItem>
          <Avatar />
        </RevealItem>
      </Reveal>
    </section>
  );
}
