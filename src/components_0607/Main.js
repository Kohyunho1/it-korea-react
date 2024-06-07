import React, { useEffect, useState } from 'react';
import './Main.css';
import Navbar from './Navbar/Navbar';

//다크모드 
const Main = () => {
  //localStorage : 저장소
  const currentTheme = localStorage.getItem('currentTheme');
  console.log('현재 테마색은 ? ' + currentTheme + '입니다.');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light'); //로컬스토리지 값이 있다면 currentTheme null이면 light

  // useState와 같은 Hooks의 종류 중 하나로, useState값이 변경 될 때마다 실행하고 싶은 혹은 네트워트와 통신할 때 자주 사용하는 문법
  useEffect(() => {
    localStorage.setItem('currentTheme', theme); //localStorage에 값 넣기
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      {/* 자식컴포넌트에 데이터 보내기 */}
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
    </div>
  );
};

export default Main;
