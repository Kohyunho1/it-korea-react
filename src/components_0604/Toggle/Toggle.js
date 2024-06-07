import React, { useState } from 'react';
import './Toggle.css';

// useState를 활용해서 Toggle On 시키기
const Toggle = () => {
  const [isToggle, setToggle] = useState(false);
  const [inputs, setInputs] = useState({
    value1: '',
    value2: '',
    value3: '',
  });

  const handleInput = (e) => {
    let { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (inputs.value1 !== '' && inputs.value2 !== '' && inputs.value3 !== '') setToggle(true);
  };

  const handleClick = () => {
    if (isToggle) setToggle(false);
    if (!isToggle) setToggle(true);
  };

  return (
    <div>
      <h1>Toggle 만들기</h1>
      <div style={{ border: '1px solid black', padding: '1%' }}>
        {/* 문제. input안에 있는 값을 모두 입력시 toggle ON 시키기 
        HINT. useState와 onChange 이용할 것
        */}
        <input onChange={handleInput} type="text" name="value1" placeholder="input..." />
        <input onChange={handleInput} type="text" name="value2" placeholder="input..." />
        <input onChange={handleInput} type="text" name="value3" placeholder="input..." />
      </div>
      <label className="switch">
        <input type="checkbox" readOnly onClick={handleClick} checked={isToggle} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Toggle;
