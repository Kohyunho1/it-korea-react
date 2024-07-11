import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseEffect2 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios({
      method: 'get',
      url: 'https://zxh3vzbnu2.execute-api.ap-northeast-2.amazonaws.com/users',
    });
    console.log(result.data);
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h3>Data</h3>
      {data.map((item, key) => (
        <div key={key}>
          <p>name : {item.name}</p>
          <p>age : {item.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UseEffect2;
