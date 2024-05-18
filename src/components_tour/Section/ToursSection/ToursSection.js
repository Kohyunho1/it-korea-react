import React from 'react';
import './ToursSection.css';
import img3 from '../../Img/img3.png';
import img4 from '../../Img/img4.png';
import img5 from '../../Img/img5.png';
import img6 from '../../Img/img6.png';
import Button from '../../Button/Button';

const ToursSection = () => {
  const button = {
    marginLeft: '-100px',
  };
  return (
    <div>
      <div className="tours">
        <div className="row">
          <div className="col content-col">
            <h1>UPCOMING TOURS & DESTINATION</h1>
            <div className="line"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, esse eligendi sint possimus quasi ut, eum rerum, dignissimos vero nam adipisci velit exercitationem
              accusantium. Enim impedit quos eius. Consequatur, aut.
            </p>
            <Button style={button}></Button>
          </div>
          <div className="col image-col">
            <div className="image-gallery">
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursSection;
