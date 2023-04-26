import '../../../assets/css/styles.css'

const AboutMovie = () => {
    return (
        <div className="col-md-6 col-12 row">
            <div className="col-sm-3 col-12 gap-2 d-sm-flex flex-sm-column d-inline-flex"
                 style={{maxHeight: 'fit-content'}}>
                <div className="d-none d-sm-block ">
                    <img
                        src="https://img.cineb.net/xxrz/250x400/188/7c/09/7c0938d2a7569b6bf9c437be49f300cb/7c0938d2a7569b6bf9c437be49f300cb.jpg"
                        title="The Portable Door" alt="The Portable Door"
                        className="rounded-3 img-fluid w-100"
                        />
                </div>
                <div className="col-3 d-sm-none">
                    <img
                        src="https://img.cineb.net/xxrz/250x400/188/7c/09/7c0938d2a7569b6bf9c437be49f300cb/7c0938d2a7569b6bf9c437be49f300cb.jpg"
                        title="The Portable Door" alt="The Portable Door"
                        className="rounded-3 img-fluid w-100"
                        />
                </div>
                <div className="w-100 d-flex flex-column gap-2">
                    <div className="">
                        <strong>9.8</strong> / 123 voted
                    </div>
                    <div className="progress" style={{backgroundColor: 'black',height:'3px'}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '98%'}}
    aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                    <div className="d-flex flex-column gap-1">
                        <div className="w-100 bg-white d-flex align-items-center justify-content-center gap-1"
                             role="button" style={{height: '2rem'}}>
                            <i className="material-icons mat-icon mr-2" style={{color: '#00A340'}}>mood</i>Like
                        </div>
                        <div className="w-100 bg-white d-flex align-items-center justify-content-center gap-1"
                             role="button" style={{height: '2rem'}}>
                            <i className="material-icons mat-icon mr-2" style={{color: '#BF1D20'}}>mood_bad</i>Dislike
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-sm-9 col-12 mb-3">
                <h4 className="fw-normal movie-title mb-3" >The Mandalorian</h4>
                <div className="d-flex gap-2 mb-3">
                    <div
                        className="bg-white text-dark d-flex align-items-center justify-content-center p-2 pt-1 pb-1 gap-2 border-2 border border-dark rounded-3"
                        style={{width: 'fit-content'}} role="button">
                        <i className="material-icons mat-icon mr-2">videocam</i>
                        Trailer
                    </div>
                    <div
                        className="bg-white text-dark d-flex align-items-center justify-content-center p-2 pt-1 pb-1 gap-2 border-2 border border-dark rounded-3"
                        style={{width: 'fit-content',borderWidth: '1px'}} role="button">
                        HD
                    </div>
                    <div
                        className="text-dark d-flex align-items-center justify-content-center p-2 pt-1 pb-1 rounded-3 fw-bolder"
                        style={{backgroundColor: '#fea601'}}>
                        IMDB:8.7
                    </div>
                </div>
                <p className="fw-light mb-3" style={{fontSize: '15px'}}>Set after the fall of the Empire and before the
                    emergence of the First Order, we follow the travails of a lone gunfighter in the outer reaches of
                    the galaxy far from the authority of the New Republic.</p>
                <ul style={{fontSize: '15px',listStyleType: 'none'}} className="m-0 p-0 mb-3">
                    <li><strong>Released:</strong>2019-11-12</li>
                    <li><strong>Genre:</strong>Sci-Fi & Fantasy, Action & Adventure</li>
                    <li><strong>Casts:</strong>Pedro Pascal, Gina Carano, Giancarlo Esposito, Emily Swallow, Carl
                        Weathers
                    </li>
                    <li><strong>Duration:</strong>45 min</li>
                    <li><strong>Country:</strong>United States of America</li>
                    <li><strong>Production:</strong> Lucasfilm, Walt Disney Studios</li>
                </ul>
                <div className="d-flex flex-wrap gap-2 w-100" style={{fontSize: '15px'}}>
                    <div className="bg-white text-dark p-2 pt-1 pb-1 rounded-2 flex-nowrap">
                        Watch The Mandalorian Online Free
                    </div>
                    <div className=" bg-white text-dark p-2 pt-1 pb-1 rounded-2 flex-nowrap" >
                        Watch The Mandalorian Online
                    </div>
                    <div className=" bg-white text-dark p-2 pt-1 pb-1 rounded-2 flex-nowrap">
                        Where to watch The Mandalorian
                    </div>
                    <div className=" bg-white text-dark p-2 pt-1 pb-1 rounded-2 flex-nowrap">
                        The Mandalorian movie free online
                    </div>
                    <div className=" bg-white text-dark p-2 pt-1 pb-1 rounded-2 flex-nowrap">
                        The Mandalorian free online
                    </div>
                </div>

            </div>

        </div>
    )
}

export {AboutMovie}