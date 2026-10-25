const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initializeAnalytics() {
  if (!measurementId || typeof window === "undefined") return;
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  document.head.appendChild(script);
}

export function trackBookingClick(service) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "select_service_booking", {
    service_id: service.id,
    service_name: service.name,
    service_category: service.categorySlug,
    booking_provider: "glossgenius",
    page_path: window.location.pathname,
  });
}