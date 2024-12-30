import React from "react";
import "./Style/Confirmation.css";

function BookingConfirmation({ state }) {
  return (
    <div>
      <div className="confirmation">
        <div className="confirm-box">
          <h3>Booking Confirmed!</h3>
          <p>
            <span>Date:</span> {state.res_date}
          </p>
          <p>
            <span>Time:</span> {state.res_time}
          </p>
          <p>
            <span>Number of Guests:</span> {state.guests}
          </p>
          <p>
            <span>Special occasion:</span> {state.occasion}
          </p>
        </div>
      </div>
      <div className="cancellation">
        Please arrive 15 minutes before reservation time. If you have to cancel
        please cancel 12 hours before reservation time.
      </div>
    </div>
  );
}

export default BookingConfirmation;
