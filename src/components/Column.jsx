import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';

const Column = ({ title, tasks, onDrop, deleteTask }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        padding: '10px',
        margin: '10px',
        // marginRight: '10px',
        backgroundColor: isOver ? 'lightblue' : 'lightgray',
        minHeight: '400px',
        borderRadius: '25px'
      }}
    >
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask}  />
      ))}
    </div>
  );
};

export default Column;
