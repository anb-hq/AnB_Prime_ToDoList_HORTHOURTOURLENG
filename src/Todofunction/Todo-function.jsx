  export function addTask(tasks, setTasks, title, description) {
    const newTask = { id: Date.now(), title, description, completed: false };
    setTasks([...tasks, newTask]);
  }
  
  export function removeTask(tasks, setTasks, taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }
  
  export function toggleTaskCompletion(tasks, setTasks, taskId) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }
  
  export function updateTask(tasks, setTasks, taskId, newTitle, newDescription) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle, description: newDescription } : task
    );
    setTasks(updatedTasks);
  }
 