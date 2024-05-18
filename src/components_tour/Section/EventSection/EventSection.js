import React from 'react';
import './EventSection.css';
import Button from '../../Button/Button';

const EventSection = () => {
  const json = [
    { title: 'Everest Camp Trek', imgName: 'img1' },
    { title: 'Walking Holidays', imgName: 'img2' },
  ];
  const button = {
    marginTop: '30px',
    fontSize: '3vmin',
  };

  return (
    <div>
      <div className="events">
        <div className="title">
          <h1>Upcoming Events</h1>
          <div className="line"></div>
        </div>
        <div className="row">
          {json.map((data, index) => (
            <div className="col">
              <img src={require('../../Img/' + data.imgName + '.png')} alt="" />
              <h4>{data.title}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt possimus? Praesentium unde dolorum iusto. Consequatur repellat tempore quos sequi
                vel. Ea similique alias velit nam, harum quod deserunt perspiciatis!
              </p>
              <Button style={button}></Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
