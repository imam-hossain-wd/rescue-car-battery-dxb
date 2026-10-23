import { SiteConfig } from "@/config/siteConfig";

export const siteMetadata = {
  home: {
    title: "24/7 Mobile Car Battery Replacement Dubai | 5-15 Min Response",
    description: `Fast 24/7 mobile car battery replacement in Dubai arriving in 5–15 mins. On-site installation, BMS ECU coding & alternator testing. Call ${SiteConfig.displayNumber}.`,
      verification: {
      google: "",
    },
    alternates: {
      canonical: SiteConfig.url,
    },
  },

  services: {
    title: "Mobile Car Battery Services Dubai | On-Site Replacement & Diagnostics",
    description: "Explore 24/7 mobile car battery services in Dubai: AGM, EFB & Gel battery replacement, computer BMS coding, jumpstarts & battery health testing.",
    alternates: {
      canonical: `${SiteConfig.url}/services`,
    },
  },

  batteryBrands: {
    title: "Car Battery Brands in Dubai | Varta, Amaron, Solite, Bosch & ACDelco",
    description: "100% genuine car batteries in Dubai with up to 48 months warranty. Genuine stock for Varta, Amaron, Solite, Optima, Delkor, Bosch, and 15+ top brands.",
    alternates: {
      canonical: `${SiteConfig.url}/battery-brands`,
    },
  },

  carBrands: {
    title: "Car Battery Replacement by Car Make | Luxury, European & Asian Specialists",
    description: "Specialized mobile battery replacement & BMS ECU registration for Toyota, Nissan, BMW, Mercedes-Benz, Audi, Porsche, Range Rover, and American SUVs.",
    alternates: {
      canonical: `${SiteConfig.url}/car-brands`,
    },
  },

  serviceArea: {
    title: "Mobile Car Battery Replacement Areas Dubai | 21+ Districts Covered",
    description: "24/7 mobile battery replacement covering 21+ Dubai areas: Marina, Business Bay, Downtown, Deira, Jumeirah, Silicon Oasis & Sheikh Zayed Rd.",
    alternates: {
      canonical: `${SiteConfig.url}/service-area`,
    },
  },

  about: {
    title: `About ${SiteConfig.brandName} | Trusted Battery Specialists Dubai`,
    description: `Operating since ${SiteConfig.foundedYear}, ${SiteConfig.brandName} delivers 24/7 mobile battery replacement across Dubai with certified mechanics & 100% genuine parts.`,
    alternates: {
      canonical: `${SiteConfig.url}/about`,
    },
  },

  contact: {
    title: `Contact 24/7 Mobile Battery Rescue Dubai | Call ${SiteConfig.displayNumber}`,
    description: `Need an emergency battery change or jumpstart in Dubai? Contact our 24/7 dispatch team via phone or WhatsApp. Rapid 5-15 min arrival guaranteed!`,
    alternates: {
      canonical: `${SiteConfig.url}/contact`,
    },
  },

  privacy: {
    title: `Privacy Policy | ${SiteConfig.brandName}`,
    description: `Official privacy policy for ${SiteConfig.brandName}. Learn how we protect customer data, GPS dispatch location tracking, and secure service processing.`,
    alternates: {
      canonical: `${SiteConfig.url}/privacy`,
    },
  },

  terms: {
    title: `Terms of Service & Warranty Policy | ${SiteConfig.brandName}`,
    description: `Official service terms, 12-48 month battery warranty policies, upfront pricing guarantees, and emergency mobile dispatch rules for ${SiteConfig.brandName}.`,
    alternates: {
      canonical: `${SiteConfig.url}/terms`,
    },
  },
};