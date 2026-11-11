
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { categories } from "../content/categories";
import { business } from "../content/business";
import GoldButton from "./GoldButton";
const primary = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const transparent = location.pathname !== "/privacy" && !scrolled && !open;

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  // Close mobile navigation when navigating to another page.
  useEffect(() => {
    setOpen(false);
    setShowCategories(false);
  }, [location.pathname]);

  const navClass = ({ isActive }) =>
  [
    "text-sm font-medium transition-colors duration-300",
    isActive
      ? "text-[#D4AD65]"
      : transparent
        ? "text-white hover:text-[#F4D993]"
        : "text-[#34291F] hover:text-[#B68B3B]",
  ].join(" ");

  return (
      <header
      className={[
        "sticky top-0 z-50 -mb-[88px] w-full transition-all duration-500",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-[#D9CBB6] bg-[#F7F3EC]/95 shadow-sm backdrop-blur-md",
      ].join(" ")}
      >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:p-3"
      >
        Skip to content
      </a>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5"
      >
      <Link
      to="/"
      className={[
        "flex items-center gap-3 text-lg font-semibold tracking-wide transition-colors duration-300",
        transparent ? "text-white" : "text-[#34291F]",
      ].join(" ")}
    >
      <img
        src="/images/ultimate-health-spa-logo.png"
        alt=""
        className="h-10 w-auto shrink-0 object-contain"
      />

      <span className="whitespace-nowrap">
        ULTIMATE{" "}
        <span className="text-[#D4AD65]">
          HEALTH SPA
        </span>
      </span>
    </Link>

        <div className="hidden items-center gap-7 md:flex">
  <NavLink to="/" end className={navClass}>
    Home
  </NavLink>

  <NavLink to="/about" className={navClass}>
    About
  </NavLink>

  {/* Services dropdown */}
  <div className="group relative">
    <NavLink
      to="/services"
      className={[
        "inline-flex items-center gap-1 rounded px-2 py-2",
        "text-sm font-medium transition-colors duration-300",
        location.pathname.startsWith("/services")
          ? "text-[#D4AD65]"
          : transparent
            ? "text-white hover:text-[#F4D993]"
            : "text-[#34291F] hover:text-[#B68B3B]",
      ].join(" ")}
    >
      Services
      <span aria-hidden="true">▾</span>
    </NavLink>

    <div
      className="
        invisible absolute left-0 top-full z-50 w-80 pt-2
        opacity-0 transition
        group-hover:visible group-hover:opacity-100
        group-focus-within:visible group-focus-within:opacity-100
      "
    >
      <div className="rounded-lg border border-[#D9C7A3] bg-[#FFFCF7] p-2 shadow-[0_16px_40px_rgba(35,28,20,0.14)]">
        <Link
          to="/services"
          className="block rounded-md px-4 py-2.5 text-sm font-semibold text-[#A67C32] hover:bg-[#F9F3E7]"
        >
          View All Services
        </Link>

        <div className="my-1 border-t border-[#E8DCC8]" />

        {categories.map((c) => (
          <Link
            key={c.id}
            to={c.path}
            className="
              block rounded-md border border-transparent
              px-4 py-2.5 text-sm text-[#4B4035]
              transition-all duration-200
              hover:border-[#C8A45E]
              hover:bg-[#F9F3E7]
              hover:text-[#A67C32]
              focus-visible:border-[#C8A45E]
              focus-visible:bg-[#F9F3E7]
              focus-visible:outline-none
            "
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  </div>

  <NavLink to="/contact" className={navClass}>
    Contact
  </NavLink>

  <GoldButton href={business.bookingUrl} external>
    Book Now
  </GoldButton>
</div>

        <button
          type="button"
          className={[
            "rounded p-2 text-2xl md:hidden",
            transparent ? "text-white" : "text-stone-800",
          ].join(" ")}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[75vh] space-y-4 overflow-y-auto border-t border-stone-200 bg-[#F7F3EC] px-6 py-6 md:hidden"
        >
          {primary.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="block text-stone-800"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          <button
            type="button"
            className="w-full text-left font-medium text-stone-800"
            aria-expanded={showCategories}
            aria-controls="mobile-categories"
            onClick={() => setShowCategories((v) => !v)}
          >
            Services {showCategories ? "−" : "+"}
          </button>

          {showCategories && (
            <div
              id="mobile-categories"
              className="space-y-3 border-l border-stone-300 pl-4"
            >
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold text-[#A67C32]"
              >
                View All Services
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.id}
                  to={c.path}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-stone-700"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          )}

          <div className="flex justify-center pt-3">
            <GoldButton href={business.bookingUrl} external>
              Book Now
            </GoldButton>
          </div>
        </nav>
      )}
    </header>
  );
}
