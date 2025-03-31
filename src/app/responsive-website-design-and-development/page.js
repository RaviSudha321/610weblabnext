import Button from "../components/button/button";
import CallToAction from "../components/callToAction/callToAction";
import FullwidthImage from "../components/fullwidthImage/fullwidthImage";
import ImageText from "../components/imageText/imageText";
import PageBanner from "../components/pageBanner/pageBanner";
import TechTag from "../components/techTag/techTag";
import Testimonials from "../components/testimonials/testimonials";
import WebServiceBox from "../components/webServiceBox/webServiceBox";
import {fetchMetadata} from "../lib/fetchMetadata";
import './responsiveWebsite.css';


export async function generateMetadata() {
    const apiUrl=`https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/responsive-website-design-and-development/`;
    const metadata=await fetchMetadata(apiUrl);

    return {
        title: metadata?.title||"Default Title",
        description: metadata?.description||"Default Description",
        openGraph: metadata?.openGraph||{},
        twitter: metadata?.twitter||{},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

function ResponsiveWebsite() {
    return (
        <div className="responsive_website_page">
            <PageBanner
                title="Responsive Website Design and Development"
                description="We at 610 WebLab create websites that fit every screen size and provide a refined user experience to visitors. Responsive website designs help you increase the conversion rate and decrease the bounce rate of the customers."
            />

            <TechTag
                title="One-Stop Website That Works For All Devices"
                description={<>
                    At 610 WebLab, we specialize in creating fully responsive websites that deliver a seamless user experience across all devices. Whether it’s a desktop, tablet, or smartphone, your website will adapt flawlessly to every screen size.
                    <br /><br />
                    A responsive website isn’t just about aesthetics—it’s about improving user engagement, boosting conversions, and enhancing your search engine ranking. Our expertly crafted designs ensure faster load times, intuitive navigation, and mobile-friendly content, helping you stay ahead in Google Search results.
                </>
                }
            />
            <div className="responsive_design_technologies">
                <div className="responsive_design_technologies_title">
                    <h2 className="sec_title">Technologies Used to Create a Responsive Website Design</h2>
                </div>
                <ImageText
                    title="HTML"
                    description="HTML is one of the two main languages that define the structure, elements, and content of a webpage. HTML code holds the content and images of your website and provides a base to a webpage."
                    imageUrl="images/responsive-html.webp"
                    imagePosition="right"
                    imageWidth="535"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width: "20px"}} />}
                        />
                    }
                />

                <FullwidthImage
                    imageUrl="images/curve-image2.webp"
                    alt="curve image"
                    imageWidth="947"
                />

                <ImageText
                    title="CSS"
                    description="CSS is the second most important programming language that provides shape to a webpage. CSS is responsible for the styling and layout of a webpage. CSS is used to represent the elements in a more arranged manner."
                    imageUrl="images/css.webp"
                    imagePosition="left"
                    imageWidth="535"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width: "20px"}} />}
                        />
                    }
                />

                <FullwidthImage
                    imageUrl="images/curve-image.webp"
                    alt="curve image"
                    imageWidth="947"
                />

                <ImageText
                    title="Media Queries"
                    description="These are the fundamental parts of CSS, used to declare the screen size to render across different devices. They enable websites to adapt their layout, ensuring an optimal user experience on desktops, tablets, and mobile phones."
                    imageUrl="images/media-quaries.webp"
                    imagePosition="right"
                    imageWidth="535"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width: "20px"}} />}
                        />
                    }
                />
            </div>
            <section className="responsive_design_matters" style={{backgroundColor: "#F6FCFF"}}>
                <div className="container" style={{maxWidth: "1010px"}}>
                    <h2 className="sec_title">Why Responsive Web Design Matters?</h2>
                    <p style={{marginTop: "25px",textAlign: "center"}}>In today's mobile-driven world, a responsive website is essential for providing a seamless user experience. It ensures that your site looks and functions flawlessly across all devices, improving engagement and reducing bounce rates.</p>
                    <p style={{textAlign: "center"}}>At 610 WebLab, we create websites that adapt effortlessly to different screen sizes, enhancing usability and boosting search engine rankings. A responsive design not only attracts more visitors but also increases conversions, making it a crucial factor for online success.</p>
                </div>
            </section>
            <section className='advantages_sec'>
                <div className='container'>
                    <h2 className='sec_title'>Benefits of Responsive Web Design Services</h2>
                    <p className='description' style={{marginTop:"10px", textAlign:"center"}}>At 610 WebLab, we provide responsive web design services that ensure your website delivers a flawless experience on every device. Here’s what sets us apart:</p>
                    <div className='advantages_boxes'>
                        <WebServiceBox
                            title="Adaptive Website Design"
                            description="Our responsive designs adjust to different screen sizes, providing a seamless browsing experience across desktops, tablets, and mobile devices."
                            backgroundColor="#F9F9FF"
                        />
                        <WebServiceBox
                            title="Expert Web Designers"
                            description="Our skilled designers craft visually stunning, user-friendly websites using HTML, CSS, and JavaScript, with a strong focus on UX/UI design."
                            backgroundColor="#F6F9FF"
                        />
                        <WebServiceBox
                            title="Live Website Demonstrations"
                            description="We showcase real-time website demonstrations, highlighting our expertise in building engaging and high-performing digital experiences."
                            backgroundColor="#F1FFFF"
                        />
                        <WebServiceBox
                            title="SEO-Optimized Web Design"
                            description="We create websites that are search engine-friendly, ensuring better rankings on Google and improved online visibility."
                            backgroundColor="#F9F9FF"
                        />
                        <WebServiceBox
                            title="Impressive Portfolio"
                            description="Our portfolio features a range of visually appealing and functional websites, demonstrating our commitment to quality design and performance."
                            backgroundColor="#F6F9FF"
                        />
                    </div>
                </div>
            </section>
            <section className='responsive_website_online_presence' style={{backgroundColor:"#f6fcff"}}>
                <div className='container'>
                    <h2 className='sec_title'>How a Responsive Website Boosts Your Online Presence?</h2>
                    <div className='advantages_boxes'>
                        <WebServiceBox
                            backgroundColor="#fff"
                            title="Seamless Experience Across All Devices"
                            description="A responsive website ensures a consistent and engaging user experience, whether visitors browse on a desktop, tablet, or smartphone. The design adapts effortlessly to different screen sizes, enhancing readability and navigation."
                        />
                        <WebServiceBox
                            backgroundColor="#fff"
                            title="Boosts Search Engine Rankings"
                            description="Google prioritizes mobile-friendly websites in search rankings. A responsive design improves SEO performance, helping your website rank higher and attract more organic traffic."
                        />
                        <WebServiceBox
                            backgroundColor="#fff"
                            title="Higher Conversion Rates"
                            description="A well-optimized website that provides a smooth user experience across devices increases user engagement, reduces bounce rates, and boosts conversions, turning visitors into customers."
                        />
                    </div>
                </div>
            </section>
            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default ResponsiveWebsite;