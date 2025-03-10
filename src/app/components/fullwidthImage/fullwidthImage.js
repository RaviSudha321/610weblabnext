import './fullwidthImage.css';

function FullwidthImage({imageUrl, alt, imageWidth}){
    return(
        <section className="fullwidth_img_sec">
            <div className='container'>
                <div className='fullimage'>
                    <img src={imageUrl} alt={alt} style={imageWidth && {maxWidth:imageWidth+"px"}} />
                </div>
            </div>
        </section>
    )
}

export default FullwidthImage;