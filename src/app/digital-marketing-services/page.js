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
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/digital-marketing-services/`;
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
        "610 WebLab is proud of itself for being one of the top-rated Internet Marketing Agencies worldwide. If you are struggling to get more traffic on your website, looking for a better return on ad spent, or need more sales of your services or products, then your search ends here.",
        "We are here to cater to you with our result-oriented SEO (Search Engine Optimization), Pay-per-click, Facebook Ads, and Social Media Marketing services with 100% guaranteed results. We believe in ourselves that’s because we offer a money-back guarantee to our customers if we fail to deliver the desired results or client goals."
    ]

    return(
        <div className="digital_marketing_page">
            <PageBanner 
            title="Digital Marketing Services"
            description="We help businesses thrive with our flawless, result-driven Digital Marketing Services. Our tailored strategies cater to your unique marketing needs. Get in touch today to elevate your brand!"
            />
            <TechTag
            title="Result-Driven Digital Marketing for Higher ROI"
            description={techDescription}
            />
            
            <div class="digital_marketing_services">
            <ImageText 
            title="SEO"
            description="Get full-fledged Search engine optimization services with advanced-level techniques and strategies to rank your website on top of search results. Beat your competitors and become the number 1 searched website for the keywords that generate business and generate revenue."
            imageUrl="images/digital-marketing/Seo.webp"
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
            title="PPC"
            description="Choose pay-per-click services by 610 WebLab if you want to target only visitors who are ready to become your customers. Get low-cost PPC services, get a better return on investment, and more clicks mean more customers than your competitors."
            imageUrl="images/digital-marketing/PPC.webp"
            imageWidth="535"
            imagePosition= "left"
            buttons={
                <Button
                title="Hire An Expert"
                link="#"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            />
            <ImageText 
            title="Social Media Marketing"
            description="If you are still ignoring social media marketing, then you are missing out so much it can be helpful for your business. Get social media marketing services and reach out to your customers directly. SMM can help you build a successful brand so that you can derive sales directly from your social media handle."
            imageUrl="images/digital-marketing/Social Media Marketing.webp"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="#"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            />
            </div>
            <ImageText 
            backgroundColor="#F6FCFF"
            title="Our Digital Marketing Process"
            description="At 610 WebLab, we follow a streamlined digital marketing process to ensure your business achieves optimal online success. Our approach is simple yet effective, designed to deliver measurable results."
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
            <TechTag
            title="Dominate the Digital Space with Our Expert Marketers"
            description="No business can accomplish its goal without marketing itself. It’s a digital era, and there is a digital race of brands to become the number one choice of their target audience. The goal of our digital marketing services is to showcase your brand on the Internet where your customers are present. Whether they are searching on Google or using their favorite social media handle, we help you to grab them.
            An in-house team of 10 skilled marketers works in-house. They have years of experience in various industries and business types. We analyze your marketing goals and target audience. Then, we create a tailored approach to meet your business objectives."
            />
            <section className='web_services_sec'>
                <div className='container'>
                    <h2 className='sec_title'>How 610 WebLab Drives Leads & Sales with Digital Marketing?</h2>
                    <div className='description'>To grow your business, you need expert digital marketing strategies that attract, engage, and convert potential leads. At 610 WebLab, we align all marketing channels to maximize results. Here's how we do it:</div>
                    <div className='web_service_boxes'>
                        <WebServiceBox
                        title="Understanding Your Audience"
                        description="We use advanced analytics, social media insights, and customer data to analyze audience behavior, preferences, and needs. This helps us craft data-driven strategies that connect with the right people at the right time."
                        backgroundColor="#F9F9FF"
                        />
                        <WebServiceBox
                        title="Targeted Buyer Personas"
                        description="By gathering and analyzing customer insights, we create detailed buyer personas to refine our marketing messages. This ensures a personalized approach, increasing engagement, trust, and conversion rates for your business."
                        backgroundColor="#F6F9FF"
                        />
                        <WebServiceBox
                        title="Optimized Customer Journey"
                        description="We map each stage of the customer journey, from awareness to post-purchase, identifying key touchpoints. Our goal is to create a seamless and engaging experience that maximizes customer retention and satisfaction."
                        backgroundColor="#F1FFFF"
                        />
                        <WebServiceBox
                        title="Sentiment Analysis & Feedback"
                        description="By monitoring feedback and sentiment across various online platforms, we measure customer satisfaction and expectations. This allows us to refine strategies, improve brand perception, and deliver better marketing results."
                        backgroundColor="#FFFAFE"
                        />
                    </div>
                </div>
            </section>
            <ImageText 
            title="What Makes Us The Best Digital Marketing Company?"
            description="At 610 WebLab, we excel in digital marketing by combining innovative strategies with a deep understanding of market trends. Our goal is to help your business achieve remarkable online growth and visibility. Here’s why we are considered the best in the industry:"
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
            <PortfoliosGrid />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default DigitalMarketing;