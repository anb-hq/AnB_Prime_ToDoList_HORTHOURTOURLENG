import React from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import './TodoWrapper.css'
const TodoWrapper = ({
  addTask,
  searchQuery,
  setSearchQuery,
  completedScreen,
  setCompletedScreen,
  tasks,
  filteredTasks,
  removeTask,
  toggleTaskCompletion,
  updateTask
}) => {
  return (
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
  );
};

export default TodoWrapper;
