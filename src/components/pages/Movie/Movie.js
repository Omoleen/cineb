import {useEffect} from "react";
import {Breadcrumb} from "./Breadcrumb";
import {MovieBox} from "./MovieBox";
import {Socials} from "../General/Socials";
import {AboutMovie} from "./AboutMovie";
import {MayLike} from "./MayLike";

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