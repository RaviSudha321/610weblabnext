import Button from "../components/button/button";
import CallToAction from "../components/callToAction/callToAction";
import FullwidthImage from "../components/fullwidthImage/fullwidthImage";
import ImageText from "../components/imageText/imageText";
import PageBanner from "../components/pageBanner/pageBanner";
import TechTag from "../components/techTag/techTag";
import Testimonials from "../components/testimonials/testimonials";
import { fetchMetadata } from "../lib/fetchMetadata";

export async function generateMetadata() {
  const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/custom-software-development/`;
  const metadata = await fetchMetadata(apiUrl);

  return {
    title: metadata?.title || "Default Title",
    description: metadata?.description || "Default Description",
    openGraph: metadata?.openGraph || {},
    twitter: metadata?.twitter || {},
    //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
  };
}

function CustomSoftwareDevelopment(){
    return(
        <div className="custom_software_development_page">
            <PageBanner 
            title="Custom Software Development"
            description="Top-of-the-line developers ready to serve you with Custom Software Development including Designing, development, testing, debugging, integration and deployment. Hire us now"
            />

            <TechTag
            title="Custom Software Development Solutions to automate and accelerate your business processes"
            description={["Are you tired of entering the same data of your clients again and again? Are you looking to upgrade to the latest technologies to send automated notifications, emails, and invoices to your clients? Then it’s time to switch to custom software. Get custom-made software specifically created for your business according to your needs.", "It will solve all of your business-related problems, increase your productivity, save your time, effort, and leave no room for errors. Switching your business process into custom software will help you automate all of your daily business tasks with ease."]}
            />

            <section style={{backgroundColor:"#F6FCFF"}}>
                <div className="container" style={{maxWidth:"1010px"}}>
                    <h2 className="sec_title">6 Stage highly advance Software Development Process</h2>
                    <p style={{marginTop: "25px", textAlign:"center"}}>At 610 Web Lab, we use a 6 stage highly advanced software development process so that we can deliver polished and tailored software to our clients. Explore our complete software development process and learn the advantages of hiring 610 Web lab over any other development partner.</p>
                </div>
            </section>

            <ImageText 
            title="Planning"
            description="Our Software development process starts with listing your ideas and your visions. Our highly experienced team understands your needs, determines the scope of the software development or product development project. We communicate to our clients an in-depth understanding of their business problems, and how our software development solutions can help them to manage their business with more ease."
            imageUrl="images/planning.webp"
            imagePosition="right"
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
            title="Designing"
            description="After finalizing the software development goal and planning the journey of the software, our artistic team of graphic & web designers built the final prototype and mockups used for the next stages of the software development process. Designing is the stage where the actual conceptualization and final architecture of the software or product are built."
            imageUrl="images/designing.webp"
            imagePosition="left"
            imageWidth="580"
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
            title="Development"
            description="Development is the phase where all the design, visuals, and ideas got converted into actual software through assembling each and every part by coding. A team of highly certified and dedicated developers creates neat and clean code that becomes the backbone of the software."
            imageUrl="images/development.webp"
            imagePosition="right"
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
            title="Testing"
            description="After creating all the software interfaces and functionality in coding, we deliver the final product to the testing team, where complete and real-time testing of the software is conducted. A team of QA engineers tests the automation functionality, and other real-time tests to measure the quality of the products. Then our quality assurance team tests all the functionality, UI/UX, and system integrations. That is how you get polished software with 100% working conditions."
            imageUrl="images/testing.webp"
            imageWidth="580"
            imagePosition="left"
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
            title="Delivery and Implementation"
            description="After in-depth testing of the software and the functionality the software is delivered and all of the data, components, and code has been moved to make it accessible for users publicly. After all of the QA Engineers and quality assurance team is satisfied with all the final outcomes, only then the actual implementation or delivery of the software take place."
            imageUrl="images/delivery-and-implementation.webp"
            imageWidth="680"
            imagePosition="right"
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
            title="Maintenance"
            description="maintenance is the final cycle of our software development process. in this process we analyze the performance of the software, user experience, and feedback received. Our maintenance phase includes providing updates for the software, polishing the product to provide a better experience to the users, and finally modifying the product according to the needs of the customers."
            imageUrl="images/maintenance.webp"
            imageWidth="550"
            imagePosition="left"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"20px"}} />}
                />
            }
            />

            <CallToAction />
            <Testimonials />

        </div>
        
        
    )
}
export default CustomSoftwareDevelopment;