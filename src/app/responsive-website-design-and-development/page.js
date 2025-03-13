import Button from "../components/button/button";
import CallToAction from "../components/callToAction/callToAction";
import FullwidthImage from "../components/fullwidthImage/fullwidthImage";
import ImageText from "../components/imageText/imageText";
import PageBanner from "../components/pageBanner/pageBanner";
import TechTag from "../components/techTag/techTag";
import Testimonials from "../components/testimonials/testimonials";
import WebServiceBox from "../components/webServiceBox/webServiceBox";
import { fetchMetadata } from "../lib/fetchMetadata";
import './responsiveWebsite.css';


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/responsive-website-design-and-development/`;
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

function ResponsiveWebsite(){
    return(
        <div className="responsive_website_page">
            <PageBanner 
            title="Responsive Website Design and Development"
            description="We at 610 Web Lab create websites that fit every screen size and provide a refined user experience to the visitors. Responsive website designs help you increase the conversion rate and decrease the bounce rate of the customers."
            />

            <TechTag
            title="Responsive website design and development services by 610 Web Lab"
            description={["We create websites that look good on every screen across each and every device. If you are looking to increase conversion rate and top of the Google Search then, all you need is a responsive website with web content adapted to the different screen."]}
            />

            <h2 className="sec_title">Technologies used to create a responsive website design</h2>

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
            title="CSS"
            description="CSS is the second most important programming language that provides shape to a webpage. CSS is responsible for the styling and layout of a webpage. CSS is used to represent the elements in a more arranged manner."
            imageUrl="images/css.webp"
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
            title="Media Queries"
            description="These are the fundamental part of CSS which are used to declare the screen size to render across different devices."
            imageUrl="images/media-quaries.webp"
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

            <section className='advantages_sec'>
                <div className='container'>
                    <h2 className='sec_title'>Advantages of having a responsive website</h2>
                    <div className='advantages_boxes'>
                        <WebServiceBox
                        title="Great page experience across devices"
                        description="Responsive websites provide a great user experience to every visitor whether he is browsing the website on desktop, on mobile or any other device. He gets a website that perfectly fits the screen size of the device he is using."
                        backgroundColor="#F9F9FF"
                        />
                        <WebServiceBox
                        title="Search Engine Friendly"
                        description="Google rolls out many algorithms to decide the ranks of the website fighting to be on top. Mobile responsiveness is one of the major factors considered by Google and many other search engines to rank a website. So you have to leverage that advantage by choosing a responsive website design."
                        backgroundColor="#F6F9FF"
                        />
                        <WebServiceBox
                        title="Increase conversion rate"
                        description="When your website delivers a good user experience across different devices then it automatically increases the chances of getting your visitors converted into leads."
                        backgroundColor="#F1FFFF"
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