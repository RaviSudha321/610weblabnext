import Button from "../components/button/button";
import CallToAction from "../components/callToAction/callToAction";
import FullwidthImage from "../components/fullwidthImage/fullwidthImage";
import IconList from "../components/iconList/iconList";
import ImageText from "../components/imageText/imageText";
import PageBanner from "../components/pageBanner/pageBanner";
import TechTag from "../components/techTag/techTag";
import Testimonials from "../components/testimonials/testimonials";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function WordpressDevelopment(){
    return(
        <div className="wordpress_development_page">
            <PageBanner 
            title="WordPress Development Services"
            description="Get custom WordPress development, WordPress theme customization, and plugin development only at 610 Web Lab. We help businesses to grow with affordable yet professional WordPress Development Solutions."
            />

            <TechTag
            title="WordPress Development Services"
            description={["WordPress is the most loved CMS for small business owners, service providers, and writers, and a 40% share of the whole industry is occupied by WordPress. WordPress is popular because of its flexible characteristics, pre-built themes, and easy-to-use nature.", "WordPress has been introduced as the most popular web content publishing platform in web development. But due to its really beautiful UX to a website while offering the best user experience it is preferred by most of the business owners to showcase their services more appealingly and attractively."]}
            />

            <ImageText 
            title="What we offer in WordPress Development services"
            description="610 Web Lab is here with the most professional & advanced WordPress development solutions. If you are looking for a reliable WordPress development company then 610 Web Lab is your one-stop solution."
            imageUrl="images/wordpress.webp"
            imagePosition="right"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"20px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image2.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="WordPress Website Designing"
            description="Improves the UI/UX with our WordPress website design services. We create the most beautiful, appealing, and user-friendly website that helps you to convert your visitors into customers."
            imageUrl="images/wordpress-designing.webp"
            imagePosition="left"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"20px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="WordPress Theme Development"
            description="610 Web Lab converts an idea into reality by providing custom theme development services to our clients."
            imageUrl="images/wordpress-theme.webp"
            imagePosition="right"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"20px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image2.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="WordPress Integrations"
            description="Are you stuck when integrating your website with third-party tools and API? Are you looking for an expert to help you with the integration? No need to worry 610 Web Lab is here to manage all your WordPress integrations."
            imageUrl="images/wordpress-intigration.webp"
            imagePosition="left"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"20px"}} />}
                />
            }
            />

            <section style={{backgroundColor:"#F6FCFF"}}>
                <div className="container" style={{maxWidth:"1050px"}}>
                    <h2 className="sec_title">Most Reliable WordPress Development Company</h2>
                    <p style={{marginTop: "25px", textAlign:"center"}}>610 Web Lab is here with the most professional & advanced WordPress development solutions. If you are looking for a reliable WordPress development company then 610 Web Lab is your one-stop solution.
                    Even though there are thousands of pre-built and ready-to-use themes available in WordPress for every business, but if you are looking to go the extra mile and build your website with custom fields and placements of text and images, then you need to hire a professional who is completely aware of the WordPress functionality and have practical working knowledge and we will work on your WordPress project to get you the desired results.</p>
                </div>
            </section>

            <ImageText 
            title="Why 610 Web Lab for WordPress Development"
            imageUrl="images/wordpress-development-process.webp"
            imagePosition="right"
            contentAboveButton={[
                <IconList
                icon={<FaRegArrowAltCircleRight size="13" fill="#30A9E0" />}
                items={['Supportive Team', 'Expert and Certified WordPress developers', 'Pocket-Friendly charges', '24*7 support and maintenance facilities', 'Confidentiality and data protection']}
                />
            ]
            }
            />

            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default WordpressDevelopment;