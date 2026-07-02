import "./DailySpecial.css";

function DailySpecial() {
  return (
    <section className="daily-special">
      <div className="container special-container">

        <div className="special-content">

          <span className="offer-tag">
            🎉 Limited Time Offer
          </span>

          <h2>20% OFF Birthday Cakes</h2>

          <p>
            Celebrate your special moments with our freshly baked,
            beautifully decorated birthday cakes. Order today and
            enjoy a 20% discount.
          </p>

          <button className="order-btn">
            Order Now
          </button>

        </div>

        <div className="special-image">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
            alt="Birthday Cake"
          />
        </div>

      </div>
    </section>
  );
}

export default DailySpecial;