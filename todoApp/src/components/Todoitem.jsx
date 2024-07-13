import React from 'react';

const Todoitem = ({ todo, deleteTask, toggleCompletion }) => {
  return (
    <li className="py-4">
      <div className="flex items-center">
        <input
          id={`todo${todo.id}`}
          name={`todo${todo.id}`}
          type="checkbox"
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          checked={todo.completed}
          onChange={() => toggleCompletion(todo.id)}
        />
        <label htmlFor={`todo${todo.id}`} className="ml-3 block text-gray-900">
          <span className="text-lg font-medium">{todo.text}</span>
          <span className="text-sm font-light text-gray-500">{todo.dueDate}</span>
        </label>
        <button
          onClick={() => deleteTask(todo.id)}
          className="ml-auto bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todoitem;
