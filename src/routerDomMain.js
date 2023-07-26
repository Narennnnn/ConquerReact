import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Contact' element={<Contact />} />
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
    </div>
  );
}

export default App;
