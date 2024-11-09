import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes.js';
import NavigationBar from './components/Navbar.js';
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <AnimatedRoutes/>
      </Router>
    </div>
  );
}

export default App;
