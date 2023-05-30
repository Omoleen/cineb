import ReactPlayer from "react-player";
import {useRef, useState} from "react";


const MovieBoxMovie = () => {
    const movieSectionMovie = useRef(null)
    return (
        <>
            <div className="order-xxl-2 order-1 m-0 p-0 border-0 d-flex flex-column movie-section-movie"
                     id="movie-section-movie" ref={movieSectionMovie}>
                    <ReactPlayer  controls url='https://www.youtube.com/watch?v=3rlUADfuKhQ&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=3&ab_channel=Codevolution' height='100%' width='100%'/>
                    <div className="p-3 d-inline-flex align-items-center gap-2"
                         style={{backgroundColor: '#111111',color: 'white',fontSize: '14px'}}>
                        <i className="material-icons mat-icon mr-2">playlist_add</i>
                        Add favourite
                    </div>
                </div>
        </>
    )
}
export {MovieBoxMovie}