import React, { useEffect } from 'react';
import useIsMobile from '../utils/useIsMobile.js';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import homeImg from '../assets/homeImg.jpg';
import homeImgMobile from '../assets/homeImgMobile.png';
import EntryPopup from '../components/EntryPopup.jsx';

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

  const isMobile = useIsMobile();

  function handleClick() {
    window.localStorage.setItem('location', JSON.stringify({ path: '/RSVP' }));
  }

  const MobileDetails = () => (
    <div className='mobileDetails'>
      <h2 className='marriedTextMobile'>We are getting married!</h2>
      <h2 className='dateInfo'>September 20, 2025</h2>
      <h2 className='locationInfo'>Perth, ON</h2>
    </div>
  );

  return (
    <div className='homeContent'>
      <EntryPopup/>
      
      { isMobile 
        ? <MobileDetails/> 
        : <h2 className={'marriedText'}>We are getting married!</h2> 
      }

      <div className='homeImgContainer'>
        { isMobile
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