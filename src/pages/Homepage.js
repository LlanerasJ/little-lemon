import React from "react";
import Header from "../components/Hero/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import Specials from "../components/Specials/Specials";

function Homepage() {
  return (
    <>
      <Header />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default Homepage;
