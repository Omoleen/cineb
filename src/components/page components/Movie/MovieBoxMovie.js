import ReactPlayer from "react-player";
import {useEffect, useRef, useState} from "react";
import youtube from '../../../assets/img/youtube-button.png'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {SET_CURRENT_TIME, SET_IS_PLAYING} from "../../../redux/watch party/actions";


const MovieBoxMovie = ({movieSectionMovie, playerRef}) => {
    const dispatch = useDispatch()
    const wpData = useSelector(state => state.wp)
    const authData = useSelector(state => state.auth)
    // const playerRef = useRef()
    // useEffect(() => {
    //     if (!wpData.adminStatus) {
    //         playerRef.current.seekTo(wpData.current_time, 'seconds')
    //     }
    // }, [wpData.current_time])
    const send_party_data = async (is_playing, current_time) => {
        await axios.patch(`${authData.url}watch/group/${wpData.partyId}/`, {
            is_playing: is_playing,
            current_time: current_time
        }).then(response => {
            if (response.status === 200) {
                const data = response.data
                console.log(data)
                dispatch(SET_IS_PLAYING(data.is_playing))
                dispatch(SET_CURRENT_TIME(data.current_time))
            }
        }).catch(error => console.log(error))
    }
    const send_is_playing_data = async (is_playing) => {
        await axios.patch(`${authData.url}watch/group/${wpData.partyId}/`, {
            is_playing: is_playing,
        }).then(response => {
            if (response.status === 200) {
                const data = response.data
                console.log(data)
                dispatch(SET_IS_PLAYING(data.is_playing))
            }
        }).catch(error => console.log(error))
    }
    // playerRef.current.seekTo(wpData.current_time, 'seconds')
    return (
        <>
            <div className="order-xxl-2 order-1 m-0 p-0 border-0 d-flex flex-column movie-section-movie"
                     id="movie-section-movie" ref={movieSectionMovie}>
                        {wpData.partyUrl ?
                            <ReactPlayer controls={wpData.adminStatus ? true : (wpData.partyId && wpData.adminStatus)}
                                         ref={playerRef}
                                         url={wpData.partyUrl}
                                         height='100%' width='100%'
                                         playing={wpData.is_playing}
                                         onStart={() => {
                                             if (wpData.adminStatus) {
                                                 // send a post request
                                                 // is_playing
                                                 // current_time - getCurrentTime
                                                 send_party_data(true, 0)

                                             } else {
                                                 playerRef.current.seekTo(wpData.current_time, 'seconds')
                                             }
                                             console.log('start' )
                                             let time = playerRef.current.getCurrentTime()
                                             console.log(playerRef.current.getCurrentTime())
                                             // playerRef.current.seekTo(60, 'seconds')
                                            }
                                         }
                                         onPlay={() => {
                                             if (wpData.adminStatus) {
                                                 // send a post request
                                                 // is_playing
                                                 // current_time - getCurrentTime
                                                 // let time = playerRef.current.getCurrentTime()
                                                 send_is_playing_data(true)
                                             } else {
                                                 // let time = playerRef.current.getCurrentTime()
                                                 // if (wpData.current_time !== time.toFixed(6)) {
                                                 //     playerRef.current.seekTo(wpData.current_time, 'seconds')
                                                 // }

                                             }
                                             console.log('play')
                                              console.log(playerRef.current.getCurrentTime())
                                            }
                                         }
                                         onPause={() => {
                                             if (wpData.adminStatus) {
                                                 // send a post request
                                                 // is_playing
                                                 let time = playerRef.current.getCurrentTime()
                                                 send_party_data(false, time.toFixed(6))
                                             } else {
                                                 let time = playerRef.current.getCurrentTime()
                                                 // if (wpData.current_time !== time.toFixed(6)) {
                                                 //
                                                 // }
                                             playerRef.current.seekTo(wpData.current_time, 'seconds')

                                             }
                                             console.log('pause')
                                             console.log(playerRef.current.getCurrentTime())
                                            }
                                         }
                                         onReady={() => {
                                             if (wpData.current_time) {
                                                 playerRef.current.seekTo(wpData.current_time, 'seconds')
                                             }

                                         }}
                                         // onSeek={(seconds) => {
                                         //     if (wpData.adminStatus) {
                                         //         // send a post request
                                         //         send_party_data(wpData.is_playing, playerRef.current.getCurrentTime())
                                         //     }
                                         //     console.log('seek' + seconds)
                                         //     console.log(playerRef.current.getCurrentTime())
                                         //    }
                                         // }
                                         // onProgress={(e) => {
                                         //     console.log('progress' + e)
                                         //    }
                                         // }
                            />
                            :
                        <div className='bg-dark w-100 h-100 d-flex align-items-center justify-content-center'>
                            <img src={youtube} alt="" height='200'/>
                        </div>}
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