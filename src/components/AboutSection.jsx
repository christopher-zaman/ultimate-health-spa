
import GoldButton from "./GoldButton";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="absolute -bottom-5 -right-5 hidden h-full w-full border border-[#D5AE61]/60 lg:block" />

          <img
            src="/images/about/treatment-facial.jpeg"
            alt="Facial treatment at Ultimate Health Spa in Leesburg, Florida"
            loading="lazy"
            width="1000"
            height="1100"
            className="relative h-[420px] w-full object-cover md:h-[620px]"
          />
        </div>

        <div className="py-5">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#B68B3B]">
            WELCOME TO ULTIMATE HEALTH SPA
          </p>

          <h2 className="font-serif text-5xl font-normal leading-tight tracking-tight text-[#2C2420] md:text-6xl">
            A Hidden Gem
            <span className="block bg-gradient-to-r from-[#A77B2E] via-[#D5AE61] to-[#A77B2E] bg-clip-text text-transparent">
              in Leesburg.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#675B50]">
            Discover Beverly Hills–level aesthetics and wellness with the
            warmth and personal attention of Southern hospitality.
            Ultimate Health Spa offers an upscale boutique experience
            right here in Leesburg, Florida.
          </p>

          <p className="mt-5 leading-8 text-[#675B50]">
            From advanced skincare and injectables to body wellness and
            rejuvenation, our treatments are tailored to help you look
            and feel your best.
          </p>

          <div className="mt-10">
            <GoldButton to="/about">
              DISCOVER OUR STORY
            </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}
