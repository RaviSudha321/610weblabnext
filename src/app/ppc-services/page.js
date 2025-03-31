import CallToAction from "../components/callToAction/callToAction";
import Button from '../components/button/button';
import ImageText from "../components/imageText/imageText";
import IconBox from "../components/iconBox/iconBox";
import ImageBox from "../components/imageBox/imageBox";
import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import { fetchMetadata } from "../lib/fetchMetadata";
import './ppcServices.css';


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/ppc-services/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function PpcServices(){
    return(
        <div className="seo_services_page">
            <PageBanner 
            title="Pay Per Click Services"
            description="Spend less and expect more with our expert solutions for pay-per-click services. We are a team of professionals with verified experience. Get in touch with us today"
            />

            <section className="ppc_services_sec">
                <div className="container">
                    <div className="sec_header" style={{maxWidth:"940px", marginInline:"auto", textAlign:"center"}}>
                        <h2 className="sec_title">Full-Fledged PPC Services to Grow Your Business</h2>
                        <p style={{marginTop:"20px"}}>At 610 Web Lab, we offer advanced and 100% result-driven Pay Per Click Services that help your business to attract potential customers and generate leads at a very affordable cost.</p>
                    </div>
                    <div className="service_icon_boxes">
                        <IconBox
                        backgroundColor="#F9F9FF"
                        iconUrl="/images/text-ads.svg"
                        iconWidth="50px"
                        title="Text Ads"
                        description="PPC text ads are a powerful way to position your website at the top of search engine results for highly targeted keywords. Whether you’re promoting a product, service, or content, our tailored ad campaigns ensure your business reaches the right audience at the right time. At 610 WebLab, we craft high-performing text ads that not only improve visibility but also drive real conversions."
                        />
                        <IconBox
                        backgroundColor="#F1FFFF"
                        iconUrl="/images/display-ads.svg"
                        iconWidth="50px"
                        title="Display Ads"
                        description="Display advertising is a great way to increase brand exposure across Google's extensive network of partnered websites. Our team creates visually compelling, high-converting display ads that capture attention and engage potential customers. With creative ad copies and strategic placements, we ensure maximum reach and impact for your business."
                        />
                        <IconBox
                        backgroundColor="#F8F7F2"
                        iconUrl="/images/shopping-ads.svg"
                        iconWidth="50px"
                        title="Shopping Ads"
                        description="Shopping ads are the fastest way to showcase your products and attract buyers ready to make a purchase. Our PPC experts optimize your shopping campaigns with precise targeting, competitor analysis, and performance tracking, ensuring your products appear before customers who are most likely to convert. Don't miss out on sales—start driving revenue with our expert Shopping Ad solutions today!"
                        />
                        <IconBox
                        backgroundColor="#FFFAFE"
                        iconUrl="/images/retargeting.svg"
                        iconWidth="50px"
                        title="Retargeting"
                        description="Did a visitor leave your website without making a purchase? Retargeting ads allow you to reconnect with potential customers who have previously interacted with your website or promotional content. Since these users are already familiar with your brand, retargeting ads boast higher conversion rates than other ad formats. Let us help you bring back lost leads and turn them into loyal customers!"
                        />
                    </div>
                </div>
            </section>

            <section className="ppc_services_sec">
                <div className="container">
                    <div className="sec_header" style={{maxWidth:"740px", marginInline:"auto", textAlign:"center"}}>
                        <h2 className="sec_title">What We Offer in Our PPC Service Package?</h2>
                        <p style={{marginTop:"20px"}}>At 610 WebLab, we use advanced tools and creative strategies to create a successful PPC campaign. Learn the complete life cycle of our Pay Per Click ads.</p>
                    </div>
                    <div className="service_package_offers">
                        <ImageBox 
                        imageUrl="/images/competitive-research.webp"
                        title="Competitive Research"
                        description="We start with brand analysis and competitive research. We note down all the KPIs and highlights of our brands in comparison with the competition. By doing so we become the number 1 choice of the customers."
                        />
                        <ImageBox 
                        imageUrl="/images/keyword-research.webp"
                        title="Keywords Research"
                        description="Keywords are the most important factor when it comes to pay-per-click. We select the most profitable, low-cost keyword that gives you the maximum benefits by spending less."
                        />
                        <ImageBox 
                        imageUrl="/images/ad-copies.webp"
                        title="Creating Ad Copies and Split Testing"
                        description="Our dedicated team of content writers creates the most engaging and highly converting ad copies. Also, we don’t stop at just one, we create different versions of an ad to test and select the best performing ad as final."
                        />
                        <ImageBox 
                        imageUrl="/images/compaign-analysis.webp"
                        title="Post Campaign analysis and optimization"
                        description="Creating and running ads is not the final step; we analyze our campaign and look for the areas that need to be optimized."
                        />
                    </div>
                </div>
            </section>
            <ImageText
                backgroundColor="#f6fcff"
                imageUrl="/images/facebook-ads.webp"
                imageWidth="500"
                imagePosition="left"
                title="Why is Facebook Advertising Important?"
                description={<>
                    Facebook Ads provide a powerful way for businesses of all sizes to reach their ideal audience with precision. With advanced interest targeting and budget flexibility, you can connect directly with potential customers and drive meaningful engagement.
                    <br /><br />
                    From lead generation to large-scale promotions, Facebook marketing keeps you ahead of the competition. Our 610 WebLab team conducts in-depth competitive analysis to ensure your ads reach the right audience and deliver maximum impact.
                    <br /><br />
                    Facebook’s robust tracking tools allow for performance optimization, ensuring every campaign yields the best possible results. If you're ready to boost your sales and scale your business, 610 WebLab is here to help! Our expertise in Facebook’s algorithm and proven success in ad management make us the perfect partner to elevate your brand’s online presence.
                </>}
            />
            <ImageText 
            title="Partner with 610 WebLab for Expert Facebook Ads Solutions"
            description="Maximize your brand’s reach and conversions with 610 Web Lab’s result-driven Facebook Ads solutions. Our team of experts crafts tailored ad strategies that target the right audience, optimize performance, and deliver high ROI. Whether you want to generate leads, increase website traffic, or boost sales, we ensure your ad campaigns drive real business growth."
            contentAboveButton={<div>
                <strong>Targeted Ad Strategies</strong>
                <p>We create data-driven campaigns that reach the most relevant audience, maximizing engagement and conversions.</p>
                <strong>Optimized Performance</strong>
                <p>Our team continuously tracks and refines your ads to improve ROI and lower ad spend.</p>
                <strong>Proven Success</strong>
                <p>With a track record of delivering high-performing campaigns, we help businesses scale effectively with Facebook Ads.</p>
                </div>}
            imageUrl="images/digital-marketing.webp"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="#"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            />
            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default PpcServices;