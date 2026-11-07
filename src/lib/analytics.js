
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const PRODUCTION_HOSTNAMES = new Set([
  "www.theultimatehealthspa.com",
  "theultimatehealthspa.com",
]);

function isProductionWebsite() {
  return (
    typeof window !== "undefined" &&
    PRODUCTION_HOSTNAMES.has(window.location.hostname)
  );
}

let scriptRequested = false;

function loadAnalyticsScript() {
  if (!isProductionWebsite()) return;
  if (!measurementId || typeof window === "undefined") return;

  scriptRequested = true;

  const script = document.createElement("script");
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;

  document.head.appendChild(script);
}

export function initializeAnalytics() {

  if (!isProductionWebsite()) return;

  if (!measurementId || typeof window === "undefined") return;

  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);
  }

  // Load after the initial rendering work, when possible.
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadAnalyticsScript, {
      timeout: 3000,
    });
  } else {
    window.addEventListener(
      "load",
      loadAnalyticsScript,
      { once: true }
    );

    if (document.readyState === "complete") {
      loadAnalyticsScript();
    }
  }
}

export function trackBookingClick(service, destination) {
  if (!isProductionWebsite()) return;
  if (!measurementId || typeof window === "undefined") return;
  loadAnalyticsScript();

  if (typeof window.gtag !== "function") return;

  window.gtag("event", "select_service_booking", {
    service_id: service.id,
    service_name: service.name,
    service_category: service.categorySlug ?? service.categoryId,
    booking_provider: "glossgenius",
    link_url: destination,
    page_path: window.location.pathname,
  });
}
