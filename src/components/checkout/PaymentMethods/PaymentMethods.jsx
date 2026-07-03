import { useState } from "react";
import "./PaymentMethods.css";

function PaymentMethods() {
  const [payment, setPayment] = useState("mpesa");

  return (
    <section className="checkout-section">
      <h2>Payment Method</h2>

      <label className="payment-option">
        <input
          type="radio"
          value="mpesa"
          checked={payment === "mpesa"}
          onChange={(e) => setPayment(e.target.value)}
        />

        <div>
          <h3>📱 M-Pesa</h3>
          <p>Pay securely using STK Push.</p>
        </div>
      </label>

      <label className="payment-option">
        <input
          type="radio"
          value="cash"
          checked={payment === "cash"}
          onChange={(e) => setPayment(e.target.value)}
        />

        <div>
          <h3>💵 Cash on Delivery</h3>
          <p>Pay when your order arrives.</p>
        </div>
      </label>

      <label className="payment-option disabled">
        <input
          type="radio"
          disabled
        />

        <div>
          <h3>💳 Card Payment</h3>
          <p>Coming Soon</p>
        </div>
      </label>
    </section>
  );
}

export default PaymentMethods;