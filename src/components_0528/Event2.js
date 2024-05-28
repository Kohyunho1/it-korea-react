import React, { useState } from 'react';

const Event2 = () => {
  const [init, setValue] = useState(''); //왼쪽은 초기값, 오른쪽은 변경할 때
  const handleInput = (e) => {
    console.log('해당 태그에 name' + e.target.name);
    console.log('입력한 값 : ' + e.target.value);
    setValue(e.target.value); //값을 수정할 땐 set
  };
  const handleButton = () => {
    console.log('버튼을 클릭했습니다.');
    console.log(init); //값을 호출 할 땐 초기값을 이용
  };
  return (
    <div>
      {/* onChange : 값이 변경될 때 마다 실행 */}
      <input onChange={handleInput} name="테스트" placeholder="값을 입력하세요.." />
      <button onClick={handleButton}>클릭</button>
    </div>
  );
};

export default Event2;
