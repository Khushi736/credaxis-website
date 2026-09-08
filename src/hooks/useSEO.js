import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  absoluteImage,
  absoluteUrl,
  organizationJsonLd,
  SITE,
  softwareAppJsonLd,
} from "../seo/site";
import { PAGE_SEO, resolvePageSeo } from "../seo/pages";

function upsertMeta(attr, key, content) {
  if (content == null || content === "") return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href, attrs = {}) {
  if (!href) return;
  const hreflang = attrs.hreflang;
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  Object.entries(attrs).forEach(([k, v]) => {
    if (v != null) el.setAttribute(k, v);
  });
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function stripHtml(html) {
  if (!html) return "";
  return String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildBreadcrumbJsonLd(path, breadcrumbLabel, title) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  if (path && path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: breadcrumbLabel || title || path,
      item: absoluteUrl(path),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

/** Apply full SEO head tags for a resolved page config */
export function applySeo(seo) {
  const title = seo.title || SITE.defaultTitle;
  const description = seo.description || SITE.defaultDescription;
  const keywords = Array.isArray(seo.keywords)
    ? seo.keywords.join(", ")
    : seo.keywords || SITE.defaultKeywords.join(", ");
  const path = seo.canonicalPath || "/";
  const canonical = absoluteUrl(path);
  const image = absoluteImage(seo.image || SITE.image);
  const robots = seo.robots || "index, follow";

  document.title = title;

  upsertMeta("name", "description", description);
  upsertMeta("name", "keywords", keywords);
  upsertMeta("name", "robots", robots);
  upsertMeta("name", "googlebot", robots);
  upsertMeta("name", "author", SITE.legalName);
  upsertMeta("name", "theme-color", SITE.themeColor);
  upsertMeta("name", "application-name", SITE.name);
  upsertMeta("name", "apple-mobile-web-app-title", SITE.name);
  upsertMeta("name", "format-detection", "telephone=no");
  upsertMeta("name", "geo.region", SITE.geo.region);
  upsertMeta("name", "geo.placename", SITE.geo.placename);

  if (SITE.googleSiteVerification) {
    upsertMeta("name", "google-site-verification", SITE.googleSiteVerification);
  }
  if (SITE.bingSiteVerification) {
    upsertMeta("name", "msvalidate.01", SITE.bingSiteVerification);
  }

  upsertLink("canonical", canonical);
  upsertLink("manifest", "/site.webmanifest");
  upsertLink("alternate", canonical, { hreflang: "en-IN" });
  upsertLink("alternate", canonical, { hreflang: "x-default" });

  upsertMeta("property", "og:type", seo.type || "website");
  upsertMeta("property", "og:site_name", SITE.name);
  upsertMeta("property", "og:locale", SITE.locale);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:image:alt", `${SITE.name} — ${title}`);
  upsertMeta("property", "og:image:type", "image/jpeg");

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);
  upsertMeta("name", "twitter:image:alt", `${SITE.name} — ${title}`);
  if (SITE.twitterHandle) {
    upsertMeta("name", "twitter:site", SITE.twitterHandle);
  }

  upsertJsonLd("seo-jsonld-org", organizationJsonLd());
  upsertJsonLd("seo-jsonld-app", softwareAppJsonLd());

  upsertJsonLd("seo-jsonld-website", {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#organization` },
  });

  upsertJsonLd("seo-jsonld-webpage", {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    name: title,
    description,
    url: canonical,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: image,
    },
  });

  upsertJsonLd(
    "seo-jsonld-breadcrumb",
    buildBreadcrumbJsonLd(path, seo.breadcrumb, title)
  );

  if (seo.service) {
    upsertJsonLd("seo-jsonld-service", {
      "@context": "https://schema.org",
      "@type": "Service",
      name: seo.service.name,
      serviceType: seo.service.serviceType,
      description: seo.service.description || description,
      url: canonical,
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    });
  } else {
    upsertJsonLd("seo-jsonld-service", null);
  }

  if (seo.faqItems?.length) {
    upsertJsonLd("seo-jsonld-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: seo.faqItems.slice(0, 30).map((item) => ({
        "@type": "Question",
        name: stripHtml(item.question),
        acceptedAnswer: {
          "@type": "Answer",
          text: stripHtml(item.answer),
        },
      })),
    });
  } else {
    upsertJsonLd("seo-jsonld-faq", null);
  }
}

/**
 * Page SEO — merges route defaults with optional CMS `seo` object.
 * @param {object|null} seoData CMS fields: metaTitle, metaDescription, keywords, ogImage, faqItems
 * @param {string} [fallbackTitle] Used only when path has no PAGE_SEO entry and CMS has no title
 */
export function useSEO(seoData = null, fallbackTitle) {
  const location = useLocation();

  useEffect(() => {
    const path =
      location.pathname.length > 1 && location.pathname.endsWith("/")
        ? location.pathname.slice(0, -1)
        : location.pathname || "/";

    const resolved = resolvePageSeo(path, seoData);

    if (
      fallbackTitle &&
      !seoData?.metaTitle &&
      !seoData?.title &&
      !PAGE_SEO[path]
    ) {
      resolved.title = fallbackTitle;
    }

    applySeo(resolved);
  }, [location.pathname, seoData, fallbackTitle]);
}

/** Set SEO from current route (App shell). Child pages can call useSEO for CMS overrides. */
export function useRouteSEO() {
  const location = useLocation();

  useEffect(() => {
    applySeo(resolvePageSeo(location.pathname));
  }, [location.pathname]);
}
