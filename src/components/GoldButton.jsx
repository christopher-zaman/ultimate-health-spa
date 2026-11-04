
import { Link } from "react-router-dom";
import "./GoldButton.css";/* Gold CTA with shimmer and fairy dust */
const particles = Array.from({ length: 40 }, (_, i) => ({
  left: `${8 + ((i * 37) % 85)}%`,
  top: `${12 + ((i * 23) % 75)}%`,
  delay: `${(i % 6) * 0.07}s`,
  dx: `${((i * 19) % 100) - 50}px`,
  dy: `${-18 - ((i * 13) % 48)}px`,
}));

export default function GoldButton({
  to,
  href,
  children,
  external = false,
  type,
  disabled = false,
  className = "",
}) {
  const content = (
    <>
      <span className="gold-button__shine-clip" aria-hidden="true">
        <span className="gold-button__shine" />
      </span>
      <span className="gold-button__particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="gold-button__particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              "--dx": p.dx,
              "--dy": p.dy,
            }}
          />
        ))}
      </span>
      <span className="gold-button__label">
        {children} <span aria-hidden="true">↗</span>
      </span>
    </>
  );

  
  const buttonClassName = `gold-button ${className}`;
    if (type === "submit" || type === "button") {
    return (
        <button
        type={type}
        disabled={disabled}
        className={buttonClassName}
        >
        {content}
        </button>
    );
    }

  if (to) {
  return <Link to={to} className={buttonClassName}>{content}</Link>;
}

  return (
    <a
      href={href}
      className={buttonClassName}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {content}
    </a>
  );
}
