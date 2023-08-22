import React, { useState } from 'react';
import './App.css';
import TodoInput from './component/TodoInput/TodoInput';
import TodoList from './component/TodoList/TodoList';

function App() {

  const [tasks, setTasks] = useState([])
  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, completed: false };
    setTasks([...tasks, newTask]);
  };
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className='App'>
      <h1>My Todos</h1>
      <div className='Todo-wrapper'>
        <TodoInput addTask={addTask} />      
        <TodoList
          tasks={tasks}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

export default App;