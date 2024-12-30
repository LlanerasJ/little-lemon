import React from "react";
import Header from "../components/Hero/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import Booking from "../components/BookingForms/Booking";

function BookingPage() {
  return (
    <>
      <Header />
      <Booking />
      <Testimonials />
      <About />
    </>
  );
}

export default BookingPage;
