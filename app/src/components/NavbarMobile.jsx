import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton.jsx';
import leftFlower from '../assets/leftFlower.jpg';
import rightFlower from '../assets/rightFlower.jpg';

export default function NavbarMobile({routes, isMenuOpen, toggleMenu}) {
  NavbarMobile.propTypes = {
    routes: PropTypes.array.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
  };

  return (
    <div className='navbar'>
      <img src={leftFlower} alt='flower' className='leftFlower'/>
      <img src={rightFlower} alt='flower' className='rightFlower'/>
      <div className='navbarContent'>
        <h2 className='navbarName'>
          <span>Kyra <span className='smallerFont'>+</span> Aiden</span>
        </h2>
 
        <div className='mobileMenuButtonContainer'>
          <button onClick={() => toggleMenu()} className='mobileMenuButton'>☰</button>
        </div>

      </div>

      <div className={`mobileMenu ${isMenuOpen ? 'mobileMenuOpen' : ''}`}>
        <div className='navButtons'>
          { routes.map(route => (
            <ActionButton
              key={route.id}
              id={route.id} 
              path={route.path} 
              name={route.name}
              toggleMenu={toggleMenu}
            />
          ))}
          <button onClick={toggleMenu} className='mobileMenuExitButton'>×</button>
        </div>
      </div>
    </div>
  );
}