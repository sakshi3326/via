// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import WorkingModel from './pages/WorkingModel';
import FocusSectors from './pages/FocusSectors';
import ODOP from './pages/ODOP';
import Contact from './pages/Contact';
import SelectLocation from './pages/SelectLocation';
import Explore from './pages/Explore';
// Placeholder pages

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sectors" element={<FocusSectors />} />
        <Route path="/model" element={<WorkingModel />} />
        <Route path="/odop" element={<ODOP />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<SelectLocation />} />
        <Route path="/explore" element={<Explore />} />

      </Routes>
    </Router>
  );
}

export default App;
