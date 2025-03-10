import './techTag.css';


function TechTag({title, description}){
    return(
        <section className='tech_tag_sec'>
            <div className='container'>
                <div className='tech_tag_content'>
                    <div className='tech_tag_title'>
                        {title && <h2 className='sec_title'>{title}</h2>}
                    </div>
                    <div className='tech_tag_description'>
                        {description &&
                        <div className='description'>
                            {
                                Array.isArray(description) ? 
                                    description.map((item, index)=>{
                                        return(
                                            <p key={index}>{item}</p>
                                        )
                                    })
                                : 
                                <p>{description}</p>
                            }
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechTag;