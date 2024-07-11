import React, { useRef } from 'react';

const UseRef = () => {
  const inputTag = useRef(null);
  const handleFocus = () => {
    inputTag.current.focus();
  };
  const inputTag2 = useRef(null);
  const handleFocus2 = () => {
    inputTag2.current.focus();
  };

  return (
    <div>
      <h3>UseRef example 01 - Access DOM Element</h3>
      <input type="text" ref={inputTag} />
      <button onClick={handleFocus}>Focus</button>
      <input type="text" ref={inputTag2} />
      <button onClick={handleFocus2}>Focus2</button>
    </div>
  );
};

export default UseRef;
