import React from 'react';
import {useDispatch} from "react-redux";
import {removeReservation} from "../features/reservationSlice";
import {addCustomer} from "../features/customerSlice";


const ReservationCard = ({name,index}:{name:string,index:number}) => {
    const dispatch = useDispatch();

    return (
        <div onClick={()=>{
            dispatch(removeReservation(index))
            dispatch(addCustomer({
                id:index,
                name,
                food:[]
            }))
        }} className="reservation-card-container">{name}</div>
    );
};

export default ReservationCard;