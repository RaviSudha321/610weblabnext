'use client';

import './phpDevelopment.css';
import Button from '../components/button/button';
import CallToAction from '../components/callToAction/callToAction';
import PageBanner from '../components/pageBanner/pageBanner';
import PortfolioBox from '../components/portfolioBox/portfolioBox';
import TechTag from '../components/techTag/techTag';
import Testimonials from '../components/testimonials/testimonials';
import ImageText from '../components/imageText/imageText';
import FullwidthImage from '../components/fullwidthImage/fullwidthImage';
import { useEffect, useState } from 'react';

function PhpDevelopment(){

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
        "PHP is one of the best and most widely used scripting languages. PHP is used as a programming language by big giants of the web like Facebook, Wikipedia, slack, and many more because of its highly flexible and compatible nature. If you are the one who is in search of an expert and reliable PHP developer then get in touch with 610 Web Lab.",
        "Our in-house team of 20 most professional and certified developers is always ready to serve you with expert PHP Development Services."
    ]

    return(
        <div className="php_development_page">
            <PageBanner 
            title="Full Fledged PHP Development Solutions"
            description="We are one of the leading PHP Development service providers with years of industry experience. Get full Fledge custom PHP development with the latest frameworks like Laravel, Symfony, CodeIgniter, CakePHP"
            />

            <TechTag
            title="Advance PHP Development Services"
            description={techDescription}
            />

            <ImageText 
            title="How does 610 Web Lab help you with PHP Development Services?"
            description="We provide full-fledged custom PHP development services at a pocket-friendly cost. We deliver our projects within a specific time frame and we also provide 24*7 assistance after project delivery. 610 Web Lab will assist you if you are looking for Custom PHP development Services & Optimization of Existing PHP development projects."
            contentAboveButton="With our PHP development services get dynamic page content, more freedom to manage files on the server, more safety with data encryption & easy management of your data in the database. Call us now and talk to one of our experts to learn more."
            imageUrl="images/php-development.webp"
            imagePosition="left"
            imageWidth="535"
            />

            <FullwidthImage
            imageUrl="images/curve-image.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="Laravel"
            description="Laravel is one of the popular frameworks of PHP these days and is expected to be the most desirable framework in the future. Hire experienced Laravel developers at 610 Web Lab for your projects and leverage the advanced functionality. We are fully loaded with the skills and knowledge you require for customization and integrations faster than others. We have a solid team of developers to take care of your projects. We offer a complete package for development toward the Laravel framework."
            imageUrl="images/laravel.webp"
            imageWidth="410"
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
            title="Symfony"
            description="Symfony is a PHP framework with a collection of PHP components. Symfony offers you the advantage of using a PHP component according to your choice. There are many other big names that use Symfony in their projects are Joomla, Drupal, and Magento. Symfony offers a fast and secure climate for your project. If you are looking to hire an expert to start your Symfony development project, then get in touch with us today"
            imageUrl="images/symfony.webp"
            imagePosition="left"
            imageWidth="235"
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
            title="CodeIgniter"
            description="Code Igniter is one of the simplest yet quite popular PHP frameworks with almost zero requirements of configuration. Code igniter is loved by almost every scalable business because of its easy-to-use nature and quality. We are here to provide you with high-quality and sturdy solutions for your website and web applications. Start your project with us today."
            imageUrl="images/condigniter.webp"
            imageWidth="330"
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

export default PhpDevelopment;