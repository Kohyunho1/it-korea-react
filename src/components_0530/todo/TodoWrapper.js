import React, { useState } from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';

//메인 컴포넌트
const TodoWrapper = () => {
  let [todos, setTodos] = useState([]);

  const addTodo = (todo, priorityNum) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        priority: Number(priorityNum),
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo)));
  };

  const editTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: true } : todo)));
  };

  const editTask = (task, id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: false } : todo)));
  };

  todos = todos.sort((a, b) => {
    if (a.priority < b.priority) {
      return -1; //a가 b보다 앞에 있어야 한다.
    }
    if (a.priority > b.priority) {
      return 1; //b가 a보다 앞에 있어야 한다.
    }
    return 0; //a와 b의 순서를 바꾸지 않는다.
  });

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo key={todo.id} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
        ),
      )}
    </div>
  );
};

export default TodoWrapper;
