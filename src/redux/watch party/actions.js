import {ADDMESSAGE, SETPARTYID, SETPARTYURL, SETNUMPARTYUSERS, SETPARTYADMINSTATUS, SETIs_PLAYING, SETCURRENTTIME, ENDPARTY, SETMEMBERJOINED} from "./actionTypes";


export const ADD_MESSAGE = message => {
    return {
        type: ADDMESSAGE,
        payload: message
    }
}
export const SET_PARTYID = id => {
    return {
        type: SETPARTYID,
        payload: id
    }
}
export const SET_PARTYURL = url => {
    return {
        type: SETPARTYURL,
        payload: url
    }
}
export const SET_NUM_PARTYUSERS = num => {
    return {
        type: SETNUMPARTYUSERS,
        payload: num
    }
}
export const SET_PARTY_ADMIN_STATUS = () => {
    return {
        type: SETPARTYADMINSTATUS
    }
}
export const SET_IS_PLAYING = playing => {
    return {
        type: SETIs_PLAYING,
        payload: playing
    }
}
export const SET_CURRENT_TIME = time => {
    return {
        type: SETCURRENTTIME,
        payload: time
    }
}

export const END_PARTY = () => {
    return {
        type: ENDPARTY
    }
}
export const SET_MEMBER_JOINED = (bool) => {
    return {
        type: SETMEMBERJOINED,
        payload: bool
    }
}