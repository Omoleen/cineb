import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import {Nav} from "./components/pages/General/Nav";
import {Footer} from "./components/pages/General/Footer";
import {LoginSignUp} from "./components/pages/General/LoginSignUp";

function App() {
  return (
      <>
          <LoginSignUp />
          <Nav />
      </>
  );
}

export default App;
