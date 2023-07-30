import React from 'react';
import './App.css'
import { Person } from './pages/Person';
function App() {
  return (
    <div className="App">
      <Person
        name="Harsh"
        email="bhature@gmail.com"
        age={20}
        isMarried={false}
        friends={["Narendra", "Shiven", "Aditya"]}
      />
    </div>
  );
}

export default App;
