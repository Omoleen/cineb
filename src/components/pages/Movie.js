import {useEffect} from "react";
import {Breadcrumb} from "../page components/Movie/Breadcrumb";
import {MovieBox} from "../page components/Movie/MovieBox";
import {Socials} from "../page components/General/Socials";
import {AboutMovie} from "../page components/Movie/AboutMovie";
import {MayLike} from "../page components/Movie/MayLike";
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {SET_PARTYID} from "../../redux/watch party/actions";
import {PartyUrl} from "../page components/Movie/PartyUrl";


const Movie = () => {
    const dispatch = useDispatch()
    const wpData = useSelector(state => state.wp)
    const { id } = useParams();
    useEffect(() => {
        document.title = 'Movie Page'
        if (id) {
            dispatch(SET_PARTYID(id))
            console.log(id)
        }
    }, [])
    return (
        <>
            <Breadcrumb />
            <MovieBox />
            <PartyUrl />
            <Socials />
            <section className='row'>
                <AboutMovie />
                <MayLike />
            </section>
        </>
    )
}

export {Movie}