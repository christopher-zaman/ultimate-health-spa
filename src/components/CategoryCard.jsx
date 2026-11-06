
import { Link } from "react-router-dom";

export default function CategoryCard({
  category,
  index,
  subtitle,
}) {
  return (
    <Link
      to={category.path}
      className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden border border-[#D9CBB6] bg-[#FFFCF7] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#B68B3B] hover:shadow-[0_20px_45px_rgba(120,85,40,0.13)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B68B3B]"
    >
      <span className="text-xs tracking-[.2em] text-[#B68B3B]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <h3 className="font-serif text-2xl leading-snug text-[#34291F] transition-colors group-hover:text-[#A77B2E]">
          {category.name}
        </h3>

        {subtitle && (
          <p className="mt-3 text-sm text-[#756B60]">
            {subtitle}
          </p>
        )}

        <span className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.14em] text-[#94703B]">
          EXPLORE TREATMENTS
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-2"
          >
            ↗
          </span>
        </span>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#A77B2E] to-[#F4D993] transition-all duration-500 group-hover:w-full"
      />
    </Link>
  );
}
