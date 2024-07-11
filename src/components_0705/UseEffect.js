import React, { useEffect, useState } from 'react';
import './UseEffect.css';
import axios from 'axios';

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  const fectchData = async () => {
    const result = await axios({
      method: 'get',
      url: 'https://zxh3vzbnu2.execute-api.ap-northeast-2.amazonaws.com/users',
    });
    setData(result.data);
  };

  const fectchUserDate = async (id) => {
    const result = await axios({
      method: 'get',
      url: `https://zxh3vzbnu2.execute-api.ap-northeast-2.amazonaws.com/users/${id}`,
    });
    setUser(result.data);
    console.log(result.data);
  };

  /*
  useEffect는 페이지가 처음 로드될 때 실행되는 React Hooks 함수
  백엔드와 통신할 때 주로 사용합니다.
  */
  useEffect(() => {
    fectchData();
  }, []);

  const handleClick = (id) => {
    console.log('id : ' + id);
    fectchUserDate(id);
  };

  return (
    <div>
      <h3>User List</h3>
      {data.map((item, key) => (
        <div key={key} className="container">
          <div className="sub">
            <h4>Info</h4>
            <ul>
              <li onClick={() => handleClick(item.id)}>ID : {item.id}</li>
              <li>NAME : {item.name}</li>
              <li>AGE : {item.age}</li>
              <li>PHONE : {item.phone}</li>
              <li>JOB : {item.job}</li>
            </ul>
          </div>
          <div className="sub">
            <h4>Address</h4>
            <ul>
              <li>{item.address.city}</li>
              <li>{item.address.street}</li>
              <li>{item.address.zipcode}</li>
            </ul>
          </div>
        </div>
      ))}
      <div>
        <p>급여 : {user.salary}</p>
        <p>입사날짜 : {user.hiredate}</p>
      </div>
    </div>
  );
};

export default UseEffect;
