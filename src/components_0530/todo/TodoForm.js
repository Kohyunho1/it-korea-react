import React, { useState } from 'react';

//props : 부모로 부터 받은 데이터(읽기만 가능, 수정 불가능)
const TodoForm = (props) => {
  /*
  1. input을 받을 수 있는 useState만들어보기
  2. input에 값을 입력할 때 이벤트 함수 만들어서
   useState에 value 넣기
  */
  const [value, setValue] = useState('');
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value); //부모컴포넌트 함수에 useState 초깃값 전달
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" className="todo-input" placeholder="What is the task today?" onChange={handleInput}></input>
      {/* button이 form태그 안에 있을 때는 submit으로 type을 지정하거나 
      button으로 지정한다.
      */}

      {/* 버튼 타입이 submit일 때 클릭하면  onSubmit 이벤트 발동*/}
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
