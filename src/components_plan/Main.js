import React from 'react';
import './Main.css';
import Title from './Title/Title';
import Item from './Item/Item';
import ItemFor from './Item/ItemFor';

const Main = () => {
  return (
    <div className="plan">
      <Title></Title>
          {/* <Item></Item> */}
          <ItemFor></ItemFor>
    </div>
  );
};

export default Main;
