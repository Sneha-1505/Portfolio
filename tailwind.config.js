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
    },
  },
  plugins: [],
};
