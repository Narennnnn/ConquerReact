import { useReducer } from 'react';
import './App.css';

function App() {
  const planets = [
    { name: "Marsh", isGasPlanet: false },
    { name: "Jupyter", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Pluto", isGasPlanet: false },
    { name: "Uranus", isGasPlanet: true },
    { name: "Saturn", isGasPlanet: true }
  ]
  return (
    <div>
      {planets.map((planet, key) =>
        planet.isGasPlanet && <Planet name={planet.name} />
      )}
    </div>
  );
}
const Planet = (props) => {
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // This will make the content fill the entire viewport height
  }
  return (
    <div style={contentStyle}>
      <><h1>{props.name}</h1></>
    </div>
  )
}
export default App;
