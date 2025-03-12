import { NextResponse } from "next/server";

export async function GET() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://610weblab.in/610weblab/";
    const wpApiUrl = process.env.NEXT_PUBLIC_WP_REST_API_URL || "https://610weblab.in/610weblab/wp-json/wp/v2";

    try {
        // Fetch posts & pages from WordPress API
        const [postsRes, pagesRes] = await Promise.all([
            fetch(`${wpApiUrl}/posts?per_page=100&_fields=id,slug,modified`),
            fetch(`${wpApiUrl}/pages?per_page=100&_fields=id,slug,modified`)
        ]);

        if (!postsRes.ok || !pagesRes.ok) throw new Error("Failed to fetch data");

        const [posts, pages] = await Promise.all([postsRes.json(), pagesRes.json()]);

        // Generate sitemap XML
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${siteUrl}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>1.0</priority>
            </url>
            ${posts
                .map(post => `
                <url>
                    <loc>${siteUrl}blog/${post.slug}</loc>
                    <lastmod>${new Date(post.modified).toISOString()}</lastmod>
                    <priority>0.8</priority>
                </url>`)
                .join("")}
            ${pages
                .filter(page => page.slug !== "home")
                .map(page => `
                <url>
                    <loc>${siteUrl}${page.slug}</loc>
                    <lastmod>${new Date(page.modified).toISOString()}</lastmod>
                    <priority>0.7</priority>
                </url>`)
                .join("")}
        </urlset>`;

        return new NextResponse(sitemap, {
            headers: {
                "Content-Type": "application/xml",
            },
        });
    } catch (error) {
        console.error("Error generating sitemap:", error);
        return new NextResponse("Error generating sitemap", { status: 500 });
    }
}
