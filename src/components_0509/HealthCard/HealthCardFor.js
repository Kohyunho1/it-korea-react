import React from 'react';
import './HealthCard.css';

const HealthCardFor = () => {
  const json = [
    { title: '크로스핏', imgName: 'img1', isUse: false },
    { title: '웨이트훈련', imgName: 'img2', isUse: true },
    { title: '요가', imgName: 'img3', isUse: true },
  ];
  return (
    <div className="card-container">
      {/* data : 배열에 들어가있는 값, index : 몇번째 실행하고 있는지 */}
      {/* 반복문을 이용해서 화면을 구현할 때 key값이 필요하다. */}
      {json.map((data, index) => (
        <div className="col" key={index}>
          <h2>{data.title}</h2>
          <div className="caption">
            <p>크로스핏은 스트레스 해소에 좋습니다.</p>
            <button className={data.isUse ? 'btn-active' : 'btn-inactive'}>Konw More</button>
          </div>
          <img src={require('../images/' + data.imgName + '.png')} alt="" />
        </div>
      ))}
    </div>
  );
};

export default HealthCardFor;
