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
import {TokenDataAction} from "./redux/auth/actions";

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
              } else {
                  localStorage.removeItem('token')
              }
          }).catch(error => console.log(error));

        }
        } catch (error) {
        // Handle error
        console.error('Error verifying tokens:', error);
      }
    };
    fetchTokens();
  }, []);
  return (
      <>
          {/*<Link to='/cake'>Cake Redux</Link>*/}
          <Auth />
          <Nav />
          <main>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/movie' element={<Movie />}/>
                <Route path='/cake' element={<CakeContainer />}/>
            </Routes>
          </main>
          <Footer />
      </>
  );
}

export default App;
