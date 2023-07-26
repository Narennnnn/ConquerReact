import './App.css';
import { cleanup } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const BadStopWatch = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(c => c + 0.1);
        }, 100);

    }, []); 

    return (
        <div>Bad Stopwatch: {count.toFixed(1)}</div>
    );
}

const GoodStopWatch = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const grabInterval = setTimeout(() => {
            setCount(c => c + 0.1);
        }, 100);

        return () => clearTimeout(grabInterval);
    }, [count]); // Add count as a dependency

    return (
        <div>Good Stopwatch: {count.toFixed(1)}</div>
    );
}

function App() {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr"
        }}>
            <BadStopWatch />
            <GoodStopWatch />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
export default App;
