import React from 'react';
import './Main.css';
import ChefList from './Chef/ChefList';

const Main = () => {
  return (
    <div className="chef">
      <h1 className="section">오늘의 Chef를 소개합니다.</h1>
      <ChefList></ChefList>
    </div>
  );
};

export default Main;
