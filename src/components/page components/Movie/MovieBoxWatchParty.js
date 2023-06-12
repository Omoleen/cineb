import {useEffect, useRef, useState} from "react";
import Poohbear from '../../../assets/img/Poohbear.png'
import angry_static from '../../../assets/img/angry_static.png'
import cry_static from '../../../assets/img/cry_static.png'
import fire_static from '../../../assets/img/fire_static.png'
import heart_static from '../../../assets/img/heart_static.png'

import laugh_static from '../../../assets/img/laugh_static.png'
import surprise_static from '../../../assets/img/surprise_static.png'
import useWebSocket from "react-use-websocket";
import {useDispatch, useSelector} from "react-redux";
import {
    SET_PARTYID,
    ADD_MESSAGE,
    SET_PARTYURL,
    SET_NUM_PARTYUSERS,
    SET_PARTY_ADMIN_STATUS,
    SET_IS_PLAYING, SET_CURRENT_TIME
} from "../../../redux/watch party/actions";
import {Auth} from "../../pages/Auth";
import {SetLoginOverlay} from "../../../redux/auth/actions";
import axios from "axios";

const MovieBoxWatchParty = ({movieSectionMovie, watchParty, watchPartyIcons, partyIcon, videoCallScreen, setisWatchParty, playerRef}) => {
    const seasons = [1,2,3]
    const [video, setVideo] = useState(false)
    const [messageBox, setMessageBox] = useState('')
    const latestMessage = useRef()
    const messagesRef = useRef()
    const [isConnected, setIsConnected] = useState(false)

    const dispatch = useDispatch()
    const Data = useSelector(state => state)
    const wpData = useSelector(state => state.wp)
    const authData = useSelector(state => state.auth)
    const emojis = {
      angry_static: '😡',
      cry_static: '😢',
      fire_static: '🔥',
      laugh_static: '😂',
      surprise_static: '😮',
        heart_static: '🥰'
    };
    const handleEmoji = (e) => {
        setMessageBox(message => message + e.target.alt)
    }

    useEffect(() => {
        console.log(Data)
        if (isConnected) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, )


    useEffect(() => {
        console.log(wpData)
    }, [wpData])
    const {sendJsonMessage, readyState, getWebSocket} = useWebSocket(wpData.url + 'chat/', {
        onMessage: (message) => {
            // console.log(message)
            const JSONmessage = JSON.parse(message.data)
            console.log(JSONmessage)
            if (JSONmessage?.alert === 'group created') {
                // when a group has been created
                dispatch(SET_PARTYID(JSONmessage?.partyId))
                if (JSONmessage?.partyUrl) {
                    dispatch(SET_PARTYURL(JSONmessage.partyUrl))
                }
                dispatch(SET_PARTY_ADMIN_STATUS())
                // console.log(JSONmessage.partyID)
                sendJsonMessage({
                action: 'subscribe_to_chat_activity',
                request_id: Math.random(),
                accessToken: authData.token.access,
                partyId: JSONmessage.partyId,
            })
            console.log(`number of users is ${JSONmessage?.num_of_users}`)
            // if (JSONmessage?.num_of_users > 0) {
            //     dispatch(SET_NUM_PARTYUSERS(JSONmessage?.num_of_users))
            //     console.log('number of users updated')
            // }
            if (JSONmessage?.partyId) {
                if (!wpData.partyId) {
                    dispatch(SET_PARTYID(JSONmessage.partyId))
                } else {
                    if (wpData.partyId !== JSONmessage.partyId) {
                        if (authData.loggedInEmail) {
                            sendJsonMessage({
                            action: 'unsubscribe_from_chat_activity',
                            request_id: Math.random(),
                                accessToken: authData.token.access,
                            partyId: JSONmessage.partyId,
                            })
                            sendJsonMessage({
                            action: 'subscribe_to_chat_activity',
                            request_id: Math.random(),
                            accessToken: authData.token.access,
                            partyId: JSONmessage.partyId,
                            })
                        } else {
                            sendJsonMessage({
                            action: 'unsubscribe_from_chat_activity',
                            request_id: Math.random(),
                            partyId: JSONmessage.partyId,
                            })
                            sendJsonMessage({
                            action: 'subscribe_to_chat_activity',
                            request_id: Math.random(),
                            partyId: JSONmessage.partyId,
                            })
                        }

                    }
                }
            }
            if (JSONmessage?.partyUrl) {
                if (!wpData.partyUrl) {
                    dispatch(SET_PARTYURL(JSONmessage.partyUrl))
                } else {
                    if (JSONmessage?.partyUrl !== wpData.partyUrl) {
                        dispatch(SET_PARTYURL(JSONmessage.partyUrl))
                    }
                }
            }




                console.log('connected')
            }
            // console.log(JSONmessage.length)
            if (Array.isArray(JSONmessage)) {
                // console.log(JSONmessage)
                dispatch(ADD_MESSAGE(JSONmessage))
            } else {
                if (JSONmessage?.message) {
                    // console.log(JSONmessage)
                    dispatch(ADD_MESSAGE(JSONmessage))
                }
            }


            // const
            // console.log(wpData)
        },
        onOpen: () => {

            console.log('sockets opened')
            if (!wpData.partyId) {
                if (authData.token.access) {
                    sendJsonMessage({
                    action: "create_group",
                    request_id: Math.random(),
                    accessToken: authData.token.access,
                        partyUrl: wpData.partyUrl
                    }
                )
                    console.log('group created js')

                }
            } else {
                // console.log(wpData.partyId)
                sendJsonMessage({
                action: 'subscribe_to_chat_activity',
                request_id: Math.random(),
                accessToken: authData.token.access,
                partyId: wpData.partyId
            })
            }


        },
        onClose: () => {
            console.log('sockets closed')
        },
        onError: (error) => {
            console.error('WebSocket error:', error);
        },
        // shouldReconnect: (closeEvent) => true,
        })

    useEffect(() => {
        // Event listener for when the connection is established
        const socket = new WebSocket(wpData.url + 'group/');
        socket.onopen = function(event) {
          console.log('WebSocket connection established');
            console.log(`${wpData.partyId} connected`)
          if (wpData.partyId) {
                // You can send data to the server using the `send` method
              socket.send(JSON.stringify({
                    action: "subscribe_instance",
                    request_id: Math.random(),
                    pk: wpData.partyId
                }));
            }


        }


        // Event listener for when a message is received from the server
        socket.onmessage = function(event) {
          const message = JSON.parse(event.data);
          console.log('Message received from server:', message.data);
          const data = message.data
          if (data) {
              if (wpData.num_of_party_users !== data.num_of_users) {
                  dispatch(SET_NUM_PARTYUSERS(data?.num_of_users))
              }
              if (!wpData.adminStatus) {
                  // update the db time
                  dispatch(SET_IS_PLAYING(data.is_playing))
                  dispatch(SET_CURRENT_TIME(data.current_time))
                  if (wpData.partyUrl !== data.url) {
                      dispatch(SET_PARTYURL(data.url))
                  }
              }
              if (wpData.adminStatus && (wpData.num_of_party_users !== data.num_of_users)) {
                  // update the db time
                  const send_party_data = async (is_playing, current_time) => {
                    await axios.patch(`${authData.url}watch/group/${wpData.partyId}/`, {
                        is_playing: is_playing,
                        current_time: current_time
                    }).then(response => {
                        if (response.status === 200) {
                            const data = response.data
                            console.log(data)
                        }
                    }).catch(error => console.log(error))
              }
              console.log(playerRef.current)
              if (playerRef.current !== null) {
                  send_party_data(wpData.is_playing, playerRef.current.getCurrentTime() ? playerRef.current.getCurrentTime() : 0 )
              }
          }
        };
        // setIsConnected(true)
        // Event listener for when the connection is closed
        socket.onclose = function(event) {
          console.log('WebSocket connection closed');
        };}

        // return () => {
        //     if (socket) {
        //         socket.close()
        //     }
        // }
    }, [wpData.partyId])


    const sendMessage = e => {
        e.preventDefault()
        sendJsonMessage({
            'action': 'send_message',
            'request_id': Math.random(),
            "accessToken": authData.token.access,
            'message': messageBox,
            'partyId': wpData.partyId
        })
        setMessageBox('')
        console.log(wpData)
    }

    function closeWatchParty() {
        setisWatchParty(false)
        watchPartyIcons.current.style.display = 'flex'
        watchPartyIcons.current.style.animation = 'fadeIn 0.5s'
        console.log('closing')
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
    const handleLoginClick = e => {
        dispatch(SetLoginOverlay(!authData.loginOverlay))
    }
    return (
        <>
            <div className="order-3 flex-column py-2 pb-3 position-relative" id="watch-party" ref={watchParty}
             style={{backgroundColor: '#222222',fontSize: '12px',color: '#6a6a6a',display: 'flex',top:0, left:0, animation: 'fadeIn 0.5s'}}>
                <div className="d-flex justify-content-between p-2" style={{borderBottom: '0.15rem solid #464646', height: 'fit-content'}}>

                        <div className="d-flex flex-nowrap gap-2 align-items-center"  >
                            <img
                                src="https://redirect.teleparty.com/static/media/HideChat.e1a44f4c9d14a0e8fd59b71a18e4a058.svg"
                                alt="" height="14" onClick={closeWatchParty} role="button"/>
                                <img
                                    src="https://redirect.teleparty.com/static/media/tp_icon_gradient.2d4db0938d834db38f82db8e435a8b07.svg"
                                     alt="" height="20"/>
                                <div
                                    className="d-flex flex-nowrap justify-content-center align-items-center px-2 py-1 gap-1 rounded-2"
                                    style={{backgroundColor: 'gold'}} role="button">
                                    <i className="fa fa-star fa-sm"/>
                                    <span>Upgrade</span>
                                </div>
                                <img
                                    src="https://redirect.teleparty.com/static/media/cam.b15aa804e510ba90282f621972da6daf.svg"
                                    alt="" height="18px" role="button" onClick={videoCall} id="video-call-trigger"/>
                        </div>

                        <div className="d-flex flex-nowrap gap-2 align-items-center px-1"  >
                            <div className="d-flex flex-nowrap align-items-center gap-1 rounded-2"
                                 style={{backgroundColor: '#282828',padding: '0.1rem'}}>
                                <div
                                    className="d-flex flex-nowrap align-items-center gap-1 justify-content-center text-white"
                                    style={{borderTopLeftRadius: '0.25rem', borderBottomLeftRadius: '0.25rem',paddingLeft:'0.25rem'}}>
                                    <i className="fa-solid fa-users"/>
                                    <span className="">{wpData.num_of_party_users}</span>
                                </div>
                                <div className="p-1 px-2"
                                     style={{backgroundColor: 'black',borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem'}}>
                                    <i className="fa-solid fa-link text-white"/>
                                </div>
                            </div>
                            <img src={Poohbear}
                                 alt="" height="30"/>
                        </div>
                    </div>

                <div ref={messagesRef} className="d-flex flex-column overflow-scroll pt-1 position-relative" style={{overflowY: 'scroll', height: '100%'}}  >


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

                    {wpData.messages.map((message) => !message.message_from_machine ? (message.message_from_user === authData.loggedInEmail ?
                        (<div key={message?.id} className="d-flex flex-nowrap gap-2 pb-2 w-100 justify-content-end" style={{color: '#8c8c8c',fontSize: '14px'}}>
                            <div className=""  >
                                <p>{message.message}</p>
                            </div>
                            <img src={Poohbear}
                              alt="" height="40"/>
                        </div>)
                        :
                        (<div key={message?.id} className="d-flex flex-nowrap gap-2 pb-2 w-100" style={{color: '#8c8c8c',fontSize: '14px'}}>
                            <img src={Poohbear}
                              alt="" height="40"/>
                            <div className=""  >
                                <p style={{fontSize: '8px'}} className='m-0 p-0'>{message.message_from}</p>
                                <p>{message.message}</p>
                            </div>
                        </div>))
                        :
                        (<div key={message?.id} className='d-flex align-items-center justify-content-center w-100' style={{color: 'white',fontSize: '14px'}}>
                        <p>{message.message}</p>
                        </div>))}



                </div>

                <div className="p-2 rounded-2 mt-3" style={{border:'1.5px solid #464646', height: 'fit-content'}}>

                    <div className="w-100 d-flex align-items-center justify-content-evenly pt-2"  >
                        <img src={heart_static} onClick={handleEmoji}
                             alt={emojis.heart_static} height="24px" width="24px"/>
                        <img src={angry_static} onClick={handleEmoji}
                             alt={emojis.angry_static} height="24px" width="24px"/>
                        <img src={cry_static} alt={emojis.cry_static} onClick={handleEmoji}
                             height="24px" width="24px"/>
                        <img src={laugh_static} onClick={handleEmoji}
                             alt={emojis.laugh_static} height="24px" width="24px"/>
                        <img src={surprise_static} onClick={handleEmoji}
                             alt={emojis.surprise_static} height="24px" width="24px"/>
                        <img src={fire_static} onClick={handleEmoji}
                             alt={emojis.fire_static} height="24px" width="24px"/>
                    </div>
                    <hr style={{height:'0.15rem'}}/>
                    <form onSubmit={sendMessage}>
                        <input type="text" name="messagebox" id="" value={messageBox} placeholder="Type a message..." onChange={e => setMessageBox(e.target.value)}
                           className="w-100 border-0 form-control text-white"
                           style={{backgroundColor: '#222222'}}/>
                    </form>


                        <div className="d-flex align-items-center justify-content-between mt-2"  >
                            <div className="d-flex align-items-center gap-2 flex-nowrap"  >
                                <img
                                    src="https://redirect.teleparty.com/static/media/cam.b15aa804e510ba90282f621972da6daf.svg"
                                    alt="" height="18px" width="18px"/>
                                    <img
                                        src="https://redirect.teleparty.com/static/media/mic.c4821928b497235601ac5fadf9537f93.svg"
                                        alt="" height="18px" width="18px"/>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-nowrap"  >
                                <img
                                    src="https://redirect.teleparty.com/static/media/emoji_picker_button.e7b05fbb4d2f086bfa19bc5b50daa2d1.svg"
                                    alt="" height="18px" width="18px"/>
                                    <img
                                        src="https://redirect.teleparty.com/static/media/gif_icon.6d3772895e39504eb2eaf6b44483224d.svg"
                                        alt="" height="18px" width="18px"/>
                                        <img
                                            src="https://redirect.teleparty.com/static/media/reaction-popup.75e33f008d6b713e73b6ef4ff9b992ad.svg"
                                            alt="" height="18px" width="18px"/>
                            </div>
                        </div>
                </div>

                </div>


        </>
    )
}

export {MovieBoxWatchParty}