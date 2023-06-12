import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import {Nav} from "./components/Nav";
import {Footer} from "./components/Footer";
import {Auth} from "./components/pages/Auth";
import {Landing} from "./components/pages/Landing";
import {Movie} from "./components/pages/Movie";
// import {Provider} from "react-redux";
// import {store} from "./redux/store";
import {CakeContainer} from "./components/page components/redux/CakeContainer";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {SetUserEmail, TokenDataAction} from "./redux/auth/actions";
import {useState} from "react";

function App() {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    useEffect(() => {
        const fetchTokens = async () => {
          try {
            // Retrieve tokens from localStorage
            const storedTokens = localStorage.getItem('token');
            console.log(storedTokens)
            if (storedTokens) {
                const JSONTokens = JSON.parse(storedTokens)
              // Verify token validity with an API endpoint
              await axios.post(authState.url + 'user/verify/', {
                access: JSONTokens.access
              }).then(response => {
                  if (response.status === 200) {
                      dispatch(TokenDataAction(JSONTokens))
                      dispatch(SetUserEmail(response.data.email))
                  } else {
                      localStorage.removeItem('token')
                      console.log('access token invalid')
                  }
              }).catch(error => console.log(error));

            }
            } catch (error) {
            // Handle error
            console.error('Error verifying tokens:', error);
          }
        };
        fetchTokens();
        return () => {

        }
  }, []);


  return (
      <>
          {/*<Link to='/cake'>Cake Redux</Link>*/}
          {authState.loginOverlay && <Auth />}
          <Nav />
          <main>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/movie/:id?' element={<Movie />}/>
                <Route path='/cake' element={<CakeContainer />}/>
            </Routes>
          </main>
          <Footer />
      </>
  );
}

export default App;
