"use client";

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
                    <h2 className='sec_title'>Developing a Work Culture That Inspires</h2>
                    <div className='description'>
                    At 610 WebLab, our employees always come first—they’re the heart of our company. We help them grow by using new ideas to keep them motivated and inspired. Most importantly, we encourage a healthy balance between work and life, giving everyone the freedom to think creatively. We believe happy employees make a successful company.
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