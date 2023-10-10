import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

function Header() {
  const handleClick = (anchor) => () => {
    const elements = document.getElementsByClassName(anchor);
    if (elements.length > 0) {
      const elementToScroll = elements[0];
      elementToScroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/" onClick={handleClick("header")}>Home</Link></li>
          <li><Link to="/#about" onClick={handleClick("about")}>About</Link></li>
          <li><Link to="/#menu" onClick={handleClick("highlights")}>Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/">Order Online</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;