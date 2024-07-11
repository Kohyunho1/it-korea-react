import React from 'react';
import './UseState.css';
import { useState } from 'react';

const UseState = () => {
  /*
    useState를 React에서 3가지 경우일 때만 사용함

    1. input에 작성한 글을 관리할 때
    2. Toggle 구현할 때
    3. css를 Dynamic하게 구현할 때
  */
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value); // e.target.value : input에 작성된 값
  };

  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [count, setCount] = useState(0);

  return (
    <div>
      {/*  1. input에 작성한 글을 관리할 때 */}
      <h3>UseState Example 01 - Manage Form Input</h3>
      <input type="text" onChange={handleChange} />
      <p>{value}</p>
      {/* 2. Toggle 구현할 때 */}
      <h3>UseState Example 02 - Toggle Visible</h3>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Toggle button
      </button>
      {/* isVisible == true면 div를 보여줘! */}
      {isVisible && <div>Content to Show/Hide</div>}
      {/* 3. css를 Dynamic하게 구현할 때 */}
      <h3>UseState Example 03 Dynamic Styles</h3>
      <button
        className={isActive == true ? 'active' : 'inactive'}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        Click Me
      </button>
      {/* 4. 카운트 구현할 때 */}
      <h3>UseState Example 04 - Counter</h3>
      <div>
        <button onClick={() => setCount(count - 1)}> - </button>
        {count}
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>
    </div>
  );
};

export default UseState;
