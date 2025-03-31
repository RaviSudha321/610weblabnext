import Link from 'next/link';
import Image from 'next/image';
import './blogBox.css';

function BlogBox({blog}) {
    if(!blog) return null;

    return (
        <div className='blog_item'>
            {
                blog&&
                <>
                    <div className='blog_img'>
                        <Link href={`/${blog.slug}`}>
                            <img src={blog?._embedded['wp:featuredmedia']['0'].source_url||'default-image.jpg'} alt="image" />
                        </Link>
                    </div>
                    <div className='blog_content'>
                        <h3 className='blog_title'>
                            <Link href={`/${blog.slug}`} dangerouslySetInnerHTML={{__html: blog.title.rendered.length>55? blog.title.rendered.slice(0,55)+'...':blog.title.rendered}}></Link>
                        </h3>
                        <div className='blog_desc' dangerouslySetInnerHTML={{__html: blog.excerpt.rendered.slice(0,120)+'...'}}></div>
                        <div className='blog_actions'>
                            <span className='icon'>
                                <Image src="/images/calendar.svg" alt="Calendar icon" width={46} height={46} />
                            </span>
                            <span className='blog_read_more'>
                                <Link href={`/${blog.slug}`}>
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                                        <path d="M12.0416 22.7887C12.1383 23.1052 12.2614 23.2721 12.5602 23.4743C12.7623 23.6149 13.4127 23.6237 21.3405 23.6237L29.9098 23.6237L27.6159 25.9264C25.1285 28.4225 25.0758 28.5016 25.2955 29.1872C25.4889 29.7673 26.1129 30.0749 26.7721 29.9079C26.9391 29.8727 28.0641 28.8093 30.1735 26.7175C31.9049 24.9948 33.4342 23.4216 33.5748 23.237C33.8473 22.8679 33.9176 22.2966 33.733 21.9274C33.5924 21.655 27.2467 15.2917 26.9567 15.1335C26.1041 14.6852 25.0846 15.4323 25.2604 16.3903C25.3131 16.6804 25.6295 17.0319 27.6159 19.027L29.9098 21.3386L21.358 21.3386C13.5973 21.3386 12.7887 21.3561 12.5602 21.4792C12.1295 21.7341 11.901 22.3141 12.0416 22.7887Z" fill="#2D3748" />
                                    </svg>
                                </Link>
                            </span>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default BlogBox;