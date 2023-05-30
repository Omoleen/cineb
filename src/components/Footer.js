import '../assets/css/styles.css'
import {Link, Route} from "react-router-dom";


const Footer = () => {
    return (
        <footer style={{backgroundColor: '#181818', color: '#b9b9b9'}}
                className="d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-sm-between align-items-sm-center p-4 p-lg-5">
            <div className="d-none d-xl-block">
                <div className="d-flex flex-column">
                    <a href="" className="mb-3"><img src="https://cineb.net/images/group_3/theme_3/logo.png?v=0.1"
                                                      alt=""
                                                      width="40" height="40"/> </a>
                    <div className="d-flex flex-row">&copy; Cineb.net</div>
                </div>
            </div>
            <div className="d-flex flex-column col-12 col-sm-8 col-xl-6">
                <div>Cineb.net is a Free Movies streaming site with zero ads. We let you watch movies online without
                    having to
                    register or paying, with over 10000 movies and TV-Series. You can also Download full movies from
                    Cineb.net
                    and watch it later if you want.
                </div>
                <div className="">
                    <a href="" className="text-decoration-none text-white">Terms of service</a><i
    className="bi bi-dot"/>
                    <a href="" className="text-decoration-none text-white">Contact</a><i className="bi bi-dot"/>
                    <a href="" className="text-decoration-none text-white">Sitemap</a><i className="bi bi-dot"/>
                    <a href="" className="text-decoration-none text-white">9anime</a>
                </div>
                <div className="d-xl-none d-none d-sm-block mt-3">&copy; Cineb.net</div>
            </div>
            <div className="p-2 position-relative col-12 col-sm-3 col-xl-3 "
                 style={{backgroundColor: '#161616',border: '0.063rem solid #272727',fontSize: '0.75rem'}}>
                Cineb.net does not store any files on our server, we only linked to the media which is hosted on 3rd
                party
                services.
                <div className="rounded-circle position-absolute"
                     style={{backgroundColor: 'red',top: '-5px',right: '-5px',width: '10px',height: '10px'}}>
                </div>
            </div>
            <div className="d-block d-sm-none mt-3 ">&copy; Cineb.net</div>
        </footer>
    )
}

export {Footer}