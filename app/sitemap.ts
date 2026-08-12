import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://asii-intelligence.vercel.app";

  const routes = ["/", "/services", "/platform", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
