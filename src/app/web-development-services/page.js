import './webDevelopment.css';
import Button from '../components/button/button';
import CallToAction from '../components/callToAction/callToAction';
import PageBanner from '../components/pageBanner/pageBanner';
import TechTag from '../components/techTag/techTag';
import Testimonials from '../components/testimonials/testimonials';
import WebServiceBox from '../components/webServiceBox/webServiceBox';
import ImageText from '../components/imageText/imageText';
import IconList from '../components/iconList/iconList';
import PortfoliosGrid from '../components/portfoliosGrid/portfoliosGrid';
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {fetchMetadata} from '../lib/fetchMetadata';


export async function generateMetadata() {
    const apiUrl=`${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/web-development-services/`;
    const metadata=await fetchMetadata(apiUrl);

    return {
        title: metadata?.title||"Default Title",
        description: metadata?.description||"Default Description",
        openGraph: metadata?.openGraph||{},
        twitter: metadata?.twitter||{},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

function WebDevelopment() {

    const techDescription=[
        '610 WebLab provides custom Web Development solutions for every business need. Get High-quality expert web development services for small businesses, start-ups, and Enterprises. We have proved our expertise by providing business-oriented web development solutions to many industries in the last 10 years including health & fitness, real estate, finance, business services & the food industry.',
        'We understand your business needs, and that’s how we provide the best possible solutions to achieve your business goals. Either you are looking to generate leads, and more sales of your products, or you want your customers to book your services. We create highly converting beautiful and user-friendly websites.',
    ]

    return (
        <div className="web_development_page">
            <PageBanner
                title="Website Development Services"
                description="#1 Web Development Company worldwide, known for providing innovative, advanced, and the most reliable custom web development services. Get started with us today!"
            />
            <TechTag
                title="Professional Web Design & Development Service"
                description={techDescription}
            />
            <div className="web_development_services">
                <ImageText
                    title="WordPress"
                    description="WordPress is the most favorite CMS option of every small business owner because it’s easy to use functionality, has thousands of pre-built themes, and easy to manage media and files. Choose 610 WebLab team for budget-friendly professional WordPress development solutions."
                    contentAboveButton={[
                        <IconList
                            key="Why choose WordPress"
                            title="Why choose WordPress"
                            icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                            items={['User-Friendly beautiful Design options','Pre-built thousands of theme options','Mobile responsive templates']}
                        />
                    ]
                    }
                    imageUrl="images/web-dev.webp"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                />
                <ImageText
                    title="Shopify"
                    imagePosition="left"
                    description="Shopify is the widely used E-commerce platform by business owners for selling their products. If you are looking for someone to help you out with getting your online store ready, do contact 610 WebLab today and hire world-class Shopify developers."
                    contentAboveButton={[
                        <IconList
                            key="Why choose Shopify"
                            title="Why choose Shopify"
                            icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                            items={['Better stability and security','Easy to set up and use','Easy Product management and app integrations','Attractive and appealing digital store templates','24*7 customer support']}
                        />
                    ]
                    }
                    imageUrl="images/web-dev.webp"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                />
                <ImageText
                    title="Joomla"
                    description="610 WebLab is one of the prime groups that create and manage all types of websites in Joomla. We have been providing custom web development services in Joomla for over 10 years Our specialized Joomla Development team helps businesses with up-gradation, migration, and maintenance of their web application."
                    contentAboveButton={[
                        <IconList
                            key="Why choose Joomla"
                            title="Why choose Joomla"
                            icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                            items={['Get next-generation web applications built','More Flexibility and expert development options','Customizable and secure content management']}
                        />
                    ]
                    }
                    imageUrl="images/web-dev.webp"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                />
                <ImageText
                    title="JS Frameworks"
                    imagePosition="left"
                    description="At 610 WebLab specializes in providing full-fledged front-end and back-end management solutions for business to manage their web applications using different frameworks like angular.js, react & node.js. Contact us now if you are looking for an experienced team to work on your JS framework-based application."
                    contentAboveButton={[
                        <IconList
                            key="Why choose JS Frameworks"
                            title="Why choose JS Frameworks"
                            icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                            items={['Cross-platform web and mobile applications','Seamless user-experience','Better stability','Faster caching']}
                        />
                    ]
                    }
                    imageUrl="images/web-dev.webp"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                />
            </div>
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
                        icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                    />
                }
                contentAboveButton={<div><strong>Discovery & Planning</strong><p>Understanding your goals and requirements.</p><strong>Design & Development</strong><p>Crafting a user-friendly and visually appealing website.</p><strong>Testing & Launch</strong><p>Ensuring functionality and launching your site smoothly.</p><strong>Maintenance & Support</strong><p>Providing ongoing updates and assistance.</p></div>}
            />

            <section className='web_dev_services_sec'>
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
                            description="Our Shopify experts build customized e-commerce stores that are visually appealing and easy to manage, helping you sell your products effectively online."
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
            <section className="hire_web_development_agency" style={{backgroundColor: "#F6FCFF"}}>
                <div className="container" style={{maxWidth: "1010px"}}>
                    <h2 className="sec_title">Hire The Best Website Development Agency To Boost Your Business</h2>
                    <p style={{marginTop: "25px",textAlign: "center"}}>Looking to boost your business with a stunning online presence? Hire the best website development agency to achieve your goals. A professional team can design a beautiful, user-friendly website tailored to your needs. With expert guidance, your website will stand out, attracting more customers and enhancing your brand image.</p>
                    <p style={{textAlign: "center"}}>Investing in top-notch web development services leads to increased traffic and higher conversions. Let the experts handle the technical details while you focus on growing your business. With a professionally crafted website, you'll make a lasting impression on visitors, driving your success to new heights.</p>
                </div>
            </section>
            <ImageText
                title="Why Is 610 WebLab The Best Web Development Company?"
                imagePosition="left"
                description="610 WebLab stands out as the best web development company for several compelling reasons. Our team of experts is dedicated to creating exceptional websites that not only look great but also perform seamlessly. We prioritize your business goals and ensure your online presence is strong and effective."
                contentAboveButton={
                    <div><strong>Unmatched Solutions</strong>
                        <p>They provide out-of-the-box web-based solutions globally.</p>
                        <strong>Integrity & Trust</strong>
                        <p>Their team is committed to privacy, ensuring client data remains secure and confidential.</p>
                        <strong>24/7 Support</strong>
                        <p>With a dedicated support team, they assist clients during and after project completion.</p>
                    </div>
                }
                imageUrl="images/web-dev.webp"
                buttons={
                    <Button
                        title="Hire An Expert"
                        link="/contact-us"
                        icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                    />
                }
            />
            <PortfoliosGrid />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default WebDevelopment;