import React from 'react';
import './ImageBox.css';

const ImageBox = () => {
    /*
    return 안에 HTML을 작성하는 문법을 JSX
    JSX 특징 중 하나, 태그가 닫혀 있어야함.
    */
  return (
    <div>
      <div className="image-gallery">
        <div className="tour-img">
          <img src="" alt=""></img>
        </div>
        <div className="tour-img">
          <img src="" alt="" />
        </div>
        <div className="tour-img">
          <img src="" alt="" />
        </div>
        <div className="tour-img">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
