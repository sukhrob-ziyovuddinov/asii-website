import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sukhrob-ziyovuudinov.vercel.app";

  const routes = [
    "/",
    "/services",
    "/investigations",
    "/pilot",
    "/resources",
    "/contact",
    "/signals",
    "/continuity"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
