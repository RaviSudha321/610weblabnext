import Experience from "../components/experience/experience";
import Mission from "../components/mission/mission";
import PageBanner from "../components/pageBanner/pageBanner";
import Qualities from "../components/qualities/qualities";
import Team from "../components/team/team";
import Testimonials from "../components/testimonials/testimonials";
import WhatWeDo from "../components/whatWeDo/whatWeDo";
import { fetchMetadata } from "../lib/fetchMetadata";

export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/about-us/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function About(){
    return(
        <div className="about_page">
            <PageBanner 
            title="It’s always about You at 610weblab eServices!!!"
            />
            <WhatWeDo />
            <Mission />
            <Experience />
            <Qualities />
            <Team />
            <Testimonials />
        </div>
    )
}

export default About; 