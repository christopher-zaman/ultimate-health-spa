
import { Link, useParams } from "react-router-dom";
import { getCategory, getServicesByCategory } from "../lib/catalog";
import { categories } from "../content/categories";
import { categoryContent } from "../content/categoryContent";
import ServiceCard from "../components/ServiceCard";
import CategoryBanner from "../components/CategoryBanner";
import GoldDivider from "../components/GoldDivider";
import CertificationBadges from "../components/CertificationBadges";

export default function ServiceDetail() {
  const { slug } = useParams();
  const category = getCategory(slug);
  const preview = import.meta.env.DEV;

  if (!category) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4 text-3xl font-semibold">
          Service category not found
        </h1>
        <Link className="text-amber-800 underline" to="/services">
          Browse all categories
        </Link>
      </section>
    );
  }

  const services = getServicesByCategory(category.id, {
    includeDrafts: preview,
  });

  const treatments = services.filter(
    (service) => !service.isAddOn
  );

  const addOns = services.filter(
    (service) => service.isAddOn
  );

  const content = categoryContent[category.id];

  const relatedCategories = categories
    .filter((item) => item.id !== category.id)
    .slice(0, 4);

 
return (
  <>
    <CategoryBanner
      title={category.name}
      eyebrow={content?.eyebrow || "ULTIMATE HEALTH SPA"}
      description={content?.intro}
    />

    <div className="bg-[#F7F3EC]">
      <GoldDivider />
    </div>

    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link
        to="/services"
        className="text-sm font-medium text-[#B68B3B] transition-colors hover:text-[#8B682B] hover:underline"
      >
        ← All services
      </Link>

      {/* Existing treatment highlights and remaining sections follow */}

      <section
        aria-labelledby="available-treatments"
        className="mt-12"
      >
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#B68B3B]">
            DISCOVER YOUR TREATMENT
          </p>

          <h2
            id="available-treatments"
            className="font-serif text-4xl font-normal text-[#34291F] md:text-5xl"
          >
            Explore our treatment options
          </h2>
        </div>

        {services.length === 0 ? (
          <p className="max-w-2xl text-stone-600">
            Please contact the spa for current treatments and
            appointment availability.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              preview={preview}
              index={index}
            />
          ))}
          </div>
                )}
      </section>

      {/* Professional certification badges */}
      {category.id === "intimate-wellness" && (
        <CertificationBadges />
      )}

      {addOns.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-stone-900">
            Treatment add-ons
          </h2>

          <p className="mb-6 text-sm text-stone-600">
            Add-on availability and compatibility must be
            confirmed with the spa.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
           {addOns.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              preview={preview}
              index={index}
            />
          ))}
          </div>
        </section>
      )}

      {content?.faqs?.length > 0 && (
        <section
          className="mt-14 max-w-4xl"
          aria-labelledby="service-faq-heading"
        >
          <h2
            id="service-faq-heading"
            className="mb-8 text-3xl font-semibold text-stone-900"
          >
            Frequently asked questions
          </h2>

          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {content.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-5"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-stone-900">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-xl text-amber-800"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-stone-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section
        className="mt-10 pt-0"
        aria-labelledby="related-services-heading"
      >
        <h2
          id="related-services-heading"
          className="mb-6 text-2xl font-semibold text-stone-900"
        >
          Explore more services
        </h2>

        <div className="flex flex-wrap gap-4">
          {relatedCategories.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-[#B68B3B]/60
              px-5 py-3
              text-sm font-medium text-[#8B682B]
              transition-all duration-300 ease-out
              hover:z-10
              hover:scale-110
              hover:border-[#D4AD65]
              hover:bg-[#F9F0DC]
              hover:text-[#8B682B]
              hover:shadow-[0_8px_24px_rgba(184,139,59,0.22)]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#B68B3B]
              motion-reduce:transform-none
            "
          >
            {item.name}
          </Link>
          ))}
        </div>

        <p className="mt-8 text-stone-600">
          Have questions about a treatment?{" "}      
        <Link
          to="/contact"
          className="
            inline-block
            border-b border-[#B68B3B]/50
            font-medium text-[#B68B3B]
            transition-all duration-300 ease-out
            hover:scale-105
            hover:border-[#D4AD65]
            hover:text-[#8B682B]
            hover:drop-shadow-[0_2px_6px_rgba(184,139,59,0.25)]
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#B68B3B]
            motion-reduce:transform-none
          "
        >
          Contact Ultimate Health Spa
        </Link>
        </p>
            </section>
    </div>
  </>
  );
}