import React from 'react';
import TextField from '../components/TextField.jsx';

export default function SongRequestForm({ songId, songData, handleSongChange }) {
  
  function handleChange(event) {
    const { name, value } = event.target;
    handleSongChange(songId, name, value); // Call the parent's function to update song data
  }

  return (
    <div className='topMargin songRequestForm topBorder'>
      <TextField 
        id='01' 
        label={`Title of Song #${songId + 1}`} 
        name='songTitle' 
        value={songData.songTitle}
        handleChange={handleChange}
      />

      <TextField 
        id='02' 
        label='Name of Artist, Group, or Band' 
        name='artistName' 
        value={songData.artistName}
        handleChange={handleChange}
      />
    </div>
  );
}