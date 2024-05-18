import React from 'react';

const Children = (props) => {
  //props.width = 200; props(프로퍼티)는 수정이 불가능하다, (읽기 전용)
  //리액트 특징
  //1. 단방향 통신 2. 프로퍼티는 읽기전용
  console.log(props); // 전달받은 데이터 출력하기
  const x = { width: props.width, height: props.height, backgroundColor: props.backgroundColor };
  return (
    <div>
      <h4>자식 컴포넌트</h4>
      <div style={x}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Children;
