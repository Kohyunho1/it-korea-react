import React from 'react';
import './Facilities.css';
import ImgList from '../ImgList/ImgList';

const Facilities = () => {
  let imageCount = 3; //3장이 필요함
  return (
    <div>
      <section className="facilities">
        <h1>FACILITIES</h1>
        {/* 컴포넌트 재사용 하기 */}
        <ImgList imageCount={imageCount}></ImgList>
      </section>
    </div>
  );
};

export default Facilities;
