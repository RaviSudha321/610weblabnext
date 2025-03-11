'use client';

import './trusted.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

function Trusted(){

    const logos = [
        "heal360.png",
        "hubhopper.png",
        "shive-transport.png",
        "shalimar-estates.png",
        "Orange-Grove-Advisors-Logo.png",
        "smoke.png",
        "Synthetic-Turf-Now--logo.png",
        "Zipp-Cleaning-logo.png"
    ];

    const carouselOptions = {
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        spaceBetween: 20,
        speed: 3000,
        breakpoints: {
            0: { slidesPerView: 2, spaceBetween: 20 },
            481: { slidesPerView: 2, spaceBetween: 30 },
            641: { slidesPerView: 3, spaceBetween: 40 },
            992: { slidesPerView: 4, spaceBetween: 50 },
            1200: { slidesPerView: 5, spaceBetween: 60 }
        },
        modules: [Autoplay]
    };

    return(
        <section className='trusted_customers_sec'>
            <div className='container'>
                <h2 className='sec_title'>Trusted By Over 1500 + Happy Customers Including</h2>
                {/* <OwlCarousel className="owl-theme trusted_logos" {...options}>  
                    <div className='logo'>
                        <img src="images/trusted-logos/heal360.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/hubhopper.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/Orange-Grove-Advisors-Logo.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/smoke.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/Synthetic-Turf-Now--logo.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/Zipp-Cleaning-logo.png" alt="logo" />
                    </div>
                </OwlCarousel> */}
                <Swiper {...carouselOptions} className='trusted_logos'>
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className='logo'>
                                <img src={`/images/trusted-logos/${logo}`} alt={`logo ${index}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Trusted;