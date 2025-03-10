import './trusted.css';
import OwlCarousel from 'react-owl-carousel';

function Trusted(){

    const options = {
        loop: true,
        smartSpeed: 1500,
        dots: false,
        nav: false,
        autoplay: true,
        responsive: {
          0: {
            margin: 20,
            items: 1
          },
          481: {
            margin: 40,
            items: 2
          },
          768: {
            margin: 50,
            items: 3
          },
          1200:{
            margin: 60,
            items: 4
          }
        }
    };

    return(
        <section className='trusted_customers_sec'>
            <div className='container'>
                <h2 className='sec_title'>Trusted By Over 1500 + Happy Customers Including</h2>
                <OwlCarousel className="owl-theme trusted_logos" {...options}>  
                    <div className='logo'>
                        <img src="images/trusted-logos/heal360.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/hubhopper.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/Orange-Grove-Advisors-Logo.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/smoke.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/Synthetic-Turf-Now--logo.png" alt="logo" />
                    </div>
                    <div className='logo'>
                        <img src="images/trusted-logos/Zipp-Cleaning-logo.png" alt="logo" />
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Trusted;