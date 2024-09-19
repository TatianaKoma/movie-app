import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
       <a href="/">
       <div className="navbar-item">Star Wars API</div>
       </a>
        <a href="/films">
        <div className="navbar-item">Movies</div>
        </a>
    </div>
  );
}
export default Navbar;