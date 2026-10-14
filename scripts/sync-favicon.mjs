/**
 * Keep public favicons in sync with the canonical app emblem (src/assets/logos/app-logo.webp).
 */

import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const source = join(root, 'src/assets/logos/app-logo.webp');
const webpOut = join(root, 'public/favicon.webp');
const svgOut = join(root, 'public/favicon.svg');

const bytes = readFileSync(source);
copyFileSync(source, webpOut);

const base64 = bytes.toString('base64');
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 96 96" role="img" aria-label="MyCredAxis">
  <image width="96" height="96" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/webp;base64,${base64}"/>
</svg>
`;

writeFileSync(svgOut, svg);
console.log('Favicon synced from src/assets/logos/app-logo.webp');
