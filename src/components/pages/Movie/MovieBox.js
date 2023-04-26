import '../../../assets/css/styles.css'
import ReactPlayer from "react-player";

const MovieBox = () => {
    const seasons = [1,2,3]
    const chapters = [1,2,3,4,5,6]
    return (
        <>
            <section className="row mx-0 px-0">
                <div
                    className="col-xxl-2 col-12 order-xxl-1 order-2 m-0 p-0 border-0 d-xxl-flex flex-xxl-column season-episode-list"
                    style={{backgroundColor: '#222222',fontSize: '12px',color: '#6a6a6a'}}>
                    <div className="pt-4 px-3 py-3">CHOOSE SEASON</div>
                    <div className="dropdown">
                        <a className="btn dropdown-toggle w-100 border-0 rounded-0 text-start px-3 py-3 pt-2 pb-2"
                           style={{backgroundColor: '#393939',color: '#59815a'}}
                           href="#" role="button" id="dropdownMenuLink"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Season 1
                        </a>
                        <ul className="dropdown-menu w-100 rounded-0 bg-black"
                            aria-labelledby="dropdownMenuLink">
                            {seasons.map((season, index) => (<li key={season}><a className="dropdown-item dropdown-menus" style={{fontSize: '14px'}} href="#">Season
                                1</a></li>))}
                        </ul>
                    </div>
                    <div className="px-3 py-3">EPISODES LIST</div>
                    <div className="d-none d-xxl-flex flex-xxl-column"
                         style={{backgroundColor: '#292929',fontSize: '.875rem'}}>
                        {chapters.map((chapter, index) => (
                            <div key={index} style={{borderColor: '#222222',borderTopWidth: '0.00001px'}}
                             className="border-top px-3 py-3 pt-2 pb-2">
                            <a href="" onClick={(e) => (e.preventDefault())} className="text-decoration-none"
                               style={{fontSize: '13px', color: '#ccc'}}>
                                <i className="bi bi-play-fill" style={{fontSize: '18px',color: '#5a5a5a'}}/>
                                <strong>Eps 1:</strong> Chapter One</a>
                        </div>
                        ))}

                    </div>

                    <div
                        className="row d-xxl-none rows-cols-xl-4 rows-cols-lg-3 row-cols-sm-2 rows-cols-1 bg-black m-0 gap-2"
                        >
                        {chapters.map((chapter, index) => (
                            <div key={index}
                             className="col-lg-4 col-xl-3 col-sm-6 col-12 rounded-3 bg-white">
                            <a href="" onClick={(e) => (e.preventDefault())} className="text-decoration-none"
                               style={{fontSize: '13px', color: '#ccc'}}>
                                <i className="bi bi-play-fill" style={{fontSize: '18px', color: '#5a5a5a'}}/>
                                <strong>Eps 1:</strong> Chapter One</a>
                        </div>
                        ))}


                    </div>


                </div>
                <div className="col-xxl-10 order-xxl-2 order-1 m-0 p-0 border-0 d-flex flex-column">

                    <ReactPlayer width='100%' height={600} controls url='https://www.youtube.com/embed/wR-0knMVSGw' />
                    <div className="p-3 d-inline-flex align-items-center gap-2"
                         style={{backgroundColor: '#111111',color: 'white',fontSize: '14px'}}>
                        <i className="material-icons mat-icon mr-2">playlist_add</i>
                        Add favourite
                    </div>
                </div>
            </section>
        </>
    )
}

export {MovieBox}