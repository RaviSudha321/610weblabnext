import Experience from "../components/experience/experience";
import Mission from "../components/mission/mission";
import PageBanner from "../components/pageBanner/pageBanner";
import Qualities from "../components/qualities/qualities";
import Team from "../components/team/team";
import Testimonials from "../components/testimonials/testimonials";
import WhatWeDo from "../components/whatWeDo/whatWeDo";

export const metadata = {
    title: "About Us - Your Company Name",
    description: "Learn more about our company, mission, and team. We provide top-notch services.",
  };

function About(){
    return(
        <div className="about_page">
            <PageBanner 
            title="It’s always about You at 610weblab eServices!"
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