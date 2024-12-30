import React from "react";
import "./Specials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import salad from "../../Images/greek salad.jpg";
import bruchetta from "../../Images/bruchetta.svg";
import dessert from "../../Images/lemon dessert.jpg";

const icon = <FontAwesomeIcon icon={faCar} />;

function Specials() {
  return (
    <div className="container">
      <div className="menu" id="specials">
        <h2>The specials this week!</h2>
        <div className="cards">
          <article className="card">
            <div className="card-content">
              <img src={salad} alt="Greek Salad" />
              <header>
                <h4>Greek Salad</h4>
                <p className="price">$11.99</p>
              </header>
              <p>
                Greek Salad comes with tomatos, olives, and cucumbers and a
                homemade Greek dressing
              </p>
              <button>
                Order Online! <span className="order">{icon}</span>
              </button>
            </div>
          </article>
          <article className="card">
            <div className="card-content">
              <img src={bruchetta} alt="Bruchetta" />
              <header>
                <h4>Bruchetta</h4>
                <p className="price">$8.99</p>
              </header>
              <p>
                Toasted bread with tomatoes, Parmesan cheese, garlic, and fresh
                basil
              </p>
              <button>
                Order Online! <span className="order">{icon}</span>
              </button>
            </div>
          </article>
          <article className="card">
            <div className="card-content">
              <img src={dessert} alt="emon cake " />
              <header>
                <h4>Lemon Dessert</h4>
                <p className="price">$12.99</p>
              </header>
              <p>Lemon Cake. Secret recipe!</p>
              <div className="order">
                <button>
                  Order Online! <span className="order">{icon}</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Specials;
