
import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="text-xl font-semibold tracking-wide text-stone-800"
        >
          ULTIMATE <span className="text-amber-700">HEALTH SPA</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition hover:text-amber-700"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-stone-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-800"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          className="text-2xl text-stone-800 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="flex flex-col gap-5 border-t border-stone-100 bg-white px-6 py-6 md:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-stone-700"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-stone-800 px-6 py-3 text-center text-white"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
