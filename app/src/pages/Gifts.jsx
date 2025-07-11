import React, { useState } from 'react';
import portholeImg from '../assets/portholeImg.png';

export default function Honeymoon() {
  return (
    <div className='pageContent'>
      <h3 className='sectionHeader'>Wedding Gifts</h3>
      <img src={portholeImg} alt='Engagement photo' className='portholeImg'/>
      <div className='giftsContent'>
        <h4 className='sectionText'>We are going to Punta Cana, Dominican Republic, leaving right after the Wedding!</h4>
        <br/>
        <h4 className='sectionText'>We are so excited to start our married life together and grateful for the love and support of our friends and family. 
          <br/>
          <br/>If you wish to give a gift, we would be delighted to receive a contribution towards our honeymoon fund. There will be a card box at the wedding receoption for anyone who wishes to give in person. Alternatively, you can send an e-transfer to kyra.hoyte@hotmail.com.</h4>
        
      </div>
      
    </div>    
  );
}