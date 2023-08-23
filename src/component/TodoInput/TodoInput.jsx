import React, { useState } from 'react';
import './TodoInput.css';

function TodoInput({ addTask }) {
  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleAddTask = () => {
    if (task.title && task.description) {
      addTask(task.title, task.description);
      setTask({
        title: '',
        description: ''
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className='todo-input'>
      <div className='todo-input-item'>
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
      <div className='todo-input-item'>
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
      <div className='todo-input-button'>
        <button type='button' onClick={handleAddTask} className='primarybtn'>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
