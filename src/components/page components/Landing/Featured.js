import '../../../assets/css/styles.css'
import {Link} from "react-router-dom";

const Featured = () => {
    const items = [1,2,3,4,5,6,7,8,9]
    return (
        <section>
            <p style={{color: '#59815a',fontSize: '1.375rem',lineHeight: '40px',fontWeight: '500'}}
               className="">Featured</p>
            <div>
                <div className="slider">
                    <div className="slider-wrapper pb-3">
                        {items.map((item, index) => (<div key={index} className="slider-item">
                            <Link to="/video">
                                <div className="film-poster">
                                    <img
                                        src="https://img.cineb.rs/xxrz/250x400/188/7c/09/7c0938d2a7569b6bf9c437be49f300cb/7c0938d2a7569b6bf9c437be49f300cb.jpg"
                                        title="The Portable Door" alt="The Portable Door" className="rounded-3"/>
                                        <div className="play-button rounded-3 ">
                                            <div className="d-flex align-items-center justify-content-center h-100">
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle"
                                                    style={{backgroundColor: '#59815a',color: 'white',width: '60px',height: '60px'}}>
                                                    <i style={{fontWeight: 200}} className="bi bi-play-fill"/></div>
                                            </div>
                                        </div>
                                </div>
                            </Link>
                            <div className="film-detail mt-2">
                                <a href="#" onClick={(e) => e.preventDefault()} className="text-decoration-none fw-bold">The Mandalorian</a>
                                <div style={{color: '#273227'}} className="mt-1">
                                <span className="p-1 mb-1 rounded-3"
                                      style={{backgroundColor: '#59815a',color: 'white'}}>HD</span> SS 3 <i
    className="bi bi-dot"
    style={{color: '#273227'}}/>
                                    EPS 8
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Featured}