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
  console.log('metadata',metadata)
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
            title="Get in Touch"
            description='We help every type of Business to Grow the Audience "Online" with Organic and Paid methods.'
            />
            <section className="lets_talk_sec">
                <div className="container">
                    <h2 className="sec_title">
                        Let's 
                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4996 29H8.99961C10.4992 23.5001 9.99961 22.5 4.49961 18C-1.00039 13.5 0.999609 2.50004 10.4996 1.50004C19.9996 0.500043 20.4996 5.50004 21.4996 8.00004C22.4996 10.5 25.9996 11 25.9996 11.5C25.9996 11.9 24.6663 12.6667 23.9996 13C24.8329 13.5 26.1996 14.6 24.9996 15C23.4996 15.5 22.9996 17 22.4996 17.5C22.0996 17.9 24.3329 18.3334 25.4996 18.5C25.3329 18.6667 24.9996 19.1 24.9996 19.5C24.9996 20 26.4996 21.5 22.4996 22.5C19.2996 23.3 18.4996 27.1667 18.4996 29Z" fill="#30A9E0" stroke="#30A9E0"/>
                        </svg>
                        talk!
                    </h2>
                    <div className="description">Let's get Connected Today with our Team:</div>
                    <div className="contact_boxes">
                        <ContactBox
                        title="Phone Number"
                        link="tel:918427814610"
                        linkText="91 8427-8146-10"
                        description="Give us a call direclty, our Sales team will catch you and will get back to you."
                        />
                        <ContactBox
                        title="Email Address"
                        link="mailto:support@610weblab.com"
                        linkText="support@610weblab.com"
                        description="Send us a detailed message. Our Team will get back to you with the Details."
                        />
                        <ContactBox
                        title="Social Media"
                        description="Want to connect on Social Media! We're already here."
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