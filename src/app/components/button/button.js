import './button.css';
import Link from 'next/link';

function Button({title='Click Here', link="#", target="_self", icon, buttonClass="", buttonBg}){
    return(
        <div className={`global_btn ${buttonClass ? buttonClass : null}` }>
            <Link href={link} target={target} style={{backgroundColor:buttonBg}}>
                {icon}
                {title}
            </Link>
        </div>
    )
}

export default Button;