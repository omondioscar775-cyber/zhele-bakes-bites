import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "./EmptyCart.css";

function EmptyCart() {
  return (
    <div className="empty-cart">

      <FaShoppingBasket className="empty-icon" />

      <h2>Your cart is empty</h2>

      <p>
        Looks like you haven't added anything yet.
      </p>

      <Link to="/menu" className="shop-btn">
        Start Shopping
      </Link>

    </div>
  );
}

export default EmptyCart;