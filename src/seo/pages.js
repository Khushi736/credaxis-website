import { SITE } from "./site";

/**
 * Per-route SEO defaults (SPA). CMS `seo` fields override these when present.
 * path must match react-router paths (no trailing slash except "/").
 */
export const PAGE_SEO = {
  "/": {
    title: "MyCredAxis — Smart Credit, Master Key Pro, UPI Autopay",
    description:
      "Upgrade your financial life with MyCredAxis—UPI Autopay, Master Key Pro device protection, credit insights, rewards, and secure everyday payments in one app.",
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
    title: "Master Key Pro | Device Lock & EMI Protection Services",
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
    title: "Refer & Earn Rewards with Every Successful Referral",
    description:
      "Share MyCredAxis with friends and earn reward. Discover referral benefits, collect coins, and unlock exciting offers that make every invite count and rewarding.",
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
    title: "Check Your Credit Score & CIBIL Report Online Instantly",
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
    title: "Apply for Credit Card Online | Get Instant Approval",
    description:
      "Explore credit card options tailored to your lifestyle with MyCredAxis—compare rewards, benefits, fees, and application guidance to choose the right card.",
    keywords: ["credit cards", "apply credit card", "MyCredAxis"],
    breadcrumb: "Credit Cards",
  },
  "/loans": {
    title: "MyCredAxis | Personal & Flexible Loans | Easy Borrowing",
    description:
      "Discover flexible loan solutions with competitive rates and quick digital journeys on MyCredAxis. Compare options and choose a loan that fits your needs.",
    keywords: ["loans", "personal loan", "MyCredAxis"],
    breadcrumb: "Loans",
  },
  "/insurance": {
    title: "Insurance Solutions for Secure Financial Protection",
    description:
      "Explore insurance options and protect what matters with MyCredAxis partner offerings. Compare plans, find the right coverage, and make informed decisions.",
    keywords: ["insurance", "MyCredAxis"],
    breadcrumb: "Insurance",
  },
  "/scan-and-pay": {
    title: "Scan & Pay with MyCredAxis | Fast & Secure Payments",
    description:
      "Scan QR codes and pay seamlessly with MyCredAxis — enjoy fast, secure, and convenient everyday payments designed to make every transaction simple and smooth.",
    keywords: ["scan and pay", "UPI", "QR pay", "MyCredAxis"],
    breadcrumb: "Scan & Pay",
  },
  "/fd-against-credit": {
    title: "Apply for Credit Cards Against FD online Easy Approval",
    description:
      "Learn how an FD against credit card works and explore FD-backed credit card options, benefits, offers and rewards with MyCredAxis for smarter credit choices.",
    keywords: ["FD credit card","fixed deposit and credit card","fd against credit card","credit card against fd", "secured credit card", "MyCredAxis"],
    breadcrumb: "FD Against Credit",
  },
  "/about-us": {
    title: "Digital Financial Services for Smarter Money Management",
    description:
      "Learn how to build secure, simple, and reliable digital financial services for India, empowering users with seamless payments, smart tools, and trusted experiences.",
    keywords: ["About MyCredAxis","MyCredAxis", "BisaniBrothers"],
    breadcrumb: "About Us",
  },
  "/faq": {
    title: "What Are Mandates, Credit & App Help Services for Users?",
    description:
      "Find answers about MyCredAxis credit lines, UPI mandates, account security, rewards, payments, and everything you need to use the app with ease and confidence.",
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
    title: "Privacy Policy & Data Protection for Secure User Information",
    description:
      "Privacy Policy & Data Protection: Learn how we collect, use, store, and protect your information with secure practices, transparency, and user control.",
    keywords: ["privacy policy", "MyCredAxis", "data protection"],
    breadcrumb: "Privacy Policy",
  },
  "/terms": {
    title: "Terms and Conditions – Rules for Using Our Services",
    description:
      "Terms and Conditions – Review the rules for using MyCredAxis services, including eligibility, payments, account responsibilities, user conduct, and service terms.",
    keywords: ["terms and conditions", "MyCredAxis"],
    breadcrumb: "Terms & Conditions",
  },
  "/delete-account": {
    title: "Delete Account & Permanently Remove Your Personal Information",
    description:
      "Delete your MyCredAxis account and permanently remove your personal information. Follow the account deletion process to securely erase your data and details.",
    keywords: ["delete account", "MyCredAxis"],
    robots: "noindex, follow",
    breadcrumb: "Delete Account",
  },
  "/upcoming": {
    title: "Coming Soon: Exciting New Features and Services Ahead!",
    description:
      "Coming Soon: Exciting New Features and Services Ahead! Stay connected with MyCredAxis for smarter tools, services, exclusive benefits, and more. to explore.",
    keywords: ["coming soon", "MyCredAxis"],
    robots: "noindex, follow",
    breadcrumb: "Coming Soon",
  },
  "/not-found": {
    title: "Page Not Found – The Page You are Looking For Is Missing",
    description: "Page Not Found – The page you are looking for is missing or may have moved. Return to MyCredAxis to explore credit cards, UPI, rewards, and financial services.",
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
