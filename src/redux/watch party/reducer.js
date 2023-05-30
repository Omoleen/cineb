import {ADDMESSAGE, SETPARTYID} from "./actionTypes";

const initialState = {
    url: 'ws://localhost:8000/',
    messages: [],
    isPartyStarted: null,
    partyId: null,

}


const WPReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADDMESSAGE:
            return {
                ...state,
                messages: state.messages.push(action.payload)
            }
        case SETPARTYID:
            return {
                ...state,
                partyId: action.payload
            }
        default:
            return state
    }
}

export {WPReducer}