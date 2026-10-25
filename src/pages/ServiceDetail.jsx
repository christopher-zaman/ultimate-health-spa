import { Link, useParams } from "react-router-dom";
import { getCategory, getServicesByCategory } from "../lib/catalog";
import ServiceCard from "../components/ServiceCard";

export default function ServiceDetail() {
  const { slug } = useParams();
  const category = getCategory(slug);
  const preview = import.meta.env.DEV;

  if (!category) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4 text-3xl font-semibold">Service category not found</h1>
        <Link className="text-amber-800 underline" to="/services">Browse all categories</Link>
      </section>
    );
  }

  const services = getServicesByCategory(category.id, { includeDrafts: preview });
  const treatments = services.filter((service) => !service.isAddOn);
  const addOns = services.filter((service) => service.isAddOn);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Link to="/services" className="text-sm font-medium text-amber-800 hover:underline">← All services</Link>
      <header className="mb-10 mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold text-stone-900 md:text-5xl">{category.name}</h1>
        {preview && <p className="mt-5 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">Development review: {services.length} services are listed. Prices, details, and direct booking destinations are pending verification.</p>}
      </header>
      {services.length === 0 ? (
        <p className="max-w-2xl text-stone-600">Please contact the spa for current treatments and appointment availability.</p>
      ) : (
        <>
          <section aria-label="Treatments" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((service) => <ServiceCard key={service.id} service={service} preview={preview} />)}
          </section>
          {addOns.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-6 text-3xl font-semibold text-stone-900">Treatment add-ons</h2>
              <p className="mb-6 text-sm text-stone-600">Add-on availability and compatibility must be confirmed with the spa.</p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {addOns.map((service) => <ServiceCard key={service.id} service={service} preview={preview} />)}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
