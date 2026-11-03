
import { useEffect, useRef } from "react";
import GoldButton from "../components/GoldButton";
import { business } from "../content/business";
import "./About.css";

const treatments = [
  "Facials & Skincare",
  "Botox & Dermal Fillers",
  "Microneedling",
  "Morpheus8",
  "Rejuran Skin Rejuvenation",
  "Waxing & Lashes",
  "Body Contouring",
  "Wellness & Injections",
  "ExoMind TMS Therapy",
  "EmpowerRF",
];

function ServiceTicker() {
  const content = treatments.map((name) => (
    <span className="about-ticker__item" key={name}>
      {name}
      <span className="about-ticker__star" aria-hidden="true">✦</span>
    </span>
  ));

  return (
    <div className="about-ticker" aria-label="Our spa treatments">
      <div className="about-ticker__track">
        <div className="about-ticker__group">{content}</div>
        <div className="about-ticker__group" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const elements = pageRef.current?.querySelectorAll(".about-reveal");
    if (!elements?.length) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page" ref={pageRef}>
      {/* 1. PHOTOGRAPHIC HERO */}
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="about-eyebrow">
            WELCOME TO ULTIMATE HEALTH SPA
          </p>

          <h1>
            Beauty.
            <br />
            Wellness.
            <br />
            <span className="about-gold-text">Elevated.</span>
          </h1>

          <p className="about-hero__subtitle">
            Leesburg's best-kept secret for medical aesthetics,
            body wellness, and self-care.
          </p>

          <GoldButton to="/services">
            EXPLORE OUR SERVICES
          </GoldButton>
        </div>

        <span className="about-scroll-hint" aria-hidden="true">
          SCROLL TO DISCOVER ↓
        </span>
      </section>

      {/* 2. OUR STORY */}
      <section className="about-story" aria-label="About our spa">
        <div className="about-story__row">
          <div className="about-story__copy about-reveal from-left">
            <p className="about-eyebrow">ABOUT US</p>

            <h2>
              A Hidden Gem
              <br />
              <span className="about-gold-text">
                in Leesburg, Florida
              </span>
            </h2>

            <p>
              Welcome to Ultimate Health Spa — Leesburg's
              best-kept secret for medical aesthetics, body
              wellness, and self-care. Tucked away on North
              3rd Street near downtown Leesburg, Florida,
              our boutique spa delivers Beverly Hills–level
              results with the warm, personal touch of
              Southern hospitality.
            </p>

            <p>
              Conveniently located just minutes from The
              Villages, Mount Dora, Tavares, and Clermont,
              we serve Lake, Marion and Sumter counties
              and beyond — and we're worth the trip.
            </p>

            <h3>What Makes Us Different</h3>

            <p>
              From the moment you walk through our doors,
              you'll feel the difference. Our boutique
              space was designed to create a "wow"
              experience — relaxing, upscale, and unlike
              anything else in the area.
            </p>

            <p>
              Our highly trained providers use the latest
              technology in aesthetics and wellness to
              deliver real, lasting results that are
              customized just for you.
            </p>
          </div>

          <div className="about-story__image about-reveal from-right">
            <img
              src="/images/about/treatment-facial.jpeg"
              alt="A facial treatment being performed at Ultimate Health Spa"
              loading="lazy"
              width="1000"
              height="1000"
            />
          </div>
        </div>

        {/* 3. SERVICES & EXPERIENCE */}
        <div className="about-story__row about-story__row--reverse">
          <div className="about-story__image about-reveal from-left">
            <img
              src="/images/about/treatment-skincare.jpeg"
              alt="An aesthetic skincare treatment at Ultimate Health Spa"
              loading="lazy"
              width="1000"
              height="1000"
            />
          </div>

          <div className="about-story__copy about-reveal from-right">
            <p className="about-eyebrow">OUR SERVICES</p>

            <h2>
              Luxury You Can
              <br />
              <span className="about-gold-text">
                Actually Afford
              </span>
            </h2>

            <p>
              We offer a wide range of medical aesthetic
              and wellness treatments for both women
              and men:
            </p>

            <ul className="about-services-list">
              <li>
                <strong>Botox & Dermal Fillers</strong> —
                Natural, youthful results without the
                overdone look, administered by Amanda
                Gaskin, Nurse Injector and owner.
              </li>
              <li>
                <strong>Rejuran Skin Rejuvenation,
                Microneedling & Morpheus8</strong> —
                Advanced skin treatments that repair,
                tighten, and renew.
              </li>
              <li>
                <strong>Waxing, Facials & Lash Extensions</strong> —
                Everyday beauty services for everyday
                confidence.
              </li>
              <li>
                <strong>ExoMind TMS Therapy</strong> —
                A non-invasive treatment that supports
                mental clarity and emotional wellness.
              </li>
              <li>
                <strong>InMode EmpowerRF</strong> —
                Including Vtone, FormaV, and Tone for
                women's health and body sculpting.
              </li>
              <li>
                <strong>Medically-guided weight loss</strong> —
                With GLP-1 options.
              </li>
            </ul>

            <p>
              Whether you're looking for anti-aging
              treatments, skin rejuvenation, body
              contouring, or wellness support, we have
              a solution tailored to your goals!
            </p>

            <p>
              At Ultimate Health Spa, we believe everyone
              deserves to feel their best — without the
              Beverly Hills price tag. We make high-quality
              aesthetic care accessible, effective, and
              transformative for the Leesburg community
              and beyond.
            </p>

            <p>
              Residents from Leesburg, The Villages,
              Mount Dora, Tavares, Eustis, Clermont, and
              surrounding areas trust Ultimate Health Spa
              for their aesthetic and wellness needs.
              We're proud to be Lake County's hidden gem
              for medical spa services.
            </p>

            <GoldButton to="/services">
              DISCOVER OUR TREATMENTS
            </GoldButton>
          </div>
        </div>
      </section>

      {/* SLIM SCROLLING SERVICE BANNER */}
      <ServiceTicker />

      {/* 4. CINEMATIC BOOKING FEATURE */}
      <section className="about-feature">
        <div className="about-feature__content">
          <p className="about-eyebrow">
            THE ULTIMATE HEALTH SPA EXPERIENCE
          </p>

          <div
            className="about-marquee"
            aria-label="Discover your glow"
          >
            <div className="about-marquee__track" aria-hidden="true">
              <span>
                DISCOVER YOUR GLOW ✦ REFINED BEAUTY ✦
              </span>
              <span>
                DISCOVER YOUR GLOW ✦ REFINED BEAUTY ✦
              </span>
            </div>
          </div>

          <h2>Discover Luxury Close to Home</h2>

          <p>
            Located in Leesburg, Florida. Book your
            appointment today and discover the luxury
            you didn't know was right here all along.
          </p>

          <GoldButton href={business.bookingUrl} external>
            BOOK YOUR EXPERIENCE
          </GoldButton>
        </div>
      </section>

      {/* CANCELLATION POLICY */}
      <section className="about-policy">
        <div className="about-policy__inner about-reveal from-left">
          <p className="about-eyebrow">
            BEFORE YOUR VISIT
          </p>

          <h2>Cancellation Policy</h2>

          <p>
            Ultimate Health Spa charges a 20% fee for
            no-shows or cancellations within 48 hours
            of the scheduled appointment.
          </p>
        </div>
      </section>
    </div>
  );
}
