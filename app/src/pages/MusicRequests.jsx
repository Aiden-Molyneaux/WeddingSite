import React, { useState } from 'react';
import useIsMobile from '../utils/useIsMobile.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import SongRequestForm from '../components/SongRequestForm.jsx';
import { attendees } from './attendees.js';

export default function MusicRequests() {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Store song data as an array of song objects
  const [songList, setSongList] = useState([{ id: 0, songTitle: '', artistName: '' }]);

  console.log(songList);

  const isMobile = useIsMobile();

  // Handle updating individual song data
  function handleSongChange(index, field, value) {
    const updatedSongList = [...songList];
    updatedSongList[index] = { ...updatedSongList[index], [field]: value };
    setSongList(updatedSongList);
  }

  // Add a new song to the song list
  function addSong() {
    setSongList([...songList, { id: songList.length, songTitle: '', artistName: '' }]);
  }

  async function submitForm(event) {
    event.preventDefault();
    setIsLoading(true);
    
    const emailData = {
      name: userName,
      songs: songList // Submit the list of songs
    };
    
    const requestBody = {
      body: JSON.stringify(emailData)
    };
    
    try {
      const response = await fetch('https://1hrir9ubdg.execute-api.us-east-1.amazonaws.com/staging/emailMusicRequests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      window.localStorage.setItem('formSubmitted', JSON.stringify(true));
      setIsLoading(false);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
    }
  }

  return (
    <div className='pageContent'>
      <form onSubmit={submitForm} className='musicRequestForm'>
        <h3 className='sectionHeader'>Music Requests</h3>

        { formSubmitted 
          ? <div>
            <h6 className='bottomMargin topMargin'>Your music request has been sent to Kyra and Aiden!</h6>
            <h6 className='bottomMargin topMargin'>Thank you so much!</h6>
          </div>
          : <>
            <div className={isMobile ? 'rsvpField' : 'rsvpSection'}>
              <label>Who are you?</label>
              <select name="name" className='rsvpSelect' value={userName} onChange={(e) => setUserName(e.target.value)}>
                {attendees.map((attendee, index) => (
                  <option key={index} value={attendee.name}>
                    {attendee.name}
                  </option>
                ))}
              </select>
            </div>

            { songList.map((song, index) => (
              <SongRequestForm 
                key={index} 
                songId={index}
                songData={song} // Pass the individual song data
                handleSongChange={handleSongChange} // Pass the handler to update song data
              />
            ))}

            <button type='button' className='topMargin addSongBtn' onClick={addSong}>
              <FontAwesomeIcon icon={faPlus} /> Add another song
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