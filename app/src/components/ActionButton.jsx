import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ActionButton({ id, path, name, toggleMenu, supportMobile}) {
  ActionButton.propTypes = {
    id: PropTypes.string.isRequired,
    path: PropTypes.string,
    name: PropTypes.string.isRequired,
    toggleMenu: PropTypes.func,
    supportMobile: PropTypes.object
  };

  const location = JSON.parse(window.localStorage.getItem('location'));

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const location = JSON.parse(window.localStorage.getItem('location'));

    setIsClicked(location && location.path === path);
  }, [location]);

  function handleClick() {
    setLocation();
    toggleMenu && toggleMenu();
  }

  function setLocation() {
    window.localStorage.setItem('location', JSON.stringify({ path: path }));
  }

  function getClassName() {
    if (isHovered || isClicked) return 'actionButtonClicked actionButtonText';
    return 'actionButtonText';
  }

  return (
    <div key={id} className='actionButton'>  
      <Link 
        to={path} 
        onClick={() => handleClick()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        { supportMobile && window.innerWidth <= 450 
          ? <span className={getClassName()}>{supportMobile.name1} <br/> {supportMobile.name2}</span>
          : <span className={getClassName()}>{name}</span> 
        }
      </Link>
    </div>
  );
}