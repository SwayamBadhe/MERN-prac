import './App.css';
import React, { useState, useRef } from 'react';

const TodoList = ({ tasks, setTasks }) => {
  const handleRemove = (index) => {
    setTasks((prevTask) => {
      return prevTask.filter((task, i) => i !== index);
    });
  };

  return (
    <div style={{ marginTop: '10px' }}>
      {tasks.map((task, index) => (
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
        >
          <div key={index}>{task}</div>
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => handleRemove(index)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

function App() {
  const [tasks, setTasks] = useState([]);
  const taskRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = taskRef.current.value;
    if (newTask === '') return;
    else {
      setTasks((prevTask) => [...prevTask, newTask]);
    }
    taskRef.current.value = null;
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter task: </label>
        <input type="text" name="task" ref={taskRef} />
        <button type="submit">Submit</button>
      </form>
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
