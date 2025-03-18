import PageBanner from '@/app/components/pageBanner/pageBanner';
import BlogBox from '@/app/components/blogBox/blogBox';
import CallToAction from '@/app/components/callToAction/callToAction';
import Testimonials from '@/app/components/testimonials/testimonials';
import { fetchMetadata } from "@/app/lib/fetchMetadata";
import './search.css';


// Function to generate metadata for the search results page
export async function generateMetadata({ params }) {
    const { searchKeyword } = await params; 
    const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/search/${searchKeyword}`;

    const metadata = await fetchMetadata(apiUrl);
    console.log(metadata)
    return {
        title: metadata?.title || "Default Title",
        description: metadata?.description || "Default Description",
        openGraph: metadata?.openGraph || {},
        twitter: metadata?.twitter || {},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}


// Fetch search results from WordPress
async function fetchSearchResults(searchKeyword) {
    const res = await fetch(`https://610weblab.com/wp-json/wp/v2/posts?search=${searchKeyword}&_embed`);
    if (!res.ok) {
        console.error('Search API not working');
        return [];
    }
    return await res.json();
}

async function SearchPage({ params }) {

    const { searchKeyword } = await params;
    
    // Fetch search results server-side
    const searchResults = await fetchSearchResults(searchKeyword);

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

export default SearchPage;