import { useReducer } from 'react';
import './App.css';
import React, { useState } from 'react';
function App() {
  // useState hook is used to define a state variable and its initial value
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1); // Update the state with a new value
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
export default App;
