import { Link } from "react-router-dom";
import { FaTag, FaArrowRight } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";

import "./CartSummary.css";

function CartSummary() {
  const {
    subtotal,
    deliveryFee,
    total,
    itemCount,
  } = useCart();

  return (
    <aside className="cart-summary">

      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>KSh {subtotal.toLocaleString()}</span>
      </div>

      <div className="summary-row">
        <span>Delivery</span>
        <span>KSh {deliveryFee.toLocaleString()}</span>
      </div>

      <div className="promo-box">
        <FaTag />

        <input
          type="text"
          placeholder="Promo code"
        />

        <button>
          Apply
        </button>
      </div>

      <hr />

      <div className="summary-total">
        <span>Total</span>

        <h3>KSh {total.toLocaleString()}</h3>
      </div>

      <Link
        to="/checkout"
        className="checkout-btn"
      >
        Proceed to Checkout
        <FaArrowRight />
      </Link>

      <Link
        to="/menu"
        className="continue-shopping"
      >
        Continue Shopping
      </Link>

    </aside>
  );
}

export default CartSummary;