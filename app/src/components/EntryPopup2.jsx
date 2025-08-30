import React, { useState, useEffect } from 'react';
import useIsMobile from '../utils/useIsMobile.js';
import homeImg from '../assets/perthOverheadMap.jpg';

export default function EntryPopup2() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show popup when component mounts
  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Entry Popup */}
      <div className="entryPopupOverlay">
        <div className="entryPopupContent">
          <button className="entryPopupCloseBtn" onClick={handleClose}>
            ×
          </button>
          
          <div className="entryPopupDisclaimer">
            <h2>A Map for Your Convenience!</h2>
          </div>
          
          <div className="entryPopupImageContainer" onClick={handleImageClick}>
            <img 
              src={homeImg} 
              alt="Welcome to our wedding" 
              className="entryPopupImage"
            />
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="imageModalOverlay" onClick={handleModalClose}>
          <div className="imageModalContent" onClick={(e) => e.stopPropagation()}>
            <button className="imageModalCloseBtn" onClick={handleModalClose}>
              ×
            </button>
            <img 
              src={homeImg} 
              alt="Welcome to our wedding" 
              className="imageModalImage"
            />
          </div>
        </div>
      )}
    </>
  );
}