// Injects the prerendered app HTML into dist/index.html so the page paints before JS loads.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href);

const file = resolve(root, 'dist/index.html');
const html = readFileSync(file, 'utf-8');
if (!html.includes('<div id="root"></div>')) throw new Error('Root placeholder not found in dist/index.html');
writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });
console.log('Prerendered dist/index.html');
