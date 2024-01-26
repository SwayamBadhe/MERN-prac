import './App.css';
import { useEffect, useRef, useState } from 'react';

const Clock = ({ time, setTime }) => {
  const [pause, setPause] = useState(false);
  const timeRef = useRef(null);

  useEffect(() => {
    if (time > 0 && !pause) {
      timeRef.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timeRef.current);
    };
  }, [time, setTime, pause]);

  const handlePause = () => {
    setPause(!pause);
  };

  return (
    <>
      <div>
        <h1>Time Left: {time}</h1>
      </div>
      {time > 0 && pause ? (
        <button onClick={handlePause}>Resume</button>
      ) : (
        <button onClick={handlePause}>Pause</button>
      )}
      <button onClick={() => setTime(0)}>Reset</button>
    </>
  );
};

function App() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    setTime(timeRef.current.value);
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <form onSubmit={handleSumbit}>
        <label htmlFor="">Enter Time (s) </label>
        <input type="number" ref={timeRef} name="time" />
        <button type="submit">Submit</button>
      </form>
      <Clock time={time} setTime={setTime} />
    </div>
  );
}

export default App;
