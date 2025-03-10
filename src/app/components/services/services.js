import './services.css';


function Services(){
    
    return(
        <section className='services_sec'>
            <div className='container'>
                <h2 className='sec_title'>Range Of Web Development Services We Offer</h2>
                <div className='services_boxes'>
                    <div className='service_box'>
                        <div className='service_icon'>
                            <img src="/images/web-design.svg" alt="Web Design" />
                        </div>
                        <h3 className='service_title'>Web Design</h3>
                        <div className='service_desc'>We provide web design services for every step in the process, from design, creation, to maintenance.</div>
                    </div>
                    <div className='services_img'>
                        <img src="images/services.webp" alt="image" />
                    </div>
                    <div className='service_box'>
                        <div className='service_icon'>
                            <img src="/images/managed-it.svg" alt="Managed IT Services" />
                        </div>
                        <h3 className='service_title'>Managed IT Services</h3>
                        <div className='service_desc'>We provide comprehensive and flexible services to monitor, maintain, and optimize the IT environment.</div>
                    </div>
                    <div className='service_box'>
                        <div className='service_icon'>
                            <img src="/images/web-development.svg" alt="Web Development" />
                        </div>
                        <h3 className='service_title'>Web Development</h3>
                        <div className='service_desc'>We design innovative, user-friendly, and result-driven websites for our customers.</div>
                    </div>
                    <div className='service_box'>
                        <div className='service_icon'>
                            <img src="/images/mobile-app-development.svg" alt="Mobile App Development" />
                        </div>
                        <h3 className='service_title'>Mobile App Development</h3>
                        <div className='service_desc'>We develop user-centric mobile applications using the latest technologies for multiple platforms, such as Android and iOS.</div>
                    </div>
                    <div className='service_box'>
                        <div className='service_icon'>
                            <img src="/images/custom-software-development.svg" alt="Custom Software Development" />
                        </div>
                        <h3 className='service_title'>Custom Software Development</h3>
                        <div className='service_desc'>We offer custom software development services based on our client’s unique organisational demands.</div>
                    </div>
                    <div className='service_box'>
                        <div className='service_icon'>
                            <img src="/images/digital-marketing.svg" alt="Custom Software Development" />
                        </div>
                        <h3 className='service_title'>Digital Marketing</h3>
                        <div className='service_desc'>We offer solutions to build and highlight the online business presence and boost sales.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;