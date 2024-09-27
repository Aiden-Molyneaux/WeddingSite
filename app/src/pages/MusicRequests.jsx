import React, { useState } from 'react';
import useIsMobile from '../utils/useIsMobile.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import SongRequestForm from '../components/SongRequestForm';
import { attendees } from './attendees';

export default function MusicRequests() {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [songList, setSongList] = useState([{ id: 1 }]);

  const isMobile = useIsMobile();

  function addSong() {
    setSongList([...songList, { id: songList.length }]); // Add a new song form
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    
    fetch('https://formsubmit.co/9dd068642eb64094e99fc86586fb1715', {
      method: 'POST',
      body: new FormData(event.target),
    })
      .then(() => {
        window.localStorage.setItem('formSubmitted', JSON.stringify(true));
        setIsLoading(false);
        setFormSubmitted(true);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className='pageContent'>
      <form onSubmit={handleSubmit} className='musicRequestForm'>
        <h3 className='sectionHeader'>Music Requests</h3>

        { formSubmitted 
          ? <h6 className='bottomMargin topMargin'>Your music request has been sent Kyra and Aiden!</h6>
          : <>
            <div className={isMobile ? 'rsvpField' : 'rsvpSection'}>
              <label>Who are you?</label>
              <select name="name" className='rsvpSelect' value={userName} onChange={() => setUserName(event.target.value)}>
                {attendees.map((attendee, index) => (
                  <option key={index} value={attendee.name}>
                    {attendee.name}
                  </option>
                ))}
              </select>
            </div>

            {songList.map((song, index) => (
              <SongRequestForm key={index} songId={index}/>
            ))}

            <button type='button' className='topMargin addSongBtn' onClick={addSong}>
              Add another song
            </button>
          
            <button type='submit' disabled={isLoading} className="rsvpSubmit">
              {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Send music request'}
            </button>
          </> }
        
        <input type="hidden" name="_captcha" value="false"/>
      </form>
    </div>
  );
}