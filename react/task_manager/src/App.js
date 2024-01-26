import './App.css';
import { useEffect, useState, useRef } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();
      setTasks(data.slice(0, 10));
    };
    fetchTask();
  }, []);

  const markComplete = (title) => {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.title === title ? { ...task, completed: true } : task
      )
    );
  };

  const addTask = async (title) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'POST',
          body: JSON.stringify({
            completed: false,
            title: title,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      const newTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error('Error creating task:', error.message);
    }
  };

  const clearCompleted = () => {
    console.log(tasks);
    setTasks((prevTask) => prevTask.filter((task) => !task.completed));
  };

  return { tasks, markComplete, addTask, clearCompleted };
};

function App() {
  const { tasks, markComplete, addTask, clearCompleted } = useTaskManager();
  const taskRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskRef.current.value);
    taskRef.current.value = '';
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <label>Input Task: </label>
        <input type="text" ref={taskRef} />
        <button type="submit">Create</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.title}
            {!task.completed && (
              <button onClick={() => markComplete(task.title)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => clearCompleted()}>Clear Completed</button>
    </div>
  );
}

export default App;
