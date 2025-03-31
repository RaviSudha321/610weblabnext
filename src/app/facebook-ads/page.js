import CallToAction from "../components/callToAction/callToAction";
import Button from '../components/button/button';
import IconBox from "../components/iconBox/iconBox";
import ImageText from "../components/imageText/imageText";
import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import {fetchMetadata} from "../lib/fetchMetadata";
import './facebookAds.css'


export async function generateMetadata() {
    const apiUrl=`https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/facebook-ads/`;
    const metadata=await fetchMetadata(apiUrl);

    return {
        title: metadata?.title||"Default Title",
        description: metadata?.description||"Default Description",
        openGraph: metadata?.openGraph||{},
        twitter: metadata?.twitter||{},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

function FacebookAds() {
    return (
        <div className="social_media_marketing_page">
            <PageBanner
                title="Facebook Ads Services"
                description="At 610 WebLab, we offer the most advanced Facebook Ads Services. Leverage our expertise to create brand awareness, generate leads, and sell your product/services. Attract more customers to your business and boost your success with our tailored ads."
            />
                <ImageText
                    imageUrl="/images/facebook-ads.webp"
                    imageWidth="500"
                    imagePosition="left"
                    title="What is Facebook Advertising?"
                    description={<>
                        Facebook offers one of the best opportunities to target the right audience and build powerful sales funnels. It’s a strategic digital marketing approach that helps businesses promote their products or services to a vast audience. But to truly maximize results, you need expert guidance.
                        <br /><br />
                        At 610 WebLab, we craft high-performing Facebook ad campaigns tailored to your business goals. Whether you're looking to boost brand awareness, drive conversions, or scale your sales, our expertise ensures you get the best return on investment. Partner with us and take your Facebook advertising to the next level!
                    </>}
                />
            <section className="facebook_helps_businesses iconboxes_sec">
                <div className="container">
                    <h2 className='sec_title'>How Can Facebook Ads Help Businesses Grow?</h2>
                    <div className='description'>Facebook ads are built to target a very specific range of customers, which are relevant. At 610 WebLab, our marketers are so professional that they completely understand your marketing goal. They studied the audience behavior and analyzed the strategies of competitors, then we built a perfect strategy to target the people on Facebook.</div>
                    <div className='description'>If you are interested to know why businesses use Facebook ads and how to get benefits out of them, then read the very best advantages of using Facebook Ads for your business:</div>
                    <div className="iconboxes">
                        <IconBox
                            backgroundColor="#F9F9FF"
                            iconUrl="/images/exact-audience.svg"
                            iconWidth="38px"
                            title="Target the Right Audience"
                            description="Facebook Ads are designed to reach the most relevant customers. Our team ensures your ads are shown only to high-potential leads, maximizing conversions while keeping costs low."
                        />

                        <IconBox
                            backgroundColor="#F1FFFF"
                            iconUrl="/images/web-traffic.svg"
                            iconWidth="46px"
                            title="Drive Traffic to Your Website or App"
                            description="Direct users from Facebook straight to your website, app store, or landing pages. This cost-effective strategy increases visits and boosts engagement."
                        />

                        <IconBox
                            backgroundColor="#F8F7F2"
                            iconUrl="/images/group-of-people.svg"
                            iconWidth="46px"
                            title="Expand Your Reach Globally"
                            description="Whether you're growing brand awareness or building a loyal customer base, Facebook allows you to connect with millions worldwide."
                        />

                        <IconBox
                            backgroundColor="#F9F9FF"
                            iconUrl="/images/return-of-investment.svg"
                            iconWidth="46px"
                            title="Maximize Your Return on Ad Spend (ROAS)"
                            description="Target the right audience and pay only for ads shown to users most likely to convert, ensuring a high return on investment."
                        />

                        <IconBox
                            backgroundColor="#F1FFFF"
                            iconUrl="/images/lead-generation.svg"
                            iconWidth="46px"
                            title="Generate Quality Leads at Low Cost"
                            description="Leverage Facebook’s lead generation campaigns with built-in, customizable sign-up forms to collect high-quality leads effortlessly and affordably."
                        />
                    </div>
                </div>
            </section>
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
                        icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                    />
                }
            />
            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default FacebookAds;