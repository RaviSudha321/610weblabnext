import './phpDevelopment.css';
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
    const apiUrl=`${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/php-development/`;
    const metadata=await fetchMetadata(apiUrl);

    return {
        title: metadata?.title||"Default Title",
        description: metadata?.description||"Default Description",
        openGraph: metadata?.openGraph||{},
        twitter: metadata?.twitter||{},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

function PhpDevelopment() {

    const techDescription=[
        "PHP is one of the best and most widely used scripting languages. PHP is used as a programming language by big web giants like Facebook, Wikipedia, slack, and many more because of its highly flexible and compatible nature. If you are searching for an expert and reliable PHP developer, get in touch with 610 WebLab.",
        "Our in-house team of 20 most professional and certified developers is always ready to serve you with expert PHP Development Services."
    ]

    return (
        <div className="php_development_page">
            <PageBanner
                title="Full Fledged PHP Development Solutions"
                description="We are a leading PHP development service provider with years of industry experience, delivering top-notch solutions. Get fully customized PHP development using the latest frameworks, including Laravel, Symfony, CodeIgniter, and CakePHP."
            />

            <TechTag
                title="Advance PHP Development Services"
                description={techDescription}
            />

            {/* <ImageText 
            title="How does 610 Web Lab help you with PHP Development Services?"
            description="We provide full-fledged custom PHP development services at a pocket-friendly cost. We deliver our projects within a specific time frame and we also provide 24*7 assistance after project delivery. 610 Web Lab will assist you if you are looking for Custom PHP development Services & Optimization of Existing PHP development projects."
            contentAboveButton="With our PHP development services get dynamic page content, more freedom to manage files on the server, more safety with data encryption & easy management of your data in the database. Call us now and talk to one of our experts to learn more."
            imageUrl="images/php-development.webp"
            imagePosition="left"
            imageWidth="535"
            />

            <FullwidthImage
            imageUrl="images/curve-image.webp"
            alt="curve image"
            imageWidth="947"
            /> */}
            <section className="php_services" style={{paddingTop: "0"}}>
                <ImageText
                    title="Laravel"
                    description="Laravel is one of the popular frameworks of PHP these days and is expected to be the most desirable framework in the future. Hire experienced Laravel developers at 610 WebLab for your projects and leverage the advanced functionality. We are fully loaded with the skills and knowledge you require for customization and integrations faster than others. We have a solid team of developers to take care of your projects. We offer a complete package for development toward the Laravel framework."
                    imageUrl="images/laravel.webp"
                    imageWidth="410"
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
                    title="Symfony"
                    description="Symfony is a PHP framework with a collection of PHP components. Symfony offers you the advantage of using a PHP component according to your choice. Many other big names use Symfony in their projects such as Joomla, Drupal, and Magento. Symfony offers a fast and secure climate for your project. If you are looking to hire an expert to start your Symfony development project, then get in touch with us today."
                    imageUrl="images/symfony.webp"
                    imagePosition="left"
                    imageWidth="235"
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
                    title="CodeIgniter"
                    description="Code Igniter is one of the simplest yet quite popular PHP frameworks with almost zero requirements for configuration. Code igniter is loved by almost every scalable business because of its easy-to-use nature and quality. We are here to provide you with high-quality and sturdy solutions for your website and web applications. Start your project with us today."
                    imageUrl="images/condigniter.webp"
                    imageWidth="330"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                />
            </section>
            <section className="php_development_services" style={{backgroundColor: "#F6FCFF"}}>
                <div className="container" style={{maxWidth: "1010px"}}>
                    <h2 className="sec_title">How does 610 WebLab help you with PHP Development Services?</h2>
                    <p style={{marginTop: "25px",textAlign: "center"}}>We provide full-fledged custom PHP development services at a pocket-friendly cost. We deliver our projects within a specific time frame and we also provide 24*7 assistance after project delivery. 610 WebLab will assist you if you are looking for Custom PHP development Services & Optimization of Existing PHP development projects.</p>
                    <p style={{textAlign: "center"}}>With our PHP development services get dynamic page content, more freedom to manage files on the server, more safety with data encryption & easy management of your data in the database. Call us now and talk to one of our experts to learn more.</p>
                </div>
            </section>
            <section className="php_development_process">
                <div className="container">
                    <h2 className='sec_title'>Our Streamlined PHP Development Process</h2>
                    <div className="iconboxes">
                        <IconBox
                            title="Analysis"
                            description="We start by analyzing your project and business needs to define the best development approach."
                        />

                        <IconBox
                            title="Preparation"
                            description="After analysis, we design the architecture, select the right tools, and structure the project into sprints for better management."
                        />

                        <IconBox
                            title="PHP Development"
                            description="Our developers bring your vision to life by building a high-performance PHP solution."
                        />
                        <IconBox
                            title="Quality Assurance (QA)"
                            description="Our QA team conducts rigorous testing to ensure top performance, security, and reliability."
                        />
                        <IconBox
                            title="Post-Delivery Support"
                            description="We offer SLA-based support and maintenance, ensuring seamless operation even after delivery."
                        />
                    </div>
                </div>
            </section>
            <ImageText
                backgroundColor="#f6fcff"
                title="Why Choose Us for Your Custom PHP Development Needs?"
                description="With decades of experience in custom software and web development, we deliver top-tier PHP solutions tailored to your needs. More than just a service provider, we build long-term relationships based on trust and excellence. Here’s why we are the right partner for your PHP development projects:"
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
                    <strong>Technology Expertise</strong>
                    <p>Our team specializes in a wide range of technologies and frameworks, ensuring scalable and future-ready PHP solutions.</p>
                    <strong>Skilled Team</strong>
                    <p>We have a highly experienced team of consultants, architects, developers, and testers dedicated to delivering excellence.</p>
                    <strong>Comprehensive Assessment</strong>
                    <p>We conduct an in-depth analysis of your requirements to craft a PHP solution that meets your business goals.</p>
                </div>
                }
            />
            <PortfoliosGrid />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default PhpDevelopment;