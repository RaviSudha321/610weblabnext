import Button from '../button/button';
import './callToAction.css';


function CallToAction(){
    return(
        <section className='cta_sec'>
            <div className='container'>
                <div className='cta_content'>
                    <div className='cta_left_col'>
                        <h2 className='sec_title'>Let’s Design Your New Website</h2>
                        <div className='description'>
                        Do you want to have a website that stands out and impresses your clients? Then we are ready to help! Click the button below to contact us and discuss your ideas.
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