import React, { useState } from 'react';
import './Main.css';
const Main3 = () => {
  const [initArray, setArray] = useState([]); //초깃값 배열
  const [inputs, setInputs] = useState({
    userName: '',
    userPhone: '',
    userAddr: '',
    remarks: '',
  });
  const handleInput = (e) => {
    let { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleButton = () => {
    /*
        const [x, ...y] = [1, 2, 3, 4, 5, 6];
        x에 1대입 y에 2~6 대입
        const [...initArray, inputs] = [[{ userName: '김길동'},  { userName: '김길동'}],{userName: ''}] 

      */
    setArray([...initArray, inputs]);
  };
  return (
    <div className="container">
      <h1>UseState 연습</h1>
      <div className="login-form">
        <div className="txt-field">
          <input name="userName" type="text" required onChange={handleInput} />
          <label>이름</label>
        </div>
        <div className="txt-field">
          <input name="userPhone" type="text" required onChange={handleInput} />
          <label>연락처</label>
        </div>
        <div className="txt-field">
          <input name="userAddr" type="text" required onChange={handleInput} />
          <label>주소</label>
        </div>
        <div className="txt-field">
          <input name="remarks" type="text" required onChange={handleInput} />
          <label>비고</label>
        </div>
        <input type="button" className="login-btn" value={'작성완료'} readOnly onClick={handleButton} />
      </div>
      <div className="signip-link" style={{ border: '1px solid black' }}>
        {initArray.map((data) => (
          <div>
            <p>{data.userName}</p>
            <p>{data.userPhone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main3;
