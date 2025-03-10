import './officeLocation.css';

function OfficeLocation(){
    return(
        <div className="office_location_sec">
            <div className="container">
                <h2 className="sec_title">610weblab Office</h2>
                <div className="description">We are located at the heart of Tricity, The Fastest Growing IT Region of India. Mohali</div>
                <div className="office_location_inner_sec">
                    <div className="office_address">
                        <div className="office_address_top">
                            <h3>Address</h3>
                            <h4>C-196/A, Times Square Building, 2nd Floor, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</h4>
                        </div>
                        <div className="office_address_bottom">
                            We're located in Mohali, With our Top-notch team members of 610weblab .
                        </div>
                    </div>
                    <div className="address_map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4049135549194!2d76.68453477607457!3d30.70701528687417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe44572a7c7%3A0xfdbafc3b892f2686!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1718263768936!5m2!1sen!2sin" width="100%" height="370" style={{border:0,borderRadius:"10px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OfficeLocation;