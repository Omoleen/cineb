import '../../../assets/css/styles.css'
import {useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Set_Error, SetUserEmail} from "../../../redux/auth/actions";
import {
    SignUpAction,
    ForgotAction,
    LoginDataAction,
    TokenDataAction,
    SetLoginOverlay
} from "../../../redux/auth/actions";
import axios from "axios";

const Login = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('login submitted')
        await axios.post(authState.url+'user/login/', authState.logindata)
            .then(response => {
                console.log('log')
                console.log(response)
                if (response.status === 200) {
                    console.log(response.data)
                    dispatch(TokenDataAction(response.data))
                    dispatch(SetUserEmail(authState.logindata.email))
                    localStorage.setItem('token', JSON.stringify(response.data))
                    dispatch(SetLoginOverlay(!authState.loginOverlay))
                    dispatch(Set_Error(''))
                }
            })
            .catch(error => dispatch(Set_Error('Incorrect Login Details')))
    }
    const handleForgot = (e) => {
        e.preventDefault()
        dispatch(ForgotAction())
    }
    const handleInput = e => {
        dispatch(LoginDataAction({[e.target.name]: e.target.value}))
        console.log(authState)
    }
    return (
        <>
        <div className="card-body px-5 pb-5 border-0" style={{fontSize: '14px'}}>
              <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="" style={{fontSize: '20px'}}>
                      Welcome back!
                  </h2>
              </div>
            {authState.error &&
                      <div className='alert alert-danger alert-dismissible position-relative'>
                            {authState.error}
                          <div onClick={() => dispatch(Set_Error(""))}
                               className="text-white position-absolute rounded-circle d-flex align-items-center justify-content-center"
                               role="button"
                               style={{fontSize:'20px',backgroundColor:'transparent',top:'-5px',right:'5px'}}>
                          <span>×</span>
                  </div>
                      </div>
                  }
              <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                  <div className="d-flex flex-column gap-2">
                      <label htmlFor="email" style={{fontSize:'11px', color:'#111'}}>EMAIL ADDRESS</label>
                      <input onChange={handleInput} type="text" className="px-2 py-1 form-control" placeholder="name@email.com"
                             name="email"
                             id="email"/>
                  </div>
                  <div className="d-flex flex-column gap-2">
                      <label htmlFor="password" style={{fontSize:'11px', color:'#111'}}>PASSWORD</label>
                      <input onChange={handleInput} type="password" className="px-2 py-1 form-control" placeholder="Password"
                             name="password"
                             id="password"/>
                  </div>
                  <div className="d-flex justify-content-between">
                      <div className="d-flex gap-2">
                          <input type="checkbox" id="remember" name="remember" className="form-check-input"
                                 /><label
                              htmlFor="remember">Remember me</label>
                      </div>

                      <a href="" onClick={handleForgot}>Forgot password?</a>
                  </div>
                  <button className="text-white rounded-3 shadow-none border-0 py-2" onClick={handleSubmit}
                          style={{backgroundColor:'#59815a',fontSize:'16px'}}>Login
                  </button>
              </form>
          </div>
          <div className="card-footer d-flex align-items-center justify-content-center gap-1 p-4 border-0"
               style={{backgroundColor: '#f2f2f2'}}>
                              <div>Don't have an account?</div>
                              <a href="#" onClick={(e) => {
                                  e.preventDefault()
                                  dispatch(SignUpAction())
                              }}>Register</a>
                          </div>
        </>
    )
}

export {Login}