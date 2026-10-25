/** GA4 event helper. No analytics request is made unless VITE_GA_MEASUREMENT_ID is configured. */
export function trackBookingClick(service, destination) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'select_service_booking', {
    service_id: service.id,
    service_name: service.name,
    service_category: service.categoryId,
    booking_provider: 'glossgenius',
    link_url: destination,
    page_path: window.location.pathname,
  });
}
