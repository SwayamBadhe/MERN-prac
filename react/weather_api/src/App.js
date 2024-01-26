import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [cityName, setCityName] = useState('Delhi');
  const [data, setData] = useState([]);
  const cityRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [cityName]);

  const handleClick = (e) => {
    setCityName(cityRef.current.value);
  };

  return (
    <div className="App">
      <h1>Weather</h1>
      <label htmlFor="">City name: </label>
      <input type="text" ref={cityRef} defaultValue={cityName} />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
      {data.map((item) => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <p>Latitude: {item.lat}</p>
          <p>Longitude: {item.lon}</p>
          <p>Country: {item.country}</p>
          <p>State: {item.state}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
