
import './components/styles/App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Experiences from './pages/Experiences/Experiences';
import Contact from './pages/Contact/Contact';
import React from 'react';

import { HashRouter, HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/experiences' element={<Experiences/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </HashRouter>
  );
}


export default App;
