import React, { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './component/TodoInput/TodoInput';
import TodoList from './component/TodoList/TodoList';
import './component/Button/Button.css'
function App() {
  const [completedScreen, setCompletedScreen] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem('ITEMS' , JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, completed: false };
    setTasks([ newTask,...tasks]);
  };
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const updateTask = (taskId, newTitle, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle, description: newDescription } : task
    );
    setTasks(updatedTasks);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);
  useEffect(() => {
    const filtered = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [searchQuery, tasks]);
  return (
    <div className='App'>
      <h1 className='text-center margin-top-20'>My Todos</h1>
      <div className='Todo-wrapper margin-x-y border-radius-10'>
        <TodoInput addTask={addTask} />
        <div className='search-container '>
            <i className='search-icon fas fa-search'></i>
            <input className='font border-radius-20 text-center'
              type='text'
              placeholder='Search Title'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
        </div>
        <div className='container-todo-list'>
          <div className='btn-area flex space-between'>
            <div className='btn gap'>
              <button
                className={`secondarybtn ${completedScreen === false ? 'active' : ''}`}
                onClick={() => setCompletedScreen(false)}
              >
                Todo({tasks.filter(task => !task.completed).length})
              </button>
              <button
                className={`secondarybtn ${completedScreen === true ? 'active' : ''}`}
                onClick={() => setCompletedScreen(true)}
              >
                Completed({tasks.filter(task => task.completed).length})
              </button>
              
            </div>
          </div>
          
          <TodoList
            tasks={filteredTasks}
            removeTask={removeTask}
            completedScreen={completedScreen}
            toggleTaskCompletion={toggleTaskCompletion}
            updateTask={updateTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;