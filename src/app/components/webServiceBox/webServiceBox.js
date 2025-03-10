import './webServiceBox.css';


function WebServiceBox({title, description, backgroundColor}){
    return(
        <div className='service_box' style={backgroundColor && {backgroundColor:backgroundColor}}>
            <div className='servicebox_content'>
                {title && <h3 className='servicebox_title'>{title}</h3>}
                {description && <div className='servicebox_description'>{description}</div>}
            </div>
        </div>
    )
}

export default WebServiceBox;