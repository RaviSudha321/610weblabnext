import './button.css';
import Link from 'next/link';

function Button({title='Click Here', link="#", target="_self", icon, buttonClass=""}){
    return(
        <div className={`global_btn ${buttonClass ? buttonClass : null}` }>
            <Link href={link} target={target}>
                {icon}
                {title}
            </Link>
        </div>
    )
}

export default Button;