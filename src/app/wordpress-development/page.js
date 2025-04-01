import "./wordpress-development.css";
import Button from "../components/button/button";
import CallToAction from "../components/callToAction/callToAction";
import FullwidthImage from "../components/fullwidthImage/fullwidthImage";
import ImageText from "../components/imageText/imageText";
import PageBanner from "../components/pageBanner/pageBanner";
import TechTag from "../components/techTag/techTag";
import Testimonials from "../components/testimonials/testimonials";
import IconBox from "../components/iconBox/iconBox";
import {fetchMetadata} from "../lib/fetchMetadata";


export async function generateMetadata() {
    const apiUrl=`${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/wordpress-development/`;
    const metadata=await fetchMetadata(apiUrl);

    return {
        title: metadata?.title||"Default Title",
        description: metadata?.description||"Default Description",
        openGraph: metadata?.openGraph||{},
        twitter: metadata?.twitter||{},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

function WordpressDevelopment() {
    return (
        <div className="wordpress_development_page">
            <PageBanner
                title="WordPress Development Services"
                description="Get custom WordPress development, theme customization, and plugin development tailored to your business needs—only at 610 WebLab. We provide affordable yet professional WordPress solutions, helping businesses build scalable, high-performing, and visually stunning websites that drive growth and success."
            />

            <TechTag
                title="WordPress – The Go-To Platform for Small Businesses and Entrepreneurs"
                description={["WordPress is the most loved CMS for small business owners, service providers, and writers, and a 40% share of the whole industry is occupied by WordPress. WordPress is popular because of its flexible characteristics, pre-built themes, and easy-to-use nature.","WordPress has been introduced as the most popular web content publishing platform in web development. But due to its really beautiful UX to a website while offering the best user experience, it is preferred by most of the business owners to showcase their services more appealingly and attractively."]}
            />
            <section className="wordpress_development_services">
                <div className="wordpress_development_services_title">
                    <div className="container">
                        <h2 className="sec_title">What We Offer in Wordpress Development Services?</h2>
                        <p className="description" style={{marginTop: "10px",textAlign: "center"}}>At 610 WebLab, we provide cutting-edge WordPress development solutions tailored to your business needs. Whether you're a startup, an established brand, or an entrepreneur looking for a reliable WordPress development company, we are your one-stop solution for building high-performing, scalable, and visually stunning websites.</p>
                    </div>
                </div>
                <ImageText
                    title="WordPress Website Design"
                    description="Enhance your website’s UI/UX with our expert WordPress website design services. We craft visually appealing, responsive, and user-friendly websites that engage visitors and drive conversions."
                    imageUrl="images/wordpress.webp"
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
                    title="WordPress Theme Development"
                    description="Have a unique vision for your website? We turn your ideas into reality with our custom WordPress theme development services. Our team creates highly optimized, feature-rich, and SEO-friendly themes tailored to your brand identity."
                    imageUrl="images/wordpress-designing.webp"
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
                    title="WordPress Integrations"
                    description="Struggling with third-party tool and API integrations? Let our experts handle it for you! We specialize in smooth and secure WordPress integrations, ensuring that your website functions seamlessly with CRMs, payment gateways, marketing tools, and more."
                    imageUrl="images/wordpress-theme.webp"
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
                    title="WordPress Integrations"
                    description="Are you stuck when integrating your website with third-party tools and API? Are you looking for an expert to help you with the integration? No need to worry 610 Web Lab is here to manage all your WordPress integrations."
                    imageUrl="images/wordpress-intigration.webp"
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
            </section>

            <section style={{backgroundColor: "#F6FCFF"}}>
                <div className="container" style={{maxWidth: "1050px"}}>
                    <h2 className="sec_title">Most Reliable WordPress Development Company</h2>
                    <p style={{marginTop: "25px",textAlign: "center"}}>610 WebLab is here with the most professional & advanced WordPress development solutions. If you are looking for a reliable WordPress development company, then 610 Web Lab is your one-stop solution.</p>
                    <p style={{textAlign: "center"}}>Even though there are thousands of pre-built and ready-to-use themes available in WordPress for every business, but if you are looking to go the extra mile and build your website with custom fields and placements of text and images, then you need to hire a professional who is completely aware of the WordPress functionality and have practical working knowledge and we will work on your WordPress project to get you the desired results.</p>
                </div>
            </section>
            <section className="wordpress_services_for_buisness">
                <div className="container">
                    <h2 className='sec_title'>How Can WordPress Development Services Boost Your Business?</h2>
                    <p style={{marginTop: "25px",textAlign: "center"}}>WordPress development services help businesses build a powerful, scalable, and user-friendly website that enhances visibility, engagement, and conversions. With its flexibility and advanced features, WordPress provides a strong foundation for online success.</p>
                    <div className="iconboxes">
                        <IconBox
                            backgroundColor="#F9F9FF"
                            title="Custom & Scalable Solutions"
                            description="Get a tailored website with advanced features that adapt to your growing business needs and industry trends."
                        />

                        <IconBox
                            backgroundColor="#F1FFFF"
                            title="SEO Optimization"
                            description="Improve search engine rankings with SEO-friendly structures, fast loading speed, and optimized content for better online visibility."
                        />

                        <IconBox
                            backgroundColor="#FFFAFE"
                            title="Enhanced User Experience"
                            description="Engage visitors with a stunning, mobile-responsive design that ensures seamless navigation and improved customer satisfaction."
                        />
                        <IconBox
                            backgroundColor="#F9F9FF"
                            title="Seamless Integrations"
                            description="Easily integrate payment gateways, CRMs, marketing tools, and APIs to streamline business operations and improve efficiency."
                        />
                        <IconBox
                            backgroundColor="#F1FFFF"
                            title="Cost-Effective & Easy Maintenance"
                            description="Manage your website effortlessly with WordPress’s user-friendly dashboard while reducing development and maintenance costs."
                        />
                    </div>
                </div>
            </section>
            <section className="shopify_development_agency" style={{backgroundColor:"#f6fcff"}}>
                <div className="container">
                    <h2 className='sec_title'>Why Should You Choose 610 WebLab for WordPress Development?</h2>
                    <p className='description' style={{marginTop:"10px", textAlign:"center"}}>At 610 WebLab, we bring 10+ years of expertise in WordPress development, delivering tailored website solutions for businesses across various industries and locations. Our team ensures high-performance, user-friendly, and scalable websites that help your business thrive online.</p>
                    <div className="iconboxes">
                        <IconBox
                            backgroundColor="#fff"
                            title="Experienced WordPress Developers"
                            description="Our team of highly skilled WordPress experts possesses deep knowledge of the platform. No matter how complex your project is, we ensure seamless execution with precision and excellence."
                        />

                        <IconBox
                            backgroundColor="#fff"
                            title="Lightning-Fast Website Performance"
                            description="We optimize images, fonts, and website elements to ensure ultra-fast loading speeds. From development to server tuning, we handle every aspect to deliver a high-performance website that enhances user experience."
                        />

                        <IconBox
                            backgroundColor="#fff"
                            title="Intuitive & User-Friendly Admin Panel"
                            description="Managing your website should be effortless! We build custom, easy-to-navigate admin panels that simplify website management, allowing you to update, maintain, and control your content with ease."
                        />
                    </div>
                </div>
            </section>

            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default WordpressDevelopment;