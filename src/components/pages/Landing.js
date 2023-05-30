import '../../assets/css/styles.css'
import {Intro} from "../page components/Landing/Intro";
import {Featured} from "../page components/Landing/Featured";
import {Trending} from "../page components/Landing/Trending";
import {ImbdTrending} from "../page components/Landing/ImbdTrending";
import {useEffect} from "react";

const Landing = () => {
    useEffect(() => {
        document.title = 'Landing Page'
    }, [])
    return (
        <>
            <Intro />
            <Featured />
            <ImbdTrending />
        </>
    )
}

export {Landing}