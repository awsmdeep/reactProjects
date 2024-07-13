import React from 'react';
import Todoitem from './Todoitem';

const TodoList = ({ todos, deleteTask, toggleCompletion }) => {
  return (
    <ul className="divide-y divide-gray-200 px-4">
      {todos.map(todo => (
        <Todoitem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ul>
  );
}

export default TodoList;
