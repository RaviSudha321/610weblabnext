'use client';

import './blogSidebar.css';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

function BlogSidebar({currentPost}){
    
    const [categories, setCategories] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const getCategories = useCallback(async() => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}categories`);
            if(!response.ok){
                console.log('categories not fetched');
                return;
            }
            const data = await response.json();
            setCategories(data);
        }
        catch (error){
            console.log('categories error', error);
        }
    }, []);

    const getRecentPosts = useCallback(async() => {
        try {
            let url = `${process.env.NEXT_PUBLIC_WP_REST_API_URL}posts?_embed`;
            if (currentPost) {
                url += `&exclude=${currentPost}`;
            }
            const response = await fetch(url);
            if(!response.ok){
                console.log('recent posts not fetched');
                return;
            }
            const data = await response.json();
            setRecentPosts(data);
        }
        catch (error){
            console.log('recent posts error', error);
        }
    }, [currentPost]);

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    const onChangeSearch = (value) => {
        setSearchKeyword(value);
    }
    
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        redirect('/search/'+searchKeyword) 
    }

    useEffect(()=>{
        getCategories();
        getRecentPosts();
    }, [currentPost])

    return(
        <div className='blog_sidebar'>
            <div className='sidebar_widget sidebar_search'>
                <h3 className='sidebar_widget_title'>Search</h3>
                <form id="search_form" className='search_form' onSubmit={handleSearchSubmit}>
                    <input type="search" name="search" id="search" placeholder='Find Keywords' required onChange={(e)=>onChangeSearch(e.target.value)} />
                    <input type="submit" name="submit_search" id="submit_search" />
                </form>
            </div>
            {
                categories.length > 0 &&
                <div className='sidebar_widget sidebar_categories'>
                    <h3 className='sidebar_widget_title'>Category</h3>
                    <ul className='categories_list'>
                        {
                            categories.map((category, index)=>{
                                return (
                                    <React.Fragment key={category.id}>
                                        {
                                            category.count > 0 &&
                                                <li className='category_list_item'>
                                                <Link href={`/category/${category.slug}`}>
                                                    <span className='category_name'>{category.name}</span>
                                                    <span className='category_posts_count'>({category.count})</span>
                                                </Link>
                                            </li>
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            }
            
            {
                recentPosts.length > 0 &&
                <div className='sidebar_widget recent_news'>
                    <h3 className='sidebar_widget_title'>Recent News</h3>
                    <ul className='recent_news_list'>
                        {
                            recentPosts.map((post, index)=>{
                                return(
                                    <li className='recent_news_item' key={post.id}>
                                        {
                                            post._embedded 
                                            ? <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered} className='news_img' />
                                            : <img src="https://placehold.co/600x400?text=610+Web+Lab" alt="image" className='news_img' />
                                        }
                                        
                                        <Link href={`/blog/${post.slug}`}><h3 className='news_title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h3></Link>
                                        <span className='news_date'>
                                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.47064 0.925985C6.13646 1.12989 6.06283 1.32813 6.06283 2.01349V2.6252H5.17357C4.62416 2.6252 4.13138 2.65919 3.90482 2.7045C3.03255 2.89142 2.18861 3.37852 1.54857 4.05821C0.817905 4.83985 0.444077 5.74044 0.347788 6.92989C0.211851 8.63478 0.160874 11.1213 0.189194 14.5934C0.223179 18.6432 0.319468 20.6143 0.512046 21.3166C0.942515 22.8459 2.21693 24.1033 3.7349 24.4941C4.6638 24.732 8.06224 24.851 12.6501 24.8113C16.632 24.7717 18.5521 24.6811 19.2827 24.4941C20.7951 24.0977 22.0978 22.7893 22.4943 21.2656C22.6812 20.5463 22.7718 18.6035 22.8115 14.6613C22.8398 11.1836 22.7945 8.71407 22.6529 6.95821C22.5566 5.74044 22.1884 4.85118 21.4521 4.05821C20.812 3.37852 19.9681 2.89142 19.0958 2.7045C18.8693 2.65919 18.3765 2.6252 17.8327 2.6252H16.9378V2.01349C16.9378 1.32813 16.8642 1.12989 16.53 0.925985C16.2751 0.773056 15.788 0.773056 15.5331 0.925985C15.199 1.12989 15.1253 1.32813 15.1253 2.01349V2.6252H11.5003H7.87533V2.01349C7.87533 1.50938 7.85833 1.37911 7.76205 1.22052C7.59212 0.948641 7.33724 0.812704 6.96908 0.812704C6.75951 0.812704 6.59525 0.846687 6.47064 0.925985ZM6.06283 5.04376C6.06283 5.73478 6.13646 5.93302 6.47064 6.13692C6.72552 6.28985 7.21263 6.28985 7.46751 6.13692C7.80169 5.93302 7.87533 5.73478 7.87533 5.04376V4.4377H11.5003H15.1253V5.04376C15.1253 5.55352 15.1423 5.6838 15.2386 5.84239C15.4085 6.11427 15.6634 6.2502 16.0316 6.2502C16.3997 6.2502 16.6546 6.11427 16.8245 5.84239C16.9208 5.6838 16.9378 5.55352 16.9378 5.0381V4.42071L17.7478 4.4547C18.9316 4.50001 19.5433 4.74356 20.104 5.37794C20.5742 5.91603 20.7611 6.44278 20.8177 7.42266L20.8517 8.0627H11.5003H2.14896L2.18294 7.42266C2.23958 6.44278 2.4265 5.91603 2.89662 5.37794C3.03255 5.22501 3.27044 5.0211 3.42904 4.91915C3.99544 4.55665 4.43158 4.46036 5.48509 4.44337L6.06283 4.4377V5.04376ZM20.931 10.2434C20.9933 10.7871 20.9253 17.7596 20.8517 19.1076C20.812 19.7477 20.7441 20.45 20.6988 20.6709C20.4949 21.6565 19.6566 22.4947 18.671 22.6986C17.0058 23.0498 5.99486 23.0498 4.32962 22.6986C3.34408 22.4947 2.5058 21.6565 2.30189 20.6709C2.25658 20.45 2.18861 19.759 2.14896 19.1359C2.07533 17.8219 2.00736 10.7928 2.06966 10.2434L2.10931 9.8752H11.5003H20.8913L20.931 10.2434Z" fill="#30A9E0"/>
                                                <path d="M6.37402 12.7014C5.88125 12.9279 5.60938 13.3811 5.60938 13.9645C5.61504 14.7688 6.15879 15.3125 6.96875 15.3125C7.78438 15.3125 8.32812 14.7688 8.32812 13.9531C8.32812 13.3641 8.02793 12.8939 7.52383 12.6844C7.2293 12.5598 6.65723 12.5711 6.37402 12.7014Z" fill="#30A9E0"/>
                                                <path d="M10.9053 12.7014C10.4125 12.9279 10.1406 13.3811 10.1406 13.9645C10.1463 14.7688 10.69 15.3125 11.5 15.3125C12.3156 15.3125 12.8594 14.7688 12.8594 13.9531C12.8594 13.3641 12.5592 12.8939 12.0551 12.6844C11.7605 12.5598 11.1885 12.5711 10.9053 12.7014Z" fill="#30A9E0"/>
                                                <path d="M15.4365 12.7014C14.9438 12.9279 14.6719 13.3811 14.6719 13.9645C14.6775 14.7688 15.2213 15.3125 16.0312 15.3125C16.8469 15.3125 17.3906 14.7688 17.3906 13.9531C17.3906 13.3641 17.0904 12.8939 16.5863 12.6844C16.2918 12.5598 15.7197 12.5711 15.4365 12.7014Z" fill="#30A9E0"/>
                                                <path d="M6.37402 17.2326C5.88125 17.4592 5.60938 17.9123 5.60938 18.4957C5.61504 19.3 6.15879 19.8438 6.96875 19.8438C7.78438 19.8438 8.32812 19.3 8.32812 18.4844C8.32812 17.8953 8.02793 17.4252 7.52383 17.2156C7.2293 17.091 6.65723 17.1023 6.37402 17.2326Z" fill="#30A9E0"/>
                                                <path d="M10.9053 17.2326C10.4125 17.4592 10.1406 17.9123 10.1406 18.4957C10.1463 19.3 10.69 19.8438 11.5 19.8438C12.3156 19.8438 12.8594 19.3 12.8594 18.4844C12.8594 17.8953 12.5592 17.4252 12.0551 17.2156C11.7605 17.091 11.1885 17.1023 10.9053 17.2326Z" fill="#30A9E0"/>
                                                <path d="M15.4365 17.2326C14.9438 17.4592 14.6719 17.9123 14.6719 18.4957C14.6775 19.3 15.2213 19.8438 16.0312 19.8438C16.8469 19.8438 17.3906 19.3 17.3906 18.4844C17.3906 17.8953 17.0904 17.4252 16.5863 17.2156C16.2918 17.091 15.7197 17.1023 15.4365 17.2326Z" fill="#30A9E0"/>
                                            </svg>
                                            {formatDate(post.date_gmt)}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
            <div className='sidebar_widget sidebar_adds'>
                <div className='sidebar_add_banner'>
                    <img src="/images/add-banner.webp" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;