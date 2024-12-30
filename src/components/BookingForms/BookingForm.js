import React from "react";
import { useState } from "react";
import "./Style/Bookingform.css";

function BookingForm({ dispatch, state, onSubmit }) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("17:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = {
      res_date: reservationDate,
      res_time: reservationTime,
      guests: numberOfGuests,
      occasion: occasion,
    };
    console.log(reservationData);
    onSubmit(reservationData);
  };

  function handleDateChange(e) {
    setReservationDate(e.target.value);
    dispatch({ type: "update_times", selectedDate: e.target.value });
  }

  const handleGuests = (e) => {
    const value = e.target.value;
    setNumberOfGuests(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationDate}
        onChange={handleDateChange}
        aria-label="Enter Reservation Date mm/dd/yyyy"
        className="input-box"
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={reservationTime}
        onChange={(e) => {
          setReservationTime(e.target.value);
        }}
        aria-label="Select time HH:MM"
        className="input-box"
        required
      >
        {state?.availableTimes?.map((time) => (
          <option key={time} value={time} aria-label={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleGuests}
        aria-label="Enter Number of Guests"
        className="input-box"
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        className="input-box"
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
        aria-label="Select an Occasion"
      >
        <option aria-label="Birthday">Birthday</option>
        <option aria-label="Anniversary">Anniversary</option>
      </select>
      <input
        type="submit"
        className="submit-button"
        value="Make Your reservation"
        aria-label="Submit your reservation"
        disabled={!reservationDate && !reservationTime && !numberOfGuests}
      />
    </form>
  );
}

export default BookingForm;
