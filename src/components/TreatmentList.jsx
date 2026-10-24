
function TreatmentList({ title, treatments }) {
  if (!treatments?.length) return null;

  return (
    <section className="mt-14">
      <h3 className="mb-8 text-3xl font-light text-stone-800">
        {title}
      </h3>

      <div className="grid gap-5 sm:grid-cols-2">
        {treatments.map((treatment) => (
          <article
            key={treatment.id}
            className="rounded-2xl border border-stone-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h4 className="text-xl font-medium text-stone-800">
              {treatment.name}
            </h4>

            {treatment.description ? (
              <p className="mt-3 leading-7 text-stone-600">
                {treatment.description}
              </p>
            ) : (
              <p className="mt-3 text-sm text-stone-500">
                Treatment details coming soon.
              </p>
            )}

            {treatment.price && (
              <p className="mt-4 font-medium text-amber-800">
                {treatment.price}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default TreatmentList;
