import React from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const icon = <FontAwesomeIcon icon={faStar} color="#f4ce14" />;

function Testimonials() {
  return (
    <div className="testimonials-background">
      <div className="container">
        <div className="testimonials" id="testimonials">
          <h2 className="testimonial-headline">Testimonials</h2>
          <div className="reviews-grid">
            <div className="review">
              <div className="stars">
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
              </div>
              <p>"One of the best restuarants! - Tracy</p>
            </div>
            <div className="review">
              <div className="stars">
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
              </div>
              <p>"Their lemon cake is to die for! - Rebecca</p>
            </div>
            <div className="review">
              <div className="stars">
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
                <span className="icon">{icon}</span>
              </div>
              <p>
                "Went with a few friends and they all loved it!" - Anonymous
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
