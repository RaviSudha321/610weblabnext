import BlogsGrid from "../components/blogsGrid/blogsGrid";
import CallToAction from "../components/callToAction/callToAction";
import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import { fetchMetadata } from "../lib/fetchMetadata";


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/blog/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function Blog(){
    return(
        <div className="blog_page">
            <PageBanner 
            title="Start, Build & Grow Your Business with 610weblab Blog"
            />
            <BlogsGrid />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Blog;