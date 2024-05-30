import React, { useState } from 'react';
import './Todo.css';
import TodoForm from './TodoForm';

//메인 컴포넌트
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    console.log(todo);
    //todo를 setTodos 배열에 넣어서 화면에 출력할 것.
    setTodos([...todos, todo]);
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      {/*자식태그 TodoForm에  addTodo 함수 전달하기*/}
      <TodoForm addTodo={addTodo}></TodoForm>
      <p style={{ color: 'white' }}>todo : {todos}</p>
    </div>
  );
};

export default TodoWrapper;
