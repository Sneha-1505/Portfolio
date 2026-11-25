/** Design tokens live as CSS variables in src/index.css (light + dark). */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: token('primary'),
          hover: token('primary-hover'),
          soft: token('primary-soft'),
        },
        'on-primary': token('on-primary'),
        bg: token('bg'),
        surface: token('surface'),
        text: token('text'),
        muted: token('muted'),
        border: token('border'),
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
        prose: '65ch',
      },
      boxShadow: {
        card: '0 18px 40px -18px rgb(var(--shadow) / 0.35)',
      },
      /* CSS-only so they run before JS loads; always used with motion-safe: */
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.9)' },
          '60%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
        wave: {
          '0%, 60%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        pop: 'pop 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        wave: 'wave 1.8s ease-in-out 0.6s 2',
        'spin-slow': 'spin 40s linear infinite',
      },
    },
  },
  plugins: [],
};
