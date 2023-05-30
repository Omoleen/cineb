import '../../../assets/css/styles.css'
import ReactPlayer from "react-player";
import Poohbear from '../../../assets/img/Poohbear.png'
import angry_static from '../../../assets/img/angry_static.png'
import cry_static from '../../../assets/img/cry_static.png'
import fire_static from '../../../assets/img/fire_static.png'
import heart_static from '../../../assets/img/heart_static.png'
import icon_chat_inactive from '../../../assets/img/icon_chat_inactive.png'
import icon_logout_active from '../../../assets/img/icon_logout_active.png'
import laugh_static from '../../../assets/img/laugh_static.png'
import surprise_static from '../../../assets/img/surprise_static.png'
import {useRef, useState, useEffect} from "react";
import {MovieBoxEpisodes} from "./MovieBoxEpisodes";
import useWebSocket from "react-use-websocket";
import {useSelector, useDispatch} from "react-redux";
import {MovieBoxWatchParty} from "./MovieBoxWatchParty";
import {SET_PARTYID, ADD_MESSAGE} from "../../../redux/watch party/actions";


const MovieBox = () => {
    const dispatch = useDispatch()
    const wpData = useSelector(state => state.wp)
    const authData = useSelector(state => state.auth)
    const seasons = [1,2,3]
    const chapters = [1,2,3,4,5,6]
    const movieSectionMovie = useRef(null)
    const watchParty = useRef(null)
    const watchPartyIcons = useRef(null)
    const partyIcon = useRef(null)
    const videoCallScreen = useRef(null)
    const [isWatchParty, setisWatchParty] = useState(false)
    const [video, setVideo] = useState(false)
    // const [isWPClicked, setisWPClicked] = useState(false);
    const {sendJsonMessage, lastJsonMessage, readyState, getWebSocket} = useWebSocket(wpData.url + 'chat/', {
        onMessage: (message) => {
            console.log(message)
            // if (message?.message.includes('group created')) {
            //     // when a group has been created
            //     dispatch(SET_PARTYID(message.partyID))
            // }
        },
        onOpen: () => {
            console.log('sockets opened')
            // if (!isWPClicked) {
            //     const socket = getWebSocket();
            //       if (socket) {
            //         socket.close();
            //       }
            // } else {
            //     if (authData.token.access) {
            //         sendJsonMessage({
            //         "action": "create_group",
            //         "request_id": Math.random(),
            //         "accessToken": authData.token.access,
            //         }
            //     )
            //         console.log('group created js')
            //
            //     }
            //     if (wpData.partyId) {
            //             sendJsonMessage({
            //             'action': 'subscribe_to_chat_activity',
            //             "request_id": Math.random(),
            //             'accessToken': authData.token.access ? authData.token.access : null
            //         })
            //         }
            //     console.log('chat subscribed')
            //
            // }
        },
        onClose: () => {
            console.log('sockets closed')
        },
        onError: (error) => {
            console.error('WebSocket error:', error);
      },
        shouldReconnect: (closeEvent) => true,
        })

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
    }, [])


    function updateWidth() {
            if (window.innerWidth > 1399) {
                if (isWatchParty) {
                    movieSectionMovie.current.style.width = '58.33%'
                } else {
                    movieSectionMovie.current.style.width = '83.33%'
                }
                watchParty.current.style.width = '25%'
            } else {
                movieSectionMovie.current.style.width = '100%'
                watchParty.current.style.width = '100%'
            }
        }

    function openWatchParty() {
        setisWatchParty(true)
        watchPartyIcons.current.style.display = 'none'
        watchParty.current.style.display = 'flex'
        watchParty.current.style.animation = 'fadeIn 0.5s'
        if (window.innerWidth > 1399) {
            movieSectionMovie.current.style.width = '58.33%'
            watchParty.current.style.width = '25%'
        } else {
            movieSectionMovie.current.style.width = '100%'
            watchParty.current.style.width = '100%'
        }
        }

    function closeWatchParty() {
        setisWatchParty(false)
        watchParty.current.style.display = 'none'
        watchPartyIcons.current.style.display = 'flex'
        watchPartyIcons.current.style.animation = 'fadeIn 0.5s'
        if (window.innerWidth > 1399) {
            movieSectionMovie.current.style.width = '83.33%'
        } else {
            movieSectionMovie.current.style.width = '100%'
        }
    }


    function startWatchParty() {
        // setisWPClicked(true)
        partyIcon.current.style.display = 'none'
        openWatchParty()
    }

    function endWatchParty() {
        // setisWPClicked(false)
        setisWatchParty(false)
        partyIcon.current.style.display = 'none'
        watchPartyIcons.current.style.display = 'none'
        partyIcon.current.style.display = 'block'
        if (window.innerWidth > 1399) {
            movieSectionMovie.current.style.width = '83.33%'
        } else {
            movieSectionMovie.current.style.width = '100%'
        }
    }

    function videoCall() {
        if (video) {
            videoCallScreen.current.style.display = 'none'
            setVideo(data => !data)
        } else {
            videoCallScreen.current.style.display = 'grid'
            setVideo(data => !data)
        }
    }

    return (
        <>
            <section className="row flex-xxl-nowrap mx-0 px-0 position-relative" id="movie-section">
                <MovieBoxEpisodes />
                <div className="order-xxl-2 order-1 m-0 p-0 border-0 d-flex flex-column movie-section-movie"
                     id="movie-section-movie" ref={movieSectionMovie}>
                    <ReactPlayer  controls url='https://www.youtube.com/watch?v=3rlUADfuKhQ&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=3&ab_channel=Codevolution' height='100%' width='100%'/>
                    <div className="p-3 d-inline-flex align-items-center gap-2"
                         style={{backgroundColor: '#111111',color: 'white',fontSize: '14px'}}>
                        <i className="material-icons mat-icon mr-2">playlist_add</i>
                        Add favourite
                    </div>
                </div>
                {/*{isWatchParty && }*/}
                <MovieBoxWatchParty partyIcon={partyIcon} movieSectionMovie={movieSectionMovie} watchParty={watchParty} watchPartyIcons={watchPartyIcons} videoCallScreen={videoCallScreen} />



                <div className="position-absolute flex-column gap-4" id="watch-party-icons" ref={watchPartyIcons}
                     style={{backgroundColor: 'transparent', width: 'fit-content', display: 'none'}}>
                    <img
                        src="https://redirect.teleparty.com/static/media/tp_icon_gradient.2d4db0938d834db38f82db8e435a8b07.svg"
                         alt height="18px"/>
                    <div className="d-flex flex-column gap-4 pt-4 px-2" style={{borderTop: '2px solid #282828'}}>
                        <i className="fa-solid fa-link text-white" role="button"/>
                        <img src={icon_chat_inactive} alt height="18px" role="button"
                             onClick={openWatchParty}/>
                            <img src={icon_logout_active} alt height="18px" role="button"
                                 onClick={endWatchParty}/>
                    </div>
                </div>

                <div className="" style={{backgroundColor: 'transparent',width: 'fit-content'}} id="party-icon" ref={partyIcon}>
                    <img
                        src="https://redirect.teleparty.com/static/media/tp_icon_gradient.2d4db0938d834db38f82db8e435a8b07.svg"
                         alt height="24px" onClick={startWatchParty} role="button"/>
                </div>
            </section>
        </>
    )
}

export {MovieBox}