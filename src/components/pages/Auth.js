import '../../assets/css/styles.css'
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LoginAction, CancelAction, SetLoginOverlay, Set_Error} from "../../redux/auth/actions";
import {Login as LoginComponent} from "../page components/Auth/Login";
import {SignUp as SignUpComponent} from '../page components/Auth/SignUp'
import {ForgotPassword as ForgotPasswordComponent} from '../page components/Auth/ForgotPassword'

const Auth = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    // useEffect(() => {
    //     dispatch(LoginAction())
    // }, [])
    const loginOverlay = useRef()
    const handleOverlayClick = e => {
        if (e.target === loginOverlay.current) {
            // loginOverlay.current.style.display = 'none'
            dispatch(SetLoginOverlay(!authState.loginOverlay))
            dispatch(LoginAction())
        }
    }
    const handleCancel = () => {
        dispatch(SetLoginOverlay(!authState.loginOverlay))
        dispatch(LoginAction())
        // loginOverlay.current.style.display = 'none'
    }
    return (
        <div ref={loginOverlay} onClick={handleOverlayClick} className="login-overlay d-flex" id="login-overlay">
              <div className="card bg-white rounded-0 col-11 col-sm-10 col-md-4 m-1 border-0"
                       style={{position: 'absolute', height: 'fit-content'}}>

                  {authState.login && <LoginComponent />}
                  {authState.signup && <SignUpComponent />}
                  {authState.forgot && <ForgotPasswordComponent />}

                  <div onClick={handleCancel}
                       className="text-white position-absolute rounded-circle d-flex align-items-center justify-content-center"
                       role="button"
                       style={{fontSize:'24px',backgroundColor:'#444',top:'-15px',right:'-15px',width: '30px',height: '30px'}}>
                      <span>×</span>
                  </div>
              </div>

          </div>
    )
}

export {Auth}