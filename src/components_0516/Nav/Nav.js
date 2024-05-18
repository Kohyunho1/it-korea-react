import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <nav>
        <a href="index.html">
          <img src="img/logo.png" className="logo" />
        </a>
        <div className="nav-links" id="navLinks">
          <i className="fas fa-times"></i>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PROGRAMS</a>
            </li>
            <li>
              <a href="#">FACILITIES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <i className="fas fa-bars"></i>
      </nav>
    </div>
  );
};

export default Nav;
