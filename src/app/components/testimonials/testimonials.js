'use client';

import { useEffect, useState } from 'react';
import './testimonials.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Loading from '../loading/loading';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Testimonials(){

    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getTestimonials = async() => {
            try{
                const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}weblab-testimonials?_embed&order=asc`);
                if(!response.ok){
                    throw new Error('Network response was not ok: testimonials');
                }
                const data = await response.json();
                setTestimonials(data);
            }
            catch (error){
                console.log('testimonials error', error);
            } finally {
                setLoading(false);
            }
        }

        getTestimonials();
    }, [])

    const swiperOptions = {
        loop: true,
        spaceBetween: 16,
        speed: 4000,
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        modules: [Navigation, Autoplay],
    };

    if(loading){
        return <Loading />
    }

    return(
        <section className='testimonials_sec'>
            <div className='marquee'>
                <span>Client’s Testimonial <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.5L1 22.5L7 32.5L16 24.5L13.5 35.5H24.5L23 24.5L31 32.5L36.5 22L26 18.5L37 14.5L31 4.5L22 13.5L24.5 1H13.5L16 13.5L7 4.5L1 14.5L12 18.5Z" fill="#30A9E0" stroke="#0D328D" strokeWidth="2" strokeLinejoin="round"/></svg></span>
                <span>Client’s Testimonial <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.5L1 22.5L7 32.5L16 24.5L13.5 35.5H24.5L23 24.5L31 32.5L36.5 22L26 18.5L37 14.5L31 4.5L22 13.5L24.5 1H13.5L16 13.5L7 4.5L1 14.5L12 18.5Z" fill="#30A9E0" stroke="#0D328D" strokeWidth="2" strokeLinejoin="round"/></svg></span>
                <span>Client’s Testimonial <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.5L1 22.5L7 32.5L16 24.5L13.5 35.5H24.5L23 24.5L31 32.5L36.5 22L26 18.5L37 14.5L31 4.5L22 13.5L24.5 1H13.5L16 13.5L7 4.5L1 14.5L12 18.5Z" fill="#30A9E0" stroke="#0D328D" strokeWidth="2" strokeLinejoin="round"/></svg></span>
                <span>Client’s Testimonial <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.5L1 22.5L7 32.5L16 24.5L13.5 35.5H24.5L23 24.5L31 32.5L36.5 22L26 18.5L37 14.5L31 4.5L22 13.5L24.5 1H13.5L16 13.5L7 4.5L1 14.5L12 18.5Z" fill="#30A9E0" stroke="#0D328D" strokeWidth="2" strokeLinejoin="round"/></svg></span>
            </div>
            <div className='testimonials_inner_sec'>
                <div className='container'>
                    <div className='testimonials'>
                        {
                            testimonials.length > 0 &&
                            <Swiper {...swiperOptions} className="testimonials_carousel">
                                {testimonials.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial_item">
                                            {/* Testimonial Image */}
                                            <div className="testimonial_img">
                                            <img src={item.featured_image_url} alt={item.title.rendered} />
                                            {/* {item._embedded ? (
                                                <img
                                                src={item._embedded["wp:featuredmedia"]["0"].source_url}
                                                alt={item.title.rendered}
                                                />
                                            ) : (
                                                <img
                                                src="https://placehold.co/340x360?text=610+Web+Lab"
                                                alt={item.title.rendered}
                                                />
                                            )} */}
                                            </div>

                                            {/* Testimonial Content */}
                                            <div className="testimonial_content">
                                            {item.acf.stars > 1 && (
                                                <span className="rating">
                                                {[...Array(item.acf.stars)].map((_, i) => (
                                                    <svg
                                                    width="17"
                                                    height="17"
                                                    viewBox="0 0 17 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    key={i}
                                                    >
                                                    <path
                                                        d="M7.54933 0.927051C7.84869 0.0057404 9.1521 0.0057404 9.45145 0.927051L10.768 4.97893C10.9019 5.39095 11.2858 5.66991 11.719 5.66991H15.9794C16.9482 5.66991 17.3509 6.90953 16.5672 7.47893L13.1205 9.98313C12.77 10.2378 12.6233 10.6891 12.7572 11.1012L14.0738 15.153C14.3731 16.0743 13.3186 16.8405 12.5349 16.2711L9.08818 13.7669C8.73769 13.5122 8.26309 13.5122 7.91261 13.7669L4.46587 16.2711C3.68216 16.8405 2.62768 16.0743 2.92703 15.153L4.24357 11.1012C4.37744 10.6891 4.23078 10.2378 3.88029 9.98313L0.433562 7.47893C-0.350152 6.90953 0.052624 5.66991 1.02135 5.66991H5.28174C5.71497 5.66991 6.09893 5.39095 6.2328 4.97893L7.54933 0.927051Z"
                                                        fill="#FEAD18"
                                                    />
                                                    </svg>
                                                ))}
                                                </span>
                                            )}
                                            <h3 className="testimonial_title">{item.title.rendered}</h3>
                                            <p className="designation">{item.acf.designation}</p>
                                            <div
                                                className="testimonial_desc"
                                                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                                            ></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className='testimonials_nav'>
                                    <div className='swiper-button-prev'><FaChevronLeft /></div>
                                    <div className='swiper-button-next'><FaChevronRight /></div>
                                </div>
                            </Swiper>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;