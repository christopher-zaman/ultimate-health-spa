import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { categories } from "../content/categories";
import { business } from "../content/business";

const primary = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const navClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-amber-800 ${isActive ? "text-amber-900" : "text-stone-700"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#F7F3EC]/95 backdrop-blur">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:p-3">Skip to content</a>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="text-lg font-semibold tracking-wide text-[#2C2420]">ULTIMATE <span className="text-amber-800">HEALTH SPA</span></Link>
        <div className="hidden items-center gap-7 md:flex">
          {primary.map(item => <NavLink key={item.path} to={item.path} end={item.path === "/"} className={navClass}>{item.name}</NavLink>)}
          <div className="group relative">
            <button type="button" aria-label="Browse treatment categories" aria-haspopup="true" className="rounded px-2 py-2 text-sm font-medium text-stone-700 focus-visible:outline-2 focus-visible:outline-amber-800">Categories ▾</button>
            <div className="invisible absolute right-0 top-full w-80 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
                {categories.map(c => <Link key={c.id} to={c.path} className="block rounded-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 focus:bg-stone-100">{c.name}</Link>)}
              </div>
            </div>
          </div>
          <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#2C2420] px-5 py-3 text-sm font-medium text-white hover:bg-amber-900">Book Now</a>
        </div>
        <button type="button" className="rounded p-2 text-2xl text-stone-800 md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? "✕" : "☰"}</button>
      </nav>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[75vh] space-y-4 overflow-y-auto border-t border-stone-200 bg-[#F7F3EC] px-6 py-6 md:hidden">
        {primary.map(item => <NavLink key={item.path} to={item.path} className="block text-stone-800" onClick={() => setOpen(false)}>{item.name}</NavLink>)}
        <button type="button" className="w-full text-left font-medium text-stone-800" aria-expanded={showCategories} aria-controls="mobile-categories" onClick={() => setShowCategories(v => !v)}>Treatment categories {showCategories ? "−" : "+"}</button>
        {showCategories && <div id="mobile-categories" className="space-y-3 border-l border-stone-300 pl-4">{categories.map(c => <Link key={c.id} to={c.path} onClick={() => setOpen(false)} className="block text-sm text-stone-700">{c.name}</Link>)}</div>}
        <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" className="block rounded-full bg-[#2C2420] px-5 py-3 text-center text-white">Book Now</a>
      </nav>}
    </header>
  );
}
