import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import "./Success.css";

function Success() {

  const orderNumber =
    "#" + Math.floor(100000 + Math.random() * 900000);

  return (
    <section className="success-page">

      <FaCheckCircle className="success-icon" />

      <h1>Order Confirmed!</h1>

      <p>
        Thank you for choosing
        <strong> Zhele Bakes & Bites.</strong>

        Your order has been received successfully.
      </p>

      <div className="order-card">

        <h3>Order Number</h3>

        <h2>{orderNumber}</h2>

        <p>
          We are preparing your delicious order.
        </p>

      </div>

      <div className="payment-info">

        <h3>M-Pesa Customers</h3>

        <p>
          When M-Pesa integration is complete,
          you'll automatically receive an STK Push
          to your phone.
        </p>

      </div>

      <div className="success-buttons">

        <Link to="/">
          Continue Shopping
        </Link>

        <Link to="/menu">
          Browse Menu
        </Link>

      </div>

    </section>
  );
}

export default Success;