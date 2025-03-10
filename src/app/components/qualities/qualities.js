import './qualities.css';


function Qualities(){

    const qualitiesData = [
        {
            title: "Team Work",
            description: "Team Work is one of the keys to success, and at 610 WebLab we communicate to share ideas and knowledge, delight and appreciate each other to keep the motivation high as always.",
            imgSrc: "/images/team-work.svg",
            bgColor: "#F9F9FF"
        },
        {
            title: "Unmatched & powerful solutions",
            description: "Team Work is one of the keys to success, and at 610 WebLab we communicate to share ideas and knowledge, delight and appreciate each other to keep the motivation high as always.",
            imgSrc: "/images/powerful-solutions.svg",
            bgColor: "#F1FFFF"
        },
        {
            title: "Integrity & Trust",
            description: "We are a team of trustworthy people who are always committed to privacy. We always keep the data and other resources of our clients secure and confidential.",
            imgSrc: "/images/integrity-trust.svg",
            bgColor: "#F6F9FF"
        },
        {
            title: "Client Satisfaction",
            description: "Client Satisfaction is another work principle of our squad. We are always ready to serve our clients with future-proof and tailored solutions that satisfy all of their business needs.",
            imgSrc: "/images/client-satisfaction.svg",
            bgColor: "#FFFAFE"
        },
        {
            title: "24*7 Support system",
            description: "A support team is available 24*7 to help our clients with the error and other issues they got during the project or even after completion of the project.",
            imgSrc: "/images/support.svg",
            bgColor: "#F3F1EA"
        }
    ];
    
    return(
        <section className='qualities_sec'>
            <div className='container'>
                <div className='qualities_content'>
                    {qualitiesData.map((quality, index) => {
                        return(
                            <div key={index} className='quality_box' style={{backgroundColor:quality.bgColor}}>
                                <div className='quality_icon'>
                                    <img src={quality.imgSrc} alt={quality.title} />
                                </div>
                                <h3 className='quality_title'>{quality.title}</h3>
                                <div className='quality_description'>{quality.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Qualities;