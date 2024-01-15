import { useState } from 'react';
import './App.css';

const countries = [
  {
    name: 'United States',
    value: 'US',
    cities: ['New York', 'Los Angeles', 'Chicago', 'San Francisco'],
  },
  {
    name: 'India',
    value: 'IN',
    cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'],
  },
  {
    name: 'United Kingdom',
    value: 'UK',
    cities: ['London', 'Manchester', 'Birmingham', 'Edinburgh'],
  },
];

function Entry({ name, cities }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div>
        <button
          style={{ margin: '5px' }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '-' : '+'}
        </button>
        {name}
      </div>
      {isExpanded && (
        <div style={{ paddingLeft: '50px' }}>
          {cities.map((city) => (
            <div>{city}</div>
          ))}
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Country Option</h1>
      {countries.map((country) => (
        <Entry key={country.value} {...country} />
      ))}
    </div>
  );
}

export default App;
