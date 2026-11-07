
import { business } from "../content/business";
import GoldButton from "./GoldButton";

const heroImage = "/images/hero-facial-treatment.webp";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-stone-800">
      {/* Prioritized hero image */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/60 to-stone-900/20" />

      {/* Hero content, positioned below floating navbar */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:pb-32 md:pt-44">
        <p className="mb-5 text-sm uppercase tracking-[.22em] text-amber-200">
          Leesburg, Florida
        </p>

        <h1
          className="max-w-4xl text-white"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(3.5rem, 7vw, 7rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.055em",
          }}
        >
          Beauty and wellness,{" "}
          <span className="text-[#F4D993]">
            personalized.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone-100">
          Explore aesthetic treatments and wellness services at Ultimate
          Health Spa.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <GoldButton to="/services">
            EXPLORE TREATMENTS
          </GoldButton>

          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-stone-900"
          >
            BOOK AN APPOINTMENT
          </a>
        </div>
      </div>
    </section>
  );
}
