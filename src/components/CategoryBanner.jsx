
export default function CategoryBanner({ title, eyebrow, description }) {
  return (
    <header className="relative isolate overflow-hidden bg-[#1C3032] px-6 pb-12 pt-24 text-white md:pb-16 md:pt-48">
      {/* Watermark background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/images/banners/ultimate-health-spa-banner.png")',
        }}
        aria-hidden="true"
      />

      {/* Dark overlay for navigation and heading contrast */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#142527]/45 via-[#142527]/30 to-[#142527]/80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {eyebrow && (
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#D4AD65]">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-4xl font-serif text-5xl font-normal leading-tight text-[#FFF8EC] md:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
