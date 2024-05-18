import React from 'react';
import './Header.css';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <h2>Explore The Colorful World</h2>
          <div className="line"></div>
          <h1>A WONDERFUL GIFT</h1>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
