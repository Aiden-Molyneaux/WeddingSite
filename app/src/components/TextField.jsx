import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextField({ id, label, name, type, value, handleChange }) {
  TextField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  };
  
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const commonProps = {
    name: name,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onChange: handleChange,
    required: true,
  };

  return (
    <div key={id} className='textField'>
      <label className='labelText'>{label}</label>
      
      { type === 'input'
        ? <input {...commonProps}></input>
        : <textarea {...commonProps}></textarea>
      }
    </div>
  );
}