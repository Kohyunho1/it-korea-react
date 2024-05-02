//컴포넌트 파일이름은 앞에 대문자로 시작
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import './Main.css';
import Content from './Content/Content';

const Main = () => {
  return (
    <div className="container">
      <Nav></Nav>
      <div className="main">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
