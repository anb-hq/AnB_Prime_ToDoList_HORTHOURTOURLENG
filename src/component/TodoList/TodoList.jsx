import React, { useState } from 'react';
import './TodoList.css';

function TodoList({tasks}) {
  
  return (
    <div className='todo-list'>
      {tasks
        .map((task) => (
          <div className='todo-list-item' key={task.id}>
            <div>
              <h3>{task.title}</h3>
              <p className='description'>{task.description}</p>
            </div>
            <div className='btndc'>
              <button className='btne'>
                <i className='fa-solid fa-pen-to-square'></i>
              </button>
              <button className='btnd' >
                <i className='fa-solid fa-xmark'></i>
              </button>
            </div>
          </div>
        ))}

    </div>
  );
}

export default TodoList;



