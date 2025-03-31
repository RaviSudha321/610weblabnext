'use client';
import { useState } from 'react';
import './technologiesTabs.css';
import Button from '../button/button';


function TechnologiesTabs(){

    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index) => {
        setActiveTab(index);
    }

    return(
        <section className='technologies_tabs_sec'>
            <div className='container'>
                <div className='tt_header'>
                    <h2 className='sec_title'>Cutting-Edge Technologies <br/>That We Use For Robust Solutions</h2>
                    <Button 
                    title="Request A Quote"
                    link="/contact-us"
                    icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
                    />
                </div>
                <div className='technologies_tabs'>
                    <div className='technology_tabs_titles'>
                        <div className={`tt_title ${activeTab == 0 ? 'active' : ''}`} onClick={()=>handleClick(0)}>Web Development</div>
                        <div className={`tt_title ${activeTab == 1 ? 'active' : ''}`} onClick={()=>handleClick(1)}>Digital Marketing</div>
                        <div className={`tt_title ${activeTab == 2 ? 'active' : ''}`} onClick={()=>handleClick(2)}>Graphic Design</div>
                        <div className={`tt_title ${activeTab == 3 ? 'active' : ''}`} onClick={()=>handleClick(3)}>Mobile App</div>
                    </div>
                    <div className='technology_tabs_contents'> 
                        <div className={`tt_content ${activeTab == 0 ? 'active' : ''}`}>
                            <p className='description'>We use cutting-edge web technologies to create reliable fast websites that can grow with your business. Our approach to building sites makes sure they're quick, secure, and easy to use. This helps businesses make a big impact online with web solutions that are tailored to their needs and work well.</p>
                            <div className='technology_logos'>
                                <div className='technology_img'>
                                    <img src="/images/web-development/html5.png" alt="html logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/web-development/javascript.png" alt="javascript logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/web-development/laravel.png" alt="laravel logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/web-development/nodejs.png" alt="nodejs logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/web-development/php.png" alt="php logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/web-development/react.png" alt="react logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/web-development/Shopify.png" alt="shopify logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/web-development/wordpress.png" alt="wordpress logo" />
                                </div>
                            </div>
                        </div>
                        <div className={`tt_content ${activeTab == 1 ? 'active' : ''}`}>
                            <p className='description'>We utilize advanced SEO, PPC, and social media marketing strategies powered by AI-driven analytics, automation tools, and data-driven insights. Our expertise in platforms like Google Ads, Meta Ads, and email marketing ensures targeted campaigns that drive engagement, leads, and brand growth.</p>
                            <div className='technology_logos'>
                                <div className='technology_img'>
                                    <img src="/images/digital-marketing/Ad.png" alt="Ad logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/digital-marketing/email.png" alt="email logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/digital-marketing/meta.png" alt="meta logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/digital-marketing/Seo.png" alt="seo logo" />
                                </div>
                            </div>
                        </div>
                        <div className={`tt_content ${activeTab == 2 ? 'active' : ''}`}>
                            <p className='description'>Our graphic design services use the latest tools to produce eye-catching designs. We cover everything from branding and UI/UX to social media content focusing on looks and usability to boost brand image and user engagement.</p>
                            <div className='technology_logos'>
                            <div className='technology_img'>
                                    <img src="/images/graphic-design/Ai.png" alt="ai logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/graphic-design/Figma.png" alt="figma logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/graphic-design/PS.png" alt="photoshop logo" />
                                </div>
                            </div>
                        </div>
                        <div className={`tt_content ${activeTab == 3 ? 'active' : ''}`}>
                            <p className='description'>We build strong mobile apps with Flutter, React Native, and Swift making sure they work on iOS and Android. Our apps are made to be fast, secure, and keep users interested. They include cutting-edge features such as AI push notifications, and real-time data synchronization.</p>
                            <div className='technology_logos'>
                            <div className='technology_img'>
                                    <img src="/images/mobile-app/81.png" alt="android logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="/images/mobile-app/iSo.png" alt="ios logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologiesTabs;