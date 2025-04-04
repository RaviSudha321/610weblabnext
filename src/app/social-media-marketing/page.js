import CallToAction from "../components/callToAction/callToAction";
import Button from "../components/button/button";
import IconBox from "../components/iconBox/iconBox";
import ImageText from "../components/imageText/imageText";
import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import { fetchMetadata } from "../lib/fetchMetadata";
import './socialMediaMarketing.css'


export async function generateMetadata() {
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/social-media-marketing/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function SocialMediaMarketing(){
    return(
        <div className="social_media_marketing_page">
            <PageBanner 
            title="Social Media Marketing"
            description="Grow your business and find loyal customers online with our result-oriented Social Media Marketing Services only at 610 WebLab, tailored to boost your brand reach and awareness."
            />

            <ImageText 
            imageUrl="/images/social-media-marketing2.webp"
            imageWidth="520"
            imagePosition="left"
            title="Struggling on Social Media? We’ve Got the Solution!"
            description="Does your business have enough visibility on social media handles that it deserves? Are you lacking brand recognition and engagement on Social media? If yes, then you need to be serious about your Social Media Marketing because you are losing your customers and the trust of your audience."
            contentAboveButton={
            <div>
            <p>Social Media Marketing is not just about creating posts and sharing on Social media handles like Facebook, Linked In, and Twitter; it’s about creating a brand, increasing the visibility of a business, attracting more customers, and making money out of them.</p>
            <p>610 WebLab provides Social Media Marketing Services for small to mid-sized businesses. Our creative team of Experts always craves to work on challenges. If you are struggling to achieve noticeable success on Social media, then get in touch with us and get expert consultation.</p>
            </div>}
            />

            <section className="brand_reach iconboxes_sec">
                <div className="container">
                    <h2 className="sec_title">Expand Your Brand’s Reach with Social Media Marketing</h2>
                    <div className="iconboxes">
                        <IconBox 
                        backgroundColor="#F9F9FF"
                        iconUrl="/images/audience.svg"
                        iconWidth="38px"
                        title="Reaching out to an extensive audience"
                        description="Social Media Marketing opens doors for brands to reach out to a wide range of audiences. We help you showcase your products, services, business stories, and achievements."
                        />
                        
                        <IconBox 
                        backgroundColor="#F1FFFF"
                        iconUrl="/images/engage.svg"
                        iconWidth="46px"
                        title="Engage with Newer Customers"
                        description="Engage and involve your audience with your business to increase the number of your loyal customers, to whom you can sell your items without paying for heavily priced ads."
                        />

                        <IconBox 
                        backgroundColor="#F8F7F2"
                        iconUrl="/images/live-streaming.svg"
                        iconWidth="46px"
                        title="Interact live with your audience"
                        description="Our Specialized team of Experts is well aware of how to interact with the audience and how to cater to them the services you deal in."
                        />
                    </div>
                </div>
            </section>

            <section className="generating_leads_sec">
                <div className="container">
                    <div className="sec_header" style={{maxWidth:"1050px", marginInline:"auto", textAlign:"center"}}>
                        <h2 className="sec_title">How Social Media Marketing Transforms Brands & Boosts Growth?</h2>
                        <p style={{marginTop:"20px"}}>At 610 WebLab, we create highly engaging and creative content that propels your audience to buy from you, and we use many other lead generation techniques to give you spontaneous results. Let's explore how Social Marketing Services help Brands.</p>
                    </div>
                    <div className="generating_leads_boxes">
                        <IconBox 
                        title="Brand Awareness"
                        description="Increase the visibility of your brand and reach out to the widest range of customers ready. Let your competitors keep trying, and you make your customers know that you have the services/products they might be looking for."
                        />
                        <IconBox 
                        title="Leads Generation"
                        description="We have worked with thousands of brands and helped them to achieve high-quality leads that generate revenue. Our proven strategies ensure your business gets the leads it needs for success."
                        />
                        <IconBox 
                        title="Increase Organic Online Traffic"
                        description="Social media marketing doesn’t just increase your brand visibility on social media handles; in fact, it impacts your overall organic traffic. Social Media marketing is indirectly connected to your organic traffic coming to your website."
                        />
                        <IconBox 
                        title="Increasing Brand Loyalty"
                        description="Our experts increase your brand awareness with regular updates and keep your audience intact with your brand. We create and post high-quality, engaging content that emotionally and mentally motivates your audience."
                        />
                    </div>
                </div>
            </section>
            <ImageText 
            imageUrl="/images/social-media-marketing2.webp"
            imageWidth="520"
            title="Why Social Media is the Key to Selling Smarter?"
            description="Social media plays a crucial role in reaching out to the masses and selling services/ products. With the help of our social media marketing services, you can reach out to the biggest bunch of customers who are ready to make a purchase. According to data from recent social media channels, more than 50% of revenue across 14 major industries is generated by social sales. 75% of B2B buyers and 84% of C-level executives are influenced by social media when making purchasing decisions."
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"21px"}} />}
                />
            }
            />
            <ImageText 
            backgroundColor="#f6fcff"
            imageUrl="/images/social-media-marketing2.webp"
            imageWidth="520"
            imagePosition="left"
            title="Why Choose 610 WebLab for Social Media Marketing Services?"
            description="At 610 WebLab, we craft powerful social media strategies that drive engagement, boost brand visibility, and generate high-quality leads. Our team of experts leverages data-driven techniques to ensure your brand stands out in the competitive digital landscape."
            contentAboveButton={
            <div>
            <strong>Data-Driven Strategies</strong>
            <p>We analyze trends and audience behavior to create impactful campaigns that deliver real results.</p>
            <strong>Targeted Engagement</strong>
            <p>Our approach focuses on connecting with the right audience to maximize brand loyalty and conversions.</p>
            <strong>Creative & Engaging Content</strong>
            <p>We design visually appealing and compelling content to captivate your audience and enhance brand awareness.</p>
            </div>}
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"21px"}} />}
                />
            }
            />
            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default SocialMediaMarketing;