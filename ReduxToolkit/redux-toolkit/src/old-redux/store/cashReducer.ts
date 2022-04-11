import {Reducer} from "@reduxjs/toolkit";

const defaultState = {
    cash :0
}

export const cashReducer:Reducer = (state = defaultState,action)=>{
    switch (action.type){
        case "add":
            return {...state,cash: state.cash + action.payload}
        case "get":
            return {...state,cash: state.cash - action.payload}
        default:
            return state
    }
}