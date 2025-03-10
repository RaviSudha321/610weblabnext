import './iconList.css';


function IconList({title, icon, items}){
    return(
        <div className="iconlist_main">
            {title && <h3 className='list_title'>{title}</h3>}
            <ul className='icon_list'>
                {items.map((item, index)=>{
                    return(
                        <li className='iconlist_item' key={index}>
                            <span className='item_icon'>{icon ? icon : '>'}</span>
                            <span className='item_title'>{item}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IconList;