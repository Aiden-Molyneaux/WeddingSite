import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton.jsx';

export default function NavbarMobile({routes, isMenuOpen, toggleMenu}) {
  NavbarMobile.propTypes = {
    routes: PropTypes.array.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
  };

  return (
    <div className='navbar'>
      <div className='navbarContent'>
        <h2 className={`navbarName ${isMenuOpen ? 'menuOpenedNameChange' : ''}`}>
          <span className=''>Kyra <span className='smallerFont'>+</span> Aiden</span>
        </h2>
 
        <div className='mobileMenuButtonContainer'>
          <button onClick={() => toggleMenu()} className={`mobileMenuButton ${isMenuOpen ? 'menuOpenedNameChange' : ''}`}>☰</button>
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