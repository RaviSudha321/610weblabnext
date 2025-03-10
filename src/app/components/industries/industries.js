import Button from '../button/button';
import './industries.css';


function Services(){
    return(
        <section className='industries_sec'>
            <div className='container'>
                <h3 className='sec_sub_title'>Industries</h3>
                <h2 className='sec_title'>Web Development Services For Various Industries</h2>
                <p className='description'>Get ready to elevate your online presence with our Web Development Services in India for various industries. At Webzia Infotech, we offer the perfect blend of technical competency and cross-industry expertise. With us, you can expect innovative solutions tailored to your unique needs.</p>
                <div className='industries'>
                    <div className='industry_box'>
                        <div className='industry_img'>
                            <img src="/images/logistic-industry.svg" alt="Logistics Industry" style={{width:"80px"}} />
                        </div>
                        <h3 className='industry_title'>Logistics Industry</h3>
                    </div>
                    <div className='industry_box'>
                        <div className='industry_img'>
                            <img src="/images/real-estate.svg" alt="Real Estate" style={{width:"80px"}} />
                        </div>
                        <h3 className='industry_title'>Real Estate</h3>
                    </div>
                    <div className='industry_box'>
                        <div className='industry_img'>
                            <img src="/images/food-restaurants.svg" alt="Food Restaurant" style={{width:"78px"}} />
                        </div>
                        <h3 className='industry_title'>Food Restaurant</h3>
                    </div>
                    <div className='industry_box'>
                        <div className='industry_img'>
                            <img src="/images/education-training.svg" alt="Education Training" style={{width:"78px"}} />
                        </div>
                        <h3 className='industry_title'>Education Training</h3>
                    </div>
                    <div className='industry_box'>
                        <div className='industry_img'>
                            <img src="/images/ecommerce-solution.svg" alt="E-Commerce Solutions" style={{width:"74px"}} />
                        </div>
                        <h3 className='industry_title'>E-Commerce Solutions</h3>
                    </div>
                    <div className='industry_box'>
                        <div className='industry_img'>
                            <img src="/images/travel-hospitality.svg" alt="Travel Hospitality" style={{width:"76px"}} />
                        </div>
                        <h3 className='industry_title'>Travel Hospitality</h3>
                    </div>
                    <div className='industry_box'>
                        <div className='industry_img'>
                            <img src="/images/healthcare-fitness.svg" alt="Healthcare Fitness" style={{width:"80px"}} />
                        </div>
                        <h3 className='industry_title'>Healthcare Fitness</h3>
                    </div>
                    <div className='industry_box'>
                        <div className='industry_img'>
                            <img src="/images/media-entertainment.svg" alt="Media & Entertainment" style={{width:"76px"}} />
                        </div>
                        <h3 className='industry_title'>Media & Entertainment</h3>
                    </div>
                </div>
                <Button
                title="Request A Quote"
                link="/contact-us"
                icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
                />
            </div>
        </section>
    )
}

export default Services;