import {useEffect} from "react";
import {Breadcrumb} from "../page components/Movie/Breadcrumb";
import {MovieBox} from "../page components/Movie/MovieBox";
import {Socials} from "../page components/General/Socials";
import {AboutMovie} from "../page components/Movie/AboutMovie";
import {MayLike} from "../page components/Movie/MayLike";

const Movie = () => {
    useEffect(() => {
        document.title = 'Movie Page'
    }, [])
    return (
        <>
            <Breadcrumb />
            <MovieBox />
            <Socials />
            <section className='row'>
                <AboutMovie />
                <MayLike />
            </section>
        </>
    )
}

export {Movie}