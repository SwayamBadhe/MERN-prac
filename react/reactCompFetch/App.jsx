import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=dog',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key':
                '486a052a15mshfe75718421bee3bp189022jsn0dcaf08f25a3',
              'X-RapidAPI-Host':
                'mashape-community-urban-dictionary.p.rapidapi.com',
            },
          }
        );
        const result = await response.json();
        setData(result.list);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Data List</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.author}>{item.definition}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
