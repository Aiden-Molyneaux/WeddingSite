import React, { useState } from 'react';
import portholeImg from '../assets/portholeImg.png';

export default function Honeymoon() {
  return (
    <div className='pageContent'>
      <h3 className='sectionHeader'>Wedding Gifts</h3>
      <img src={portholeImg} alt='Engagement photo' className='portholeImg'/>
      <div className='giftsContent'>
        <h4 className='sectionText'>We are going to Punta Cana, Dominican Republic and leaving right after the Wedding!</h4>
        <br/>
        <h4 className='sectionText'>We are so excited to start our live together and grateful to have such supportive friends and family. If you wish to give a gift, we would be thrilled to receive a contribution towards our honeymoon fund.</h4>
        
      </div>
      <button className='rsvpSubmit'>Contribute</button>
      
    </div>    
  );
}