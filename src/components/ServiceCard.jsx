const BOOKING_HOME = "https://ultimatehealthspa.glossgenius.com/";

function formatPrice(price) {
  if (!price || price.hidden || price.amount == null) return "Contact for pricing";
  const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(price.amount);
  return price.varies ? `From ${formatted} · price varies` : formatted;
}

export default function ServiceCard({ service, preview = false }) {
  const approved = service.publicationStatus === "published";
  const bookingVerified = service.bookingStatus === "verified";
  return (
    <article id={`service-${service.id}`} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {service.isAddOn && <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">Add-on</span>}
        {preview && !approved && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">Draft · review required</span>}
      </div>
      <h2 className="text-xl font-semibold text-stone-900">{service.name}</h2>
      {preview ? (
        <>
          <p className="mt-3 text-sm text-stone-700">{formatPrice(service.price)}{service.durationMinutes ? ` · ${service.durationMinutes} min` : ""}</p>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">Source description retained for review; approved marketing copy has not been added.</p>
          {service.reviewNotes?.length > 0 && <p className="mt-3 text-xs text-amber-900">Review: {service.reviewNotes.join("; ")}</p>}
          <p className="mt-5 text-xs text-stone-500">Booking link: {bookingVerified ? "verified" : "not yet verified"}</p>
        </>
      ) : (
        <>
          <p className="mt-3 text-sm text-stone-700">{formatPrice(service.price)}{service.durationMinutes ? ` · ${service.durationMinutes} min` : ""}</p>
          <a href={bookingVerified ? service.bookingUrlCandidate : BOOKING_HOME} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-amber-900">Book appointment</a>
        </>
      )}
    </article>
  );
}
