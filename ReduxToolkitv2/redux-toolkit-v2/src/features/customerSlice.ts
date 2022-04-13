import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: { value: Customer[] } = {
    value: []
}

interface Customer{
    id:number;
    name:string;
    food:string[];
}
export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer(state,action:PayloadAction<Customer>){
            state.value.push(action.payload);
        },
        addFood(state,action:PayloadAction<{food:string,id:number}>){
            state.value.forEach(customer=>{
                if(customer.id === action.payload.id){
                    customer.food.push(action.payload.food)
                }
            })
        }
    }
})

export const {addCustomer, addFood} = customerSlice.actions;
export default customerSlice.reducer;