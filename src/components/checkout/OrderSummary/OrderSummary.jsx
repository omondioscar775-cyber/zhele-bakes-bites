import { useCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";

import "./OrderSummary.css";

function OrderSummary() {
  const {
    cartItems,
    subtotal,
    deliveryFee,
    total,
  } = useCart();

  return (
    <aside className="checkout-summary">

      <h2>Order Summary</h2>

      <div className="summary-items">

        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.selectedSize}-${item.selectedFlavour}`}
            className="summary-item"
          >
            <img
              src={item.image}
              alt={item.name}
            />

            <div>
              <h4>{item.name}</h4>

              <small>
                Qty: {item.quantity}
              </small>
            </div>

            <strong>
              KSh {(item.price * item.quantity).toLocaleString()}
            </strong>
          </div>
        ))}

      </div>

      <hr />

      <div className="summary-row">
        <span>Subtotal</span>
        <strong>KSh {subtotal.toLocaleString()}</strong>
      </div>

      <div className="summary-row">
        <span>Delivery</span>
        <strong>KSh {deliveryFee.toLocaleString()}</strong>
      </div>

      <div className="summary-row total">
        <span>Total</span>
        <strong>KSh {total.toLocaleString()}</strong>
      </div>

      <input
        className="promo-input"
        type="text"
        placeholder="Promo Code"
      />

      <button className="apply-btn">
        Apply Code
      </button>

      <button className="place-order-btn">
        Place Order
      </button>

      <Link
        to="/cart"
        className="back-cart"
      >
        ← Back to Cart
      </Link>

    </aside>
  );
}

export default OrderSummary;