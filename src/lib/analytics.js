// src/lib/analytics.js

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