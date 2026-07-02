import "./Hero.css";

import logo from "../../../assets/images/logo/logo.png";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tagline">
            Fresh, Tasty & Made with Love
          </span>

          <h1>
            Fresh Bites
            <br />
            <span>Everyday</span>
          </h1>

          <p>
            Come and enjoy freshly baked cakes, pastries,
            pizzas, snacks and refreshing drinks made with
            premium ingredients every single day.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Order Now
            </button>

            <button className="secondary-btn">
              Explore Menu
            </button>

          </div>

          <div className="hero-features">

            <span>✔ Fresh Ingredients</span>

            <span>✔ Hygienically Prepared</span>

            <span>✔ Fast Delivery</span>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={logo}
            alt="Zhele Bakes & Bites"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;