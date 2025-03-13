import Button from "../components/button/button";
import Hirings from "../components/hirings/hirings";
import ImageText from "../components/imageText/imageText";
import PageBanner from "../components/pageBanner/pageBanner";
import SelectionProcess from "../components/selectionProcess/selectionProcess";
import Testimonials from "../components/testimonials/testimonials";
import WorkCulture from "../components/workCulture/workCulture";
import { fetchMetadata } from "../lib/fetchMetadata";


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/career/`;
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

function Careers(){
    return(
        <div className="careers_page">
            <PageBanner
            title="Join Our Team!"
            description="Check out our current job openings and shoot us your resume, links or whatever best tells your story."
            />
            <Hirings />
            <SelectionProcess />
            <ImageText 
            title="One Team, One Heart, One Legacy."
            description="At eSparkBiz, we cultivate a positive workplace where happy employees are our top priority. Our work culture ensures we hire the right people and give them the freedom for creativity and a result-driven work atmosphere to solve incremental challenges and add value. Career growth is most important for work satisfaction, and we provide ample opportunities, infrastructure, and work environment to our employees to achieve it."
            buttons={<Button title="Join Our Team" link="/contact-us" />}
            imageUrl="images/team-trip.webp"
            imageWidth="630"
            />
            <WorkCulture />
            <Testimonials />
        </div>
    )
}

export default Careers;