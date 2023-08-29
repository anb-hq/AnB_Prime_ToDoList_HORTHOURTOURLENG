import React, { useState } from 'react';
import './TodoList.css';
import '../Button/Button.css'

function TodoList({ tasks, completedScreen, toggleTaskCompletion, removeTask, updateTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [showEditPopup, setShowEditPopup] = useState(false); 
  const [showBackdrop, setShowBackdrop] = useState(false);

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditingTaskId(taskId);
      setEditedTitle(taskToEdit.title);
      setEditedDescription(taskToEdit.description);
      setShowEditPopup(true); 
      setShowBackdrop(true);
    }
  };

  const saveEditedTask = () => {
    if (editingTaskId !== null) {
      updateTask(editingTaskId, editedTitle, editedDescription);
      setEditingTaskId(null);
      setEditedTitle('');
      setEditedDescription('');
      setShowEditPopup(false); 
      setShowBackdrop(false);
    }
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditedTitle('');
    setEditedDescription('');
    setShowEditPopup(false); 
    setShowBackdrop(false);
  };

  return (
    <div className='todo-list'>
      {tasks
          .filter((task) => (completedScreen ? task.completed : !task.completed))
          .map((task) => (
            <div
              className={`todo-list-item flex flex-col margin-bottom-10 border-radius-20 margin-top-10 padding ${
                task.completed ? 'completed-task' : ''
              }`}
            key={task.id}>
            <div>
              <h3 className='font-t border-bottom '>{task.title}</h3>
              <p className='font-p border-bottom'>{task.description}</p>
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
      {showBackdrop && <div className='backdrop'></div>}

      {showEditPopup && (
        <div className='edit-popup text-center border-radius-30'>
          <div>
            <p>Title</p>
           <input
           className='font'
            type='text'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
           />
           <p>Description</p>
           <input
           className='font'
            type='text'
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
           />
          </div>
          <div className='margin'>
            <button className='editbtn font' onClick={saveEditedTask}>Save</button>
            <button className='editbtn font' onClick={cancelEdit}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;