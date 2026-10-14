import type { Plugin } from 'vite';
import { buildSeoHeadHtml } from './src/seo/applyDocumentSeo';
import { resolvePageSeo } from './src/seo/pages.js';

/** Inject home-route SEO from `pages.js` into index.html at dev/build time. */
export function injectDefaultSeo(): Plugin {
  return {
    name: 'inject-default-seo',
    transformIndexHtml(html) {
      const origin =
        process.env.VITE_SITE_URL?.trim().replace(/\/+$/, '') || 'https://www.mycredaxis.com';
      const snippet = buildSeoHeadHtml(resolvePageSeo('/'), origin);
      if (html.includes('<!-- INJECT_DEFAULT_SEO -->')) {
        return html.replace('<!-- INJECT_DEFAULT_SEO -->', snippet);
      }
      return html;
    },
  };
}
