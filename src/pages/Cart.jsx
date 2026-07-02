import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

import CartItem from "../components/cart/CartItem/CartItem";
import CartSummary from "../components/cart/CartSummary/CartSummary";
import EmptyCart from "../components/cart/EmptyCart/EmptyCart";
import SavedItems from "../components/cart/SavedItems/SavedItems";

import { useCart } from "../context/CartContext";

import "./Cart.css";

function Cart() {
  const { cartItems, savedItems } = useCart();

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <div className="container">

          <h1>Shopping Cart</h1>

          {/* Cart contains items */}
          {cartItems.length > 0 && (
            <>
              <div className="cart-layout">

                <div className="cart-items">
                  {cartItems.map((item) => (
                    <CartItem
                      key={`${item.id}-${item.selectedSize}-${item.selectedFlavour}`}
                      item={item}
                    />
                  ))}
                </div>

                <CartSummary />

              </div>

              {savedItems.length > 0 && <SavedItems />}
            </>
          )}

          {/* Cart is empty but user has saved items */}
          {cartItems.length === 0 && savedItems.length > 0 && (
            <>
              <div className="cart-empty-message">

                <h2>Your cart is empty</h2>

                <p>
                  You still have items saved for later.
                  Move them back to your cart anytime.
                </p>

              </div>

              <SavedItems />
            </>
          )}

          {/* Cart and saved items are both empty */}
          {cartItems.length === 0 && savedItems.length === 0 && (
            <EmptyCart />
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Cart;