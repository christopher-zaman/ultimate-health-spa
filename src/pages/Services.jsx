
import { Link } from "react-router-dom";
import { services } from "../data/services";

function Services() {
  return (
    <main className="bg-[#faf8f5]">
      <section className="px-6 py-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-700">
          Discover Ultimate Health Spa
        </p>

        <h1 className="text-5xl font-light text-stone-800 md:text-6xl">
          Our Services
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          Explore our selection of skincare and aesthetic
          treatments tailored to your individual beauty goals.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-9">
                <h2 className="text-3xl font-light text-stone-800">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-stone-600">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className="mt-7 inline-block font-medium text-amber-800 hover:text-amber-600"
                >
                  Explore Treatments →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;
