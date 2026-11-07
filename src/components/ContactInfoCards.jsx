
import { business } from "../content/business";
import "./ContactInfoCards.css";

export default function ContactInfoCards() {
  return (
    <section
      className="contact-info"
      aria-label="Spa contact information"
    >
      <div className="contact-info__inner">

        <div className="contact-info__card">
          <span className="contact-info__icon" aria-hidden="true">
            ☎
          </span>

          <h2>Call Our Spa</h2>

          <p>
            Questions about treatments or appointments?
            Our team is happy to help.
          </p>

          <a href={business.phoneHref}>
            {business.phone}
          </a>
        </div>

        <div className="contact-info__card">
          <span className="contact-info__icon" aria-hidden="true">
            ✉
          </span>

          <h2>Email Us</h2>

          <p>
            Send us your questions and we'll get back
            to you as soon as possible.
          </p>

          <a href={`mailto:${business.email}`}>
            {business.email}
          </a>
        </div>

        <div className="contact-info__card">
          <span className="contact-info__icon" aria-hidden="true">
            ✧
          </span>

          <h2>Visit Our Spa</h2>

          <address>
            {business.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>

          <div className="contact-info__hours">
            {business.hours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </div>

          <a
            href={business.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions ↗
          </a>
        </div>

      </div>
    </section>
  );
}
