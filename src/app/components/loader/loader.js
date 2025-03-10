import './loader.css';


function Loader(){
    return(
        <section className='loader_sec'>
            <div className='container'>
                <div className='loader_logo'>
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="loader"></div>
            </div>
        </section>
    )
}

export default Loader;