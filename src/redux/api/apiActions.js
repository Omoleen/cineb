import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from "./apiActionTypes";
import axios from "axios";

// Action Creators
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// Async Action Creator - Thunk Middleware allows an action to return a function and also allows async actions
export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        let url = 'https://jsonplaceholder.typicode.com/users'
        axios.get(url)
            .then(response => {
                const users = response.data.map(user => user.email)
                console.log(users)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error))
            })
    }
}