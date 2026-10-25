import { Link } from "react-router-dom";
import { categories } from "../content/categories";
const featured = ["facials-skincare", "botox-fillers", "advanced-skin", "waxing-lashes"];
export default function FeaturedTreatments() {
  return <section id="services" className="bg-[#F7F3EC] px-6 py-20">
    <div className="mx-auto max-w-7xl">
      <p className="mb-3 text-sm uppercase tracking-widest text-amber-800">Explore our services</p>
      <h2 className="mb-5 text-4xl font-medium text-[#2C2420]">Find your treatment</h2>
      <p className="mb-10 max-w-2xl text-stone-600">Browse our treatment families, from facials and injectables to wellness services.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{featured.map(id => {
        const category = categories.find(c => c.id === id);
        return <Link key={id} to={category.path} className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="text-2xl font-medium text-stone-900">{category.name}</h3><span className="mt-6 inline-block text-sm font-semibold text-amber-800">Explore category →</span>
        </Link>;
      })}</div>
      <Link to="/services" className="mt-9 inline-block font-semibold text-amber-900 underline underline-offset-4">View all eight treatment categories</Link>
    </div>
  </section>;
}
