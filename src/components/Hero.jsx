import { Link } from "react-router-dom";
import { business } from "../content/business";
export default function Hero() {
  return <section className="relative flex min-h-[560px] items-center overflow-hidden bg-stone-800">
    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85')"}} />
    <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/60 to-stone-900/20" />
    <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[.22em] text-amber-200">Leesburg, Florida</p>
      <h1 className="max-w-2xl text-5xl font-light leading-tight text-white md:text-7xl">Beauty and wellness, <span className="font-semibold">personalized.</span></h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-100">Explore aesthetic treatments and wellness services at Ultimate Health Spa.</p>
      <div className="mt-9 flex flex-wrap gap-4">
        <Link to="/services" className="rounded-full bg-amber-700 px-7 py-4 font-medium text-white hover:bg-amber-800">Explore treatments</Link>
        <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white px-7 py-4 font-medium text-white hover:bg-white hover:text-stone-900">Book an appointment</a>
      </div>
    </div>
  </section>;
}
