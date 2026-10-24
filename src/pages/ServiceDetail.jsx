
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

import { treatmentMenus } from "../data/treatmentMenus";
import TreatmentList from "../components/TreatmentList";

function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <main className="px-6 py-24 text-center">
        <h1 className="text-4xl text-stone-800">
          Service Not Found
        </h1>

        <Link
          to="/services"
          className="mt-6 inline-block text-amber-800"
        >
          Return to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#faf8f5]">
      <section className="relative h-[450px]">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-stone-950/50">
          <h1 className="px-6 text-center text-5xl font-light text-white md:text-6xl">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link
          to="/services"
          className="text-sm font-medium text-amber-800"
        >
          ← All Services
        </Link>

        <h2 className="mt-8 text-4xl font-light text-stone-800">
          Discover {service.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-stone-600">
          {service.description}
        </p>

        <p className="mt-5 leading-8 text-stone-600">
          Explore our available treatments and discover
          options tailored to your individual goals.
        </p>

        // Treatment List
        <TreatmentList
        title={`Our ${service.title} Treatments`}
        treatments={treatmentMenus[service.slug]}
        />

        <Link
          to="/services"
          className="mt-10 inline-block rounded-full bg-stone-800 px-8 py-4 text-white transition hover:bg-amber-800"
        >
          Explore More Services
        </Link>
      </section>
    </main>
  );
}

export default ServiceDetail;
