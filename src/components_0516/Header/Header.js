import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <div>
      <header>
        {/* Nav를 React에서는 Router라고 합니다. */}
        <Nav></Nav>
        <div className="text-box">
          <h1>Coffee one day class</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque cupiditate sint rerum quasi quaerat delectus! Blanditiis quas consequuntur,
            <br />
            libero beatae ipsum pariatur, consectetur harum commodi inventore fugiat nisi quos.
          </p>
          <a href="#" className="hero-btn">
            PROGRAMS OPEN
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
