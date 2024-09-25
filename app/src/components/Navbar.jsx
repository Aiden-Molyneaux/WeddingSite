import React, { useState } from 'react';
import useWindowSize from '../utils/useWindowState.js';
import ActionButton from './ActionButton.jsx';
import leftFlower from '../assets/leftFlower.jpg';
import rightFlower from '../assets/rightFlower.jpg';
import NavbarMobile from './NavbarMobile.jsx';

export default function Navbar() {
  const routes = [
    { id: '01', path: '/home', name: 'Home' },
    { id: '02', path: '/ourStory', name: 'Our Story' },
    { id: '03', path: '/gifts', name: 'Wedding Gifts' },
    { id: '04', path: '/musicRequests', name: 'Music Requests' },
    { id: '05', path: '/FAQ', name: 'FAQ' },
    { id: '06', path: '/RSVP', name: 'RSVP' }
  ];

  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const NavbarDesktop = () => (
    <div className='navbar'>
      <div className='navbarContent'>
        <h2 className='navbarName'>
          <span>Kyra <span className='smallerFont'>&</span> Aiden</span>
        </h2>
      </div>

      <h2 className='navBarInfo'>September 20, 2025 • Perth, ON</h2>

      <div className='navButtons'>
        { routes.map(route => (
          <ActionButton
            key={route.id}
            id={route.id} 
            path={route.path} 
            name={route.name}
          />
        ))}
      </div>
    </div>
  );
  
  return ( 
    width <= 750  
      ? <NavbarMobile routes={routes} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      : <NavbarDesktop/>
  );
}