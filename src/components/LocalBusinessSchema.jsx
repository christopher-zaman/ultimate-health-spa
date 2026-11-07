
import { business } from "../content/business";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSpa",
    "@id": "https://www.theultimatehealthspa.com/#business",
    name: "Ultimate Health Spa",
    url: "https://www.theultimatehealthspa.com",
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "711 N. 3rd Street, Suite 3",
      addressLocality: "Leesburg",
      addressRegion: "FL",
      postalCode: "34748",
      addressCountry: "US",
    },
    hasMap: business.mapUrl,
    sameAs: [
      "https://www.facebook.com/ultimatehealthspa",
      "https://www.instagram.com/ultimatehealthspa",
      "https://www.yelp.com/biz/ultimate-health-spa-leesburg",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
