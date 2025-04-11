import './openSourceDevelopment.css';
import Button from '../components/button/button';
import CallToAction from '../components/callToAction/callToAction';
import PageBanner from '../components/pageBanner/pageBanner';
import TechTag from '../components/techTag/techTag';
import Testimonials from '../components/testimonials/testimonials';
import ImageText from '../components/imageText/imageText';
import FullwidthImage from '../components/fullwidthImage/fullwidthImage';
import PortfoliosGrid from '../components/portfoliosGrid/portfoliosGrid';
import IconBox from "../components/iconBox/iconBox";
import {fetchMetadata} from '../lib/fetchMetadata';


export async function generateMetadata() {
    const apiUrl=`${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/open-source-development/`;
    const metadata=await fetchMetadata(apiUrl);

    return {
        title: metadata?.title||"Default Title",
        description: metadata?.description||"Default Description",
        openGraph: metadata?.openGraph||{},
        twitter: metadata?.twitter||{},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

function OpenSourceDevelopment() {

    const techDescription=[
        "610 WebLab is a globally recognized leader in open-source development, delivering expert solutions tailored to your business needs. Our team of certified and highly skilled developers specializes in the latest open-source technologies, including PHP, Drupal, Magento, and WordPress. Whether you need a custom web application, CMS development, or eCommerce solutions, we provide scalable, secure, and high-performance development services to help you stay ahead in the digital landscape."
    ]

    return (
        <div className="open_source_development_page">
            <PageBanner
                title="Open Source Development"
                description="As a leading provider of open-source development services worldwide, we ensure scalable, secure, and high-performance solutions that drive innovation and efficiency."
            />

            <TechTag
                title="Professional Open Source Development Solutions"
                description={techDescription}
            />

            <section className="open_source_platform_expertise">
                <div className="sec_title" style={{marginBottom: "25px"}}>Our Open-Source Platforms Expertise</div>
                <div className="open_source_platform_expertise">
                    <ImageText
                        title="PHP"
                        description="PHP is perfect for web programming since PHP provides performance, speed, and reliability. We provide a complete solution for PHP development services using the most used frameworks like Laravel, Symfony and CakePHP, etc."
                        imageUrl="images/php-development.webp"
                        imageWidth="550"
                        buttons={
                            <Button
                                title="Hire An Expert"
                                link="/contact-us"
                                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                            />
                        }
                    />

                    <FullwidthImage
                        imageUrl="images/curve-image2.webp"
                        alt="curve image"
                        imageWidth="947"
                    />

                    <ImageText
                        title="Magento"
                        description="Magento is the open-source development CMS used to create fully-featured and customized e-commerce stores. We have an in-house team of certified developers who are always striving to provide you with problem-solving open-source development for Magento."
                        imageUrl="images/magento-development.webp"
                        imagePosition="left"
                        imageWidth="500"
                        buttons={
                            <Button
                                title="Hire An Expert"
                                link="/contact-us"
                                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                            />
                        }
                    />

                    <FullwidthImage
                        imageUrl="images/curve-image.webp"
                        alt="curve image"
                        imageWidth="947"
                    />

                    <ImageText
                        title="WordPress"
                        description="WordPress is one of the best open-source platforms to build beautiful websites for small businesses and blogs. With years of working experience in WordPress development, we are here to serve you with complete WordPress development solutions including custom themes, plugins, upgrades, and third-party integration services for WordPress."
                        imageUrl="images/wordpress-development.webp"
                        imageWidth="550"
                        buttons={
                            <Button
                                title="Hire An Expert"
                                link="/contact-us"
                                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                            />
                        }
                    />

                    <FullwidthImage
                        imageUrl="images/curve-image2.webp"
                        alt="curve image"
                        imageWidth="947"
                    />

                    <ImageText
                        title="MongoDB"
                        description="We possess extensive years of expertise in building outstanding websites and powerful e-commerce solutions. Leveraging MongoDB as the backend, we ensure seamless functionality and data management. Trust our skills to deliver top-notch results for your digital needs."
                        imageUrl="images/mongo-db.webp"
                        imagePosition="left"
                        imageWidth="500"
                        buttons={
                            <Button
                                title="Hire An Expert"
                                link="/contact-us"
                                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                            />
                        }
                    />
                </div>
            </section>
            <section className="open_sourse_solutions" style={{backgroundColor: "#F6FCFF"}}>
                <div className="container" style={{maxWidth: "1010px"}}>
                    <h2 className="sec_title">Why Should Businesses Consider Open Source Solutions?</h2>
                    <p style={{marginTop: "25px",textAlign: "center"}}>Businesses should consider open-source solutions for their flexibility, cost-effectiveness, and scalability. At 610 WebLab, we leverage the power of open-source technologies to deliver secure, customizable, and high-performance solutions tailored to your needs.</p>
                    <p style={{textAlign: "center"}}>With a vast community-driven support system, open-source development ensures continuous innovation, improved security, and seamless integrations. Open-source platforms help businesses grow efficiently. They work for CMS, eCommerce, and enterprise solutions. Plus, they cut development costs. Choose 610 WebLab for expert open-source development services.</p>
                </div>
            </section>
            <section className="services_for_scalable_solutions">
                <div className="container">
                    <h2 className='sec_title'>Open Source Software Development Services for Scalable Solutions</h2>
                    <div className='description' style={{marginTop: "25px",textAlign: "center"}}>At 610 WebLab, we specialize in cutting-edge open-source development services tailored for industry-grade projects.</div>
                    <div className="iconboxes">
                        <IconBox
                            title="Open Source Customization"
                            description="We build robust eCommerce solutions, shopping carts, content management systems (CMS), and more to suit your unique business needs."
                            backgroundColor="rgb(249, 249, 255)"
                        />

                        <IconBox
                            title="Open Source Web Development"
                            description="Leverage leading open-source technologies to develop high-performance, scalable, and secure web solutions that drive business success."
                            backgroundColor="rgb(248, 247, 242)"
                        />

                        <IconBox
                            title="Open Source CMS Development"
                            description="610 WebLab delivers feature-rich Content Management System (CMS) development using powerful open-source platforms like WordPress, PHP, Magento, and more."
                            backgroundColor="rgb(241, 255, 255)"
                        />
                        <IconBox
                            title="Open Source Web Portal Development"
                            description="Build enterprise-grade web portals designed to adapt to evolving business requirements and deliver seamless user experiences."
                            backgroundColor="#fff5f5"
                        />
                        <IconBox
                            title="Open Source Module Development"
                            description="Enhance the functionality and performance of your website and applications with seamless open-source module development and integration."
                            backgroundColor="rgb(240 245 242)"
                        />
                    </div>
                </div>
            </section>
            <ImageText
                backgroundColor="#f6fcff"
                title="Why Choose 610 WebLab for Open Source Development?"
                description="As a leading open-source development company, we deliver innovative solutions with cutting-edge web technologies. Here’s why businesses trust us:"
                imageUrl="images/magento-development.webp"
                imagePosition="left"
                imageWidth="500"
                buttons={
                    <Button
                        title="Hire An Expert"
                        link="/contact-us"
                        icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                    />
                }
                contentAboveButton={<div>
                    <strong>Business-Oriented Approach</strong>
                    <p>Our experts craft scalable, secure, and customized solutions tailored to industry needs.</p>
                    <strong>Experienced Developers </strong>
                    <p>With 10+ years of expertise, our team ensures high-quality, efficient, and innovative web development.</p>
                    <strong>Agile Methodology</strong>
                    <p>We streamline development, reducing costs and time while delivering solutions that meet your business goals.</p>
                    </div>
                }
            />

            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default OpenSourceDevelopment;