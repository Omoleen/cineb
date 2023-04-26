import '../../../assets/css/styles.css'

const MayLike = () => {
    const movies = [1,1,1,1,1,1,1,1,1]
    return (
        <div className="col-md-6 col-12 flex flex-column">
            <div style={{color: '#59815a',fontSize: '22px',fontWeight: 500}}
                 className="mb-3">You may also like
            </div>
            <div className="row">
                {movies.map((movie,index) => (
                    <div className="col-md-3 col-sm-3 col-6 mb-2">
                    <div className="">
                        <a href="#" className="text-decoration-none">
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
                                                style={{backgroundColor: '#59815a',color: 'white',width: '40px',height: '40px'}}>
                                                <i
    className="bi bi-play-fill"/></div>
                                        </div>
                                    </div>
                            </div>
                        </a>
                        <div className="film-detail mt-2" >
                            <a href="#" className="text-decoration-none fw-bold">The Mandalorian</a>
                            <div style={{color: '#273227', fontSize: '0.75rem'}} className="mt-1">
                                <span className="p-1 rounded-3"
                                      style={{backgroundColor: '#59815a',color: 'white'}}>HD</span> SS 3 <i
    className="bi bi-dot"
    style={{color: '#273227'}}/>
                                EPS 8
                            </div>
                        </div>
                    </div>
                </div>
                ))}


            </div>
        </div>
    )
}

export {MayLike}