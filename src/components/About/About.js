import React from "react";
import "./About.css";
import mario from "../../Images/Mario and Adrian A.jpg";
import adrian from "../../Images/Mario and Adrian b.jpg";

function About() {
  return (
    <div className="container">
      <div className="about" id="about">
        <div className="about-grid">
          <div className="about-left">
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <p>
              Little Lemon was opened by two best friends. Mario and Adrian went
              to the same culinary school and have the same love of
              Mediterranean food. They wanted to share their love with their
              community
            </p>
          </div>
          <div className="chef-images">
            <div className="image-stack-top">
              <img
                src={mario}
                alt="Mario and Adrian picking out spices"
                width="250px"
              />
            </div>
            <div className="image-stack-bottom">
              <img src={adrian} alt="Adrian and Mario" width="250px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
