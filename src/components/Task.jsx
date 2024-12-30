import React from 'react';
import { useDrag } from 'react-dnd';
import DeleteButton from '../Utils/DeleteButton';

const Task = ({ task, deleteTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: '15px',
        paddingLeft: '15px',
        margin: '5px',
        backgroundColor: 'white',
        border: '1px solid gray',
        opacity: isDragging ? 0.2 : 1,
        cursor: 'move',
        borderRadius: '15px'
      }}
    >
      <span>{task.text}</span>
      <DeleteButton taskId={task.id} deleteTask={deleteTask} />
    </div>
  );
};

export default Task;
