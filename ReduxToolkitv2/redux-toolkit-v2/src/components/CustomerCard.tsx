import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addFood} from "../features/customerSlice";

interface T{
    id:number;
    name:string;
    food:string[];
}
const CustomerCard = (props:T) => {
    const dispatch = useDispatch();
    const [customerFoodInput,setCustomerFoodInput] = useState("");
    return (
        <div className="customer-food-card-container">
            <p>{props.name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {props.food.map(food=>(
                        <p>{food}</p>
                    ))}
                </div>
                <div className="customer-food-input-container">
                    <input value={customerFoodInput} onChange={(event => setCustomerFoodInput(event.target.value))}/>
                    <button onClick={()=>dispatch(addFood({id:props.id,food:customerFoodInput}))}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;