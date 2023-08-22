import React, { useState } from 'react';
import './TodoList.css';

function TodoList({tasks,removeTask,completedScreen,toggleTaskCompletion}) {
  
  return (
    <div className='todo-list'>
      {tasks
        .filter((task) => (completedScreen ? task.completed : !task.completed))
        .map((task) => (
          <div className='todo-list-item' key={task.id}>
            <div>
              <h3>{task.title}</h3>
              <p className='description'>{task.description}</p>
            </div>
            <div className='btndc'>
              <button className='btne' onClick={() => editTask(task.id)}>
                <i className='fa-solid fa-pen-to-square'></i>
                
              </button>
              <button className='btnd' onClick={() => removeTask(task.id)}>
                <i className='fa-solid fa-xmark'></i>
              </button>
              <button className='btnc' onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? (
                  <i className='fa-solid fa-arrow-rotate-left'></i>
                ) : (
                  <i className='fa-solid fa-check'></i>
                )}
              </button>
            </div>
          </div>
        ))}

    </div>
  );
}

export default TodoList;



