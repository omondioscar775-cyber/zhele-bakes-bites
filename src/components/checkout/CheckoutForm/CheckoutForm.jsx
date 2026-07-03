import { useState } from "react";

import DeliveryOptions from "../DeliveryOptions/DeliveryOptions";
import PaymentMethods from "../PaymentMethods/PaymentMethods";

import "./CheckoutForm.css";

function CheckoutForm() {
  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="checkout-form">

      <section className="checkout-section">

        <h2>Customer Information</h2>

        <div className="form-group">
          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={customer.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="07XXXXXXXX"
              value={customer.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={customer.email}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="form-group">
          <label>Delivery Address</label>

          <textarea
            rows="4"
            name="address"
            placeholder="Enter delivery address"
            value={customer.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Order Notes (Optional)</label>

          <textarea
            rows="3"
            name="notes"
            placeholder="Special instructions..."
            value={customer.notes}
            onChange={handleChange}
          />
        </div>

      </section>

      <DeliveryOptions />

      <PaymentMethods />

    </div>
  );
}

export default CheckoutForm;