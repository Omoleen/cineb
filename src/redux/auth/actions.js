import {LOGIN, SIGNUP, FORGOT, CANCEL, SETLOGINDATA,SETSIGNUPDATA,SETFORGOTDATA, SETLOGINOVERLAY, SETTOKENDATA, SETEMAIL, ERROR, LOGOUT, LOADER, SUBMITFORGOTDATA, SUBMITSIGNUPDATA, SUBMITLOGINDATA} from "./actionTypes";



export const LoginAction = () => {
    return {
        type: LOGIN
    }
}
export const SignUpAction = () => {
    return {
        type: SIGNUP
    }
}
export const ForgotAction = () => {
    return {
        type: FORGOT
    }
}
export const CancelAction = () => {
    return {
        type: CANCEL
    }
}
export const LogoutAction = () => {
    return {
        type: LOGOUT
    }
}
export const LoginDataAction = payload => {
    return {
        type: SETLOGINDATA,
        payload: payload
    }
}
export const SignUpDataAction = payload => {
    return {
        type: SETSIGNUPDATA,
        payload: payload
    }
}
export const ForgotDataAction = payload => {
    return {
        type: SETFORGOTDATA,
        payload: payload
    }
}
export const TokenDataAction = payload => {
    return {
        type: SETTOKENDATA,
        payload: payload
    }
}
export const SetUserEmail = payload => {
    return {
        type: SETEMAIL,
        payload: payload
    }
}
export const SetLoginOverlay = payload => {
    return {
        type: SETLOGINOVERLAY,
        payload: payload
    }
}
export const Set_Error = (err) => {
    return {
        type: ERROR,
        payload: err
    }
}
export const setIsLoading = payload => {
    return {
        type: LOADER,
        payload: payload
    }
}
// export const SubmitLoginDataAction = () => {
//     return function (dispatch) {
//
//         axios.post(url+'user/login/')
//             .then(response => response.json())
//             .then(data => dispatch(LoginDataAction(data)))
//             .catch(error => console.log(error))
//     }
// }
// export const SubmitSignUpDataAction = () => {
//     return {
//         type: SUBMITSIGNUPDATA,
//     }
// }
// export const SubmitForgotDataAction = () => {
//     return {
//         type: SUBMITFORGOTDATA,
//     }
// }
