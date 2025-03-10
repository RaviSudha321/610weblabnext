import './pageBanner.css';


function PageBanner({title, description}){
    return(
        <section className='page_banner_sec'>
            <div className='container'>
                <div className='page_banner_content'>
                    <h1 className='banner_title'>{title ? title : 'Title'}</h1>
                    {description && <div className='banner_description'>{description}</div>}
                </div>
            </div>
        </section>
    )
}

export default PageBanner;