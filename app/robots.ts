import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://sukhrob-ziyovuudinov.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard",
        "/review",
        "/report",
        "/success"
      ]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
