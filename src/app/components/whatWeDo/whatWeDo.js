import Button from '../button/button';
import VideoPopup from '../videoPopup/videoPopup';
import './whatWeDo.css';
import { useState } from 'react';


function WhatWeDo(){

    const [activePopup, setActivePopup] = useState(false);

    return(
        <section className='what_we_do_sec'>
            <div className='container'>
                <div className='what_we_do_content'>
                    <div className='wwd_left_col'>
                        <h3 className='sec_sub_title'>What We Do</h3>
                        <h2 className='sec_title'>We are Professional Digital Team</h2>
                        <p className='description'>Start from scratch or choose from over 500 designer-made templates that you can fully customize using the drag and drop website builder. Make your site come to life with video backgrounds</p>
                        <div className='wwd_iconboxes'>
                        <div className='wwd_iconbox'>
                                <div className='wwd_icon'>
                                    <img src="/images/customize-website.svg" alt="Customize Website" style={{width:"41px"}} />
                                </div>
                                <h3 className='wwd_iconbox_title'>Customize Website</h3>
                                <div className='wwd_iconbox_description'>Pick a template customize anything answer or question website design just you.</div>
                            </div>
                            <div className='wwd_iconbox'>
                                <div className='wwd_icon'>
                                    <img src="/images/premium-design.svg" alt="Premium Design" style={{width:"37px"}} />
                                </div>
                                <h3 className='wwd_iconbox_title'>Premium Design</h3>
                                <div className='wwd_iconbox_description'>Start your own blog, add an online store and accept bookings online always.</div>
                            </div>
                        </div>
                        <div className='wwd_buttons'>
                            <Button 
                            title="Create Your Website"
                            link="/contact-us"
                            />
                            <div className='what_video_btn'>
                                <a href="#" onClick={(e)=>{e.preventDefault(); setActivePopup(true);}}>
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="17" cy="17" r="17" fill="#30A9E0"/>
                                        <path d="M13.0981 11.634C13.0981 10.8642 13.9314 10.383 14.5981 10.7679L23.8923 16.134C24.559 16.5189 24.559 17.4811 23.8923 17.866L14.5981 23.2321C13.9314 23.617 13.0981 23.1358 13.0981 22.366L13.0981 11.634Z" fill="white"/>
                                    </svg>
                                    Watch Videos</a>
                            </div>
                        </div>
                    </div>
                    <div className='wwd_right_col'>
                        <div className='wwd_img'>
                            <img src="images/what-we-do.webp" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopup videoUrl="https://www.youtube.com/embed/D0UnqGm_miA?si=ojHbqqgaNoY7KGHh" activePopup={activePopup} setActivePopup={setActivePopup} />
        </section>
    )
}

export default WhatWeDo;