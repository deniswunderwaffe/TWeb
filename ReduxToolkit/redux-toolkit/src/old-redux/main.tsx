import {createStore, Reducer} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./store/index";

const Main = () => {
    return (
        <Provider store={store}>
            <Consumer/>
        </Provider>
    );
};

export default Main;

const Consumer = () => {
    const dispatch = useDispatch();
    const  cash = useSelector(state => state.cash.cash);
    const  customers = useSelector(state => state.customers.customers);

    const addCash = (cash:number)=>{
        dispatch({type:"add",payload:cash})
    }

    return (
        <div>

        </div>
    );
};