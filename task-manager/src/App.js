import './App.css'
import React, { useState } from 'react'
import TaskList from './TaskList';
import TaskInput from './TaskInput';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInput 
        handleAddTask={handleAddTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <TaskList 
        tasks={tasks}
        handleToggleComplete={handleToggleComplete}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;