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
                            <p className='description'>In web development, front-end technologies attract users with visually appealing interfaces, while back-end technologies ensure smooth data interaction. Without captivating visuals, user engagement diminishes. Back-end tools, frameworks, and databases manage server-side operations, facilitating communication with the front end.</p>
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
                            <p className='description'>In web development, front-end technologies attract users with visually appealing interfaces, while back-end technologies ensure smooth data interaction. Without captivating visuals, user engagement diminishes. Back-end tools, frameworks, and databases manage server-side operations, facilitating communication with the front end.</p>
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
                            <p className='description'>In web development, front-end technologies attract users with visually appealing interfaces, while back-end technologies ensure smooth data interaction. Without captivating visuals, user engagement diminishes. Back-end tools, frameworks, and databases manage server-side operations, facilitating communication with the front end.</p>
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
                            <p className='description'>In web development, front-end technologies attract users with visually appealing interfaces, while back-end technologies ensure smooth data interaction. Without captivating visuals, user engagement diminishes. Back-end tools, frameworks, and databases manage server-side operations, facilitating communication with the front end.</p>
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