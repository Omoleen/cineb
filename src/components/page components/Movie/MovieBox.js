import '../../../assets/css/styles.css'
import ReactPlayer from "react-player";
import Poohbear from '../../../assets/img/Poohbear.png'
import angry_static from '../../../assets/img/angry_static.png'
import cry_static from '../../../assets/img/cry_static.png'
import fire_static from '../../../assets/img/fire_static.png'
import heart_static from '../../../assets/img/heart_static.png'
import youtube from '../../../assets/img/youtube-button.png'
import icon_chat_inactive from '../../../assets/img/icon_chat_inactive.png'
import icon_logout_active from '../../../assets/img/icon_logout_active.png'
import laugh_static from '../../../assets/img/laugh_static.png'
import surprise_static from '../../../assets/img/surprise_static.png'
import {useRef, useState, useEffect} from "react";
import {MovieBoxEpisodes} from "./MovieBoxEpisodes";
import useWebSocket from "react-use-websocket";
import {useSelector, useDispatch} from "react-redux";
import {MovieBoxWatchParty} from "./MovieBoxWatchParty";
import {SET_PARTYID, ADD_MESSAGE, SET_PARTYURL, END_PARTY} from "../../../redux/watch party/actions";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import {Set_Error, SetLoginOverlay} from "../../../redux/auth/actions";
import {MovieBoxMovie} from "./MovieBoxMovie";


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
    const playerRef = useRef()
    const [isWatchParty, setisWatchParty] = useState(false)
    const [copyLink, setCopyLink] = useState('Copy Link')

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
    }, [])

    const renderTooltip = (text) => (
        <Tooltip id="tooltip">
          {text}
        </Tooltip>
      );

    const handleSearch = e => {
        dispatch(SET_PARTYURL(e.target.value))
    }

    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(authData.url + 'movie/' + wpData.partyId);
          console.log('Text copied to clipboard');
          console.log(authData.url.replace('8', '3') + 'movie/' + wpData.partyId)
            setCopyLink('Link Copied')
            setTimeout(() => {
          // Code to run after 5 seconds
          console.log('Code executed after 2 seconds');
          setCopyLink('Copy Link')
        }, 2000);
        } catch (err) {
          console.error('Failed to copy text:', err);
        }
  };


    function updateWidth() {
            if (window.innerWidth > 1399) {
                if (isWatchParty) {
                    movieSectionMovie.current.style.width = '58.33%'
                } else {
                    movieSectionMovie.current.style.width = '83.33%'
                }
            } else {
                movieSectionMovie.current.style.width = '100%'
            }
        }

    function openWatchParty() {
        setisWatchParty(true)
        watchPartyIcons.current.style.display = 'none'
        if (window.innerWidth > 1399) {
            movieSectionMovie.current.style.width = '58.33%'
        } else {
            movieSectionMovie.current.style.width = '100%'
        }
    }


    function startWatchParty() {
        partyIcon.current.style.display = 'none'
        openWatchParty()
    }

    function endWatchParty() {
        // setisWPClicked(false)
        setisWatchParty(false)
        dispatch(END_PARTY())
        partyIcon.current.style.display = 'none'
        watchPartyIcons.current.style.display = 'none'
        partyIcon.current.style.display = 'block'
        if (window.innerWidth > 1399) {
            movieSectionMovie.current.style.width = '83.33%'
        } else {
            movieSectionMovie.current.style.width = '100%'
        }
    }

    return (
        <>
            <section className="row flex-xxl-nowrap mx-0 px-0 position-relative" id="movie-section">
                <MovieBoxEpisodes />
                <MovieBoxMovie movieSectionMovie={movieSectionMovie} playerRef={playerRef} />
                {isWatchParty &&
                    (authData.token.access || wpData.partyId ?
                        <MovieBoxWatchParty playerRef={playerRef} setisWatchParty={setisWatchParty} partyIcon={partyIcon} movieSectionMovie={movieSectionMovie} watchParty={watchParty} watchPartyIcons={watchPartyIcons} videoCallScreen={videoCallScreen} />
                    :
                        <div className="order-3 flex-column py-2 pb-3 position-relative" id="watch-party" ref={watchParty}
                    style={{backgroundColor: '#222222',fontSize: '12px',color: '#6a6a6a',display: 'flex',top:0, left:0, animation: 'fadeIn 0.5s'}}>
                        <div className='d-flex flex-column align-items-center justify-content-center h-100 w-100' >
                            <div className='fs-6 mb-2'>Login/Create an account to create a group</div>
                            <div
                                className="d-flex flex-nowrap justify-content-center align-items-center px-2 py-1 gap-1 rounded-2"
                                style={{backgroundColor: 'gold'}} role="button" onClick={() => dispatch(SetLoginOverlay(!authData.loginOverlay))}>
                                <span className='fs-6'>Login</span>
                            </div>
                            <div onClick={() => endWatchParty()}
                               className="text-white position-absolute rounded-circle d-flex align-items-center justify-content-center"
                               role="button"
                               style={{fontSize:'24px',backgroundColor:'transparent',top:'0px',right:'10px'}}>
                          <span>×</span>
                  </div>
                        </div>
                    </div>)
                }



                <div className="position-absolute flex-column gap-4" id="watch-party-icons" ref={watchPartyIcons}
                     style={{backgroundColor: 'transparent', width: 'fit-content', display: 'none'}}>
                    <img
                        src="https://redirect.teleparty.com/static/media/tp_icon_gradient.2d4db0938d834db38f82db8e435a8b07.svg"
                         alt height="18px"/>
                    <div className="d-flex flex-column gap-4 pt-4 px-2" style={{borderTop: '2px solid #282828'}}>
                        <button className='copy-link p-1 rounded-1 border-0' onClick={handleCopy}>
                            <OverlayTrigger
                            placement="left"
                            overlay={renderTooltip(copyLink)}
                          >
                            <i className="fa-solid fa-link text-white"/>
                          </OverlayTrigger>
                        </button>
                        <button className='px-1 border-0' style={{backgroundColor: 'transparent'}} onClick={openWatchParty}>
                            <img src={icon_chat_inactive} alt height="18px" width='18px'
                             />
                        </button>

                        <button className='px-1 border-0' style={{backgroundColor: 'transparent'}} onClick={endWatchParty}>
                            <img src={icon_logout_active} alt height="18px" width='18px' role="button"
                                 />
                        </button>

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