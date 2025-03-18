import CallToAction from "../components/callToAction/callToAction";
import IconBox from "../components/iconBox/iconBox";
import ImageText from "../components/imageText/imageText";
import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import { fetchMetadata } from "../lib/fetchMetadata";
import './facebookAds.css'


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/facebook-ads/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function FacebookAds(){
    return(
        <div className="social_media_marketing_page">
            <PageBanner 
            title="Facebook Ads"
            description="Leverage the most advanced Facebook ads services and attract more customers to your business. Create brand awareness, generate leads, sell your product/services with our tailored Facebook ads."
            />

            <ImageText 
            imageUrl="/images/facebook-ads.webp"
            imageWidth="500"
            imagePosition="left"
            title="How can Facebook ads help my businesses to grow?"
            description="Facebook ads are built to target a very specific range of customers which are relevant. At 610 Web Lab, our marketers are so professional that they completely understand your marketing goal, they study the audience behavior and analyze the strategies of competitors, then we built a perfect strategy to target the people on Facebook. If you are interested to know that why businesses use Facebook ads and how to get benefits out of them, then read the very best advantages of using Facebook Ads for your business"
            />

            <section className="iconboxes_sec">
                <div className="container">
                    <div className="iconboxes">
                        <IconBox 
                        backgroundColor="#F9F9FF"
                        iconUrl="/images/exact-audience.svg"
                        iconWidth="38px"
                        title="Target Exact Audience with our Facebook ads:"
                        description="Facebook ads are built to target a very specific range of customers which are relevant. Our team targets only the relevant audience and pushes Facebook to show the ads only to the customers who are more likely to get converted into leads. With this strategy, you can get high-quality leads by spending a very little amount."
                        />
                        
                        <IconBox 
                        backgroundColor="#F1FFFF"
                        iconUrl="/images/web-traffic.svg"
                        iconWidth="46px"
                        title="Drive traffic directly to your app, store, and website:"
                        description="With the help of Facebook ads you can direct your audience from Facebook to directly to your app store, website, or other landing pages you wish customers to visit. It is a cost-effective solution to get website visits or app store visits."
                        />

                        <IconBox 
                        backgroundColor="#F8F7F2"
                        iconUrl="/images/group-of-people.svg"
                        iconWidth="46px"
                        title="Reach a wide range of Audiences:"
                        description="Either you are looking to widely spread your brand or get some loyal customers for your business, Facebook is the best place to achieve your business goals. At Facebook, you can target millions of people around the globe."
                        />

                        <IconBox 
                        backgroundColor="#F9F9FF"
                        iconUrl="/images/return-of-investment.svg"
                        iconWidth="46px"
                        title="Get the highest return on ad Spend (ROAS):"
                        description="Facebook ads allow you to target a specific group of people so that you only pay to show your ads only to the customers who are more likely to get converted into your customers."
                        />

                        <IconBox 
                        backgroundColor="#F1FFFF"
                        iconUrl="/images/lead-generation.svg"
                        iconWidth="46px"
                        title="Generate Leads at a low cost:"
                        description="Facebook offers lead generation campaigns that help you to collect leads for your business at a very affordable cost. With inbuilt and customizable sign-up form to collect leads is an instant and most convenient option when it comes to high-quality lead generation."
                        />
                    </div>
                </div>
            </section>

            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default FacebookAds;