import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/HomePage1.jpg';
import confetti from 'canvas-confetti';

export default function Home() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      confetti.create(document.getElementById('my-canvas'), {
        resize: true,
        useWorker: true,
      })({ 
        particleCount: 200, 
        spread: 200,
        origin: { x: 0, y: 0 },
        colors: ['#ffd4d4', '#40547c', '#fffbf7']
      });

      confetti.create(document.getElementById('my-canvas'), {
        resize: true,
        useWorker: true,
      })({ 
        particleCount: 200, 
        spread: 200,
        origin: { x: 1, y: 0 },
        colors: ['#ffd4d4', '#40547c', '#fffbf7']
      });
    }, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  function handleClick() {
    setLocation();
  }

  function setLocation() {
    window.localStorage.setItem('location', JSON.stringify({ path: 'RSVP' }));
  }

  return (
    <div className='homeContent'>
      <h2 className='marriedText'>We are getting married!</h2>
      <img src={homeImg} alt='Engagement photo' className='homeImg'/>
      <button className='rsvpButton'>RSVP</button>

      <Link to='/RSVP' onClick={() => handleClick()}>
        <button className='rsvpButton'>RSVP</button>
      </Link>
    </div>
  );
}