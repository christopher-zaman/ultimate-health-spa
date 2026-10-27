
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

let scriptRequested = false;

function loadAnalyticsScript() {
  if (!measurementId || typeof window === "undefined") return;
  if (scriptRequested) return;

  scriptRequested = true;

  const script = document.createElement("script");
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;

  document.head.appendChild(script);
}

export function initializeAnalytics() {
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

export function trackBookingClick(service) {
  if (!measurementId || typeof window === "undefined") return;

  // Ensure early booking clicks also trigger script loading.
  loadAnalyticsScript();

  if (typeof window.gtag !== "function") return;

  window.gtag("event", "select_service_booking", {
    service_id: service.id,
    service_name: service.name,
    service_category: service.categorySlug,
    booking_provider: "glossgenius",
    page_path: window.location.pathname,
  });
}
