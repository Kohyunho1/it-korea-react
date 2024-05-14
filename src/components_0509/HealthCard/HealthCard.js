import React from 'react';
import './HealthCard.css';
// .. 뒤로가다
// / 경로를 의미
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

const HealthCard = () => {
  return (
    <div className="card-container">
      <div className="col">
        <h2>크로스핏</h2>
        <div className="caption">
          <p>크로스핏은 스트레스 해소에 좋습니다.</p>
          <button>Konw More</button>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className="col">
        <h2>크로스핏</h2>
        <div className="caption">
          <p>크로스핏은 스트레스 해소에 좋습니다.</p>
          <button>Konw More</button>
        </div>
        <img src={img2} alt="" />
      </div>
      <div className="col">
        <h2>크로스핏</h2>
        <div className="caption">
          <p>크로스핏은 스트레스 해소에 좋습니다.</p>
          <button>Konw More</button>
        </div>
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default HealthCard;
