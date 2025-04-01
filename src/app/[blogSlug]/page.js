import './singleBlog.css';
import CallToAction from '../components/callToAction/callToAction';
import PageBanner from '../components/pageBanner/pageBanner';
import Testimonials from '../components/testimonials/testimonials';
import BlogSidebar from '../components/blogSidebar/blogSidebar';
import BlogCommentForm from '../components/blogCommentForm/blogCommentForm';
import { fetchMetadata } from '../lib/fetchMetadata';


export async function generateMetadata({ params }) {
    const { blogSlug } = await params;
    const apiUrl = `${process.env.NEXT_PUBLIC_WP_REST_API_RANK_MATH_URL}getHead?url=https://610weblab.com/${blogSlug}/`;

    const metadata = await fetchMetadata(apiUrl);

    return {
        title: metadata?.title || "Default Title",
        description: metadata?.description || "Default Description",
        openGraph: metadata?.openGraph || {},
        twitter: metadata?.twitter || {},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}


// Fetch single blog post data from WordPress
async function fetchSinglePost(blogSlug) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}posts/?slug=${blogSlug}&_embed`);
    if (!response.ok) {
        console.error('Single post fetch error');
        return null;
    }
    const data = await response.json();
    return data.length > 0 ? data[0] : null; 
}

async function SingleBlog({ params }) {

    const { blogSlug } = await params;   

    // Fetch the single blog post server-side
    const post = await fetchSinglePost(blogSlug);

    if (!post) {
        return <div>No post found!</div>; 
    } 


    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    const commentCount = post.comment_count || post._embedded?.replies?.length || 0;

    return(
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
                                    post._embedded && post._embedded['wp:featuredmedia'] &&
                                    <div className='blog_img'>
                                        <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="image" style={{width:"100%"}} />
                                    </div> 
                                }
                                
                                {post.title && <h2 className='sec_title blog_title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>}
                                <div className='blog_meta'>
                                    <ul className='meta_items'>
                                        {
                                            post._embedded && post._embedded['author']['0'].code != 'rest_user_invalid_id' && 
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
    )
}

export default SingleBlog;