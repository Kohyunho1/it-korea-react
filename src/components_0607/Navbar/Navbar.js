import React from 'react';
import './Navbar.css';
import logo_light from '../assets/logo-black.png';
import logo_dark from '../assets/logo-white.png';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';
import toogle_light from '../assets/night.png';
import toogle_dark from '../assets/day.png';
import { Link } from 'react-router-dom';
const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    //웹사이트 다크모드 로직
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className="navbar">
      <img src={theme === 'light' ? logo_light : logo_dark} className="logo" />
      <ul>
        <li>Home</li>
        <Link to="/menu1">
          <li>MENU1</li>
        </Link>
        <Link to="/menu2">
          <li>MENU2</li>
        </Link>
        <Link to="/menu3">
          <li>MENU3</li>
        </Link>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="" />
      </div>
      {/* 토글 이미지 */}
      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme === 'light' ? toogle_light : toogle_dark}
        alt=""
        className="toggle-icon "
      />
    </div>
  );
};

export default Navbar;
