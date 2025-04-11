import Button from "../components/button/button";
import CallToAction from "../components/callToAction/callToAction";
import ImageText from "../components/imageText/imageText";
import IconBox from "../components/iconBox/iconBox";
import PageBanner from "../components/pageBanner/pageBanner";
import TechTag from "../components/techTag/techTag";
import Testimonials from "../components/testimonials/testimonials";
import { fetchMetadata } from "../lib/fetchMetadata";
import './seoServices.css';


export async function generateMetadata() {
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/seo-services/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function SeoServices(){
    return(
        <div className="seo_services_page">
            <PageBanner 
            title="Search Engine Optimization Services"
            description="At 610 WebLab, we offer advanced and result-driven search engine optimization services with guaranteed results. We utilize the latest tools and tailored strategies to meet your business needs and drive long-term success."
            />

            <TechTag 
            title="SEO Services To generate High-Quality leads 24/7"
            description={["SEO is the most competitive yet easiest marketing strategy to generate high-quality leads and sales for a particular business service and product. Only the right SEO services approach and the deep market research make a website rank for their targeted keywords. You get a website design and development from top-rated developers, but all of your money is in vain if you are not marketing your website. Your website is not just a collection of pages and content pieces, it’s more than that."]}
            />
            <section className="seo_iconboxes_sec">
                <div className="container">
                <h2 className='sec_title'>SEO Services That Drive Results</h2>
                <div className='description'>Enhance your online presence with our data-driven, multi-faceted SEO strategies. We offer customized SEO solutions to improve your search engine rankings, increase organic traffic, and grow your brand’s visibility.</div>
                    <div className="iconboxes">
                        <IconBox
                            backgroundColor="#F9F9FF"
                            iconUrl="/images/exact-audience.svg"
                            iconWidth="38px"
                            title="Organic SEO Services"
                            description="Maximize your organic search potential with our cost-effective on-page and off-page SEO strategies. Our tailored approach ensures long-term success in search engine rankings."
                        />

                        <IconBox
                            backgroundColor="#F1FFFF"
                            iconUrl="/images/web-traffic.svg"
                            iconWidth="46px"
                            title="Local SEO Services"
                            description="Connect with high-intent local customers through targeted local SEO strategies. We optimize your online presence to help your business stand out in local searches and attract more foot traffic."
                        />

                        <IconBox
                            backgroundColor="#F8F7F2"
                            iconUrl="/images/group-of-people.svg"
                            iconWidth="46px"
                            title="eCommerce SEO Services"
                            description="Boost your eCommerce store’s visibility and drive more conversions with specialized SEO strategies. From product page optimization to technical SEO, we ensure your online store gets the attention it deserves."
                        />

                        <IconBox
                            backgroundColor="rgb(255, 245, 245)"
                            iconUrl="/images/return-of-investment.svg"
                            iconWidth="46px"
                            title="SEO Content Writing Services"
                            description="Engage and convert your audience with high-quality, SEO-optimized content. Our expert content creators craft compelling articles, blogs, and web pages that align with search engine best practices."
                        />
                    </div>
                </div>
            </section>

            <ImageText
            backgroundColor="#F6FCFF"
            title="How SEO Services Help businesses to generate revenue"
            description={<>
            Every search starts with Google, whether someone is looking for a pizza store nearby, a doctor’s clinic, a real estate agent, a plumber, a landscaper, or someone who is looking for a piece of content that helps him to learn new stuff. 
            <br/><br/>
            Search Engine Optimization services help a business website to rank on top of the Google Search Engine Result Page for the specific search keywords. Those are the keywords that allow customers to reach the most relevant website to avail the service they need. It is no hidden fact that Google’s top 3 results get 75% of all the clicks made on Google SERP. 
            <br/><br/>
            Now, imagine your website ranks in top results, now your website is getting clicked by the visitors searching for a specific service or product. This is the time when you are attracting high-quality leads and start generating revenue for your business.
            </>
            }
            imageUrl="images/seo-services.webp"
            imagePosition="left"
            imageWidth="550"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"21px"}} />}
                />
            }
            />

            <section className="seo_business_potential">
                <div className="container">
                <h2 className='sec_title'>How Can Our SEO Agency Unlock Your Business’s True Potential?</h2>
                <div className='description'>In today’s competitive digital landscape, a strong SEO strategy gives businesses a powerful advantage. As a leading SEO marketing agency, we help your brand stand out, drive organic traffic, and achieve long-term success.</div>
                    <div className="iconboxes">
                        <IconBox
                            backgroundColor="#F9F9FF"
                            title="Organic Search: Your Key to Online Visibility"
                            description="Organic search is a major driver of website traffic, accounting for over half of all visits. Our strategic SEO services optimize your site to rank higher and attract the right audience."
                        />

                        <IconBox
                            backgroundColor="#F1FFFF"
                            title="Build Trust & Credibility"
                            description="A high search engine ranking boosts your brand’s credibility and trustworthiness. By appearing at the top of search results, your business earns greater authority and customer confidence."
                        />

                        <IconBox
                            backgroundColor="#F8F7F2"
                            title="Enhance User Experience"
                            description="SEO isn’t just about rankings—it’s about delivering a seamless experience. We optimize your site structure, speed, and content to improve usability, engagement, and conversions."
                        />

                        <IconBox
                            backgroundColor="#F9F9FF"
                            title="A Cost-Effective Growth Strategy"
                            description="Unlike paid ads, SEO is a sustainable, long-term investment. With an upfront strategy and minimal ongoing costs, you can drive consistent, high-quality traffic without overspending on ads."
                        />
                    </div>
                </div>
            </section>

            <section className="seo_best_choice_services" style={{background:"#f6fcff"}}>
                <div className="container">
                <h2 className='sec_title'>Why Is 610 WebLab the Best Choice for SEO Services?</h2>
                <div className='description'>At 610 WebLab, we are committed to delivering top-notch SEO solutions that drive results. Our team of certified SEO experts leverages the latest trends and tailored strategies to help your business achieve long-term success in search rankings.</div>
                    <div className="iconboxes">
                        <IconBox
                            backgroundColor="#fff"
                            title="Certified Experts"
                            description="Our highly skilled and experienced SEO professionals specialize in every aspect of SEO. From on-page and off-page optimization to technical SEO, we ensure top-ranking results and increased organic traffic."
                        />

                        <IconBox
                            backgroundColor="#fff"
                            title="Trends Integration"
                            description="We stay ahead of Google’s algorithm updates and evolving SEO trends, ensuring that our strategies are always in sync with the latest search engine requirements."
                        />

                        <IconBox
                            backgroundColor="#fff"
                            title="Tailor-Made Solutions"
                            description="We offer customized SEO packages designed to fit your business goals and budget. Whether you're a startup or an enterprise, we provide personalized SEO solutions to maximize your growth."
                        />
                    </div>
                </div>
            </section>
            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default SeoServices;