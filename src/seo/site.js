/** Site-wide SEO defaults for MyCredAxis marketing site */
export const SITE = {
  name: "MyCredAxis",
  shortName: "CredAxis",
  legalName: "BisaniBrothers Private Limited",
  url: (import.meta.env.VITE_SITE_URL || "https://www.mycredaxis.com").replace(
    /\/$/,
    ""
  ),
  defaultTitle: "MyCredAxis — Smart Credit, UPI Autopay & Rewards",
  defaultDescription:
    "MyCredAxis helps you manage credit, UPI Autopay mandates, EMI device protection with Master Key Pro, rewards, and everyday financial tools — securely in one app.",
  defaultKeywords: [
    "MyCredAxis",
    "CredAxis",
    "UPI Autopay",
    "mandate",
    "credit score",
    "EMI",
    "Master Key Pro",
    "device lock",
    "rewards",
    "bill payments",
  ],
  twitterHandle: "@mycredaxis",
  locale: "en_IN",
  image: "/images/app-logo.jpeg",
  themeColor: "#050505",
  email: "contact@bisanibrother.com",
  supportEmail: "support@mycredaxis.com",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis",
  androidPackage: "com.bbpl.mycredaxis",
  sameAs: [
    "https://www.linkedin.com/company/bisani-brothers",
    "https://www.facebook.com/people/Bisani-Brothers/61582749106777/",
    "https://www.instagram.com/bisanibrothers/",
    "https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis",
  ],
  address: {
    streetAddress: "D-1012/13, Sector 16, Indira Nagar",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226016",
    addressCountry: "IN",
  },
  geo: {
    region: "IN-UP",
    placename: "Lucknow",
  },
  googleSiteVerification: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || "",
  bingSiteVerification: import.meta.env.VITE_BING_SITE_VERIFICATION || "",
};

export function absoluteUrl(path = "/") {
  if (!path) return SITE.url;
  if (/^https?:\/\//i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${p}`;
}

export function absoluteImage(path) {
  if (!path) return absoluteUrl(SITE.image);
  if (/^https?:\/\//i.test(path)) return path;
  return absoluteUrl(path.startsWith("/") ? path : `/${path}`);
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [SITE.shortName, SITE.legalName],
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteImage(SITE.image),
    },
    image: absoluteImage(SITE.image),
    email: SITE.email,
    sameAs: SITE.sameAs,
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.supportEmail,
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.url,
    },
  };
}

export function softwareAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    operatingSystem: "Android",
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    url: SITE.playStoreUrl,
    downloadUrl: SITE.playStoreUrl,
    image: absoluteImage(SITE.image),
    description: SITE.defaultDescription,
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
    },
  };
}
