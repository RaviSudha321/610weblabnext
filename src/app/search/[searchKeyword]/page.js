'use client';

import './search.css';
import { useParams } from 'next/navigation';
import BlogBox from '@/app/components/blogBox/blogBox';
import CallToAction from '@/app/components/callToAction/callToAction';
import PageBanner from '@/app/components/pageBanner/pageBanner';
import Testimonials from '@/app/components/testimonials/testimonials';
import { useEffect, useState } from "react";
import Loading from '@/app/components/loading/loading';

function Search(){

    const {searchKeyword} = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getPosts = async () => {
            if (!searchKeyword) return;
            try {
                setLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}/posts?search=searchKeyword&_embed`);
                if(!response.ok){
                    console.log('search api not working');
                    return;
                }
                const data = await response.json();
                setSearchResults(data);
            }
            catch (error) {
                console.log('search error', error);
            } finally {
                setLoading(false);
            }
        }

        getPosts();
    },[searchKeyword]);

    if(loading){
        return <Loading />
    }

    return(
        <div className="search_result_page">
            <PageBanner
            title={`Search Result For: ${searchKeyword}`}
            />
            {
                searchResults.length > 0 &&
                <section className="search_results">
                    <div className="container">
                        <div className="blogs_grid">
                            {
                                searchResults.map((post, index)=>{
                                    return(
                                        <BlogBox blog={post} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            }
            
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Search;