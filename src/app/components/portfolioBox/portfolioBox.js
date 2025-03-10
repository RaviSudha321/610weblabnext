import './portfolioBox.css';


function PortfolioBox({title, imageUrl}){
    return(
        <div className={`portfolio_box`}>
            <div className='portfolio_img'>
                {imageUrl ? <img src={imageUrl} alt={title || 'Portfolio Image'} /> : <img src="https://placehold.co/430x360?text=610+Web+Lab" alt={title || 'Portfolio Image'} />}
            </div>
            <h3 className='portfolio_title'>{title ? title : 'Portfolio Title'}</h3>
        </div>
    )   
}

export default PortfolioBox;