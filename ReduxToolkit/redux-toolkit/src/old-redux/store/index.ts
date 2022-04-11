import {createStore, combineReducers, compose, applyMiddleware} from "@reduxjs/toolkit";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})
export const store = createStore(rootReducer,compose(applyMiddleware(thunk)));