import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Main = () => {
  //문제. 백엔드로 받아온 데이터를 useState로 받아서 화면에 출력해보기
  const [todos, setTodos] = useState([]);

  // 가상백엔드와 연결하기
  // await을 사용하기 위해서는 async라는 키워드를 입력해야 함
  // await : 네트워크(비동기) 작업이 완료될 때 까지 기다린다.
  const connectionBackend = async () => {
    // method get은 조회할 때 사용, url은 백엔드 주소입력
    const result = await axios({ method: 'get', url: 'https://33144asrdh.execute-api.ap-northeast-2.amazonaws.com/example' });
    console.log('가상 백엔드로 가져온 데이터는? ');
    console.log(result.data);
    //데이터 set 하기
    setTodos(result.data);
  };

  // 네트워크(백엔드)와 통신할 때 주로 사용
  useEffect(() => {
    connectionBackend(); // 백엔드 연결 함수 호출
  }, []); // [] : 컴포넌트가 실행될 때 *한번만* 실행

  return (
    <div>
      <h2>TODO 목록 불러오기</h2>
      <ul>
        {/* todos 불러오기 */}
        {todos.map((item, key) => (
          <li key={key} todo={item.todo}></li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
