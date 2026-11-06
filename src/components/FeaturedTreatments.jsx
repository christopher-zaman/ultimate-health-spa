
import { Link } from "react-router-dom";
import { categories } from "../content/categories";
import GoldButton from "./GoldButton";
import CategoryCard from "./CategoryCard";

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
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
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
