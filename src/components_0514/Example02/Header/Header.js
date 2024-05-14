import React from 'react';
import './Header.css';
import Event from '../Event/Event';

const Header = () => {
  return (
    <div class="events">
      <div className="title">
        <h1>Upcoming Events</h1>
      </div>
      <Event></Event>
    </div>
  );
};

export default Header;
