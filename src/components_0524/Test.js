import React, { useState } from 'react';

const Test = () => {
  const [initValue, setValue] = useState(0);
  const Button1 = () => {
    setValue(initValue + 1);
  };
  const Button2 = () => {
    setValue(initValue - 1);
  };
  return (
    <div>
      <h1>{initValue}</h1>
      <div>
        <button onClick={Button1}>+1</button>
        <button onClick={Button2}>-1</button>
      </div>
    </div>
  );
};

export default Test;
