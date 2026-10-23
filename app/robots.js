// app/robots.js
import { SiteConfig } from "@/config/siteConfig";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${SiteConfig.url}/sitemap.xml`,
    host: SiteConfig.url,
  };
}