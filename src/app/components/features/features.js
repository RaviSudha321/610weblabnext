import './features.css';

const featuresData = [
    {
        title: "User-Friendly Interface",
        description: "Ensures easy navigation and enhances user engagement on the site.",
        imgSrc: "/images/user-friendly-interface.svg",
        bgColor: "#FBFBFF",
        imgWidth: "36px"
    },
    {
        title: "Responsive Design",
        description: "Adapts to various devices for a seamless user experience.",
        imgSrc: "/images/responsive-design.svg",
        bgColor: "#F7FFFF",
        imgWidth: "48px"
    },
    {
        title: "SEO Optimization",
        description: "Improves website visibility in search engine results.",
        imgSrc: "/images/seo-optimization.svg",
        bgColor: "#FAFBFF",
        imgWidth: "48px"
    },
    {
        title: "Fast Loading Speed",
        description: "Reduces bounce rate and increases user satisfaction.",
        imgSrc: "/images/fast-loading-speed.svg",
        bgColor: "#FAFBFF",
        imgWidth: "50px"
    },
    {
        title: "High-Quality Content",
        description: "Attracts visitors and encourages them to take action.",
        imgSrc: "/images/high-quality-content.svg",
        bgColor: "#F8F7F2",
        imgWidth: "44px"
    },
    {
        title: "Security",
        description: "Protects user data, builds trust, and meets legal requirements.",
        imgSrc: "/images/security.svg",
        bgColor: "#EEF0FF",
        imgWidth: "40px"
    },
    {
        title: "Clear Calls to Action (CTAs)",
        description: "Directs users to desired actions efficiently.",
        imgSrc: "/images/clear-calls.svg",
        bgColor: "#FFF9FE",
        imgWidth: "45px"
    }
];

function Features(){
    return(
        <section className='features_sec'>
            <div className='container'>
                <h2 className='sec_title'>Powerful Features & Benefits of a Perfectly Designed Website</h2>
                <div className='features_list'>
                    {featuresData.map((feature, index) => (
                        <div className='feature_box' key={index}>
                            <div className='feature_box_content'>
                                <div className='feature_box_content_inner' style={{ backgroundColor: feature.bgColor }}>
                                    <span className='icon'>
                                        <img src={feature.imgSrc} alt={feature.title} style={{ width: feature.imgWidth }} />
                                    </span>
                                    <h3 className='title'>{feature.title}</h3>
                                    <p className='description'>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;