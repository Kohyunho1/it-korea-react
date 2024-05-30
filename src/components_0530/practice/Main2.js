import React, { useState } from 'react';
import './Main.css';

const Main2 = () => {
  const [inputs, setInputs] = useState({
    userName: '',
    userPhone: '',
    userAddr: '',
    remarks: '',
  });
  const [isBlock, setBlock] = useState(false);

  const handleInput = (e) => {
    let { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  //클릭 이벤트
  const handleButton = () => {
    setBlock(true);
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
      {/* {isBlock === true ? () : ()} */}
      {isBlock === true ? (
        <div className="signup-link" style={{ border: '1px solid black' }}>
          <p>State 결과</p>
          <p>name : {inputs.userName}</p>
          <p>phone : {inputs.userPhone}</p>
          <p>addr : {inputs.userAddr}</p>
          <p>remarks : {inputs.remarks}</p>
        </div>
      ) : (
        <div className="signup-link" style={{ border: '1px solid black' }}>
          <p>버튼을 클릭해주세요.</p>
        </div>
      )}
    </div>
  );
};

export default Main2;
