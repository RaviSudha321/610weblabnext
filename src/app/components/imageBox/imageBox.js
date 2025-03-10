import './imageBox.css';

function ImageBox({imageUrl="https://placehold.co/250x200?text=610+WebLab", title="title", description}){
    return(
        <div className='imageBox'>
            <div className='box_img'>
                <img src={imageUrl} alt={title} />
            </div>
            <div className='imagebox_content'>
                <h3 className='imagebox_title'>{title}</h3>
                {
                    description && 
                    <div className='imagebox_desc'>{description}</div>
                }
            </div>
        </div>
    )
}
export default ImageBox;