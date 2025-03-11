import BlogsGrid from "../components/blogsGrid/blogsGrid";
import CallToAction from "../components/callToAction/callToAction";
import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";

function Blog(){
    return(
        <div className="blog_page">
            <PageBanner 
            title="Start, Build & Grow Your Business with 610weblab Blog"
            />
            <BlogsGrid />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Blog;