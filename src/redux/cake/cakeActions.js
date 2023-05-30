import {BUY_CAKE, SELL_CAKE} from "./actionTypes";

export const buyCake = amount => {
    return {
        type: BUY_CAKE,
        payload: {
            amount
        }
    }
}

export const sellCake = amount => {
    return {
        type: SELL_CAKE,
        payload: {
            amount
        }
    }
}