import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/homeImg.jpg';
import useWindowSize from '../utils/useWindowState.js';
import homeImgMobile from '../assets/homeImgMobile.png';
import confetti from 'canvas-confetti';
import PropTypes from 'prop-types';

export default function HomeMobile({handleRSVPClick}) {
  HomeMobile.propTypes = {
    handleRSVPClick: PropTypes.func.isRequired
  };

  return (
    <div className='homeContent'>

      <h2 className='marriedTextMobile'>We are getting married!</h2>
      <div>
        <h2 className='dateInfo'>September 20, 2025</h2>
        <h2 className='locationInfo'>Perth, ON</h2>
      </div>
      <div className='homeImgContainer'>
        <img src={homeImgMobile} alt='Engagement photo' className='homeImg'/>
      </div>
        
      <Link className='rsvpButtonContainer' to='/RSVP' onClick={() => handleRSVPClick()}>
        <button className='rsvpButton'>RSVP</button>
      </Link>
    </div>
  );
}