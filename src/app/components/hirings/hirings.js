'use client';

import { useEffect, useState } from 'react';
import './hirings.css';
import Loading from '../loading/loading';
import HiringItem from '../hiringItem/hiringItem';


function Hirings(){

    const [hirings, setHirings] = useState([]);
    const [hiringsCats, setHiringsCats] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [hiringsResponse, categoriesResponse] = await Promise.all([
                    fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}weblab-hiring?_embed`),
                    fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}hiring-categories`)
                ]);

                if (!hiringsResponse.ok || !categoriesResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const hiringsData = await hiringsResponse.json();
                const categoriesData = await categoriesResponse.json();

                setHirings(hiringsData);
                setHiringsCats(categoriesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    const handleCategory = (category) => {
        if(activeCategory != category){
            setActiveCategory(category);
        }
    }

    if(isLoading){
        return <Loading />;
    }

    return(
        <section className='hirings_sec'>
            <div className='container'>
                <h2 className='sec_title'>Hiring Minds That Shape the Future</h2>
                <div className='description'>At 610 WebLab, we’re looking for skilled and passionate professionals across various domains, including Development, Design, SEO, Testing, and more. If you're ready to be part of a top-performing software development company, we’d love to hear from you! Send your updated résumé/CV to <a href="mailto:support@610weblab.com">support@610weblab.com</a>. We are currently hiring for the following positions:</div>
                {
                    hirings.length > 0 ?
                    <div className='hirings_content'>
                        {
                            hiringsCats.length > 0 &&
                            <div className='hirings_filter'>
                                <ul className='hiring_cats'>
                                    <li onClick={()=>handleCategory('all')} className={activeCategory == 'all' && 'active'}>All</li>   
                                    {
                                        hiringsCats.map((category, index)=>{
                                            return(
                                                <li 
                                                    className={activeCategory == category.slug && 'active'} 
                                                    key={index} 
                                                    onClick={()=>handleCategory(category.slug)}>
                                                    {category.name}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        }
                
                        <div className='hirings_items'>
                            {
                                hirings.map((item, index)=>{
                                    return(
                                        <HiringItem item={item} key={index} activeCategory={activeCategory} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    : <p style={{textAlign:'center', marginTop:'50px', fontSize:'24px',color:'#f00'}}>Hiring is closed now.</p>
                }
                
            </div>
        </section>
    )
}

export default Hirings;