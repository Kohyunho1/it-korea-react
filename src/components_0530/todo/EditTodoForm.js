import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="Update task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
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

export default EditTodoForm;
