import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import { motion } from 'framer-motion';
import image1 from './images/image01.jpg';
import image2 from './images/image02.jpg';
import image3 from './images/image03.jpg';
import image4 from './images/image04.jpg';
import image5 from './images/image05.jpg';

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(); //해당 태그에 참조 걸기 ex) carousel = document.getElementsByClassName('carousel');
  //useEffect : useState 값을 변경할 때, 네트워크와 통신할 때 사용
  //useEffect : lifecycle => 화면 처음 로딩할 때 호출하는 React Hooks 함수
  useEffect(() => {
    console.log('hello world');
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      {/* carousel : 회전목마 */}
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {/* 사진 */}
          <motion.div className="item">
            <img src={image1} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={image2} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={image3} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={image4} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={image5} alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
