import { Link } from "react-router-dom";
import { business } from "../content/business";
import { categories } from "../content/categories";

export default function Footer() {
  return <footer className="bg-[#2C2420] px-6 py-14 text-stone-200">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
      <div><p className="mb-4 text-xl font-semibold text-white">Ultimate Health Spa</p><p>Personalized aesthetics and wellness in Leesburg, Florida.</p><p className="mt-4 text-xs text-stone-400">Service information and business hours require final approval before launch.</p></div>
      <div><h2 className="mb-4 font-semibold text-white">Explore</h2><div className="grid gap-2">{categories.map(c => <Link key={c.id} to={c.path} className="text-sm hover:text-white">{c.name}</Link>)}</div></div>
      <div><h2 className="mb-4 font-semibold text-white">Visit</h2><address className="not-italic">{business.address.map(x => <div key={x}>{x}</div>)}</address><a className="mt-3 block hover:text-white" href={business.phoneHref}>{business.phone}</a><a className="mt-2 block break-all hover:text-white" href={`mailto:${business.email}`}>{business.email}</a><a className="mt-3 inline-block underline" href={business.mapUrl} target="_blank" rel="noopener noreferrer">Get directions</a></div>
    </div>
    <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-stone-600 pt-6 text-xs text-stone-400"><span>© {new Date().getFullYear()} Ultimate Health Spa</span><Link to="/privacy" className="hover:text-white">Privacy</Link></div>
  </footer>;
}
