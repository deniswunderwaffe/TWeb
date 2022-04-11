import {Reducer} from "@reduxjs/toolkit";

const defaultState = {
    customers :[]
}
const ADD = "add-json";
export const customerReducer:Reducer = (state = defaultState,action)=>{
    switch (action.type){
        case ADD:
            return {...state,customers: [...state.customers, ...action.payload]}
        case "get":
            return {...state,customers: state.customers - action.payload}
        default:
            return state
    }
}

export  const addCustomersAction = (payload)=>({type:ADD,payload:payload}); //вызываем сразу функкцию которая вызовет правильный метод