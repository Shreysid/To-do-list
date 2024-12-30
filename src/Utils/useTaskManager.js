// hooks/useTaskManager.js
import { useState } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTaskText) => {
    if (!newTaskText.trim()) return; // Prevent empty tasks
    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      column: 'To Do',
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleDrop = (id, column) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, column } : task
      )
    );
  };

  return { tasks, addTask, deleteTask, handleDrop };
};

export default useTaskManager;
