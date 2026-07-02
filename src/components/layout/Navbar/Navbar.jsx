import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useCart } from "../../../context/CartContext";
import CartDrawer from "../../cart/CartDrawer";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">

          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-image">
              🍰
            </div>

            <div className="logo-text">
              <h2>Zhele</h2>
              <span>Bakes & Bites</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </Link>

            <Link to="/categories" onClick={() => setMenuOpen(false)}>
              Categories
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="nav-icons">

            <button className="icon-btn">
              <FaSearch />
            </button>

            <button
              className="cart"
              onClick={() => setCartOpen(true)}
            >
              <FaShoppingCart />

              {totalItems > 0 && (
                <span>{totalItems}</span>
              )}
            </button>

            <button className="icon-btn">
              <FaUser />
            </button>

            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>
      </header>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}

export default Navbar;