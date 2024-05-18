import React from 'react';
import './Chef.css';

const ChefList = () => {
  return (
    <div className="chef_row">
      {/* 요리사 소개 */}
      <div className="chef_col">
        <div className="img">
          <img src="images/1.png" />
        </div>
        <div className="chef_name">
          <h4>Muddsar Qayyum</h4>
          <h4>총주방장</h4>
        </div>
      </div>
      <div className="chef_col">
        <div className="img">
          <img src="images/2.png" />
        </div>
        <div className="chef_name">
          <h4>Muddsar Qayyum</h4>
          <h4>총주방장</h4>
        </div>
      </div>
      <div className="chef_col">
        <div className="img">
          <img src="images/3.png" />
        </div>
        <div className="chef_name">
          <h4>Muddsar Qayyum</h4>
          <h4>총주방장</h4>
        </div>
      </div>
      <div className="chef_col">
        <div className="img">
          <img src="images/4.png" />
        </div>
        <div className="chef_name">
          <h4>Muddsar Qayyum</h4>
          <h4>총주방장</h4>
        </div>
      </div>
    </div>
  );
};

export default ChefList;
