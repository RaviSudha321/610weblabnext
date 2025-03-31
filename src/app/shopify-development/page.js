import './shopifyDevelopment.css';
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
    const apiUrl=`https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/shopify-development/`;
    const metadata=await fetchMetadata(apiUrl);

    return {
        title: metadata?.title||"Default Title",
        description: metadata?.description||"Default Description",
        openGraph: metadata?.openGraph||{},
        twitter: metadata?.twitter||{},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

function ShopifyDevelopment() {

    const techDescription=[
        "If you're looking for an experienced professional to help you build a high-performing Shopify store, 610 WebLab is your ultimate development partner.",
        "With over a decade of expertise, 610 WebLab is recognized as one of the leading Shopify development companies in the USA, UK, and India. Our team specializes in crafting scalable, user-friendly, and conversion-driven Shopify stores tailored to your business needs."
    ]

    return (
        <div className="shopify_development_page">
            <PageBanner
                title="Expert Shopify Development Services"
                description="Start your Shopify projects with us today and leverage our advanced solutions to scale your offline business. Hire our expert and innovative team of developers today."
            />

            <TechTag
                title="Best Shopify Website Development Company"
                description={techDescription}
            />
            <div className="shopify_development_services">
                <ImageText
                    title="Shopify Store Setup"
                    description="At 610 WebLab, we build high-performance Shopify stores designed for seamless functionality and an exceptional user experience. Our Shopify experts ensure a smooth setup, integrating essential features and optimizing your store for maximum efficiency. Your online store is a reflection of your brand, and we make sure it stands out with a professional and robust foundation."
                    imageUrl="images/php-development.webp"
                    imagePosition="left"
                    imageWidth="535"
                />

                <FullwidthImage
                    imageUrl="images/curve-image.webp"
                    alt="curve image"
                    imageWidth="947"
                />

                <ImageText
                    title="Shopify App Development"
                    description="Beyond websites, we specialize in crafting powerful Shopify apps tailored to your business needs. Our experienced Shopify developers build feature-rich, scalable applications that enhance store functionality and improve customer engagement. Share your app requirements with our experts, and we'll develop the perfect solution to elevate your Shopify store."
                    imageUrl="images/shopify-development.webp"
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
                    title="Shopify Theme Customization"
                    description="Transform your Shopify store with a custom theme that aligns perfectly with your brand identity. Our Shopify Plus experts deliver advanced theme customization services, ensuring a visually appealing and conversion-driven storefront. Whether you need a fresh new look or enhancements to an existing theme, we’ll create a design that sets your eCommerce store up for success."
                    imageUrl="images/shopify-store.webp"
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
                    title="One-Stop Destination for Complete Shopify Development"
                    description="Our team of professional Shopify developers is always ready to help you manage your E-commerce store more efficiently from products to payments, third-party app integrations, Shopify theme & app updates, web security, and maintenance. 610 WebLab is the one-stop solution for your Shopify development needs. So, just book a free consultation call with one of our professionals to discuss your vision and ideas."
                    imageUrl="images/shopify-development.webp"
                    imageWidth="550"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width: "25px"}} />}
                        />
                    }
                />
            </div>
            <section className="shopify_development_process">
                <div className="container">
                    <h2 className='sec_title'>Shopify Development Process at 610 WebLab</h2>
                    <div className="iconboxes">
                        <IconBox
                            backgroundColor="#F9F9FF"
                            title="Planning"
                            description="We begin by understanding your business needs, target audience, and store objectives to create a strategic development plan."
                        />

                        <IconBox
                            backgroundColor="#F1FFFF"
                            title="Designing"
                            description="Our experts craft visually appealing and user-friendly Shopify themes customized to match your brand identity and enhance user experience."
                        />

                        <IconBox
                            backgroundColor="#FFFAFE"
                            title="Development"
                            description="We develop a high-performance Shopify store, integrating essential features, third-party apps, and payment gateways for a seamless shopping experience."
                        />
                        <IconBox
                            backgroundColor="#F9F9FF"
                            title="Testing"
                            description="Before launching, we conduct rigorous testing to ensure the store runs smoothly, is free of bugs, and provides an optimized user experience."
                        />
                        <IconBox
                            backgroundColor="#F1FFFF"
                            title="Launch"
                            description="Once your Shopify store is live, we offer continuous support, performance monitoring, and maintenance to ensure long-term success."
                        />
                    </div>
                </div>
            </section>
            <section className="shopify_development_agency" style={{backgroundColor:"#f6fcff"}}>
                <div className="container">
                    <h2 className='sec_title'>Why Choose 610 WebLab as Your Shopify Development Agency?</h2>
                    <p className='description' style={{marginTop:"25px", textAlign:"center"}}>Embark on a seamless eCommerce journey with our expert Shopify development services. At 610 WebLab, we craft tailored solutions that enhance your store’s performance, usability, and scalability—helping you achieve long-term success in the competitive digital marketplace.</p>
                    <div className="iconboxes">
                        <IconBox
                            backgroundColor="#fff"
                            title="Best-Fit Solutions"
                            description="We go beyond just meeting your requirements—we optimize your Shopify store for performance, scalability, and cost-effectiveness, ensuring you get the best return on investment."
                        />

                        <IconBox
                            backgroundColor="#fff"
                            title="Expert Shopify Development Team"
                            description="Our team consists of experienced Shopify web designers, developers, quality analysts, and eCommerce strategists who specialize in building high-converting online stores."
                        />

                        <IconBox
                            backgroundColor="#fff"
                            title="Rigorous Testing"
                            description="We rigorously test your Shopify store on 12+ physical devices and multiple browsers, ensuring a flawless user experience across all screen sizes and resolutions."
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

export default ShopifyDevelopment;