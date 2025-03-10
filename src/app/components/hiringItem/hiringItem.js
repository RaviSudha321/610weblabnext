import Button from '../button/button';
import './hiringItem.css';


function HiringItem({item, activeCategory}){
    
    const experience = item?.acf?.experience || 'N/A';
    const positions = item?.acf?.positions || 'N/A';
    const applyLink = item?.acf?.apply_button_link || '#';
    const categorySlug = item?._embedded?.['wp:term']?.[0]?.[0]?.slug || '';

    return(
        <div className={activeCategory == categorySlug || activeCategory == 'all' ? 'hiring_item active' : 'hiring_item hidden'}>
            <div className='vacancy_titles'>
                <h3 className='designation' dangerouslySetInnerHTML={{__html: item.title.rendered}}></h3>
                <p className='sub_title'>Experience</p>
                <span className='experience'>{experience} Years</span>
            </div>
            <div className='vacancy_positions'>
                <p className='sub_title'>Positions</p>
                <span className='positions'>{positions}</span>
            </div>
            <div className='hiring_description' dangerouslySetInnerHTML={{__html: item.content.rendered}}></div>
            <div className='hiring_actions'>
                <div className='apply_btn'>
                    <Button
                    title="Apply Now"
                    link={applyLink}
                    icon={<img src="/images/request-a-quote.svg" alt="Apply Now" style={{width:"21px"}} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default HiringItem;