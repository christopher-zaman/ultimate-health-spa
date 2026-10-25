import { Link } from "react-router-dom";
import { categories, getServicesByCategory } from "../lib/catalog";

export default function Services() {
  const preview = import.meta.env.DEV;
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-800">Ultimate Health Spa</p>
        <h1 className="mb-4 text-4xl font-semibold text-stone-900 md:text-5xl">Explore our services</h1>
        <p className="text-lg leading-relaxed text-stone-600">Browse our treatment categories and find the right place to begin.</p>
        {preview && <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-950">Development preview: draft services are included for internal review. Prices, descriptions, and booking links are not approved for publication.</p>}
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = getServicesByCategory(category.id, { includeDrafts: preview }).length;
          return (
            <Link key={category.id} to={category.path} className="group rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-amber-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700">
              <h2 className="mb-3 text-2xl font-semibold text-stone-900 group-hover:text-amber-900">{category.name}</h2>
              <p className="text-sm text-stone-600">{preview ? `${count} treatments in review` : count ? `${count} treatments` : "View category"}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-amber-800">Explore category →</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
