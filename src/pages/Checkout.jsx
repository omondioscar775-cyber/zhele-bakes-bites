import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

import CheckoutForm from "../components/checkout/CheckoutForm/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary/OrderSummary";

import "./Checkout.css";

function Checkout() {
  return (
    <>
      <Navbar />

      <main className="checkout-page">

        <div className="container">

          <h1>Checkout</h1>

          <div className="checkout-layout">

            <CheckoutForm />

            <OrderSummary />

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Checkout;