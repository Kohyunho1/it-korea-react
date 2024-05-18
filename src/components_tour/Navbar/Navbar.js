import React from 'react';
import './Navbar.css';
import img1 from '../Img/menu-btn.png';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h1 className="logo">ADVENTURE</h1>
        <ul className="nav-links">
          <li className="active">
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>Tours
          </li>
          <li>
            <a href="#"></a>Explore
          </li>
          <li>
            <a href="#"></a>About
          </li>
          <li className="ctn">
            <a href="#"></a>Contact
          </li>
        </ul>
        <img src={img1} alt="" className="menu-btn" />
      </div>
    </div>
  );
};

export default Navbar;
