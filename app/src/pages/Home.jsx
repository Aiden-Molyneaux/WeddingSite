import React from 'react';
import homeImg from '../assets/HomePage1.jpg';

export default function Home() {
  return (
    <>
      <div className='homeContent'>
        <img src={homeImg} alt='Engagement photo' className='homeImg'/>
        <h2>We're Getting Married!</h2>
      </div>
    </>
  );
}