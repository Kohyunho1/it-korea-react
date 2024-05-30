import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  //name은 초기, setName은 변경
  const [name, setName] = useState('홍길동');
  const [phone, setPhone] = useState('010-1111-2222');
  const [addr, setAddr] = useState('대전');
  const [remarks, setRemarks] = useState('없음');
  //input에 값을 입력했을 때 useState을 이용해 값을 변경

  const handleInput = (e) => {
    // let value = e.target.value;
    // let name = e.target.name;
    let { value, name } = e.target; //한줄로 표기가 가능하다.
    if (name === 'userName') {
      setName(value);
    }
    if (name === 'userPhone') {
      setPhone(value);
    }
    //주소랑 비고란도 작성해보세요.
    if (name === 'userAddr') {
      setAddr(value);
    }

    if (name === 'remarks') {
      setRemarks(value);
    }
  };

  const [isBlock, setBlock] = useState(false);

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
        <div className="signip-link" style={{ border: '1px solid black' }}>
          <p>State 결과</p>
          <p>name : {name}</p>
          <p>phone : {phone}</p>
          <p>addr : {addr}</p>
          <p>remarks : {remarks}</p>
        </div>
      ) : (
        <div className="signip-link" style={{ border: '1px solid black' }}>
          <p>버튼을 클릭해주세요.</p>
        </div>
      )}
    </div>
  );
};

export default Main;
