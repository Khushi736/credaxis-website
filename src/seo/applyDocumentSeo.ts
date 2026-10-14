/**
 * Apply resolved page SEO to `document.head` (SPA route changes + build-time HTML defaults).
 */

export type ResolvedPageSeo = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  robots: string;
  canonicalPath: string;
  type: string;
  breadcrumb?: string | null;
  service?: {
    name: string;
    serviceType: string;
    description: string;
  } | null;
  faqItems?: { question: string; answer: string }[] | null;
};

const DEFAULT_ORIGIN = 'https://www.mycredaxis.com';

export function getSiteOrigin(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL;
  if (typeof fromEnv === 'string' && fromEnv.trim()) {
    return fromEnv.replace(/\/+$/, '');
  }
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return DEFAULT_ORIGIN;
}

function absoluteUrl(pathOrUrl: string, origin: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${origin.replace(/\/+$/, '')}${path}`;
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.append(meta);
  }
  meta.content = content;
}

function setJsonLd(id: string, data: Record<string, unknown> | null) {
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }
  const script = (existing ?? document.createElement('script')) as HTMLScriptElement;
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  if (!existing) {
    document.head.append(script);
  }
}

/** Update `<title>`, meta tags, canonical, Open Graph, Twitter, and JSON-LD. */
export function applyDocumentSeo(seo: ResolvedPageSeo, origin = getSiteOrigin()): void {
  const base = origin.replace(/\/+$/, '');
  const canonicalUrl = absoluteUrl(seo.canonicalPath || '/', base);
  const imageUrl = absoluteUrl(seo.image, base);
  const keywords = Array.isArray(seo.keywords) ? seo.keywords.join(', ') : String(seo.keywords ?? '');

  document.title = seo.title;
  setMeta('name', 'description', seo.description);
  setMeta('name', 'keywords', keywords);
  setMeta('name', 'robots', seo.robots);
  setMeta('property', 'og:title', seo.title);
  setMeta('property', 'og:description', seo.description);
  setMeta('property', 'og:type', seo.type || 'website');
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:image', imageUrl);
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', seo.title);
  setMeta('name', 'twitter:description', seo.description);
  setMeta('name', 'twitter:image', imageUrl);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.append(canonical);
  }
  canonical.href = canonicalUrl;

  setJsonLd('seo-jsonld-webpage', {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.title,
    description: seo.description,
    url: canonicalUrl,
  });

  if (seo.breadcrumb && seo.canonicalPath !== '/') {
    setJsonLd('seo-jsonld-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${base}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: seo.breadcrumb,
          item: canonicalUrl,
        },
      ],
    });
  } else {
    setJsonLd('seo-jsonld-breadcrumb', null);
  }

  if (seo.service) {
    setJsonLd('seo-jsonld-service', {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: seo.service.name,
      serviceType: seo.service.serviceType,
      description: seo.service.description,
      provider: {
        '@type': 'Organization',
        name: 'MyCredAxis',
        url: base,
      },
      areaServed: 'IN',
    });
  } else {
    setJsonLd('seo-jsonld-service', null);
  }

  if (seo.faqItems?.length) {
    setJsonLd('seo-jsonld-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: seo.faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  } else {
    setJsonLd('seo-jsonld-faq', null);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Static `<head>` tags for `index.html` (home route defaults at build/dev). */
export function buildSeoHeadHtml(seo: ResolvedPageSeo, origin: string): string {
  const base = origin.replace(/\/+$/, '');
  const canonicalUrl = absoluteUrl(seo.canonicalPath || '/', base);
  const imageUrl = absoluteUrl(seo.image, base);
  const keywords = Array.isArray(seo.keywords) ? seo.keywords.join(', ') : String(seo.keywords ?? '');

  const lines = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(keywords)}" />`,
    `<meta name="robots" content="${escapeHtml(seo.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:type" content="${escapeHtml(seo.type || 'website')}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
  ];

  return lines.join('\n    ');
}
