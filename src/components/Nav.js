import '../assets/css/styles.css'
import {Routes, Route, Link} from "react-router-dom";
import {Landing} from "./Landing";
import {Movie} from "./Movie";
import {Footer} from "./Footer";

const Nav = () => {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "18.75rem";
    }
    return (<>
        <nav className="" style={{backgroundColor: '#273227',height:'fit-content'}}>
            <div
                className="navbar navbar-expand-lg navbar-light justify-content-between align-items-center p-3 h-100">
                <div className="d-flex">
                    <button className="navbar-toggler d-block border-0" type="button"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={openNav}>
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <Link to='/' className="navbar-brand"><img src="https://cineb.net/images/group_3/theme_3/logo.png?v=0.1"
                                                              alt=""
                                                              width="40" height="40"/></Link>

                </div>

                <div className="input-group d-none d-xl-inline-flex w-25 p-0" style={{borderRadius: '30%'}}>
            <span className="input-group-text" style={{borderRight: 0,backgroundColor: 'white'}}><i className="bi bi-search"
        style={{color: '#273227'}}/></span>
                    <input type="text" className="form-control" style={{borderLeft: 0,outline: 'none'}} id="search-movie"/>
                </div>

                <Link to='/' style={{color: 'white'}} className="text-decoration-none nav-item"><i
        className="bi bi-person-fill fs-6"/>Login</Link>

                <div id="mySidenav" className="sidenav">
                    <div className="p-4">
                        <div onClick={closeNav} role="button"
                             className="text-dark p-2 rounded-pill d-inline-flex justify-content-center align-items-center gap-2 close-menu mb-3"
                             style={{width: 'fit-content',backgroundColor: '#eeeeee'}}>
                            <i className="fa fa-less-than fa-lg"/> Close menu
                        </div>
                        <a href="/" className="pb-1 pt-1" >About</a>
                        <hr className="" style={{height: '1px'}}/>
                        <a href="/" className="pb-1 pt-1" >About</a>
                        <hr className="" style={{height: '1px'}}/>
                        <a href="/" className="pb-1 pt-1" >About</a>
                        <hr className="" style={{height: '1px'}}/>
                        <a href="/" className="pb-1 pt-1">About</a>
                        <hr className="" style={{height: '1px'}}/>
                    </div>
                </div>
            </div>

            <div className="d-xl-none input-group d-inline-flex w-100 p-3 pt-0">
        <span className="input-group-text" style={{borderRight: 0,backgroundColor: 'white'}}><i className="bi bi-search"
    style={{color: '#273227'}}/></span>
            <input type="text" className="form-control" style={{borderLeft: 0,outline: 'none'}} id="search-movie"/>
        </div>
        </nav>
        <main>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/movie' element={<Movie />}/>
            </Routes>
        </main>
        <Footer />
    </>)
}

export {Nav}