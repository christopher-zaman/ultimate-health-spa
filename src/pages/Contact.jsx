
import ContactSection from "../components/ContactSection";
import { business } from "../content/business";

export default function Contact() {
  return (
    <>
      <ContactSection source="Contact Page" />

      <section className="bg-[#F7F3EC] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[.22em] text-[#B58A3D]">
              VISIT OUR SPA
            </p>

            <h2 className="mb-6 font-serif text-4xl text-[#34291F]">
              Find Us in Leesburg
            </h2>

            <address className="not-italic leading-8 text-stone-700">
              {business.address.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>

            <a
              href={business.phoneHref}
              className="mt-5 block text-amber-900 underline"
            >
              {business.phone}
            </a>

            <a
              href={`mailto:${business.email}`}
              className="mt-2 block break-all text-amber-900 underline"
            >
              {business.email}
            </a>

            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-amber-900 underline"
            >
              Get Directions
            </a>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[.22em] text-[#B58A3D]">
              PLAN YOUR VISIT
            </p>

            <h2 className="mb-6 font-serif text-4xl text-[#34291F]">
              Hours & Appointments
            </h2>

            {business.hours.map((hour) => (
              <p key={hour} className="mb-2 text-stone-700">
                {hour}
              </p>
            ))}

            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-amber-900 underline"
            >
              Book an Appointment on GlossGenius
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
