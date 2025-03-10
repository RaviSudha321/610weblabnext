'use client';

import Button from '../button/button';
import './projects.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import { renderToString } from 'react-dom/server';

function Projects(){

    const options = {
        loop: true,
        margin: 27,
        smartSpeed: 1500,
        dots: false,
        nav: true,
        navText: [
            renderToString(<IoIosArrowBack size={24} />),
            renderToString(<IoIosArrowForward size={24} />)
        ],
        responsive: {
            0: { items: 1 },
            641: { items: 1.5 },
            768: { items: 2 },
            1025: { items: 2.5 },
            1200: { items: 3 }
        }
    };

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try{
            //const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/weblab-projects?_embed&order=asc`);
            const response = await fetch(`https://610weblab.in/610weblab/wp-json/wp/v2/weblab-projects?_embed&order=asc`);
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
    
    return(
        <section className='projects_sec'>
            <div className='container'>
                <h3 className='sec_sub_title'>Recent Projects</h3>
                <h2 className='sec_title'>Look at latest works gallery</h2>
                {
                    projects.length > 0 &&

                        <OwlCarousel className="projects_carousel" {...options}>
                        {
                            
                            projects.map((item, index)=>{
                                return(
                                    <div className='project_item' key={index}>
                                        <div className='project_img'>
                                            <a href={item.acf.project_link ? item.acf.project_link : '#'} target={item.acf.project_link ? '_blank' : ''}>
                                                <img src={item._embedded['wp:featuredmedia']['0'].source_url} alt="image" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
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