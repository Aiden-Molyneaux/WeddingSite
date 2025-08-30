import React, { useState, useEffect } from 'react';
import useIsMobile from '../utils/useIsMobile.js';
import perthOverheadMapImg from '../assets/perthOverheadMap.jpg';

export default function EntryPopup() {
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
          
          <h2>A Map for Your Convenience!</h2>
          
          <div className="entryPopupImageContainer" onClick={isMobile ? null : handleImageClick}>
            <img 
              src={perthOverheadMapImg} 
              alt="Overhead view of Perth, indicating how to navigate to Ceremony and Reception" 
              className="entryPopupImage"
            />
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && !isMobile &&
        (
          <div className="imageModalOverlay" onClick={handleModalClose}>
            <div className="imageModalContent" onClick={(e) => e.stopPropagation()}>
              <button className="imageModalCloseBtn" onClick={handleModalClose}>
              ×
              </button>
              <img 
                src={perthOverheadMapImg} 
                alt="Overhead view of Perth, indicating how to navigate to Ceremony and Reception" 
                className="imageModalImage"
              />
            </div>
          </div> )
      }
    </>
  );
}