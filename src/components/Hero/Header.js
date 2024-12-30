import React, { useEffect } from "react";
import "./Header.css";
import headimage from "../../Images/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking");
  };

  useEffect(() => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="header-background">
      <div className="container">
        <header id="header">
          <div className="header-container">
            <div className="header-left">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                We welcome you to Little Lemon! Your restuarant and home away
                from home!
              </p>
              <button
                className="header-button"
                onClick={handleSubmit}
                aria-label="Reserve a Table"
              >
                Reserve a Table
              </button>
            </div>
            <div className="header-right">
              <img
                src={headimage}
                alt="Chef holding a prepared dish"
                width="250px"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
