import Poohbear from "../../../assets/img/Poohbear.svg";
import {useRef, useState} from "react";

const MovieBoxWatchParty = ({movieSectionMovie, watchParty, watchPartyIcons, partyIcon, videoCallScreen}) => {
    const seasons = [1,2,3]
    const [isWatchParty, setisWatchParty] = useState(false)
    const [video, setVideo] = useState(false)
    const [isWPClicked, setisWPClicked] = useState(false);
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
        console.log('closing')
        if (window.innerWidth > 1399) {
            movieSectionMovie.current.style.width = '83.33%'
        } else {
            movieSectionMovie.current.style.width = '100%'
        }
    }

    function startWatchParty() {
        partyIcon.current.style.display = 'none'
        openWatchParty()
    }

    function endWatchParty() {
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
            <div className="order-3 flex-column py-2 pb-3 position-relative" id="watch-party" ref={watchParty}
             style={{backgroundColor: '#222222',fontSize: '12px',color: '#6a6a6a',display: 'none',top:0, left:0}}>

                    <div className="d-flex justify-content-between p-2" style={{borderBottom: '0.15rem solid #464646'}}>

                        <div className="d-flex flex-nowrap gap-2 align-items-center"  >
                            <img
                                src="https://redirect.teleparty.com/static/media/HideChat.e1a44f4c9d14a0e8fd59b71a18e4a058.svg"
                                alt height="14" onClick={closeWatchParty} role="button"/>
                                <img
                                    src="https://redirect.teleparty.com/static/media/tp_icon_gradient.2d4db0938d834db38f82db8e435a8b07.svg"
                                     alt height="20"/>
                                <div
                                    className="d-flex flex-nowrap justify-content-center align-items-center px-2 py-1 gap-1 rounded-2"
                                    style={{backgroundColor: 'gold'}} role="button">
                                    <i className="fa fa-star fa-sm"/>
                                    <span>Upgrade</span>
                                </div>
                                <img
                                    src="https://redirect.teleparty.com/static/media/cam.b15aa804e510ba90282f621972da6daf.svg"
                                    alt height="18px" role="button" onClick={videoCall} id="video-call-trigger"/>
                        </div>

                        <div className="d-flex flex-nowrap gap-2 align-items-center px-1"  >
                            <div className="d-flex flex-nowrap align-items-center gap-1 rounded-2"
                                 style={{backgroundColor: '#282828',padding: '0.1rem'}}>
                                <div
                                    className="d-flex flex-nowrap align-items-center gap-1 justify-content-center text-white"
                                    style={{borderTopLeftRadius: '0.25rem', borderBottomLeftRadius: '0.25rem',paddingLeft:'0.25rem'}}>
                                    <i className="fa-solid fa-users"/>
                                    <span className="">1</span>
                                </div>
                                <div className="p-1 px-2"
                                     style={{backgroundColor: 'black',borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem'}}>
                                    <i className="fa-solid fa-link text-white"/>
                                </div>
                            </div>
                            <img src={Poohbear}
                                 alt height="30"/>
                        </div>
                    </div>


                    <div className="d-flex flex-column overflow-scroll h-100 pt-4 position-relative"  >


                        <div className="position-absolute" id="video-call-screen" ref={videoCallScreen}
                             style={{display: 'none', gridTemplateColumns: 'auto auto',gridGap: '0.1rem', gridAutoRows: '33.33%', top: 0, right: 0, bottom: 0, left: 0,color: 'black'}}>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                        </div>
                        {seasons.map((message, index) => (<div key={index} className="d-flex flex-nowrap gap-2" style={{color: '#8c8c8c',fontSize: '14px'}}>
                            <img src={Poohbear}
                                  alt height="40"/>
                            <div className=""  >
                                <p>created the party</p>
                                <p>created the party</p>
                                <p>what is your name, i am new here, this is going to be a long message</p>
                            </div>
                        </div>))}


                    </div>

                    <div className="p-2 rounded-2 mt-3" style={{border:'1.5px solid #464646'}}>

                        <div className="w-100 d-flex align-items-center justify-content-evenly pt-2"  >
                            {/*<img src={heart_static}*/}
                            {/*     alt height="24px" width="24px"/>*/}
                            {/*    <img src={}*/}
                            {/*         alt height="24px" width="24px"/>*/}
                            <angry_static height="24" width="24"/>
                            {/*        <img src={cry_static} alt*/}
                            {/*             height="24px" width="24px"/>*/}
                            {/*            <img src={laugh_static}*/}
                            {/*                 alt height="24px" width="24px"/>*/}
                            {/*                <img src={surprise_static}*/}
                            {/*                     alt height="24px" width="24px"/>*/}
                            {/*                    <img src={fire_static}*/}
                            {/*                         alt height="24px" width="24px"/>*/}
                        </div>
                        <hr style={{height:'0.15rem'}}/>
                        <input type="text" name="" id="" placeholder="Type a message..."
                               className="w-100 border-0 form-control text-white"
                               style={{backgroundColor: '#222222'}}/>

                            <div className="d-flex align-items-center justify-content-between mt-2"  >
                                <div className="d-flex align-items-center gap-2 flex-nowrap"  >
                                    <img
                                        src="https://redirect.teleparty.com/static/media/cam.b15aa804e510ba90282f621972da6daf.svg"
                                        alt height="18px" width="18px"/>
                                        <img
                                            src="https://redirect.teleparty.com/static/media/mic.c4821928b497235601ac5fadf9537f93.svg"
                                            alt height="18px" width="18px"/>
                                </div>
                                <div className="d-flex align-items-center gap-2 flex-nowrap"  >
                                    <img
                                        src="https://redirect.teleparty.com/static/media/emoji_picker_button.e7b05fbb4d2f086bfa19bc5b50daa2d1.svg"
                                        alt height="18px" width="18px"/>
                                        <img
                                            src="https://redirect.teleparty.com/static/media/gif_icon.6d3772895e39504eb2eaf6b44483224d.svg"
                                            alt height="18px" width="18px"/>
                                            <img
                                                src="https://redirect.teleparty.com/static/media/reaction-popup.75e33f008d6b713e73b6ef4ff9b992ad.svg"
                                                alt height="18px" width="18px"/>
                                </div>
                            </div>
                    </div>
                </div>
        </>
    )
}

export {MovieBoxWatchParty}