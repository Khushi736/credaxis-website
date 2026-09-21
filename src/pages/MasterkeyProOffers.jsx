import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MasterkeyProOffers.css";
import apiclient from "../services/apiClient";
import { useSEO } from "../hooks/useSEO";

/** CMS page slug (letter o in offers) */
const PAGE_SLUG = "masterkeypro-offers";

const formatInr = (amount) => {
  const n = Number(amount);
  if (!Number.isFinite(n)) return "";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
};

const stripHtmlToText = (html = "") => {
  const withBreaks = String(html)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(div|p|li|h[1-6])>/gi, "\n");
  const noTags = withBreaks.replace(/<[^>]+>/g, "");
  return noTags
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\u00a0/g, " ")
    .replace(/[^\S\n]+/g, " ")
    .replace(/\n+/g, "\n")
    .trim();
};

const looksLikeJson = (text = "") => {
  const t = String(text).trim();
  return t.startsWith("{") && t.includes('"plans"');
};

const tryParseJsonObject = (raw) => {
  const text = stripHtmlToText(raw || "");
  if (!text) return null;
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
};

const normalizePlan = (plan, fallbackName = "") => {
  if (!plan || typeof plan !== "object") return null;
  const name = String(plan.name || fallbackName || "").trim();
  if (!name && plan.price == null && plan.total_keys == null) return null;
  return {
    name: name || "Master Key plan",
    base_keys: Number(plan.base_keys) || 0,
    bonus_keys: Number(plan.bonus_keys) || 0,
    total_keys: Number(plan.total_keys) || Number(plan.base_keys) || 0,
    price: Number(plan.price) || 0,
    price_display: plan.price_display || "",
    per_key: Number(plan.per_key) || 0,
    per_key_display: plan.per_key_display || "",
    badge: plan.badge || null,
  };
};

const pickOffersSection = (sections = []) => {
  if (!Array.isArray(sections) || sections.length === 0) return null;
  const preferred = sections.find((sec) => {
    const key = String(sec?.key || "").toLowerCase();
    return (
      key === "masterkeypro_offers" ||
      key === "master-key-pro_offers" ||
      key.includes("offer") ||
      key.includes("master")
    );
  });
  return preferred || sections[0];
};

const parsePlanItem = (item) => {
  if (!item) return null;
  const name = String(item.title || "").trim();
  const text = stripHtmlToText(item.description || item.content || "");

  const asJson = tryParseJsonObject(text);
  if (asJson) {
    if (Array.isArray(asJson.plans)) return null;
    const plan = normalizePlan(asJson, name);
    if (plan) return plan;
  }

  const getNum = (key) => {
    const m = text.match(new RegExp(`${key}\\s*[:=]\\s*([\\d.]+)`, "i"));
    return m ? Number(m[1]) : null;
  };
  const getStr = (key) => {
    const m = text.match(new RegExp(`${key}\\s*[:=]\\s*(.+)`, "i"));
    if (!m) return "";
    return m[1].replace(/\s+/g, " ").trim();
  };

  const base = getNum("base_keys");
  const bonus = getNum("bonus_keys");
  const total = getNum("total_keys");
  const price = getNum("price");
  const perKey = getNum("per_key");
  const badgeRaw = getStr("badge");
  const badge =
    !badgeRaw || /^(null|none|-)$/i.test(badgeRaw) ? null : badgeRaw;

  if (price == null && total == null && base == null) return null;

  return {
    name: name || "Master Key plan",
    base_keys: base ?? 0,
    bonus_keys: bonus ?? 0,
    total_keys: total ?? base ?? 0,
    price: price ?? 0,
    price_display: getStr("price_display"),
    per_key: perKey ?? 0,
    per_key_display: getStr("per_key_display"),
    badge,
  };
};

const extractOffersPayload = (section) => {
  if (!section) return null;
  const fromDesc = tryParseJsonObject(section.description);
  if (fromDesc?.plans?.length) return fromDesc;
  for (const item of section.items || []) {
    const fromItem = tryParseJsonObject(item.description || item.content);
    if (fromItem?.plans?.length) return fromItem;
  }
  return null;
};

