import React, { useState } from 'react';
import useWindowSize from '../utils/useWindowState.js';
import ActionButton from './ActionButton.jsx';
import leftFlower from '../assets/leftFlower.jpg';
import rightFlower from '../assets/rightFlower.jpg';

export default function Navbar() {
  const routes = [
    { id: '01', path: '/home', name: 'Home' },
    { id: '02', path: '/ourStory', name: 'Our Story' },
    // { id: '03', path: '/placesToStay', name: 'Places to Stay' },
    { id: '04', path: '/gifts', name: 'Wedding Gifts' },
    { id: '05', path: '/musicRequests', name: 'Music Requests' },
    { id: '06', path: '/FAQ', name: 'FAQ' },
    { id: '07', path: '/RSVP', name: 'RSVP' }
  ];

  const { width, height } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <div className='navbar'>
      <img src={leftFlower} alt='flower' className='leftFlower'/>
      <img src={rightFlower} alt='flower' className='rightFlower'/>
      <div className='navbarContent'>
        <h2 className='navbarName'>
          <span>Kyra <span className='smallerFont'>&</span> Aiden</span>
        </h2>

        { width <= 750 && 
          <div className='mobileMenuButtonContainer'>
            <button onClick={() => toggleMenu()} className='mobileMenuButton'>☰</button>
          </div>
        }
      </div>

      <h2 className='navBarInfo'>September 20, 2025 • Perth, ON</h2>

      { width <= 750
        ? <div className={`mobileMenu ${isMenuOpen ? 'mobileMenuOpen' : ''}`}>
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
        : <div className='navButtons'>
          { routes.map(route => (
            <ActionButton
              key={route.id}
              id={route.id} 
              path={route.path} 
              name={route.name}
            />
          ))}
        </div>
      }
    </div>
  );
}