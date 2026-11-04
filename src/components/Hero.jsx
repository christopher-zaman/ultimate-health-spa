
import { business } from "../content/business";
import GoldButton from "./GoldButton";

const heroImage =
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-stone-800">
      {/* Prioritized hero image */}
      <img
        src={`${heroImage}?auto=format&fit=crop&w=1200&q=75`}
        srcSet={[
          `${heroImage}?auto=format&fit=crop&w=640&q=75 640w`,
          `${heroImage}?auto=format&fit=crop&w=960&q=75 960w`,
          `${heroImage}?auto=format&fit=crop&w=1200&q=75 1200w`,
          `${heroImage}?auto=format&fit=crop&w=1800&q=75 1800w`,
        ].join(", ")}
        sizes="100vw"
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

        <h1 className="max-w-3xl text-5xl font-light leading-tight text-white md:text-7xl">
          Beauty and wellness,{" "}
          <span className="font-semibold text-[#F4D993]">
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

      {/* Scroll indicator */}
      <span
        className="absolute bottom-8 left-6 text-xs tracking-[.22em] text-white/75 md:left-[max(24px,calc((100vw-80rem)/2))]"
        aria-hidden="true"
      >
        SCROLL TO EXPLORE ↓
      </span>
    </section>
  );
}
