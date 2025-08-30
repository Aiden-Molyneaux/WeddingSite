import React, { useState, useEffect } from 'react';
import perthMapImg from '../assets/perthMap.jpg';

export default function ImageModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // stop user from scrolling when modal is open
    document.body.style.overflow = isOpen ?  'hidden' : 'auto';

    // cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div>
      <img 
        src={perthMapImg} 
        alt='Perth Map'
        onClick={() => setIsOpen(true)}
      />
      
      { isOpen && (
        <div className='mobileMenuExitButton' onClick={() => setIsOpen(false)}>
          x
        </div>
      )}
    </div>
  );
}