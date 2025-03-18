import './shopifyDevelopment.css';
import Button from '../components/button/button';
import CallToAction from '../components/callToAction/callToAction';
import PageBanner from '../components/pageBanner/pageBanner';
import TechTag from '../components/techTag/techTag';
import Testimonials from '../components/testimonials/testimonials';
import ImageText from '../components/imageText/imageText';
import FullwidthImage from '../components/fullwidthImage/fullwidthImage';
import PortfoliosGrid from '../components/portfoliosGrid/portfoliosGrid';
import { fetchMetadata } from '../lib/fetchMetadata';


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/shopify-development/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function ShopifyDevelopment(){

    const techDescription = [
        "If you are searching for an expert to help you in building your online store in Shopify, then 610 Web Lab is your development destination.",
        "610 Web Lab is considered one of the best Shopify Development Companies in the USA, UK, and India, with a work experience of over 10 years."
    ]

    return(
        <div className="shopify_development_page">
            <PageBanner 
            title="Expert Shopify Development Services"
            description="business. hire our expert and innovative team of developers today."
            />

            <TechTag
            title="Best Shopify Website Development Company"
            description={techDescription}
            />

            <ImageText 
            title="Custom Shopify Theme Development Experts"
            description="The success of your E-commerce store depends on the visual representation. If you are looking to upgrade your Shopify theme or build your e-commerce store with a custom theme, then get in touch with 610 Web Lab. We provide custom Shopify themes development and upgrade solutions at very fair prices."
            contentAboveButton="It`s time to attract customers as much as possible and generate the revenue you are aiming for. Our custom Shopify themes development facilitates your customers to easily navigate to your online store, and push them to make purchase products from your store that ultimately add on to your income."
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
            title="One-Stop Destination for Complete Shopify Development"
            description="Our team of professional Shopify developers is always ready to help you manage your E-commerce store more efficiently from products to payments, third-party apps integrations, Shopify theme & app updates, web security, maintenance. 610 Web Lab is the one-stop solution for your Shopify development needs. So, just book a free consultation call with one of our professionals to discuss your vision and ideas."
            imageUrl="images/shopify-development.webp"
            imageWidth="550"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image2.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="Shopify Development Services to build your Online Store"
            description="Our team of professional Shopify developers is always ready to help you manage your E-commerce store more efficiently from products to payments, third-party apps integrations, Shopify theme & app updates, web security, maintenance. 610 Web Lab is the one-stop solution for your Shopify development needs. So, just book a free consultation call with one of our professionals to discuss your vision and ideas."
            imageUrl="images/shopify-store.webp"
            imagePosition="left"
            imageWidth="500"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
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

export default ShopifyDevelopment;