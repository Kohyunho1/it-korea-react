import React from 'react';
import './Menu.css';

const Menu = () => {
  const color = {
    color: 'red',
  };
  const breakfast = [
    { title: 'Tasty Dish 01', imgName: 'breakfast1', price: '10$', isSoldout: false },
    { title: 'Tasty Dish 02', imgName: 'breakfast2', price: '재료소진', isSoldout: true },
    { title: 'Tasty Dish 03', imgName: 'breakfast3', price: '10$', isSoldout: false },
  ];
  const lunch = [
    { title: 'Tasty Dish 01', imgName: 'lunch1', price: '25$', isSoldout: false },
    { title: 'Tasty Dish 02', imgName: 'lunch2', price: '재료소진', isSoldout: true },
    { title: 'Tasty Dish 03', imgName: 'lunch3', price: '30$', isSoldout: false },
  ];
  const dinner = [
    { title: 'Tasty Dish 01', imgName: 'dinner1', price: '재료소진', isSoldout: true },
    { title: 'Tasty Dish 02', imgName: 'dinner2', price: '재료소진', isSoldout: true },
    { title: 'Tasty Dish 03', imgName: 'dinner3', price: '49$', isSoldout: false },
  ];
  return (
    <div className="menu">
      <h1 className="section">Menu</h1>
      <div className="menu_row">
        <div className="menu_col">
          <h2>Breakfast</h2>
          {breakfast.map((data, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={require('../images/' + data.imgName + '.jpg')} alt="" srcset="" />
              </div>
              <div>
                <h3>{data.title}</h3>
                <div>{data.isSoldout ? <h4 style={color}>재료소진</h4> : <h4>{data.price}</h4>}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="menu_col">
          <h2>Lunch</h2>
          {lunch.map((data, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={require('../images/' + data.imgName + '.jpg')} alt="" srcset="" />
              </div>
              <div>
                <h3>{data.title}</h3>
                <div>{data.isSoldout ? <h4 style={color}>재료소진</h4> : <h4>{data.price}</h4>}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="menu_col">
          <h2>Dinner</h2>
          {dinner.map((data, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={require('../images/' + data.imgName + '.jpg')} alt="" srcset="" />
              </div>
              <div>
                <h3>{data.title}</h3>
                <div>{data.isSoldout ? <h4 style={color}>재료소진</h4> : <h4>{data.price}</h4>}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
