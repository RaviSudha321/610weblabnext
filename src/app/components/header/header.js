'use client';

import './header.css';
import Button from '../button/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";

function Header(){

    const pathname = usePathname(); 
    const [headerClass, setHeaderClass] = useState('');
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeSubMenus, setActiveSubMenus] = useState();
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth);
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
        }
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth])

    useEffect(()=>{
        window.addEventListener('scroll', function(){
            if(window.scrollY > 20){
                setHeaderClass('sticky_header');
            } else {
                setHeaderClass('');
            }
        })
    }, [headerClass]);

    useEffect(()=>{
        setActiveMenu(false);
        setActiveSubMenus([]);
    }, [pathname])

    const handleSubMenu = (index) => {
        if (activeSubMenus == index) {
            // Remove the item and update the state
            setActiveSubMenus(0);
        } else {
            // Add the item and update the state
            setActiveSubMenus(index)
        }
    }

    return(
        <header id="header" className={`header_sec ${headerClass}`}>
            <div className="container">
                <div className='header_content'>
                    <div className="header_left_col">
                        <div className="header_logo">
                            <Link href="/"><img src='/images/logo.png' alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="header_right_col">
                        <div className={`header_right_col_content ${activeMenu ? 'active' : ''}`}>
                            <div className="header_menu">
                                <nav className="navigation">
                                    <ul className='menu'>
                                        <li>
                                            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/web-design-services" className={pathname === "/web-design-services" ? "active" : ""}>Web Design</Link>
                                        </li>
                                        {
                                            windowWidth > 1024 ?
                                            <li className={`has_sub_menu mega_menu_item ${activeSubMenus == 3 ? 'active_sub_menu' : ''}`}>
                                                <Link href="/web-development" onClick={(e)=>{e.preventDefault(); handleSubMenu(3)}}>
                                                    Web Development
                                                    {
                                                        activeSubMenus == 3 ? <FaChevronUp /> : <FaChevronDown />
                                                    }    
                                                </Link>
                                                <ul className="sub_menu mega_menu">  
                                                    <li>
                                                        <ul>
                                                            <li>
                                                                <Link href="/php-development" className={pathname === "/php-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> PHP Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shopify-development" className={pathname === "/shopify-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Shopify Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/open-source-development" className={pathname === "/open-source-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Open Source Development</Link>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Link href="/responsive-website-design-and-development" className={pathname === "/responsive-website-design-and-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Responsive Websites Design & Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/wordpress-development" className={pathname === "/wordpress-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> WordPress Development</Link>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Link href="/web-development-services" className={pathname === "/web-development-services" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Web Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/custom-software-development" className={pathname === "/custom-software-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Custom Software Development</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> : 
                                            <li className={`has_sub_menu ${activeSubMenus == 3 ? 'active_sub_menu' : ''}`}>
                                                <Link href="/web-development" onClick={(e)=>{e.preventDefault(); handleSubMenu(3)}}>
                                                    Web Development
                                                    {
                                                        activeSubMenus == 3 ? <FaChevronUp /> : <FaChevronDown />
                                                    }  
                                                </Link>
                                                <ul className="sub_menu">                                                
                                                    <li>
                                                        <Link href="/php-development" className={pathname === "/php-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> PHP Development</Link>
                                                    </li>
                                                    <li>    
                                                        <Link href="/shopify-development" className={pathname === "/shopify-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Shopify Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/open-source-development" className={pathname === "/open-source-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Open Source Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/responsive-website-design-and-development" className={pathname === "/responsive-website-design-and-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Responsive Websites Design & Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/wordpress-development" className={pathname === "/wordpress-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> WordPress Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/web-development" className={pathname === "/web-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Web Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/custom-software-development" className={pathname === "/custom-software-development" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Custom Software Development</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        }
                                        {
                                            windowWidth > 1024 ?
                                            <li className={`has_sub_menu mega_menu_item ${activeSubMenus == 4 ? 'active_sub_menu' : ''}`}>
                                                <Link href="/digital-marketing-services" onClick={(e)=>{e.preventDefault(); handleSubMenu(4)}}>
                                                    Digital Marketing
                                                    {
                                                        activeSubMenus == 4 ? <FaChevronUp /> : <FaChevronDown />
                                                    }   
                                                </Link>
                                                <ul className="sub_menu mega_menu">  
                                                    <li>
                                                        <ul>
                                                            <li>
                                                                <Link href="/digital-marketing-services" className={pathname === "/digital-marketing-services" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Digital Marketing</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/social-media-marketing" className={pathname === "/social-media-marketing" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Social Media Marketing</Link>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Link href="/seo-services" className={pathname === "/seo-services" ? "active" : ""}><MdKeyboardDoubleArrowRight /> SEO Services</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/facebook-ads" className={pathname === "/facebook-ads" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Facebook Ads</Link>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <Link href="/ppc-services" className={pathname === "/ppc-services" ? "active" : ""}><MdKeyboardDoubleArrowRight /> PPC</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> : 
                                            <li className={`has_sub_menu ${activeSubMenus == 4 ? 'active_sub_menu' : ''}`}>
                                                <Link href="/digital-marketing-services" onClick={(e)=>{e.preventDefault(); handleSubMenu(4)}}>
                                                    Digital Marketing
                                                    {
                                                        activeSubMenus == 4 ? <FaChevronUp /> : <FaChevronDown />
                                                    }
                                                </Link>
                                                <ul className="sub_menu">                                                
                                                    <li>
                                                        <Link href="/digital-marketing-services" className={pathname === "/digital-marketing-services" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Digital Marketing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/seo-services" className={pathname === "/seo-services" ? "active" : ""}><MdKeyboardDoubleArrowRight /> SEO Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ppc-services" className={pathname === "/ppc-services" ? "active" : ""}><MdKeyboardDoubleArrowRight /> PPC</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/social-media-marketing" className={pathname === "/social-media-marketing" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Social Media Marketing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/facebook-ads" className={pathname === "/facebook-ads" ? "active" : ""}><MdKeyboardDoubleArrowRight /> Facebook Ads</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        }
                                        <li>
                                            <Link href="/about-us" className={pathname === "about-us" ? "active" : ""}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio" className={pathname === "/portfolio" ? "active" : ""}>Portfolio</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <Button
                            title="Request A Quote"
                            icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
                            link="/contact-us"
                            />
                        </div>
                        <span className='menu_toggle' onClick={()=>{setActiveMenu((prevState)=>!prevState)}}>
                            {
                                activeMenu ? <RiCloseLargeFill /> : <FaBarsStaggered />
                            }
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;