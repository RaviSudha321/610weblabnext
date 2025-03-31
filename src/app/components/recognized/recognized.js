import Button from '../button/button';
import './recognized.css';


function Recognized(){

    const recognizedData = [
        { 
            icon: "/images/modern-responsive-design.svg", 
            title: "Modern & Responsive Design", 
            description: "We believe in creating modern and highly responsive designs for our client’s project."
        },
        { 
            icon: "/images/awarded.svg", 
            title: "Awarded Licensed Company", 
            description: "We are an officially licensed company, ready to deliver the best solutions to our customers."
        },
        { 
            icon: "/images/modern-responsive-design.svg", 
            title: "Build Your Website Professionally", 
            description: "We create highly interactive and professional websites to give a face to your business."
        }
        
    ];

    return(
        <section className='recognized_sec'>
            <div className='container'>
                <div className='recognized_content'>
                    <div className='recognized_title_col'>
                        <h2 className='sec_title'>Why We're Recognized As A Top Web Development Company?</h2>
                        <Button 
                        title="Request A Quote"
                        link="/contact-us"
                        icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
                        />
                    </div>
                    <div className='recognized_boxes'>
                        {recognizedData.map((item, index) => {
                            return(
                                <div key={index} className='recognized_box'>
                                    <div className='recognized_icon'>
                                        <img src={item.icon} alt={item.title} />
                                    </div>
                                    <h3 className='recognized_title'>{item.title}</h3>
                                    <div className='recognized_desc'>{item.description}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recognized;