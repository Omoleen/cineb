import {useRef, useState} from "react";


const MovieBoxEpisodes = () => {
    const chapters = [1,2,3,4,5,6]
    const seasons = [1,2,3]
    return (
        <>
            <div
                className="col-xxl-2 col-12 order-xxl-1 order-2 m-0 p-0 border-0 d-xxl-flex flex-xxl-column season-episode-list"
                style={{backgroundColor: "#222222",fontSize: "12px",color: "#6a6a6a"}}>
                    <div className="pt-4 px-3 py-3">CHOOSE SEASON</div>
                    <div className="dropdown">
                        <a className="btn dropdown-toggle w-100 border-0 rounded-0 text-start px-3 py-3 pt-2 pb-2"
                           style={{backgroundColor: "#393939", color: "#59815a"}}
                           href="" role="button" id="dropdownMenuLink" onClick={(event) => event.preventDefault()}
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Season 1
                        </a>
                        <ul className="dropdown-menu w-100 rounded-0" style={{backgroundColor: 'black'}}
                            aria-labelledby="dropdownMenuLink">
                            {seasons.map((season, index) => (<li key={index}><a className="dropdown-item dropdown-menus" style={{fontSize: '14px'}} href="#" onClick={(e) => e.preventDefault()}>Season
                                {season}</a></li>))}
                        </ul>
                    </div>
                    <div className="px-3 py-3">EPISODES LIST</div>
                {/*episodes for large screens*/}
                    <div className="d-none d-xxl-flex flex-xxl-column overflow-scroll episodes"
                         style={{backgroundColor: '#292929',fontSize: '.875rem'}}>
                        {chapters.map((chapter,index) => (<div key={index} style={{borderColor: '#222222',borderTopWidth: '0.00001px!important'}}
                             className="border-top px-3 py-3 pt-2 pb-2">
                            <a href="" className="text-decoration-none" onClick={event => event.preventDefault()}
                               style={{fontSize: '13px', color: '#ccc'}}>
                                <i className="bi bi-play-fill" style={{fontSize: '18px',color: '#5a5a5a'}}/>
                                <strong>Eps 1:</strong> Chapter One</a>
                        </div>))}
                    </div>
                    {/*epsodes for smll screens*/}
                    <div className="px-3 pb-2 d-xxl-none bg-black gy-2 m-0 episodes bottom-episodes"
                          >
                        {chapters.map((chapter, index) => (<div key={index} style={{backgroundColor: '#292929',fontSize: '13px', color: '#ccc'}}
                             className="px-3 py-2 rounded-3 d-flex flex-row flex-nowrap align-items-center position-relative"
                             role="button">
                            <i className="bi bi-play-fill" style={{fontSize: '18px',color: '#5a5a5a'}}/>
                            <div className="d-flex flex-row flex-nowrap" style={{gap: '0.3rem'}}>
                                <strong>Eps 1 : </strong> <span> Chapter One</span>
                            </div>

                        </div>))}
                    </div>
                </div>
        </>
    )
}

export {MovieBoxEpisodes}