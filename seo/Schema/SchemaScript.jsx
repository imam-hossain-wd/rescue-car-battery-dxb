import { SiteConfig } from "@/config/siteConfig";
import { services as allServices } from "@/data/service";


export default function SchemaScript() {
  // Use your full 20-service catalog or provide a fallback if needed
  const services = (allServices && allServices.length > 0) ? allServices : [
    { title: "Mobile Car Battery Replacement", slug: "mobile-car-battery-replacement" },
    { title: "Emergency Roadside Jumpstart", slug: "roadside-jumpstart-service" },
    { title: "BMS ECU Battery Registration", slug: "bms-ecu-battery-registration-coding" },
    { title: "Starter & Alternator Testing", slug: "starter-alternator-diagnostics" },
    { title: "Battery Health Diagnostic Testing", slug: "battery-health-load-testing" },
  ];



  // Helper to ensure fully qualified image URLs
  const getImageUrl = (imagePath) => {
    if (!imagePath || imagePath === "/") return `${SiteConfig.url}/og-image.png`;
    return imagePath.startsWith("http") 
      ? imagePath 
      : `${SiteConfig.url}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoRepair", "AutomotiveBusiness", "EmergencyService", "LocalBusiness"],
        "@id": `${SiteConfig.url}/#organization`,
        "name": SiteConfig.brandName,
        "url": SiteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "@id": `${SiteConfig.url}/#logo`,
          "url": getImageUrl(SiteConfig.logo || SiteConfig.ogImage),
          "contentUrl": getImageUrl(SiteConfig.logo || SiteConfig.ogImage),
          "caption": SiteConfig.brandName,
        },
        "image": {
          "@type": "ImageObject",
          "url": getImageUrl(SiteConfig.ogImage),
        },
        "description": SiteConfig.description,
        "telephone": SiteConfig.displayNumber,
        "email": SiteConfig.email,
        "priceRange": "AED 250 - AED 1500",
        "currenciesAccepted": "AED",
        "paymentAccepted": "Cash, Credit Card, Debit Card, Online Transfer, Apple Pay",
        "foundingDate": String(SiteConfig.foundedYear || "2017"),
        "founder": {
          "@type": "Person",
          "name": SiteConfig.authorName.trim(),
        },
        "hasMap": SiteConfig.GMB?.mapsLink,
        "sameAs": SiteConfig.socialLinks
          .map((s) => s.href)
          .filter((href) => href && href.trim().length > 0 && !href.endsWith(".com/") && href !== "https://www.youtube.com"),
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SiteConfig.streetAddress || SiteConfig.location,
          "addressLocality": SiteConfig.location,
          "addressRegion": SiteConfig.city,
          "postalCode": SiteConfig.postalCode || "00000",
          "addressCountry": "AE",
        },
        // Fallback coordinates if GMB latitude/longitude are empty strings in your config
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": parseFloat(SiteConfig.GMB?.latitude || "25.118107"),
          "longitude": parseFloat(SiteConfig.GMB?.longitude || "55.200608"),
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": SiteConfig.displayNumber,
            "contactType": "customer service",
            "contactOption": "TollFree",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"],
          },
          {
            "@type": "ContactPoint",
            "telephone": SiteConfig.displayNumber,
            "contactType": "emergency",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"],
          },
        ],
        "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": `https://schema.org/${item.day}`,
          "opens": "00:00",
          "closes": "23:59",
        })),
        // Comprehensive GEO footprint covering Dubai, a 35km radius, and all 21 service areas
        "areaServed": [
          {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": parseFloat(SiteConfig.GMB?.latitude || "25.118107"),
              "longitude": parseFloat(SiteConfig.GMB?.longitude || "55.200608"),
            },
            "geoRadius": "35000",
          },
          {
            "@type": "City",
            "name": SiteConfig.city,
            "sameAs": "https://en.wikipedia.org/wiki/Dubai",
          },
          ...SiteConfig.serviceAreas.map((area) => ({
            "@type": "AdministrativeArea",
            "name": `${area.name}, ${SiteConfig.city}`,
          })),
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "15000",
          "bestRating": "5",
          "worstRating": "1",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "24/7 Doorstep Mobile Car Battery Replacement & Roadside Services",
          "itemListElement": (services || []).map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
              "@type": "Service",
              "@id": `${SiteConfig.url}/services/${service.slug || 'battery-replacement'}#service`,
              "name": service.title || service.name,
              "url": `${SiteConfig.url}/services/${service.slug || ''}`,
              "description": service.shortDescription || `Professional 24/7 ${service.title || service.name} service across ${SiteConfig.city} delivered directly to your location within 5-15 minutes by ${SiteConfig.brandName}.`,
              "provider": {
                "@id": `${SiteConfig.url}/#organization`,
              },
              "areaServed": {
                "@type": "City",
                "name": SiteConfig.city,
              },
              "priceCurrency": "AED",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SiteConfig.url}/#website`,
        "url": SiteConfig.url,
        "name": SiteConfig.brandName,
        "description": SiteConfig.description,
        "publisher": {
          "@id": `${SiteConfig.url}/#organization`,
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SiteConfig.url}/services?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}