import Button from '../button/button';
import './callToAction.css';


function CallToAction(){
    return(
        <section className='cta_sec'>
            <div className='container'>
                <div className='cta_content'>
                    <div className='cta_left_col'>
                        <h2 className='sec_title'>Let’s Build Something Exceptional</h2>
                        <div className='description'>
                        Your business deserves a website that stands out. Let’s craft a custom solution that sets you apart from the competition. Get in touch today!
                        </div>
                    </div>
                    <div className='cta_right_col'>
                        <div className='cta_btn'>
                            <Button 
                            title="Let’s Get Started"
                            link="/contact-us"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;