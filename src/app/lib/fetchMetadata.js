import * as cheerio from "cheerio";

export async function fetchMetadata(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data || !data.head) return null;
    
    // Load the HTML using Cheerio (server-safe HTML parsing)
    const $ = cheerio.load(data.head);

    // Extract JSON-LD structured data
    const jsonLdScript = $('script[type="application/ld+json"]').html() || "";

    return {
      title: $("title").text() || "",
      description: $('meta[name="description"]').attr("content") || "",
      openGraph: {
        title: $('meta[property="og:title"]').attr("content") || "",
        description: $('meta[property="og:description"]').attr("content") || "",
        url: $('meta[property="og:url"]').attr("content") || "",
        siteName: "610 Web Lab",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: $('meta[name="twitter:title"]').attr("content") || "",
        description: $('meta[name="twitter:description"]').attr("content") || "",
        creator: $('meta[name="twitter:creator"]').attr("content") || "",
      },
      jsonLd: jsonLdScript, 
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null;
  }
}
