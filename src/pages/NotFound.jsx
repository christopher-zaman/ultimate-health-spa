import { Link } from "react-router-dom";
export default function NotFound() {
  return <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center"><h1 className="text-6xl text-stone-800">404</h1><p className="mt-4 text-stone-600">We couldn't find that page.</p><Link to="/services" className="mt-7 rounded-full bg-stone-900 px-7 py-3 text-white">Browse services</Link></section>;
}
