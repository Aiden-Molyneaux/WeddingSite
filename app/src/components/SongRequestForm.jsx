import React, { useState }  from 'react';
import TextField from '../components/TextField.jsx';

export default function SongRequestForm({ songId }) {
  const [formData, setFormData] = useState({
    songTitle: '',
    artistName: ''
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div className='topMargin songRequestForm topBorder'>
      <TextField 
        id='01' 
        label={`Title of Song #${songId+1}`} 
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
    </div>
  );
}