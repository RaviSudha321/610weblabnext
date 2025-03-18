import './digitalMarketing.css';
import Button from '../components/button/button';
import CallToAction from '../components/callToAction/callToAction';
import PageBanner from '../components/pageBanner/pageBanner';
import TechTag from '../components/techTag/techTag';
import Testimonials from '../components/testimonials/testimonials';
import WebServiceBox from '../components/webServiceBox/webServiceBox';
import ImageText from '../components/imageText/imageText';
import PortfoliosGrid from '../components/portfoliosGrid/portfoliosGrid';
import { fetchMetadata } from '../lib/fetchMetadata';


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/digital-marketing-services/`;
  const metadata = await fetchMetadata(apiUrl);
  
  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}


function DigitalMarketing(){

    const techDescription = [
        "Looking to give your business an instant boost? At 610 Web Lab, our digital marketing agency is here to help you soar to new heights. We specialize in crafting tailored marketing strategies that drive traffic, increase engagement, and maximize sales. Whether it's SEO, social media, or content marketing, we’ve got the tools and expertise to elevate your brand.",
        "Partner with us and watch your online presence grow effortlessly. Our dedicated team works closely with you to understand your business needs and deliver results that exceed expectations."
    ]

    return(
        <div className="digital_marketing_page">
            <PageBanner 
            title="Digital Marketing Services"
            description="Unlock the power of the internet with 610 Web Lab's top-notch Digital Marketing Services. We specialize in boosting your online presence, driving traffic, and increasing sales through SEO, social media, content marketing, and more. Let us help you reach your digital goals effortlessly and efficiently."
            />
            <TechTag
            title="Get Instant Boost To Your Business With Our Digital Marketing Agency"
            description={techDescription}
            />

            <ImageText 
            title="What Makes Us The Best Digital Marketing Company?"
            description="At 610 Web Lab, we excel in digital marketing by combining innovative strategies with a deep understanding of market trends. Our goal is to help your business achieve remarkable online growth and visibility. Here’s why we are considered the best in the industry:"
            contentAboveButton={<div><strong>Tailored Strategies</strong><p>We create customized marketing plans that align with your unique business goals.</p><strong>Proven Results</strong><p>Our data-driven approach guarantees increased traffic, engagement, and sales.</p><strong>Expert Team</strong><p>Our skilled professionals stay ahead of industry trends to deliver top-notch solutions.</p></div>}
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

            <ImageText 
            backgroundColor="#F6FCFF"
            title="Our Digital Marketing Process"
            description="At 610 Web Lab, we follow a streamlined digital marketing process to ensure your business achieves optimal online success. Our approach is simple yet effective, designed to deliver measurable results."
            imageUrl="images/digital-marketing-process.webp"
            imageWidth="660"
            imagePosition="left"
            buttons={
                <Button
                title="Hire An Expert"
                link="#"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            contentAboveButton={<div><strong>Discovery & Research</strong><p>We start by understanding your business, target audience, and goals.</p><strong>Strategy Development</strong><p>We craft a customized marketing plan tailored to your specific needs.</p><strong>Implementation</strong><p>Our team executes the strategy using cutting-edge tools and techniques.</p><strong>Monitoring & Optimization</strong><p>We continuously track performance and make adjustments to maximize results.</p><strong>Reporting</strong><p>Regular, transparent updates keep you informed of your progress and success.</p></div>}
            />

            <section className='web_services_sec'>
                <div className='container'>
                    <h2 className='sec_title'>Our Comprehensive Digital Marketing Solutions</h2>
                    <div className='description'>Our comprehensive suite of services is designed to propel your business to new heights. From search engine optimization to social media management, our team of experts will craft a personalized strategy tailored to your unique goals.</div>
                    <div className='web_service_boxes'>
                        <WebServiceBox
                        title="SEO"
                        description="Boost your search engine rankings and drive organic traffic to your website with our expert SEO services. We optimize your content and structure to ensure you stand out in search results."
                        backgroundColor="#F9F9FF"
                        />
                        <WebServiceBox
                        title="PPC"
                        description="Get immediate visibility and attract targeted leads with our Pay-Per-Click (PPC) campaigns. We design and manage ads that deliver high ROI and drive conversions."
                        backgroundColor="#F6F9FF"
                        />
                        <WebServiceBox
                        title="Social Media Marketing"
                        description="Engage your audience and build your brand on platforms like Facebook, Instagram, and Twitter. Our social media marketing services create compelling content and foster meaningful connections."
                        backgroundColor="#F1FFFF"
                        />
                        <WebServiceBox
                        title="Facebook Ads"
                        description="Reach your ideal customers with precision-targeted Facebook Ads. We create and manage effective ad campaigns that increase brand awareness and drive sales."
                        backgroundColor="#FFFAFE"
                        />
                    </div>
                </div>
            </section>
            <PortfoliosGrid />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default DigitalMarketing;