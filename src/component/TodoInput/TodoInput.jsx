import React, { useState } from 'react';
import './TodoInput.css';
import '../Button/Button.css';

function TodoInput({ addTask }) {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (task.title && task.description) {
      addTask(task.title, task.description);
      // Reset the input values after adding the task
      setTask({
        title: '',
        description: ''
      });
    }
  };

  // Function to handle pressing Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <section className='todo-input w-f flex align-center justify-center border-bottom'>
      <div className='todo-input-item flex flex-col align-center padding'>
        <label className='td'>Title</label>
        <input
          type='text'
          name='title'
          placeholder='What task?'
          value={task.title}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className='todo-input-item flex flex-col align-center padding'>
        <label className='td'>Description</label>
        <input
          type='text'
          name='description'
          placeholder='What do you want to do?'
          value={task.description}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className='todo-input-button padding'>
        <button type='button' onClick={handleAddTask} className='primarybtn'>
          Add
        </button>
      </div>
    </section>
  );
}

export default TodoInput;

