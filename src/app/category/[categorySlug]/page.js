import PageBanner from "@/app/components/pageBanner/pageBanner";
import BlogBox from "@/app/components/blogBox/blogBox";
import './category.css';
import { fetchMetadata } from "@/app/lib/fetchMetadata";


export async function generateMetadata({ params }) {
    const { categorySlug } = await params;
    const apiUrl = `https://610weblab.com/wp-json/rankmath/v1/getHead?url=https://610weblab.com/category/${categorySlug}/`;

    const metadata = await fetchMetadata(apiUrl);

    return {
        title: metadata?.title || "Default Title",
        description: metadata?.description || "Default Description",
        openGraph: metadata?.openGraph || {},
        twitter: metadata?.twitter || {},
        //jsonLd: metadata?.jsonLd || "", // Store JSON-LD as a string
    };
}

// Fetch category data from WordPress
async function fetchCategory(categorySlug) {
    const res = await fetch(`https://610weblab.com/wp-json/wp/v2/categories?slug=${categorySlug}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data[0] || null;
}

// Fetch posts from the category
async function fetchCategoryPosts(categoryId) {
    if (!categoryId) return [];
    const res = await fetch(`https://610weblab.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed`);
    if (!res.ok) return [];
    return await res.json();
}

async function CategoryPage({ params }) {

    const { categorySlug } = await params;   

    // Fetch data server-side
    const category = await fetchCategory(categorySlug);
    if (!category) {
        return <div className="">No Category Found!</div>;
    }

    const categoryPosts = await fetchCategoryPosts(category.id);

    return(
        <>
            <PageBanner
            title={category.name}
            />
            <section className="category_posts_sec">
                <div className="container">
                    <div className="blogs_grid_content">
                    {
                        categoryPosts.length > 0 ? 
                        <div className="blogs_grid">
                            {
                                categoryPosts.map((post, index)=>{
                                    return(
                                        <BlogBox
                                        key={index}
                                        blog={post}
                                        />
                                    )
                                })
                            }
                        </div>
                        : 'No Posts Found!'
                    }
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default CategoryPage;