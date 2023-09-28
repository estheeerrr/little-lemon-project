import React from 'react';

function Header() {
  return (
    <>
        <header>
            <img src="./images/logo.svg"></img>
        </header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#highlights">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    </>
  );
}

export default Header;
