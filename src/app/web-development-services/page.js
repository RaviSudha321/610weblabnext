import './webDevelopment.css';
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
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/web-development-services/`;
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

function WebDevelopment(){

    const techDescription = [
        'Looking to boost your business with a stunning online presence? Hire the best website development agency to achieve your goals. A professional team can design a beautiful, user-friendly website tailored to your needs. With expert guidance, your website will stand out, attracting more customers and enhancing your brand image.',
        "Investing in top-notch web development services leads to increased traffic and higher conversions. Let the experts handle the technical details while you focus on growing your business. With a professionally crafted website, you'll make a lasting impression on visitors, driving your success to new heights."
    ]

    return(
        <div className="web_development_page">
            <PageBanner 
            title="Website Development Services"
            description="Transform your online presence with 610 Web Lab's web development services. Our expert team creates stunning, user-friendly websites tailored to your business needs. From design to functionality, we ensure every detail enhances your brand and attracts customers. Let 610 Web Lab build the perfect website to boost your success."
            />
            <TechTag
            title="Hire The Best Website Development Agency To Boost Your Business"
            description={techDescription}
            />

            <ImageText 
            title="Why Is 610 Web Lab The Best Web Development Company?"
            description="610 Web Lab stands out as the best web development company for several compelling reasons. Our team of experts is dedicated to creating exceptional websites that not only look great but also perform seamlessly. We prioritize your business goals and ensure your online presence is strong and effective."
            contentAboveButton={<div><strong>Unmatched Solutions</strong><p>They provide out-of-the-box web-based solutions globally.</p><strong>Integrity & Trust</strong><p>Their team is committed to privacy, ensuring client data remains secure and confidential.</p><strong>24/7 Support</strong><p>With a dedicated support team, they assist clients during and after project completion. </p></div>}
            imageUrl="images/web-dev.webp"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            />

            <ImageText 
            backgroundColor="#F6FCFF"
            title="Our Web Development Process"
            description="At 610 Web Lab, our website development process is designed to ensure you get a high-quality, tailored website that meets your business needs. We focus on clear communication, innovative design, and efficient execution to bring your vision to life."
            imageUrl="images/web-development.webp"
            imagePosition="left"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            contentAboveButton={<div><strong>Discovery & Planning</strong><p>Understanding your goals and requirements.</p><strong>Design & Development</strong><p>Crafting a user-friendly and visually appealing website.</p><strong>Testing & Launch</strong><p>Ensuring functionality and launching your site smoothly.</p><strong>Maintenance & Support</strong><p>Providing ongoing updates and assistance.</p></div>}
            />

            <section className='web_services_sec'>
                <div className='container'>
                    <h2 className='sec_title'>Our Web Development Services</h2>
                    <div className='description'>We offer a range of specialized web development services to cater to your business needs. Our expertise ensures that your website is built with the best technology and practices for optimal performance and user experience.</div>
                    <div className='web_service_boxes'>
                        <WebServiceBox
                        title="PHP Development"
                        description="We provide robust and scalable PHP development solutions, creating dynamic websites that are secure and efficient."
                        backgroundColor="#F9F9FF"
                        />
                        <WebServiceBox
                        title="Shopify Development"
                        description="Shopify Development Our Shopify experts build customized e-commerce stores that are visually appealing and easy to manage, helping you sell your products effectively online."
                        backgroundColor="#F6F9FF"
                        />
                        <WebServiceBox
                        title="Open Source Development"
                        description="We leverage open-source technologies to deliver cost-effective and flexible web solutions, ensuring your website can adapt and grow with your business."
                        backgroundColor="#F1FFFF"
                        />
                        <WebServiceBox
                        title="WordPress Development"
                        description="Our WordPress development services focus on creating highly functional and easy-to-maintain websites, giving you complete control over your content and design."
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

export default WebDevelopment;