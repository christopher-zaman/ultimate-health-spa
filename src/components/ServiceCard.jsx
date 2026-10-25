import { trackBookingClick } from '../lib/analytics';

const BOOKING_HOME = 'https://ultimatehealthspa.glossgenius.com/';

function formatPrice(price) {
  if (!price || price.hidden || price.amount == null) return 'Contact for pricing';
  const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(price.amount);
  return price.varies ? `From ${formatted} · price varies` : formatted;
}

export default function ServiceCard({ service, preview = false }) {
  const approved = service.publicationStatus === 'published';
  const bookingVerified = service.bookingStatus === 'verified';
  const canBook = approved && Boolean(service.bookingUrlCandidate);
  return (
    <article id={`service-${service.id}`} className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {service.isAddOn && <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">Add-on</span>}
        {preview && !approved && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">Draft · review required</span>}
      </div>
      <h2 className="text-xl font-semibold text-stone-900">{service.name}</h2>
      <p className="mt-3 text-sm text-stone-700">{formatPrice(service.price)}{service.durationMinutes ? ` · ${service.durationMinutes} min` : ''}</p>
      {preview && (
        <div className="mt-3 text-sm leading-relaxed text-stone-600">
          <p>Service details and booking destination require approval.</p>
          {service.reviewNotes?.length > 0 && <p className="mt-2 text-xs text-amber-900">Review: {service.reviewNotes.join('; ')}</p>}
          <p className="mt-2 text-xs text-stone-500">Booking: {bookingVerified ? 'verified' : 'not verified'}</p>
          {service.bookingUrlCandidate && <a className="mt-2 inline-block text-xs text-amber-900 underline" href={service.bookingUrlCandidate} target="_blank" rel="noopener noreferrer">Test GlossGenius destination ↗</a>}
        </div>
      )}
      {canBook ? (
        <div className="mt-5 flex flex-col items-start gap-2">
          <a href={service.bookingUrlCandidate} target="_blank" rel="noopener noreferrer" onClick={() => trackBookingClick(service, service.bookingUrlCandidate)} className="inline-block rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-amber-900">Book this treatment ↗</a>
          {!bookingVerified && <span className="text-xs text-stone-500">Booking link pending confirmation</span>}
        </div>
      ) : (
        <a href={BOOKING_HOME} target="_blank" rel="noopener noreferrer" onClick={() => trackBookingClick(service, BOOKING_HOME)} className="mt-5 inline-block self-start rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800">View booking menu ↗</a>
      )}
    </article>
  );
}
