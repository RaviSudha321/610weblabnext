'use client';

import './singleBlog.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CallToAction from '../components/callToAction/callToAction';
import PageBanner from '../components/pageBanner/pageBanner';
import Testimonials from '../components/testimonials/testimonials';
import BlogSidebar from '../components/blogSidebar/blogSidebar';
import Loading from '../components/loading/loading';
import BlogCommentForm from '../components/blogCommentForm/blogCommentForm';
  

function SingleBlog(){

    const {blogSlug} = useParams();
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [commentCount, setCommentCount] = useState(0);

    const getPost = async() => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}/posts/?slug=${blogSlug}&_embed`);
            if(!response.ok){
                console.log('Single post fetch error');
            }
            const data = await response.json();
            if (data.length === 0) {
                console.warn('No post found');
                return;
            }

            setPost(data['0']);
            const comments = post.comment_count || post._embedded?.replies?.length || 0;
            setCommentCount(comments);
        }
        catch (error){
            console.log('single post', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        getPost();
    },[blogSlug]);

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    if(loading){
        return <Loading />
    }

    return(
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>"Static" | 610WebLab</title>
                <meta name="description" content="Static" />
                <meta name="keywords" content="web development, SEO, blog, WordPress" />
                <meta name="author" content="Static" />
                <link rel="canonical" href="Static" />

                {/* Open Graph (Facebook & LinkedIn) */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Static" />
                <meta property="og:description" content="Static" />
                <meta property="og:image" content="Static" />
                <meta property="og:url" content="Static" />
                <meta property="og:site_name" content="610WebLab" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Static" />
                <meta name="twitter:description" content="Static" />
                <meta name="twitter:image" content="Static" />
            </Head>
            <div className="single_blog_page">
                <PageBanner 
                title="Start, Build & Grow Your Business with 610weblab Blog"
                />
                { post &&
                    <section className='blog_details_sec'>
                        <div className='container'> 
                            <div className='blog_details_inner'>
                                <div className='blog_summary'>
                                    {
                                        post._embedded &&
                                        <div className='blog_img'>
                                            <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="image" style={{width:"100%"}} />
                                        </div> 
                                    }
                                    
                                    {post.title && <h2 className='sec_title blog_title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>}
                                    <div className='blog_meta'>
                                        <ul className='meta_items'>
                                            {
                                                post._embedded && 
                                                <li className='meta_item'>
                                                    <span className='meta_icon'>
                                                        <img src={post._embedded['author']['0'].avatar_urls['48']} alt={post._embedded['author']['0'].name} className='author_img' />
                                                    </span>
                                                    <span className='meta_title'>{post._embedded['author']['0'].name}</span>
                                                </li>
                                            }
                                            <li className='meta_item'>
                                                <span className='meta_icon'>
                                                    <img src="/images/calendar-meta.svg" alt="Post Date" style={{width: "23px"}} />
                                                </span>
                                                <span className='meta_title'>{formatDate(post.date_gmt)}</span>
                                            </li>
                                            <li className='meta_item'>
                                                <span className='meta_icon'>
                                                    <img src="/images/comments.svg" alt="Post Comments" style={{width: "23px"}} />
                                                </span>
                                                {
                                                    post._embedded && post._embedded['replies'] 
                                                    ? <span className='meta_title'>Comments ({post._embedded['replies']['0'].length})</span>
                                                    : <span className='meta_title'>Comments ({commentCount ? commentCount : 0})</span>
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                    {
                                        post.content &&
                                        <div className='blog_description' dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
                                    }

                                    <BlogCommentForm postId={post.id} />
                                </div>
                                <BlogSidebar currentPost={post.id} />
                            </div>
                        </div>
                    </section>
                }
                <CallToAction />
                <Testimonials />
            </div>
        </>
    )
}

export default SingleBlog;