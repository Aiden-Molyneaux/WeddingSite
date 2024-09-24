import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/homeImg.jpg';
import useWindowSize from '../utils/useWindowState.js';
import homeImgMobile from '../assets/homeImgMobile.png';
import confetti from 'canvas-confetti';
import HomeMobile from './HomeMobile.jsx';

export default function Home() {
  // useEffect(() => {
  //   const blush = '#ffd4d4';
  //   const blue = '#40547c';
  //   const white = '#fffbf7';

  //   const createConfetti = (origin) => {
  //     confetti.create(document.getElementById('my-canvas'), {
  //       resize: true,
  //       useWorker: true,
  //     })({
  //       particleCount: 200,
  //       spread: 200,
  //       origin,
  //       colors: [blush, blue, white]
  //     });
  //   };
  
  //   const intervalId = setInterval(() => {
  //     createConfetti({ x: 0, y: 0 });
  //     createConfetti({ x: 1, y: 0 });
  //   }, 2000);
  
  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(intervalId);
  // }, []);

  const { width } = useWindowSize();

  function handleClick() {
    window.localStorage.setItem('location', JSON.stringify({ path: '/RSVP' }));
  }

  return (
    width <= 750
      ? <HomeMobile handleRSVPClick={handleClick}/>
      : <div className='homeContent'>
        <h2 className='marriedText'>We are getting married!</h2>
        <div className='homeImgContainer'>
          { width <= 750
            ? <img src={homeImgMobile} alt='Engagement photo' className='homeImg'/>
            : <img src={homeImg} alt='Engagement photo' className='homeImg'/>
          }
        </div>

        <Link className='rsvpButtonContainer' to='/RSVP' onClick={() => handleClick()}>
          <button className='rsvpButton'>RSVP</button>
        </Link>
      </div>
  );
}