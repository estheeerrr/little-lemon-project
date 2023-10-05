import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-section">
            <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#menu">Menu</Link></li>
            <li><Link to="/reservations" className="a">Reservations</Link></li>
            <li><Link to="/" className="a">Order Online</Link></li>
            <li><Link to="/" className="a">Login</Link></li>
          </ul>
        </div>
        <div className="footer-section">
            <h4>Contact</h4>
          <ul>
            <li><a id="nav" href="/">Phone Number</a></li>
            <li><a id="nav" href="/">Email</a></li>
            <li><a id="nav" href="/">Address</a></li>
          </ul>
        </div>
        <div className="footer-section">
            <h4>Social Media</h4>
            <ul>
                <li><a id="nav" href="/">Instagram</a></li>
                <li><a id="nav" href="/">Facebook</a></li>
                <li><a id="nav" href="/">Twitter</a></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;