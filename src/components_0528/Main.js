import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'; //리액트에서 제공하는 uuid(고유 번호)

const Main = () => {
  //필터 사용하기
  //uuid는 고유번호를 의미함
  let data = [
    {
      uuid: uuid(),
      name: 'brian',
      dname: 'sales',
      sal: 2500,
    },
    {
      uuid: uuid(),
      name: 'allen',
      dname: 'manager',
      sal: 3500,
    },
    {
      uuid: uuid(),
      name: 'smith',
      dname: 'clerk',
      sal: 1800,
    },
    {
      uuid: uuid(),
      name: 'jones',
      dname: 'clerk',
      sal: 1800,
    },
  ];

  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [emp, setEmp] = useState(data);

  const option = ['name', 'dname'];

  const handleSubmit = (e) => {
    e.preventDefault(); //form태그 새로고침 기능 막기
    console.log(value); //input 출력
    console.log(selectedValue); //선택한 select 출력
    if (selectedValue === 'dname') {
      setEmp(
        emp.filter((e) => {
          return e.dname.toLowerCase().includes(value.toLowerCase());
        }),
      );
    }
    if (selectedValue === 'name') {
      setEmp(
        emp.filter((e) => {
          return e.name.toLowerCase().includes(value.toLowerCase());
        }),
      );
    }
  };

  return (
    <div>
      <div className="searchArea">
        <form onSubmit={handleSubmit}>
          {/* select 태그에서 선택한 option값 setSelectedValue에 대입*/}
          <select onChange={(e) => setSelectedValue(e.target.value)}>
            {option.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input type="text" placeholder="값을 입력하세요..." onChange={(e) => setValue(e.target.value)}></input>
          {/*input 태그에 작성한 값을 setValue에 대입 */}
          <button type="submit">검색</button>
          <button type="button" onClick={() => setEmp(data)}>
            초기화
          </button>
        </form>
      </div>
      <div style={{ border: '1px solid black' }}>
        <table>
          <thead>
            <tr>
              <th>uuid</th>
              <th>이름</th>
              <th>부서명</th>
              <th>급여</th>
            </tr>
          </thead>
          <tbody>
            {emp.length > 0 ? (
              emp.map((e) => (
                <tr key={e.uuid}>
                  <td>{e.uuid}</td>
                  <td>{e.name}</td>
                  <td>{e.dname}</td>
                  <td>{e.sal}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
