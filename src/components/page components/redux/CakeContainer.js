import {buyCake, sellCake} from "../../../redux/cake/cakeActions";
import {fetchUsers} from "../../../redux/api/apiActions";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useRef, useState} from "react";

const CakeContainer = () => {
    const inputAmount = useRef()
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const users = useSelector(state => state.api)
    const [number, setNumber] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(fetchUsers())
        setNumber(prevData => Number(prevData) + 6)
    }, [dispatch])
    useEffect(() => {
        console.log(number)
    }, [number])
    return (
        <>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <input type='number' ref={inputAmount}/>
            <button onClick={() => dispatch(buyCake(inputAmount.current.value))}>Buy Cake</button>
            <button onClick={() => dispatch(sellCake(inputAmount.current.value))}>Sell Cake</button>
            {number}
            {users.loading && <h1>loading...</h1>}

            {users.error && <h1>{users.error}</h1>}

            {users.data && <ul>
                {users.data.map((user, index) => <li key={index}>{user}</li>)}
            </ul>}
        </>
    )
}


export {CakeContainer}
