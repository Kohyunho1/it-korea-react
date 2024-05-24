import React, { useState } from 'react';
import './Tab.css';

const Tab = () => {
  //왼쪽은 초기값, 오른쪽은 변경된 값
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (number) => {
    console.log(number);
    setToggleState(number); //초기값 변경하기
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          //삼항연산자를 이용해서 state값이 변경되었는지 계속 체킹함
          className={toggleState == 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Tab1
        </div>
        <div className={toggleState == 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>
          Tab2
        </div>
        <div className={toggleState == 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>
          Tab3
        </div>
      </div>
      <div className="content-tabs">
        <div className={toggleState == 1 ? 'content active-content' : 'content'}>
          <h2>Title 1</h2>
          <hr></hr>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate aliquid possimus molestias consectetur perspiciatis natus nulla, nam aliquam non obcaecati
            exercitationem quos mollitia quod commodi ex reprehenderit rerum soluta quisquam.
          </p>
        </div>
        <div className={toggleState == 2 ? 'content active-content' : 'content'}>
          <h2>Title 2</h2>
          <hr></hr>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate aliquid possimus molestias consectetur perspiciatis natus nulla, nam aliquam non obcaecati
            exercitationem quos mollitia quod commodi ex reprehenderit rerum soluta quisquam.
          </p>
        </div>
        <div className={toggleState == 3 ? 'content active-content' : 'content'}>
          <h2>Title 3</h2>
          <hr></hr>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate aliquid possimus molestias consectetur perspiciatis natus nulla, nam aliquam non obcaecati
            exercitationem quos mollitia quod commodi ex reprehenderit rerum soluta quisquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
