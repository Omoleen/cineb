import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from "./apiActionTypes";

// Create initial state
const APIinitialState = {
    loading: true,
    data: [],
    error: ''
}

// API Reducer
export const APIReducer = (state= APIinitialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}
