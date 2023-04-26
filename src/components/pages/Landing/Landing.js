import '../../../assets/css/styles.css'
import {Intro} from "./Intro";
import {Featured} from "./Featured";
import {Trending} from "./Trending";
import {ImbdTrending} from "./ImbdTrending";
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