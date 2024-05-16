/* eslint-disable indent */
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './styles/app.scss';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
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
        <Route path="/RSVP" element={<RSVP/>}></Route>
      </Routes>
      <Footer/>
    </> 
  );
}

export default App;
