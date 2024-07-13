import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Function to add a new todo
  const addTask = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    toast.success("New task added")
  };

  // Function to delete a todo
  const deleteTask = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    toast.error("Task deleted")
    
  };

  // Function to toggle todo completion
  const toggleCompletion = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="App bg-gray-100 min-h-screen py-8">
      <Navbar />
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
        </div>
        <TodoForm addTask={addTask} />
        <TodoList todos={todos} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />
        <ToastContainer position='top-right' theme='light'/>
      </div>
    </div>
  );
}

export default App;
