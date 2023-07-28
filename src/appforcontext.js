import React, { useEffect, useState, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/profile'; // Use uppercase 'Profile' here
import { Contact } from './pages/Contact';
import { Navbar } from './navbar';

export const AppContext = createContext(); // Update variable name here

function App() {
  const [userName, setUserName] = useState("Harsh");

  return (
    <div className='App'>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} /> {/* Updated to lowercase 'profile' */}
            <Route path='/contact' element={<Contact />} /> {/* Updated to lowercase 'contact' */}
            <Route
              path='*'
              element={
                <div>
                  <h1>Page not found</h1>
                  <h2>Error 404</h2>
                </div>
              }
            />
          </Routes>

        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
