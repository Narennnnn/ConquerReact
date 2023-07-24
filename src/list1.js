import { useReducer } from 'react';
import './App.css';

function App() {
  const user = [
    { name: "Harsh", age: 19 },
    { name: "Priyanka", age: 29 },
    { name: "Jaggu", age: 45 }
  ]
  return (
    <div>
      {user.map((user, key) => {
        return <User name={user.name} age={user.age} />
      })}
    </div>
  );
}
const User = (props) => {
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // This will make the content fill the entire viewport height
  }
  return (
    <div style={contentStyle}>
      <><h1>{props.name}</h1><h2>{props.age}</h2></>
    </div>
  )
}
export default App;
