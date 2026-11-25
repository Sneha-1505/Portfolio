import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { Check, Forward } from 'lucide-react';

/*
 * Drawn illustrations shown on project cards until real screenshots are added
 * (set `image` in content.js). All text comes from each project's `visual` data.
 */

function PipelineVisual({ visual }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const total = visual.stages.length;
  // step 0..total-1 = stage running; total = verdict reached
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setStep(total);
      return;
    }
    let i = -1;
    const id = setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= total) clearInterval(id);
    }, 520);
    return () => clearInterval(id);
  }, [inView, reduce, total]);

  const done = step >= total;

  return (
    <div ref={ref} role="img" aria-label={visual.caption} className="flex h-full flex-col gap-5 p-5 sm:p-7">
      {/* The forwarded message */}
      <div className="max-w-[340px] self-start rounded-2xl rounded-tl-sm border border-border bg-surface px-4 py-3 shadow-sm">
        <p className="flex items-center gap-1.5 text-[12px] italic text-muted">
          <Forward size={13} aria-hidden="true" />
          {visual.messageLabel}
        </p>
        <p className="mt-1 text-[15px] leading-snug text-text">{visual.message}</p>
      </div>

      {/* Pipeline stages: a real sequence, so they are numbered */}
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {visual.stages.map((stage, i) => {
          const state = step > i || done ? 'done' : step === i ? 'active' : 'idle';
          return (
            <li
              key={stage}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-[13px] leading-tight transition-colors duration-300 ${
                state === 'done'
                  ? 'border-primary/30 bg-primary-soft text-text'
                  : state === 'active'
                    ? 'border-primary bg-surface text-text'
                    : 'border-border bg-surface/60 text-muted'
              }`}
            >
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full font-mono text-[11px] transition-colors duration-300 ${
                  state === 'idle' ? 'bg-border text-muted' : 'bg-primary text-on-primary'
                }`}
              >
                {state === 'done' ? <Check size={12} strokeWidth={3} aria-hidden="true" /> : i + 1}
              </span>
              {stage}
            </li>
          );
        })}
      </ol>

      {/* Verdict labels */}
      <div className="mt-auto flex flex-wrap gap-1.5">
        {visual.verdicts.map((v) => {
          const hit = done && v === visual.highlightVerdict;
          return (
            <span
              key={v}
              className={`rounded-full border px-2.5 py-0.5 font-mono text-[11.5px] transition-all duration-500 ${
                hit
                  ? 'border-primary bg-primary text-on-primary'
                  : 'border-border text-muted'
              }`}
            >
              {v}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Glyph({ children, className = '' }) {
  return (
    <span
      className={`inline-grid place-items-center rounded-[4px] border border-dashed border-primary/60 px-1 leading-none ${className}`}
    >
      {children}
    </span>
  );
}

function OcrVisual({ visual }) {
  return (
    <div
      role="img"
      aria-label={visual.caption}
      className="flex h-full flex-col items-center justify-center gap-4 p-5"
    >
      {/* "Handwritten" expression on grid paper, each symbol boxed as segmented */}
      <div className="flex flex-col items-center font-heading text-[30px] font-light italic text-text sm:text-[34px]">
        <div className="flex items-end gap-1.5">
          <Glyph className="h-10 w-8">x</Glyph>
          <Glyph className="-mt-3 h-6 w-5 self-start text-[18px]">2</Glyph>
          <Glyph className="h-10 w-8">+</Glyph>
          <Glyph className="h-10 w-7">1</Glyph>
        </div>
        <Glyph className="my-1.5 h-3 w-36">
          <span className="block h-[2px] w-full rounded bg-text" />
        </Glyph>
        <Glyph className="h-10 w-7">2</Glyph>
      </div>
      <svg width="20" height="20" viewBox="0 0 24 24" className="rotate-90 text-primary" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <code className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-[14px] text-primary">
        {visual.latex}
      </code>
    </div>
  );
}

const bars = [42, 58, 50, 72, 64, 80];

function BudgetVisual({ visual }) {
  return (
    <div role="img" aria-label={visual.caption} className="flex h-full flex-col justify-end gap-4 p-5 sm:p-6">
      <div className="flex h-24 items-end gap-2" aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className={`flex-1 rounded-t-md ${i === bars.length - 1 ? 'bg-primary' : 'bg-primary/25'}`}
          />
        ))}
      </div>
      <div className="rounded-xl border border-border bg-surface p-3.5">
        <div className="flex items-center justify-between gap-2 text-[13px]">
          <span className="font-medium text-text">{visual.budgetLabel}</span>
          <span className="rounded-full bg-primary-soft px-2 py-0.5 font-mono text-[11.5px] text-primary">
            {visual.alert}
          </span>
        </div>
        <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-border">
          <div className="h-full rounded-full bg-primary" style={{ width: `${visual.budgetPercent}%` }} />
        </div>
      </div>
    </div>
  );
}

const visuals = { pipeline: PipelineVisual, ocr: OcrVisual, budget: BudgetVisual };

/* Grid-paper backdrop shared by the drawn illustrations and framed screenshots. */
const paper =
  'bg-primary-soft/50 [background-image:linear-gradient(rgb(var(--border)/0.7)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--border)/0.7)_1px,transparent_1px)] [background-size:22px_22px]';

/* `drawn` forces the illustration even when a screenshot exists (used in the case-study modal). */
export default function ProjectVisual({ project, className = '', drawn = false }) {
  if (project.image && !drawn) {
    // Framed like a window on the grid paper, so the full 16:10 shot shows at any card height.
    return (
      <div className={`flex h-full w-full items-center justify-center p-5 sm:p-8 ${paper} ${className}`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1600"
          height="1000"
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] max-h-full w-full rounded-lg border border-border object-cover shadow-[0_12px_32px_-12px_rgba(46,16,101,0.35)] motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:-rotate-1 motion-safe:group-hover:scale-[1.04]"
        />
      </div>
    );
  }
  const Visual = visuals[project.visual?.type];
  if (!Visual) return null;
  return (
    <div className={`h-full w-full ${paper} ${className}`}>
      <Visual visual={project.visual} />
    </div>
  );
}
