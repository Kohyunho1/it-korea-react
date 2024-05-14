import React from 'react';
import './Card.css';

const Card = () => {
  const json = [
    { title: 'Seamlessly visualize quality', button: "Here's why" },
    { title: 'Completely Synergize', button: "Here's how" },
    { title: 'Dynamically Procrastinate', button: 'Read more' },
  ];
  return (
    <div className="cards">
      {json.map((data, index) => (
        <div className="card" key={index}>
          <div className="card-img">
            <img src="" alt="" />
          </div>

          <div className="text">
            <h3>{data.title}</h3>
            <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
            <button>{data.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
