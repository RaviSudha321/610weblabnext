import './webDesign.css';
import Button from '../components/button/button';
import CallToAction from '../components/callToAction/callToAction';
import Testimonials from '../components/testimonials/testimonials';
import TechTag from '../components/techTag/techTag';
import ImageText from '../components/imageText/imageText';
import IconList from '../components/iconList/iconList';
import PageBanner from '../components/pageBanner/pageBanner';
import WebServiceBox from '../components/webServiceBox/webServiceBox';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { fetchMetadata } from '../lib/fetchMetadata';
import PortfoliosGrid from '../components/portfoliosGrid/portfoliosGrid';


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/web-design-services/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function WebDesign(){

    const techDescription = [
        'At 610 Web Lab, we specialize in crafting unique websites designed to maximize your conversions. Our expert team employs innovative design techniques and data-driven strategies to create a digital presence that stands out and drives tangible results.',
        'Partnering with 610 Web Lab means benefiting from a seamless blend of creativity and technical expertise. We focus on creating engaging user experiences that guide visitors smoothly through your sales funnel, ultimately boosting your conversion rates.'
    ]
    
    return(
        <div className="web_design_page">
            <PageBanner 
            title="Website Design Services"
            description="Crafting a successful online identity demands the right tools and a dedicated team behind you. Our experts will build a visually stunning website tailored to your business goals. We ensure your custom website authenticates your brand and positions you for unparalleled success in the digital landscape."
            />
            <TechTag
            title="Build a Unique Website for Higher Conversions"
            description={techDescription}
            />
            <ImageText
            title="Website UI/UX Design"
            description="UX drives UI. Our team of UX designers at 610weblab have ample of years of experience in the core areas of user experience, which helps them collaborate the finer modules of usability and functionality in-line with business goals and end-user needs."
            buttons={
                <Button 
                    title="Hire An Expert" 
                    link="/contact-us" 
                    icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />} 
                />
            }
            imageUrl="images/ui-ux.webp"
            contentAboveButton={[
                <IconList
                key="Ui /Ux Design Process"
                title="Ui /Ux Design Process"
                icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                items={['Research and Discovery', 'Define Project Requirements', 'Information Architecture', 'Wireframing and Prototyping', 'Visual Design']}
                />,
                <IconList
                key="Key Features of Figma"
                title="Key Features of Figma"
                icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                items={['Prototyping', 'Responsive Design', 'User Testing and Feedback', 'Developer Handoff Features', 'Security and Accessibility Features']}
                />
            ]
            }
            />

            <ImageText 
            backgroundColor="#F6FCFF"
            title="Our Website Design Process"
            description="Creating a website is an intricate process that combines creativity, technical skills, and strategic thinking. Our streamlined approach ensures that each project is executed efficiently and effectively, resulting in a website that not only looks great but also performs seamlessly. Follow this five-step process to create your winning website"
            buttons={
                <Button 
                    title="Hire An Expert" 
                    link="/contact-us" 
                    icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            imageUrl="images/design-process.webp"
            imagePosition="left"
            contentAboveButton={[
                <IconList
                icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                items={['Forming the Design Brief', 'Technology and Resource Planning', 'Identifying the Minimum Viable Product and Best ROIs', 'Design Development', 'Handoffs, Verification and Maintenance']}
                />
            ]
            }
            />

            <section className='web_services_sec'>
                <div className='container'>
                    <h2 className='sec_title'>Professional Website Design and Development Services</h2>
                    <div className='description'>We offer comprehensive website design and development services to help you create an impressive and effective online presence that captivates your audience and drives results. Our team of professionals guarantees that your website looks fantastic, functions properly, and attracts visitors. Our services include:</div>
                    <div className='web_service_boxes'>
                        <WebServiceBox
                        title="Custom Template Design"
                        description="Our team creates unique, tailor-made website templates that align with your brand identity. These templates are visually appealing, user-friendly, and optimized for performance."
                        backgroundColor="#F9F9FF"
                        />
                        <WebServiceBox
                        title="Dynamic Website Design"
                        description="Dynamic websites are interactive and data-driven. We build dynamic sites that allow real-time content updates, personalized user experiences, and seamless integration with databases or APIs."
                        backgroundColor="#F9F9FF"
                        />
                        <WebServiceBox
                        title="Static Website Design"
                        description="Static websites are simple, lightweight, and easy to maintain. We design static sites that showcase essential information about your business, products, or services without complex functionality."
                        backgroundColor="#F1FFFF"
                        />
                        <WebServiceBox
                        title="Responsive Web Design"
                        description="In today’s mobile-first world, responsive design is crucial. We ensure your website looks great and functions seamlessly across various devices, screen sizes, and orientations."
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

export default WebDesign;
