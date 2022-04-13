import React, { useState } from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import ReservationCard from "./components/ReservationCard";
import {addReservation} from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {
  const [reservationNameInput,setReservationNameInput] = useState("");
  const reservations = useSelector((state:RootState)=>state.reservations.value)
  const customer = useSelector((state:RootState)=>state.customer.value)

  const dispatch = useDispatch();

  function handleAddReservation() {
    if(!reservationNameInput)return;
    dispatch(addReservation(reservationNameInput));
  }

  return (
      <div className="App">
        <div className="container">
          <div className="reservation-container">
            <div>
              <h5 className="reservation-header">Reservations</h5>
              <div className="reservation-cards-container">
                {reservations.map((name,index)=>(
                    <ReservationCard name={name} index={index}/>
                ))}
              </div>
            </div>
            <div className="reservation-input-container">
              <input value={reservationNameInput} onChange={(event => setReservationNameInput(event.target.value))}/>
              <button onClick={handleAddReservation}>Add</button>
            </div>
          </div>
          <div className="customer-food-container">
            {customer.map(customer=><CustomerCard {...customer}/>)}
          </div>
        </div>
      </div>
  );
}

export default App;