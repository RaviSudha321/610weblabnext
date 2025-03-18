'use client';
import './blogsGrid.css';
import React, { useCallback, useEffect, useState } from 'react';
import Loading from '../loading/loading';
import BlogBox from '../blogBox/blogBox';



function BlogsGrid(){

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const perPage = 3;

    useEffect(() => {
        const getAllBlogs = async()=>{
            try {
                setIsLoading(true);
                const response = await fetch(`https://610weblab.com/wp-json/wp/v2/posts?_embed`);
                if(!response.ok){
                    console.log('All blogs fetch issue');
                    setIsLoading(false);
                    return;
                }
                const data = await response.json();
                setTotalPages(Math.ceil(data.length / perPage));
            }
            catch (error) {
                console.log('blogs error', error);
            } finally {
                setIsLoading(false);
            }
        }

        getAllBlogs();
    },[]);

    const getBlogs = useCallback( async() => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://610weblab.com/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=${perPage}&offset=${offset}`);
            if(!response.ok){
                console.log('Blogs fetch issue');
                setIsLoading(false);
                return;
            }
            const data = await response.json();
            setBlogs(data);
        }
        catch (error) {
            console.log('blogs error', error);
        } finally {
            setIsLoading(false);
        }
    }, [currentPage, perPage])

    useEffect(()=>{
        getBlogs();
    },[getBlogs]);

    const handlePagination = (page) => {
        if(page) {
            if(typeof window !== "undefined"){
                window.scrollTo(0,0);
            }
            
            setCurrentPage(page);
            setOffset(perPage*(page-1));
        }
    }

    return(
        <section className='blogs_grid_sec'>
            <div className='container'>
                {
                    isLoading ?
                    <Loading /> :
                    blogs.length > 0 &&
                    <div className='blogs_grid_content'>
                        <div className='blogs_grid'>
                            {
                                blogs.map((blog, index)=>{
                                    return(
                                        <BlogBox blog={blog} key={index} />
                                    )
                                })
                            }
                        </div>
                        {
                            totalPages > 1 &&
                            <div className='pagination'>
                                <ul className='pagination_items'>
                                    {currentPage > 1 && <li><a href="#" onClick={(e)=>{e.preventDefault(); handlePagination(currentPage-1);}}>Prev</a></li>}
                                    {
                                        [...Array(totalPages)].map((x, i)=>{
                                            return(
                                                <React.Fragment key={i}>
                                                    {
                                                    currentPage === i+1 ?
                                                    <li><span>{i + 1}</span></li> :
                                                    <li><a href="#" data-number={i+1} onClick={(e)=>{e.preventDefault(); handlePagination(i+1);}}>{i + 1}</a></li>
                                                    }
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                    {currentPage < totalPages && <li><a href="#" onClick={(e)=>{e.preventDefault(); handlePagination(currentPage+1);}}>Next</a></li>}
                                </ul>
                            </div>
                        }
                    </div>
                }
            </div>
        </section>
    )
}

export default BlogsGrid;