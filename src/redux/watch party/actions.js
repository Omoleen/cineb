import {ADDMESSAGE, SETPARTYID} from "./actionTypes";


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
