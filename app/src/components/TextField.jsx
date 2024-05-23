import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextField({ id, label, name, type = 'input', value, required = true, handleChange }) {
  TextField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired
  };
  
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const commonProps = {
    name: name,
    value: value,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onChange: handleChange,
    required: required,
  };

  return (
    <div key={id} className='textField'>
      <label>{label}</label>
      
      { type === 'input'
        ? <input {...commonProps}></input>
        : <textarea {...commonProps}></textarea>
      }
    </div>
  );
}