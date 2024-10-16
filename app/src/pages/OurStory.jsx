import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import OurStoryEntry from '../components/OurStoryEntry.jsx';
import useIsMobile from '../utils/useIsMobile.js';

export default function OurStory() {
  const [activeEntry, setActiveEntry] = useState(2019);

  const isMobile = useIsMobile();

  const handleNextEntry = () => {
    if (activeEntry < 2024) {
      setActiveEntry(activeEntry + 1);
    }
  };

  const handlePreviousEntry = () => {
    if (activeEntry > 2019) {
      setActiveEntry(activeEntry - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNextEntry(),
    onSwipedRight: () => handlePreviousEntry(),
    preventDefaultTouchmoveEvent: true
  });

  return (
    <div className='pageContent'>
      <h3 className='sectionHeader'>Our Story</h3>
      <div className='ourStoryContent'>
        <div className='entries' {...(isMobile ? swipeHandlers : {})}>
          <OurStoryEntry date={activeEntry.toString()}/>
        </div>
        <div className='cursorBar'>
          <div className='cursorCards'>
            <div> { activeEntry === 2019
              ? <h3 className='activeEntry'>2019</h3>
              : <div className='inactiveEntry'></div>
            }
            </div>
            <div> { activeEntry === 2020
              ? <h3 className='activeEntry'>2020</h3>
              : <h3 className='inactiveEntry'></h3>
            }
            </div>
            <div> { activeEntry === 2021
              ? <h3 className='activeEntry'>2021</h3>
              : <h3 className='inactiveEntry'></h3>
            }
            </div>
            <div> { activeEntry === 2022
              ? <h3 className='activeEntry'>2022</h3>
              : <h3 className='inactiveEntry'></h3>
            }
            </div>
            <div> { activeEntry === 2023
              ? <h3 className='activeEntry'>2023</h3>
              : <h3 className='inactiveEntry'></h3>
            }
            </div>
            <div> { activeEntry === 2024
              ? <h3 className='activeEntry'>2024</h3>
              : <h3 className='inactiveEntry'></h3>
            }
            </div>
          </div>
        
          <div className='cursorButtons'>
            <button 
              disabled={activeEntry === 2019}
              onClick={handlePreviousEntry}
            >
              <FontAwesomeIcon icon={faArrowLeft} size='lg'/>
            </button>
            <button 
              disabled={activeEntry === 2024}
              onClick={handleNextEntry}
            >
              <FontAwesomeIcon icon={faArrowRight} size='lg'/>
            </button>
          </div>
        </div>
      </div>
    </div>    
  );
}