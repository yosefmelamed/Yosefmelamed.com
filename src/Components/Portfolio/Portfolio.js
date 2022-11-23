import React from "react";
import "./Portfolio.css";
import restaurant from "../../../src/Assets/restaurant-app.jpg";
import bnb from "../../../src/Assets/Thinkful BNB.jpg";
import movies from "../../../src/Assets/We Love Movies.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfoilio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={restaurant} alt="restaurant project" />
          </div>
          <h3>Restaurant App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/yosefmelamed/Restaurant-Reservation-App"
              target="blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://final-caps-22-client.herokuapp.com/dashboard"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={movies} alt="movies project" />
          </div>
          <h3>We Love Movies</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/yosefmelamed/We-love-movies3"
              target="blank"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://media.istockphoto.com/photos/3d-rendering-online-order-food-concept-picture-id1014086186?k=20&m=1014086186&s=612x612&w=0&h=gYsT71JItRDsdlE0Vou3JcRVc6o3deHb4r7rIcRbWL0="
              alt="grubdash project"
            />
          </div>
          <h3>Grub Dash</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/yosefmelamed/GrubDash"
              target="blank"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={bnb} alt="restaurant project" />
          </div>
          <h3>Thinkful BNB</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/yosefmelamed/Thinkful-bnb"
              target="blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://yosefmelamed.github.io/Thinkful-bnb/"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
