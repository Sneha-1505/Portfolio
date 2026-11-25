import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Used only at build time to prerender the page HTML (see scripts/prerender.js).
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
