import BlogsCarousel from "./components/blogsCarousel/blogsCarousel";
import Button from "./components/button/button";
import Faqs from "./components/faqs/faqs";
import Features from "./components/features/features";
import HomeBanner from "./components/homeBanner/homeBanner";
import ImageText from "./components/imageText/imageText";
import Industries from "./components/industries/industries";
import OurSteps from "./components/ourSteps/ourSteps";
import Projects from "./components/projects/projects";
import Ratings from "./components/ratings/ratings";
import Recognized from "./components/recognized/recognized";
import Services from "./components/services/services";
import SuccessCounter from "./components/successCounter/successCounter";
import TechnologiesTabs from "./components/technologiesTabs/technologiesTabs";
import Testimonials from "./components/testimonials/testimonials";
import Trusted from "./components/trusted/trusted";
import { fetchMetadata } from "./lib/fetchMetadata";
import './page.css';


export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}


export default function Home() {
  return (
    <>
      <div className="home_page">
        <HomeBanner />
        <Ratings />
        <Recognized />
        <Services />
        <Projects />
        <TechnologiesTabs />
        <Features />
        <ImageText
            backgroundImageUrl="/images/image-text-bg.webp"
            title="Seeking a Web Development Company for Your Vision?"
            description="Discover the perfect match for your business vision with 610 Web Lab. Let our expert team transform your ideas into stunning reality with our top-notch web design services. Get ready to elevate your online presence and stand out from the competition. Partner with us today!"
            imageUrl="/images/seeking.webp"
            imageWidth="530"
            buttons={
                <>
                    <Button title="Learn More" link="/web-development" />
                    <Button 
                        title="Request A Quote"
                        link="/contact-us"
                        icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
                    />
                </>
            }
            content={<SuccessCounter />}
          />
        <Industries />
        <BlogsCarousel />
        <Trusted />
        <OurSteps />
        <Faqs />
        <Testimonials />
      </div>
    </>
  );
}
