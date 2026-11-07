
import GoldButton from "./GoldButton";

export default function CategoryCard({
  category,
  index,
  subtitle,
}) {
  return (
    <article
      className="group relative flex min-h-[240px] flex-col overflow-hidden border border-[#D9CBB6] bg-[#FFFCF7] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#B68B3B] hover:shadow-[0_20px_45px_rgba(120,85,40,0.13)]"
    >
      {/* Category number */}
      <span className="text-xs tracking-[.2em] text-[#B68B3B]">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Category information */}
      <div className="mt-8 flex flex-1 flex-col">
        <h3 className="font-serif text-2xl leading-snug text-[#34291F] transition-colors duration-300 group-hover:text-[#A77B2E]">
          {category.name}
        </h3>

        {subtitle && (
          <p className="mt-3 text-sm text-[#756B60]">
            {subtitle}
          </p>
        )}

        {/* Same GoldButton, fitted to category card width */}
        <div className="mt-auto pt-6">
          <GoldButton
            to={category.path}
            className="!w-full !px-3 !text-[11px] !tracking-normal"
          >
            <span className="whitespace-nowrap">
              EXPLORE TREATMENTS
            </span>
          </GoldButton>
        </div>
      </div>

      {/* Animated gold bottom border */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#A77B2E] to-[#F4D993] transition-all duration-500 group-hover:w-full"
      />
    </article>
  );
}
