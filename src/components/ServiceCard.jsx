import { trackBookingClick } from "../lib/analytics";
import GoldButton from "./GoldButton";
const BOOKING_HOME = "https://ultimatehealthspa.glossgenius.com/";

function formatPrice(price) {
  if (!price || price.hidden || price.amount == null) {
    return "Contact for pricing";
  }

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price.amount);

  return price.varies
    ? `From ${formatted} · price varies`
    : formatted;
}

export default function ServiceCard({
  service,
  preview = false,
  index = 0,
}) {
  const approved = service.publicationStatus === "published";
  const canBook = approved && Boolean(service.bookingUrlCandidate);

  const bookingUrl = canBook
    ? service.bookingUrlCandidate
    : BOOKING_HOME;

  return (
    <article
      id={`service-${service.id}`}
      className="group relative flex h-full min-h-[290px] flex-col overflow-hidden border border-[#D9CBB6] bg-[#FFFCF7] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#B68B3B] hover:shadow-[0_20px_45px_rgba(120,85,40,0.13)]"
    >
      {/* Number and status */}
      <div className="mb-9 flex flex-wrap items-start justify-between gap-3">
        <span className="text-xs tracking-[.2em] text-[#B68B3B]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex flex-wrap gap-2">
          {service.isAddOn && (
            <span className="border border-[#D9CBB6] px-3 py-1 text-[10px] uppercase tracking-wider text-[#94703B]">
              Add-on
            </span>
          )}

          {preview && !approved && (
            <span className="border border-amber-300 bg-amber-50 px-3 py-1 text-[10px] text-amber-900">
              Draft · review required
            </span>
          )}
        </div>
      </div>

      {/* Treatment information */}
      <div className="flex-1">
        <h3 className="font-serif text-2xl font-normal leading-snug text-[#34291F] transition-colors duration-300 group-hover:text-[#A77B2E]">
          {service.name}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-[#756B60]">
          {formatPrice(service.price)}
          {service.durationMinutes
            ? ` · ${service.durationMinutes} min`
            : ""}
        </p>

      </div>

      <div
        className="mt-8"
        onClickCapture={() => trackBookingClick(service, bookingUrl)}
      >
        <GoldButton href={bookingUrl} external>
          {canBook ? "BOOK THIS TREATMENT" : "VIEW BOOKING MENU"}
        </GoldButton>
      </div>

      {/* Animated gold bottom border */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#A77B2E] to-[#F4D993] transition-all duration-500 group-hover:w-full"
      />
    </article>
  );
}
