import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import SongRequestForm from '../components/SongRequestForm';

export default function MusicRequests() {
  const attendees = [
    { id: '00', name: 'Guest 00', plusOne: true },
    { id: '01', name: 'Guest 01', plusOne: false },
    { id: '02', name: 'Guest 02', plusOne: false },
    { id: '03', name: 'Guest 03', plusOne: false },
    { id: '04', name: 'Guest 04', plusOne: false },
    { id: '05', name: 'Guest 05', plusOne: false },
    { id: '06', name: 'Guest 06', plusOne: false },
    { id: '07', name: 'Guest 07', plusOne: false },
    { id: '08', name: 'Guest 08', plusOne: false },
    { id: '09', name: 'Guest 09', plusOne: false },
    { id: '10', name: 'Guest 10', plusOne: true },
    { id: '11', name: 'Guest 11', plusOne: true },
    { id: '12', name: 'Guest 12', plusOne: true },
    { id: '13', name: 'Guest 13', plusOne: false },
    { id: '14', name: 'Guest 14', plusOne: false },
    { id: '15', name: 'Guest 15', plusOne: true },
    { id: '16', name: 'Guest 16', plusOne: false },
    { id: '17', name: 'Guest 17', plusOne: false },
    { id: '18', name: 'Guest 18', plusOne: true },
    { id: '19', name: 'Guest 19', plusOne: false },
    { id: '20', name: 'Guest 20', plusOne: false },
    { id: '21', name: 'Guest 21', plusOne: false },
    { id: '22', name: 'Guest 22', plusOne: false },
    { id: '23', name: 'Guest 23', plusOne: false },
    { id: '24', name: 'Guest 24', plusOne: false },
    { id: '25', name: 'Guest 25', plusOne: false },
    { id: '26', name: 'Guest 26', plusOne: false },
    { id: '27', name: 'Guest 27', plusOne: true },
    { id: '28', name: 'Guest 28', plusOne: false },
    { id: '29', name: 'Guest 29', plusOne: false },
    { id: '30', name: 'Guest 30', plusOne: false },
    { id: '31', name: 'Guest 31', plusOne: false },
  ];
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [songList, setSongList] = useState([{ id: 1 }]);

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

  console.log(songList);

  return (
    <div className='pageContent'>
      <form onSubmit={handleSubmit} className='musicRequestForm'>
        <h3 className='sectionHeader'>Music Requests</h3>

        { formSubmitted 
          ? <h6 className='bottomMargin topMargin'>Your music request has been sent Kyra and Aiden!</h6>
          : <>
            <div className='rsvpSection'>
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