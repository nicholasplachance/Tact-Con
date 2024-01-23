import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/About';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './pages/Home';
import React from 'react';
import ServicesPage from './pages/Services';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
