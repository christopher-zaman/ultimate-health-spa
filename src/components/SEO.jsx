import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { categories } from "../content/categories";
import { business } from "../content/business";

const origin = "https://www.theultimatehealthspa.com";
const defaultDescription = "Discover facials, skincare, aesthetics, and wellness treatments at Ultimate Health Spa in Leesburg, Florida. Explore services and book online.";
const pageSEO = {
  "/": ["Ultimate Health Spa | Spa & Aesthetics in Leesburg, FL", defaultDescription],
  "/about": ["About Ultimate Health Spa | Leesburg, FL", "Learn about Ultimate Health Spa in Leesburg, Florida, and explore our approach to spa, skincare, and aesthetic services."],
  "/services": ["Spa & Aesthetic Services in Leesburg, FL | Ultimate Health Spa", "Browse facials, microneedling, waxing, fillers, body contouring, and wellness services at Ultimate Health Spa in Leesburg, Florida."],
  "/contact": ["Contact Ultimate Health Spa | Leesburg, FL", "Contact Ultimate Health Spa in Leesburg, Florida, for service questions, location details, and online appointment booking."],
  "/privacy": ["Privacy Policy | Ultimate Health Spa", "Read the privacy policy for the Ultimate Health Spa website."],
};
const categoryDescriptions = {
  "facials-skincare": "Explore facials and skincare treatments at Ultimate Health Spa in Leesburg, Florida. View services and book online.",
  "botox-fillers": "Explore Botox and dermal filler services at Ultimate Health Spa in Leesburg, Florida. View treatment options and booking details.",
  "advanced-skin": "Explore microneedling and advanced skin treatments at Ultimate Health Spa in Leesburg, Florida. Browse available services.",
  "waxing-lashes": "Explore waxing, brows, and lash services at Ultimate Health Spa in Leesburg, Florida. Browse treatments and book online.",
  "body-contouring": "Explore body contouring services at Ultimate Health Spa in Leesburg, Florida. View treatments and booking options.",
  "wellness-injections": "Explore wellness and injection services at Ultimate Health Spa in Leesburg, Florida. View current treatment options.",
  "mental-wellness": "Explore mental wellness services offered by Ultimate Health Spa in Leesburg, Florida. View service details and booking options.",
  "intimate-wellness": "Explore intimate wellness services at Ultimate Health Spa in Leesburg, Florida. Browse available treatments and booking options.",
};
function setMeta(selector, attributes, content) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}
export default function SEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const category = categories.find((item) => item.path === path);
    const known = Boolean(pageSEO[path] || category);
    const [title, description] = category
      ? [`${category.name} in Leesburg, FL | Ultimate Health Spa`, categoryDescriptions[category.id] || defaultDescription]
      : pageSEO[path] || ["Page Not Found | Ultimate Health Spa", defaultDescription];
    const canonical = `${origin}${path === "/" ? "/" : path}`;
    document.title = title;
    setMeta('meta[name="description"]', { name: "description" }, description);
    setMeta('meta[name="robots"]', { name: "robots" }, known ? "index, follow" : "noindex, follow");
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = canonical;
    setMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    setMeta('meta[property="og:title"]', { property: "og:title" }, title);
    setMeta('meta[property="og:description"]', { property: "og:description" }, description);
    setMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
    setMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary");
    const schemaId = "spa-local-business-schema";
    let script = document.getElementById(schemaId);
    if (!script) { script = document.createElement("script"); script.id = schemaId; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "@id": `${origin}/#business`,
      name: business.name,
      url: `${origin}/`,
      telephone: business.phoneHref.replace("tel:", ""),
      email: business.email,
      address: { "@type": "PostalAddress", streetAddress: "711 N. 3rd Street, Suite 3", addressLocality: "Leesburg", addressRegion: "FL", postalCode: "34748", addressCountry: "US" },
      hasMap: business.mapUrl,
    });
  }, [pathname]);
  return null;
}
