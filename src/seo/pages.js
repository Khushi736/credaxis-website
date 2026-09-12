import { SITE } from "./site";

/**
 * Per-route SEO defaults (SPA). CMS `seo` fields override these when present.
 * path must match react-router paths (no trailing slash except "/").
 */
export const PAGE_SEO = {
  "/": {
    title: "MyCredAxis — Smart Credit, Master Key Pro, UPI Autopay & Rewards",
    description:
      "Upgrade your financial life with MyCredAxis. UPI Autopay mandates, Master Key Pro device protection, credit insights, rewards, and secure everyday payments — in one app.",
    keywords: [
      "MyCredAxis",
      "UPI Autopay",
      "FASTag",
      "mandate",
      "automated device control",
      "broadband",
      "credit score",
      "master key",
      "master key pro",
      "rewards",
      "master key lock",
      "EMI",
    ],
    breadcrumb: "Home",
  },
  "/mandate": {
    title: "Upi Autopay Mandate: A Simple Guide to Automatic Payments",
    description:
      "Set up UPI Autopay mandates on MyCredAxis. Approve once, get pre-debit alerts, pay EMIs and bills on time, and pause or cancel anytime from your UPI app.",
    keywords: [
      "Upi autopay setup for your emi app",
      "mandate",  
      "upi autopay mandate",
      "recurring payment",
      "EMI autopay",
      "MyCredAxis",
      "automated reminders",
      "Mobile application for mandate",
      "pre debit notification",
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
    title: "Master Key Pro | Device Lock & EMI Protection",
    description:
      "Master Key Pro by MyCredAxis links financed devices to EMI status. Smart reminders, fair grace, payment-linked lock, and automatic unlock when you pay.",
    keywords: [
      "device lock",
      "financed devices",
      "automatic unlock",
      "Master Key Pro",
      "EMI Protection",
      "master key",
      "DLC",
      "master key for all locks",
      "EMI recovery",
      "financed device",
      " master lock key",
      "MyCredAxis",
      "Mobile application for device lock",
      "mobile lock & key services",
      "Mobile Locking Key"
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
      "Share MyCredAxis with friends and earn rewards. Discover referral benefits, collect coins, and unlock exciting offers that make every invite count and rewarding.",
    keywords: ["MyCredAxis rewards", "Refer & Earn Rewards", "refer and earn","Refer Friends Unlock Exclusive Rewards", "referral", "coins"],
    breadcrumb: "Rewards",
  },
  "/bill-payments": {
    title: "Simple Online Bill Payments in One Place for everyone",
    description:
      "Make simple online bill payments in one place for everyone. Pay electricity, FASTag, mobile, broadband, and other bills quickly, securely, and conveniently.",
    keywords: ["bill payments", "utility bills", "MyCredAxis", "recharge"],
    breadcrumb: "Bill Payments",
    service: {
      name: "Bill Payments",
      serviceType: "Utility bill payment",
      description: "Pay electricity, recharge, broadband and more on MyCredAxis.",
    },
  },
  "/credit-score": {
    title: "Check Credit Score & CIBIL Report Online Easily",
    description:
      "Know where you stand. Check Credit Score and understand your credit health with MyCredAxis credit insights and report tools for smarter financial decisions.",
    keywords: ["credit score check online","CIBIL Report Online", "Check Credit Score", "Credit Score and Credit Insights", "Credit Score & Credit Insights", "Credit Insights", "Credit Score","Mobile application for credit report","check your cibil score", "Check Credit Score & CIBIL Report", "credit report", "CIBIL", "MyCredAxis"],
    breadcrumb: "Credit Score",
    service: {
      name: "Credit Score Insights",
      serviceType: "Credit report / score",
      description: "Check and understand your credit health with MyCredAxis.",
    },
  },
  "/credit-cards": {
    title: "Apply for Credit Card Online & Get Instant Approval",
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
      "Explore insurance options and protect what matters most with MyCredAxis partner offerings, designed to help you find suitable coverage and peace of mind.",
    keywords: ["insurance", "MyCredAxis"],
    breadcrumb: "Insurance",
  },
  "/scan-and-pay": {
    title: "Scan and Pay with UPI | secure payments by scanning QR codes",
    description:
      "Scan and pay with QR codes using UPI for fast, secure, and seamless everyday payments. Enjoy a simple, convenient way to make digital payments anytime, anywhere.",
    keywords: ["scan and pay", "UPI", "QR pay", "MyCredAxis"],
    breadcrumb: "Scan & Pay",
  },
  "/fd-against-credit": {
    title: "Apply for Credit Cards Against FD Online Easy Approval",
    description:
      "Learn how an FD against credit card works and explore FD-backed credit card options, benefits, and offers with MyCredAxis for smarter credit choices.",
    keywords: ["FD credit card","fixed deposit and credit card","fd against credit card","credit card against fd", "secured credit card", "MyCredAxis"],
    breadcrumb: "FD Against Credit",
  },
  "/about-us": {
    title: "About Us — Digital Financial Services",
    description:
      "Learn about MyCredAxis and its mission to build secure, simple, and trusted digital financial services that make managing finances easy for people across India..",
    keywords: ["About MyCredAxis","MyCredAxis", "BisaniBrothers"],
    breadcrumb: "About Us",
  },
  "/faq": {
    title: "FAQs — Mandates, Credit & App Help | MyCredAxis",
    description:
      "Find answers about MyCredAxis credit lines, UPI mandates, coins, security, and app usage. Get clear guidance to manage your credit and use features with ease.",
    keywords: ["MyCredAxis FAQ", "mandate help", "credit help"],
    breadcrumb: "FAQ",
  },
  "/support": {
    title: "Support & Help | Get quick answers, expert guidance",
    description:
      "Support & Help – Get quick answers and expert guidance. Contact support for app, credit card, payments, mandates, and other assistance whenever you need help.",
    keywords: ["MyCredAxis support","services support"," contect us", "help", "contact"],
    breadcrumb: "Support",
  },
  "/privacy-policy": {
    title: "Privacy Policy | MyCredAxis",
    description:
      "Learn how MyCredAxis collects, uses, and protects your personal data. Read our privacy policy to understand data protection, privacy practices, and your rights.",
    keywords: ["privacy policy", "MyCredAxis", "data protection"],
    breadcrumb: "Privacy Policy",
  },
  "/terms": {
    title: "Terms & Conditions | MyCredAxis",
    description:
      "Terms and conditions for using the MyCredAxis platform, including user responsibilities, account guidelines, services, privacy, payments, and other applicable terms.",
    keywords: ["terms and conditions", "MyCredAxis"],
    breadcrumb: "Terms & Conditions",
  },
  "/delete-account": {
    title: "Delete Account | MyCredAxis",
    description:
      "Request deletion of your MyCredAxis account and learn what happens to your personal data, including what information we stop processing after deletion..",
    keywords: ["delete account", "MyCredAxis"],
    robots: "noindex, follow",
    breadcrumb: "Delete Account",
  },
  "/upcoming": {
    title: "Coming Soon | MyCredAxis",
    description:
      "This MyCredAxis feature is coming soon. Download the app to stay updated with the latest features, updates, benefits, and exciting offers, all in one place.",
    keywords: ["coming soon", "MyCredAxis"],
    robots: "noindex, follow",
    breadcrumb: "Coming Soon",
  },
  "/not-found": {
    title: "Page Not Found | MyCredAxis",
    description: "The page you are looking for does not exist on MyCredAxis. Please check the URL or return to the homepage to find the information and services you need.",
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
