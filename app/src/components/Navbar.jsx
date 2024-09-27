import React, { useState } from 'react';
import useIsMobile from '../utils/useIsMobile.js';
import ActionButton from './ActionButton.jsx';

export default function Navbar() {
  const routes = [
    { id: '01', path: '/home', name: 'Home' },
    { id: '02', path: '/ourStory', name: 'Our Story' },
    { id: '03', path: '/gifts', name: 'Wedding Gifts' },
    { id: '04', path: '/musicRequests', name: 'Music Requests' },
    { id: '05', path: '/FAQ', name: 'FAQ' },
    { id: '06', path: '/RSVP', name: 'RSVP' }
  ];

  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const RouteButtons = () => (
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
      { isMobile && <button onClick={toggleMenu} className='mobileMenuExitButton'>×</button>}
    </div>
  );

  const MobileRouteButtons = () => (
    <div className={`mobileMenu ${isMenuOpen ? 'mobileMenuOpen' : ''}`}>
      <RouteButtons/>
    </div>
  );

  const MobileMenuButton = () => (
    <div className='mobileMenuButtonContainer'>
      <button onClick={() => toggleMenu()} className='mobileMenuButton'>☰</button>
    </div>
  );
  
  return (
    <div className='navbar'>
      <div className='navbarContent'>
        <h2 className='navbarName'>
          <span>Kyra <span className='smallerFont'>&</span> Aiden</span>
        </h2>

        { isMobile && <MobileMenuButton/>}
      </div>

      { !isMobile && <h2 className='navBarInfo'>September 20, 2025 • Perth, ON</h2> }

      { isMobile ? <MobileRouteButtons/> : <RouteButtons/> }
    </div>
  );
}