import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

import CartItem from "../components/cart/CartItem/CartItem";
import CartSummary from "../components/cart/CartSummary/CartSummary";
import EmptyCart from "../components/cart/EmptyCart/EmptyCart";

import { useCart } from "../context/CartContext";

import "./Cart.css";

function Cart() {
  const { cartItems } = useCart();

  return (
    <>
      <Navbar />

      <main className="cart-page">

        <div className="container">

          <h1>Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <>

              <div className="cart-items">

                {cartItems.map((item) => (
                  <CartItem
                    key={`${item.id}-${item.selectedSize}-${item.selectedFlavour}`}
                    item={item}
                  />
                ))}

              </div>

              <CartSummary />

            </>
          )}

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Cart;