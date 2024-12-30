import React from 'react';

const AddButton = ({ newTaskText, setNewTaskText, addTask }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
      setNewTaskText('');
    }
  };

  return (
    <div className="flex w-full max-w-md items-center gap-2">
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        onKeyDown={handleKeyDown} // Trigger addTask on Enter
        placeholder="Enter new task..."
        className="flex-1 p-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={() => {
            addTask();
            setNewTaskText(''); // Clear input field
          }}
        className="p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddButton;