function MasterkeyProOffers() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useSEO(pageData?.seo, "Master Key Pro Offers - MyCredAxis");

  useEffect(() => {
    window.scrollTo(0, 0);
    let cancelled = false;

    const fetchOffersData = async () => {
      try {
        const res = await apiclient.get(`/website/pages/${PAGE_SLUG}`);
        if (!cancelled && res?.success && res?.data) {
          setPageData(res.data);
        }
      } catch (error) {
        console.error("Failed to load Master Key Pro Offers", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchOffersData();
    return () => {
      cancelled = true;
    };
  }, []);

  const offersSection = useMemo(
    () => pickOffersSection(pageData?.sections),
    [pageData]
  );

  const jsonPayload = useMemo(
    () => extractOffersPayload(offersSection),
    [offersSection]
  );

  const itemPlans = useMemo(() => {
    const items = offersSection?.items;
    if (!Array.isArray(items) || items.length === 0) return [];
    return items.map(parsePlanItem).filter(Boolean);
  }, [offersSection]);

  const plans = useMemo(() => {
    if (itemPlans.length > 0) return itemPlans;
    if (jsonPayload?.plans?.length) {
      return jsonPayload.plans.map((p) => normalizePlan(p)).filter(Boolean);
    }
    return [];
  }, [itemPlans, jsonPayload]);

  const pageTitle = jsonPayload?.title || "Buy Master Keys";
  const pageSubtitle =
    jsonPayload?.subtitle ||
    (offersSection?.subtitle && !looksLikeJson(offersSection.subtitle)
      ? offersSection.subtitle
      : null) ||
    "Pick a pack to create Master Keys for financed devices.";

  const note = useMemo(() => {
    if (jsonPayload?.note) return String(jsonPayload.note);
    const desc = stripHtmlToText(offersSection?.description || "");
    if (!desc || looksLikeJson(desc)) return "";
    return desc;
  }, [jsonPayload, offersSection]);

  if (loading) {
    return (
      <div className="mkp-page mkp-page--loading">
        <div className="mkp-spinner" aria-hidden="true" />
        <p>Loading plans…</p>
      </div>
    );
  }

  return (
    <div className="mkp-page">
      <div className="mkp-shell">
        <header className="mkp-hero">
          <span className="mkp-eyebrow">Master Key Pro</span>
          <h1>{pageTitle}</h1>
          <p className="mkp-hero-copy">{pageSubtitle}</p>
          {note ? (
            <p className="mkp-hint">
              <span className="mkp-hint-dot" aria-hidden="true" />
              {note}
            </p>
          ) : (
            <p className="mkp-hint">
              <span className="mkp-hint-dot" aria-hidden="true" />
              1 key token is used for each Master Key you create.
            </p>
          )}
        </header>

        {plans.length > 0 ? (
          <div className="mkp-plans">
            {plans.map((plan, index) => {
              const featured = Boolean(plan.badge);
              const price =
                Number.isFinite(Number(plan.price)) && plan.price > 0
                  ? formatInr(plan.price)
                  : plan.price_display || "—";
              const perKey =
                Number.isFinite(Number(plan.per_key)) && plan.per_key > 0
                  ? formatInr(plan.per_key)
                  : null;

              return (
                <article
                  key={`${plan.name}-${index}`}
                  className={`mkp-plan${featured ? " mkp-plan--featured" : ""}`}
                >
                  {featured ? (
                    <span className="mkp-plan-tag">{plan.badge}</span>
                  ) : (
                    <span className="mkp-plan-tag mkp-plan-tag--quiet">
                      Pack
                    </span>
                  )}

                  <h2 className="mkp-plan-name">{plan.name}</h2>

                  <div className="mkp-plan-keys">
                    <span className="mkp-plan-keys-num">
                      {plan.total_keys || "—"}
                    </span>
                    <span className="mkp-plan-keys-label">Keys</span>
                  </div>

                  {plan.bonus_keys > 0 ? (
                    <p className="mkp-plan-meta">
                      {plan.base_keys} + {plan.bonus_keys} free
                    </p>
                  ) : (
                    <p className="mkp-plan-meta">Standard pack</p>
                  )}

                  <div className="mkp-plan-footer">
                    <div>
                      <div className="mkp-plan-price">{price}</div>
                      {perKey ? (
                        <div className="mkp-plan-unit">{perKey} / key</div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mkp-empty">
            <p>Plans will appear here once published in Website CMS.</p>
          </div>
        )}

        <footer className="mkp-footer">
          <p>
            Master Key Pro links financed devices to EMI status — reminders,
            lock, and unlock in one flow.
          </p>
          <Link to="/device-lock" className="mkp-footer-link">
            Learn about Master Key Pro
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default MasterkeyProOffers;
