//useState라는 함수를 호출함
import React, { useState } from 'react';

const State = () => {
  /* 
     useState, 일반인 만들었는데, 페이스북(메타)회사에서 일반인이 만든 소스를 보고,
     바로 영입제안을 했음.


     useState : 2018~ 2019년 쯤에 react에서 새롭게 발표한 기능
     컴포넌트안에서 사용하는 값들을 관리합니다.

     useState이후로 React로 초보자가 쉽게 접근할 수 있는 도구가 됨
     원래는 class기반 컴포넌트 -> 함수형 컴포넌트로 변경됨
     */
  const [initValue, setValue] = useState(500); //useState 괄호 안에 있는 값은 초기값을 의미
  //initValue(왼쪽) : 초기값을 입력
  //setValue(오른쪽) : 변경할 값 입력

  const handleButton = () => {
    console.log('버튼을 클릭했습니다.');
    setValue(initValue * 2); //초기값 변경하기
    //값이 변경되면, 리액트가 자동으로 해당 컴포넌트를 리렌더링하여 변경된 상태를 반영
  };

  const handleChange = (e) => {
    console.log(e.target.value); //input에 값이 변경될 때 마다 출력함.
    setValue(e.target.value);
  };

  return (
    <div>
      <h2>useState 공부</h2>
      <input type="number" placeholder="숫자를 입력해주세요." onChange={handleChange}></input>
      <button onClick={handleButton}>클릭</button>
      <p>입력한 값은 : </p>
      <input readOnly value={initValue}></input>
    </div>
  );
};

export default State;
