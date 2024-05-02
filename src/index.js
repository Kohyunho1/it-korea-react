import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM은 VirtualDOM이라고 부른다.
//VirtualDOM(가상돔)은 변경된 부분이 있으면 감지를 해서 수정한다.(실시간으로 데이터가 바뀌는 이유)
//가상돔은 24시간 모니터링 한다.
const root = ReactDOM.createRoot(document.getElementById('root')); //public폴더 안에 있는 index.html에 중 div id가 root인 태그를 불러옴
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
