import React from 'react';
import './ImgList.css';

const ImgList = (props) => {
  /*
    props??
    부모컴포넌트에서 자식컴포넌트로 데이터를 전달할 때 사용
    props는 프로퍼티(properties)의 줄임말이며, '속성값'이라고 부른다.
    리액트에서 프로퍼티는 수정할 수 없는 특징을 가지고 있다.
    */
  console.log('총 수 : ' + props.imageCount); //부모로 부터 넘겨받은 데이터 출력해보기
  return (
    <div>
      <div className="row">
        <div className="gallery-col">
          <div className="img-box">
            <img src="" />
          </div>
          <div className="layer">
            <h3>LATTE ART</h3>
          </div>
        </div>
        <div className="gallery-col">
          <div className="img-box">
            <img src="" />
          </div>
          <div className="layer">
            <h3>BASIC BARISTA</h3>
          </div>
        </div>
        <div className="gallery-col">
          <div className="img-box">
            <img src="" />
          </div>
          <div className="layer">
            <h3>CUSTOMER SERVICE</h3>
          </div>
        </div>
        <div className="gallery-col">
          <div className="img-box">
            <img src="" />
          </div>
          <div className="layer">
            <h3>MENU DEVELOPMENT</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgList;
