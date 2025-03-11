import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import CallToAction from "../components/callToAction/callToAction";
import Portfolios from "../components/portfolios/portfolios";

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