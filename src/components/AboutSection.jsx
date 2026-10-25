import { Link } from "react-router-dom";
export default function AboutSection() {
  return <section id="about" className="bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Spa-inspired interior; illustrative image, not the actual location" loading="lazy" className="h-[420px] w-full rounded-2xl object-cover" />
    <div><p className="mb-3 text-sm uppercase tracking-widest text-amber-800">About the spa</p><h2 className="text-4xl font-medium text-stone-900">A welcoming space for your goals</h2><p className="mt-6 leading-8 text-stone-600">Ultimate Health Spa offers aesthetic and wellness treatments in Leesburg, Florida. Learn more about the spa and its approach to personalized care.</p><Link to="/about" className="mt-8 inline-block rounded-full bg-stone-900 px-7 py-4 text-white hover:bg-amber-900">Get to know us</Link></div>
  </div></section>;
}
