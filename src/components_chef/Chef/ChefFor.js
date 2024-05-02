import React from 'react';
import './Chef.css';

const ChefFor = () => {
  const chef = ['총주방장', '주방장', '조리장', '조리장']; //문자 배열 선언
  return (
    //반복문을 활용한 HTML 작성법
    <div className="chef_row">
      {chef.map((value) => (
        <div className="chef_col">
          <div className="img">
            <img src="images/1.png" />
          </div>
          <div className="chef_name">
            <h4>Muddsar Qayyum</h4>
            <h4>{value}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefFor;
