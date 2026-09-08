import { SITE } from "./site";

/**
 * Per-route SEO defaults (SPA). CMS `seo` fields override these when present.
 * path must match react-router paths (no trailing slash except "/").
 */
export const PAGE_SEO = {
  "/": {
    title: "MyCredAxis — Credit, UPI Autopay, Master Key Pro & Rewards",
    description:
      "Upgrade your financial life with MyCredAxis. UPI Autopay mandates, Master Key Pro device protection, credit insights, rewards, and secure everyday payments — in one app.",
    keywords: [
      "MyCredAxis",
      "UPI Autopay",
      "mandate",
      "Master Key Pro",
      "credit score",
      "rewards",
      "EMI",
    ],
    breadcrumb: "Home",
  },
  "/mandate": {
    title: "UPI Autopay Mandate — Approve Once, Paid On Time | MyCredAxis",
    description:
      "Set up UPI Autopay mandates on MyCredAxis. Approve once, get pre-debit alerts, pay EMIs and bills on time, and pause or cancel anytime from your UPI app.",
    keywords: [
      "UPI Autopay",
      "mandate",
      "recurring payment",
      "EMI autopay",
      "MyCredAxis",
      "pre-debit notification",
    ],
    breadcrumb: "UPI Autopay Mandate",
    service: {
      name: "UPI Autopay Mandate",
      serviceType: "Recurring payment / Autopay",
      description:
        "Approve once for EMIs and bills with pre-debit alerts on MyCredAxis.",
    },
  },
  "/device-lock": {
    title: "Master Key Pro — Device Lock & EMI Protection | MyCredAxis",
    description:
      "Master Key Pro by MyCredAxis links financed devices to EMI status. Smart reminders, fair grace, payment-linked lock, and automatic unlock when you pay.",
    keywords: [
      "Master Key Pro",
      "device lock",
      "DLC",
      "EMI recovery",
      "financed device",
      "MyCredAxis",
    ],
    breadcrumb: "Master Key Pro",
    service: {
      name: "Master Key Pro",
      serviceType: "Device EMI protection",
      description:
        "Payment-linked device lock and unlock for financed smartphones.",
    },
  },
  "/rewards": {
    title: "Refer & Earn Rewards | MyCredAxis",
    description:
      "Share MyCredAxis with friends and earn rewards. Discover referral benefits, coins, and offers that make every invite count.",
    keywords: ["MyCredAxis rewards", "refer and earn", "referral", "coins"],
    breadcrumb: "Rewards",
  },
  "/bill-payments": {
    title: "Bill Payments — Electricity, Recharge & More | MyCredAxis",
    description:
      "Pay electricity, mobile, broadband, FASTag, and more bills from one secure MyCredAxis platform with fast confirmations.",
    keywords: ["bill payments", "utility bills", "MyCredAxis", "recharge"],
    breadcrumb: "Bill Payments",
    service: {
      name: "Bill Payments",
      serviceType: "Utility bill payment",
      description: "Pay electricity, recharge, broadband and more on MyCredAxis.",
    },
  },
  "/credit-score": {
    title: "Credit Score & Credit Insights | MyCredAxis",
    description:
      "Know where you stand. Check and understand your credit health with MyCredAxis credit insights and report tools.",
    keywords: ["credit score", "credit report", "CIBIL", "MyCredAxis"],
    breadcrumb: "Credit Score",
    service: {
      name: "Credit Score Insights",
      serviceType: "Credit report / score",
      description: "Check and understand your credit health with MyCredAxis.",
    },
  },
  "/credit-cards": {
    title: "Credit Cards — Compare & Apply | MyCredAxis",
    description:
      "Explore credit card options tailored to your lifestyle with MyCredAxis — rewards, benefits, and application guidance.",
    keywords: ["credit cards", "apply credit card", "MyCredAxis"],
    breadcrumb: "Credit Cards",
  },
  "/loans": {
    title: "Personal & Flexible Loans | MyCredAxis",
    description:
      "Discover flexible loan solutions with competitive rates and quick digital journeys on MyCredAxis.",
    keywords: ["loans", "personal loan", "MyCredAxis"],
    breadcrumb: "Loans",
  },
  "/insurance": {
    title: "Insurance Solutions | MyCredAxis",
    description:
      "Explore insurance options and protect what matters with MyCredAxis partner offerings.",
    keywords: ["insurance", "MyCredAxis"],
    breadcrumb: "Insurance",
  },
  "/scan-and-pay": {
    title: "Scan & Pay with CredAxis | MyCredAxis",
    description:
      "Scan QR codes and pay seamlessly with MyCredAxis — fast, secure everyday payments.",
    keywords: ["scan and pay", "UPI", "QR pay", "MyCredAxis"],
    breadcrumb: "Scan & Pay",
  },
  "/fd-against-credit": {
    title: "FD Against Credit Card | MyCredAxis",
    description:
      "Learn how FD-backed credit card options work and explore offerings via MyCredAxis.",
    keywords: ["FD credit card", "secured credit card", "MyCredAxis"],
    breadcrumb: "FD Against Credit",
  },
  "/about-us": {
    title: "About Us — BisaniBrothers & MyCredAxis",
    description:
      "Learn about MyCredAxis and BisaniBrothers Private Limited — building secure, simple digital financial services for India.",
    keywords: ["About MyCredAxis", "BisaniBrothers"],
    breadcrumb: "About Us",
  },
  "/faq": {
    title: "FAQs — Mandates, Credit & App Help | MyCredAxis",
    description:
      "Answers about MyCredAxis credit lines, UPI mandates, coins, security, and how to use the app.",
    keywords: ["MyCredAxis FAQ", "mandate help", "credit help"],
    breadcrumb: "FAQ",
  },
  "/support": {
    title: "Support & Help | MyCredAxis",
    description:
      "Get help with MyCredAxis — contact support for app, payments, mandates, and account questions.",
    keywords: ["MyCredAxis support", "help", "contact"],
    breadcrumb: "Support",
  },
  "/privacy-policy": {
    title: "Privacy Policy | MyCredAxis",
    description:
      "How MyCredAxis collects, uses, and protects your personal data. Read our privacy policy.",
    keywords: ["privacy policy", "MyCredAxis", "data protection"],
    breadcrumb: "Privacy Policy",
  },
  "/terms": {
    title: "Terms & Conditions | MyCredAxis",
    description:
      "Terms and conditions for using the MyCredAxis platform operated by BisaniBrothers Private Limited.",
    keywords: ["terms and conditions", "MyCredAxis"],
    breadcrumb: "Terms & Conditions",
  },
  "/delete-account": {
    title: "Delete Account | MyCredAxis",
    description:
      "Request deletion of your MyCredAxis account and understand what data we stop processing.",
    keywords: ["delete account", "MyCredAxis"],
    robots: "noindex, follow",
    breadcrumb: "Delete Account",
  },
  "/upcoming": {
    title: "Coming Soon | MyCredAxis",
    description:
      "This MyCredAxis feature is coming soon. Download the app to stay updated.",
    keywords: ["coming soon", "MyCredAxis"],
    robots: "noindex, follow",
    breadcrumb: "Coming Soon",
  },
  "/not-found": {
    title: "Page Not Found | MyCredAxis",
    description: "The page you are looking for does not exist on MyCredAxis.",
    robots: "noindex, follow",
    breadcrumb: "Not Found",
  },
};

