import React, { useState } from 'react';
import './ListGroup.css';

//useState를 이용한 hover 고정
const ListGroup = () => {
  const items = ['Tokyo', 'London', 'Seoul'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    // JSX
    <div>
      <h1>List</h1>
      <ul className="list-group">
        {/* items 변수를 map을 이용해서 li태그에 값 넣기 */}
        {items.map((value, index) => (
          //() : 익명함수
          <li
            className={selectedIndex === index ? '.list-group-item active' : 'list-group-item'}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
