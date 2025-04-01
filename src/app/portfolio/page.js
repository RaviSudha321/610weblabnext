import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import CallToAction from "../components/callToAction/callToAction";
import Portfolios from "../components/portfolios/portfolios";
import { fetchMetadata } from "../lib/fetchMetadata";


export async function generateMetadata() {
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/portfolio/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function Portfolio(){
    return(
        <div className="portfolios_page">
            <PageBanner 
            title="Our Portfolio"
            />
            <Portfolios />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Portfolio;