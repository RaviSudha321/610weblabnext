import './iconBox.css';

function IconBox({backgroundColor, iconUrl, iconWidth="50px", title="title", description}){
    return(
        <div className="icon_box" style={backgroundColor ? { backgroundColor: backgroundColor } : {}}>
            {
                iconUrl &&
                <div className="icon">
                    <img src={iconUrl} alt={title} style={{width:iconWidth}} />
                </div>
            }
            <h3 className="iconbox_title">{title}</h3>
            {
                description &&
                <div className="iconbox_description">
                    <p>{description}</p>
                </div>
            }
        </div>
    )
}
export default IconBox;