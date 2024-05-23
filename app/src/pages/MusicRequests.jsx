import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import TextField from '../components/TextField.jsx';

export default function MusicRequests() {
  const attendees = [
    { id: '00', name: '--', plusOne: true },
    { id: '01', name: 'Bryan Molyneaux', plusOne: false },
    { id: '02', name: 'Carl Molyneaux', plusOne: false },
    { id: '03', name: 'Dakotah Molyneaux', plusOne: false },
    { id: '04', name: 'Trishauna Hyatt', plusOne: true },
    { id: '05', name: 'Rebecca Molyneaux', plusOne: false },
  ];

  const [formData, setFormData] = useState({
    name: '',
    songTitle: '',
    artistName: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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
          <div className='rsvpSection'>
            <label>Who are you?</label>
            <select name="name" className='rsvpSelect' value={formData.name} onChange={handleChange}>
              {attendees.map((attendee, index) => (
                <option key={index} value={attendee.name}>
                  {attendee.name}
                </option>
              ))}
            </select>
          </div>
          
          <TextField 
            id='01' 
            label='Title of Song' 
            name='songTitle' 
            value={formData.songTitle}
            handleChange={handleChange}
          />

          <TextField 
            id='02' 
            label='Name of Artist, Group, or Band' 
            name='artistName' 
            value={formData.artistName}
            handleChange={handleChange}
          />
          
          <button type='submit' disabled={isLoading} className="rsvpSubmit">
            {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Send music request'}
          </button>
        </> }
        
        <input type="hidden" name="_captcha" value="false"/>
      </form>
    </div>
  );
}