import { SiteConfig } from "@/config/siteConfig";
import { services } from "@/data/service";
// import { services } from "@/data/service";


export default async function sitemap(){
  const baseUrl = SiteConfig.url;
  const now = new Date();

  const staticRoutes = [
    { url: "", priority: 1.0, changeFrequency: "daily" },
    { url: "/services", priority: 0.9, changeFrequency: "weekly"},
    { url: "/battery-brands", priority: 0.8, changeFrequency: "monthly"},
    { url: "/car-brands", priority: 0.8, changeFrequency: "monthly"},
    { url: "/service-area", priority: 0.85, changeFrequency: "weekly"},
    { url: "/about", priority: 0.6, changeFrequency: "monthly"},
    { url: "/contact", priority: 0.7, changeFrequency: "monthly"},
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly"},
    { url: "/terms", priority: 0.3, changeFrequency: "yearly"},
  ];

  const staticPages= staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));


  const servicePages = (services || []).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: service.popular || service.premium ? 0.9 : 0.8,
  }));

  console.log(services, 'services')

  return [
    ...staticPages,
    ...servicePages,
  ];
}