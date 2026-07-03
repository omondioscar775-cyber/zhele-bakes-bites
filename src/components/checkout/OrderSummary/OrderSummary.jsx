import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

import "./OrderSummary.css";

function OrderSummary() {
  const navigate = useNavigate();

  const {
    cartItems,
    subtotal,
    deliveryFee,
    total,
    clearCart,
  } = useCart();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Later we'll validate the checkout form
    // and send the order to the backend.

    clearCart();

    navigate("/order-success");
  };

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

              {item.selectedSize && (
                <small>
                  Size: {item.selectedSize}
                </small>
              )}

              {item.selectedFlavour && (
                <small>
                  Flavour: {item.selectedFlavour}
                </small>
              )}
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
        <span>Delivery Fee</span>
        <strong>KSh {deliveryFee.toLocaleString()}</strong>
      </div>

      <div className="summary-row total">
        <span>Total</span>
        <strong>KSh {total.toLocaleString()}</strong>
      </div>

      <input
        className="promo-input"
        type="text"
        placeholder="Enter Promo Code"
      />

      <button
        className="apply-btn"
        type="button"
      >
        Apply Code
      </button>

      <button
        className="place-order-btn"
        type="button"
        onClick={handlePlaceOrder}
      >
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