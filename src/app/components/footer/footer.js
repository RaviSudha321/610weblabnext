"use client";

import Link from 'next/link';
import './footer.css';
import Button from '../button/button';
import Newsletter from '../newsletter/newsletter';
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import { usePathname } from "next/navigation";


function Footer(){

    const pathname = usePathname();

    const socialMedia = [
        {
            icon:<FaFacebookF />, 
            link:'https://www.facebook.com/610weblab/'
        },
        {
            icon:<FaXTwitter />,    
            link:'https://twitter.com/610Weblab/'
        },
        {
            icon:<FaInstagram />,    
            link:'https://www.instagram.com/610weblab/'
        },
        {
            icon:<FaLinkedinIn />,    
            link:'https://www.linkedin.com/company/610-web-lab'
        },
        {
            icon:<FaBehance />,
            link:'https://www.behance.net/6Xweblab'
        },
    ];

    return(
        <footer id="footer" className="footer_sec">
            <Newsletter />
            <div className="container">
                <div className="footer_content">
                    <div className="footer_col_one">
                        <div className="footer_logo">
                            <Link href="/"><img src="/images/logo-white.webp" alt="logo" /></Link>
                        </div>
                        <p className="footer_desc">610 WebLab specializes in creating intuitive, SEO-friendly websites. Our dedicated team ensures your online presence is impactful and engaging.</p>
                        <div className="hire_sec">
                            <img src="/images/upwork.webp" alt="upwork logo" />
                            <h3>Real Clients Real Work -</h3>
                            <Button 
                            title="HIRE US"
                            link="/contact-us"
                            />
                        </div>
                    </div>
                    <div className="footer_col_two">
                        <h3 className="menu_title">Quick Links</h3>
                        <ul className="footer_menu">
                            <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
                            <li><Link href="/about-us" className={pathname === "/about-us" ? "active" : ""}>About us</Link></li>
                            <li><Link href="/portfolio" className={pathname === "/portfolio" ? "active" : ""}>Portfolio</Link></li>
                            <li><Link href="/careers" className={pathname === "/careers" ? "active" : ""}>Careers</Link></li>
                            <li><Link href="/contact-us" className={pathname === "/contact-us" ? "active" : ""}>Contact us</Link></li>
                            <li><Link href="/blog" className={pathname === "/blog" ? "active" : ""}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="footer_col_three">
                        <h3 className="menu_title">IT Services</h3>
                        <ul className="footer_menu">
                            <li><Link href="/website-development" className={pathname === "/website-development" ? "active" : ""}>Website Development</Link></li>
                            <li><Link href="/wordpress-development" className={pathname === "/wordpress-development" ? "active" : ""}>Wordpress Development</Link></li>
                            <li><Link href="/shopify-development" className={pathname === "/shopify-development" ? "active" : ""}>Shopify Development</Link></li>
                            <li><Link href="/php-development" className={pathname === "/php-development" ? "active" : ""}>PHP Development</Link></li>
                        </ul>
                    </div>
                    <div className="footer_col_four">
                        <h3 className="menu_title">Contact Information</h3>
                        <div className="contact_icon_list">
                            <div className="contact_icon_list_item">
                                <span className='icon'>
                                    <img src="/images/location.svg" alt="Address" />
                                </span>
                                <span className='title'>
                                    <a href="https://maps.app.goo.gl/JK4FKqKiLP8nhJ6bA" target="_blank">C-196/A, Times Square Building, 3rd Floor, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</a>
                                </span>
                            </div>
                            <div className="contact_icon_list_item">
                                <span className='icon'>
                                    <img src="/images/phone.svg" alt="Phone" />
                                </span>
                                <span className='title'>
                                    <a href="tel:+918427814610">+91 8427-8146-10</a>
                                </span>                                    
                            </div>
                            <div className="contact_icon_list_item">
                                <span className='icon'>
                                    <img src="/images/envelope.svg" alt="Email" />
                                </span>
                                <span className='title'>
                                    <a href="mailto:support@610weblab.com">support@610weblab.com</a>
                                </span>
                            </div>
                        </div>
                        <div className="social_links">
                            <h3 className="menu_title">We Are Social</h3>
                            <ul>
                                {socialMedia.map((item, index) => {
                                    return(
                                        <li key={index}>
                                            <a href={item.link} target="_blank">
                                                {item.icon}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;