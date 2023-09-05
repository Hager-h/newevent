import "./Nav.css"
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Nav({isScrolled,handleScroll}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
 


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    toggleMenu();
  };
 

  return (
    <div className={`header ${isScrolled ? 'active' : ''}`}>
    
     <div id="logo">
        <span className="new">NEW</span><span>EVENT</span>
      </div>
      <div className="mobile" onClick={toggleMenu}>
        <i id="open-id">{<FaBars />}</i>
      </div>
      <div className={`all-link ${isOpen ? 'active' : ''}`}>
        <div className="ulLinks">
          <i className=" close" onClick={toggleMenu}>
            {<AiOutlineClose />}
          </i>
          <ul>
            <li>
              <Link
                className={activeLink === '/' ? 'active' : ''}
                to="/"
                onClick={() => handleLinkClick('/')}
              >
                INTRO
              </Link>
            </li>
            <li>
              <Link
                className={activeLink === '/Overview' ? 'active' : ''}
                to="/Overview"
                onClick={() => handleLinkClick('/Overview')}
              >
                OVERVIEW
              </Link>
            </li>
            <li>
              <Link
                className={activeLink === '/Speakers' ? 'active' : ''}
                to="/Speakers"
                onClick={() => handleLinkClick('/Speakers')}
              >
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link
                className={activeLink === '/PROGRAMS' ? 'active' : ''}
                to="/PROGRAMS"
                onClick={() => handleLinkClick('/PROGRAMS')}
              >
                PROGRAMS
              </Link>
            </li>
            <li>
              <Link
                className={activeLink === '/REGISTER' ? 'active' : ''}
                to="/REGISTER"
                onClick={() => handleLinkClick('/REGISTER')}
              >
                REGISTER
              </Link>
            </li>
            <li>
              <Link
                className={activeLink === '/VENUE' ? 'active' : ''}
                to="/VENUE"
                onClick={() => handleLinkClick('/VENUE')}
              >
                VENUE
              </Link>
            </li>
            <li>
              <Link
                className={activeLink === '/SPONSORS' ? 'active' : ''}
                to="/SPONSORS"
                onClick={() => handleLinkClick('/SPONSORS')}
              >
                SPONSORS
              </Link>
            </li>
            <li>
              <Link
                className={activeLink === '/Contact' ? 'active' : ''}
                to="/Contact"
                onClick={() => handleLinkClick('/Contact')}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
      

    </div>
  );
}