import './custom-software-development.css';
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
    const apiUrl=`${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/custom-software-development/`;
    const metadata=await fetchMetadata(apiUrl);

    return {
        title: metadata?.title||"Default Title",
        description: metadata?.description||"Default Description",
        openGraph: metadata?.openGraph||{},
        twitter: metadata?.twitter||{},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

function CustomSoftwareDevelopment() {
    return (
        <div className="custom_software_development_page">
            <PageBanner
                title="Custom Software Development"
                description="Top-of-the-line developers ready to serve you with Custom Software Development, including Designing, development, testing, debugging, integration, and deployment. Hire us now!"
            />

            <TechTag
                title="Custom Software Solutions to Automate & Accelerate Your Business"
                description={["Are you tired of entering the same data of your clients again and again? Are you looking to upgrade to the latest technologies to send your clients automated notifications, emails, and invoices? Then, it’s time to switch to custom software. Get custom-made software specifically created for your business according to your needs.","It will solve all your business-related problems, increase your productivity, save time and effort, and leave no room for errors. Switching your business process into custom software will help you easily automate your daily business tasks."]}
            />

            <section style={{backgroundColor: "#F6FCFF"}}>
                <div className="container" style={{maxWidth: "1010px"}}>
                    <h2 className="sec_title">How We Approach Custom Software Development?</h2>
                    <p style={{marginTop: "25px",textAlign: "center"}}>At 610 WebLab, we follow a structured and client-focused approach to custom software development, ensuring high-quality solutions that align with your business goals. Our methodology combines innovation, agility, and technical expertise to deliver software that enhances efficiency and drives growth.</p>
                </div>
            </section>
            <section className="custom-software-development-steps">
                <ImageText
                    title="Planning"
                    description="Our Software development process starts with listing your ideas and your visions. Our highly experienced team understands your needs, determines the scope of the software development or product development project. We communicate to our clients an in-depth understanding of their business problems and how our software development solutions can help them to manage their business with more ease."
                    imageUrl="images/planning.webp"
                    imagePosition="right"
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
                    title="Designing"
                    description="After finalizing the software development goal and planning the journey of the software, our artistic team of graphic & web designers built the final prototype and mockups used for the next stages of the software development process. Designing is the stage where the actual conceptualization and final architecture of the software or product are built."
                    imageUrl="images/designing.webp"
                    imagePosition="left"
                    imageWidth="580"
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
                    title="Development"
                    description="Development is the phase where all the design, visuals, and ideas are converted into actual software by assembling every part by coding. A team of highly certified and dedicated developers creates neat and clean code that becomes the backbone of the software."
                    imageUrl="images/development.webp"
                    imagePosition="right"
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
                    title="Testing"
                    description="After creating all the software interfaces and functionality in coding, we deliver the final product to the testing team, where complete and real-time testing of the software is conducted. A team of QA engineers tests the automation functionality and other real-time tests to measure the quality of the products. Then, our quality assurance team tests all the functionality, UI/UX, and system integrations. That is how you get polished software with 100% working conditions."
                    imageUrl="images/testing.webp"
                    imageWidth="580"
                    imagePosition="left"
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
                    title="Delivery and Implementation"
                    description="After in-depth testing of the software and the functionality, the software is delivered, and all of the data, components, and code have been moved to make it accessible for users publicly. After all of the QA Engineers and quality assurance team are satisfied with all the outcomes, only then does the actual implementation or delivery of the software take place."
                    imageUrl="images/delivery-and-implementation.webp"
                    imageWidth="680"
                    imagePosition="right"
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
                    title="Maintenance"
                    description="Maintenance is the final cycle of our software development process. In this process, we analyze the performance of the software, user experience, and feedback received. Our maintenance phase includes providing updates for the software, polishing the product to provide a better experience to the users, and finally, modifying the product according to the needs of the customers."
                    imageUrl="images/maintenance.webp"
                    imageWidth="550"
                    imagePosition="left"
                    buttons={
                        <Button
                            title="Hire An Expert"
                            link="/contact-us"
                            icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width: "20px"}} />}
                        />
                    }
                />
            </section>
            <section className="trusted_software_development_partner" style={{backgroundColor: "#F6FCFF"}}>
                <div className="container" style={{maxWidth: "1010px"}}>
                    <h2 className="sec_title">610 WebLab – Your Trusted Custom Software Development Partner</h2>
                    <p style={{marginTop: "25px",textAlign: "center"}}>With years of experience and a commitment to innovation, 610 WebLab is a reliable software development partner for businesses worldwide. We blend technical expertise with a deep understanding of your unique requirements to deliver customized solutions that drive success.</p>
                    <p style={{textAlign: "center"}}>Our thorough discovery process ensures that we capture your vision, challenges, and opportunities, crafting tailored software that aligns perfectly with your business goals. From initial concept to final deployment, we provide end-to-end development services that enhance efficiency, scalability, and growth.</p>
                </div>
            </section>
            <section className="software_services_stand_out">
                <div className="container">
                <h2 className='sec_title'>What Makes Our Custom Software Development Services Stand Out?</h2>
                <div className='description'>At 610 WebLab, we take a client-centric approach to custom software development, delivering innovative and high-performance solutions tailored to your business needs. Our team of experts blends technical expertise with precision, ensuring seamless functionality, scalability, and user satisfaction at every stage of development.</div>
                    <div className="iconboxes">
                        <IconBox
                            backgroundColor="#F9F9FF"
                            title="Extensive Industry Experience"
                            description="With years of experience across diverse industries, we understand the unique challenges businesses face. Our deep domain knowledge enables us to develop robust and industry-specific software solutions that drive efficiency and growth."
                        />

                        <IconBox
                            backgroundColor="#F1FFFF"
                            title="Skilled and Dedicated Team"
                            description="Our team of seasoned developers, designers, and project managers work collaboratively to bring your vision to life. We stay ahead of the latest technologies and best practices, ensuring top-tier development and continuous innovation."
                        />

                        <IconBox
                            backgroundColor="#F8F7F2"
                            title="Agile Development Approach"
                            description="We follow an agile methodology, allowing us to adapt to changing requirements, maintain transparency, and ensure faster delivery. Regular updates and client feedback integration help us refine the software for optimal performance."
                        />
                    </div>
                </div>
            </section>
            <CallToAction />
            <Testimonials />

        </div>


    )
}
export default CustomSoftwareDevelopment;