import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/homeImg.jpg';
import confetti from 'canvas-confetti';

export default function Home() {
  useEffect(() => {
    const blush = '#ffd4d4';
    const blue = '#40547c';
    const white = '#fffbf7';

    const createConfetti = (origin) => {
      confetti.create(document.getElementById('my-canvas'), {
        resize: true,
        useWorker: true,
      })({
        particleCount: 200,
        spread: 200,
        origin,
        colors: [blush, blue, white]
      });
    }
  
    const intervalId = setInterval(() => {
      createConfetti({ x: 0, y: 0 });
      createConfetti({ x: 1, y: 0 });
    }, 2000);
  
    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  function handleClick() {
    window.localStorage.setItem('location', JSON.stringify({ path: '/RSVP' }));
  }

  return (
    <div className='homeContent'>
      <h2 className='marriedText'>We are getting married!</h2>
      <img src={homeImg} alt='Engagement photo' className='homeImg'/>

      <Link to='/RSVP' onClick={() => handleClick()}>
        <button className='rsvpButton'>RSVP</button>
      </Link>
    </div>
  );
}