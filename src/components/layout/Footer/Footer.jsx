import "./Footer.css";
import logo from "../../../assets/images/logo/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Company Info */}
        <div className="footer-column">

          <img
            src={logo}
            alt="Zhele Bakes & Bites"
            className="footer-logo"
          />

          <p>
            Freshly baked cakes, pastries, snacks, pizzas,
            and refreshing drinks made with love every day.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="/menu">Menu</a></li>

            <li><a href="/about">About Us</a></li>

            <li><a href="/contact">Contact</a></li>

          </ul>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <FaPhoneAlt />
            &nbsp;+254 700 000 000
          </p>

          <p>
            <FaEnvelope />
            &nbsp;info@zhelebakes.co.ke
          </p>

          <p>
            <FaMapMarkerAlt />
            &nbsp;Nairobi, Kenya
          </p>

        </div>

        {/* Opening Hours */}
        <div className="footer-column">

          <h3>Opening Hours</h3>

          <p>
            <FaClock />
            &nbsp;Mon – Sat
          </p>

          <p>8:00 AM – 8:00 PM</p>

          <p>Sunday: 9:00 AM – 6:00 PM</p>

          <a
            className="map-button"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Zhele Bakes & Bites. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;