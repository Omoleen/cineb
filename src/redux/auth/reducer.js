import {SIGNUP, LOGIN, FORGOT, CANCEL, SETLOGINDATA, SETSIGNUPDATA, SETFORGOTDATA, SETTOKENDATA, SUBMITSIGNUPDATA, SUBMITFORGOTDATA, SUBMITLOGINDATA} from "./actionTypes";

const initialState = {
    url: 'http://localhost:8000/',
    login: false,
    signup: false,
    forgot: false,
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
    }
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
        default:
            return state
    }
}