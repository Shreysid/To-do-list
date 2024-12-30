import React, { useState } from 'react';
import Column from '../components/Column'
import useTaskManager from '../Utils/useTaskManager';
import AddButton from './AddButton';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TaskBoard = () => {
  const { tasks, addTask, deleteTask, handleDrop } = useTaskManager();  // Use handleDrop from the custom hook
  const [newTaskText, setNewTaskText] = useState('');

  const columns = ['To Do', 'Done', 'Important'];

  return (
    <DndProvider backend={HTML5Backend}>
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {columns.map((column) => (
          <Column
            key={column}
            title={column}
            tasks={tasks.filter((task) => task.column === column)}
            onDrop={(id) => handleDrop(id, column)}  // Pass handleDrop to update column
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <div className="flex w-full max-w-md items-center gap-2 m-10">
          <AddButton
            newTaskText={newTaskText}
            setNewTaskText={setNewTaskText}
            addTask={() => {
              addTask(newTaskText);
              setNewTaskText(''); // Clear the input field after adding a task
            }}
          />
        </div>
    </div>
    </DndProvider>
  );
};

export default TaskBoard;