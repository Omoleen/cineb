import '../../../assets/css/styles.css'
import {useEffect, useReducer, useRef, useState} from "react";

const Intro = () => {
    // const [width,setWidth] = useState(window.innerWidth)
    let initialState = 'Ever wanted to watch free movies online? Then look no further. Watch movies of various categories only\n                here.\n                Stream HD quality movies on your TV, laptop or mobile. Here you can watch the movies of your choice\n                without\n                any registration or signups - most hassle-free option. Stop visiting terrible sites that promise movies\n                in\n                HD and 4K quality and serve you crap, and waste your time and energy. You can easily search the movies\n                of\n                your choice here- from blockbusters to rare critically- acclaimed gems, we have them all. We promise\n                regular\n                uploads. So, your favorite movie is just a click away! Think no more, start streaming.'
    const reducer = (state,action) => {
        switch (action.type) {
            case 'reduce':
                return initialState.slice(0,175) + '...'
            case 'increase':
                return initialState
            default:
                return initialState
        }
    }
    const [state, dispatch] = useReducer(reducer,initialState)
    const moreBtn = useRef()
    useEffect(() => {
        // setWidth(window.innerWidth)
        if (window.innerWidth > 600) {
            moreBtn.current.textContent = 'less'
            dispatch({'type': 'increase'})
        } else {
            moreBtn.current.textContent = 'more'
            dispatch({'type': 'reduce'})
        }
    },[])


    const handleClick = () => {
        if (moreBtn.current.textContent === 'more') {
            dispatch({'type': 'increase'})
            moreBtn.current.textContent = 'less'
        }else {
            dispatch({'type': 'reduce'})
            moreBtn.current.textContent = 'more'
        }
    }
    return (
        <section >
            <div className="bg-light p-3">
                {state}
                <div ref={moreBtn} className='bg-dark text-white rounded-2 p-1' role='button' style={{width: 'fit-content'}} onClick={handleClick}>
                more
            </div>
            </div>


        </section>
    )
}

export {Intro}