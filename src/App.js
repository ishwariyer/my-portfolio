// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
    <GlobalStyles />
    <Header />
    <Routes>  {/* Replace Switch with Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Navigate replace to="/about" />} />  {/* Use Navigate for redirect */}
    </Routes>
    <Footer />
  </Router>
  
  );
};

export default App;