import '../../../assets/css/styles.css'
import {Footer} from "../General/Footer";
import {Link} from "react-router-dom";


const ImbdTrending = () => {
    const trending = [1,1,1,1,1,1,1,1,1,1,1,1]
    const latest = ['Latest Movies','Latest Tv Shows']
    return (
        <>
            <section className='row'>
            <div className="col-xl-9 col-12">
                <div className="mb-4">
                    <div className="d-flex mb-3">
                        <div style={{color: '#59815a',fontSize: '1.375rem',fontWeight: 500}}
                             className="">Trending
                        </div>
                        <div style={{backgroundColor: '#59815a',color: 'white',height: '30px',fontWeight: 500}}
                             className="p-2 rounded-3 d-flex align-items-center mx-3">Movies
                        </div>
                        <div style={{backgroundColor: 'white',color: 'black',height: '30px',fontWeight: 500}}
                             className="p-2 rounded-3 d-flex align-items-center mx-1">Tv Shows
                        </div>
                    </div>
                    <div className="row">
                        {trending.map((trend, index) => (<div key={index} className="col-md-2 col-6 mb-2">
                            <div className="">
                                <Link to="/movie" className="text-decoration-none">
                                    <div className="film-poster">
                                        <img
                                            src="https://img.cineb.net/xxrz/250x400/188/7c/09/7c0938d2a7569b6bf9c437be49f300cb/7c0938d2a7569b6bf9c437be49f300cb.jpg"
                                            title="The Portable Door" alt="The Portable Door"
                                            className="rounded-3 img-fluid w-100"
                                            />
                                        <div className="play-button rounded-3 " >
                                            <div className="d-flex align-items-center justify-content-center h-100">
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle"
                                                    style={{
                                                        backgroundColor: '#59815a',
                                                        color: 'white',
                                                        width: '40px',
                                                        height: '40px'
                                                    }}>
                                                    <i
                                                        className="bi bi-play-fill"/></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="film-detail mt-2" >
                                    <a href="#" className="text-decoration-none fw-bold">The Mandalorian</a>
                                    <div style={{color: '#273227', fontSize: '0.75rem'}} className="mt-1">
                                <span className="p-1 rounded-3"
                                      style={{backgroundColor: '#59815a', color: 'white'}}>HD</span> SS 3 <i
                                        className="bi bi-dot"
                                        style={{color: '#273227'}}/>
                                        EPS 8
                                    </div>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
                {latest.map((last,index) => (
                    <div key={index} className="mb-4">
                        <div className="d-flex justify-content-between mb-3">
                            <div style={{color: '#59815a',fontSize: '1.375rem',fontWeight: 500}}
                                 className="">{last}
                            </div>
                            <a href=""
                               className="d-inline-flex align-items-center gap-2 text-decoration-none text-dark">
                                <div className="">View all</div>
                                <i className="fa fa-greater-than"/>
                            </a>
                        </div>
                        <div className="row">
                            {trending.map((trend, index) => (<div key={index} className="col-md-2 col-6 mb-2">
                            <div className="">
                                <Link to="/movie" className="text-decoration-none">
                                    <div className="film-poster">
                                        <img
                                            src="https://img.cineb.net/xxrz/250x400/188/7c/09/7c0938d2a7569b6bf9c437be49f300cb/7c0938d2a7569b6bf9c437be49f300cb.jpg"
                                            title="The Portable Door" alt="The Portable Door"
                                            className="rounded-3 img-fluid w-100"
                                            />
                                        <div className="play-button rounded-3 " >
                                            <div className="d-flex align-items-center justify-content-center h-100">
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle"
                                                    style={{
                                                        backgroundColor: '#59815a',
                                                        color: 'white',
                                                        width: '40px',
                                                        height: '40px'
                                                    }}>
                                                    <i
                                                        className="bi bi-play-fill"/></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="film-detail mt-2" >
                                    <a href="#" className="text-decoration-none fw-bold">The Mandalorian</a>
                                    <div style={{color: '#273227', fontSize: '0.75rem'}} className="mt-1">
                                <span className="p-1 rounded-3"
                                      style={{backgroundColor: '#59815a', color: 'white'}}>HD</span> SS 3 <i
                                        className="bi bi-dot"
                                        style={{color: '#273227'}}/>
                                        EPS 8
                                    </div>
                                </div>
                            </div>
                        </div>))}


                        </div>
                    </div>
                ))}

            </div>
            <div className="col-xl-3 d-none d-xl-block">
                <div style={{color: '#59815a',fontSize: '1.375rem',fontWeight: 500}}
                     className="mb-3">Top IMDB Rating
                </div>
                {trending.map((movie,index) => (
                    <div key={index} className="d-flex imbd-movies mb-2">
                    <Link to="/movie">
                        <img
                            src="https://img.cineb.net/xxrz/250x400/188/c6/7d/c67d86ebbe68f9adbac3e564416f5e29/c67d86ebbe68f9adbac3e564416f5e29.jpg"
                            width="100" height="148" className="rounded-3" alt=''/>
                    </Link>
                    <div className="mx-3">
                        <div className="film-detail mt-2" >
                            <a href="#" className="text-decoration-none fw-bold">The Mandalorian</a>
                            <div style={{color: '#273227'}} className="mt-1">
                                <span className="p-1 mb-1 rounded-3"
                                      style={{backgroundColor: '#59815a',color: 'white'}}>HD</span> SS 3 <i
    className="bi bi-dot"
    style={{color: '#273227'}}/>
                                EPS 8
                            </div>
                            <div style={{color: '#eda901'}} className="fw-bolder mt-1">IMDB: 9.7</div>
                        </div>
                    </div>

                </div>
                ))}
            </div>

        </section>
        </>
    )
}

export {ImbdTrending}