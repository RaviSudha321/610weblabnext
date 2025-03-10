import './ratings.css';


function Ratings(){

    const ratingsData = [
        { platform: "Google", imgSrc: "images/google.webp", rating: 4.9 },
        { platform: "Justdial", imgSrc: "images/justdial.webp", rating: 4.8 },
        { platform: "LinkedIn", imgSrc: "images/linkedin.webp", rating: 4.9 },
        { platform: "Glassdoor", imgSrc: "images/glassdoor.webp", rating: 5.0 }
    ];

    return(
        <section className='ratings_sec'>
            <div className='container'>
                <div className='ratings'>
                    {ratingsData.map((rating, index) => {
                        return (
                            <div key={index} className='rating_item'>
                                <div className='platform_logo'>
                                    <img src={rating.imgSrc} alt={rating.platform} />
                                </div>
                                <div className='rating_count'>
                                    <img src="/images/stars.svg" alt={`Stars ${rating.platform}`} />
                                    {rating.rating}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Ratings;