export function resolvePageSeo(pathname, override = null) {
  const path =
    !pathname || pathname === ""
      ? "/"
      : pathname.length > 1 && pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;

  const base = PAGE_SEO[path] || {
    ...PAGE_SEO["/not-found"],
    robots: "noindex, follow",
  };

  const fromCms = normalizeCmsSeo(override);

  return {
    title: fromCms.title || base.title || SITE.defaultTitle,
    description:
      fromCms.description || base.description || SITE.defaultDescription,
    keywords: fromCms.keywords?.length
      ? fromCms.keywords
      : base.keywords || SITE.defaultKeywords,
    image: fromCms.image || base.image || SITE.image,
    robots: fromCms.robots || base.robots || "index, follow",
    canonicalPath: fromCms.canonicalPath || path || "/",
    type: base.type || "website",
    breadcrumb: base.breadcrumb || null,
    service: base.service || null,
    faqItems: fromCms.faqItems || null,
  };
}

function normalizeCmsSeo(seoData) {
  if (!seoData || typeof seoData !== "object") {
    return {};
  }
  const keywords = seoData.keywords;
  const faqItems = Array.isArray(seoData.faqItems)
    ? seoData.faqItems
        .map((item) => ({
          question: item.question || item.title || item.q || "",
          answer: item.answer || item.description || item.a || "",
        }))
        .filter((item) => item.question && item.answer)
    : null;
  return {
    title: seoData.metaTitle || seoData.title || null,
    description: seoData.metaDescription || seoData.description || null,
    keywords: Array.isArray(keywords)
      ? keywords
      : typeof keywords === "string"
        ? keywords
            .split(",")
            .map((k) => k.trim())
            .filter(Boolean)
        : null,
    image: seoData.ogImage || seoData.image || null,
    robots: seoData.robots || null,
    canonicalPath: seoData.canonicalPath || seoData.canonical || null,
    faqItems,
  };
}
