import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const UseEffect = () => {
  /*
        2가지 경우일 때만 사용
        1. useState에 값이 변경될 때마다 다른 액션을 하고 싶을 때 (트리거 개념)
        2. 백엔드와 데이터를 주고 받을 때 ***
    */

  const [count, setCount] = useState(0);

  const [data, setData] = useState([]); //백엔드 데이터 받기, 배열로 초기화 한 이유? 데이터가 1개 이상일 것 이므로~!!

  useEffect(() => {
    document.title = `you clicked ${count} times`; //count 값이 변경되면 html title 태그가 변경됨(연쇄작용)
  }, [count]); //count 값이 변경될 때마다 useEffect가 실행됨

  //async : 비동기 (*await을 사용하기 위해서는 async를 작성해야한다.)
  const fetchData = async () => {
    //await : 작업을 기다리다.
    const result = await axios({
      method: 'get',
      url: 'https://zxh3vzbnu2.execute-api.ap-northeast-2.amazonaws.com/movie',
    });
    console.log(result.data);
    setData(result.data);
  };

  useEffect(() => {
    fetchData(); //함수 호출
  }, []); //[] 배열에 값이 없을 때는 useEffect가 최초 한번만 실행됨.
  return (
    <div>
      <h3>useEffect examile</h3>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h3>Data fetch</h3>
      <div className="movie">
        {data.map((item, key) => (
          <div key={key}>
            <p>{item.Title}</p>
            <p>{item.Year}</p>
            <img src={item.Poster} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
