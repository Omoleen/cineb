import {SIGNUP, LOGIN, FORGOT, CANCEL, SETLOGINDATA, SETSIGNUPDATA, SETFORGOTDATA, SETTOKENDATA, SETEMAIL, SETLOGINOVERLAY, ERROR, LOGOUT, SUBMITSIGNUPDATA, SUBMITFORGOTDATA, SUBMITLOGINDATA} from "./actionTypes";
const apiUrl = process.env.REACT_APP_API_URL
const initialState = {
    url: "http://" + apiUrl,
    loginOverlay: false,
    login: true,
    signup: false,
    forgot: false,
    loggedInEmail: null,
    logindata: {
        email: null,
        password: null,
    },
    signupdata: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null
    },
    forgotdata: {
        email: null
    },
    token: {
        access: null,
        refresh: null
    },
    error: ''
}

export const AuthReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: true,
                signup: false,
                forgot: false
            }
        case SIGNUP:
            return {
                ...state,
                login: false,
                signup: true,
                forgot: false
            }
        case FORGOT:
            return {
                ...state,
                login: false,
                signup: false,
                forgot: true
            }
        case CANCEL:
            return {
                ...state,
                login: false,
                signup: false,
                forgot: false
            }
        case SETLOGINDATA:
            return {
                ...state,
                logindata: {
                    ...state.logindata,
                    ...action.payload
                },
            }
        case SETSIGNUPDATA:
            return {
                ...state,
                signupdata: {
                    ...state.signupdata,
                    ...action.payload
                }
            }
        case SETFORGOTDATA:
            return {
                ...state,
                forgotdata: {
                    ...state.forgotdata,
                    ...action.payload
                }
            }
        case SETTOKENDATA:
            return {
                ...state,
                token: {
                    ...state.token,
                    ...action.payload
                }
            }
        case SETEMAIL:
            return {
                ...state,
                loggedInEmail: action.payload
            }
        case SETLOGINOVERLAY:
            return {
                ...state,
                loginOverlay: action.payload,
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case LOGOUT:
            // localStorage.getItem('token')
            localStorage.removeItem('token')
            return {
                ...initialState
            }
        default:
            return state
    }
}