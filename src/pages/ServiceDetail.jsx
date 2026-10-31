
import { Link, useParams } from "react-router-dom";
import { getCategory, getServicesByCategory } from "../lib/catalog";
import { categories } from "../content/categories";
import { categoryContent } from "../content/categoryContent";
import ServiceCard from "../components/ServiceCard";

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
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Link
        to="/services"
        className="text-sm font-medium text-amber-800 hover:underline"
      >
        ← All services
      </Link>

      <header className="mb-12 mt-8 max-w-4xl">
        {content?.eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-800">
            {content.eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-semibold text-stone-900 md:text-5xl">
          {category.name}
        </h1>

        {content?.intro && (
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            {content.intro}
          </p>
        )}

        {preview && (
          <p className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
            Development review: {services.length} services are
            listed. Prices, details, and direct booking
            destinations are pending verification.
          </p>
        )}
      </header>

      {content?.highlights?.length > 0 && (
        <section
          aria-label="Treatment highlights"
          className="mb-14 rounded-2xl bg-stone-50 p-6 md:p-8"
        >
          <h2 className="mb-5 text-2xl font-semibold text-stone-900">
            Explore our treatment options
          </h2>

          <ul className="grid gap-4 md:grid-cols-3">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-stone-700"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 text-amber-700"
                >
                  ✓
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="available-treatments">
        <h2
          id="available-treatments"
          className="mb-8 text-3xl font-semibold text-stone-900"
        >
          Available treatments
        </h2>

        {services.length === 0 ? (
          <p className="max-w-2xl text-stone-600">
            Please contact the spa for current treatments and
            appointment availability.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                preview={preview}
              />
            ))}
          </div>
        )}
      </section>

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
            {addOns.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                preview={preview}
              />
            ))}
          </div>
        </section>
      )}

      {content?.faqs?.length > 0 && (
        <section
          className="mt-20 max-w-4xl"
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
        className="mt-20 border-t border-stone-200 pt-12"
        aria-labelledby="related-services-heading"
      >
        <h2
          id="related-services-heading"
          className="mb-6 text-2xl font-semibold text-stone-900"
        >
          Explore more services
        </h2>

        <div className="flex flex-wrap gap-3">
          {relatedCategories.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition hover:border-amber-700 hover:text-amber-800"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-stone-600">
          Have questions about a treatment?{" "}
          <Link
            to="/contact"
            className="font-medium text-amber-800 underline underline-offset-4"
          >
            Contact Ultimate Health Spa
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
