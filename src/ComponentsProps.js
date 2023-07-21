import './App.css';

function App() {
  return (
    <div>
      <AppContent name="Harsh" age={19} Designation="Student" />
      <AppContent name="Narendra" age={20} Designation="Software Developer" />
      <AppContent name="Harshit" age={20} Designation="UPSC Aspirant" />
    </div>
  );
}

const AppContent = (props) => {
  const appContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // This will make the content fill the entire viewport height
  };

  const secondDivStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
  };

  return (
    <div style={appContentStyle}>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.Designation}</h3>
      <div style={secondDivStyle}>
        This is the second div centered using flexbox.
      </div>
    </div>
  );
};

export default App;
