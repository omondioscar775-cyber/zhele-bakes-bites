import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

import Success from "../components/checkout/Success/Success";

function OrderSuccess() {
  return (
    <>
      <Navbar />

      <main className="container" style={{ padding: "100px 0" }}>
        <Success />
      </main>

      <Footer />
    </>
  );
}

export default OrderSuccess;