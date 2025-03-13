import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import CallToAction from "../components/callToAction/callToAction";
import Portfolios from "../components/portfolios/portfolios";
import { fetchMetadata } from "../lib/fetchMetadata";


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/portfolio/`;
  const metadata = await fetchMetadata(apiUrl);
  console.log('metadata',metadata)
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
            title="Take a look at some of our projects"
            />
            <Portfolios />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Portfolio;