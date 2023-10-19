import {configureStore} from "@reduxjs/toolkit";
import {cakeReducer} from "./cake/cakeReducer";
import {APIReducer} from "./api/reducer";
import {AuthReducer} from "./auth/reducer";
import {WPReducer} from "./watch party/reducer";
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        api: APIReducer,
        auth: AuthReducer,
        wp: WPReducer
    },
    // middleware: [logger],
    middleware: [thunkMiddleware],
    devTools: process.env.NODE_ENV !== 'production'
})
export default store