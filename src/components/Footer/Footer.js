import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer-background">
      <div className="container">
        <footer>
          <div className="footer-grid">
            <div>
              <ul className="contact">
                <li style={{ fontWeight: "bold" }}>Contact Info</li>
                <li>
                  <span style={{ color: "#f4ce14" }}>Phone Number:</span>{" "}
                  123-456-7890
                </li>
                <li>
                  <span style={{ color: "#f4ce14" }}>Email:</span>{" "}
                  LittleLemon@gmail.com
                </li>
              </ul>
            </div>
            <div className="links">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#header");
                    }}
                    className="foot-link"
                  >
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#about");
                    }}
                    className="foot-link"
                  >
                    <p>About</p>
                  </Link>
                </li>
                <Link
                  to="/"
                  onClick={() => {
                    scrollTo("#testimonials");
                  }}
                  className="foot-link"
                >
                  <p>Testimonials</p>
                </Link>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#header");
                    }}
                    className="foot-link"
                  >
                    <p>Reserve a Table</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="insta foot-link">
              <a href="www.instagram.com">
                <FontAwesomeIcon icon={faCamera} size="lg" />
              </a>
              <small style={{ color: "white" }}>Follow Us!</small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
