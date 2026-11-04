
import { Link } from "react-router-dom";
import { categories } from "../content/categories";
import GoldButton from "./GoldButton";

export default function FeaturedTreatments() {
  return (
    <section
      id="services"
      className="bg-[#F7F3EC] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#B68B3B]">
            THE ULTIMATE HEALTH SPA EXPERIENCE
          </p>

          <h2 className="font-serif text-5xl font-normal leading-tight tracking-tight text-[#2C2420] md:text-7xl">
            Discover Your
            <span className="block bg-gradient-to-r from-[#A77B2E] via-[#D5AE61] to-[#A77B2E] bg-clip-text text-transparent">
              Perfect Treatment.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#675B50]">
            Explore our collection of aesthetic and wellness treatments,
            thoughtfully designed around your individual goals.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.path}
              className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden border border-[#D9CBB6] bg-[#FFFCF7] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#B68B3B] hover:shadow-[0_20px_45px_rgba(120,85,40,0.13)]"
            >
              <span className="text-xs tracking-[.2em] text-[#B68B3B]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="font-serif text-2xl leading-snug text-[#34291F] transition-colors group-hover:text-[#A77B2E]">
                  {category.name}
                </h3>

                <span className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.14em] text-[#94703B]">
                  EXPLORE TREATMENTS
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    ↗
                  </span>
                </span>
              </div>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#A77B2E] to-[#F4D993] transition-all duration-500 group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <GoldButton to="/services">
            VIEW ALL SERVICES
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
