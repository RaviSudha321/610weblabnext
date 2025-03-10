import Link from 'next/link';
import './blogBox.css';

function BlogBox({blog}){
    return(
        <div className='blog_item'>
            {
                blog && 
                <>
                    <div className='blog_img'>
                        <img src={blog?._embedded['wp:featuredmedia']['0'].source_url || 'default-image.jpg'} alt="image" />
                    </div>
                    <div className='blog_content'>
                        <h3 className='blog_title' dangerouslySetInnerHTML={{__html:blog.title.rendered.length>55?blog.title.rendered.slice(0,55)+'...':blog.title.rendered}}></h3>
                        <div className='blog_desc' dangerouslySetInnerHTML={{__html:blog.excerpt.rendered.slice(0, 120)+'...'}}></div>
                        <div className='blog_actions'>
                            <span className='icon'>
                                <img src="/images/calendar.svg" alt="calendar icon" />
                            </span>
                            <img src="/images/arrow-right.svg" alt="arrow" style={{width:'46px'}} />
                        </div>
                    </div>
                    <Link to={`/blog/${blog.slug}`} className='blog_link'></Link>
                </>
            }
        </div>
    )
}

export default BlogBox;