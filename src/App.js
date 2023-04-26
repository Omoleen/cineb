import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import {Nav} from "./components/pages/General/Nav";
import {Footer} from "./components/pages/General/Footer";
import {LoginSignUp} from "./components/pages/General/LoginSignUp";
import {Landing} from "./components/pages/Landing/Landing";
import {Movie} from "./components/pages/Movie/Movie";

function App() {
  return (
      <>
          <LoginSignUp />
          <Nav />
          <main>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/movie' element={<Movie />}/>
            </Routes>
          </main>
          <Footer />
      </>
  );
}

export default App;
