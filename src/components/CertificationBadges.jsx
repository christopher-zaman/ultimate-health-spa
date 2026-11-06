import "./CertificationBadges.css";
const certifications = [
  {
    id: "oshot",
    name: "O-Shot®",
    title: "Certified O-Shot® Provider",
    image:
      "https://oshot.info/members/?cmab_badge=oshot-horizontal-hfnwrm8xjsfj",
    url: "https://oshot.info/members/directory/",
  },
  {
    id: "pshot",
    name: "P-Shot®",
    title: "Certified Priapus Shot® (P-Shot®) Provider",
    image:
      "https://priapusshot.com/members/?cmab_badge=pshot-horizontal-mrj2jogfv4ag",
    url: "https://priapusshot.com/members/directory/",
  },
];

export default function CertificationBadges({
  variant = "default",
}) {
  return (
    <section
      className={`certification-badges certification-badges--${variant}`}
      aria-label="Professional certifications"
    >
      <div className="certification-badges__inner">
        {certifications.map((certification) => (
          <a
            key={certification.id}
            href={certification.url}
            target="_blank"
            rel="noopener noreferrer"
            title={certification.title}
            aria-label={certification.title}
            className="certification-badges__link"
          >
            <img
              src={certification.image}
              alt={`${certification.title} – Cellular Medicine Association`}
              width="340"
              height="92"
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
