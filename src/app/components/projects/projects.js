'use client';

import Button from '../button/button';
import './projects.css';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Projects(){

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}/weblab-projects?_embed&order=asc`);
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Failed to fetch projects:', error);
        }
    }

    useEffect(()=>{
        getProjects();
    }, []);

    const swiperOptions = {
        loop: true,             
        speed: 1500,           
        spaceBetween: 27,     
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 0 },
            641: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1025: { slidesPerView: 2.5 },
            1200: { slidesPerView: 3 }
        }
    };

    
    return(
        <section className='projects_sec'>
            <div className='container'>
                <h3 className='sec_sub_title'>Recent Projects</h3>
                <h2 className='sec_title'>Look at latest works gallery</h2>
                {
                    projects.length > 0 &&
                    <div className='projects_carousel_outer'>
                        <Swiper {...swiperOptions} modules={[Navigation]} className="projects_carousel">
                            {projects.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="project_item">
                                        <div className="project_img">
                                            <a href={item.acf.project_link || '#'} target={item.acf.project_link ? '_blank' : ''}>
                                                <img src={item._embedded?.['wp:featuredmedia']?.[0]?.source_url} alt="Project" />
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="swiper-button-prev">
                                <IoIosArrowBack size={24} />
                            </div>
                            <div className="swiper-button-next">
                                <IoIosArrowForward size={24} />
                            </div>
                        </Swiper>
                    </div>
                }
                <div className='projects_action'>
                    <Button 
                    title="View Work"
                    link="/portfolio"
                    />
                    <Button 
                    title="Request A Quote"
                    link="/contact-us"
                    icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects;