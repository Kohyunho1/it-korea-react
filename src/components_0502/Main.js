import React from 'react';
import './Main.css';
import Header from './Header/Header';
import Article from './Article/Article';
import Aside from './Aside/Aside';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
//import : 불러오다 의미
const Main = () => {
  return (
    <div className="container">
      {/*Header, article, nav, aside, footer 등등 */}
      <Header></Header>
      <div className="main">
        <Article></Article>
        <Aside></Aside>
        <Nav></Nav>
      </div>
      <Footer></Footer>
    </div>
  );
};

//export : 내보내기 의미
export default Main;
