import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Serch..."></input>
      <div>
        <input type="checkbox"></input>
        <label>Only show product in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
