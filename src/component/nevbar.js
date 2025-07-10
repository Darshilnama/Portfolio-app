import React, { useState } from 'react';
import '../component/nevbar.css';
import logo from '../asset/istockphoto-1414307310-612x612.png';
import { Link } from 'react-scroll';
import contact from '../asset/contact-icon-png-4071.png';
import menu from '../asset/menu-icon-19347.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} className='logo' alt="logo" />
      
      {/* Desktop Navigation */}
      <div className='desktop-nav'>
        <div className='nav-link'>
          <Link 
            activeClass='active-nav-item' 
            to='intro' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500} 
            className='nav-links-item'
          >
            Home
          </Link>
          <Link 
            activeClass='active-nav-item' 
            to='about' 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={500} 
            className='nav-links-item'
          >
            About
          </Link>
          <Link 
            activeClass='active-nav-item' 
            to='project' 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={500} 
            className='nav-links-item'
          >
            Projects
          </Link>
          <Link 
            activeClass='active-nav-item' 
            to='social' 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={500} 
            className='nav-links-item'
          >
            Socials
          </Link>
        </div>
      </div>

      <button className='btn' onClick={() => {
        document.getElementById("contactpage").scrollIntoView({behavior: 'smooth'});
      }}>
        <div className='image'>
          <img src={contact} alt='Contact Me' className='btnImg'/>
          Contact Me
        </div>
      </button>

      {/* Mobile Menu Toggle */}
      <img 
        src={menu} 
        alt='menu' 
        className='mobMenu' 
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Mobile Navigation */}
      <div className={`navmenu ${showMenu ? 'active' : ''}`}>
        <Link 
          activeClass='active-mobile-item' 
          to='intro' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className='menu-item' 
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link 
          activeClass='active-mobile-item' 
          to='about' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className='menu-item' 
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link 
          activeClass='active-mobile-item' 
          to='project' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className='menu-item' 
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link 
          activeClass='active-mobile-item' 
          to='social' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className='menu-item' 
          onClick={() => setShowMenu(false)}
        >
          Socials
        </Link>
        <Link 
          activeClass='active-mobile-item' 
          to='contactpage' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className='menu-item' 
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;