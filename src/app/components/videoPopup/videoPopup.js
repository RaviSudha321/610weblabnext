import './videoPopup.css';
import { FaTimes } from "react-icons/fa";

function VideoPopup({videoUrl, activePopup, setActivePopup}){
    return(
        <div className='popup_outer' style={activePopup ? {display: "block"} : null}>
            <div className='popup_inner'>
                <div className='popup_content'>
                    <span className='close_popup' onClick={()=>setActivePopup(false)}><FaTimes /></span>
                    <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoPopup;