import React from 'react';
import './Example.css';
import ImageBox from './ImageBox';

const Example = () => {
  return (
    <div>
      <div className="tours">
        <div className="row">
          <div className="col content-col">
            <h1>UPCOMING TOURS & DESTINATION</h1>
          </div>
          <div className="col image-col">
            <ImageBox></ImageBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
