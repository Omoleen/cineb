import '../../../assets/css/styles.css'
import {useState} from "react";

const LoginSignUp = () => {
    const closeLogin = () => {
        document.getElementById("login-overlay").style.display = 'none'
    }
    const [state, setState] = useState('login')
    const handleClick = (e) => {
        e.preventDefault()
        setState(prevState => {
            switch (prevState) {
                case 'login':
                    return 'signup'
                case 'signup':
                    return 'login'
                default:
                    return 'login'
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login-overlay" id="login-overlay">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                  <div className="card bg-white rounded-0 col-11 col-sm-10 col-md-4 m-1 border-0"
                       style={{position: 'absolute', height: 'fit-content'}}>
                      <div className="card-body px-5 pb-5 border-0" style={{fontSize: '14px'}}>
                          <div className="d-flex align-items-center justify-content-center py-3">
                              <h2 className="" style={{fontSize: '20px'}}>
                                  {state === 'login' ? 'Welcome back!' : 'Create an Account'}
                              </h2>
                          </div>
                          <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                              {state === 'signup' && (
                                  <div className="d-flex flex-column gap-2">
                                  <label htmlFor="name" style={{fontSize:'11px', color:'#111'}}>YOUR NAME</label>
                                  <input type="text" className="px-2 py-1 form-control" placeholder="Name"
                                         name="name"
                                         id="name"/>
                              </div>
                              )}
                              <div className="d-flex flex-column gap-2">
                                  <label htmlFor="email" style={{fontSize:'11px', color:'#111'}}>EMAIL ADDRESS</label>
                                  <input type="text" className="px-2 py-1 form-control" placeholder="name@email.com"
                                         name="email"
                                         id="email"/>
                              </div>
                              <div className="d-flex flex-column gap-2">
                                  <label htmlFor="password" style={{fontSize:'11px', color:'#111'}}>PASSWORD</label>
                                  <input type="password" className="px-2 py-1 form-control" placeholder="Password"
                                         name="password"
                                         id="password"/>
                              </div>
                              {state === 'signup' && (
                                  <div className="d-flex flex-column gap-2">
                                  <label htmlFor="password1" style={{fontSize:'11px', color:'#111'}}>CONFIRM PASSWORD</label>
                                  <input type="password" className="px-2 py-1 form-control" placeholder="Confirm Password"
                                         name="password1"
                                         id="password1"/>
                              </div>
                              )}
                              {state === 'login' && (
                                  <div className="d-flex justify-content-between">
                                  <div className="d-flex gap-2">
                                      <input type="checkbox" id="remember" name="remember" className="form-check-input"
                                             /><label
                                          htmlFor="remember">Remember me</label>
                                  </div>

                                  <a href="">Forgot password?</a>
                              </div>
                              )}
                              <button className="text-white rounded-3 shadow-none border-0 py-2" onClick={handleClick}
                                      style={{backgroundColor:'#59815a',fontSize:'16px'}}>{state === 'login'? 'Login' : 'Register'}
                              </button>
                          </form>
                      </div>
                      <div className="card-footer d-flex align-items-center justify-content-center gap-1 p-4 border-0"
                           style={{backgroundColor: '#f2f2f2'}}>
                          {state === 'login'? (
                              <>
                                <div>Don't have an account?</div>
                                  <a href="#" onClick={handleClick}>Register</a>
                              </>
                          ) : (
                              <>
                                <div>Have an account?</div>
                                  <a href="#" onClick={handleClick}>Login</a>
                              </>
                              )}
                      </div>
                      <div onClick={closeLogin}
                           className="text-white position-absolute rounded-circle d-flex align-items-center justify-content-center"
                           role="button"
                           style={{fontSize:'24px',backgroundColor:'#444',top:'-15px',right:'-15px',width: '30px',height: '30px'}}>
                          <span>×</span>
                      </div>
                  </div>
              </div>

          </div>
    )
}

export {LoginSignUp}