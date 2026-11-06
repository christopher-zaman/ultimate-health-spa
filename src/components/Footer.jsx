
import { Link } from "react-router-dom";
import { business } from "../content/business";
import { categories } from "../content/categories";
import { FaFacebookF, FaInstagram, FaYelp } from "react-icons/fa";
import "./Footer.css";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "All Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const gallery = [
  "/images/gallery/footer-1.jpg",
  "/images/gallery/footer-2.jpg",
  "/images/gallery/footer-3.jpg",
  "/images/gallery/footer-4.jpg",
  "/images/gallery/footer-5.jpg",
  "/images/gallery/footer-6.jpg",
];

export default function Footer() {
  return (
    <footer className="spa-footer">

      {/* Animated decorative line */}
      <div className="spa-footer__ambient" aria-hidden="true">
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path
            className="spa-footer__ambient-line"
            d="M-100 450 C250 100 500 650 850 300 S1350 100 1550 400"
          />
        </svg>
      </div>

      <div className="spa-footer__container">
        <div className="spa-footer__grid">
          {/* Brand and contact */}
          <div className="spa-footer__brand">
            <h2>ULTIMATE HEALTH SPA</h2>
            <span className="spa-footer__tagline">
              LEESBURG · FLORIDA
            </span>

            <p>
              Personalized aesthetics and wellness in
              Leesburg, Florida.
            </p>

            <address>
              {business.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>

            <a href={business.phoneHref}>
              {business.phone}
            </a>

            <a href={`mailto:${business.email}`}>
              {business.email}
            </a>

            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="spa-footer__directions"
            >
              GET DIRECTIONS ↗
            </a>
          </div>

          {/* Navigation */}
          <div className="spa-footer__column">
            <h3>Navigate</h3>

            <nav aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="spa-footer__link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* All categories */}
          <div className="spa-footer__column">
            <h3>Explore</h3>

            <nav aria-label="Treatment categories">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.path}
                  className="spa-footer__link"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Gallery */}
          <div className="spa-footer__gallery-column">
            <h3>Follow Our Journey</h3>

            <div className="spa-footer__gallery">
              {gallery.map((src, index) => (
                <Link
                  to="/about"
                  key={src}
                  aria-label={`Explore Ultimate Health Spa gallery image ${index + 1}`}
                >
                  <img
                    src={src}
                    alt={`Ultimate Health Spa gallery ${index + 1}`}
                    loading="lazy"
                    width="160"
                    height="120"
                  />
                </Link>
              ))}
            </div>

            
<div className="spa-footer__social">
  <span className="spa-footer__social-label">FOLLOW US</span>
    <div className="spa-footer__social-icons">
      <a
        href="https://www.facebook.com/ultimatehealthspa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ultimate Health Spa on Facebook"
        className="spa-footer__social-icon"
      >
        <FaFacebookF aria-hidden="true" />
      </a>
      <a
        href="https://www.instagram.com/ultimatehealthspa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ultimate Health Spa on Instagram"
        className="spa-footer__social-icon"
      >
        <FaInstagram aria-hidden="true" />
      </a>
      <a
        href="https://www.yelp.com/biz/ultimate-health-spa-leesburg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ultimate Health Spa on Yelp"
        className="spa-footer__social-icon"
      >
        <FaYelp aria-hidden="true" />
      </a>
    </div>
  </div>
          </div>
        </div>

        <div className="spa-footer__bottom">
          <span>
            © {new Date().getFullYear()} Ultimate Health Spa.
            All rights reserved.
          </span>

          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
