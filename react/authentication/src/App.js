import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    name: '',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    authenticate();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const matchedUser = data.find(
      (user) => user.username === formData.username
    );

    setIsAuthenticated(!!matchedUser);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <h1>Authentication</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>

      {isAuthenticated ? (
        <h2>User is Authenticated</h2>
      ) : (
        <h2>User is Not Authenticated</h2>
      )}
    </div>
  );
}

export default App;
