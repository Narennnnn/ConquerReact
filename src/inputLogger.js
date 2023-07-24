import { useReducer } from 'react';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [innputValue, setInput] = useState("");
  const handleState = (event) => {
    setInput(event.target.value)
  };
  return (
    <div className='App'>
      <input type='text' onChange={handleState} />
      {innputValue}
    </div>
  );
}
export default App;
