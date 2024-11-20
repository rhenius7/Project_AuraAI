// Navbar.js
import React from 'react';
import './Navbar.css'; // Import styles for the navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>AuraAI</h1>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
