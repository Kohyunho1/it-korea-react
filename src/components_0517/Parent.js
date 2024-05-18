import React from 'react';
import Children from './Children';
import Button from './Button';

const Parent = () => {
  const buttonBlack = { fontSize: '14px', color: '#fff', backgroundColor: 'black', padding: '1%' };
  const buttonWhite = { fontSize: '14px', color: 'black', backgroundColor: 'white', padding: '1%' };
  return (
    <div>
      <h2>부모 컴포넌트</h2>
      {/* 부모 컴포넌트에서 자식 컴포넌트로 데이터 넘겨주기
        리액트는 단방향 통신.(리액트 경쟁 언어인 앵귤러.js는 양방향 통신)
      */}
      <div style={{ display: 'flex' }}>
        {/* Children 컴포넌트가 재사용되고 있음 */}
        <Children width={100} height={200} backgroundColor={'black'}></Children>
        <Children width={100} height={300} backgroundColor={'blue'}></Children>
        <Children width={100} height={400} backgroundColor={'red'}></Children>
      </div>
      {/* json으로 자식컴포넌트에 값을 넘겨주기 */}
      <Button style={buttonBlack} text="금요일"></Button>
      <Button style={buttonWhite} text="토요일"></Button>
    </div>
  );
};

export default Parent;
