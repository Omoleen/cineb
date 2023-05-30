import '../../../assets/css/styles.css'
import {useSelector, useDispatch} from "react-redux";
import {LoginAction, ForgotDataAction} from "../../../redux/auth/actions";
import axios from "axios";

const ForgotPassword = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(authState.url +'user/forgot/', authState.forgotdata)
            .then(response => {
                console.log(response.data)
                if (response.status === 200) {
                    console.log(response.data)
                    // dispatch(TokenDataAction(response.data))
                    // localStorage.setItem('token', JSON.stringify(response.data))
                }
            })
            .catch(error => console.log(error))
    }
    const handleInput = e => {
        dispatch(ForgotDataAction({[e.target.name]: e.target.value}))
        console.log(authState)
    }
    return (
        <>
        <div className="card-body px-5 pb-5 border-0" style={{fontSize: '14px'}}>
                          <div className="d-flex align-items-center justify-content-center py-3">
                              <h2 className="" style={{fontSize: '20px'}}>
                                  Reset Password
                              </h2>
                          </div>
                          <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                              <div className="d-flex flex-column gap-2">
                                  <label htmlFor="email" style={{fontSize:'11px', color:'#111'}}>YOUR EMAIL</label>
                                  <input onChange={handleInput} type="text" className="px-2 py-1 form-control" placeholder="name@email.com"
                                         name="email"
                                         id="email"/>
                              </div>
                              <button className="text-white rounded-3 shadow-none border-0 py-2" onClick={handleSubmit}
                                      style={{backgroundColor:'#59815a',fontSize:'16px'}}>Submit
                              </button>
                          </form>
                      </div>
          <div className="card-footer d-flex align-items-center justify-content-center gap-1 p-4 border-0"
               style={{backgroundColor: '#f2f2f2'}}>
                          <div>Back to</div>
                          <a href="#" onClick={() => dispatch(LoginAction())}>Login</a>
                      </div>
        </>
    )
}

export {ForgotPassword}