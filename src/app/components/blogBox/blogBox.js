import Link from 'next/link';
import Image from 'next/image';
import './blogBox.css';

function BlogBox({blog}){
    if (!blog) return null;

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
                                <Image src="/images/calendar.svg" alt="Calendar icon" width={46} height={46} />
                            </span>
                            <Image src="/images/arrow-right.svg" alt="Arrow" width={46} height={46} />
                        </div>
                    </div>
                    <Link href={`/${blog.slug}`} className='blog_link'></Link>
                </>
            }
        </div>
    )
}

export default BlogBox;