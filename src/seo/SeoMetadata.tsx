/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyDocumentSeo } from './applyDocumentSeo';
import { resolvePageSeo } from './pages.js';

/** Sync document head with `src/seo/pages.js` for the active route. */
export function SeoMetadata() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    applyDocumentSeo(resolvePageSeo(pathname));
  }, [pathname]);

  return null;
}
