import {BUY_CAKE, SELL_CAKE} from "./actionTypes";

const cakeInitialState = {
    numOfCakes: 100
}
export const cakeReducer = (state=cakeInitialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {numOfCakes: state.numOfCakes + Number(action.payload.amount)}
        case SELL_CAKE:
            return {numOfCakes: state.numOfCakes - action.payload.amount}
        default:
            return state
    }
}