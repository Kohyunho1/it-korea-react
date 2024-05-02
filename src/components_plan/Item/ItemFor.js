import React from 'react';
import './Item.css';

const ItemFor = () => {
  const item = ['첫번째', '두번째', '세번째'];
  const money = [19, 20, 21];
  return (
    <div className="container">
      {item.map((value) => (
        <div className="item">
          <p>{value}</p>
          <h2>19$</h2>
          <ul>
            <li>1 Website</li>
            <li>10 GB Disk Space</li>
            <li>Free Email Address</li>
            <li>Basic Web builder</li>
            <li>No SSL Certificate</li>
            <li>Limited Support</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ItemFor;
