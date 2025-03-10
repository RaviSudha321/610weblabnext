import './workCulture.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

function WorkCulture(){

    const images = [
        { src: "images/culture-4.webp", alt: "Team collaboration session" },
        { src: "images/culture-5.webp", alt: "Employee training workshop" },
        { src: "images/culture-3.webp", alt: "Office workspace view" },
        { src: "images/culture-6.webp", alt: "Group brainstorming activity" },
        { src: "images/culture-9.webp", alt: "Team celebration event" },
        { src: "images/culture-7.webp", alt: "Casual team gathering" },
        { src: "images/culture-1.webp", alt: "Employee recognition ceremony" },
        { src: "images/culture-8.webp", alt: "Outdoor team-building activity" },
        { src: "images/culture-2.webp", alt: "Company culture event" }
    ];

    return(
        <section className='work_culture_sec'>
            <div className='container'>
                <div className='work_culture_content'>
                    <h2 className='sec_title'>Establishing a working culture that Inspires</h2>
                    <div className='description'>
                    610weblab never let the spotlight shift from their employees who are the fuel behind this company. We encourage the growth of our employees by practicing innovative approaches that boost their morale. Above all, a balanced work-life culture is promoted inspiring freedom and creativity.
                    </div>
                    <div className='work_culture_gallery'>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 481: 2, 768: 3, 1025: 4}}>
                            <Masonry gutter='15px'>
                                {images.map((image, index) => {
                                    return(
                                        <div className='work_culture_img' key={index}>
                                            <img src={image.src} alt={image.alt} />
                                        </div>
                                    )
                                })}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkCulture;