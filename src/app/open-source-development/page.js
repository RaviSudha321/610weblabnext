'use client';

import './openSourceDevelopment.css';
import Button from '../components/button/button';
import CallToAction from '../components/callToAction/callToAction';
import PageBanner from '../components/pageBanner/pageBanner';
import PortfolioBox from '../components/portfolioBox/portfolioBox';
import TechTag from '../components/techTag/techTag';
import Testimonials from '../components/testimonials/testimonials';
import ImageText from '../components/imageText/imageText';
import FullwidthImage from '../components/fullwidthImage/fullwidthImage';
import { useEffect, useState } from 'react';

function OpenSourceDevelopment(){

    const [portfolios, setPortfolios] = useState([]);

    const getPortfolios = async()=>{
        try {
            const response = await fetch('https://610weblab.in/610weblab/wp-json/wp/v2/weblab-projects?order=asc&_embed');
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

    const techDescription = [
        "610 WebLab – A leading organization providing expert open-source development solutions worldwide. A 610 WebLab of the best teams of certified and talented developers having expertise with the latest open source technologies like PHP, Drupal, Magento, and WordPress."
    ]

    return(
        <div className="open_source_development_page">
            <PageBanner 
            title="Open Source Development"
            description="A leading organization providing expert open-source development solutions worldwide"
            />

            <TechTag
            title="Professional Solutions for Open Source Development"
            description={techDescription}
            />

            <ImageText 
            title="We completely manage the backend of a website and provide a completely fresh and user-friendly website on the front end."
            contentAboveButton={<div><p><strong>Open Source Web Development</strong></p><p>Get reliable web development solutions with open source technology. We use a lightweight coding style and mini.</p><p><strong>Integration Solutions</strong></p><p>If you are looking for open-source integration services then look no other than 610 WebLab. We provide seamless open-source integrations.</p><p><strong>Open Source Migration Services</strong></p><p>Hire our experts at 610 WebLab for your next open source migrations task. We are here to provide you with website maintenance, debugging, data migrations, and version updates. Get a seamless migration experience only at 610 WebLab.</p></div>}
            imageUrl="images/open-source.webp"
            imagePosition="left"
            imageWidth="600"
            />

            <ImageText 
            title="PHP"
            description="PHP is perfect for web programming since PHP provides performance, speed, and reliability. We provide a complete solution for PHP development services using the most used frameworks like Laravel, Symfony and CakePHP, etc."
            imageUrl="images/php-development.webp"
            imageWidth="550"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image2.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="Magento"
            description="Our team of professional Shopify developers is always ready to help you manage your E-commerce store more efficiently from products to payments, third-party apps integrations, Shopify theme & app updates, web security, maintenance. 610 Web Lab is the one-stop solution for your Shopify development needs. So, just book a free consultation call with one of our professionals to discuss your vision and ideas."
            imageUrl="images/magento-development.webp"
            imagePosition="left"
            imageWidth="500"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="WordPress"
            description="WordPress is one of the best open-source platforms to build beautiful websites for small businesses and blogs. With years of working experience in WordPress development, we are here to serve you with complete WordPress development solutions including custom themes, plugins, upgrade, and third-party integration services for WordPress."
            imageUrl="images/wordpress-development.webp"
            imageWidth="550"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image2.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="MongoDB"
            description="We have years of experience and we are building powerful website and e-commerce solutions using MongoDB as a backend."
            imageUrl="images/mongo-db.webp"
            imagePosition="left"
            imageWidth="500"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire An Expert" style={{width:"25px"}} />}
                />
            }
            />

            {
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
            }

            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default OpenSourceDevelopment;