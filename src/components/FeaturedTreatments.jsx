
const treatments = [
  {
    title: "Facials",
    description:
      "Personalized facial treatments designed to refresh, nourish, and rejuvenate your skin.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
    link: "#facials",
  },
  {
    title: "Dermal Fillers",
    description:
      "Explore aesthetic treatments focused on enhancing facial balance and natural-looking results.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
    link: "#fillers",
  },
  {
    title: "Microneedling",
    description:
      "Discover advanced skin treatments that support a smoother, refreshed complexion.",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=85",
    link: "#microneedling",
  },
  {
    title: "Waxing",
    description:
      "Professional hair removal services delivered with comfort and attention to detail.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    link: "#waxing",
  },
];

function FeaturedTreatments() {
  return (
    <section id="services" className="bg-[#faf8f5] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-700">
            Discover Our Services
          </p>

          <h2 className="text-4xl font-light text-stone-800 md:text-5xl">
            Treatments Tailored to You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-stone-600">
            Explore our selection of skincare and aesthetic
            treatments designed around your individual goals.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => (
            <article
              key={treatment.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-medium text-stone-800">
                  {treatment.title}
                </h3>

                <p className="mt-4 min-h-24 text-sm leading-relaxed text-stone-600">
                  {treatment.description}
                </p>

                <a
                  href={treatment.link}
                  className="inline-block font-medium text-amber-800 transition hover:text-amber-600"
                >
                  Explore Treatment →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedTreatments;
