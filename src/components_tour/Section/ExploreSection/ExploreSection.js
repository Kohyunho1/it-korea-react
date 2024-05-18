import React from 'react';
import './ExploreSection.css';
import Button from '../../Button/Button';

const ExploreSection = () => {
  const style = {
    marginTop: '40px',
  };
  return (
    <div>
      <div className="explore">
        <div className="explore-content">
          <h1>EXPLORE THE WORLD</h1>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corrupti aut similique quia voluptates amet, animi iste repellat pariatur quasi? Perferendis veniam,
            dolore consectetur consequatur hic unde ad temporibus fuga!
          </p>
          <Button style={style}></Button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
