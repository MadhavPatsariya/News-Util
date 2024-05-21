import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [mode, setMode] = useState('light');

  const changeMode = () => {
    if(mode === 'light'){
       setMode('dark');
       
       document.body.style.backgroundColor = '#676887'
       document.body.style.color = 'white'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff3cf'
      document.body.style.color = 'black'
    }
  }
  return (
    <Router>
    <Navbar mode = {mode} toggleMode = {changeMode} />
    <Routes>
      <Route exact path="/" element={<Home category="general" mode = {mode} />} />
      <Route path="/entertainment" element={<Home category="entertainment" mode = {mode} />} />
      <Route path="/business" element={<Home category="business" mode = {mode} />} />
      <Route path="/health" element={<Home category="health" mode = {mode} />} />
      <Route path="/science" element={<Home category="science" mode = {mode} />} />
      <Route path="/sports" element={<Home category="sports" mode = {mode} />} />
      <Route path="/technology" element={<Home category="technology" mode = {mode} />} />
    </Routes>
  </Router>
  );
}

export default App;
