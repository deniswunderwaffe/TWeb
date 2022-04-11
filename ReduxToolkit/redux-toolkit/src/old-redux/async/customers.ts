import {addCustomersAction} from "../store/customerReducer";

export const fetchCustomers = () =>{
    return function (dispatch){
        fetch('')
            .then(response=>response.json())
            .then(json=>dispatch(addCustomersAction(json)))
    }
}