
function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Spa photograph */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
            alt="Elegant spa-inspired interior"
            loading="lazy"
            className="h-[500px] w-full rounded-2xl object-cover shadow-lg"
          />

          <div className="absolute -bottom-6 -right-3 hidden rounded-xl bg-[#f4e8d8] px-8 py-6 shadow-md md:block">
            <p className="text-xl font-medium text-stone-800">
              Personalized Care
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Beauty & Wellness
            </p>
          </div>
        </div>

        {/* About content */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-700">
            Welcome to Ultimate Health Spa
          </p>

          <h2 className="text-4xl font-light leading-tight text-stone-800 md:text-5xl">
            Where Beauty Meets
            <span className="block font-medium">
              Personalized Care
            </span>
          </h2>

          <p className="mt-7 leading-8 text-stone-600">
            At Ultimate Health Spa, we believe beauty and
            wellness should be a personalized experience.
            Our approach focuses on understanding your
            individual goals and helping you feel confident
            in your skin.
          </p>

          <p className="mt-5 leading-8 text-stone-600">
            From rejuvenating facials to advanced aesthetic
            treatments, we strive to create a welcoming
            environment where comfort, care, and attention
            to detail come first.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-block rounded-full bg-stone-800 px-8 py-4 font-medium text-white transition hover:bg-amber-800"
          >
            Get to Know Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
