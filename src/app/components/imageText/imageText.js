import './imageText.css';


function ImageText({backgroundImageUrl, backgroundColor="#ffffff", title, description, buttons, imageUrl, imageAltTag="image", imagePosition, imageWidth, content, contentAboveButton}){
    return(
        <section className='image_text_sec' style={backgroundImageUrl ? {backgroundImage:"url("+backgroundImageUrl+")",backgroundPosition:"center",backgroundSize:"cover"} : {backgroundColor:backgroundColor} }>
            <div className='container'>
                <div className={`image_text_content image_${imagePosition}`}>
                    <div className='image_text_left_col'>
                        {title && <h2 className='sec_title'>{title}</h2>}
                        {description && <p className='description'>{description}</p>}
                        {contentAboveButton && 
                            <div className={`above_content children_${contentAboveButton.length}`}>
                                {contentAboveButton}
                            </div>
                        }
                        {buttons &&
                            <div className='buttons'>
                                {buttons}
                            </div>
                        }
                        {content && 
                            <div className="bottom_content">
                                {content}
                            </div>
                        }
                    </div>
                    <div className='image_text_right_col'>
                        {imageUrl &&
                            <div className='image_area'>
                                <img src={imageUrl} alt={imageAltTag} style={imageWidth && {maxWidth:imageWidth+"px"}} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageText;