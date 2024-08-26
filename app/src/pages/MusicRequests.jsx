import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import SongRequestForm from '../components/SongRequestForm';

export default function MusicRequests() {
  const attendees = [
    { id: '00', name: '--', plusOne: true },
    { id: '01', name: 'Andrew Kozaris', plusOne: false },
    { id: '02', name: 'Bryan Molyneaux', plusOne: false },
    { id: '03', name: 'Brittney King', plusOne: false },
    { id: '04', name: 'Camille Daoust', plusOne: false },
    { id: '05', name: 'Carl Molyneaux', plusOne: false },
    { id: '06', name: 'Carrie Skidmore', plusOne: false },
    { id: '07', name: 'Dakotah Molyneaux', plusOne: false },
    { id: '08', name: 'Darius Jones', plusOne: false },
    { id: '09', name: 'Deborah Foley', plusOne: false },
    { id: '10', name: 'Erica Edwards', plusOne: true },
    { id: '11', name: 'Hayden McKnight', plusOne: true },
    { id: '12', name: 'Janet Basaraba', plusOne: true },
    { id: '13', name: 'John Placeholder', plusOne: false },
    { id: '14', name: 'Josh Armstrong', plusOne: false },
    { id: '15', name: 'Justin Basaraba', plusOne: true },
    { id: '16', name: 'Katelyn Basaraba', plusOne: false },
    { id: '17', name: 'Katherine Basaraba', plusOne: false },
    { id: '18', name: 'Kennedy Basaraba-Hoyte', plusOne: true },
    { id: '19', name: 'Kevin Choffe', plusOne: false },
    { id: '20', name: 'Myranda Ruel', plusOne: false },
    { id: '21', name: 'Patrick Foley', plusOne: false },
    { id: '22', name: 'Patrick Kye Foley', plusOne: false },
    { id: '23', name: 'Rebecca Molyneaux', plusOne: false },
    { id: '24', name: 'Richard Winter', plusOne: false },
    { id: '25', name: 'Stephanie Winter', plusOne: false },
    { id: '26', name: 'Tracy Basaraba', plusOne: false },
    { id: '27', name: 'Trishauna Hyatt', plusOne: true },
    { id: '28', name: 'Tyler Street', plusOne: false },
    { id: '29', name: 'Victoria Kalonomos', plusOne: false },
    { id: '30', name: 'Zack Cameron Hackett', plusOne: false },
    { id: '31', name: 'Zach McCracken', plusOne: false },
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