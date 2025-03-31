import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import CallToAction from "../components/callToAction/callToAction";
import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import ContactBox from "../components/contactBox/contactBox";
import OfficeLocation from "../components/officeLocation/officeLocation";
import DiscussSec from "../components/discussSec/discussSec";
import { fetchMetadata } from "../lib/fetchMetadata";

export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/contact-us/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function Contact(){

    const socialMedia = [
        {icon:<FaFacebookF />, link:'https://www.facebook.com/610weblab/'},
        {icon:<FaXTwitter />,link:'https://twitter.com/610Weblab/'},
        {icon:<FaInstagram />,link:'https://www.instagram.com/610weblab/'},
        {icon:<FaLinkedinIn />,link:'https://www.linkedin.com/company/610-web-lab'},
        {icon:<FaBehance />,link:'https://www.behance.net/6Xweblab'},
    ];

    return(
        <div className="career_page">
            <PageBanner 
            title="Let's Connect & Grow Your Business Online"
            description='Empowering businesses of all sizes to expand their online presence through expert organic and paid strategies. Whether you need a custom website, SEO, or digital marketing solutions, we’re here to help you succeed.'
            />
            <section className="lets_talk_sec">
                <div className="container">
                    <h2 className="sec_title">
                    Let's get Connected Today
                    </h2>
                    {/* <div className="description">Let's get Connected Today with our Team:</div> */}
                    <div className="contact_boxes">
                        <ContactBox
                        title="Phone Number"
                        link="tel:918427814610"
                        linkText="91 8427-8146-10"
                        description="Give us a call directly, and our team will assist you right away!"
                        />
                        <ContactBox
                        title="Email Address"
                        link="mailto:support@610weblab.com"
                        linkText="support@610weblab.com"
                        description="Send us a message with your queries, and we’ll get back to you with the details as soon as possible."
                        />
                        <ContactBox
                        title="Social Media"
                        description="Stay connected with us on social media! Follow us for the latest updates and insights."
                        socialMedia={socialMedia}
                        />
                    </div>
                </div>
            </section>

            <OfficeLocation />
            <DiscussSec />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Contact;