import { business, siteConfig } from "@/lib/data";
import { services } from "@/lib/services";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: business.phone,
    email: "precisioneuropeanid@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5792124,
      longitude: -116.2885135,
    },
    image: `${siteConfig.url}/images/audi-r8-sunset-hero.jpg`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "City",
      name: "Boise",
      "@id": "https://www.wikidata.org/wiki/Q35775",
    },
    founder: {
      "@type": "Person",
      name: business.owner,
      jobTitle: "Owner & Lead Technician",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "European Auto Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100094321467629",
      "https://www.instagram.com/precisioneuropean/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
