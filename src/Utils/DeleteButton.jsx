import React from 'react';

const DeleteButton = ({ taskId, deleteTask }) => {
  return (
    <button
      onClick={() => deleteTask(taskId)}
      className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
