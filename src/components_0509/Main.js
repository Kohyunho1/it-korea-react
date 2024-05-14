import React from 'react';
import './Main.css'; //css 파일을 불러온다.
import HealthCard from './HealthCard/HealthCard';
import HealthCardFor from './HealthCard/HealthCardFor';

const Main = () => {
  // html 구현을 javascript 안에 함 (JSX)
  let isEat = true;
  let color = 'red';
  let style1 = { color: 'blue', fontSize: '24px' };
  let style2 = { color: 'red', fontSize: '24px' };
  let data = [
    { name: '돈코츠 라멘', isSoldout: false },
    { name: '소유 라멘', isSoldout: false },
    { name: '스바라시 라멘', isSoldout: true },
    { name: '미소 라멘', isSoldout: false },
  ];
  return (
    <div>
      {/* <HealthCard></HealthCard> */}
      <HealthCardFor></HealthCardFor>
      {/* 삼항연산자 더 알아보기 */}
      <p>{isEat ? '돈까스 냠냠' : '후식먹으러 가요!'}</p>
      <div style={color === 'blue' ? style1 : style2}>안녕하세요</div>
      {/* map으로 json 출력하기 */}
      <ul>{data.map((data) => (data.isSoldout ? <li>재료소진</li> : <li>{data.name}</li>))}</ul>
      <ul>{data.map((data) => (!data.isSoldout ? <li>{data.name}</li> : <li>재료소진</li>))}</ul>
    </div>
  );
};

export default Main;
