import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import Confirmation from "./ConfirmedBooking";
import "./Style/Booking.css";
import { fetchAPI, submitAPI } from "../../API";

const times = (state, action) => {
  switch (action.type) {
    case "update_times":
      return {
        ...state,
        availableTimes: updateTimes(action.selectedDate),
      };
    default:
      return state;
  }
};

export function updateTimes(selectedDate) {
  const date = new Date(selectedDate);
  return fetchAPI(date);
}

export function initializeTimes() {
  return {
    availableTimes: fetchAPI(new Date()),
  };
}

function Booking() {
  const [state, dispatch] = useReducer(times, initializeTimes());
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [reservationData, setReservationData] = useState(null);

  const handleFormSubmit = (data) => {
    const submit = submitAPI(data);
    if (submit === true) {
      setFormSubmitted(true);
      setReservationData(data);
    }
  };

  return (
    <div className="container">
      <div className="booking-grid" id="booking">
        <h2>Dining Reservations</h2>
        <div className="booking-forms">
          <div className="booking-left">
            <BookingForm
              dispatch={dispatch}
              state={state}
              onSubmit={handleFormSubmit}
            />
          </div>
          <div className="booking-right">
            {formSubmitted && reservationData && (
              <Confirmation state={reservationData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
