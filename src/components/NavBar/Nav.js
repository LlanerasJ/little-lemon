import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../Images/Logo.svg";

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="nav-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        display: "block",
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    >
      <div className="container">
        <nav className="nav-container">
          <img src={logo} alt="Little Lemon Logo" />
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTo("#header");
                }}
                className="nav-link"
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
                className="nav-link"
              >
                <p>About</p>
              </Link>
            </li>
            <li>
              <p className="nav-link">Order Online</p>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTo("#header");
                }}
                className="nav-link"
              >
                <p>Reserve a Table</p>{" "}
              </Link>
            </li>
            <li className="nav-link">
              <p>Log In</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
