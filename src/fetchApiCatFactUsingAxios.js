import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [fact, setCatFact] = useState("");
  async function fetchDataFact() {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setCatFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchDataFact()
  }, []);

  return (
    <div className='App'>
      <button onClick={fetchDataFact}>Generate</button>
      <p>{fact}</p>
    </div>
  );
}

export default App;
