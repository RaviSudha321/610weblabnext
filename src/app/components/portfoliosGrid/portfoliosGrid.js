'use client';

import './portfoliosGrid.css';
import { useEffect, useState } from 'react';
import PortfolioBox from '../portfolioBox/portfolioBox';
import Button from '../button/button';

function PortfoliosGrid(){

    const [portfolios, setPortfolios] = useState([]);

    const getPortfolios = async()=>{
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}weblab-projects?order=asc&_embed`);
            if(!response.ok){
                throw new Error('Network response was not ok: portfolios');
            }
            const data = await response.json();
            setPortfolios(data);
        }
        catch (error){
            console.log('portfolios error:', error)
        }
    }

    useEffect(()=>{
        getPortfolios();
    },[]);


    return(
        portfolios.length > 0 &&
        <section className="portfolios_sec">
            <div className="container">
                <div className="portfolio_content">
                    <h2 className="sec_title">Web Portfolio</h2>
                    <div className="portfolio_boxes">
                        {
                            portfolios.map((item, index)=>{
                                return(
                                    <PortfolioBox
                                    title={item.title.rendered}
                                    imageUrl={item._embedded['wp:featuredmedia']['0'].source_url}
                                    key={index}
                                    /> 
                                )
                            })
                        }
                    </div>
                    <Button 
                    title="View Portfolio"
                    link="/portfolio"
                    />
                </div>
            </div>
        </section>
    )
}

export default PortfoliosGrid;