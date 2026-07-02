import "./CartDrawer.css";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem/CartItem";
import CartSummary from "./CartSummary/CartSummary";
function CartDrawer({ isOpen, onClose }) {
  const { cartItems } = useCart();

  return (
    <div className={`cart-overlay ${isOpen ? "show" : ""}`}>
      <div className="cart-drawer">

        <div className="cart-header">
          <h2>Shopping Cart</h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cart-body">

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))
          )}

        </div>

        <CartSummary />

      </div>
    </div>
  );
}

export default CartDrawer;