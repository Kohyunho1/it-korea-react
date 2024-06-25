import React, { useEffect, useState } from 'react';
import './Main.css';
import axios from 'axios';
import UserItem from './UserItem';

const Main = () => {
  const [movie, setMovie] = useState([]); //여러 사람 데이터
  const [movieInfo, setMovieInfo] = useState({}); //한 사람 데이터

  //백엔드 데이터가져오기
  //async : await를 사용하기위해선 async(비동기)라는 문법이 필요
  const fetchUser = async () => {
    //await 네트워크 통신이 끝날 때 까지 기다리겠다.
    const result = await axios({
      method: 'get',
      url: 'https://33144asrdh.execute-api.ap-northeast-2.amazonaws.com/example',
    });
    console.log(result.data);
    setMovie(result.data); //백엔드 결과를 state에 넣는다.
  };

  useEffect(() => {
    fetchUser(); //백엔드 데이터 호출
  }, []); //페이지가 처음 로드될 때 한번만 실행

  return (
    <div className="container">
      <div className="left">
        {movie.map((item, key) => (
          <UserItem key={key} id={item.imdbID} title={item.Title} year={item.Year} runtime={item.Runtime} poster={item.Poster} setMovieInfo={setMovieInfo}></UserItem>
        ))}
      </div>
      <div className="right">
        <div className="user-info">
          <p>title : {movieInfo.Title}</p>
          <p>year : {movieInfo.Year}</p>
          <p>runtime : {movieInfo.Runtime}</p>
          <img src={movieInfo.Poster} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
