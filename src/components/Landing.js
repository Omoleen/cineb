import '../assets/css/styles.css'
import {Intro} from "./Intro";
import {Featured} from "./Featured";
import {Trending} from "./Trending";
import {ImbdTrending} from "./ImbdTrending";

const Landing = () => {
    return (
        <>
            <Intro />
            <Featured />
            <ImbdTrending />
        </>
    )
}

export {Landing}