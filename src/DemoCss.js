import './App.css';

function App() {
  const isTrue = true;
  const age = 10;

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px", // Change the width as needed
    height: "50px", // Set the height to center the content vertically
    backgroundColor: "cyan",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div>
      {age >= 18 ? <h1>OverAge</h1> : <h1>UnderAge</h1>}
      <h1 style={{ color: isTrue ? "red" : "black" }}>Let's Do It!</h1>
      <button style={buttonStyle}>ClickMe</button>
    </div>
  );
}

export default App;
