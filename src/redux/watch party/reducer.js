import {ADDMESSAGE, SETPARTYID, SETPARTYURL, SETNUMPARTYUSERS, SETPARTYADMINSTATUS, SETIs_PLAYING, SETCURRENTTIME, ENDPARTY, SETMEMBERJOINED} from "./actionTypes";
import axios from "axios";
const wsUrl = process.env.REACT_APP_WS_URL
const initialState = {
    url: wsUrl,
    messages: [],
    isPartyStarted: null,
    partyId: null,
    partyUrl: null,
    num_of_party_users: 0,
    adminStatus: false,
    is_playing: false,
    current_time: 0,
    member_joined: false
}


const WPReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADDMESSAGE:
            return {
                ...state,
                messages: Array.isArray(action.payload) ? action.payload : [...state.messages, action.payload]
            }
        case SETPARTYID:
            return {
                ...state,
                partyId: action.payload
            }
        case SETPARTYURL:
            return {
                ...state,
                partyUrl: action.payload
            }
        case SETNUMPARTYUSERS:
            return {
                ...state,
                num_of_party_users: action.payload
            }
        case SETPARTYADMINSTATUS:
            return {
                ...state,
                adminStatus: true
            }
        case SETIs_PLAYING:
            return {
                ...state,
                is_playing: action.payload
            }
        case SETCURRENTTIME:
            return {
                ...state,
                current_time: action.payload
            }
        case SETMEMBERJOINED:
            return {
                ...state,
                member_joined: action.payload
            }
        case ENDPARTY:
            return {
                ...initialState
            }

        default:
            return state
    }
}

export {WPReducer}