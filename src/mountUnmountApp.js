import { useReducer } from 'react';
import './App.css';
import React, { useState } from 'react';
import { Text } from "./setText"
function App() {
    const [showText, setShowText] = useState(false)
    return (
        <div className='App'>
            <button onClick={() => {
                setShowText(!showText)
            }}>
                showText
            </button>
            {showText && <Text />}
        </div>
    )
}
export default App;
