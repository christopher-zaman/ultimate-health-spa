
import { categories, getServicesByCategory } from "../lib/catalog";
import CategoryCard from "../components/CategoryCard";
import CategoryBanner from "../components/CategoryBanner";
import GoldDivider from "../components/GoldDivider";
import CertificationBadges from "../components/CertificationBadges";

export default function Services() {
  const preview = import.meta.env.DEV;

  return (
    <>
      {/* Shared luxury banner */}
      <CategoryBanner
        title="Explore Our Services"
        eyebrow="ULTIMATE HEALTH SPA"
        description="Browse our treatment categories and find the right place to begin."
      />

      {/* Subtle gold decorative divider */}
      <div className="bg-[#F7F3EC]">
        <GoldDivider />
      </div>

      {/* Treatment categories */}
      <section className="bg-[#F7F3EC] px-6 pb-24 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#B68B3B]">
              DISCOVER OUR SERVICES
            </p>

            <h2 className="font-serif text-4xl font-normal text-[#34291F] md:text-5xl">
              Explore our treatment options
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const count = getServicesByCategory(category.id, {
                includeDrafts: preview,
              }).length;

              return (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={index}
                  subtitle={
                    preview
                      ? `${count} treatments in review`
                      : count
                        ? `${count} treatments`
                        : "View category"
                  }
                />
              );
            })}
          </div>

          <CertificationBadges />
        </div>
      </section>
    </>
  );
}
