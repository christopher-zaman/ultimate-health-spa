
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[650px] items-center overflow-hidden bg-stone-100"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85')",
        }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-stone-900/45 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-amber-200">
            Your Beauty. Your Confidence.
          </p>

          <h1 className="text-5xl font-light leading-tight text-white md:text-7xl">
            Reveal Your
            <span className="block font-semibold">
              Natural Radiance
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone-100">
            Experience personalized skincare, advanced aesthetic
            treatments, and exceptional care at Ultimate Health Spa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-amber-700 px-8 py-4 font-medium text-white transition hover:bg-amber-800"
            >
              Explore Treatments
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white px-8 py-4 font-medium text-white transition hover:bg-white hover:text-stone-900"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
