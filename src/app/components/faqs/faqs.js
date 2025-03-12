'use client';

import { useEffect, useState } from 'react';
import './faqs.css';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


function Faqs(){

    const [activeItem, setActiveItem] = useState();
    const [faqs, setFaqs] = useState([]);

    const getFaqs = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}/weblab-faqs?order=asc`);
            
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setFaqs(data);
        }
        catch (error) {
            console.log('faqs fetch error', error)
        }
    } 

    useEffect(()=>{
        getFaqs();
    },[process.env.REACT_APP_REST_API_URL])

    const handleClick = (index) => {
        if(activeItem == index){
            setActiveItem();
        } else {
            setActiveItem(index);
        }
    }

    return(
        <section className='faqs_sec'>
            <div className='container'>
                <h2 className='sec_title'>FAQs</h2>
                {
                    faqs.length > 0 &&
                    <div className='faqs_list'>
                        {
                            faqs.map((faq, index)=>{
                                return(
                                    <div className={`faq_item ${activeItem == index ? 'active' : ''}`} onClick={()=>handleClick(index)} key={index}>
                                        <h4 className='question' dangerouslySetInnerHTML={{__html: faq.title.rendered}}></h4>
                                        <span className='icon'>{activeItem == index ? <FaMinus /> : <FaPlus />}</span>
                                        <div className='answer' dangerouslySetInnerHTML={{__html: faq.content.rendered}}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </section>
    )
}

export default Faqs;