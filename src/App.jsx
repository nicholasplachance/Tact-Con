import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/About';
import AboutPage from './pages/About';
import Additions from './pages/Additons';
import Contact from './pages/Contact';
import CustomBuilds from './pages/CustomBuilds';
import CustomFinishes from './pages/CustomFinishes';
import Footer from './components/common/Footer';
import GalleryComponent from './pages/Gallery';
import Header from './components/common/Header';
import Home from './pages/Home';
import JotformPopup from './components/common/JotformPopup';
import KitchenAndBath from './pages/KitchenAndBath';
import React from 'react';
import ServicesPage from './pages/Services';
import WhatWeDoPage from './pages/WhatWeDo';
import WhoWeArePage from './pages/WhoWeAre';
import WholeHouse from './pages/WholeHouse';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/who-we-are' element={<WhoWeArePage/>} />
        <Route path='/what-we-do' element={<WhatWeDoPage/>} />

        <Route path='/additions' element={<Additions/>} />
        <Route path='/custom-builds' element={<CustomBuilds/>} />
        <Route path='/custom-finishes' element={<CustomFinishes/>} />
        <Route path='/kitchen-bathroom' element={<KitchenAndBath/>} />
        <Route path='/whole-house' element={<WholeHouse/>} />
        <Route path='/gallery' element={<GalleryComponent/>}/>

        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <JotformPopup/>
      <Footer/>
    </>
  );
}

export default App;
