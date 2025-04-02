import './webDesign.css';
import Button from '../components/button/button';
import CallToAction from '../components/callToAction/callToAction';
import Testimonials from '../components/testimonials/testimonials';
import TechTag from '../components/techTag/techTag';
import ImageText from '../components/imageText/imageText';
import IconList from '../components/iconList/iconList';
import PageBanner from '../components/pageBanner/pageBanner';
import WebServiceBox from '../components/webServiceBox/webServiceBox';
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {fetchMetadata} from '../lib/fetchMetadata';
import PortfoliosGrid from '../components/portfoliosGrid/portfoliosGrid';


export async function generateMetadata() {
    const apiUrl=`${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/web-design-services/`;
    const metadata=await fetchMetadata(apiUrl);

    return {
        title: metadata?.title||"Default Title",
        description: metadata?.description||"Default Description",
        openGraph: metadata?.openGraph||{},
        twitter: metadata?.twitter||{},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

function WebDesign() {

    const techDescription=[
        'Do you know Google processes over 3.5 billion searches per day in the USA only? Those are the people you can attract, engage, and sell your service or product to. It’s a digital era and every consumer is searching for a seller or a service provider online to get solutions to their needs.',
        'So what are you thinking about, get a professional website designed today for your business with 610 WebLab, an industry expert with more than 10 years of Experience in Website designing services. We served over a thousand happy customers. If you have any questions feel free to contact us, our experts will be happy to help you.'
    ]

    return (
        <div className="web_design_page">
            <PageBanner
                title="Website Design Services"
                description="Get professional website design services with the most creative team of experts. We don’t just design websites, we bring your ideas and plans into reality."
            />
            <TechTag
                title="Innovative Web Design services for all your business needs"
                description={techDescription}
            />
            <div className="web_services">
                <ImageText
                    title="UI/UX"
                    description="Our Expert Designs a website like a picture on canvas. Everything from wireframe to mockup design & logo design, 610 WebLab is the one-stop shop for all designing needs."
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                    imageUrl="images/ui-ux.webp"
                    contentAboveButton={[
                        <IconList
                            key="Why choose UI/UX"
                            title="Why choose UI/UX"
                            icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                            items={['User-friendly and highly engaging websites.','Customized section of the website','SEO-friendly design and structure of the website.']}
                        />
                    ]
                    }
                />
                <ImageText
                    backgroundColor="#F6FCFF"
                    title="HTML"
                    description="A team of certified developers at 610 WebLab creates every segment of your website in HTML and gives a defined user-friendly structure to the website."
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                    imageUrl="images/ui-ux.webp"
                    imagePosition="left"
                    contentAboveButton={[
                        <IconList
                            key="Why choose HTML"
                            title="Why choose HTML"
                            icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                            items={['Compatible with every browser','Keeps your website light-weight and loads faster','SEO-friendly site structure']}
                        />
                    ]
                    }
                />
                <ImageText
                    title="CSS"
                    description="We use thousands of different website styling & representation options in CSS, We create future-proof, beautiful-looking designs that convert more visitors into customers."
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                    imageUrl="images/ui-ux.webp"
                    contentAboveButton={[
                        <IconList
                            key="Why choose CSS"
                            title="Why choose CSS"
                            icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                            items={['Custom Styling and thousands of design options','User-friendly and highly converting websites','Search Engine friendly and appealing site structure']}
                        />
                    ]
                    }
                />

                <ImageText
                    backgroundColor="#F6FCFF"
                    title="Our Website Design Process"
                    description="Creating a website is a complex process that combines creativity, technical skills, and strategic thinking. Our streamlined approach ensures that each project is executed efficiently and effectively, resulting in a website that not only looks great but also performs seamlessly. Follow this five-step process to create your winning website."
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                    imageUrl="images/design-process.webp"
                    imagePosition="left"
                    contentAboveButton={[
                        <IconList
                            key="Website Design Process"
                            icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                            items={['Forming the Design Brief','Technology and Resource Planning','Identifying the Minimum Viable Product and Best ROIs','Design Development','Handoffs, Verification and Maintenance']}
                        />
                    ]
                    }
                />
            </div>


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
                            backgroundColor="#F8F7F2"
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
            <ImageText
                backgroundColor="#F6FCFF"
                title="Why Choose Us for a Successful Website Design Project?"
                description="At 610 WebLab, we specialize in creating stunning, high-performing websites that align with your business goals. Here’s what sets us apart:"
                contentAboveButton={<div>
                    <strong>Strategic Project Planning </strong>
                    <p>We craft a detailed, time-bound strategy after understanding your brand and business needs, ensuring a seamless and efficient design process.</p>
                    <strong>Skilled & Dedicated Team </strong>
                    <p>Our expert designers, developers, and strategists collaborate to deliver visually impressive and user-friendly websites that drive results.</p>
                    <strong>Industry-Leading Expertise</strong>
                    <p>With years of experience, we tackle design challenges and technical complexities with ease, delivering innovative web solutions for diverse businesses.</p>
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
            <PortfoliosGrid />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default WebDesign;