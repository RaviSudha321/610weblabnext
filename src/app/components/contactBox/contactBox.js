import './contactBox.css';


function ContactBox({title, description, link, linkText="visit", socialMedia}){

    return(
        <div className="contact_box">
            <div className="contact_box_header">
                {title && <h3 className="contact_box_title">{title}</h3>}
                {link &&
                    <div className="contact_links">
                        <a href={link}>{linkText ? linkText : 'linkText'}</a>
                    </div>
                }
                {socialMedia &&
                    <div className='social_links'>
                        {socialMedia.map((item, index) => {
                            return(
                                <a href={item.link} target="_blank" key={index}>
                                    {item.icon}
                                </a>
                            )
                        })}
                    </div>
                }
            </div>
            <div className="contact_box_footer">
                {description && <div className="contact_box_desc">{description}</div>}
            </div>
        </div>
    )
}

export default ContactBox;