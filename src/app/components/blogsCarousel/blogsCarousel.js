'use client';

import './blogsCarousel.css';
import React, { useCallback, useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Button from '../button/button';
import BlogBox from '../blogBox/blogBox';


function BlogsCarousel(){

    const options = {
        loop: true,
        margin: 16,
        smartSpeed: 1500,
        dots: false,
        nav: true,
        navText: [
          '<svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2021 0.0900002C12.49 0.21796 12.8355 0.601841 12.9187 0.889753C13.0658 1.3824 12.9763 1.93903 12.6884 2.26533C12.6308 2.32931 10.6986 3.99919 8.40169 5.96338C6.11121 7.93396 4.23019 9.55906 4.23659 9.58465C4.23659 9.61024 6.15599 11.2673 8.50406 13.2763C13.149 17.2495 13.0594 17.1535 13.0594 17.8189C13.0594 18.2604 12.8163 18.7402 12.4708 18.9769C12.1509 19.2009 11.4983 19.2648 11.1336 19.1113C11.0057 19.0601 8.67681 17.1151 5.95126 14.7862C0.512944 10.1349 0.647303 10.2692 0.647303 9.57186C0.647303 8.90006 0.500149 9.04722 5.82969 4.46624C8.52326 2.15016 10.8393 0.205166 10.9865 0.128389C11.2872 -0.0251637 11.895 -0.0443573 12.2021 0.0900002Z" fill="#2D3748"/></svg>',
          '<svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.79789 0.0900002C1.50998 0.21796 1.16448 0.601841 1.08131 0.889753C0.934155 1.3824 1.02373 1.93903 1.31164 2.26533C1.36922 2.32931 3.30142 3.99919 5.59831 5.96338C7.88879 7.93396 9.76981 9.55906 9.76341 9.58465C9.76341 9.61024 7.84401 11.2673 5.49594 13.2763C0.850981 17.2495 0.940553 17.1535 0.940553 17.8189C0.940553 18.2604 1.18368 18.7402 1.52917 18.9769C1.84907 19.2009 2.50167 19.2648 2.86636 19.1113C2.99432 19.0601 5.32319 17.1151 8.04874 14.7862C13.4871 10.1349 13.3527 10.2692 13.3527 9.57186C13.3527 8.90006 13.4999 9.04722 8.17031 4.46624C5.47674 2.15016 3.16066 0.205166 3.01351 0.128389C2.7128 -0.0251637 2.10499 -0.0443573 1.79789 0.0900002Z" fill="#2D3748"/></svg>'
        ],
        responsive: {
          0: {
            items: 1
          },
          641: {
            items: 1.5
          },
          768: {
            items: 2
          },
          1025: {
            items: 2.5
          },
          1200:{
            items: 3
          }
        }
    };
    
    const [blogs, setBlogs] = useState([]);
      
    const getBlogs = useCallback(async () => {
      try{
        const response = await fetch(process.env.REACT_APP_REST_API_URL+'/posts?_embed');
        if(!response.ok){
          throw new Error('Network response was not ok');
      }
        const data = await response.json();
        setBlogs(data);
      }
      catch (error) {
        console.log('blogs not fetch', error);
      }
    }, [])
    
    useEffect(()=>{
      getBlogs();
    },[process.env.REACT_APP_REST_API_URL])

    return(
        <section className='blogs_sec'>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='blog_sec_header'>
                        <div className='blog_titles'>
                            <h3 className='sec_sub_title'>Get Every Updates</h3>
                            <h2 className='sec_title'>Read Latest News & Blog</h2>
                        </div>
                        <Button 
                        title="All Blogs"
                        link="/blog"
                        />
                    </div>
                </div>
                {
                  blogs.length > 0 ?
                  <div className='blogs_carousel_outer'>
                    <OwlCarousel className="owl-theme blogs_carousel" {...options}>  
                    {
                      blogs.map((blog, index)=>{
                        return(
                          <BlogBox blog={blog} key={index} />
                        )
                      })
                    }
                    </OwlCarousel>
                  </div>
                  : <p className="error_message">No blogs available at the moment.</p>
                }
            </div>
        </section>
    )
}

export default BlogsCarousel;