import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const mapData = () => {
    const mappedArray = users.map((user) => user.id % 2 === 0);
    console.log(mappedArray);
  };
  const filterData = () => {
    const filteredArray = users.filter((user) => user.id % 2 === 0);
    console.log(filteredArray);
    setUsers(filteredArray);
  };

  return (
    <>
      {/* <div className="card">
        {users.map((user) => (
          <div className="card-inner">
            <p>{user.name}</p>
            <p>{user.username}</p>
          </div>
        ))}
      </div>
      <button onClick={mapData}>See Mapped Array in console</button>
      <button onClick={filterData}>See Filtered Array</button> */}

      <div className="card">
        {numbers.map((number) => (
          <div className="card-inner">
            <p>{number}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setNumbers(
            numbers
              .map((number) => number * number)
              .filter((number) => number < 100)
          );
        }}
      >
        Perform Action
      </button>
    </>
  );
}

export default App;
