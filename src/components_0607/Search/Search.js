import React, { useState } from 'react';
import './Search.css';
import SearchResultList from './SearchResultList';

// useState를 활용한 검색기능 구현
const Search = () => {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    let value = e.target.value; //input에 작성한 value값을 실시간으로 가져옴
    setInput(value);
    fetchData(value); //작성한 input값 fetchData에 넘겨주기
  };
  //다른 네트워크 주소에서 데이터가져오기( == API 서버에서 데이터 가져오기)
  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users') //주소 호출
      .then((response) => response.json()) //then 주소 호출 이후 결과 처리(json으로 값을 받아온다.)
      .then((json) => {
        const result = json.filter((user) => {
          //결과 필터링 하기
          return user.name.toLowerCase().includes(value);
        });
        setResult(result); //useState 값 변경
      }); //결과 처리
  };

  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <input placeholder="Search..." value={input} onChange={handleInput} />
        <SearchResultList results={result}></SearchResultList>
      </div>
    </div>
  );
};

export default Search;
