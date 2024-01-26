import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [showRepos, setShowRepos] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      });
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRepos(true);
    setUsername(e.target.username.value);
  };

  const handleOnChange = (e) => {
    setShowRepos(false);
    setUsername(e.target.value);
  };

  return (
    <div className="App">
      <h1>Github Repo Fetch</h1>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleOnChange}
        />
        <button>Submit</button>
      </form>
      <ul>
        {repos.length > 0 &&
          showRepos &&
          repos.map((repo) => <li key={repo.id}>{repo.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
