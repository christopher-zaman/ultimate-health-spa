
import { business } from "../content/business";
import "./LocationMap.css";

export default function LocationMap() {
  const address = business.address.join(", ");

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <div
      className="location-map"
      role="region"
      aria-label="Ultimate Health Spa location map"
    >
      <iframe
        title="Ultimate Health Spa location in Leesburg, Florida"
        src={mapUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
