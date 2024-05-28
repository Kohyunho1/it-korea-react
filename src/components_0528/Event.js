import React, { useState } from 'react';

const Event = () => {
  //값을 여러개 받을 때 useState 처리
  const [inputs, setInputs] = useState({
    userName: '',
    userAge: 0,
    userPhone: '',
    userAddr: '',
  }); //초기값 json

  const handleInput = (e) => {
    const { value, name } = e.target;
    console.log('value : ' + value); //input에 입력한 값 출력
    console.log('name : ' + name); //input에 등록한 name 이름 출력

    setInputs({
      ...inputs,
      [name]: value,
    });
    /*
    아래 코드와 같은 개념
    const json = { name: 'allen', age: 20, phone: '000' };
    const json2 = { addr: 'jeju' };
    const a1 = { ...json, json2 };
    const a2 = { json2 };
    console.log(a1);
    */
  };
  const printInput = () => {
    console.log(inputs); //최종 출력
  };

  return (
    <div style={{ border: '1px solid red', margin: '10px auto', padding: '3%' }}>
      {/* input에 값이 변경될 때 마다 handleInput 함수를 호출함
      
      onChange : 값이 변경될 때마다 실행
      onClick : 해당 태그를 클릭했을 때 실행
      onSubmit : Form태그 안에 작성된 input, selectbox, checkbox 등등 처리할 때

      */}
      <input type="text" name="userName" onChange={handleInput} placeholder="이름 입력 ..." />
      <input type="text" name="userAge" onChange={handleInput} placeholder="나이 입력 ..." />
      <input type="text" name="userPhone" onChange={handleInput} placeholder="연락처 입력 ..." />
      <input type="text" name="userAddr" onChange={handleInput} placeholder="사는 곳 입력 ..." />
      <button onClick={() => printInput()}>click</button>
    </div>
  );
};

export default Event;
