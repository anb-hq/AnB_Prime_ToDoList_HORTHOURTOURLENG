import React, { useEffect, useState } from 'react';
import './App.css';
import TodoWrapper from './component/TodoWrapper/TodoWrapper';

function App() {
  const [completedScreen, setCompletedScreen] = useState(false);
  // State for managing tasks
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage on initial load
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, completed: false };
    setTasks([newTask, ...tasks]);
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

  // Function to update task details
  const updateTask = (taskId, newTitle, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle, description: newDescription } : task
    );
    setTasks(updatedTasks);
  };

  // State and effect for search functionality
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
      <TodoWrapper
        addTask={addTask}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedScreen={completedScreen}
        setCompletedScreen={setCompletedScreen}
        tasks={tasks}
        filteredTasks={filteredTasks}
        removeTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
