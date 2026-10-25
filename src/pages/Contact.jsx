import { business } from "../content/business";
export default function Contact() {
  return <section className="mx-auto max-w-6xl px-6 py-20"><p className="mb-3 text-sm uppercase tracking-widest text-amber-800">Visit us</p><h1 className="text-5xl font-medium text-stone-900">Contact & location</h1><div className="mt-12 grid gap-10 md:grid-cols-2">
    <div><h2 className="mb-3 text-2xl font-semibold">Ultimate Health Spa — Leesburg</h2><address className="not-italic leading-7">{business.address.map(x => <div key={x}>{x}</div>)}</address><a href={business.phoneHref} className="mt-5 block text-amber-900 underline">{business.phone}</a><a href={`mailto:${business.email}`} className="mt-2 block break-all text-amber-900 underline">{business.email}</a><a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block underline">Directions</a></div>
    <div><h2 className="mb-3 text-2xl font-semibold">Hours</h2><p className="mb-4 text-sm text-stone-500">Confirm hours with the spa before publication.</p>{business.hours.map(h => <p key={h} className="mb-2 text-stone-700">{h}</p>)}<a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-stone-900 px-7 py-4 text-white">Book on GlossGenius</a></div>
  </div></section>;
}
