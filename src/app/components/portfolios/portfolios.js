'use client';

import { useCallback, useEffect, useState } from 'react';
import PortfolioBox from '../portfolioBox/portfolioBox';
import './portfolios.css';
import Loading from '../loading/loading';

function Portfolios(){

    const [portfolios, setPortfolios] = useState([]);
    const [projectCats, setProjectCats] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentCat, setCurrentCat] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    const getPortfolios = useCallback(async()=>{
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}weblab-projects?order=asc&_embed`);
            if(!response.ok){
                throw new Error('Network response was not ok: portfolios');
            }
            const data = await response.json();
            setPortfolios(data);
        }
        catch (error){
            console.log('portfolios error:', error);
        } finally {
            setIsLoading(false);
        }
    },[]);

    const getProjectCats = useCallback(async() => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}project-categories`);
            if(!response.ok){
                throw new Error('Network response was not ok: portfolios');
            }
            const data = await response.json();
            setProjectCats(data);
        }
        catch (error) {
            console.log('portfolios categories:', error);
        } finally {
            setIsLoading(false);
        }
    },[]);

    const handleClick = (category) => {
        if(currentCat !== category){
            setCurrentCat(category);
            const filteredProjects = portfolios.filter((item)=>{
                return item['project-categories'].includes(category);
            });
            setFilteredProjects(filteredProjects);
        }
    }

    useEffect(()=>{
        getPortfolios();
        getProjectCats();
    },[getPortfolios, getProjectCats]);

    return(
        <section className='portfolios_sec'>
            <div className='container'>
                <div className='portfolio_content'>
                    <h2 className='sec_title'>Showcasing Our Best Work</h2>
                    <div className='description'>
                    At 610 WebLab, we take pride in every project we deliver, ensuring precision, creativity, and innovation in every detail. Our portfolio reflects our commitment to excellence and the impactful solutions we create for our clients.
                    </div>
                    {
                        isLoading ?
                        <Loading /> :
                        projectCats.length > 0 &&
                        <div className='portfolios_filter'>
                            <ul className='portfolio_cats'>
                                <li className={currentCat == 'all' && 'active'} onClick={()=>handleClick('all')}>All</li>
                                {
                                    projectCats.map((category, index) => {
                                        return(
                                            <>
                                            {
                                                category.count > 0 &&
                                                <li className={currentCat == category.id && 'active'} key={index} onClick={()=>handleClick(category.id)}>{category.name}</li> 
                                            }
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }
                    
                    {
                        portfolios.length > 0 &&
                        <div className='portfolio_boxes'>
                            {
                                filteredProjects.length > 0 
                                ?
                                    filteredProjects.map((item, index)=>{
                                        return (
                                            <PortfolioBox
                                                title={item.title.rendered}
                                                imageUrl={item._embedded['wp:featuredmedia']['0'].source_url}
                                                key={index}
                                                currentCat={currentCat}
                                                terms={item._embedded['wp:term']['0']}
                                            />
                                        )
                                    })
                                : 
                                portfolios.map((item, index)=>{
                                    return (
                                        <PortfolioBox
                                            title={item.title.rendered}
                                            imageUrl={item._embedded['wp:featuredmedia']['0'].source_url}
                                            key={index}
                                            currentCat={currentCat}
                                            terms={item._embedded['wp:term']['0']}
                                        />
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolios;