import '../../../assets/css/styles.css'
import {useSelector, useDispatch} from "react-redux";
import {
    LoginAction,
    Set_Error,
    SetLoginOverlay,
    SetUserEmail,
    SignUpDataAction,
    TokenDataAction
} from "../../../redux/auth/actions";
import axios from "axios";


const SignUp = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(authState.url +'user/register/', authState.signupdata)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    dispatch(TokenDataAction(response.data))
                    dispatch(SetUserEmail(authState.signupdata.email))
                    dispatch(SetLoginOverlay(!authState.loginOverlay))
                    localStorage.setItem('token', JSON.stringify(response.data))
                    dispatch(Set_Error(''))
                }
            })
            .catch(error => dispatch(Set_Error('User already exists')))
    }
    const handleInput = e => {
        dispatch(SignUpDataAction({[e.target.name]: e.target.value}))
        console.log(authState)
    }
    return (
        <>
        <div className="card-body px-5 pb-5 border-0" style={{fontSize: '14px'}}>
                          <div className="d-flex align-items-center justify-content-center py-3">
                              <h2 className="" style={{fontSize: '20px'}}>
                                  Create an Account
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
                                  <label htmlFor="name" style={{fontSize:'11px', color:'#111'}}>YOUR NAME</label>
                                  <input onChange={handleInput} type="text" className="px-2 py-1 form-control" placeholder="Name"
                                         name="name"
                                         id="name"/>
                              </div>
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
                              <div className="d-flex flex-column gap-2">
                                  <label htmlFor="password1" style={{fontSize:'11px', color:'#111'}}>CONFIRM PASSWORD</label>
                                  <input onChange={handleInput} type="password" className="px-2 py-1 form-control" placeholder="Confirm Password"
                                         name="confirmPassword"
                                         id="password1"/>
                              </div>
                              <button className="text-white rounded-3 shadow-none border-0 py-2" onClick={handleSubmit}
                                      style={{backgroundColor:'#59815a',fontSize:'16px'}}>Register
                              </button>
                          </form>
                      </div>
          <div className="card-footer d-flex align-items-center justify-content-center gap-1 p-4 border-0"
               style={{backgroundColor: '#f2f2f2'}}>
                          <div>Have an account?</div>
                          <a href="#" onClick={(e) => {
                              e.preventDefault()
                              dispatch(LoginAction())
                          }}>Login</a>
                      </div>
        </>
    )
}

export {SignUp}