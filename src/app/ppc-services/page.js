import CallToAction from "../components/callToAction/callToAction";
import IconBox from "../components/iconBox/iconBox";
import ImageBox from "../components/imageBox/imageBox";
import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import { fetchMetadata } from "../lib/fetchMetadata";
import './ppcServices.css';


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/ppc-services/`;
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
                        <h2 className="sec_title">Full-Fledged PPC Services to grow your business</h2>
                        <p style={{marginTop:"20px"}}>At 610 Web Lab, we offer advanced and 100% result-driven Pay Per Click Services that help your business to attract potential customers and generate leads at a very affordable cost.</p>
                    </div>
                    <div className="service_icon_boxes">
                        <IconBox
                        backgroundColor="#F9F9FF"
                        iconUrl="/images/text-ads.svg"
                        iconWidth="50px"
                        title="Text Ads"
                        description="PPC Text ads are the best way to rank your website on top of the Search Engine Result page instantly for some of the selected keywords. It is the simplest way to showcase your website to potential customers whether they are looking for a service, product, or informational piece of content, we are here to help you to get on top of your customers. We create a tailor-made approach to PPC Text Ads to convert your visitors into customers."
                        />
                        <IconBox
                        backgroundColor="#F1FFFF"
                        iconUrl="/images/display-ads.svg"
                        iconWidth="50px"
                        title="Display Ads"
                        description="Display ads are generally used to create brand awareness by using different website networks partnered with Google. We used creative and highly converting ad copies for a display ad network to create a better reach and awareness across potential customers."
                        />
                        <IconBox
                        backgroundColor="#F8F7F2"
                        iconUrl="/images/shopping-ads.svg"
                        iconWidth="50px"
                        title="Shopping Ads"
                        description="With shopping ads, you can quickly attract customers to your products and induce them to make a purchase. At 610 Web Lab, we have a dedicated team of experts who have years of experience and expertise. We have advanced analysis skills to understand your market competitors and your potential customers who are ready to deal with your business. So don’t lose your chances of making money by selling your items instantly with Shopping ads."
                        />
                        <IconBox
                        backgroundColor="#FFFAFE"
                        iconUrl="/images/retargeting.svg"
                        iconWidth="50px"
                        title="Retargeting"
                        description="Retargeting ads come into play when you want to re-engage the customers that came to your website or e-commerce store but did not complete a customer journey. It sounds amazing that you can only target those customers who have recently visited your website or a promotional link. The conversion rate in Retargeting ads is more than other ads formats because you are marketing those customers who are active buyers and familiar with your business. Get in touch with our support team to sign up today."
                        />
                    </div>
                </div>
            </section>

            <section className="ppc_services_sec">
                <div className="container">
                    <div className="sec_header" style={{maxWidth:"740px", marginInline:"auto", textAlign:"center"}}>
                        <h2 className="sec_title">What we offer in our PPC Service Package</h2>
                        <p style={{marginTop:"20px"}}>At 610 Web Lab, we use advanced tools and creative strategies to create a successful PPC campaign. Learn the complete life cycle of our Pay Per Click ads.</p>
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
                        description="Keywords are the most important factor when it comes to Pay Per Click. We select the most profitable, low-cost keyword that gives you the maximum benefits by spending less."
                        />
                        <ImageBox 
                        imageUrl="/images/ad-copies.webp"
                        title="Creating Ad Copies and Split Testing"
                        description="Our dedicated team of content writers creates the most engaging and highly converting ad copies. Also, we don`t stop at just one, we create different versions of an ad to test and select the best performing ad as final."
                        />
                        <ImageBox 
                        imageUrl="/images/compaign-analysis.webp"
                        title="Post Campaign analysis and optimization"
                        description="Creating and running ads is not the final step, we analyze our campaign and look for the areas that need to be optimized."
                        />
                    </div>
                </div>
            </section>

            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default PpcServices;