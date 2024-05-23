/* eslint-disable indent */
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './styles/app.scss';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import OurStory from './pages/OurStory.jsx';
import PlacesToStay from './pages/PlacesToStay.jsx';
import Gifts from './pages/Gifts.jsx';
import MusicRequests from './pages/MusicRequests.jsx';
import FAQ from './pages/FAQ.jsx';
import RSVP from './pages/RSVP.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const location = JSON.parse(window.localStorage.getItem('location'));
    if (location) {
      navigate(location.path);
    } else {
      window.localStorage.setItem('location', JSON.stringify({ path: '/home' }));
      navigate('/home');
    }
  }, []);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/ourStory" element={<OurStory/>}></Route>
        <Route path="/placesToStay" element={<PlacesToStay/>}></Route>
        <Route path="/gifts" element={<Gifts/>}></Route>
        <Route path="/musicRequests" element={<MusicRequests/>}></Route>
        <Route path="/FAQ" element={<FAQ/>}></Route>
        <Route path="/RSVP" element={<RSVP/>}></Route>
      </Routes>
      <Footer/>
    </> 
  );
}

export default App;
