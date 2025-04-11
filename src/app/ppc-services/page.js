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
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/ppc-services/`;
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
                        backgroundColor="rgb(249, 249, 255)"
                        iconUrl="/images/text-ads.svg"
                        iconWidth="50px"
                        title="Text Ads"
                        description="PPC text ads are a powerful way to position your website at the top of search engine results for highly targeted keywords. Whether you’re promoting a product, service, or content, our tailored ad campaigns ensure your business reaches the right audience at the right time. At 610 WebLab, we craft high-performing text ads that not only improve visibility but also drive real conversions."
                        />
                        <IconBox
                        backgroundColor="rgb(248, 247, 242)"
                        iconUrl="/images/display-ads.svg"
                        iconWidth="50px"
                        title="Display Ads"
                        description="Display advertising is a great way to increase brand exposure across Google's extensive network of partnered websites. Our team creates visually compelling, high-converting display ads that capture attention and engage potential customers. With creative ad copies and strategic placements, we ensure maximum reach and impact for your business."
                        />
                        <IconBox
                        backgroundColor="rgb(241, 255, 255)"
                        iconUrl="/images/shopping-ads.svg"
                        iconWidth="50px"
                        title="Shopping Ads"
                        description="Shopping ads are the fastest way to showcase your products and attract buyers ready to make a purchase. Our PPC experts optimize your shopping campaigns with precise targeting, competitor analysis, and performance tracking, ensuring your products appear before customers who are most likely to convert. Don't miss out on sales—start driving revenue with our expert Shopping Ad solutions today!"
                        />
                        <IconBox
                        backgroundColor="rgb(255, 245, 245)"
                        iconUrl="/images/retargeting.svg"
                        iconWidth="50px"
                        title="Retargeting"
                        description="Did a visitor leave your website without making a purchase? Retargeting ads allow you to reconnect with potential customers who have previously interacted with your website or promotional content. Since these users are already familiar with your brand, retargeting ads boast higher conversion rates than other ad formats. Let us help you bring back lost leads and turn them into loyal customers!"
                        />
                    </div>
                </div>
            </section>

            <section className="offer_ppc_services_sec">
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
                title="Why Does the Modern Business World Depend on PPC Services?"
                description={<>
                    In today’s competitive digital landscape, Pay-Per-Click (PPC) services have become essential for businesses looking to achieve instant visibility, targeted reach, and measurable results. Unlike organic marketing, PPC allows brands to appear at the top of search engine results, drive qualified traffic, and boost conversions quickly. With advanced targeting, businesses can reach potential customers at the right time and place, ensuring a higher ROI and better brand exposure. PPC is a cost-effective, data-driven strategy that fuels business growth in the modern era.
                    <br /><br />
                    At 610 WebLab, we create customized, data-driven PPC campaigns that maximize your ROI and fuel business growth. Ready to boost your online success? Let’s craft a winning PPC strategy for you today!
                </>}
            />
            <ImageText 
            title="Why Choose 610 WebLab as Your PPC Agency?"
            description="At 610 WebLab, we specialize in result-driven PPC strategies that help businesses maximize conversions, reduce ad spend waste, and achieve sustainable growth. Our expert team leverages data-driven insights, advanced targeting, and continuous optimization to ensure your ads perform at their best."
            contentAboveButton={<div>
                <strong>Customized PPC Strategies</strong>
                <p>We craft tailored ad campaigns that align with your business objectives, ensuring maximum conversions.</p>
                <strong>Data-Driven Optimization</strong>
                <p>With in-depth analytics, A/B testing, and performance tracking, we fine-tune your campaigns for higher ROI.</p>
                <strong>Expert PPC Management</strong>
                <p>Our experienced professionals stay updated with the latest PPC trends to keep your business at the forefront of digital marketing.</p>
                </div>}
            imageUrl="images/digital-marketing.webp"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
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